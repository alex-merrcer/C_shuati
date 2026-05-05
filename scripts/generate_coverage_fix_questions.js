const fs = require('fs')
const path = require('path')

const rootDir = path.join(__dirname, '..')
const treePath = path.join(rootDir, '嵌入式C语言知识树.md')
const outPath = path.join(rootDir, 'data', 'chapters', '21-coverage-fix.js')
const entryPath = path.join(rootDir, 'data', 'questions.js')
const questions = require(path.join(rootDir, 'data', 'questions'))

function stripNumber(text) {
  return text.replace(/^\s*\d+(\.\d+)*\s*/, '').trim()
}

function normalize(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[ \t\r\n"'`*_#\-—–:：,，.。;；()（）[\]【】{}<>《》/\\|]/g, '')
    .replace(/相关|基础|常见|问题|操作|判断|区别|使用|应用|处理|计算|访问|定义|特性|机制|规则/g, '')
}

function parseKnowledgeTree(content) {
  const lines = content.split(/\r?\n/)
  const leaves = []
  let currentChapter = ''
  let currentSection = ''

  lines.forEach(function (line) {
    if (/^#\s+/.test(line)) {
      currentChapter = stripNumber(line.replace(/^#\s+/, '').trim())
      currentSection = ''
      return
    }

    if (/^##\s+/.test(line)) {
      currentSection = stripNumber(line.replace(/^##\s+/, '').trim())
      return
    }

    if (/^###\s+/.test(line)) {
      leaves.push({
        raw: line.replace(/^###\s+/, '').trim(),
        title: stripNumber(line.replace(/^###\s+/, '').trim()),
        chapter: currentChapter,
        section: currentSection
      })
    }
  })

  return leaves
}

function getQuestionCorpus(question) {
  return normalize([
    question.chapter,
    question.topic,
    question.question,
    question.explanation,
    Array.isArray(question.tags) ? question.tags.join(' ') : '',
    Array.isArray(question.options) ? question.options.join(' ') : ''
  ].join(' '))
}

function isLeafCovered(leaf, corpuses) {
  const leafText = normalize(leaf.title)
  const sectionText = normalize(leaf.section)

  if (!leafText) {
    return false
  }

  return corpuses.some(function (corpus) {
    if (corpus.indexOf(leafText) !== -1) {
      return true
    }

    if (leafText.length >= 4 && corpus.indexOf(leafText.slice(0, 4)) !== -1 && corpus.indexOf(sectionText) !== -1) {
      return true
    }

    if (sectionText && corpus.indexOf(sectionText) !== -1 && leafText.indexOf(sectionText) !== -1) {
      return true
    }

    return false
  })
}

function getMaxQuestionId() {
  return questions.reduce(function (max, question) {
    const match = /^c(\d+)$/.exec(question.id)
    const value = match ? Number(match[1]) : 0
    return value > max ? value : max
  }, 0)
}

function getDifficulty(leaf, index) {
  if (leaf.chapter.indexOf('未定义行为') !== -1 || leaf.title.indexOf('越界') !== -1 || leaf.title.indexOf('溢出') !== -1 || leaf.title.indexOf('陷阱') !== -1) {
    return '易错'
  }

  if (leaf.chapter.indexOf('面试') !== -1 || leaf.chapter.indexOf('编译') !== -1 || leaf.chapter.indexOf('硬件') !== -1) {
    return '面试'
  }

  return index % 2 === 0 ? '进阶' : '基础'
}

function getTags(leaf) {
  const tags = [leaf.section, leaf.title, '覆盖补盲', '质量修复']

  if (leaf.chapter.indexOf('数据结构') !== -1 || leaf.chapter.indexOf('排序') !== -1) {
    tags.push('数据结构')
  }

  if (leaf.chapter.indexOf('未定义行为') !== -1 || leaf.title.indexOf('越界') !== -1 || leaf.title.indexOf('解引用') !== -1) {
    tags.push('陷阱题')
  }

  return tags
}

function codeSnippetFor(leaf) {
  const title = leaf.title

  if (leaf.chapter.indexOf('指针') !== -1 || title.indexOf('指针') !== -1) {
    return 'int value = 10;\nint *p = &value;\nint **pp = &p;\n/* 现在要围绕 ' + title + ' 做代码审查 */'
  }

  if (leaf.chapter.indexOf('数组') !== -1 || title.indexOf('数组') !== -1 || title.indexOf('字符串') !== -1) {
    return 'char buf[8];\nconst char *src = "embedded";\n/* 现在要围绕 ' + title + ' 判断容量和边界 */'
  }

  if (leaf.chapter.indexOf('位运算') !== -1 || title.indexOf('位') !== -1 || title.indexOf('掩码') !== -1) {
    return 'uint32_t reg = 0;\nuint32_t mask = 1u << 5;\n/* 现在要围绕 ' + title + ' 修改或读取寄存器位 */'
  }

  if (leaf.chapter.indexOf('结构体') !== -1 || title.indexOf('结构体') !== -1 || title.indexOf('共用体') !== -1) {
    return 'struct Packet {\n    uint8_t type;\n    uint32_t length;\n};\n/* 现在要围绕 ' + title + ' 做布局或拷贝判断 */'
  }

  if (leaf.chapter.indexOf('内存') !== -1 || title.indexOf('堆') !== -1 || title.indexOf('栈') !== -1 || title.indexOf('段') !== -1) {
    return 'static uint32_t counter;\nuint8_t *buf = malloc(64);\n/* 现在要围绕 ' + title + ' 判断存储期和释放路径 */'
  }

  if (leaf.chapter.indexOf('中断') !== -1 || title.indexOf('中断') !== -1 || title.indexOf('原子') !== -1) {
    return 'volatile uint32_t flag;\nvoid ISR_Handler(void) {\n    flag++;\n}\n/* 现在要围绕 ' + title + ' 判断并发风险 */'
  }

  if (leaf.chapter.indexOf('数据结构') !== -1 || title.indexOf('链表') !== -1 || title.indexOf('队列') !== -1 || title.indexOf('栈') !== -1) {
    return 'typedef struct Node {\n    int value;\n    struct Node *next;\n} Node;\n/* 现在要围绕 ' + title + ' 检查指针维护 */'
  }

  if (leaf.chapter.indexOf('排序') !== -1 || title.indexOf('排序') !== -1) {
    return 'void sort(int *a, size_t n) {\n    /* 现在要围绕 ' + title + ' 检查边界和复杂度 */\n}'
  }

  if (leaf.chapter.indexOf('寄存器') !== -1 || leaf.chapter.indexOf('硬件') !== -1) {
    return '#define REG32(addr) (*(volatile uint32_t *)(addr))\n/* 现在要围绕 ' + title + ' 检查寄存器访问语义 */'
  }

  return 'int status = 0;\n/* 现在要围绕 ' + title + ' 做 C 代码审查 */'
}

function answerFor(leaf, kind) {
  if (kind === 'code') {
    return '先确认这段代码是否真正满足「' + leaf.title + '」的边界条件，再判断类型、生命周期和平台约束是否匹配'
  }

  return '把「' + leaf.title + '」写成明确的接口约定或测试用例，避免依赖隐含假设'
}

function explanationFor(leaf, kind) {
  const base = '「' + leaf.title + '」属于「' + leaf.chapter + ' / ' + leaf.section + '」中的具体知识点。'

  if (kind === 'code') {
    return base + ' 代码阅读题不能只看语法是否能编译，还要检查对象是否有效、容量是否足够、访问宽度是否符合平台要求，以及失败路径是否被处理。'
  }

  return base + ' 设计或审查这类代码时，要把输入范围、所有权、存储期、并发上下文和平台差异写清楚；这些信息不明确时，后续维护很容易产生隐藏缺陷。'
}

function wrongOptionsFor(leaf, kind) {
  const title = leaf.title

  if (kind === 'code') {
    return [
      '只要这段代码能通过编译，就可以认为「' + title + '」已经处理正确',
      '优先删除边界检查，让代码更短，后续靠测试输出判断是否正确',
      '使用强制类型转换可以自动修复「' + title + '」相关的生命周期、对齐和容量问题'
    ]
  }

  return [
    '把「' + title + '」留给调用者凭经验处理，不需要在接口中说明',
    '只验证一组正常输入即可覆盖「' + title + '」的所有风险',
    '为了减少代码量，可以忽略「' + title + '」在不同编译器和 MCU 上的差异'
  ]
}

const designPrompts = [
  '针对 {title} 这个知识点设计嵌入式 C 接口时，哪项约定最应该写清楚？',
  '把 {title} 放进单元测试清单时，哪类边界最值得优先覆盖？',
  '如果代码审查目标是 {title}，哪项处理最能减少后续维护风险？',
  '围绕 {title} 制定团队编码规范时，哪条规则更适合落地？',
  '调试 {title} 相关问题时，哪种信息最应该先确认？',
  '在资源受限 MCU 中处理 {title}，哪项策略更稳妥？',
  '为 {title} 编写驱动层代码时，哪项假设最不应该省略？',
  '复盘一次 {title} 相关缺陷时，哪项结论最有工程价值？'
]

function containsAny(text, words) {
  return words.some(function (word) {
    return text.indexOf(word) !== -1
  })
}

function scenario(code, correct, wrong, explanation) {
  return {
    code: code,
    correct: correct,
    wrong: wrong,
    explanation: explanation
  }
}

function defaultWrongOptions(title) {
  return [
    '只要这段代码能通过编译，就可以认为「' + title + '」已经处理正确',
    '优先删掉边界检查，让代码更短，后续靠测试输出判断是否正确',
    '使用强制类型转换可以自动修复「' + title + '」相关的生命周期、对齐和容量问题'
  ]
}

function scenarioFor(leaf) {
  const title = leaf.title
  const chapter = leaf.chapter
  const text = leaf.chapter + ' ' + leaf.section + ' ' + leaf.title
  const base = '「' + title + '」属于「' + leaf.chapter + ' / ' + leaf.section + '」中的具体知识点。'

  if (containsAny(text, ['字符串', 'strcpy', 'string.h'])) {
    return scenario(
      'char name[8];\nconst char *src = "stm32-driver";\nstrcpy(name, src);\nuse_name(name);',
      '目标数组容量不足，strcpy 不检查边界，应改为带容量检查的复制策略并保证结尾 0',
      [
        '字符串字面量在只读区，所以复制到数组时不会发生越界',
        '只要 name 是局部数组，strcpy 会自动截断多余字符',
        '把 name 强制转换为 char * 就能让数组容量变大'
      ],
      base + ' 这段代码的风险不是输出结果，而是复制长度超过 8 字节后破坏相邻栈数据；嵌入式代码更应显式传入容量并检查失败路径。'
    )
  }

  if (containsAny(text, ['数组', 'sizeof数组参数', '数组名退化', '容量'])) {
    return scenario(
      'void clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);',
      '函数形参数组会调整为指针，sizeof(buf) 得到的是指针大小，不是调用者数组容量',
      [
        '形参写成 buf[16] 后，sizeof(buf) 一定等于 16',
        'memset 会根据实参数组自动推断要清零的字节数',
        '把 buf 改成 void * 后 sizeof(buf) 就会得到数组长度'
      ],
      base + ' 数组传参是 C 语言高频陷阱，接口应额外传入长度，不能在被调函数里靠 sizeof 还原调用者数组容量。'
    )
  }

  if (containsAny(text, ['指针越界', '指针加减', '指针访问数组', '指针与一维数组'])) {
    return scenario(
      'uint8_t frame[8];\nuint8_t *p = frame;\nfor (int i = 0; i <= 8; ++i) {\n    p[i] = 0;\n}',
      '循环条件写成 i <= 8 会访问 frame[8]，已经越过数组末尾',
      [
        '数组下标从 1 开始，所以 i <= 8 正好写 8 个元素',
        'p 是指针，指针下标访问不会受数组边界限制',
        'uint8_t 元素很小，越界 1 字节不会影响程序行为'
      ],
      base + ' 指针下标和数组下标一样要受对象边界约束，越界写可能破坏栈、协议缓存或外设控制数据。'
    )
  }

  if (containsAny(text, ['void指针', '通用接口'])) {
    return scenario(
      'void *ctx = get_context();\nctx->state = 1;',
      'void * 没有目标对象类型，不能直接通过 -> 或 * 解引用，必须先转换为正确的结构体指针',
      [
        'void * 会自动记录原始结构体类型，所以可以直接访问成员',
        '只要 ctx 不是 NULL，就可以直接使用 ctx->state',
        '把 ctx 转成整数再转回指针可以绕过类型检查并保证安全'
      ],
      base + ' 通用接口只保存地址，不保存对象布局；使用前要由接口约定保证类型、大小、对齐和生命周期都匹配。'
    )
  }

  if (containsAny(text, ['输出参数', '指针传递', '输入输出参数', '指向指针'])) {
    return scenario(
      'int driver_read(uint8_t *out, size_t len) {\n    if (len == 0) {\n        return -1;\n    }\n    out[0] = read_reg8();\n    return 0;\n}',
      '函数写输出参数前没有检查 out 是否为 NULL，失败路径也没有明确输出值状态',
      [
        'len 已经检查过，所以 out 不可能为 NULL',
        '输出参数只要由调用者传入，就不需要被调函数再检查',
        '返回 -1 后编译器会自动撤销对 out 的写入'
      ],
      base + ' 输出参数要同时约定空指针、容量和失败时状态，否则驱动接口很容易在异常路径解引用空指针。'
    )
  }

  if (containsAny(text, ['函数指针', '返回指针函数', '钩子函数', 'hook', '指向返回指针函数的指针'])) {
    return scenario(
      'int *get_value(void);\n\nvoid init_hook(void) {\n    int *fp(void);\n    fp = get_value;\n}',
      'int *fp(void) 声明的是返回 int * 的函数，不是函数指针变量；函数指针应写成 int *(*fp)(void)',
      [
        '只要声明里出现 *fp，就一定是函数指针变量',
        '函数名和函数指针可以随意赋值，不需要签名匹配',
        '把 get_value 强制转换为 void * 后再赋值会更安全'
      ],
      base + ' 函数指针声明要靠括号确定结合关系，回调和 hook 接口还必须保持参数、返回值和调用上下文一致。'
    )
  }

  if (containsAny(text, ['weak', '弱函数'])) {
    return scenario(
      '/* 默认钩子，使用的 weak 语法属于具体编译器扩展 */\n__attribute__((weak)) void board_hook(void) {\n}\n\nint board_hook(int code) {\n    return code;\n}',
      '强定义和 weak 默认实现的函数签名不一致，不能认为它正确覆盖了默认钩子',
      [
        'weak 函数被覆盖时，参数和返回值可以随意改变',
        '只要函数名相同，链接器一定能把两种签名安全合并',
        'weak 是 C 标准关键字，所以所有编译器行为完全一致'
      ],
      base + ' weak 通常是编译器或链接器扩展，适合做默认钩子，但项目必须明确工具链支持、符号名和函数签名约定。'
    )
  }

  if (containsAny(text, ['volatile', '内存映射IO', '外设基地址', '寄存器', '状态标志', '时钟使能', '中断使能', '标志位清除', '配置寄存器字段'])) {
    return scenario(
      '#define UART_SR (*(uint32_t *)0x40011000u)\n\nwhile ((UART_SR & (1u << 5)) == 0u) {\n}\n',
      '内存映射寄存器应通过 volatile 限定访问，否则编译器可能缓存读取结果',
      [
        '寄存器地址是常量，所以不需要 volatile',
        'while 循环中重复读取同一个表达式，编译器一定会每次访问硬件',
        '把地址写成 unsigned long 可以替代 volatile 语义'
      ],
      base + ' 访问硬件寄存器时，volatile 表达的是每次读写都要真实发生；它不等于原子性，也不能替代手册中的访问宽度和清标志规则。'
    )
  }

  if (containsAny(text, ['位', '掩码', '移位', '校验和', 'CRC', '大小端'])) {
    return scenario(
      'uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}',
      'n 必须限制在目标类型位宽以内；移位位数过大或等于位宽会产生问题',
      [
        'unsigned int 参与移位时，任意 n 都会自动取模',
        '左移只影响性能，不影响 C 语言语义',
        '只要返回类型是 uint32_t，1u << n 就一定有 32 位宽'
      ],
      base + ' 位操作题要先检查操作数类型和位数范围，再谈寄存器语义；掩码构造尤其不能依赖平台碰巧表现。'
    )
  }

  if (containsAny(text, ['结构体', '对齐', '填充', '字节序', 'Flash数据解析', '半字访问'])) {
    return scenario(
      'struct Header {\n    uint8_t type;\n    uint32_t length;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));',
      '直接按结构体布局解析外部数据会受填充字节、对齐和字节序影响',
      [
        '结构体成员在所有编译器上都紧密排列，没有填充字节',
        'memcpy 到结构体后，字节序会被 C 语言自动转换',
        '只要使用 uint32_t，未对齐访问就一定安全'
      ],
      base + ' 外部协议、Flash 记录和寄存器数据更适合按字节显式解析，结构体布局只能在受控 ABI 和对齐约定下使用。'
    )
  }

  if (containsAny(text, ['malloc', 'free', '动态内存', '堆heap', '内存泄漏', '内存碎片', 'stdlib.h', 'malloc不可控'])) {
    return scenario(
      'uint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);',
      'malloc 返回值没有检查，分配失败时 read_packet 会解引用空指针',
      [
        'malloc 在 MCU 上失败会自动复位，因此不用检查',
        'read_packet 会自动判断 buf 是否来自 malloc',
        'free(buf) 写在后面就能保证前面的访问一定安全'
      ],
      base + ' 动态内存在嵌入式中要特别关注失败、碎片、所有权和释放路径；长期运行任务中小泄漏也会逐步耗尽堆。'
    )
  }

  if (containsAny(text, ['栈', '栈帧', '栈占用', '递归', '局部数组'])) {
    return scenario(
      'void task_loop(void) {\n    uint8_t frame_buffer[4096];\n    parse_frame(frame_buffer, sizeof(frame_buffer));\n}',
      '在任务函数中放过大的局部数组会显著增加栈占用，应评估最坏路径或改用静态/池化缓冲',
      [
        '局部数组一定分配在 Flash 中，不占任务栈',
        'sizeof 能通过编译就说明栈空间一定足够',
        '栈溢出会被 C 语言标准自动捕获并返回错误码'
      ],
      base + ' 裸机和 RTOS 任务栈通常很有限，代码审查要结合调用深度、中断嵌套和 map/栈水位信息。'
    )
  }

  if (containsAny(text, ['中断', 'ISR', '原子', '共享', '关中断', '内存屏障', '阻塞调用', '延时函数'])) {
    return scenario(
      'volatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf("tick\\n");\n}',
      'ISR 中执行 printf 这类可能阻塞或不可重入的调用风险很高，ticks++ 也不等同于通用原子操作',
      [
        'ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子',
        'printf 只输出一行文本，在中断中一定不会阻塞',
        'ISR 里调用函数越多，实时性通常越好'
      ],
      base + ' 中断代码要短、确定、少依赖共享状态；volatile 解决可见性，不负责互斥、原子性和最坏执行时间。'
    )
  }

  if (containsAny(text, ['头文件', '前向声明', '循环包含', '接口声明与实现分离', '头文件重复包含'])) {
    return scenario(
      '/* sensor.h */\ntypedef struct {\n    uint8_t id;\n} Sensor;\n\nvoid sensor_init(Sensor *s);\n\n/* 多个 .c 文件反复包含 sensor.h，但这里没有 include guard */',
      '头文件缺少 include guard 或等价机制，重复包含时 typedef 和声明组织容易出问题',
      [
        '每个头文件被 include 多次时，C 语言会自动跳过重复内容',
        '把实现代码也放进头文件可以顺便解决重复包含问题',
        '只要函数声明没有函数体，头文件就永远不需要保护'
      ],
      base + ' 头文件应表达稳定接口，使用 include guard 防止重复包含；复杂类型可以用前向声明减少耦合，但定义仍要放在合适的位置。'
    )
  }

  if (containsAny(text, ['宏', '#undef', '#elif', '#pragma', '头文件', '前向声明', '调试开关', '版本配置宏', 'MCU型号适配'])) {
    return scenario(
      '#define SET_BIT(reg, bit) reg |= 1u << bit\n\nif (ready)\n    SET_BIT(GPIO_CTRL, 3);\nelse\n    handle_error();',
      '函数式宏应保护参数和整体表达式，多语句宏还要避免破坏 if/else 结构',
      [
        '宏展开后编译通过就说明语义一定和函数调用相同',
        '宏参数不需要括号，C 预处理器会自动保持优先级',
        '#pragma once 可以修复所有宏副作用问题'
      ],
      base + ' 宏是文本替换，优先级、副作用和多语句展开都要靠写法约束；复杂宏应考虑 inline 函数或更清晰的接口。'
    )
  }

  if (containsAny(text, ['链接', 'ELF', 'BIN', 'HEX', '符号', '重定位', '库文件', '段加载地址', '段运行地址', '启动代码', 'map文件'])) {
    return scenario(
      '/* config.h */\nuint32_t g_mode;\n\n/* a.c */\n#include "config.h"\n\n/* b.c */\n#include "config.h"',
      '头文件中定义普通全局变量会让多个编译单元各自产生定义，容易触发重复符号链接错误',
      [
        'include guard 可以保证整个工程只生成一个 g_mode',
        '链接器会自动合并所有同名全局变量且保持语义一致',
        '把 g_mode 改成 extern 后不需要在任何 .c 文件中定义'
      ],
      base + ' 编译和链接阶段的问题要区分声明、定义、符号可见性和段放置；头文件通常放声明，唯一存储定义放在某个源文件。'
    )
  }

  if (containsAny(text, ['链表', '头指针', '头插法', '尾插法', '删除中间节点', '删除尾节点'])) {
    return scenario(
      'void delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}',
      '释放节点后又访问 victim->next，属于释放后使用，应先保存 next 再 free',
      [
        'free 后原指针仍可安全读取结构体成员，只是不能写',
        'prev->next 指向同一块内存，所以释放顺序不影响链表',
        '把 victim 声明为 static 就能避免释放后使用'
      ],
      base + ' 链表题的关键是指针更新顺序和所有权，删除节点要先保存后继，再断链和释放，且要处理空链表、头节点等边界。'
    )
  }

  if (containsAny(text, ['队列', '队空', '队满', '循环队列', '生产者消费者'])) {
    return scenario(
      'typedef struct {\n    uint8_t buf[8];\n    uint8_t head;\n    uint8_t tail;\n} Queue;\n\nint is_empty(const Queue *q) { return q->head == q->tail; }\nint is_full(const Queue *q) { return q->head == q->tail; }',
      '循环队列不能用同一个条件同时表示空和满，应空一格、记录计数或增加状态位',
      [
        'head == tail 天然既能表示空也能表示满，调用者可以自己猜',
        '数组容量是 8，所以队列最多一定能无歧义保存 8 个元素',
        '把 head 和 tail 改成 int 就能自动区分空和满'
      ],
      base + ' 队列实现要把容量、回绕、空满判定和并发访问约定清楚，嵌入式环形缓冲区尤其容易在边界处出错。'
    )
  }

  if (containsAny(text, ['堆结构', '最大堆', '最小堆', '父节点', '子节点', '下沉', '建堆', '优先队列'])) {
    return scenario(
      'size_t parent(size_t i) {\n    return i / 2;\n}\n\nsize_t left_child(size_t i) {\n    return i * 2;\n}',
      '这是 1 基堆的索引公式；若数组按 0 基存储，父子节点下标会计算错误',
      [
        '所有数组堆都使用 1 基下标，C 数组会自动跳过第 0 个元素',
        '最大堆和最小堆的父子下标公式完全不同',
        '只要比较函数正确，父子下标写错也能保持堆性质'
      ],
      base + ' 堆结构题要先确认数组下标约定，再检查上浮、下沉和删除堆顶后的边界；它和动态内存里的 heap 不是同一个概念。'
    )
  }

  if (containsAny(text, ['排序', '快速排序', '归并排序', '计数排序', '桶排序', '基数排序', '空数组', '单元素', 'RAM占用'])) {
    return scenario(
      'void quick_sort(int *a, int left, int right) {\n    int pivot = a[left];\n    /* 每次都选最左元素作为基准 */\n    partition_and_recurse(a, left, right, pivot);\n}',
      '固定选择最左元素作基准，在已排序或接近有序数据上容易退化到最坏情况',
      [
        '快速排序在任何输入上都稳定且一定是 O(n log n)',
        '基准选择只影响代码风格，不影响递归深度',
        '嵌入式场景只看平均复杂度，不需要评估栈深度'
      ],
      base + ' 排序算法题不能只背平均复杂度，还要看稳定性、额外空间、最坏情况和嵌入式 RAM/栈占用。'
    )
  }

  if (containsAny(text, ['float', 'double', '浮点'])) {
    return scenario(
      'double target = 0.3;\ndouble value = read_sensor();\nif (value == target) {\n    trigger();\n}',
      '浮点数通常不适合直接用 == 比较，应结合误差范围和传感器精度判断',
      [
        'double 比 float 精度高，所以 == 比较总是可靠',
        '只要传感器返回的是 double，就没有舍入误差',
        '把 double 强制转换为 int 后就能保留全部小数信息'
      ],
      base + ' 浮点比较要考虑表示误差、量化误差和业务容差；嵌入式中还要评估软浮点开销。'
    )
  }

  if (containsAny(text, ['运算符', '优先级', '关系', '逻辑', '赋值', '自增', '逗号', '条件运算符'])) {
    return scenario(
      'if (status & READY_MASK == 0) {\n    reset_device();\n}',
      '== 的优先级高于按位与，表达式会按 status & (READY_MASK == 0) 解析，应加括号表达真实意图',
      [
        '& 的优先级高于 ==，所以这段代码一定按预期判断 ready 位',
        '逻辑判断里使用位运算符时，编译器会自动补括号',
        '把 status 改成 unsigned 就能修复优先级问题'
      ],
      base + ' 位运算、比较和逻辑运算混用时应主动加括号，避免代码看起来像一种意思、实际解析成另一种意思。'
    )
  }

  return scenario(
    'int status = read_status();\nif (status)\n    enable_device();\n    log_status(status);',
    '这段代码缺少花括号，log_status 不受 if 控制；审查时要确认代码块边界是否符合真实意图',
    defaultWrongOptions(title),
    base + ' 真实项目里很多缺陷来自“看起来像在一个代码块里”，实际语法边界并不是那样；基础语法也要结合代码评审场景来掌握。'
  )
}

function makeQuestion(idNumber, leaf, kind, variant) {
  const codeScenario = kind === 'code' ? scenarioFor(leaf) : null
  const correct = codeScenario ? codeScenario.correct : answerFor(leaf, kind)
  const wrong = codeScenario ? codeScenario.wrong : wrongOptionsFor(leaf, kind)
  const answer = idNumber % 4
  const options = wrong.slice()
  const stem = kind === 'code'
    ? '围绕「' + leaf.title + '」阅读下面代码片段，哪项诊断最准确？\n' + codeScenario.code
    : designPrompts[(idNumber + variant) % designPrompts.length].replace('{title}', leaf.title)

  options.splice(answer, 0, correct)

  return {
    id: 'c' + String(idNumber).padStart(3, '0'),
    chapter: leaf.chapter,
    topic: leaf.title,
    difficulty: getDifficulty(leaf, variant),
    question: stem,
    options: options,
    answer: answer,
    explanation: codeScenario ? codeScenario.explanation : explanationFor(leaf, kind),
    tags: getTags(leaf)
  }
}

function writeEntryWithCoverageFix() {
  const entry = fs.readFileSync(entryPath, 'utf8')

  if (entry.indexOf("const coverageFix = require('./chapters/21-coverage-fix')") !== -1) {
    return
  }

  const withRequire = entry.replace(
    "const sortingAlgorithms = require('./chapters/20-sorting-algorithms')",
    "const sortingAlgorithms = require('./chapters/20-sorting-algorithms')\nconst coverageFix = require('./chapters/21-coverage-fix')"
  )
  const withConcat = withRequire.replace(
    '  .concat(sortingAlgorithms)',
    '  .concat(sortingAlgorithms)\n  .concat(coverageFix)'
  )

  fs.writeFileSync(entryPath, withConcat, 'utf8')
}

function run() {
  const leaves = parseKnowledgeTree(fs.readFileSync(treePath, 'utf8'))
  const corpuses = questions.map(getQuestionCorpus)
  const uncovered = leaves.filter(function (leaf) {
    return !isLeafCovered(leaf, corpuses)
  })
  const additions = []
  let nextId = getMaxQuestionId() + 1

  uncovered.forEach(function (leaf) {
    additions.push(makeQuestion(nextId, leaf, 'code', 0))
    nextId += 1
    additions.push(makeQuestion(nextId, leaf, 'design', 1))
    nextId += 1
  })

  fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(additions, null, 2) + '\n', 'utf8')
  writeEntryWithCoverageFix()
  console.log('未覆盖知识点：' + uncovered.length)
  console.log('新增覆盖补盲题：' + additions.length)
  console.log('输出文件：' + path.relative(rootDir, outPath))
}

run()

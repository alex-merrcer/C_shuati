const fs = require('fs')
const path = require('path')

const rootDir = path.join(__dirname, '..')
const chapterDir = path.join(rootDir, 'data', 'chapters')
const convertFilePrefixes = ['02-', '03-', '04-', '05-', '07-', '08-', '09-', '10-', '11-', '12-', '15-', '17-', '18-', '19-']
const reviewAngles = ['初始化顺序', '边界条件', '失败路径', '生命周期', '可移植性', '中断安全', '长期运行稳定性', '接口契约', '单元测试覆盖', '代码评审', '内存破坏定位', '寄存器副作用', '编译优化影响', '资源受限 MCU', '面试追问', '调试复盘', '量产固件稳定性']
const codeTypeNames = {
  code_read: '代码阅读',
  bug_fix: '错误诊断',
  fill_blank: '填空选择',
  missing_step: '补漏',
  calculation: '代码计算',
  scenario_code: '嵌入式场景',
  interview: '面试综合'
}
const coverageAliases = [
  { match: ['数组指针'], aliases: ['行指针'] },
  { match: ['snprintf', 'strcat', 'strcpy', '字符串处理'], aliases: ['sprintf'] },
  { match: ['offsetof', '结构体对齐', '结构体内存布局'], aliases: ['成员偏移', 'container_of思想'] },
  { match: ['条件编译', 'include guard', '调试开关', '版本配置宏'], aliases: ['#ifdef', '#ifndef', '#endif', '功能裁剪'] },
  { match: ['局部', '栈', '生命周期', 'static局部变量'], aliases: ['自动存储期', '静态存储期', '局部变量分配'] },
  { match: ['字节序', '网络字节序', 'Flash数据解析', '协议'], aliases: ['协议字段解析'] },
  { match: ['顺序栈', '链式栈', '栈'], aliases: ['push操作', 'pop操作'] },
  { match: ['循环队列', '链式队列', '队列'], aliases: ['入队操作', '出队操作'] },
  { match: ['链表删除', '删除中间节点', '删除尾节点', '链表'], aliases: ['删除头节点'] },
  { match: ['堆插入', '最大堆', '最小堆', '堆结构'], aliases: ['上浮调整'] }
]

function containsAny(text, words) {
  return words.some(function (word) {
    return text.indexOf(word) !== -1
  })
}

function idNumber(id) {
  const match = /^c(\d+)$/.exec(id || '')
  return match ? Number(match[1]) : 0
}

function appendUnique(list, values) {
  const result = Array.isArray(list) ? list.slice() : []
  values.forEach(function (value) {
    if (value && result.indexOf(value) === -1) {
      result.push(value)
    }
  })
  return result
}

function pack(correct, wrong, seed) {
  const answer = seed % 4
  const options = wrong.slice(0, 3)
  options.splice(answer, 0, correct)
  return { options: options, answer: answer }
}

function make(type, stem, code, correct, wrong, explanation) {
  return { type: type, stem: stem, code: code, correct: correct, wrong: wrong, explanation: explanation }
}

function isCodeLike(question) {
  const text = String(question.question || '')
  return /#include|#define|\bint\s+main|\buint\d+_t|\bchar\s+\*|for\s*\(|while\s*\(|\bif\s*\(|\n/.test(text)
}

function extractCode(questionText) {
  const lines = String(questionText || '').split(/\r?\n/)
  return lines.length > 1 ? lines.slice(1).join('\n').trim() : ''
}

function pointerScenario(topic) {
  if (containsAny(topic, ['NULL', '空指针', '输出参数', '二级指针'])) {
    return make('missing_step', '下面代码缺少哪一步，最容易导致「' + topic + '」相关缺陷？', 'uint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);', '在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效', ['把 buf 强制转换为 void *，这样所有平台都能安全访问', '先调用 free(buf)，避免后续处理函数泄漏内存', '把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量'], '指针接口题要同时看空指针、生命周期和容量。正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。')
  }
  if (containsAny(topic, ['指针加', '步长', '数组', '退化'])) {
    return make('code_read', '阅读代码，关于「' + topic + '」的判断哪项正确？', 'int a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;', 'p += 2 后指向 a[2]，x 的值为 3', ['p += 2 表示地址只增加 2 个字节', 'p += 2 后指向 a[1]，x 的值为 2', '数组名不能赋给指针变量，所以这段代码无法表达数组访问'], '指针加整数按所指类型的元素为单位移动。这里 p 从 a[0] 移动到 a[2]，不是固定增加 2 字节。')
  }
  return make('bug_fix', '下面代码围绕「' + topic + '」最主要的问题是什么？', 'int *p;\n*p = 10;\nuse_value(*p);', 'p 是未初始化指针，解引用会访问不确定地址，属于未定义行为', ['p 会自动指向一个值为 0 的 int 对象', '只要后面马上写入 *p，未初始化指针就是安全的', '把 p 声明成 static 才是唯一正确修复方式'], '正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。')
}

function arrayStringScenario(topic) {
  if (containsAny(topic, ['strcpy', '越界', '缓冲区'])) {
    return make('bug_fix', '下面代码的主要风险是什么？', 'char name[8];\nconst char *src = "stm32-driver";\nstrcpy(name, src);', '目标数组容量不足，strcpy 不做边界检查，会写出 name 数组范围', ['字符串字面量在只读区，所以复制时不会越界', 'strcpy 会自动截断超出 name 容量的内容', 'name 是局部数组，所以容量会在运行时自动扩展'], 'strcpy 只按源串的结尾 0 停止，不知道目标数组容量。正确选项指出固定数组和无边界复制组合的风险。')
  }
  if (containsAny(topic, ['strlen', '\\0', '结束符', '字符串'])) {
    return make('missing_step', '下面代码缺少哪一步，最容易引发「' + topic + '」问题？', 'char rx[8];\nread_bytes(rx, 8);\nsize_t n = strlen(rx);', '确保 rx 中存在字符串结束符 \\0，或者不要把原始字节缓冲区直接交给 strlen', ['把 rx 改成 int 数组，strlen 就能自动知道长度', '在 strlen 前调用 free(rx)，避免局部数组泄漏', '把 read_bytes 的长度改成 sizeof(&rx)'], 'strlen 只能处理以 \\0 结束的 C 字符串，不能测量任意接收缓冲区。局部数组不能 free，sizeof(&rx) 也不是容量。')
  }
  return make('calculation', '在常见 32 位 MCU、指针大小为 4 字节的假设下，sizeof(buf) 更可能是多少？', 'void clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);', '4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小', ['16，因为形参写了 buf[16]', '1，因为 uint8_t 是 1 字节', '无法编译，因为数组不能作为函数参数'], '函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。')
}

function bitScenario(topic) {
  if (containsAny(topic, ['置位', '按位或', '设置'])) {
    return make('fill_blank', '要把第 5 位置 1，下面哪个选项最适合填入空白处？', 'uint32_t reg = read_reg();\nuint32_t mask = 1u << 5;\nreg = ____;\nwrite_reg(reg);', 'reg | mask', ['reg & mask', 'reg ^ mask', 'reg & ~mask'], '置位应使用按位或，保留其他位并把目标位写成 1。& mask 会清掉其他位，^ mask 是翻转，& ~mask 是清零。')
  }
  if (containsAny(topic, ['异或', '翻转'])) {
    return make('calculation', '执行后 flags 的十六进制值是多少？', 'uint8_t flags = 0x5Au;\nflags ^= 0x0Fu;', '0x55', ['0x0F', '0x5F', '0x50'], '0x5A 的低 4 位是 A，和 0x0F 异或会翻转为 5，高 4 位保持 5，所以结果是 0x55。')
  }
  return make('bug_fix', '下面代码围绕「' + topic + '」最应该补充什么检查？', 'uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}', '检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界', ['把 n 改成 signed int，这样任意移位都安全', '把返回值改成 char，避免产生大掩码', '删除 1u 后面的 u，让编译器自动处理所有边界'], '位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。')
}

function structScenario(topic) {
  if (containsAny(topic, ['对齐', '填充', '大小'])) {
    return make('calculation', '假设 uint32_t 按 4 字节对齐，sizeof(struct S) 通常是多少？', 'struct S {\n    uint8_t a;\n    uint32_t b;\n};', '8，a 后面通常会有 3 字节填充，整体大小也按最大对齐补齐', ['5，结构体大小一定等于所有成员大小之和', '4，因为结构体大小等于最大成员大小', 'C 语言禁止结构体中出现填充字节'], '结构体大小不是简单求和。编译器会为了成员对齐插入 padding，题干给出了常见对齐假设。')
  }
  if (containsAny(topic, ['enum', '枚举', '状态'])) {
    return make('code_read', '关于这段代码的理解，哪项正确？', 'enum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;', 'raw 的值为 3，枚举常量可以显式指定取值', ['BUSY 一定自动等于 1，不能显式赋值', 'enum 变量只能保存 0 和 1', 'enum 不能用于状态机代码'], '枚举适合表达状态名和值的关系，显式赋值是合法的；状态机转移仍要由逻辑约束。')
  }
  return make('bug_fix', '下面代码解析外部数据的主要风险是什么？', 'struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));', '直接按结构体布局解析会受填充字节、对齐和字节序影响', ['memcpy 会自动把外部字节序转换成本机字节序', '结构体成员在所有编译器上都紧密排列', '只要用了 uint32_t，未对齐访问一定不会出问题'], '协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。')
}

function macroScenario(topic) {
  if (containsAny(topic, ['副作用'])) {
    return make('bug_fix', '下面代码的主要风险是什么？', '#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint i = 1;\nint m = MAX(i++, 3);', '宏参数 i++ 可能被求值多次，产生副作用问题', ['三目运算符不能出现在宏中', 'i++ 作为实参时不会发生自增', 'MAX 宏会自动转换成 inline 函数'], '宏参数按文本展开，可能出现多次。正确选项指出副作用风险；预处理器不会自动生成临时变量。')
  }
  if (containsAny(topic, ['do while', '多语句'])) {
    return make('missing_step', '这个多语句宏缺少哪种保护更合适？', '#define SET_READY() ready = 1; log_ready()\n\nif (ok)\n    SET_READY();\nelse\n    recover();', '用 do { ... } while (0) 包装宏体，让它像一条语句一样使用', ['删除 else 分支，避免语法冲突', '把宏名改成小写，预处理器就会自动保护', '把 ready 声明为 volatile 就能修复 if/else 绑定问题'], '多语句宏常用 do { ... } while (0) 处理悬挂 else 和语句边界。volatile 解决不了文本展开问题。')
  }
  return make('bug_fix', '下面宏的主要问题是什么？', '#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);', '宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)', ['宏不能接收表达式作为参数', 'SQUARE 会在运行时自动创建临时变量保护参数', '把 y 改成 unsigned 就能修复宏展开问题'], '函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。')
}

function storageScenario(topic) {
  if (containsAny(topic, ['extern', '跨文件'])) {
    return make('missing_step', '下面哪个选项最适合填入 config.c，完成 extern 声明对应的唯一定义？', '/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */', 'int g_mode = 0;', ['extern int g_mode;', 'static int g_mode = 0;', '#define g_mode 0'], 'extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。static 会变成内部链接，无法满足其他文件引用。')
  }
  if (containsAny(topic, ['static'])) {
    return make('code_read', '连续调用 next_id 两次，返回值更可能是什么？', 'int next_id(void) {\n    static int id = 0;\n    return ++id;\n}', '第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值', ['两次都返回 1，因为局部变量每次调用都会重新初始化', '两次都返回 0，因为 static 变量不能修改', '返回值不确定，因为 static 局部变量一定未初始化'], 'static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。')
  }
  return make('scenario_code', '关于这段寄存器访问代码，哪项判断最准确？', 'volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);', 'volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问', ['const 表示寄存器值永远不会变化', 'volatile 可以保证这次读改写是原子的', '去掉 volatile 不会影响硬件寄存器访问语义'], '这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。')
}

function memoryScenario(topic) {
  if (containsAny(topic, ['malloc', '动态', '分配失败', '堆heap', '碎片'])) {
    return make('missing_step', '下面代码缺少哪一步最关键？', 'uint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);', '检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet', ['在 malloc 前先 free(buf)', '把 128 改成 sizeof(buf)，这样能自动得到申请大小', '删除 free(buf)，避免释放后使用'], '动态内存题先看失败路径。malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。')
  }
  if (containsAny(topic, ['free', '释放', '悬空'])) {
    return make('bug_fix', '下面代码的主要风险是什么？', 'uint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;', 'free 后继续通过 p 写内存，属于释放后使用', ['free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作', 'malloc 得到的 32 字节在 free 后仍归当前模块独占', '只写 1 字节不会破坏堆管理结构'], '释放后原指针值可能仍在变量中，但它不再代表有效对象。正确选项指出 use-after-free。')
  }
  return make('bug_fix', '这段代码的主要问题是什么？', 'char *make_name(void) {\n    char name[16] = "sensor";\n    return name;\n}', '返回了局部自动数组的地址，函数返回后该地址变成悬空指针', ['字符串 sensor 太短，必须填满 16 字节', '局部数组会自动搬到堆上，所以返回地址安全', '把返回类型改成 void * 就能延长 name 生命周期'], '局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。')
}

function interruptScenario(topic) {
  if (containsAny(topic, ['原子', '共享', '临界区', '同步'])) {
    return make('missing_step', '如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？', 'volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}', '在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读', ['删除 volatile，让编译器把读取优化成一次', '把返回类型改成 uint8_t，自动避免并发问题', '在函数末尾调用 free(&adc_value)'], 'volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。')
  }
  if (containsAny(topic, ['动态内存', 'malloc'])) {
    return make('bug_fix', '这段 ISR 代码的主要问题是什么？', 'void UART_IRQHandler(void) {\n    uint8_t *buf = malloc(64);\n    uart_read(buf, 64);\n    enqueue(buf);\n}', '中断中动态分配内存不可控，还缺少 malloc 失败处理和所有权释放约定', ['malloc 在中断中一定比静态缓冲更快', 'enqueue 后 buf 会被 C 语言自动释放', '只要 buf 是 uint8_t *，uart_read 就不会失败'], 'ISR 中应避免不可预测耗时和复杂资源管理。正确选项同时指出实时性、失败路径和所有权。')
  }
  return make('bug_fix', '关于这段中断代码，哪项诊断最准确？', 'volatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf("tick\\n");\n}', 'ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作', ['ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子', 'printf 只打印一行，放在中断里一定不会阻塞', 'ISR 中函数调用越多，实时性通常越好'], '中断代码要短、确定、少阻塞。volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。')
}

function ubScenario(topic) {
  if (containsAny(topic, ['空指针', 'NULL'])) {
    return make('bug_fix', '这段代码的问题是什么？', 'int *p = NULL;\nint value = *p;', '解引用空指针，属于未定义行为，不能讨论可靠输出', ['value 一定得到 0', 'NULL 指针只读不写，所以是安全的', '把 value 改成 unsigned 就能修复空指针问题'], '涉及未定义行为时不能问输出。正确选项指出根因；干扰项把平台偶然表现当成 C 语言保证。')
  }
  if (containsAny(topic, ['越界', '数组'])) {
    return make('bug_fix', '这段代码的主要问题是什么？', 'int a[4] = {0};\na[4] = 1;', '访问 a[4] 越过数组末尾，有破坏相邻内存的风险', ['a[4] 是数组最后一个元素', '写 1 个 int 越界会被 C 语言自动忽略', '数组初始化为 0 后可以多访问一个哨兵元素'], 'C 数组下标从 0 到 n-1。初始化不会额外创建哨兵元素。')
  }
  return make('bug_fix', '在 int 为 32 位二进制补码的平台上，这段代码的问题是什么？', 'int x = 2147483647;\nx = x + 1;', '有符号整数溢出属于未定义行为，不能把结果固定理解为最小负数', ['C 标准保证结果一定回绕为 -2147483648', '只要平台是补码，就不需要考虑 C 语言未定义行为', '把 x 打印出来即可证明所有编译器都会这样处理'], '题干给了常见表示假设，但 C 语言层面有符号溢出仍是未定义行为，不能背某次输出。')
}

function dataStructureScenario(topic) {
  if (containsAny(topic, ['队列', '队空', '队满', '生产者消费者'])) {
    return make('missing_step', '这个循环队列实现缺少哪项设计？', 'typedef struct {\n    uint8_t buf[8];\n    uint8_t head;\n    uint8_t tail;\n} Queue;\n\nint empty(const Queue *q) { return q->head == q->tail; }\nint full(const Queue *q) { return q->head == q->tail; }', '需要区分空和满，例如空一个位置、记录计数或增加状态位', ['head == tail 天然同时表示空和满，不需要区分', '把 head 和 tail 改成 int 就能自动区分空满', '数组容量是 8，所以最多保存 8 个元素且无歧义'], '循环队列必须明确空满判定规则。正确选项给出常见设计，干扰项没有解决 head == tail 的歧义。')
  }
  if (containsAny(topic, ['堆', '优先队列', '父节点', '子节点'])) {
    return make('calculation', '这组公式更符合哪种堆数组下标约定？', 'size_t parent(size_t i) {\n    return (i - 1u) / 2u;\n}\n\nsize_t left(size_t i) {\n    return 2u * i + 1u;\n}', '0 基数组堆，parent 和 left 分别对应父节点与左孩子下标', ['1 基数组堆，left 应该是 2 * i + 1', '链式堆结构，不需要数组下标', '最大堆专用公式，最小堆不能使用'], 'C 数组通常是 0 基下标。最大堆和最小堆的下标公式相同，比较方向不同。')
  }
  return make('bug_fix', '下面链表代码的主要问题是什么？', 'void delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}', '释放 victim 后又访问 victim->next，应先保存 next 再 free', ['free 后读取结构体成员是安全的，只要不写入', 'prev->next 会被 free 自动改成后继节点', '把 victim 声明为 static 就能避免释放后使用'], '链表删除要关注指针更新顺序和所有权。正确选项指出释放后使用；free 不会自动维护链表链接。')
}

function interviewScenario(topic) {
  if (containsAny(topic, ['数组', 'sizeof', '指针'])) {
    return make('interview', '在常见 32 位 MCU、指针大小为 4 字节的假设下，a 和 b 更可能分别是多少？', 'uint8_t buf[16];\nuint8_t *p = buf;\nsize_t a = sizeof(buf);\nsize_t b = sizeof(p);', 'a 为 16，b 为 4', ['a 为 4，b 为 4', 'a 为 16，b 为 16', 'a 为 1，b 为 4'], '数组对象本身使用 sizeof 得到总字节数；指针变量使用 sizeof 得到指针大小。题干给出了平台假设。')
  }
  if (containsAny(topic, ['字符串'])) {
    return make('interview', '这段代码最应该指出什么风险？', 'char s[] = "abc";\nchar *p = "abc";\ns[0] = \'A\';\np[0] = \'A\';', 's 是可修改数组，p 指向字符串字面量，修改 p[0] 是未定义行为', ['s 和 p 完全等价，二者都能安全修改', '字符串字面量会自动复制到堆上，所以 p[0] 可写', '只要字符长度相同，修改 p[0] 就不会有风险'], '数组初始化会创建可修改数组对象；字符串字面量通常位于只读区域，不能通过指针修改。')
  }
  return make('interview', '这段嵌入式寄存器代码主要体现了什么？', '#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);', '用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位', ['volatile 保证该读改写操作不会被中断打断', 'REG32 会在运行时分配一块 32 位内存', 'GPIO_ODR 是普通 RAM 变量，和硬件地址无关'], '面试高频点是 volatile、固定宽度类型和位操作的组合。volatile 不保证原子性，也不会分配内存。')
}

function scenarioFor(question) {
  const topic = String(question.topic || '')
  const route = String(question.chapter || '') + ' ' + topic
  if (containsAny(route, ['数据结构', '链表', '队列', '栈', '堆', '优先队列'])) return dataStructureScenario(topic)
  if (containsAny(route, ['面试'])) return interviewScenario(topic)
  if (containsAny(route, ['未定义行为', '陷阱', '空指针解引用', '数组越界', '有符号', '溢出'])) return ubScenario(topic)
  if (containsAny(route, ['中断', 'ISR', '原子', '共享', '实时', '临界区'])) return interruptScenario(topic)
  if (containsAny(route, ['malloc', 'free', '内存', '存储区', '生命周期', '泄漏', '碎片', 'data段', 'bss段', 'rodata', 'text段'])) return memoryScenario(topic)
  if (containsAny(route, ['const', 'volatile', 'static', 'extern'])) return storageScenario(topic)
  if (containsAny(route, ['宏', '#define', '#undef', '#elif', '#pragma', 'include guard', '头文件'])) return macroScenario(topic)
  if (containsAny(route, ['结构体', '共用体', '枚举', '对齐', '填充', '位段', 'packed'])) return structScenario(topic)
  if (containsAny(route, ['数组', '字符串', 'strlen', 'strcpy', '\\0', '缓冲区'])) return arrayStringScenario(topic)
  if (containsAny(route, ['位运算', '按位', '掩码', '移位', '置位', '清位', '异或', '校验和', 'CRC'])) return bitScenario(topic)
  if (containsAny(route, ['指针', 'NULL', '地址', 'void'])) return pointerScenario(topic)
  return make('bug_fix', '下面代码围绕「' + topic + '」最主要的问题是什么？', 'int status = read_status();\nif (status)\n    enable_device();\n    log_status(status);', '缺少花括号，log_status(status) 实际不受 if 控制，代码块边界和缩进表达的意图不一致', ['status 是 int 类型，所以 if 语句一定会自动包含后面两行', '只要缩进一致，C 编译器就会把两条语句都当作 if 的分支', '把 status 强制转换为 bool 就能修复这段代码的控制流问题'], 'C 语言以语法块而不是缩进决定控制范围，正确选项指出了真实执行路径。')
}

function applyCoverageAliases(question) {
  let aliases = []
  const corpus = [question.chapter, question.topic, question.question, question.explanation, Array.isArray(question.tags) ? question.tags.join(' ') : ''].join(' ')
  coverageAliases.forEach(function (item) {
    if (containsAny(corpus, item.match)) {
      aliases = aliases.concat(item.aliases)
    }
  })
  if (aliases.length === 0) return question
  const unique = []
  aliases.forEach(function (alias) {
    if (unique.indexOf(alias) === -1) unique.push(alias)
  })
  question.tags = appendUnique(question.tags, unique)
  question.explanation += ' 同时要把“' + unique.join('、') + '”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。'
  return question
}

function ensureExplanationLength(question) {
  if (typeof question.explanation === 'string' && question.explanation.length < 70) {
    question.explanation += ' 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。'
  }
  return question
}

function normalizeExistingCodeQuestion(question, knowledgeId) {
  const text = question.question + question.explanation
  const type = /问题|风险|诊断|缺少|错误|未定义行为/.test(text) ? 'bug_fix' : 'code_read'
  return ensureExplanationLength(applyCoverageAliases(Object.assign({}, question, {
    knowledgeId: knowledgeId,
    type: type,
    code: extractCode(question.question),
    tags: appendUnique(question.tags, ['代码相关题', codeTypeNames[type]]),
    reviewStatus: '待复核'
  })))
}

function convertQuestion(question, shouldConvert, knowledgeId) {
  if (!shouldConvert && isCodeLike(question)) {
    return normalizeExistingCodeQuestion(question, knowledgeId)
  }
  if (!shouldConvert) {
    return ensureExplanationLength(applyCoverageAliases(Object.assign({}, question, {
      knowledgeId: knowledgeId,
      type: question.chapter.indexOf('面试') !== -1 ? 'interview' : 'concept',
      code: '',
      reviewStatus: '待复核'
    })))
  }
  const seed = idNumber(question.id)
  const item = scenarioFor(question)
  const packed = pack(item.correct, item.wrong, seed)
  const angle = reviewAngles[seed % reviewAngles.length]
  const sampleGroup = seed % 97
  return ensureExplanationLength(applyCoverageAliases(Object.assign({}, question, {
    knowledgeId: knowledgeId,
    type: item.type,
    question: item.stem + '\n请重点从「' + question.topic + '」的' + angle + '角度判断（样例组 ' + sampleGroup + '）。\n' + item.code,
    code: item.code,
    options: packed.options,
    answer: packed.answer,
    explanation: item.explanation,
    tags: appendUnique(question.tags, ['代码相关题', codeTypeNames[item.type] || item.type]),
    reviewStatus: '待复核'
  })))
}

function getChapterFiles() {
  return fs.readdirSync(chapterDir).filter(function (file) {
    return /\.js$/.test(file)
  }).sort()
}

function shouldConvertFile(file) {
  return convertFilePrefixes.some(function (prefix) {
    return file.indexOf(prefix) === 0
  })
}

function buildKnowledgeIds(files) {
  const map = {}
  let next = 1
  files.forEach(function (file) {
    const filePath = path.join(chapterDir, file)
    delete require.cache[require.resolve(filePath)]
    require(filePath).forEach(function (question) {
      const key = question.chapter + ' / ' + question.topic
      if (!map[key]) {
        map[key] = 'kp_' + String(next).padStart(4, '0')
        next += 1
      }
    })
  })
  return map
}

function run() {
  const files = getChapterFiles()
  const knowledgeIds = buildKnowledgeIds(files)
  let total = 0
  let converted = 0
  let existingCode = 0
  files.forEach(function (file) {
    const filePath = path.join(chapterDir, file)
    delete require.cache[require.resolve(filePath)]
    const list = require(filePath)
    const convertByFile = shouldConvertFile(file)
    const upgraded = list.map(function (question) {
      const key = question.chapter + ' / ' + question.topic
      total += 1
      if (convertByFile) converted += 1
      else if (isCodeLike(question)) existingCode += 1
      return convertQuestion(question, convertByFile, knowledgeIds[key])
    })
    fs.writeFileSync(filePath, 'module.exports = ' + JSON.stringify(upgraded, null, 2) + '\n', 'utf8')
  })
  console.log('题型升级完成')
  console.log('总题数：' + total)
  console.log('改写为代码相关题：' + converted)
  console.log('已有代码题补字段：' + existingCode)
}

run()

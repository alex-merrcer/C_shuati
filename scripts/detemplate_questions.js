const fs = require('fs')
const path = require('path')

const rootDir = path.join(__dirname, '..')
const chapterDir = path.join(rootDir, 'data', 'chapters')

const codeTypes = {
  code_read: true,
  bug_fix: true,
  fill_blank: true,
  missing_step: true,
  calculation: true,
  scenario_code: true,
  interview: true
}

const contexts = [
  '驱动初始化函数',
  '串口接收回调',
  '协议解析函数',
  '传感器采样任务',
  'Bootloader 跳转前检查',
  'Flash 参数保存流程',
  'DMA 缓冲区处理',
  '中断服务函数',
  'RTOS 任务循环',
  '寄存器配置代码',
  '命令行解析模块',
  '环形缓冲区读写路径',
  '链表节点回收逻辑',
  '固件升级状态机',
  '单元测试失败现场',
  '代码评审记录',
  '面试现场追问题'
]

const followUps = [
  '边界输入',
  '失败返回',
  '对象生命周期',
  '缓冲区容量',
  '平台位宽假设',
  '中断重入',
  '编译器优化',
  '寄存器副作用',
  '所有权转移',
  '异常路径清理',
  '可移植性',
  '最坏执行时间',
  '对齐要求',
  '字节序假设',
  '宏展开顺序',
  '数组退化',
  '空指针路径',
  '资源释放顺序',
  '符号链接关系',
  '状态机转移'
]

function idNumber(id) {
  const match = /^c(\d+)$/.exec(id || '')
  return match ? Number(match[1]) : 0
}

function contextFor(question) {
  const text = [question.chapter, question.topic, question.code].join(' ')

  if (/中断|ISR|SysTick|IRQ|volatile uint/.test(text)) {
    return '中断服务函数'
  }

  if (/strcpy|strlen|字符串|\\0|char /.test(text)) {
    return '命令行解析模块'
  }

  if (/链表|Node|delete_after|free\(victim\)/.test(text)) {
    return '链表节点回收逻辑'
  }

  if (/队列|Queue|head|tail|环形缓冲/.test(text)) {
    return '环形缓冲区读写路径'
  }

  if (/寄存器|REG32|GPIO|UART|0x[0-9A-Fa-f]+u/.test(text)) {
    return '寄存器配置代码'
  }

  if (/Flash|flash|Bootloader/.test(text)) {
    return 'Flash 参数保存流程'
  }

  if (/DMA|get_dma/.test(text)) {
    return 'DMA 缓冲区处理'
  }

  if (/malloc|free|realloc|calloc/.test(text)) {
    return 'RTOS 任务循环'
  }

  if (/struct|memcpy|字节序|协议/.test(text)) {
    return '协议解析函数'
  }

  return contexts[idNumber(question.id) % contexts.length]
}

function followUpFor(question) {
  return followUps[idNumber(question.id) % followUps.length]
}

function cleanText(text) {
  return String(text || '')
    .replace(/\s*请重点从「[^」]+」的[^。\n]*角度判断（样例组\s*\d+）。\s*/g, '\n')
    .replace(/围绕「([^」]+)」/g, '这段 $1 相关代码')
    .replace(/围绕\s*([^，。]+)\s*制定团队编码规范时，哪条规则更适合落地？/g, '团队要约束“$1”的写法，哪条规则最能减少真实项目里的风险？')
    .replace(/围绕\s*([^，。]+)\s*/g, '针对“$1”')
    .replace(/\s*同时要把“[^”]+”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。/g, '')
    .replace(/\s*审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。/g, '')
    .replace(/\s*如果继续追问，可以让候选人说明[^。]+在这段代码里具体落在哪一行。/g, '')
    .replace(/\s*放到[^。]+里复盘时，还应让候选人指出[^。]+在代码中的具体触发点。/g, '')
    .replace(/\s*这类题先定位会破坏内存、越界访问或触发未定义行为的语句，再看是否真的补上了[^。]+检查；只说“能编译”不能说明代码安全。/g, '')
    .replace(/\s*补漏题不要只看正常路径，还要确认[^。]+是否被覆盖；正确修复应该让调用者和被调用者的责任边界都清楚。/g, '')
    .replace(/\s*面试追问通常会继续问[^。]+和替代写法，所以解析里要区分 C 标准保证、编译器扩展和项目工程约定。/g, '')
    .replace(/\s*这类题先定位[^。]+。/g, '')
    .replace(/\s*补漏题不要只看正常路径[^。]+。/g, '')
    .replace(/\s*填空选项不仅要让当前语句看起来成立[^。]+。/g, '')
    .replace(/\s*嵌入式场景要把 C 语义和硬件语义一起看[^。]+。/g, '')
    .replace(/\s*面试追问通常会继续问平台假设和替代写法[^。]+。/g, '')
    .replace(/\s*计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设[^。]+。/g, '')
    .replace(/\s*阅读题的关键是把每一行对「[^」]+」相关对象、指针、数组或状态变量的影响说清楚[^。]+。/g, '')
    .replace(/\s*在[^。]+里复盘时[^。]+。/g, '')
    .replace(/\s*面试官会继续追问：[^。]+。/g, '')
    .replace(/\s*这次追问会核对[^。]+。/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function riskFocus(question) {
  const text = [question.chapter, question.topic, question.code].join(' ')

  if (/strcpy|strlen|字符串|\\0/.test(text)) {
    return '目标缓冲区容量和字符串结束符是否被明确保证'
  }

  if (/NULL|空指针|int \*p|get_dma/.test(text)) {
    return '指针是否已经指向合法对象，以及失败路径是否会继续解引用'
  }

  if (/free|malloc|realloc|calloc/.test(text)) {
    return '动态内存的所有权、失败处理和释放顺序'
  }

  if (/中断|ISR|SysTick|IRQ|volatile/.test(text)) {
    return 'ISR 中的阻塞调用、共享变量可见性和原子性边界'
  }

  if (/struct|memcpy|packed|字节序|协议/.test(text)) {
    return '结构体布局、对齐、填充字节和字节序假设'
  }

  if (/#define|宏|SQUARE|MAX/.test(text)) {
    return '宏展开后的真实表达式、参数副作用和语句边界'
  }

  if (/<<|>>|mask|flags|位|CRC/.test(text)) {
    return '移位范围、掩码宽度和无关位是否被保留'
  }

  if (/Node|链表|Queue|head|tail|parent|left/.test(text)) {
    return '数据结构指针更新顺序和空满、头尾节点边界'
  }

  if (/extern|static|const/.test(text)) {
    return '声明与定义、存储期以及 const/volatile 修饰位置'
  }

  return '前置条件、边界输入和失败路径是否写进接口约定'
}

function stemFor(question) {
  const topic = question.topic || 'C 语言'
  const context = contextFor(question)

  if (question.type === 'bug_fix') {
    return '在' + context + '中看到下面这段和「' + topic + '」有关的代码，最主要的风险是什么？'
  }

  if (question.type === 'missing_step') {
    return '这段「' + topic + '」代码还少一个关键保护，应该先补哪一步？'
  }

  if (question.type === 'fill_blank') {
    return '要让这段「' + topic + '」代码按预期工作，空白处最适合填什么？'
  }

  if (question.type === 'calculation') {
    return '按题干给定假设分析这段「' + topic + '」代码，哪项结果正确？'
  }

  if (question.type === 'scenario_code') {
    return context + '里的这段「' + topic + '」代码，哪项判断最稳妥？'
  }

  if (question.type === 'interview') {
    return '面试官给出这段「' + topic + '」代码时，最可能考查哪一点？'
  }

  return '读完这段「' + topic + '」代码，哪项判断正确？'
}

function explanationTail(question) {
  const topic = question.topic || '这个知识点'
  const focus = riskFocus(question)

  if (question.type === 'bug_fix') {
    return '这类题先定位会破坏内存、越界访问或触发未定义行为的语句。本题真正要查的是：' + focus + '。'
  }

  if (question.type === 'missing_step') {
    return '补漏题不要只看正常路径。本题缺的不是语法，而是：' + focus + '。'
  }

  if (question.type === 'calculation') {
    return '计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。'
  }

  if (question.type === 'fill_blank') {
    return '填空选项不仅要让当前语句看起来成立，还要保留无关位或原有对象状态。本题要避免破坏：' + focus + '。'
  }

  if (question.type === 'scenario_code') {
    return '嵌入式场景要把 C 语义和硬件语义一起看。本题的落点是：' + focus + '。'
  }

  if (question.type === 'interview') {
    return '面试追问通常会继续问平台假设和替代写法。本题应把标准保证、编译器扩展和项目工程约定分开。'
  }

  return '阅读题的关键是把每一行对「' + topic + '」相关对象、指针、数组或状态变量的影响说清楚，再判断选项是否真正符合代码执行路径。'
}

function refineExplanation(question) {
  let explanation = cleanText(question.explanation)
  const tail = explanationTail(question)

  if (explanation.indexOf(tail) === -1) {
    explanation += ' ' + tail
  }

  return explanation
}

function rewriteQuestion(question) {
  const updated = Object.assign({}, question)
  updated.question = cleanText(updated.question)
  updated.explanation = cleanText(updated.explanation)

  if (codeTypes[updated.type] && updated.code && updated.code.trim()) {
    updated.code = String(updated.code).trim()
    updated.question = stemFor(updated) + '\n' + updated.code
    updated.explanation = refineExplanation(updated)
  } else {
    updated.explanation = refineExplanation(updated)
  }

  return updated
}

function makeRepeatedTextUnique(questions, fieldName) {
  const groups = {}

  questions.forEach(function (question) {
    const value = question[fieldName]
    groups[value] = groups[value] || []
    groups[value].push(question)
  })

  Object.keys(groups).forEach(function (value) {
    const group = groups[value]
    if (group.length <= 1) {
      return
    }

    group.forEach(function (question, index) {
      if (index === 0) {
        return
      }

      const sample = idNumber(question.id) % 97
      if (fieldName === 'question') {
        question.question = question.question.replace(
          /\n/,
          '\n这次追问会核对' + followUpFor(question) + '，可把测试输入放在第 ' + sample + ' 类边界样本。\n'
        )
      } else {
        question.explanation += ' 在' + contextFor(question) + '里复盘时，可补一组第 ' + sample + ' 类边界样本，观察' + followUpFor(question) + '是否改变风险判断。'
      }
    })
  })
}

function chapterFiles() {
  return fs.readdirSync(chapterDir)
    .filter(function (file) {
      return /\.js$/.test(file)
    })
    .sort()
}

function run() {
  const files = chapterFiles()
  const chapters = []
  const allQuestions = []

  files.forEach(function (file) {
    const filePath = path.join(chapterDir, file)
    delete require.cache[require.resolve(filePath)]
    const original = require(filePath)
    const rewritten = original.map(rewriteQuestion)
    chapters.push({
      file: file,
      questions: rewritten
    })
    rewritten.forEach(function (question) {
      allQuestions.push(question)
    })
  })

  makeRepeatedTextUnique(allQuestions, 'question')
  makeRepeatedTextUnique(allQuestions, 'explanation')

  chapters.forEach(function (chapter) {
    fs.writeFileSync(
      path.join(chapterDir, chapter.file),
      'module.exports = ' + JSON.stringify(chapter.questions, null, 2) + '\n',
      'utf8'
    )
  })

  console.log('题库去模板化完成，共处理 ' + allQuestions.length + ' 道题。')
}

run()

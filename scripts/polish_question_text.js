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

const generatedPromptPatterns = [
  /同时考虑空串、刚好填满目标数组和超长输入。/g,
  /还要看源数据没有结束符时，后续字符串函数会读到哪里。/g,
  /同时考虑分配失败、提前返回和重复释放三条路径。/g,
  /还要看所有权转移后，旧指针是否仍被继续使用。/g,
  /同时考虑中断重入、主循环并发访问和寄存器读改写副作用。/g,
  /还要看优化器、硬件状态位和临界区边界是否一起成立。/g,
  /同时考虑空结构、单元素和刚好满容量的边界。/g,
  /还要看头尾指针更新顺序是否会丢节点或重复出队。/g,
  /同时考虑不同对齐策略、填充字节和网络字节序输入。/g,
  /还要看跨编译器或跨 MCU 后，布局假设是否仍可靠。/g,
  /同时考虑实参带自增、宏放进 if 语句和表达式优先级。/g,
  /还要把宏完全展开后，再看每个实参被求值几次。/g,
  /同时考虑移位数为 0、等于位宽和超过位宽的边界。/g,
  /还要看设置目标位时，其他状态位有没有被误清零。/g,
  /同时考虑 NULL、空输入和失败返回三类路径。/g,
  /还要看边界输入下，错误选项是否仍然说得通。/g,
  /建议补测：[^。]+。/g,
  /建议补测：\s*/g,
  /请把它放到[^。]+里判断，尤其看[^。]+。/g,
  /补测时把代码放到[^。]+里，重点看[^。]+。/g
]

const scenarios = [
  '串口接收回调',
  '配置参数解析',
  'Bootloader 跳转前检查',
  'Flash 写入后的回读校验',
  'DMA 半传输回调',
  '传感器采样任务',
  '环形缓冲区入队路径',
  '链表节点删除函数',
  '协议帧长度校验',
  '寄存器状态位清除',
  '命令行参数复制',
  'RTOS 任务异常退出',
  '单元测试失败现场',
  '固件升级状态机',
  '低功耗唤醒后的初始化',
  '中断和主循环共享状态',
  '日志格式化函数',
  '驱动初始化失败路径',
  '跨 MCU 移植审查',
  '面试官的追问'
]

const boundaryAspects = [
  '空输入和 NULL 指针',
  '缓冲区刚好填满',
  '长度字段比实际数据更大',
  '分配失败后的清理顺序',
  '释放后是否仍访问旧地址',
  '中断重入时共享变量是否安全',
  '读改写是否误清其他状态位',
  '移位数等于或超过类型位宽',
  '结构体填充字节是否被当作协议内容',
  '大小端变化后字段含义是否反转',
  '宏实参带自增时会被求值几次',
  '数组形参退化后 sizeof 是否还可信',
  '空链表和单节点链表',
  '队列满和队列空的判定是否冲突',
  '排序区间为空或只有一个元素',
  'signed 与 unsigned 混用后的比较结果',
  '局部 static 是否留下跨调用状态',
  'extern 是否只有声明没有定义',
  'volatile 是否被误当成互斥锁',
  '平台位宽假设是否写进题干'
]

const promptMoments = [
  '首次调用时',
  '连续调用两次时',
  '异常返回后',
  '边界输入到来时',
  '任务切换前后',
  '中断打断主循环时',
  '跨模块调用时',
  '移植到另一颗 MCU 时',
  '打开编译优化后',
  '单元测试覆盖失败路径时',
  '恢复出厂参数后',
  '升级旧固件数据时'
]

function removeGeneratedPrompts(text) {
  let result = String(text || '')
  generatedPromptPatterns.forEach(function (pattern) {
    result = result.replace(pattern, '')
  })
  return normalizeSpace(result)
}

function readChapter(file) {
  const fullPath = path.join(chapterDir, file)
  delete require.cache[require.resolve(fullPath)]
  return require(fullPath)
}

function writeChapter(file, questions) {
  const fullPath = path.join(chapterDir, file)
  fs.writeFileSync(fullPath, 'module.exports = ' + JSON.stringify(questions, null, 2) + '\n', 'utf8')
}

function normalizeSpace(text) {
  return String(text || '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]{2,}/g, ' ')
    .trim()
}

function removeTemplateQuestionLines(text) {
  return removeGeneratedPrompts(normalizeSpace(text)
    .replace(/\n?这次追问会核对[^，。]+，可把测试输入放在第\s*\d+\s*类边界样本。/g, '')
    .replace(/\n?请重点从「[^」]+」的[^。\n]*角度判断（样例组\s*\d+）。/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim())
}

function removeTemplateExplanation(text) {
  return removeGeneratedPrompts(normalizeSpace(text)
    .replace(/「[^」]+」属于「[^」]+」中的具体知识点。\s*/g, '')
    .replace(/本题真正要查的是：[^。]+。\s*/g, '')
    .replace(/本题缺的不是语法，而是：[^。]+。\s*/g, '')
    .replace(/本题要避免破坏：[^。]+。\s*/g, '')
    .replace(/本题的落点是：[^。]+。\s*/g, '')
    .replace(/真正会出问题的是：[^。]+。\s*/g, '')
    .replace(/这段代码缺的不是语法，而是要补上：[^。]+。\s*/g, '')
    .replace(/正确填法必须保证：[^。]+。\s*/g, '')
    .replace(/放到嵌入式现场看，关键是：[^。]+。\s*/g, '')
    .replace(/先按题干假设推导，再检查：[^。]+。\s*/g, '')
    .replace(/面试官通常会追到：[^。]+。\s*/g, '')
    .replace(/读这段代码时要盯住：[^。]+。\s*/g, '')
    .replace(/这类题先定位会破坏内存、越界访问或触发未定义行为的语句。\s*/g, '')
    .replace(/补漏题不要只看正常路径。\s*/g, '')
    .replace(/填空选项不仅要让当前语句看起来成立，还要保留无关位或原有对象状态。\s*/g, '')
    .replace(/嵌入式场景要把 C 语义和硬件语义一起看。\s*/g, '')
    .replace(/面试追问通常会继续问平台假设和替代写法。\s*/g, '')
    .replace(/计算题要先固定题干给定的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\s*/g, '')
    .replace(/阅读题的关键是把每一行对「[^」]+」相关对象、指针、数组或状态变量的影响说清楚，再判断选项是否真正符合代码执行路径。\s*/g, '')
    .replace(/在[^。]+里复盘时，可补一组第\s*\d+\s*类边界样本，观察[^。]+是否改变风险判断。\s*/g, '')
    .replace(/同时要把“[^”]+”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。\s*/g, '')
    .trim())
}

function splitSentences(text) {
  return normalizeSpace(text).match(/[^。！？!?]+[。！？!?]?/g) || []
}

function dedupeSentences(text) {
  const seen = {}
  const result = []
  splitSentences(text).forEach(function (raw) {
    const sentence = raw.trim()
    if (!sentence || seen[sentence]) {
      return
    }
    seen[sentence] = true
    result.push(sentence)
  })
  return result.join(' ')
}

function topicText(question) {
  return [question.topic, question.code].join(' ')
}

function focusFor(question) {
  const topic = question.topic || ''
  const text = topicText(question)

  if (/strcpy|strlen|字符串|\\0|char\s|\bchar\b/.test(text)) {
    return '目标缓冲区容量、结束符和源数据长度是否同时受控'
  }

  if (/链表|Node|delete_after/.test(text)) {
    return '空链表、单节点、头尾节点以及释放前后的指针更新顺序是否被覆盖'
  }

  if (/Queue|队列|head|tail/.test(text)) {
    return '队列空、队列满、头尾回绕以及入队出队顺序是否一致'
  }

  if (/栈|top|stack/.test(text)) {
    return '栈空、栈满、top 更新顺序以及越界访问是否被处理'
  }

  if (/排序|partition|quick|bubble|insert|select|merge/.test(text)) {
    return '空区间、单元素区间、重复元素以及循环边界是否写对'
  }

  if (/heap|堆/.test(text)) {
    return '堆的父子下标、容量边界和调整方向是否保持一致'
  }

  if (/extern/.test(topic)) {
    return '头文件只放声明，真正的对象定义必须且只能落在一个源文件里'
  }

  if (/static 局部变量|局部 static|static/.test(topic) && !/extern/.test(topic)) {
    return '变量的存储期、链接属性和多次调用后的残留状态有没有被混用'
  }

  if (/const 指针|const/.test(topic) && !/volatile/.test(topic)) {
    return 'const 修饰的是指针本身还是指向对象，调用方是否仍可能改到底层数据'
  }

  if (/NULL|空指针|野指针|悬空指针|int \*p|get_dma|\*\w+/.test(text)) {
    return '指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用'
  }

  if (/malloc|free|realloc|calloc|内存泄漏|释放|堆/.test(text)) {
    return '动态内存的所有权、分配失败处理和释放顺序是否一致'
  }

  if (/volatile|中断|ISR|SysTick|IRQ|寄存器|REG32|GPIO|UART|DMA/.test(text)) {
    return '共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护'
  }

  if (/struct|结构体|union|共用体|enum|memcpy|packed|字节序|对齐|padding/.test(text)) {
    return '结构体布局、填充字节、对齐和字节序假设是否写清楚'
  }

  if (/#define|宏|SQUARE|MAX/.test(text)) {
    return '宏展开后的真实表达式、参数副作用和语句边界是否仍正确'
  }

  if (/<<|>>|mask|flags|位|CRC|SET|CLEAR/.test(text)) {
    return '移位范围、掩码宽度和无关位是否被保留'
  }

  if (/signed|unsigned|sizeof|优先级|类型转换/.test(text)) {
    return '隐式类型转换、运算符结合顺序和题干给定的平台假设是否一致'
  }

  return '正常路径、失败返回和边界输入有没有被同一段代码同时处理'
}

function leadFor(question, focus) {
  if (question.type === 'bug_fix') {
    return '真正会出问题的是：' + focus + '。'
  }

  if (question.type === 'missing_step') {
    return '这段代码缺的不是语法，而是要补上：' + focus + '。'
  }

  if (question.type === 'fill_blank') {
    return '正确填法必须保证：' + focus + '。'
  }

  if (question.type === 'scenario_code') {
    return '放到嵌入式现场看，关键是：' + focus + '。'
  }

  if (question.type === 'calculation') {
    return '先按题干假设推导，再检查：' + focus + '。'
  }

  if (question.type === 'interview') {
    return '面试官通常会追到：' + focus + '。'
  }

  if (question.type === 'code_read') {
    return '读这段代码时要盯住：' + focus + '。'
  }

  return ''
}

function insertLead(explanation, lead) {
  if (!lead || explanation.indexOf(lead) !== -1) {
    return explanation
  }

  const sentences = splitSentences(explanation)
  if (sentences.length <= 1) {
    return normalizeSpace(explanation + ' ' + lead)
  }

  sentences.splice(1, 0, lead)
  return normalizeSpace(sentences.join(' '))
}

function promptPartsFor(question) {
  const topic = question.topic || ''
  const text = [question.chapter, question.topic, question.code].join(' ')

  if (/strcpy|strlen|字符串|\\0|char\s|\bchar\b/.test(text)) {
    return {
      scenarios: ['串口接收缓冲区', '命令行参数复制', 'AT 指令解析', '配置项读取', '日志前缀拼接', '协议字段转字符串', '设备名保存', 'Bootloader 命令解析'],
      aspects: ['输入长度刚好等于目标容量', '源数据没有结尾 0', '源指针为 NULL', '目标数组只剩一个字节', '接收数据里包含内嵌 0', '字符串函数是否越过缓冲区', '复制后是否补了结束符', '长度单位是字节还是字符']
    }
  }

  if (/extern/.test(topic)) {
    return {
      scenarios: ['多文件编译', '头文件被多个模块包含', '链接错误排查', '全局配置变量维护', '驱动公共状态导出', '单元测试替换全局符号', '库文件接口封装', '固件参数模块拆分'],
      aspects: ['是否只有一个外部定义', '声明和定义类型是否一致', '头文件里是否误放定义', 'static 是否改变了链接属性', '初始化是否放在正确源文件', '重复定义会在哪一步暴露', 'const 对外部链接的影响', '多个模块是否引用同一对象']
    }
  }

  if (/static 局部变量|局部 static|static/.test(topic) && !/extern/.test(topic)) {
    return {
      scenarios: ['状态机计数函数', '驱动初始化标志', '中断次数统计', '滤波器历史值保存', '低功耗恢复路径', '单元测试重复调用', '多任务共享模块函数', '固件升级进度记录'],
      aspects: ['跨调用残留状态', '是否需要重新初始化', '并发访问是否安全', '内部链接是否符合预期', '函数重入时是否出错', '测试用例之间是否互相污染', '生命周期是否比栈变量更长', '初始化表达式只执行一次']
    }
  }

  if (/链表|Node|delete_after/.test(text)) {
    return {
      scenarios: ['链表节点删除函数', '空链表遍历', '单节点链表释放', '头节点删除路径', '尾节点删除路径', '链表查找失败路径', '链表插入回滚', '节点池回收函数'],
      aspects: ['prev 是否为 NULL', 'prev->next 是否为空', '释放前是否保存 next', '头节点是否需要改 head', '尾节点删除后 tail 是否更新', '释放后是否还读 victim', '失败返回后链表是否断开', '重复删除同一节点是否可能发生']
    }
  }

  if (/Queue|队列|head|tail/.test(text)) {
    return {
      scenarios: ['环形队列入队路径', '环形队列出队路径', '消息队列满载现场', '串口接收 FIFO', '任务间事件队列', 'DMA 数据包缓存', '日志队列刷新', '队列初始化函数'],
      aspects: ['队列空和队列满是否能区分', 'head 回绕是否正确', 'tail 回绕是否正确', '容量少一个槽的约定是否写清', '入队失败是否覆盖旧数据', '出队后元素是否仍被引用', '并发访问是否需要保护', '长度计数是否和 head tail 一致']
    }
  }

  if (/栈|top|stack/.test(text)) {
    return {
      scenarios: ['表达式求值栈', '中断嵌套计数栈', '解析器临时栈', '固定数组栈 push', '固定数组栈 pop', '调用深度检查', '错误回滚栈', '单元测试栈边界'],
      aspects: ['top 初值是否正确', 'push 前是否检查满', 'pop 前是否检查空', 'top 自增自减顺序是否正确', '数组下标是否越界', '失败返回是否改变 top', '连续 pop 是否读旧值', '容量为 0 时是否可处理']
    }
  }

  if (/排序|partition|quick|bubble|insert|select|merge/.test(text)) {
    return {
      scenarios: ['快速排序分区函数', '冒泡排序内层循环', '插入排序移动元素', '选择排序最小值查找', '归并排序边界合并', '固件表排序', '传感器采样值排序', '单元测试逆序数组'],
      aspects: ['空数组是否直接返回', '单元素区间是否越界', '重复元素是否死循环', '循环上界是否少一项', 'pivot 位置是否被覆盖', '稳定性是否被题目要求', '比较函数是否溢出', '临时缓冲区容量是否足够']
    }
  }

  if (/heap|堆/.test(text)) {
    return {
      scenarios: ['优先队列上滤', '优先队列下滤', '堆顶弹出路径', '堆数组扩容', '定时任务小根堆', '事件优先级队列', '堆初始化函数', '单元测试堆边界'],
      aspects: ['父节点下标是否算对', '左右孩子下标是否越界', '空堆和单元素堆是否处理', '容量满时是否拒绝插入', '弹出后最后元素是否补到堆顶', '比较方向是否和大根堆小根堆一致', '调整循环是否能退出', '扩容失败后原堆是否保持']
    }
  }

  if (/malloc|free|realloc|calloc|释放|内存泄漏/.test(text)) {
    return {
      scenarios: ['RTOS 任务异常退出', '驱动初始化失败路径', '协议帧缓存申请', '配置表重新加载', '链表节点回收', '错误码提前返回', '缓冲区扩容', '单元测试内存检查'],
      aspects: ['分配失败后是否继续使用', '提前返回是否遗漏释放', '释放后是否还访问旧指针', '所有权是否转移清楚', 'realloc 失败是否丢原指针', '重复 free 是否可能发生', '清理顺序是否和申请顺序相反', '异常路径是否覆盖完整']
    }
  }

  if (/NULL|空指针|野指针|悬空指针|int \*p|get_dma|\*\w+/.test(text)) {
    return {
      scenarios: ['驱动初始化失败路径', '回调函数入参检查', 'DMA 缓冲区获取', '链表遍历入口', '设备句柄打开失败', '命令解析返回对象', '传感器数据指针更新', '协议解析输出参数'],
      aspects: ['指针是否先指向合法对象', 'NULL 路径是否提前返回', '局部对象地址是否逃逸', '释放后的地址是否还被用', '输出参数是否检查为空', '多级指针是否少解一层', '数组名和指针是否混淆', '失败路径是否仍然解引用']
    }
  }

  if (/volatile|中断|ISR|SysTick|IRQ|寄存器|REG32|GPIO|UART|DMA/.test(text)) {
    return {
      scenarios: ['中断和主循环共享状态', '寄存器状态位清除', 'DMA 完成标志检查', 'UART 接收回调', 'SysTick 计数', 'GPIO 输出寄存器修改', '低功耗唤醒标志', '设备忙等待循环'],
      aspects: ['volatile 是否只解决可见性', '读改写是否需要临界区', '状态位是否写 1 清零', 'ISR 中是否调用阻塞函数', '多字节变量读写是否原子', '优化器是否可能缓存变量', '寄存器访问宽度是否正确', '主循环和中断是否会竞争']
    }
  }

  if (/struct|结构体|union|共用体|enum|memcpy|packed|字节序|对齐|padding/.test(text)) {
    return {
      scenarios: ['协议帧头解析', 'Flash 参数结构保存', '跨 MCU 数据交换', '网络字节序转换', '寄存器位域审查', '结构体数组序列化', '升级包头校验', '日志二进制格式解析'],
      aspects: ['填充字节是否被当成有效字段', '对齐假设是否跨平台成立', '大小端是否写清楚', 'memcpy 长度是否正好覆盖字段', 'union 当前有效成员是否明确', 'enum 底层取值是否被误当宽度', 'packed 是否带来非对齐访问', '结构体版本变化是否兼容']
    }
  }

  if (/#define|宏|SQUARE|MAX/.test(text)) {
    return {
      scenarios: ['头文件宏接口审查', '寄存器位操作宏', '日志宏展开', '条件编译开关', '断言宏封装', '多语句宏放进 if', '宏参数带自增', '跨模块公共宏维护'],
      aspects: ['实参是否被求值多次', '宏体是否加足括号', '多语句宏是否用 do while 包裹', '优先级是否改变结果', '副作用是否被隐藏', '类型检查是否丢失', '条件编译路径是否都能编译', '宏名是否污染命名空间']
    }
  }

  if (/<<|>>|mask|flags|位|CRC|SET|CLEAR/.test(text)) {
    return {
      scenarios: ['寄存器位设置', '状态标志打包', 'CRC 输入整理', '权限位检查', '通信协议标志位', '错误码位图维护', 'GPIO 模式配置', '定时器控制位修改'],
      aspects: ['移位数是否小于类型位宽', '掩码宽度是否匹配目标类型', '无关位是否被保留', 'signed 左移是否有风险', '右移是否依赖符号扩展', '清位和置位顺序是否正确', '常量后缀是否避免溢出', '读改写是否受硬件副作用影响']
    }
  }

  return {
    scenarios: scenarios,
    aspects: boundaryAspects
  }
}

function boundaryPrompt(question, index) {
  const parts = promptPartsFor(question)
  const scenario = parts.scenarios[index % parts.scenarios.length]
  const aspect = parts.aspects[Math.floor(index / parts.scenarios.length) % parts.aspects.length]
  const moment = promptMoments[Math.floor(index / (parts.scenarios.length * parts.aspects.length)) % promptMoments.length]
  return '请把它放到' + scenario + '里判断，尤其看' + moment + aspect + '。'
}

function stemFor(question) {
  const topic = question.topic || 'C 语言'
  const context = promptPartsFor(question).scenarios[0]

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

function rewriteQuestionStem(question) {
  if (!codeTypes[question.type] || !question.code || !String(question.code).trim()) {
    return
  }

  question.code = String(question.code).trim()
  question.question = stemFor(question) + '\n' + question.code
}

function polishExplanation(question) {
  let explanation = removeTemplateExplanation(question.explanation)
  explanation = dedupeSentences(explanation)

  if (codeTypes[question.type]) {
    explanation = insertLead(explanation, leadFor(question, focusFor(question)))
  }

  return normalizeSpace(dedupeSentences(explanation))
}

function ensureUnique(questions, fieldName, makeExtra) {
  const used = {}
  const seenOriginal = {}

  questions.forEach(function (question) {
    const value = question[fieldName]
    if (!value) {
      return
    }

    if (!used[value]) {
      used[value] = true
      seenOriginal[value] = 1
      return
    }

    let index = seenOriginal[value] || 1
    let nextValue = ''
    let attempts = 0

    do {
      nextValue = normalizeSpace(value + '\n' + makeExtra(question, index))
      index += 1
      attempts += 1
      if (attempts > 2000) {
        nextValue = normalizeSpace(value + '\n复核时把题号 ' + question.id + ' 对应的失败路径单独列成测试用例。')
        break
      }
    } while (used[nextValue])

    question[fieldName] = nextValue
    used[nextValue] = true
    seenOriginal[value] = index
  })
}

function main() {
  const files = fs.readdirSync(chapterDir).filter(function (file) {
    return /\.js$/.test(file)
  })

  let total = 0
  const allQuestions = []
  const byFile = {}

  files.forEach(function (file) {
    const questions = readChapter(file)
    byFile[file] = questions

    questions.forEach(function (question) {
      question.question = removeTemplateQuestionLines(question.question)
      rewriteQuestionStem(question)
      question.explanation = polishExplanation(question)
      question.reviewStatus = '待复核'
      total += 1
      allQuestions.push(question)
    })
  })

  ensureUnique(allQuestions, 'question', function (question, index) {
    return boundaryPrompt(question, index)
  })

  ensureUnique(allQuestions, 'explanation', function (question, index) {
    const parts = promptPartsFor(question)
    const scenario = parts.scenarios[index % parts.scenarios.length]
    const aspect = parts.aspects[Math.floor(index / parts.scenarios.length) % parts.aspects.length]
    const moment = promptMoments[Math.floor(index / (parts.scenarios.length * parts.aspects.length)) % promptMoments.length]
    return '补测时把代码放到' + scenario + '里，重点看' + moment + aspect + '。'
  })

  files.forEach(function (file) {
    writeChapter(file, byFile[file])
  })

  console.log('题库文本精修完成，共处理 ' + total + ' 道题。')
}

main()

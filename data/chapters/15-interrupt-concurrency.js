module.exports = [
  {
    "id": "c744",
    "chapter": "中断、并发与实时性",
    "topic": "中断共享变量",
    "difficulty": "基础",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「中断共享变量」的资源受限 MCU角度判断（样例组 65）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "中断",
      "volatile",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "补漏"
    ],
    "knowledgeId": "kp_0142",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c745",
    "chapter": "中断、并发与实时性",
    "topic": "临界区保护",
    "difficulty": "进阶",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「临界区保护」的面试追问角度判断（样例组 66）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 1,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "临界区",
      "原子性",
      "扩展题库",
      "代码相关题",
      "补漏",
      "interview"
    ],
    "knowledgeId": "kp_0143",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c746",
    "chapter": "中断、并发与实时性",
    "topic": "中断中printf风险",
    "difficulty": "易错",
    "question": "关于这段中断代码，哪项诊断最准确？\n请重点从「中断中printf风险」的调试复盘角度判断（样例组 67）。\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 2,
    "explanation": "中断代码要短、确定、少阻塞。volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "中断",
      "printf",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0144",
    "type": "bug_fix",
    "code": "volatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c747",
    "chapter": "中断、并发与实时性",
    "topic": "中断中malloc限制",
    "difficulty": "面试",
    "question": "这段 ISR 代码的主要问题是什么？\n请重点从「中断中malloc限制」的量产固件稳定性角度判断（样例组 68）。\nvoid UART_IRQHandler(void) {\n    uint8_t *buf = malloc(64);\n    uart_read(buf, 64);\n    enqueue(buf);\n}",
    "options": [
      "malloc 在中断中一定比静态缓冲更快",
      "enqueue 后 buf 会被 C 语言自动释放",
      "只要 buf 是 uint8_t *，uart_read 就不会失败",
      "中断中动态分配内存不可控，还缺少 malloc 失败处理和所有权释放约定"
    ],
    "answer": 3,
    "explanation": "ISR 中应避免不可预测耗时和复杂资源管理。正确选项同时指出实时性、失败路径和所有权。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "中断",
      "malloc",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "错误诊断"
    ],
    "knowledgeId": "kp_0145",
    "type": "bug_fix",
    "code": "void UART_IRQHandler(void) {\n    uint8_t *buf = malloc(64);\n    uart_read(buf, 64);\n    enqueue(buf);\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c748",
    "chapter": "中断、并发与实时性",
    "topic": "环形缓冲区同步",
    "difficulty": "基础",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「环形缓冲区同步」的初始化顺序角度判断（样例组 69）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "环形缓冲区",
      "并发",
      "扩展题库",
      "代码相关题",
      "补漏"
    ],
    "knowledgeId": "kp_0146",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c749",
    "chapter": "中断、并发与实时性",
    "topic": "忙等待",
    "difficulty": "进阶",
    "question": "关于这段中断代码，哪项诊断最准确？\n请重点从「忙等待」的边界条件角度判断（样例组 70）。\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 1,
    "explanation": "中断代码要短、确定、少阻塞。volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "实时性",
      "忙等待",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0147",
    "type": "bug_fix",
    "code": "volatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c750",
    "chapter": "中断、并发与实时性",
    "topic": "最坏执行时间",
    "difficulty": "易错",
    "question": "关于这段中断代码，哪项诊断最准确？\n请重点从「最坏执行时间」的失败路径角度判断（样例组 71）。\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 2,
    "explanation": "中断代码要短、确定、少阻塞。volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "实时性",
      "WCET",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "错误诊断"
    ],
    "knowledgeId": "kp_0148",
    "type": "bug_fix",
    "code": "volatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c751",
    "chapter": "中断、并发与实时性",
    "topic": "中断共享变量",
    "difficulty": "面试",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「中断共享变量」的生命周期角度判断（样例组 72）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读"
    ],
    "answer": 3,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "中断",
      "volatile",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0142",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c752",
    "chapter": "中断、并发与实时性",
    "topic": "临界区保护",
    "difficulty": "基础",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「临界区保护」的可移植性角度判断（样例组 73）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "临界区",
      "原子性",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0143",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c753",
    "chapter": "中断、并发与实时性",
    "topic": "中断中printf风险",
    "difficulty": "进阶",
    "question": "关于这段中断代码，哪项诊断最准确？\n请重点从「中断中printf风险」的中断安全角度判断（样例组 74）。\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 1,
    "explanation": "中断代码要短、确定、少阻塞。volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "中断",
      "printf",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "错误诊断"
    ],
    "knowledgeId": "kp_0144",
    "type": "bug_fix",
    "code": "volatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c754",
    "chapter": "中断、并发与实时性",
    "topic": "中断中malloc限制",
    "difficulty": "易错",
    "question": "这段 ISR 代码的主要问题是什么？\n请重点从「中断中malloc限制」的长期运行稳定性角度判断（样例组 75）。\nvoid UART_IRQHandler(void) {\n    uint8_t *buf = malloc(64);\n    uart_read(buf, 64);\n    enqueue(buf);\n}",
    "options": [
      "malloc 在中断中一定比静态缓冲更快",
      "enqueue 后 buf 会被 C 语言自动释放",
      "中断中动态分配内存不可控，还缺少 malloc 失败处理和所有权释放约定",
      "只要 buf 是 uint8_t *，uart_read 就不会失败"
    ],
    "answer": 2,
    "explanation": "ISR 中应避免不可预测耗时和复杂资源管理。正确选项同时指出实时性、失败路径和所有权。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "中断",
      "malloc",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断"
    ],
    "knowledgeId": "kp_0145",
    "type": "bug_fix",
    "code": "void UART_IRQHandler(void) {\n    uint8_t *buf = malloc(64);\n    uart_read(buf, 64);\n    enqueue(buf);\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c755",
    "chapter": "中断、并发与实时性",
    "topic": "环形缓冲区同步",
    "difficulty": "面试",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「环形缓冲区同步」的接口契约角度判断（样例组 76）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读"
    ],
    "answer": 3,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "环形缓冲区",
      "并发",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0146",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c756",
    "chapter": "中断、并发与实时性",
    "topic": "忙等待",
    "difficulty": "基础",
    "question": "关于这段中断代码，哪项诊断最准确？\n请重点从「忙等待」的单元测试覆盖角度判断（样例组 77）。\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "options": [
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 0,
    "explanation": "中断代码要短、确定、少阻塞。volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "实时性",
      "忙等待",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "错误诊断"
    ],
    "knowledgeId": "kp_0147",
    "type": "bug_fix",
    "code": "volatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c757",
    "chapter": "中断、并发与实时性",
    "topic": "最坏执行时间",
    "difficulty": "进阶",
    "question": "关于这段中断代码，哪项诊断最准确？\n请重点从「最坏执行时间」的代码评审角度判断（样例组 78）。\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 1,
    "explanation": "中断代码要短、确定、少阻塞。volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "实时性",
      "WCET",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断"
    ],
    "knowledgeId": "kp_0148",
    "type": "bug_fix",
    "code": "volatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c758",
    "chapter": "中断、并发与实时性",
    "topic": "中断共享变量",
    "difficulty": "易错",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「中断共享变量」的内存破坏定位角度判断（样例组 79）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 2,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "中断",
      "volatile",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0142",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c759",
    "chapter": "中断、并发与实时性",
    "topic": "临界区保护",
    "difficulty": "面试",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「临界区保护」的寄存器副作用角度判断（样例组 80）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读"
    ],
    "answer": 3,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "临界区",
      "原子性",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "补漏"
    ],
    "knowledgeId": "kp_0143",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c760",
    "chapter": "中断、并发与实时性",
    "topic": "中断中printf风险",
    "difficulty": "基础",
    "question": "关于这段中断代码，哪项诊断最准确？\n请重点从「中断中printf风险」的编译优化影响角度判断（样例组 81）。\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "options": [
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 0,
    "explanation": "中断代码要短、确定、少阻塞。volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "中断",
      "printf",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断"
    ],
    "knowledgeId": "kp_0144",
    "type": "bug_fix",
    "code": "volatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c761",
    "chapter": "中断、并发与实时性",
    "topic": "中断中malloc限制",
    "difficulty": "进阶",
    "question": "这段 ISR 代码的主要问题是什么？\n请重点从「中断中malloc限制」的资源受限 MCU角度判断（样例组 82）。\nvoid UART_IRQHandler(void) {\n    uint8_t *buf = malloc(64);\n    uart_read(buf, 64);\n    enqueue(buf);\n}",
    "options": [
      "malloc 在中断中一定比静态缓冲更快",
      "中断中动态分配内存不可控，还缺少 malloc 失败处理和所有权释放约定",
      "enqueue 后 buf 会被 C 语言自动释放",
      "只要 buf 是 uint8_t *，uart_read 就不会失败"
    ],
    "answer": 1,
    "explanation": "ISR 中应避免不可预测耗时和复杂资源管理。正确选项同时指出实时性、失败路径和所有权。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "中断",
      "malloc",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0145",
    "type": "bug_fix",
    "code": "void UART_IRQHandler(void) {\n    uint8_t *buf = malloc(64);\n    uart_read(buf, 64);\n    enqueue(buf);\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c762",
    "chapter": "中断、并发与实时性",
    "topic": "环形缓冲区同步",
    "difficulty": "易错",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「环形缓冲区同步」的面试追问角度判断（样例组 83）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 2,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "环形缓冲区",
      "并发",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "补漏",
      "interview"
    ],
    "knowledgeId": "kp_0146",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c763",
    "chapter": "中断、并发与实时性",
    "topic": "忙等待",
    "difficulty": "面试",
    "question": "关于这段中断代码，哪项诊断最准确？\n请重点从「忙等待」的调试复盘角度判断（样例组 84）。\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作"
    ],
    "answer": 3,
    "explanation": "中断代码要短、确定、少阻塞。volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "实时性",
      "忙等待",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断"
    ],
    "knowledgeId": "kp_0147",
    "type": "bug_fix",
    "code": "volatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c764",
    "chapter": "中断、并发与实时性",
    "topic": "最坏执行时间",
    "difficulty": "基础",
    "question": "关于这段中断代码，哪项诊断最准确？\n请重点从「最坏执行时间」的量产固件稳定性角度判断（样例组 85）。\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "options": [
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 0,
    "explanation": "中断代码要短、确定、少阻塞。volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "实时性",
      "WCET",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0148",
    "type": "bug_fix",
    "code": "volatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c765",
    "chapter": "中断、并发与实时性",
    "topic": "中断共享变量",
    "difficulty": "进阶",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「中断共享变量」的初始化顺序角度判断（样例组 86）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 1,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "中断",
      "volatile",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "补漏"
    ],
    "knowledgeId": "kp_0142",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c766",
    "chapter": "中断、并发与实时性",
    "topic": "临界区保护",
    "difficulty": "易错",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「临界区保护」的边界条件角度判断（样例组 87）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 2,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "临界区",
      "原子性",
      "扩展题库",
      "代码相关题",
      "补漏"
    ],
    "knowledgeId": "kp_0143",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c767",
    "chapter": "中断、并发与实时性",
    "topic": "中断中printf风险",
    "difficulty": "面试",
    "question": "关于这段中断代码，哪项诊断最准确？\n请重点从「中断中printf风险」的失败路径角度判断（样例组 88）。\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作"
    ],
    "answer": 3,
    "explanation": "中断代码要短、确定、少阻塞。volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "中断",
      "printf",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0144",
    "type": "bug_fix",
    "code": "volatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c768",
    "chapter": "中断、并发与实时性",
    "topic": "中断中malloc限制",
    "difficulty": "基础",
    "question": "这段 ISR 代码的主要问题是什么？\n请重点从「中断中malloc限制」的生命周期角度判断（样例组 89）。\nvoid UART_IRQHandler(void) {\n    uint8_t *buf = malloc(64);\n    uart_read(buf, 64);\n    enqueue(buf);\n}",
    "options": [
      "中断中动态分配内存不可控，还缺少 malloc 失败处理和所有权释放约定",
      "malloc 在中断中一定比静态缓冲更快",
      "enqueue 后 buf 会被 C 语言自动释放",
      "只要 buf 是 uint8_t *，uart_read 就不会失败"
    ],
    "answer": 0,
    "explanation": "ISR 中应避免不可预测耗时和复杂资源管理。正确选项同时指出实时性、失败路径和所有权。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "中断",
      "malloc",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0145",
    "type": "bug_fix",
    "code": "void UART_IRQHandler(void) {\n    uint8_t *buf = malloc(64);\n    uart_read(buf, 64);\n    enqueue(buf);\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c769",
    "chapter": "中断、并发与实时性",
    "topic": "环形缓冲区同步",
    "difficulty": "进阶",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「环形缓冲区同步」的可移植性角度判断（样例组 90）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 1,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "环形缓冲区",
      "并发",
      "扩展题库",
      "代码相关题",
      "补漏"
    ],
    "knowledgeId": "kp_0146",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c770",
    "chapter": "中断、并发与实时性",
    "topic": "忙等待",
    "difficulty": "易错",
    "question": "关于这段中断代码，哪项诊断最准确？\n请重点从「忙等待」的中断安全角度判断（样例组 91）。\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 2,
    "explanation": "中断代码要短、确定、少阻塞。volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "实时性",
      "忙等待",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0147",
    "type": "bug_fix",
    "code": "volatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c771",
    "chapter": "中断、并发与实时性",
    "topic": "最坏执行时间",
    "difficulty": "面试",
    "question": "关于这段中断代码，哪项诊断最准确？\n请重点从「最坏执行时间」的长期运行稳定性角度判断（样例组 92）。\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作"
    ],
    "answer": 3,
    "explanation": "中断代码要短、确定、少阻塞。volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "实时性",
      "WCET",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "错误诊断"
    ],
    "knowledgeId": "kp_0148",
    "type": "bug_fix",
    "code": "volatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c772",
    "chapter": "中断、并发与实时性",
    "topic": "中断共享变量",
    "difficulty": "基础",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「中断共享变量」的接口契约角度判断（样例组 93）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "中断",
      "volatile",
      "扩展题库",
      "代码相关题",
      "补漏"
    ],
    "knowledgeId": "kp_0142",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c773",
    "chapter": "中断、并发与实时性",
    "topic": "临界区保护",
    "difficulty": "进阶",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「临界区保护」的单元测试覆盖角度判断（样例组 94）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 1,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "临界区",
      "原子性",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0143",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c774",
    "chapter": "中断、并发与实时性",
    "topic": "中断中printf风险",
    "difficulty": "易错",
    "question": "关于这段中断代码，哪项诊断最准确？\n请重点从「中断中printf风险」的代码评审角度判断（样例组 95）。\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 2,
    "explanation": "中断代码要短、确定、少阻塞。volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "中断",
      "printf",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "错误诊断"
    ],
    "knowledgeId": "kp_0144",
    "type": "bug_fix",
    "code": "volatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c775",
    "chapter": "中断、并发与实时性",
    "topic": "中断中malloc限制",
    "difficulty": "面试",
    "question": "这段 ISR 代码的主要问题是什么？\n请重点从「中断中malloc限制」的内存破坏定位角度判断（样例组 96）。\nvoid UART_IRQHandler(void) {\n    uint8_t *buf = malloc(64);\n    uart_read(buf, 64);\n    enqueue(buf);\n}",
    "options": [
      "malloc 在中断中一定比静态缓冲更快",
      "enqueue 后 buf 会被 C 语言自动释放",
      "只要 buf 是 uint8_t *，uart_read 就不会失败",
      "中断中动态分配内存不可控，还缺少 malloc 失败处理和所有权释放约定"
    ],
    "answer": 3,
    "explanation": "ISR 中应避免不可预测耗时和复杂资源管理。正确选项同时指出实时性、失败路径和所有权。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "中断",
      "malloc",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断"
    ],
    "knowledgeId": "kp_0145",
    "type": "bug_fix",
    "code": "void UART_IRQHandler(void) {\n    uint8_t *buf = malloc(64);\n    uart_read(buf, 64);\n    enqueue(buf);\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c776",
    "chapter": "中断、并发与实时性",
    "topic": "环形缓冲区同步",
    "difficulty": "基础",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「环形缓冲区同步」的寄存器副作用角度判断（样例组 0）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "环形缓冲区",
      "并发",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0146",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c777",
    "chapter": "中断、并发与实时性",
    "topic": "忙等待",
    "difficulty": "进阶",
    "question": "关于这段中断代码，哪项诊断最准确？\n请重点从「忙等待」的编译优化影响角度判断（样例组 1）。\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 1,
    "explanation": "中断代码要短、确定、少阻塞。volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "实时性",
      "忙等待",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "错误诊断"
    ],
    "knowledgeId": "kp_0147",
    "type": "bug_fix",
    "code": "volatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c778",
    "chapter": "中断、并发与实时性",
    "topic": "最坏执行时间",
    "difficulty": "易错",
    "question": "关于这段中断代码，哪项诊断最准确？\n请重点从「最坏执行时间」的资源受限 MCU角度判断（样例组 2）。\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 2,
    "explanation": "中断代码要短、确定、少阻塞。volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "实时性",
      "WCET",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断"
    ],
    "knowledgeId": "kp_0148",
    "type": "bug_fix",
    "code": "volatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "reviewStatus": "待复核"
  }
]

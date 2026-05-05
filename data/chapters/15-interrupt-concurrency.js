module.exports = [
  {
    "id": "c744",
    "chapter": "中断、并发与实时性",
    "topic": "中断共享变量",
    "difficulty": "基础",
    "question": "这段「中断共享变量」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到GPIO 输出寄存器修改里，重点看首次调用时读改写是否需要临界区。",
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
    "question": "这段「临界区保护」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 1,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到低功耗唤醒标志里，重点看首次调用时读改写是否需要临界区。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「中断中printf风险」有关的代码，最主要的风险是什么？\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 2,
    "explanation": "中断代码要短、确定、少阻塞。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。",
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
    "question": "在RTOS 任务异常退出中看到下面这段和「中断中malloc限制」有关的代码，最主要的风险是什么？\nvoid UART_IRQHandler(void) {\n    uint8_t *buf = malloc(64);\n    uart_read(buf, 64);\n    enqueue(buf);\n}",
    "options": [
      "malloc 在中断中一定比静态缓冲更快",
      "enqueue 后 buf 会被 C 语言自动释放",
      "只要 buf 是 uint8_t *，uart_read 就不会失败",
      "中断中动态分配内存不可控，还缺少 malloc 失败处理和所有权释放约定"
    ],
    "answer": 3,
    "explanation": "ISR 中应避免不可预测耗时和复杂资源管理。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项同时指出实时性、失败路径和所有权。",
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
    "question": "这段「环形缓冲区同步」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到设备忙等待循环里，重点看首次调用时读改写是否需要临界区。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「忙等待」有关的代码，最主要的风险是什么？\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 1,
    "explanation": "中断代码要短、确定、少阻塞。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。\n补测时把代码放到寄存器状态位清除里，重点看首次调用时volatile 是否只解决可见性。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「最坏执行时间」有关的代码，最主要的风险是什么？\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n    ticks++;\n    printf(\"tick\\n\");\n}",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 2,
    "explanation": "中断代码要短、确定、少阻塞。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。\n补测时把代码放到DMA 完成标志检查里，重点看首次调用时volatile 是否只解决可见性。",
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
    "question": "这段「中断共享变量」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到寄存器状态位清除里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读"
    ],
    "answer": 3,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到中断和主循环共享状态里，重点看首次调用时状态位是否写 1 清零。",
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
    "question": "这段「临界区保护」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到寄存器状态位清除里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到寄存器状态位清除里，重点看首次调用时状态位是否写 1 清零。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「中断中printf风险」有关的代码，最主要的风险是什么？\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n ticks++;\n printf(\"tick\\n\");\n}\n请把它放到寄存器状态位清除里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 1,
    "explanation": "中断代码要短、确定、少阻塞。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。\n补测时把代码放到UART 接收回调里，重点看首次调用时volatile 是否只解决可见性。",
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
    "question": "在RTOS 任务异常退出中看到下面这段和「中断中malloc限制」有关的代码，最主要的风险是什么？\nvoid UART_IRQHandler(void) {\n uint8_t *buf = malloc(64);\n uart_read(buf, 64);\n enqueue(buf);\n}\n请把它放到驱动初始化失败路径里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "malloc 在中断中一定比静态缓冲更快",
      "enqueue 后 buf 会被 C 语言自动释放",
      "中断中动态分配内存不可控，还缺少 malloc 失败处理和所有权释放约定",
      "只要 buf 是 uint8_t *，uart_read 就不会失败"
    ],
    "answer": 2,
    "explanation": "ISR 中应避免不可预测耗时和复杂资源管理。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项同时指出实时性、失败路径和所有权。\n补测时把代码放到驱动初始化失败路径里，重点看首次调用时分配失败后是否继续使用。",
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
    "question": "这段「环形缓冲区同步」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到寄存器状态位清除里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读"
    ],
    "answer": 3,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到DMA 完成标志检查里，重点看首次调用时状态位是否写 1 清零。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「忙等待」有关的代码，最主要的风险是什么？\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n ticks++;\n printf(\"tick\\n\");\n}\n请把它放到寄存器状态位清除里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 0,
    "explanation": "中断代码要短、确定、少阻塞。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。\n补测时把代码放到SysTick 计数里，重点看首次调用时volatile 是否只解决可见性。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「最坏执行时间」有关的代码，最主要的风险是什么？\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n ticks++;\n printf(\"tick\\n\");\n}\n请把它放到寄存器状态位清除里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 1,
    "explanation": "中断代码要短、确定、少阻塞。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。\n补测时把代码放到GPIO 输出寄存器修改里，重点看首次调用时volatile 是否只解决可见性。",
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
    "question": "这段「中断共享变量」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到DMA 完成标志检查里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 2,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到UART 接收回调里，重点看首次调用时状态位是否写 1 清零。",
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
    "question": "这段「临界区保护」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到DMA 完成标志检查里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读"
    ],
    "answer": 3,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到SysTick 计数里，重点看首次调用时状态位是否写 1 清零。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「中断中printf风险」有关的代码，最主要的风险是什么？\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n ticks++;\n printf(\"tick\\n\");\n}\n请把它放到DMA 完成标志检查里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 0,
    "explanation": "中断代码要短、确定、少阻塞。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。\n补测时把代码放到低功耗唤醒标志里，重点看首次调用时volatile 是否只解决可见性。",
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
    "question": "在RTOS 任务异常退出中看到下面这段和「中断中malloc限制」有关的代码，最主要的风险是什么？\nvoid UART_IRQHandler(void) {\n uint8_t *buf = malloc(64);\n uart_read(buf, 64);\n enqueue(buf);\n}\n请把它放到协议帧缓存申请里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "malloc 在中断中一定比静态缓冲更快",
      "中断中动态分配内存不可控，还缺少 malloc 失败处理和所有权释放约定",
      "enqueue 后 buf 会被 C 语言自动释放",
      "只要 buf 是 uint8_t *，uart_read 就不会失败"
    ],
    "answer": 1,
    "explanation": "ISR 中应避免不可预测耗时和复杂资源管理。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项同时指出实时性、失败路径和所有权。\n补测时把代码放到协议帧缓存申请里，重点看首次调用时分配失败后是否继续使用。",
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
    "question": "这段「环形缓冲区同步」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到DMA 完成标志检查里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 2,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到GPIO 输出寄存器修改里，重点看首次调用时状态位是否写 1 清零。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「忙等待」有关的代码，最主要的风险是什么？\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n ticks++;\n printf(\"tick\\n\");\n}\n请把它放到DMA 完成标志检查里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作"
    ],
    "answer": 3,
    "explanation": "中断代码要短、确定、少阻塞。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。\n补测时把代码放到设备忙等待循环里，重点看首次调用时volatile 是否只解决可见性。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「最坏执行时间」有关的代码，最主要的风险是什么？\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n ticks++;\n printf(\"tick\\n\");\n}\n请把它放到DMA 完成标志检查里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 0,
    "explanation": "中断代码要短、确定、少阻塞。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。\n补测时把代码放到中断和主循环共享状态里，重点看首次调用时读改写是否需要临界区。",
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
    "question": "这段「中断共享变量」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到UART 接收回调里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 1,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到低功耗唤醒标志里，重点看首次调用时状态位是否写 1 清零。",
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
    "question": "这段「临界区保护」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到UART 接收回调里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 2,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到设备忙等待循环里，重点看首次调用时状态位是否写 1 清零。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「中断中printf风险」有关的代码，最主要的风险是什么？\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n ticks++;\n printf(\"tick\\n\");\n}\n请把它放到UART 接收回调里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作"
    ],
    "answer": 3,
    "explanation": "中断代码要短、确定、少阻塞。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。\n补测时把代码放到寄存器状态位清除里，重点看首次调用时读改写是否需要临界区。",
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
    "question": "在RTOS 任务异常退出中看到下面这段和「中断中malloc限制」有关的代码，最主要的风险是什么？\nvoid UART_IRQHandler(void) {\n uint8_t *buf = malloc(64);\n uart_read(buf, 64);\n enqueue(buf);\n}\n请把它放到配置表重新加载里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "中断中动态分配内存不可控，还缺少 malloc 失败处理和所有权释放约定",
      "malloc 在中断中一定比静态缓冲更快",
      "enqueue 后 buf 会被 C 语言自动释放",
      "只要 buf 是 uint8_t *，uart_read 就不会失败"
    ],
    "answer": 0,
    "explanation": "ISR 中应避免不可预测耗时和复杂资源管理。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项同时指出实时性、失败路径和所有权。\n补测时把代码放到配置表重新加载里，重点看首次调用时分配失败后是否继续使用。",
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
    "question": "这段「环形缓冲区同步」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到UART 接收回调里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 1,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到中断和主循环共享状态里，重点看首次调用时ISR 中是否调用阻塞函数。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「忙等待」有关的代码，最主要的风险是什么？\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n ticks++;\n printf(\"tick\\n\");\n}\n请把它放到UART 接收回调里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 2,
    "explanation": "中断代码要短、确定、少阻塞。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。\n补测时把代码放到DMA 完成标志检查里，重点看首次调用时读改写是否需要临界区。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「最坏执行时间」有关的代码，最主要的风险是什么？\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n ticks++;\n printf(\"tick\\n\");\n}\n请把它放到UART 接收回调里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作"
    ],
    "answer": 3,
    "explanation": "中断代码要短、确定、少阻塞。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。\n补测时把代码放到UART 接收回调里，重点看首次调用时读改写是否需要临界区。",
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
    "question": "这段「中断共享变量」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到SysTick 计数里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到寄存器状态位清除里，重点看首次调用时ISR 中是否调用阻塞函数。",
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
    "question": "这段「临界区保护」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到SysTick 计数里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 1,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到DMA 完成标志检查里，重点看首次调用时ISR 中是否调用阻塞函数。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「中断中printf风险」有关的代码，最主要的风险是什么？\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n ticks++;\n printf(\"tick\\n\");\n}\n请把它放到SysTick 计数里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 2,
    "explanation": "中断代码要短、确定、少阻塞。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。\n补测时把代码放到SysTick 计数里，重点看首次调用时读改写是否需要临界区。",
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
    "question": "在RTOS 任务异常退出中看到下面这段和「中断中malloc限制」有关的代码，最主要的风险是什么？\nvoid UART_IRQHandler(void) {\n uint8_t *buf = malloc(64);\n uart_read(buf, 64);\n enqueue(buf);\n}\n请把它放到链表节点回收里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "malloc 在中断中一定比静态缓冲更快",
      "enqueue 后 buf 会被 C 语言自动释放",
      "只要 buf 是 uint8_t *，uart_read 就不会失败",
      "中断中动态分配内存不可控，还缺少 malloc 失败处理和所有权释放约定"
    ],
    "answer": 3,
    "explanation": "ISR 中应避免不可预测耗时和复杂资源管理。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项同时指出实时性、失败路径和所有权。\n补测时把代码放到链表节点回收里，重点看首次调用时分配失败后是否继续使用。",
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
    "question": "这段「环形缓冲区同步」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到SysTick 计数里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到UART 接收回调里，重点看首次调用时ISR 中是否调用阻塞函数。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「忙等待」有关的代码，最主要的风险是什么？\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n ticks++;\n printf(\"tick\\n\");\n}\n请把它放到SysTick 计数里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 1,
    "explanation": "中断代码要短、确定、少阻塞。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。\n补测时把代码放到GPIO 输出寄存器修改里，重点看首次调用时读改写是否需要临界区。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「最坏执行时间」有关的代码，最主要的风险是什么？\nvolatile uint32_t ticks;\n\nvoid SysTick_Handler(void) {\n ticks++;\n printf(\"tick\\n\");\n}\n请把它放到SysTick 计数里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "ticks 有 volatile 修饰，所以 ticks++ 在所有平台都原子",
      "printf 只打印一行，放在中断里一定不会阻塞",
      "ISR 中调用 printf 风险高，ticks++ 也不等于通用原子操作",
      "ISR 中函数调用越多，实时性通常越好"
    ],
    "answer": 2,
    "explanation": "中断代码要短、确定、少阻塞。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 只处理可见性，不负责互斥、原子性和最坏执行时间。\n补测时把代码放到低功耗唤醒标志里，重点看首次调用时读改写是否需要临界区。",
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

module.exports = [
  {
    "id": "c509",
    "chapter": "const、volatile、static、extern",
    "topic": "const对象",
    "difficulty": "基础",
    "question": "驱动初始化失败路径里的这段「const对象」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：const 修饰的是指针本身还是指向对象，调用方是否仍可能改到底层数据。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到协议解析输出参数里，重点看首次调用时指针是否先指向合法对象。",
    "tags": [
      "const",
      "只读",
      "扩展题库",
      "代码相关题",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0088",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c510",
    "chapter": "const、volatile、static、extern",
    "topic": "const参数",
    "difficulty": "进阶",
    "question": "驱动初始化失败路径里的这段「const参数」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 2,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：const 修饰的是指针本身还是指向对象，调用方是否仍可能改到底层数据。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到驱动初始化失败路径里，重点看首次调用时NULL 路径是否提前返回。",
    "tags": [
      "const",
      "函数参数",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "补漏"
    ],
    "knowledgeId": "kp_0089",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c511",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile变量",
    "difficulty": "易错",
    "question": "驱动初始化失败路径里的这段「volatile变量」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问"
    ],
    "answer": 3,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到协议解析输出参数里，重点看首次调用时指针是否先指向合法对象。",
    "tags": [
      "volatile",
      "优化",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0090",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c512",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile中断共享变量",
    "difficulty": "面试",
    "question": "这段「volatile中断共享变量」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到中断和主循环共享状态里，重点看首次调用时读改写是否需要临界区。",
    "tags": [
      "volatile",
      "中断",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0091",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c513",
    "chapter": "const、volatile、static、extern",
    "topic": "static局部变量",
    "difficulty": "基础",
    "question": "读完这段「static局部变量」代码，哪项判断正确？\nint next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "options": [
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值",
      "两次都返回 0，因为 static 变量不能修改",
      "返回值不确定，因为 static 局部变量一定未初始化"
    ],
    "answer": 1,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 读这段代码时要盯住：变量的存储期、链接属性和多次调用后的残留状态有没有被混用。",
    "tags": [
      "static",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码阅读"
    ],
    "knowledgeId": "kp_0092",
    "type": "code_read",
    "code": "int next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c514",
    "chapter": "const、volatile、static、extern",
    "topic": "static全局变量",
    "difficulty": "进阶",
    "question": "读完这段「static全局变量」代码，哪项判断正确？\nint next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "options": [
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "两次都返回 0，因为 static 变量不能修改",
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值",
      "返回值不确定，因为 static 局部变量一定未初始化"
    ],
    "answer": 2,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 读这段代码时要盯住：变量的存储期、链接属性和多次调用后的残留状态有没有被混用。\n补测时把代码放到驱动初始化标志里，重点看首次调用时跨调用残留状态。",
    "tags": [
      "static",
      "内部链接",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0093",
    "type": "code_read",
    "code": "int next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c515",
    "chapter": "const、volatile、static、extern",
    "topic": "extern变量声明",
    "difficulty": "易错",
    "question": "这段「extern变量声明」代码还少一个关键保护，应该先补哪一步？\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "options": [
      "extern int g_mode;",
      "static int g_mode = 0;",
      "#define g_mode 0",
      "int g_mode = 0;"
    ],
    "answer": 3,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。 这段代码缺的不是语法，而是要补上：头文件只放声明，真正的对象定义必须且只能落在一个源文件里。 static 会变成内部链接，无法满足其他文件引用。",
    "tags": [
      "extern",
      "声明定义",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断"
    ],
    "knowledgeId": "kp_0094",
    "type": "missing_step",
    "code": "/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "reviewStatus": "待复核"
  },
  {
    "id": "c516",
    "chapter": "const、volatile、static、extern",
    "topic": "extern与头文件",
    "difficulty": "面试",
    "question": "这段「extern与头文件」代码还少一个关键保护，应该先补哪一步？\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "options": [
      "int g_mode = 0;",
      "extern int g_mode;",
      "static int g_mode = 0;",
      "#define g_mode 0"
    ],
    "answer": 0,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。 这段代码缺的不是语法，而是要补上：头文件只放声明，真正的对象定义必须且只能落在一个源文件里。 static 会变成内部链接，无法满足其他文件引用。\n补测时把代码放到头文件被多个模块包含里，重点看首次调用时是否只有一个外部定义。",
    "tags": [
      "extern",
      "头文件",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "补漏"
    ],
    "knowledgeId": "kp_0095",
    "type": "missing_step",
    "code": "/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "reviewStatus": "待复核"
  },
  {
    "id": "c517",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile const寄存器",
    "difficulty": "基础",
    "question": "驱动初始化失败路径里的这段「volatile const寄存器」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到驱动初始化失败路径里，重点看首次调用时NULL 路径是否提前返回。",
    "tags": [
      "volatile",
      "const",
      "寄存器",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0096",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c518",
    "chapter": "const、volatile、static、extern",
    "topic": "const对象",
    "difficulty": "进阶",
    "question": "驱动初始化失败路径里的这段「const对象」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到回调函数入参检查里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 2,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：const 修饰的是指针本身还是指向对象，调用方是否仍可能改到底层数据。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到回调函数入参检查里，重点看首次调用时NULL 路径是否提前返回。",
    "tags": [
      "const",
      "只读",
      "扩展题库",
      "代码相关题",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0088",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c519",
    "chapter": "const、volatile、static、extern",
    "topic": "const参数",
    "difficulty": "易错",
    "question": "驱动初始化失败路径里的这段「const参数」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到回调函数入参检查里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问"
    ],
    "answer": 3,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：const 修饰的是指针本身还是指向对象，调用方是否仍可能改到底层数据。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到DMA 缓冲区获取里，重点看首次调用时NULL 路径是否提前返回。",
    "tags": [
      "const",
      "函数参数",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "补漏"
    ],
    "knowledgeId": "kp_0089",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c520",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile变量",
    "difficulty": "面试",
    "question": "驱动初始化失败路径里的这段「volatile变量」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到回调函数入参检查里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 0,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到回调函数入参检查里，重点看首次调用时NULL 路径是否提前返回。",
    "tags": [
      "volatile",
      "优化",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0090",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c521",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile中断共享变量",
    "difficulty": "基础",
    "question": "这段「volatile中断共享变量」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到寄存器状态位清除里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 1,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到寄存器状态位清除里，重点看首次调用时读改写是否需要临界区。",
    "tags": [
      "volatile",
      "中断",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0091",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c522",
    "chapter": "const、volatile、static、extern",
    "topic": "static局部变量",
    "difficulty": "进阶",
    "question": "读完这段「static局部变量」代码，哪项判断正确？\nint next_id(void) {\n static int id = 0;\n return ++id;\n}\n请把它放到驱动初始化标志里判断，尤其看首次调用时跨调用残留状态。",
    "options": [
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "两次都返回 0，因为 static 变量不能修改",
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值",
      "返回值不确定，因为 static 局部变量一定未初始化"
    ],
    "answer": 2,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 读这段代码时要盯住：变量的存储期、链接属性和多次调用后的残留状态有没有被混用。\n补测时把代码放到中断次数统计里，重点看首次调用时跨调用残留状态。",
    "tags": [
      "static",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码阅读"
    ],
    "knowledgeId": "kp_0092",
    "type": "code_read",
    "code": "int next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c523",
    "chapter": "const、volatile、static、extern",
    "topic": "static全局变量",
    "difficulty": "易错",
    "question": "读完这段「static全局变量」代码，哪项判断正确？\nint next_id(void) {\n static int id = 0;\n return ++id;\n}\n请把它放到驱动初始化标志里判断，尤其看首次调用时跨调用残留状态。",
    "options": [
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "两次都返回 0，因为 static 变量不能修改",
      "返回值不确定，因为 static 局部变量一定未初始化",
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值"
    ],
    "answer": 3,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 读这段代码时要盯住：变量的存储期、链接属性和多次调用后的残留状态有没有被混用。\n补测时把代码放到滤波器历史值保存里，重点看首次调用时跨调用残留状态。",
    "tags": [
      "static",
      "内部链接",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0093",
    "type": "code_read",
    "code": "int next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c524",
    "chapter": "const、volatile、static、extern",
    "topic": "extern变量声明",
    "difficulty": "面试",
    "question": "这段「extern变量声明」代码还少一个关键保护，应该先补哪一步？\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */\n请把它放到头文件被多个模块包含里判断，尤其看首次调用时是否只有一个外部定义。",
    "options": [
      "int g_mode = 0;",
      "extern int g_mode;",
      "static int g_mode = 0;",
      "#define g_mode 0"
    ],
    "answer": 0,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。 这段代码缺的不是语法，而是要补上：头文件只放声明，真正的对象定义必须且只能落在一个源文件里。 static 会变成内部链接，无法满足其他文件引用。\n补测时把代码放到链接错误排查里，重点看首次调用时是否只有一个外部定义。",
    "tags": [
      "extern",
      "声明定义",
      "扩展题库",
      "代码相关题",
      "补漏",
      "interview"
    ],
    "knowledgeId": "kp_0094",
    "type": "missing_step",
    "code": "/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "reviewStatus": "待复核"
  },
  {
    "id": "c525",
    "chapter": "const、volatile、static、extern",
    "topic": "extern与头文件",
    "difficulty": "基础",
    "question": "这段「extern与头文件」代码还少一个关键保护，应该先补哪一步？\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */\n请把它放到头文件被多个模块包含里判断，尤其看首次调用时是否只有一个外部定义。",
    "options": [
      "extern int g_mode;",
      "int g_mode = 0;",
      "static int g_mode = 0;",
      "#define g_mode 0"
    ],
    "answer": 1,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。 这段代码缺的不是语法，而是要补上：头文件只放声明，真正的对象定义必须且只能落在一个源文件里。 static 会变成内部链接，无法满足其他文件引用。\n补测时把代码放到全局配置变量维护里，重点看首次调用时是否只有一个外部定义。",
    "tags": [
      "extern",
      "头文件",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "补漏"
    ],
    "knowledgeId": "kp_0095",
    "type": "missing_step",
    "code": "/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "reviewStatus": "待复核"
  },
  {
    "id": "c526",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile const寄存器",
    "difficulty": "进阶",
    "question": "驱动初始化失败路径里的这段「volatile const寄存器」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到回调函数入参检查里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 2,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到DMA 缓冲区获取里，重点看首次调用时NULL 路径是否提前返回。",
    "tags": [
      "volatile",
      "const",
      "寄存器",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0096",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c527",
    "chapter": "const、volatile、static、extern",
    "topic": "const对象",
    "difficulty": "易错",
    "question": "驱动初始化失败路径里的这段「const对象」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到DMA 缓冲区获取里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问"
    ],
    "answer": 3,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：const 修饰的是指针本身还是指向对象，调用方是否仍可能改到底层数据。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到链表遍历入口里，重点看首次调用时NULL 路径是否提前返回。",
    "tags": [
      "const",
      "只读",
      "扩展题库",
      "代码相关题",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0088",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c528",
    "chapter": "const、volatile、static、extern",
    "topic": "const参数",
    "difficulty": "面试",
    "question": "驱动初始化失败路径里的这段「const参数」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到DMA 缓冲区获取里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 0,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：const 修饰的是指针本身还是指向对象，调用方是否仍可能改到底层数据。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到设备句柄打开失败里，重点看首次调用时NULL 路径是否提前返回。",
    "tags": [
      "const",
      "函数参数",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "补漏"
    ],
    "knowledgeId": "kp_0089",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c529",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile变量",
    "difficulty": "基础",
    "question": "驱动初始化失败路径里的这段「volatile变量」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到DMA 缓冲区获取里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到链表遍历入口里，重点看首次调用时NULL 路径是否提前返回。",
    "tags": [
      "volatile",
      "优化",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0090",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c530",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile中断共享变量",
    "difficulty": "进阶",
    "question": "这段「volatile中断共享变量」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到DMA 完成标志检查里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 2,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到DMA 完成标志检查里，重点看首次调用时读改写是否需要临界区。",
    "tags": [
      "volatile",
      "中断",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0091",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c531",
    "chapter": "const、volatile、static、extern",
    "topic": "static局部变量",
    "difficulty": "易错",
    "question": "读完这段「static局部变量」代码，哪项判断正确？\nint next_id(void) {\n static int id = 0;\n return ++id;\n}\n请把它放到中断次数统计里判断，尤其看首次调用时跨调用残留状态。",
    "options": [
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "两次都返回 0，因为 static 变量不能修改",
      "返回值不确定，因为 static 局部变量一定未初始化",
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值"
    ],
    "answer": 3,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 读这段代码时要盯住：变量的存储期、链接属性和多次调用后的残留状态有没有被混用。\n补测时把代码放到低功耗恢复路径里，重点看首次调用时跨调用残留状态。",
    "tags": [
      "static",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "补漏",
      "代码阅读"
    ],
    "knowledgeId": "kp_0092",
    "type": "code_read",
    "code": "int next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c532",
    "chapter": "const、volatile、static、extern",
    "topic": "static全局变量",
    "difficulty": "面试",
    "question": "读完这段「static全局变量」代码，哪项判断正确？\nint next_id(void) {\n static int id = 0;\n return ++id;\n}\n请把它放到中断次数统计里判断，尤其看首次调用时跨调用残留状态。",
    "options": [
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值",
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "两次都返回 0，因为 static 变量不能修改",
      "返回值不确定，因为 static 局部变量一定未初始化"
    ],
    "answer": 0,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 读这段代码时要盯住：变量的存储期、链接属性和多次调用后的残留状态有没有被混用。\n补测时把代码放到单元测试重复调用里，重点看首次调用时跨调用残留状态。",
    "tags": [
      "static",
      "内部链接",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0093",
    "type": "code_read",
    "code": "int next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c533",
    "chapter": "const、volatile、static、extern",
    "topic": "extern变量声明",
    "difficulty": "基础",
    "question": "这段「extern变量声明」代码还少一个关键保护，应该先补哪一步？\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */\n请把它放到链接错误排查里判断，尤其看首次调用时是否只有一个外部定义。",
    "options": [
      "extern int g_mode;",
      "int g_mode = 0;",
      "static int g_mode = 0;",
      "#define g_mode 0"
    ],
    "answer": 1,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。 这段代码缺的不是语法，而是要补上：头文件只放声明，真正的对象定义必须且只能落在一个源文件里。 static 会变成内部链接，无法满足其他文件引用。\n补测时把代码放到驱动公共状态导出里，重点看首次调用时是否只有一个外部定义。",
    "tags": [
      "extern",
      "声明定义",
      "扩展题库",
      "代码相关题",
      "补漏"
    ],
    "knowledgeId": "kp_0094",
    "type": "missing_step",
    "code": "/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "reviewStatus": "待复核"
  },
  {
    "id": "c534",
    "chapter": "const、volatile、static、extern",
    "topic": "extern与头文件",
    "difficulty": "进阶",
    "question": "这段「extern与头文件」代码还少一个关键保护，应该先补哪一步？\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */\n请把它放到链接错误排查里判断，尤其看首次调用时是否只有一个外部定义。",
    "options": [
      "extern int g_mode;",
      "static int g_mode = 0;",
      "int g_mode = 0;",
      "#define g_mode 0"
    ],
    "answer": 2,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。 这段代码缺的不是语法，而是要补上：头文件只放声明，真正的对象定义必须且只能落在一个源文件里。 static 会变成内部链接，无法满足其他文件引用。\n补测时把代码放到单元测试替换全局符号里，重点看首次调用时是否只有一个外部定义。",
    "tags": [
      "extern",
      "头文件",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "补漏"
    ],
    "knowledgeId": "kp_0095",
    "type": "missing_step",
    "code": "/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "reviewStatus": "待复核"
  },
  {
    "id": "c535",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile const寄存器",
    "difficulty": "易错",
    "question": "驱动初始化失败路径里的这段「volatile const寄存器」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到DMA 缓冲区获取里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问"
    ],
    "answer": 3,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到设备句柄打开失败里，重点看首次调用时NULL 路径是否提前返回。",
    "tags": [
      "volatile",
      "const",
      "寄存器",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0096",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c536",
    "chapter": "const、volatile、static、extern",
    "topic": "const对象",
    "difficulty": "面试",
    "question": "驱动初始化失败路径里的这段「const对象」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到链表遍历入口里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 0,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：const 修饰的是指针本身还是指向对象，调用方是否仍可能改到底层数据。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到命令解析返回对象里，重点看首次调用时NULL 路径是否提前返回。",
    "tags": [
      "const",
      "只读",
      "扩展题库",
      "代码相关题",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0088",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c537",
    "chapter": "const、volatile、static、extern",
    "topic": "const参数",
    "difficulty": "基础",
    "question": "驱动初始化失败路径里的这段「const参数」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到链表遍历入口里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：const 修饰的是指针本身还是指向对象，调用方是否仍可能改到底层数据。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到传感器数据指针更新里，重点看首次调用时NULL 路径是否提前返回。",
    "tags": [
      "const",
      "函数参数",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "补漏"
    ],
    "knowledgeId": "kp_0089",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c538",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile变量",
    "difficulty": "进阶",
    "question": "驱动初始化失败路径里的这段「volatile变量」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到链表遍历入口里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 2,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到命令解析返回对象里，重点看首次调用时NULL 路径是否提前返回。",
    "tags": [
      "volatile",
      "优化",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0090",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c539",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile中断共享变量",
    "difficulty": "易错",
    "question": "这段「volatile中断共享变量」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到UART 接收回调里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读"
    ],
    "answer": 3,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到UART 接收回调里，重点看首次调用时读改写是否需要临界区。",
    "tags": [
      "volatile",
      "中断",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0091",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c540",
    "chapter": "const、volatile、static、extern",
    "topic": "static局部变量",
    "difficulty": "面试",
    "question": "读完这段「static局部变量」代码，哪项判断正确？\nint next_id(void) {\n static int id = 0;\n return ++id;\n}\n请把它放到滤波器历史值保存里判断，尤其看首次调用时跨调用残留状态。",
    "options": [
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值",
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "两次都返回 0，因为 static 变量不能修改",
      "返回值不确定，因为 static 局部变量一定未初始化"
    ],
    "answer": 0,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 读这段代码时要盯住：变量的存储期、链接属性和多次调用后的残留状态有没有被混用。\n补测时把代码放到多任务共享模块函数里，重点看首次调用时跨调用残留状态。",
    "tags": [
      "static",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码阅读"
    ],
    "knowledgeId": "kp_0092",
    "type": "code_read",
    "code": "int next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c541",
    "chapter": "const、volatile、static、extern",
    "topic": "static全局变量",
    "difficulty": "基础",
    "question": "读完这段「static全局变量」代码，哪项判断正确？\nint next_id(void) {\n static int id = 0;\n return ++id;\n}\n请把它放到滤波器历史值保存里判断，尤其看首次调用时跨调用残留状态。",
    "options": [
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值",
      "两次都返回 0，因为 static 变量不能修改",
      "返回值不确定，因为 static 局部变量一定未初始化"
    ],
    "answer": 1,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 读这段代码时要盯住：变量的存储期、链接属性和多次调用后的残留状态有没有被混用。\n补测时把代码放到固件升级进度记录里，重点看首次调用时跨调用残留状态。",
    "tags": [
      "static",
      "内部链接",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "interview",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0093",
    "type": "code_read",
    "code": "int next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c542",
    "chapter": "const、volatile、static、extern",
    "topic": "extern变量声明",
    "difficulty": "进阶",
    "question": "这段「extern变量声明」代码还少一个关键保护，应该先补哪一步？\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */\n请把它放到全局配置变量维护里判断，尤其看首次调用时是否只有一个外部定义。",
    "options": [
      "extern int g_mode;",
      "static int g_mode = 0;",
      "int g_mode = 0;",
      "#define g_mode 0"
    ],
    "answer": 2,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。 这段代码缺的不是语法，而是要补上：头文件只放声明，真正的对象定义必须且只能落在一个源文件里。 static 会变成内部链接，无法满足其他文件引用。\n补测时把代码放到库文件接口封装里，重点看首次调用时是否只有一个外部定义。",
    "tags": [
      "extern",
      "声明定义",
      "扩展题库",
      "代码相关题",
      "补漏"
    ],
    "knowledgeId": "kp_0094",
    "type": "missing_step",
    "code": "/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "reviewStatus": "待复核"
  },
  {
    "id": "c543",
    "chapter": "const、volatile、static、extern",
    "topic": "extern与头文件",
    "difficulty": "易错",
    "question": "这段「extern与头文件」代码还少一个关键保护，应该先补哪一步？\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */\n请把它放到全局配置变量维护里判断，尤其看首次调用时是否只有一个外部定义。",
    "options": [
      "extern int g_mode;",
      "static int g_mode = 0;",
      "#define g_mode 0",
      "int g_mode = 0;"
    ],
    "answer": 3,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。 这段代码缺的不是语法，而是要补上：头文件只放声明，真正的对象定义必须且只能落在一个源文件里。 static 会变成内部链接，无法满足其他文件引用。\n补测时把代码放到固件参数模块拆分里，重点看首次调用时是否只有一个外部定义。",
    "tags": [
      "extern",
      "头文件",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "补漏"
    ],
    "knowledgeId": "kp_0095",
    "type": "missing_step",
    "code": "/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "reviewStatus": "待复核"
  },
  {
    "id": "c544",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile const寄存器",
    "difficulty": "面试",
    "question": "驱动初始化失败路径里的这段「volatile const寄存器」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到链表遍历入口里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 0,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到传感器数据指针更新里，重点看首次调用时NULL 路径是否提前返回。",
    "tags": [
      "volatile",
      "const",
      "寄存器",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0096",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c545",
    "chapter": "const、volatile、static、extern",
    "topic": "const对象",
    "difficulty": "基础",
    "question": "驱动初始化失败路径里的这段「const对象」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到设备句柄打开失败里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：const 修饰的是指针本身还是指向对象，调用方是否仍可能改到底层数据。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到协议解析输出参数里，重点看首次调用时NULL 路径是否提前返回。",
    "tags": [
      "const",
      "只读",
      "扩展题库",
      "代码相关题",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0088",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c546",
    "chapter": "const、volatile、static、extern",
    "topic": "const参数",
    "difficulty": "进阶",
    "question": "驱动初始化失败路径里的这段「const参数」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到设备句柄打开失败里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 2,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：const 修饰的是指针本身还是指向对象，调用方是否仍可能改到底层数据。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到驱动初始化失败路径里，重点看首次调用时局部对象地址是否逃逸。",
    "tags": [
      "const",
      "函数参数",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "补漏"
    ],
    "knowledgeId": "kp_0089",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c547",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile变量",
    "difficulty": "易错",
    "question": "驱动初始化失败路径里的这段「volatile变量」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到设备句柄打开失败里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问"
    ],
    "answer": 3,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到协议解析输出参数里，重点看首次调用时NULL 路径是否提前返回。",
    "tags": [
      "volatile",
      "优化",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0090",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c548",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile中断共享变量",
    "difficulty": "面试",
    "question": "这段「volatile中断共享变量」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到SysTick 计数里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到SysTick 计数里，重点看首次调用时读改写是否需要临界区。",
    "tags": [
      "volatile",
      "中断",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0091",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c549",
    "chapter": "const、volatile、static、extern",
    "topic": "static局部变量",
    "difficulty": "基础",
    "question": "读完这段「static局部变量」代码，哪项判断正确？\nint next_id(void) {\n static int id = 0;\n return ++id;\n}\n请把它放到低功耗恢复路径里判断，尤其看首次调用时跨调用残留状态。",
    "options": [
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值",
      "两次都返回 0，因为 static 变量不能修改",
      "返回值不确定，因为 static 局部变量一定未初始化"
    ],
    "answer": 1,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 读这段代码时要盯住：变量的存储期、链接属性和多次调用后的残留状态有没有被混用。\n补测时把代码放到状态机计数函数里，重点看首次调用时是否需要重新初始化。",
    "tags": [
      "static",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "嵌入式场景",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码阅读"
    ],
    "knowledgeId": "kp_0092",
    "type": "code_read",
    "code": "int next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c550",
    "chapter": "const、volatile、static、extern",
    "topic": "static全局变量",
    "difficulty": "进阶",
    "question": "读完这段「static全局变量」代码，哪项判断正确？\nint next_id(void) {\n static int id = 0;\n return ++id;\n}\n请把它放到低功耗恢复路径里判断，尤其看首次调用时跨调用残留状态。",
    "options": [
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "两次都返回 0，因为 static 变量不能修改",
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值",
      "返回值不确定，因为 static 局部变量一定未初始化"
    ],
    "answer": 2,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 读这段代码时要盯住：变量的存储期、链接属性和多次调用后的残留状态有没有被混用。\n补测时把代码放到驱动初始化标志里，重点看首次调用时是否需要重新初始化。",
    "tags": [
      "static",
      "内部链接",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0093",
    "type": "code_read",
    "code": "int next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c551",
    "chapter": "const、volatile、static、extern",
    "topic": "extern变量声明",
    "difficulty": "易错",
    "question": "这段「extern变量声明」代码还少一个关键保护，应该先补哪一步？\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */\n请把它放到驱动公共状态导出里判断，尤其看首次调用时是否只有一个外部定义。",
    "options": [
      "extern int g_mode;",
      "static int g_mode = 0;",
      "#define g_mode 0",
      "int g_mode = 0;"
    ],
    "answer": 3,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。 这段代码缺的不是语法，而是要补上：头文件只放声明，真正的对象定义必须且只能落在一个源文件里。 static 会变成内部链接，无法满足其他文件引用。\n补测时把代码放到多文件编译里，重点看首次调用时声明和定义类型是否一致。",
    "tags": [
      "extern",
      "声明定义",
      "扩展题库",
      "代码相关题",
      "补漏"
    ],
    "knowledgeId": "kp_0094",
    "type": "missing_step",
    "code": "/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "reviewStatus": "待复核"
  },
  {
    "id": "c552",
    "chapter": "const、volatile、static、extern",
    "topic": "extern与头文件",
    "difficulty": "面试",
    "question": "这段「extern与头文件」代码还少一个关键保护，应该先补哪一步？\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */\n请把它放到驱动公共状态导出里判断，尤其看首次调用时是否只有一个外部定义。",
    "options": [
      "int g_mode = 0;",
      "extern int g_mode;",
      "static int g_mode = 0;",
      "#define g_mode 0"
    ],
    "answer": 0,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。 这段代码缺的不是语法，而是要补上：头文件只放声明，真正的对象定义必须且只能落在一个源文件里。 static 会变成内部链接，无法满足其他文件引用。\n补测时把代码放到头文件被多个模块包含里，重点看首次调用时声明和定义类型是否一致。",
    "tags": [
      "extern",
      "头文件",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "补漏"
    ],
    "knowledgeId": "kp_0095",
    "type": "missing_step",
    "code": "/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "reviewStatus": "待复核"
  },
  {
    "id": "c553",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile const寄存器",
    "difficulty": "基础",
    "question": "驱动初始化失败路径里的这段「volatile const寄存器」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到设备句柄打开失败里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到驱动初始化失败路径里，重点看首次调用时局部对象地址是否逃逸。",
    "tags": [
      "volatile",
      "const",
      "寄存器",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0096",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  }
]

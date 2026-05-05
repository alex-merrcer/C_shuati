module.exports = [
  {
    "id": "c509",
    "chapter": "const、volatile、static、extern",
    "topic": "const对象",
    "difficulty": "基础",
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「const对象」的量产固件稳定性角度判断（样例组 24）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「const参数」的初始化顺序角度判断（样例组 25）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 2,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「volatile变量」的边界条件角度判断（样例组 26）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问"
    ],
    "answer": 3,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「volatile中断共享变量」的失败路径角度判断（样例组 27）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "连续调用 next_id 两次，返回值更可能是什么？\n请重点从「static局部变量」的生命周期角度判断（样例组 28）。\nint next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "options": [
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值",
      "两次都返回 0，因为 static 变量不能修改",
      "返回值不确定，因为 static 局部变量一定未初始化"
    ],
    "answer": 1,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "连续调用 next_id 两次，返回值更可能是什么？\n请重点从「static全局变量」的可移植性角度判断（样例组 29）。\nint next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "options": [
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "两次都返回 0，因为 static 变量不能修改",
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值",
      "返回值不确定，因为 static 局部变量一定未初始化"
    ],
    "answer": 2,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "下面哪个选项最适合填入 config.c，完成 extern 声明对应的唯一定义？\n请重点从「extern变量声明」的中断安全角度判断（样例组 30）。\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "options": [
      "extern int g_mode;",
      "static int g_mode = 0;",
      "#define g_mode 0",
      "int g_mode = 0;"
    ],
    "answer": 3,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。static 会变成内部链接，无法满足其他文件引用。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面哪个选项最适合填入 config.c，完成 extern 声明对应的唯一定义？\n请重点从「extern与头文件」的长期运行稳定性角度判断（样例组 31）。\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "options": [
      "int g_mode = 0;",
      "extern int g_mode;",
      "static int g_mode = 0;",
      "#define g_mode 0"
    ],
    "answer": 0,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。static 会变成内部链接，无法满足其他文件引用。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「volatile const寄存器」的接口契约角度判断（样例组 32）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「const对象」的单元测试覆盖角度判断（样例组 33）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 2,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「const参数」的代码评审角度判断（样例组 34）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问"
    ],
    "answer": 3,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「volatile变量」的内存破坏定位角度判断（样例组 35）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 0,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「volatile中断共享变量」的寄存器副作用角度判断（样例组 36）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 1,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "连续调用 next_id 两次，返回值更可能是什么？\n请重点从「static局部变量」的编译优化影响角度判断（样例组 37）。\nint next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "options": [
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "两次都返回 0，因为 static 变量不能修改",
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值",
      "返回值不确定，因为 static 局部变量一定未初始化"
    ],
    "answer": 2,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "连续调用 next_id 两次，返回值更可能是什么？\n请重点从「static全局变量」的资源受限 MCU角度判断（样例组 38）。\nint next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "options": [
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "两次都返回 0，因为 static 变量不能修改",
      "返回值不确定，因为 static 局部变量一定未初始化",
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值"
    ],
    "answer": 3,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "下面哪个选项最适合填入 config.c，完成 extern 声明对应的唯一定义？\n请重点从「extern变量声明」的面试追问角度判断（样例组 39）。\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "options": [
      "int g_mode = 0;",
      "extern int g_mode;",
      "static int g_mode = 0;",
      "#define g_mode 0"
    ],
    "answer": 0,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。static 会变成内部链接，无法满足其他文件引用。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面哪个选项最适合填入 config.c，完成 extern 声明对应的唯一定义？\n请重点从「extern与头文件」的调试复盘角度判断（样例组 40）。\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "options": [
      "extern int g_mode;",
      "int g_mode = 0;",
      "static int g_mode = 0;",
      "#define g_mode 0"
    ],
    "answer": 1,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。static 会变成内部链接，无法满足其他文件引用。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「volatile const寄存器」的量产固件稳定性角度判断（样例组 41）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 2,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「const对象」的初始化顺序角度判断（样例组 42）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问"
    ],
    "answer": 3,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「const参数」的边界条件角度判断（样例组 43）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 0,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「volatile变量」的失败路径角度判断（样例组 44）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「volatile中断共享变量」的生命周期角度判断（样例组 45）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 2,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "连续调用 next_id 两次，返回值更可能是什么？\n请重点从「static局部变量」的可移植性角度判断（样例组 46）。\nint next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "options": [
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "两次都返回 0，因为 static 变量不能修改",
      "返回值不确定，因为 static 局部变量一定未初始化",
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值"
    ],
    "answer": 3,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "连续调用 next_id 两次，返回值更可能是什么？\n请重点从「static全局变量」的中断安全角度判断（样例组 47）。\nint next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "options": [
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值",
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "两次都返回 0，因为 static 变量不能修改",
      "返回值不确定，因为 static 局部变量一定未初始化"
    ],
    "answer": 0,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "下面哪个选项最适合填入 config.c，完成 extern 声明对应的唯一定义？\n请重点从「extern变量声明」的长期运行稳定性角度判断（样例组 48）。\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "options": [
      "extern int g_mode;",
      "int g_mode = 0;",
      "static int g_mode = 0;",
      "#define g_mode 0"
    ],
    "answer": 1,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。static 会变成内部链接，无法满足其他文件引用。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面哪个选项最适合填入 config.c，完成 extern 声明对应的唯一定义？\n请重点从「extern与头文件」的接口契约角度判断（样例组 49）。\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "options": [
      "extern int g_mode;",
      "static int g_mode = 0;",
      "int g_mode = 0;",
      "#define g_mode 0"
    ],
    "answer": 2,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。static 会变成内部链接，无法满足其他文件引用。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「volatile const寄存器」的单元测试覆盖角度判断（样例组 50）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问"
    ],
    "answer": 3,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「const对象」的代码评审角度判断（样例组 51）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 0,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「const参数」的内存破坏定位角度判断（样例组 52）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「volatile变量」的寄存器副作用角度判断（样例组 53）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 2,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「volatile中断共享变量」的编译优化影响角度判断（样例组 54）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读"
    ],
    "answer": 3,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "连续调用 next_id 两次，返回值更可能是什么？\n请重点从「static局部变量」的资源受限 MCU角度判断（样例组 55）。\nint next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "options": [
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值",
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "两次都返回 0，因为 static 变量不能修改",
      "返回值不确定，因为 static 局部变量一定未初始化"
    ],
    "answer": 0,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "连续调用 next_id 两次，返回值更可能是什么？\n请重点从「static全局变量」的面试追问角度判断（样例组 56）。\nint next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "options": [
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值",
      "两次都返回 0，因为 static 变量不能修改",
      "返回值不确定，因为 static 局部变量一定未初始化"
    ],
    "answer": 1,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "下面哪个选项最适合填入 config.c，完成 extern 声明对应的唯一定义？\n请重点从「extern变量声明」的调试复盘角度判断（样例组 57）。\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "options": [
      "extern int g_mode;",
      "static int g_mode = 0;",
      "int g_mode = 0;",
      "#define g_mode 0"
    ],
    "answer": 2,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。static 会变成内部链接，无法满足其他文件引用。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面哪个选项最适合填入 config.c，完成 extern 声明对应的唯一定义？\n请重点从「extern与头文件」的量产固件稳定性角度判断（样例组 58）。\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "options": [
      "extern int g_mode;",
      "static int g_mode = 0;",
      "#define g_mode 0",
      "int g_mode = 0;"
    ],
    "answer": 3,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。static 会变成内部链接，无法满足其他文件引用。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「volatile const寄存器」的初始化顺序角度判断（样例组 59）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 0,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「const对象」的边界条件角度判断（样例组 60）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「const参数」的失败路径角度判断（样例组 61）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 2,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「volatile变量」的生命周期角度判断（样例组 62）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问"
    ],
    "answer": 3,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「volatile中断共享变量」的可移植性角度判断（样例组 63）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "连续调用 next_id 两次，返回值更可能是什么？\n请重点从「static局部变量」的中断安全角度判断（样例组 64）。\nint next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "options": [
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值",
      "两次都返回 0，因为 static 变量不能修改",
      "返回值不确定，因为 static 局部变量一定未初始化"
    ],
    "answer": 1,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "连续调用 next_id 两次，返回值更可能是什么？\n请重点从「static全局变量」的长期运行稳定性角度判断（样例组 65）。\nint next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "options": [
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "两次都返回 0，因为 static 变量不能修改",
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值",
      "返回值不确定，因为 static 局部变量一定未初始化"
    ],
    "answer": 2,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "下面哪个选项最适合填入 config.c，完成 extern 声明对应的唯一定义？\n请重点从「extern变量声明」的接口契约角度判断（样例组 66）。\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "options": [
      "extern int g_mode;",
      "static int g_mode = 0;",
      "#define g_mode 0",
      "int g_mode = 0;"
    ],
    "answer": 3,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。static 会变成内部链接，无法满足其他文件引用。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面哪个选项最适合填入 config.c，完成 extern 声明对应的唯一定义？\n请重点从「extern与头文件」的单元测试覆盖角度判断（样例组 67）。\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "options": [
      "int g_mode = 0;",
      "extern int g_mode;",
      "static int g_mode = 0;",
      "#define g_mode 0"
    ],
    "answer": 0,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。static 会变成内部链接，无法满足其他文件引用。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「volatile const寄存器」的代码评审角度判断（样例组 68）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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

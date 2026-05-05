module.exports = [
  {
    "id": "c021",
    "chapter": "const、volatile、static、extern",
    "topic": "static 局部变量",
    "difficulty": "基础",
    "question": "连续调用 next_id 两次，返回值更可能是什么？\n请重点从「static 局部变量」的可移植性角度判断（样例组 21）。\nint next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
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
      "存储期",
      "代码相关题",
      "嵌入式场景",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码阅读"
    ],
    "knowledgeId": "kp_0097",
    "type": "code_read",
    "code": "int next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c022",
    "chapter": "const、volatile、static、extern",
    "topic": "extern 声明",
    "difficulty": "基础",
    "question": "下面哪个选项最适合填入 config.c，完成 extern 声明对应的唯一定义？\n请重点从「extern 声明」的中断安全角度判断（样例组 22）。\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
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
      "全局变量",
      "代码相关题",
      "代码阅读",
      "补漏"
    ],
    "knowledgeId": "kp_0098",
    "type": "missing_step",
    "code": "/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "reviewStatus": "待复核"
  },
  {
    "id": "c023",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile",
    "difficulty": "进阶",
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「volatile」的长期运行稳定性角度判断（样例组 23）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
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
      "寄存器",
      "代码相关题",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0099",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c024",
    "chapter": "const、volatile、static、extern",
    "topic": "const 指针",
    "difficulty": "易错",
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「const 指针」的接口契约角度判断（样例组 24）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
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
      "指针",
      "代码相关题",
      "嵌入式场景",
      "补漏"
    ],
    "knowledgeId": "kp_0100",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  }
]

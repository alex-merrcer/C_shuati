module.exports = [
  {
    "id": "c021",
    "chapter": "const、volatile、static、extern",
    "topic": "static 局部变量",
    "difficulty": "基础",
    "question": "读完这段「static 局部变量」代码，哪项判断正确？\nint next_id(void) {\n    static int id = 0;\n    return ++id;\n}",
    "options": [
      "两次都返回 1，因为局部变量每次调用都会重新初始化",
      "第一次返回 1，第二次返回 2，因为 static 局部变量只初始化一次并保持值",
      "两次都返回 0，因为 static 变量不能修改",
      "返回值不确定，因为 static 局部变量一定未初始化"
    ],
    "answer": 1,
    "explanation": "static 局部变量具有静态存储期，但作用域仍在函数内部；它会跨调用保留状态。 读这段代码时要盯住：变量的存储期、链接属性和多次调用后的残留状态有没有被混用。\n补测时把代码放到中断次数统计里，重点看首次调用时是否需要重新初始化。",
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
    "question": "这段「extern 声明」代码还少一个关键保护，应该先补哪一步？\n/* config.h */\nextern int g_mode;\n\n/* config.c */\n/* ____ */",
    "options": [
      "extern int g_mode;",
      "static int g_mode = 0;",
      "int g_mode = 0;",
      "#define g_mode 0"
    ],
    "answer": 2,
    "explanation": "extern 声明不分配存储，必须在一个源文件里提供匹配的外部定义。 这段代码缺的不是语法，而是要补上：头文件只放声明，真正的对象定义必须且只能落在一个源文件里。 static 会变成内部链接，无法满足其他文件引用。\n补测时把代码放到链接错误排查里，重点看首次调用时声明和定义类型是否一致。",
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
    "question": "驱动初始化失败路径里的这段「volatile」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问"
    ],
    "answer": 3,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到回调函数入参检查里，重点看首次调用时局部对象地址是否逃逸。",
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
    "question": "驱动初始化失败路径里的这段「const 指针」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 0,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：const 修饰的是指针本身还是指向对象，调用方是否仍可能改到底层数据。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到回调函数入参检查里，重点看首次调用时局部对象地址是否逃逸。",
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

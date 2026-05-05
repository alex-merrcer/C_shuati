module.exports = [
  {
    "id": "c869",
    "chapter": "面试高频综合专题",
    "topic": "指针与数组区别",
    "difficulty": "易错",
    "question": "面试官给出这段「指针与数组区别」代码时，最可能考查哪一点？\nuint8_t buf[16];\nuint8_t *p = buf;\nsize_t a = sizeof(buf);\nsize_t b = sizeof(p);",
    "options": [
      "a 为 4，b 为 4",
      "a 为 16，b 为 4",
      "a 为 16，b 为 16",
      "a 为 1，b 为 4"
    ],
    "answer": 1,
    "explanation": "数组对象本身使用 sizeof 得到总字节数；指针变量使用 sizeof 得到指针大小。 面试官通常会追到：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 题干给出了平台假设。 本题应把标准保证、编译器扩展和项目工程约定分开。",
    "tags": [
      "面试",
      "数组指针",
      "扩展题库",
      "代码相关题",
      "interview",
      "行指针",
      "面试综合"
    ],
    "knowledgeId": "kp_0165",
    "type": "interview",
    "code": "uint8_t buf[16];\nuint8_t *p = buf;\nsize_t a = sizeof(buf);\nsize_t b = sizeof(p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c870",
    "chapter": "面试高频综合专题",
    "topic": "栈与堆区别",
    "difficulty": "面试",
    "question": "按题干给定假设分析这段「栈与堆区别」代码，哪项结果正确？\nsize_t parent(size_t i) {\n    return (i - 1u) / 2u;\n}\n\nsize_t left(size_t i) {\n    return 2u * i + 1u;\n}",
    "options": [
      "1 基数组堆，left 应该是 2 * i + 1",
      "链式堆结构，不需要数组下标",
      "0 基数组堆，parent 和 left 分别对应父节点与左孩子下标",
      "最大堆专用公式，最小堆不能使用"
    ],
    "answer": 2,
    "explanation": "C 数组通常是 0 基下标。 先按题干假设推导，再检查：栈空、栈满、top 更新顺序以及越界访问是否被处理。 最大堆和最小堆的下标公式相同，比较方向不同。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。",
    "tags": [
      "面试",
      "内存",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码计算",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "push操作",
      "pop操作",
      "上浮调整"
    ],
    "knowledgeId": "kp_0166",
    "type": "calculation",
    "code": "size_t parent(size_t i) {\n    return (i - 1u) / 2u;\n}\n\nsize_t left(size_t i) {\n    return 2u * i + 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c871",
    "chapter": "面试高频综合专题",
    "topic": "bss与data区别",
    "difficulty": "面试",
    "question": "面试官给出这段「bss与data区别」代码时，最可能考查哪一点？\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位"
    ],
    "answer": 3,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。 面试官通常会追到：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 不保证原子性，也不会分配内存。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到UART 接收回调里，重点看首次调用时volatile 是否只解决可见性。",
    "tags": [
      "面试",
      "段",
      "扩展题库",
      "代码相关题",
      "interview",
      "面试综合"
    ],
    "knowledgeId": "kp_0167",
    "type": "interview",
    "code": "#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c872",
    "chapter": "面试高频综合专题",
    "topic": "volatile作用",
    "difficulty": "面试",
    "question": "面试官给出这段「volatile作用」代码时，最可能考查哪一点？\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 0,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。 面试官通常会追到：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 不保证原子性，也不会分配内存。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到SysTick 计数里，重点看首次调用时volatile 是否只解决可见性。",
    "tags": [
      "面试",
      "volatile",
      "扩展题库",
      "代码相关题",
      "interview",
      "面试综合"
    ],
    "knowledgeId": "kp_0168",
    "type": "interview",
    "code": "#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c873",
    "chapter": "面试高频综合专题",
    "topic": "声明与定义区别",
    "difficulty": "易错",
    "question": "面试官给出这段「声明与定义区别」代码时，最可能考查哪一点？\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 1,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。 面试官通常会追到：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 不保证原子性，也不会分配内存。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到GPIO 输出寄存器修改里，重点看首次调用时volatile 是否只解决可见性。",
    "tags": [
      "面试",
      "链接",
      "扩展题库",
      "代码相关题",
      "interview",
      "面试综合"
    ],
    "knowledgeId": "kp_0169",
    "type": "interview",
    "code": "#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c874",
    "chapter": "面试高频综合专题",
    "topic": "指针与数组区别",
    "difficulty": "面试",
    "question": "面试官给出这段「指针与数组区别」代码时，最可能考查哪一点？\nuint8_t buf[16];\nuint8_t *p = buf;\nsize_t a = sizeof(buf);\nsize_t b = sizeof(p);\n请把它放到回调函数入参检查里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "a 为 4，b 为 4",
      "a 为 16，b 为 16",
      "a 为 16，b 为 4",
      "a 为 1，b 为 4"
    ],
    "answer": 2,
    "explanation": "数组对象本身使用 sizeof 得到总字节数；指针变量使用 sizeof 得到指针大小。 面试官通常会追到：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 题干给出了平台假设。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到回调函数入参检查里，重点看首次调用时指针是否先指向合法对象。",
    "tags": [
      "面试",
      "数组指针",
      "扩展题库",
      "代码相关题",
      "interview",
      "行指针",
      "面试综合"
    ],
    "knowledgeId": "kp_0165",
    "type": "interview",
    "code": "uint8_t buf[16];\nuint8_t *p = buf;\nsize_t a = sizeof(buf);\nsize_t b = sizeof(p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c875",
    "chapter": "面试高频综合专题",
    "topic": "栈与堆区别",
    "difficulty": "面试",
    "question": "按题干给定假设分析这段「栈与堆区别」代码，哪项结果正确？\nsize_t parent(size_t i) {\n return (i - 1u) / 2u;\n}\n\nsize_t left(size_t i) {\n return 2u * i + 1u;\n}\n请把它放到中断嵌套计数栈里判断，尤其看首次调用时top 初值是否正确。",
    "options": [
      "1 基数组堆，left 应该是 2 * i + 1",
      "链式堆结构，不需要数组下标",
      "最大堆专用公式，最小堆不能使用",
      "0 基数组堆，parent 和 left 分别对应父节点与左孩子下标"
    ],
    "answer": 3,
    "explanation": "C 数组通常是 0 基下标。 先按题干假设推导，再检查：栈空、栈满、top 更新顺序以及越界访问是否被处理。 最大堆和最小堆的下标公式相同，比较方向不同。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到中断嵌套计数栈里，重点看首次调用时top 初值是否正确。",
    "tags": [
      "面试",
      "内存",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "push操作",
      "pop操作",
      "上浮调整"
    ],
    "knowledgeId": "kp_0166",
    "type": "calculation",
    "code": "size_t parent(size_t i) {\n    return (i - 1u) / 2u;\n}\n\nsize_t left(size_t i) {\n    return 2u * i + 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c876",
    "chapter": "面试高频综合专题",
    "topic": "bss与data区别",
    "difficulty": "面试",
    "question": "面试官给出这段「bss与data区别」代码时，最可能考查哪一点？\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);\n请把它放到寄存器状态位清除里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 0,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。 面试官通常会追到：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 不保证原子性，也不会分配内存。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到低功耗唤醒标志里，重点看首次调用时volatile 是否只解决可见性。",
    "tags": [
      "面试",
      "段",
      "扩展题库",
      "代码相关题",
      "interview",
      "面试综合"
    ],
    "knowledgeId": "kp_0167",
    "type": "interview",
    "code": "#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c877",
    "chapter": "面试高频综合专题",
    "topic": "volatile作用",
    "difficulty": "易错",
    "question": "面试官给出这段「volatile作用」代码时，最可能考查哪一点？\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);\n请把它放到寄存器状态位清除里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 1,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。 面试官通常会追到：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 不保证原子性，也不会分配内存。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到设备忙等待循环里，重点看首次调用时volatile 是否只解决可见性。",
    "tags": [
      "面试",
      "volatile",
      "扩展题库",
      "代码相关题",
      "interview",
      "面试综合"
    ],
    "knowledgeId": "kp_0168",
    "type": "interview",
    "code": "#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c878",
    "chapter": "面试高频综合专题",
    "topic": "声明与定义区别",
    "difficulty": "面试",
    "question": "面试官给出这段「声明与定义区别」代码时，最可能考查哪一点？\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);\n请把它放到寄存器状态位清除里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 2,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。 面试官通常会追到：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 不保证原子性，也不会分配内存。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到中断和主循环共享状态里，重点看首次调用时读改写是否需要临界区。",
    "tags": [
      "面试",
      "链接",
      "扩展题库",
      "代码相关题",
      "interview",
      "面试综合"
    ],
    "knowledgeId": "kp_0169",
    "type": "interview",
    "code": "#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c879",
    "chapter": "面试高频综合专题",
    "topic": "指针与数组区别",
    "difficulty": "面试",
    "question": "面试官给出这段「指针与数组区别」代码时，最可能考查哪一点？\nuint8_t buf[16];\nuint8_t *p = buf;\nsize_t a = sizeof(buf);\nsize_t b = sizeof(p);\n请把它放到DMA 缓冲区获取里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "a 为 4，b 为 4",
      "a 为 16，b 为 16",
      "a 为 1，b 为 4",
      "a 为 16，b 为 4"
    ],
    "answer": 3,
    "explanation": "数组对象本身使用 sizeof 得到总字节数；指针变量使用 sizeof 得到指针大小。 面试官通常会追到：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 题干给出了平台假设。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到DMA 缓冲区获取里，重点看首次调用时指针是否先指向合法对象。",
    "tags": [
      "面试",
      "数组指针",
      "扩展题库",
      "代码相关题",
      "interview",
      "行指针",
      "面试综合"
    ],
    "knowledgeId": "kp_0165",
    "type": "interview",
    "code": "uint8_t buf[16];\nuint8_t *p = buf;\nsize_t a = sizeof(buf);\nsize_t b = sizeof(p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c880",
    "chapter": "面试高频综合专题",
    "topic": "栈与堆区别",
    "difficulty": "面试",
    "question": "按题干给定假设分析这段「栈与堆区别」代码，哪项结果正确？\nsize_t parent(size_t i) {\n return (i - 1u) / 2u;\n}\n\nsize_t left(size_t i) {\n return 2u * i + 1u;\n}\n请把它放到解析器临时栈里判断，尤其看首次调用时top 初值是否正确。",
    "options": [
      "0 基数组堆，parent 和 left 分别对应父节点与左孩子下标",
      "1 基数组堆，left 应该是 2 * i + 1",
      "链式堆结构，不需要数组下标",
      "最大堆专用公式，最小堆不能使用"
    ],
    "answer": 0,
    "explanation": "C 数组通常是 0 基下标。 先按题干假设推导，再检查：栈空、栈满、top 更新顺序以及越界访问是否被处理。 最大堆和最小堆的下标公式相同，比较方向不同。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到解析器临时栈里，重点看首次调用时top 初值是否正确。",
    "tags": [
      "面试",
      "内存",
      "扩展题库",
      "代码相关题",
      "补漏",
      "代码计算",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "push操作",
      "pop操作",
      "上浮调整"
    ],
    "knowledgeId": "kp_0166",
    "type": "calculation",
    "code": "size_t parent(size_t i) {\n    return (i - 1u) / 2u;\n}\n\nsize_t left(size_t i) {\n    return 2u * i + 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c881",
    "chapter": "面试高频综合专题",
    "topic": "bss与data区别",
    "difficulty": "易错",
    "question": "面试官给出这段「bss与data区别」代码时，最可能考查哪一点？\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);\n请把它放到DMA 完成标志检查里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 1,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。 面试官通常会追到：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 不保证原子性，也不会分配内存。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到寄存器状态位清除里，重点看首次调用时读改写是否需要临界区。",
    "tags": [
      "面试",
      "段",
      "扩展题库",
      "代码相关题",
      "interview",
      "面试综合"
    ],
    "knowledgeId": "kp_0167",
    "type": "interview",
    "code": "#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c882",
    "chapter": "面试高频综合专题",
    "topic": "volatile作用",
    "difficulty": "面试",
    "question": "面试官给出这段「volatile作用」代码时，最可能考查哪一点？\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);\n请把它放到DMA 完成标志检查里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 2,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。 面试官通常会追到：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 不保证原子性，也不会分配内存。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到DMA 完成标志检查里，重点看首次调用时读改写是否需要临界区。",
    "tags": [
      "面试",
      "volatile",
      "扩展题库",
      "代码相关题",
      "interview",
      "面试综合"
    ],
    "knowledgeId": "kp_0168",
    "type": "interview",
    "code": "#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c883",
    "chapter": "面试高频综合专题",
    "topic": "声明与定义区别",
    "difficulty": "面试",
    "question": "面试官给出这段「声明与定义区别」代码时，最可能考查哪一点？\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);\n请把它放到DMA 完成标志检查里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位"
    ],
    "answer": 3,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。 面试官通常会追到：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 不保证原子性，也不会分配内存。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到UART 接收回调里，重点看首次调用时读改写是否需要临界区。",
    "tags": [
      "面试",
      "链接",
      "扩展题库",
      "代码相关题",
      "interview",
      "面试综合"
    ],
    "knowledgeId": "kp_0169",
    "type": "interview",
    "code": "#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c884",
    "chapter": "面试高频综合专题",
    "topic": "指针与数组区别",
    "difficulty": "面试",
    "question": "面试官给出这段「指针与数组区别」代码时，最可能考查哪一点？\nuint8_t buf[16];\nuint8_t *p = buf;\nsize_t a = sizeof(buf);\nsize_t b = sizeof(p);\n请把它放到链表遍历入口里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "a 为 16，b 为 4",
      "a 为 4，b 为 4",
      "a 为 16，b 为 16",
      "a 为 1，b 为 4"
    ],
    "answer": 0,
    "explanation": "数组对象本身使用 sizeof 得到总字节数；指针变量使用 sizeof 得到指针大小。 面试官通常会追到：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 题干给出了平台假设。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到链表遍历入口里，重点看首次调用时指针是否先指向合法对象。",
    "tags": [
      "面试",
      "数组指针",
      "扩展题库",
      "代码相关题",
      "interview",
      "行指针",
      "面试综合"
    ],
    "knowledgeId": "kp_0165",
    "type": "interview",
    "code": "uint8_t buf[16];\nuint8_t *p = buf;\nsize_t a = sizeof(buf);\nsize_t b = sizeof(p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c885",
    "chapter": "面试高频综合专题",
    "topic": "栈与堆区别",
    "difficulty": "易错",
    "question": "按题干给定假设分析这段「栈与堆区别」代码，哪项结果正确？\nsize_t parent(size_t i) {\n return (i - 1u) / 2u;\n}\n\nsize_t left(size_t i) {\n return 2u * i + 1u;\n}\n请把它放到固定数组栈 push里判断，尤其看首次调用时top 初值是否正确。",
    "options": [
      "1 基数组堆，left 应该是 2 * i + 1",
      "0 基数组堆，parent 和 left 分别对应父节点与左孩子下标",
      "链式堆结构，不需要数组下标",
      "最大堆专用公式，最小堆不能使用"
    ],
    "answer": 1,
    "explanation": "C 数组通常是 0 基下标。 先按题干假设推导，再检查：栈空、栈满、top 更新顺序以及越界访问是否被处理。 最大堆和最小堆的下标公式相同，比较方向不同。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到固定数组栈 push里，重点看首次调用时top 初值是否正确。",
    "tags": [
      "面试",
      "内存",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码计算",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "push操作",
      "pop操作",
      "上浮调整"
    ],
    "knowledgeId": "kp_0166",
    "type": "calculation",
    "code": "size_t parent(size_t i) {\n    return (i - 1u) / 2u;\n}\n\nsize_t left(size_t i) {\n    return 2u * i + 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c886",
    "chapter": "面试高频综合专题",
    "topic": "bss与data区别",
    "difficulty": "面试",
    "question": "面试官给出这段「bss与data区别」代码时，最可能考查哪一点？\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);\n请把它放到UART 接收回调里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 2,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。 面试官通常会追到：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 不保证原子性，也不会分配内存。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到SysTick 计数里，重点看首次调用时读改写是否需要临界区。",
    "tags": [
      "面试",
      "段",
      "扩展题库",
      "代码相关题",
      "interview",
      "面试综合"
    ],
    "knowledgeId": "kp_0167",
    "type": "interview",
    "code": "#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c887",
    "chapter": "面试高频综合专题",
    "topic": "volatile作用",
    "difficulty": "面试",
    "question": "面试官给出这段「volatile作用」代码时，最可能考查哪一点？\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);\n请把它放到UART 接收回调里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位"
    ],
    "answer": 3,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。 面试官通常会追到：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 不保证原子性，也不会分配内存。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到GPIO 输出寄存器修改里，重点看首次调用时读改写是否需要临界区。",
    "tags": [
      "面试",
      "volatile",
      "扩展题库",
      "代码相关题",
      "interview",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "面试综合"
    ],
    "knowledgeId": "kp_0168",
    "type": "interview",
    "code": "#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c888",
    "chapter": "面试高频综合专题",
    "topic": "声明与定义区别",
    "difficulty": "面试",
    "question": "面试官给出这段「声明与定义区别」代码时，最可能考查哪一点？\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);\n请把它放到UART 接收回调里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 0,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。 面试官通常会追到：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 不保证原子性，也不会分配内存。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到低功耗唤醒标志里，重点看首次调用时读改写是否需要临界区。",
    "tags": [
      "面试",
      "链接",
      "扩展题库",
      "代码相关题",
      "interview",
      "面试综合"
    ],
    "knowledgeId": "kp_0169",
    "type": "interview",
    "code": "#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c889",
    "chapter": "面试高频综合专题",
    "topic": "指针与数组区别",
    "difficulty": "易错",
    "question": "面试官给出这段「指针与数组区别」代码时，最可能考查哪一点？\nuint8_t buf[16];\nuint8_t *p = buf;\nsize_t a = sizeof(buf);\nsize_t b = sizeof(p);\n请把它放到设备句柄打开失败里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "a 为 4，b 为 4",
      "a 为 16，b 为 4",
      "a 为 16，b 为 16",
      "a 为 1，b 为 4"
    ],
    "answer": 1,
    "explanation": "数组对象本身使用 sizeof 得到总字节数；指针变量使用 sizeof 得到指针大小。 面试官通常会追到：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 题干给出了平台假设。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到设备句柄打开失败里，重点看首次调用时指针是否先指向合法对象。",
    "tags": [
      "面试",
      "数组指针",
      "扩展题库",
      "代码相关题",
      "interview",
      "行指针",
      "面试综合"
    ],
    "knowledgeId": "kp_0165",
    "type": "interview",
    "code": "uint8_t buf[16];\nuint8_t *p = buf;\nsize_t a = sizeof(buf);\nsize_t b = sizeof(p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c890",
    "chapter": "面试高频综合专题",
    "topic": "栈与堆区别",
    "difficulty": "面试",
    "question": "按题干给定假设分析这段「栈与堆区别」代码，哪项结果正确？\nsize_t parent(size_t i) {\n return (i - 1u) / 2u;\n}\n\nsize_t left(size_t i) {\n return 2u * i + 1u;\n}\n请把它放到固定数组栈 pop里判断，尤其看首次调用时top 初值是否正确。",
    "options": [
      "1 基数组堆，left 应该是 2 * i + 1",
      "链式堆结构，不需要数组下标",
      "0 基数组堆，parent 和 left 分别对应父节点与左孩子下标",
      "最大堆专用公式，最小堆不能使用"
    ],
    "answer": 2,
    "explanation": "C 数组通常是 0 基下标。 先按题干假设推导，再检查：栈空、栈满、top 更新顺序以及越界访问是否被处理。 最大堆和最小堆的下标公式相同，比较方向不同。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到固定数组栈 pop里，重点看首次调用时top 初值是否正确。",
    "tags": [
      "面试",
      "内存",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "push操作",
      "pop操作",
      "上浮调整"
    ],
    "knowledgeId": "kp_0166",
    "type": "calculation",
    "code": "size_t parent(size_t i) {\n    return (i - 1u) / 2u;\n}\n\nsize_t left(size_t i) {\n    return 2u * i + 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c891",
    "chapter": "面试高频综合专题",
    "topic": "bss与data区别",
    "difficulty": "面试",
    "question": "面试官给出这段「bss与data区别」代码时，最可能考查哪一点？\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);\n请把它放到SysTick 计数里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位"
    ],
    "answer": 3,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。 面试官通常会追到：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 不保证原子性，也不会分配内存。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到设备忙等待循环里，重点看首次调用时读改写是否需要临界区。",
    "tags": [
      "面试",
      "段",
      "扩展题库",
      "代码相关题",
      "interview",
      "面试综合"
    ],
    "knowledgeId": "kp_0167",
    "type": "interview",
    "code": "#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c892",
    "chapter": "面试高频综合专题",
    "topic": "volatile作用",
    "difficulty": "面试",
    "question": "面试官给出这段「volatile作用」代码时，最可能考查哪一点？\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);\n请把它放到SysTick 计数里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 0,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。 面试官通常会追到：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 不保证原子性，也不会分配内存。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到中断和主循环共享状态里，重点看首次调用时状态位是否写 1 清零。",
    "tags": [
      "面试",
      "volatile",
      "扩展题库",
      "代码相关题",
      "interview",
      "面试综合"
    ],
    "knowledgeId": "kp_0168",
    "type": "interview",
    "code": "#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c893",
    "chapter": "面试高频综合专题",
    "topic": "声明与定义区别",
    "difficulty": "易错",
    "question": "面试官给出这段「声明与定义区别」代码时，最可能考查哪一点？\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);\n请把它放到SysTick 计数里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 1,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。 面试官通常会追到：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 不保证原子性，也不会分配内存。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到寄存器状态位清除里，重点看首次调用时状态位是否写 1 清零。",
    "tags": [
      "面试",
      "链接",
      "扩展题库",
      "代码相关题",
      "interview",
      "面试综合"
    ],
    "knowledgeId": "kp_0169",
    "type": "interview",
    "code": "#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "reviewStatus": "待复核"
  }
]

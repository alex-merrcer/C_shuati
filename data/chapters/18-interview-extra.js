module.exports = [
  {
    "id": "c869",
    "chapter": "面试高频综合专题",
    "topic": "指针与数组区别",
    "difficulty": "易错",
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，a 和 b 更可能分别是多少？\n请重点从「指针与数组区别」的失败路径角度判断（样例组 93）。\nuint8_t buf[16];\nuint8_t *p = buf;\nsize_t a = sizeof(buf);\nsize_t b = sizeof(p);",
    "options": [
      "a 为 4，b 为 4",
      "a 为 16，b 为 4",
      "a 为 16，b 为 16",
      "a 为 1，b 为 4"
    ],
    "answer": 1,
    "explanation": "数组对象本身使用 sizeof 得到总字节数；指针变量使用 sizeof 得到指针大小。题干给出了平台假设。 同时要把“行指针”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "这组公式更符合哪种堆数组下标约定？\n请重点从「栈与堆区别」的生命周期角度判断（样例组 94）。\nsize_t parent(size_t i) {\n    return (i - 1u) / 2u;\n}\n\nsize_t left(size_t i) {\n    return 2u * i + 1u;\n}",
    "options": [
      "1 基数组堆，left 应该是 2 * i + 1",
      "链式堆结构，不需要数组下标",
      "0 基数组堆，parent 和 left 分别对应父节点与左孩子下标",
      "最大堆专用公式，最小堆不能使用"
    ],
    "answer": 2,
    "explanation": "C 数组通常是 0 基下标。最大堆和最小堆的下标公式相同，比较方向不同。 同时要把“自动存储期、静态存储期、局部变量分配、push操作、pop操作、上浮调整”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "这段嵌入式寄存器代码主要体现了什么？\n请重点从「bss与data区别」的可移植性角度判断（样例组 95）。\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位"
    ],
    "answer": 3,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。volatile 不保证原子性，也不会分配内存。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "这段嵌入式寄存器代码主要体现了什么？\n请重点从「volatile作用」的中断安全角度判断（样例组 96）。\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 0,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。volatile 不保证原子性，也不会分配内存。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "这段嵌入式寄存器代码主要体现了什么？\n请重点从「声明与定义区别」的长期运行稳定性角度判断（样例组 0）。\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 1,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。volatile 不保证原子性，也不会分配内存。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，a 和 b 更可能分别是多少？\n请重点从「指针与数组区别」的接口契约角度判断（样例组 1）。\nuint8_t buf[16];\nuint8_t *p = buf;\nsize_t a = sizeof(buf);\nsize_t b = sizeof(p);",
    "options": [
      "a 为 4，b 为 4",
      "a 为 16，b 为 16",
      "a 为 16，b 为 4",
      "a 为 1，b 为 4"
    ],
    "answer": 2,
    "explanation": "数组对象本身使用 sizeof 得到总字节数；指针变量使用 sizeof 得到指针大小。题干给出了平台假设。 同时要把“行指针”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "这组公式更符合哪种堆数组下标约定？\n请重点从「栈与堆区别」的单元测试覆盖角度判断（样例组 2）。\nsize_t parent(size_t i) {\n    return (i - 1u) / 2u;\n}\n\nsize_t left(size_t i) {\n    return 2u * i + 1u;\n}",
    "options": [
      "1 基数组堆，left 应该是 2 * i + 1",
      "链式堆结构，不需要数组下标",
      "最大堆专用公式，最小堆不能使用",
      "0 基数组堆，parent 和 left 分别对应父节点与左孩子下标"
    ],
    "answer": 3,
    "explanation": "C 数组通常是 0 基下标。最大堆和最小堆的下标公式相同，比较方向不同。 同时要把“自动存储期、静态存储期、局部变量分配、push操作、pop操作、上浮调整”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "这段嵌入式寄存器代码主要体现了什么？\n请重点从「bss与data区别」的代码评审角度判断（样例组 3）。\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 0,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。volatile 不保证原子性，也不会分配内存。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "这段嵌入式寄存器代码主要体现了什么？\n请重点从「volatile作用」的内存破坏定位角度判断（样例组 4）。\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 1,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。volatile 不保证原子性，也不会分配内存。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "这段嵌入式寄存器代码主要体现了什么？\n请重点从「声明与定义区别」的寄存器副作用角度判断（样例组 5）。\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 2,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。volatile 不保证原子性，也不会分配内存。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，a 和 b 更可能分别是多少？\n请重点从「指针与数组区别」的编译优化影响角度判断（样例组 6）。\nuint8_t buf[16];\nuint8_t *p = buf;\nsize_t a = sizeof(buf);\nsize_t b = sizeof(p);",
    "options": [
      "a 为 4，b 为 4",
      "a 为 16，b 为 16",
      "a 为 1，b 为 4",
      "a 为 16，b 为 4"
    ],
    "answer": 3,
    "explanation": "数组对象本身使用 sizeof 得到总字节数；指针变量使用 sizeof 得到指针大小。题干给出了平台假设。 同时要把“行指针”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "这组公式更符合哪种堆数组下标约定？\n请重点从「栈与堆区别」的资源受限 MCU角度判断（样例组 7）。\nsize_t parent(size_t i) {\n    return (i - 1u) / 2u;\n}\n\nsize_t left(size_t i) {\n    return 2u * i + 1u;\n}",
    "options": [
      "0 基数组堆，parent 和 left 分别对应父节点与左孩子下标",
      "1 基数组堆，left 应该是 2 * i + 1",
      "链式堆结构，不需要数组下标",
      "最大堆专用公式，最小堆不能使用"
    ],
    "answer": 0,
    "explanation": "C 数组通常是 0 基下标。最大堆和最小堆的下标公式相同，比较方向不同。 同时要把“自动存储期、静态存储期、局部变量分配、push操作、pop操作、上浮调整”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "这段嵌入式寄存器代码主要体现了什么？\n请重点从「bss与data区别」的面试追问角度判断（样例组 8）。\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 1,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。volatile 不保证原子性，也不会分配内存。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "这段嵌入式寄存器代码主要体现了什么？\n请重点从「volatile作用」的调试复盘角度判断（样例组 9）。\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 2,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。volatile 不保证原子性，也不会分配内存。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "这段嵌入式寄存器代码主要体现了什么？\n请重点从「声明与定义区别」的量产固件稳定性角度判断（样例组 10）。\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位"
    ],
    "answer": 3,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。volatile 不保证原子性，也不会分配内存。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，a 和 b 更可能分别是多少？\n请重点从「指针与数组区别」的初始化顺序角度判断（样例组 11）。\nuint8_t buf[16];\nuint8_t *p = buf;\nsize_t a = sizeof(buf);\nsize_t b = sizeof(p);",
    "options": [
      "a 为 16，b 为 4",
      "a 为 4，b 为 4",
      "a 为 16，b 为 16",
      "a 为 1，b 为 4"
    ],
    "answer": 0,
    "explanation": "数组对象本身使用 sizeof 得到总字节数；指针变量使用 sizeof 得到指针大小。题干给出了平台假设。 同时要把“行指针”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "这组公式更符合哪种堆数组下标约定？\n请重点从「栈与堆区别」的边界条件角度判断（样例组 12）。\nsize_t parent(size_t i) {\n    return (i - 1u) / 2u;\n}\n\nsize_t left(size_t i) {\n    return 2u * i + 1u;\n}",
    "options": [
      "1 基数组堆，left 应该是 2 * i + 1",
      "0 基数组堆，parent 和 left 分别对应父节点与左孩子下标",
      "链式堆结构，不需要数组下标",
      "最大堆专用公式，最小堆不能使用"
    ],
    "answer": 1,
    "explanation": "C 数组通常是 0 基下标。最大堆和最小堆的下标公式相同，比较方向不同。 同时要把“自动存储期、静态存储期、局部变量分配、push操作、pop操作、上浮调整”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "这段嵌入式寄存器代码主要体现了什么？\n请重点从「bss与data区别」的失败路径角度判断（样例组 13）。\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 2,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。volatile 不保证原子性，也不会分配内存。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "这段嵌入式寄存器代码主要体现了什么？\n请重点从「volatile作用」的生命周期角度判断（样例组 14）。\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位"
    ],
    "answer": 3,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。volatile 不保证原子性，也不会分配内存。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "这段嵌入式寄存器代码主要体现了什么？\n请重点从「声明与定义区别」的可移植性角度判断（样例组 15）。\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 0,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。volatile 不保证原子性，也不会分配内存。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，a 和 b 更可能分别是多少？\n请重点从「指针与数组区别」的中断安全角度判断（样例组 16）。\nuint8_t buf[16];\nuint8_t *p = buf;\nsize_t a = sizeof(buf);\nsize_t b = sizeof(p);",
    "options": [
      "a 为 4，b 为 4",
      "a 为 16，b 为 4",
      "a 为 16，b 为 16",
      "a 为 1，b 为 4"
    ],
    "answer": 1,
    "explanation": "数组对象本身使用 sizeof 得到总字节数；指针变量使用 sizeof 得到指针大小。题干给出了平台假设。 同时要把“行指针”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "这组公式更符合哪种堆数组下标约定？\n请重点从「栈与堆区别」的长期运行稳定性角度判断（样例组 17）。\nsize_t parent(size_t i) {\n    return (i - 1u) / 2u;\n}\n\nsize_t left(size_t i) {\n    return 2u * i + 1u;\n}",
    "options": [
      "1 基数组堆，left 应该是 2 * i + 1",
      "链式堆结构，不需要数组下标",
      "0 基数组堆，parent 和 left 分别对应父节点与左孩子下标",
      "最大堆专用公式，最小堆不能使用"
    ],
    "answer": 2,
    "explanation": "C 数组通常是 0 基下标。最大堆和最小堆的下标公式相同，比较方向不同。 同时要把“自动存储期、静态存储期、局部变量分配、push操作、pop操作、上浮调整”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "这段嵌入式寄存器代码主要体现了什么？\n请重点从「bss与data区别」的接口契约角度判断（样例组 18）。\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位"
    ],
    "answer": 3,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。volatile 不保证原子性，也不会分配内存。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "这段嵌入式寄存器代码主要体现了什么？\n请重点从「volatile作用」的单元测试覆盖角度判断（样例组 19）。\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 0,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。volatile 不保证原子性，也不会分配内存。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "这段嵌入式寄存器代码主要体现了什么？\n请重点从「声明与定义区别」的代码评审角度判断（样例组 20）。\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 1,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。volatile 不保证原子性，也不会分配内存。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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

module.exports = [
  {
    "id": "c031",
    "chapter": "面试高频综合专题",
    "topic": "typedef",
    "difficulty": "面试",
    "question": "面试官给出这段「typedef」代码时，最可能考查哪一点？\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位"
    ],
    "answer": 3,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。 面试官通常会追到：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 不保证原子性，也不会分配内存。 本题应把标准保证、编译器扩展和项目工程约定分开。",
    "tags": [
      "typedef",
      "类型别名",
      "代码相关题",
      "interview",
      "面试综合"
    ],
    "knowledgeId": "kp_0119",
    "type": "interview",
    "code": "#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c032",
    "chapter": "面试高频综合专题",
    "topic": "stdint.h 固定宽度类型",
    "difficulty": "面试",
    "question": "面试官给出这段「stdint.h 固定宽度类型」代码时，最可能考查哪一点？\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "volatile 保证该读改写操作不会被中断打断",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 0,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。 面试官通常会追到：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 不保证原子性，也不会分配内存。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到寄存器状态位清除里，重点看首次调用时volatile 是否只解决可见性。",
    "tags": [
      "stdint.h",
      "固定宽度类型",
      "代码相关题",
      "interview",
      "面试综合"
    ],
    "knowledgeId": "kp_0120",
    "type": "interview",
    "code": "#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c033",
    "chapter": "面试高频综合专题",
    "topic": "嵌入式寄存器 volatile 访问",
    "difficulty": "面试",
    "question": "面试官给出这段「嵌入式寄存器 volatile 访问」代码时，最可能考查哪一点？\n#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "options": [
      "volatile 保证该读改写操作不会被中断打断",
      "用 volatile 固定宽度指针访问内存映射寄存器，并通过位操作设置目标位",
      "REG32 会在运行时分配一块 32 位内存",
      "GPIO_ODR 是普通 RAM 变量，和硬件地址无关"
    ],
    "answer": 1,
    "explanation": "面试高频点是 volatile、固定宽度类型和位操作的组合。 面试官通常会追到：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 volatile 不保证原子性，也不会分配内存。 本题应把标准保证、编译器扩展和项目工程约定分开。\n补测时把代码放到DMA 完成标志检查里，重点看首次调用时volatile 是否只解决可见性。",
    "tags": [
      "volatile",
      "寄存器",
      "uint32_t",
      "代码相关题",
      "interview",
      "面试综合"
    ],
    "knowledgeId": "kp_0121",
    "type": "interview",
    "code": "#define REG32(addr) (*(volatile uint32_t *)(addr))\n#define GPIO_ODR 0x48000014u\nREG32(GPIO_ODR) |= (1u << 5);",
    "reviewStatus": "待复核"
  }
]

module.exports = [
  {
    "id": "c031",
    "chapter": "面试高频综合专题",
    "topic": "typedef",
    "difficulty": "面试",
    "question": "typedef unsigned char uint8_alias; 的作用是什么？",
    "options": [
      "定义一个名为 uint8_alias 的类型别名",
      "定义一个新的变量 uint8_alias",
      "强制 unsigned char 一定为 8 位",
      "把所有 char 都改成 unsigned char"
    ],
    "answer": 0,
    "explanation": "typedef 用于给已有类型起别名，uint8_alias 可以像类型名一样使用。但这个别名本身不能保证 unsigned char 的位宽一定是 8 位。需要固定宽度时应优先使用 stdint.h 的 uint8_t，并确认平台提供该类型。",
    "tags": [
      "typedef",
      "类型别名"
    ]
  },
  {
    "id": "c032",
    "chapter": "面试高频综合专题",
    "topic": "stdint.h 固定宽度类型",
    "difficulty": "面试",
    "question": "在需要明确表示 32 位无符号寄存器值时，哪种类型最合适？",
    "options": [
      "unsigned int，因为它在所有平台都是 32 位",
      "uint32_t，因为它在提供该类型的平台上明确表示 32 位无符号整数",
      "long，因为它一定和寄存器一样宽",
      "char *，因为指针可以保存任何整数"
    ],
    "answer": 1,
    "explanation": "stdint.h 提供固定宽度整数类型。uint32_t 表示 32 位无符号整数，适合表达明确位宽的数据。并非所有平台都必须提供所有固定宽度类型，但现代嵌入式 C 环境通常会提供常用类型。",
    "tags": [
      "stdint.h",
      "固定宽度类型"
    ]
  },
  {
    "id": "c033",
    "chapter": "面试高频综合专题",
    "topic": "嵌入式寄存器 volatile 访问",
    "difficulty": "面试",
    "question": "下面哪个声明更适合访问地址为 0x40000000 的 32 位硬件寄存器？",
    "options": [
      "#define REG (*(volatile uint32_t *)0x40000000u)",
      "#define REG (*(uint32_t *)0x40000000u)",
      "uint32_t REG = 0x40000000u;",
      "#define REG 0x40000000u"
    ],
    "answer": 0,
    "explanation": "硬件寄存器访问需要把固定地址转换成指向对应宽度对象的指针，再解引用。volatile 告诉编译器不要省略或合并这些访问。实际项目还应确认地址、位宽、对齐和芯片手册描述一致。",
    "tags": [
      "volatile",
      "寄存器",
      "uint32_t"
    ]
  }
]

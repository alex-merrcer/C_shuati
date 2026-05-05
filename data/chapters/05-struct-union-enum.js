module.exports = [
  {
    "id": "c015",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体大小与内存对齐",
    "difficulty": "进阶",
    "question": "关于结构体大小，哪项说法正确？",
    "options": [
      "结构体大小一定等于所有成员 sizeof 的简单相加",
      "编译器可能为满足对齐要求在成员之间或末尾加入填充字节",
      "结构体成员顺序不会影响大小",
      "结构体在所有编译器上的内存布局都完全相同"
    ],
    "answer": 1,
    "explanation": "结构体成员通常需要按各自的对齐要求放置，编译器可能插入 padding。因此结构体大小不一定等于成员大小之和。嵌入式通信协议或寄存器映射中不能随意假设布局，必要时要查看 ABI、编译器选项和对齐策略。",
    "tags": [
      "结构体",
      "内存对齐"
    ]
  },
  {
    "id": "c016",
    "chapter": "结构体、共用体与枚举",
    "topic": "enum",
    "difficulty": "基础",
    "question": "阅读枚举定义：\nenum State {\n    IDLE = 0,\n    RUNNING = 3,\n    ERROR\n};\nERROR 的值通常是多少？",
    "options": [
      "0",
      "1",
      "3",
      "4"
    ],
    "answer": 3,
    "explanation": "枚举成员如果没有显式赋值，会在前一个枚举值基础上加 1。RUNNING 被指定为 3，所以后面的 ERROR 为 4。枚举适合表达状态、命令等有名字的整数常量。",
    "tags": [
      "enum",
      "状态机"
    ]
  }
]

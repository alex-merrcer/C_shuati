module.exports = [
  {
    "id": "c028",
    "chapter": "未定义行为与常见陷阱",
    "topic": "数组越界",
    "difficulty": "易错",
    "question": "int a[3] = {1, 2, 3}; 访问 a[3] 有什么问题？",
    "options": [
      "a[3] 是最后一个元素，完全正确",
      "数组下标从 1 开始，所以 a[3] 是第三个元素",
      "a[3] 越过了合法范围，访问它是未定义行为",
      "C 会自动扩展数组长度"
    ],
    "answer": 2,
    "explanation": "长度为 3 的数组合法下标是 0、1、2。a[3] 已经越界，读写都会造成未定义行为。嵌入式中数组越界可能破坏栈、全局变量或控制数据，非常隐蔽。",
    "tags": [
      "数组越界",
      "未定义行为"
    ]
  },
  {
    "id": "c029",
    "chapter": "未定义行为与常见陷阱",
    "topic": "空指针解引用",
    "difficulty": "易错",
    "question": "下面代码有什么问题？\nint *p = NULL;\n*p = 1;",
    "options": [
      "没有问题，会把 1 写入地址 0",
      "空指针解引用，属于未定义行为",
      "只有在 release 模式下才有问题",
      "这只是语法错误，无法通过任何编译器"
    ],
    "answer": 1,
    "explanation": "NULL 表示不指向有效对象。通过 *p 写入时需要 p 指向一个合法 int 对象，否则就是未定义行为。实际系统中可能崩溃，也可能破坏内存，不能依赖任何固定现象。",
    "tags": [
      "NULL",
      "未定义行为"
    ]
  },
  {
    "id": "c030",
    "chapter": "未定义行为与常见陷阱",
    "topic": "signed 与 unsigned 比较",
    "difficulty": "易错",
    "question": "阅读代码：\nint a = -1;\nunsigned int b = 1;\nif (a < b) {\n    /* ... */\n}\n下面哪项理解更正确？",
    "options": [
      "a 会一直按 -1 与 1 比较，所以条件一定为真",
      "混合 signed 和 unsigned 比较会发生常见算术转换，结果容易违背直觉，应避免这样写",
      "unsigned int 会自动变成 signed int，条件一定为真",
      "这段代码语法非法"
    ],
    "answer": 1,
    "explanation": "当 signed 与 unsigned 混合运算或比较时，C 会按规则做类型转换。若 signed 值不能安全表示为 unsigned 对应的直觉含义，结果可能让初学者意外。实际代码中应统一类型或显式检查范围。",
    "tags": [
      "signed",
      "unsigned",
      "比较"
    ]
  }
]

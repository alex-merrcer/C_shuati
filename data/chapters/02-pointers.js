module.exports = [
  {
    "id": "c006",
    "chapter": "指针体系",
    "topic": "指针基础",
    "difficulty": "基础",
    "question": "关于 int *p; 这条声明，哪项理解正确？",
    "options": [
      "p 是一个 int 类型变量",
      "p 是一个指针变量，可以保存 int 对象的地址",
      "*p 一定已经有合法值",
      "p 会自动指向 0"
    ],
    "answer": 1,
    "explanation": "int *p 声明了一个指向 int 的指针变量 p。它只是能保存地址，并不代表已经指向了合法对象。局部未初始化指针的值不确定，使用前必须初始化。",
    "tags": [
      "指针",
      "声明"
    ]
  },
  {
    "id": "c007",
    "chapter": "指针体系",
    "topic": "NULL 指针",
    "difficulty": "基础",
    "question": "关于 NULL 指针，哪项说法正确？",
    "options": [
      "NULL 指针可以安全解引用，只会得到 0",
      "NULL 表示空指针常量，常用于表达当前不指向任何有效对象",
      "NULL 一定等于地址 0x00000000，所有平台都这样",
      "NULL 只能赋给 int，不能赋给指针"
    ],
    "answer": 1,
    "explanation": "NULL 用来表示空指针常量，常见用途是初始化指针或判断指针是否有效。空指针不能解引用，解引用空指针是未定义行为。它的内部表示不应被写死为某个具体地址。",
    "tags": [
      "NULL",
      "空指针"
    ]
  },
  {
    "id": "c008",
    "chapter": "指针体系",
    "topic": "野指针",
    "difficulty": "易错",
    "question": "下面哪种情况最容易形成野指针？",
    "options": [
      "int *p = NULL;",
      "int value = 3; int *p = &value;",
      "free(p); 之后继续使用 p 指向的内存",
      "把指针作为函数参数传入"
    ],
    "answer": 2,
    "explanation": "free(p) 后，p 中原来的地址值通常还在，但那块内存已经不再属于当前程序逻辑继续使用的对象。继续通过 p 读写就是典型的悬空指针问题。释放后可把 p 置为 NULL，降低误用风险。",
    "tags": [
      "野指针",
      "free"
    ]
  }
]

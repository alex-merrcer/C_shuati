module.exports = [
  {
    "id": "c019",
    "chapter": "预处理与宏",
    "topic": "宏副作用",
    "difficulty": "易错",
    "question": "阅读宏：\n#define SQUARE(x) ((x) * (x))\n使用 SQUARE(i++) 有什么问题？",
    "options": [
      "没有问题，i 只会自增一次",
      "宏展开会让 i++ 出现两次，可能造成多次副作用",
      "宏一定比函数更安全",
      "预处理器会自动把 i++ 保存为临时变量"
    ],
    "answer": 1,
    "explanation": "宏只是预处理阶段的文本替换，SQUARE(i++) 会近似展开为 ((i++) * (i++))。同一个实参被求值多次，副作用也会发生多次。需要避免把带副作用的表达式传给这类宏。",
    "tags": [
      "宏",
      "副作用"
    ]
  },
  {
    "id": "c020",
    "chapter": "预处理与宏",
    "topic": "include guard",
    "difficulty": "基础",
    "question": "头文件中使用 #ifndef/#define/#endif 的 include guard 主要目的是什么？",
    "options": [
      "防止同一个头文件被重复包含导致重复声明或重复定义问题",
      "让程序运行速度翻倍",
      "自动释放动态内存",
      "把所有函数变成内联函数"
    ],
    "answer": 0,
    "explanation": "include guard 用来防止同一个头文件在一次预处理过程中被重复展开。它能减少重复包含引起的类型重定义等问题，是 C 项目头文件的常见保护写法。",
    "tags": [
      "预处理",
      "头文件"
    ]
  }
]

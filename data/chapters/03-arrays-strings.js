module.exports = [
  {
    "id": "c009",
    "chapter": "数组与字符串",
    "topic": "数组名退化",
    "difficulty": "进阶",
    "question": "下面函数中，arr 在函数体内本质上是什么？\nvoid f(int arr[]) {\n    /* ... */\n}",
    "options": [
      "完整数组对象，可以用 sizeof(arr) 得到原数组总字节数",
      "int 指针，通常无法仅靠 arr 得到原数组元素个数",
      "只能指向 1 个 int，不能访问 arr[1]",
      "数组副本，修改 arr[0] 不影响调用者"
    ],
    "answer": 1,
    "explanation": "数组作为函数参数时会调整为指针参数，void f(int arr[]) 与 void f(int *arr) 在形参层面等价。函数内 sizeof(arr) 得到的是指针大小，不是调用者数组总大小，因此长度通常要额外传入。",
    "tags": [
      "数组",
      "退化",
      "函数参数"
    ]
  },
  {
    "id": "c010",
    "chapter": "数组与字符串",
    "topic": "字符串结束符 \\0",
    "difficulty": "基础",
    "question": "C 字符串为什么需要结尾的 \\0？",
    "options": [
      "它用于标记字符串结束，许多字符串函数靠它停止读取",
      "它用于表示字符 '0'，必须显示在屏幕上",
      "它只在 C++ 中需要，C 语言不需要",
      "它能自动防止数组越界"
    ],
    "answer": 0,
    "explanation": "C 字符串是以空字符 \\0 结束的字符序列。strlen、printf 的 %s 等函数通常会一直读取到 \\0 为止。如果字符数组没有正确的 \\0，字符串函数可能继续读到数组之外。",
    "tags": [
      "字符串",
      "\\0"
    ]
  },
  {
    "id": "c011",
    "chapter": "数组与字符串",
    "topic": "strlen",
    "difficulty": "基础",
    "question": "阅读定义：\nchar s[] = \"abc\";\n对 strlen(s) 的结果，哪项说法正确？",
    "options": [
      "结果是 3，因为 strlen 统计 \\0 之前的字符数",
      "结果是 4，因为 strlen 会统计结尾 \\0",
      "结果等于 sizeof(s)，在所有情况下都一样",
      "结果不确定，因为字符串字面量不能放入数组"
    ],
    "answer": 0,
    "explanation": "s 数组中实际存放 'a'、'b'、'c'、'\\0' 共 4 个字符，但 strlen 只统计结尾 \\0 之前的字符个数，所以是 3。sizeof(s) 才会得到数组对象占用的总字节数。",
    "tags": [
      "strlen",
      "字符串"
    ]
  },
  {
    "id": "c012",
    "chapter": "数组与字符串",
    "topic": "strcpy 风险",
    "difficulty": "易错",
    "question": "使用 strcpy(dst, src) 时最需要注意什么？",
    "options": [
      "dst 必须有足够空间容纳 src 的内容和结尾 \\0",
      "src 必须比 dst 更短 1 个字节以上，否则编译失败",
      "strcpy 会自动扩容 dst",
      "strcpy 会自动检查数组边界并抛出异常"
    ],
    "answer": 0,
    "explanation": "strcpy 会复制源字符串直到结尾 \\0，但它不知道目标数组容量。如果 dst 空间不足，就会写出边界，造成内存破坏。在嵌入式代码中应明确容量，必要时使用带长度限制的接口并检查截断。",
    "tags": [
      "strcpy",
      "数组越界"
    ]
  }
]

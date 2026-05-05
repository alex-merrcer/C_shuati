module.exports = [
  {
    "id": "c009",
    "chapter": "数组与字符串",
    "topic": "数组名退化",
    "difficulty": "进阶",
    "question": "按题干给定假设分析这段「数组名退化」代码，哪项结果正确？\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "16，因为形参写了 buf[16]",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 1,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 先按题干假设推导，再检查：隐式类型转换、运算符结合顺序和题干给定的平台假设是否一致。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到串口接收缓冲区里，重点看连续调用两次时接收数据里包含内嵌 0。",
    "tags": [
      "数组",
      "退化",
      "函数参数",
      "代码相关题",
      "错误诊断",
      "嵌入式场景",
      "代码计算"
    ],
    "knowledgeId": "kp_0046",
    "type": "calculation",
    "code": "void clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c010",
    "chapter": "数组与字符串",
    "topic": "字符串结束符 \\0",
    "difficulty": "基础",
    "question": "这段「字符串结束符 \\0」代码还少一个关键保护，应该先补哪一步？\nchar rx[8];\nread_bytes(rx, 8);\nsize_t n = strlen(rx);",
    "options": [
      "把 rx 改成 int 数组，strlen 就能自动知道长度",
      "在 strlen 前调用 free(rx)，避免局部数组泄漏",
      "确保 rx 中存在字符串结束符 \\0，或者不要把原始字节缓冲区直接交给 strlen",
      "把 read_bytes 的长度改成 sizeof(&rx)"
    ],
    "answer": 2,
    "explanation": "strlen 只能处理以 \\0 结束的 C 字符串，不能测量任意接收缓冲区。 这段代码缺的不是语法，而是要补上：目标缓冲区容量、结束符和源数据长度是否同时受控。 局部数组不能 free，sizeof(&rx) 也不是容量。\n补测时把代码放到串口接收缓冲区里，重点看首次调用时源指针为 NULL。",
    "tags": [
      "字符串",
      "\\0",
      "代码相关题",
      "代码计算",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0047",
    "type": "missing_step",
    "code": "char rx[8];\nread_bytes(rx, 8);\nsize_t n = strlen(rx);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c011",
    "chapter": "数组与字符串",
    "topic": "strlen",
    "difficulty": "基础",
    "question": "这段「strlen」代码还少一个关键保护，应该先补哪一步？\nchar rx[8];\nread_bytes(rx, 8);\nsize_t n = strlen(rx);\n请把它放到串口接收缓冲区里判断，尤其看首次调用时源数据没有结尾 0。",
    "options": [
      "把 rx 改成 int 数组，strlen 就能自动知道长度",
      "在 strlen 前调用 free(rx)，避免局部数组泄漏",
      "把 read_bytes 的长度改成 sizeof(&rx)",
      "确保 rx 中存在字符串结束符 \\0，或者不要把原始字节缓冲区直接交给 strlen"
    ],
    "answer": 3,
    "explanation": "strlen 只能处理以 \\0 结束的 C 字符串，不能测量任意接收缓冲区。 这段代码缺的不是语法，而是要补上：目标缓冲区容量、结束符和源数据长度是否同时受控。 局部数组不能 free，sizeof(&rx) 也不是容量。\n补测时把代码放到命令行参数复制里，重点看首次调用时源指针为 NULL。",
    "tags": [
      "strlen",
      "字符串",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0037",
    "type": "missing_step",
    "code": "char rx[8];\nread_bytes(rx, 8);\nsize_t n = strlen(rx);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c012",
    "chapter": "数组与字符串",
    "topic": "strcpy 风险",
    "difficulty": "易错",
    "question": "在串口接收缓冲区中看到下面这段和「strcpy 风险」有关的代码，最主要的风险是什么？\nchar name[8];\nconst char *src = \"stm32-driver\";\nstrcpy(name, src);",
    "options": [
      "目标数组容量不足，strcpy 不做边界检查，会写出 name 数组范围",
      "字符串字面量在只读区，所以复制时不会越界",
      "strcpy 会自动截断超出 name 容量的内容",
      "name 是局部数组，所以容量会在运行时自动扩展"
    ],
    "answer": 0,
    "explanation": "strcpy 只按源串的结尾 0 停止，不知道目标数组容量。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 正确选项指出固定数组和无边界复制组合的风险。\n补测时把代码放到串口接收缓冲区里，重点看首次调用时源数据没有结尾 0。",
    "tags": [
      "strcpy",
      "数组越界",
      "代码相关题",
      "错误诊断",
      "sprintf"
    ],
    "knowledgeId": "kp_0048",
    "type": "bug_fix",
    "code": "char name[8];\nconst char *src = \"stm32-driver\";\nstrcpy(name, src);",
    "reviewStatus": "待复核"
  }
]

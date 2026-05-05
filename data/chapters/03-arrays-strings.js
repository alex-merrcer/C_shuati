module.exports = [
  {
    "id": "c009",
    "chapter": "数组与字符串",
    "topic": "数组名退化",
    "difficulty": "进阶",
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，sizeof(buf) 更可能是多少？\n请重点从「数组名退化」的代码评审角度判断（样例组 9）。\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "16，因为形参写了 buf[16]",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 1,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面代码缺少哪一步，最容易引发「字符串结束符 \\0」问题？\n请重点从「字符串结束符 \\0」的内存破坏定位角度判断（样例组 10）。\nchar rx[8];\nread_bytes(rx, 8);\nsize_t n = strlen(rx);",
    "options": [
      "把 rx 改成 int 数组，strlen 就能自动知道长度",
      "在 strlen 前调用 free(rx)，避免局部数组泄漏",
      "确保 rx 中存在字符串结束符 \\0，或者不要把原始字节缓冲区直接交给 strlen",
      "把 read_bytes 的长度改成 sizeof(&rx)"
    ],
    "answer": 2,
    "explanation": "strlen 只能处理以 \\0 结束的 C 字符串，不能测量任意接收缓冲区。局部数组不能 free，sizeof(&rx) 也不是容量。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "下面代码缺少哪一步，最容易引发「strlen」问题？\n请重点从「strlen」的寄存器副作用角度判断（样例组 11）。\nchar rx[8];\nread_bytes(rx, 8);\nsize_t n = strlen(rx);",
    "options": [
      "把 rx 改成 int 数组，strlen 就能自动知道长度",
      "在 strlen 前调用 free(rx)，避免局部数组泄漏",
      "把 read_bytes 的长度改成 sizeof(&rx)",
      "确保 rx 中存在字符串结束符 \\0，或者不要把原始字节缓冲区直接交给 strlen"
    ],
    "answer": 3,
    "explanation": "strlen 只能处理以 \\0 结束的 C 字符串，不能测量任意接收缓冲区。局部数组不能 free，sizeof(&rx) 也不是容量。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "下面代码的主要风险是什么？\n请重点从「strcpy 风险」的编译优化影响角度判断（样例组 12）。\nchar name[8];\nconst char *src = \"stm32-driver\";\nstrcpy(name, src);",
    "options": [
      "目标数组容量不足，strcpy 不做边界检查，会写出 name 数组范围",
      "字符串字面量在只读区，所以复制时不会越界",
      "strcpy 会自动截断超出 name 容量的内容",
      "name 是局部数组，所以容量会在运行时自动扩展"
    ],
    "answer": 0,
    "explanation": "strcpy 只按源串的结尾 0 停止，不知道目标数组容量。正确选项指出固定数组和无边界复制组合的风险。 同时要把“sprintf”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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

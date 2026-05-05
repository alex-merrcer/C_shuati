module.exports = [
  {
    "id": "c013",
    "chapter": "位运算与位级操作",
    "topic": "位与、位或、位异或",
    "difficulty": "基础",
    "question": "按题干给定假设分析这段「位与、位或、位异或」代码，哪项结果正确？\nuint8_t flags = 0x5Au;\nflags ^= 0x0Fu;",
    "options": [
      "0x0F",
      "0x55",
      "0x5F",
      "0x50"
    ],
    "answer": 1,
    "explanation": "0x5A 的低 4 位是 A，和 0x0F 异或会翻转为 5，高 4 位保持 5，所以结果是 0x55。 先按题干假设推导，再检查：移位范围、掩码宽度和无关位是否被保留。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到错误码位图维护里，重点看首次调用时移位数是否小于类型位宽。",
    "tags": [
      "位与",
      "掩码",
      "代码相关题",
      "错误诊断",
      "代码计算"
    ],
    "knowledgeId": "kp_0058",
    "type": "calculation",
    "code": "uint8_t flags = 0x5Au;\nflags ^= 0x0Fu;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c014",
    "chapter": "位运算与位级操作",
    "topic": "左移和右移",
    "difficulty": "易错",
    "question": "在寄存器位设置中看到下面这段和「左移和右移」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到GPIO 模式配置里，重点看首次调用时signed 左移是否有风险。",
    "tags": [
      "左移",
      "右移",
      "可移植性",
      "代码相关题",
      "代码计算",
      "错误诊断",
      "interview"
    ],
    "knowledgeId": "kp_0059",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  }
]

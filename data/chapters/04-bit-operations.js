module.exports = [
  {
    "id": "c013",
    "chapter": "位运算与位级操作",
    "topic": "位与、位或、位异或",
    "difficulty": "基础",
    "question": "执行后 flags 的十六进制值是多少？\n请重点从「位与、位或、位异或」的资源受限 MCU角度判断（样例组 13）。\nuint8_t flags = 0x5Au;\nflags ^= 0x0Fu;",
    "options": [
      "0x0F",
      "0x55",
      "0x5F",
      "0x50"
    ],
    "answer": 1,
    "explanation": "0x5A 的低 4 位是 A，和 0x0F 异或会翻转为 5，高 4 位保持 5，所以结果是 0x55。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面代码围绕「左移和右移」最应该补充什么检查？\n请重点从「左移和右移」的面试追问角度判断（样例组 14）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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

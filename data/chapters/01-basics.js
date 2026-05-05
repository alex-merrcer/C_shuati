module.exports = [
  {
    "id": "c001",
    "chapter": "C语言基础语法与程序结构",
    "topic": "main 函数",
    "difficulty": "基础",
    "question": "关于标准 C 程序入口 main 函数，哪种写法更符合常见的可移植写法？",
    "options": [
      "int main(void) { return 0; }",
      "void main(void) { }",
      "main() { }",
      "int start(void) { return 0; }"
    ],
    "answer": 0,
    "explanation": "标准 C 程序通常从 main 函数开始执行，常见可移植写法是 int main(void) 或 int main(int argc, char *argv[])。返回 int 可以把程序结束状态交给运行环境。void main 不是标准 C 规定的通用形式。",
    "tags": [
      "main",
      "程序结构"
    ],
    "knowledgeId": "kp_0010",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c002",
    "chapter": "C语言基础语法与程序结构",
    "topic": "基本数据类型",
    "difficulty": "基础",
    "question": "在编写嵌入式 C 程序时，下面哪种说法更适合初学者记忆？",
    "options": [
      "char、short、int、long 的字节数在所有平台都固定不变",
      "C 标准规定了基本整数类型的相对范围要求，但具体字节数可能随平台变化",
      "int 一定是 32 位，所以可以直接保存所有寄存器值",
      "long 一定比指针更大"
    ],
    "answer": 1,
    "explanation": "C 标准没有把 int、long 等类型的字节数固定死，只规定了一些相对范围要求。嵌入式平台差异较大，涉及位宽明确的硬件数据时，应优先考虑 stdint.h 中的固定宽度整数类型。",
    "tags": [
      "基本类型",
      "可移植性"
    ],
    "knowledgeId": "kp_0011",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c003",
    "chapter": "C语言基础语法与程序结构",
    "topic": "signed 与 unsigned",
    "difficulty": "易错",
    "question": "关于 signed int 和 unsigned int，下面哪项说法正确？",
    "options": [
      "unsigned int 不能参与算术运算",
      "signed int 溢出后的结果由 C 标准保证为回绕",
      "unsigned int 的无符号运算按模数回绕，signed int 溢出属于未定义行为",
      "signed int 一定比 unsigned int 占用更多内存"
    ],
    "answer": 2,
    "explanation": "无符号整数运算在超出范围时按模 2 的位宽回绕，这是 C 标准定义的行为。带符号整数溢出是未定义行为，不能依赖它得到某个固定结果。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "signed",
      "unsigned",
      "溢出"
    ],
    "knowledgeId": "kp_0012",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c004",
    "chapter": "C语言基础语法与程序结构",
    "topic": "sizeof",
    "difficulty": "基础",
    "question": "对表达式 sizeof(char)，C 标准保证的结果是什么？",
    "options": [
      "1",
      "2",
      "4",
      "取决于编译器，可能为任意值"
    ],
    "answer": 0,
    "explanation": "sizeof 的结果单位是 char 的大小，所以 sizeof(char) 按定义恒为 1。这里的 1 表示 1 个 char 单位，并不等价于某个平台上的物理存储细节。",
    "tags": [
      "sizeof",
      "基本类型"
    ],
    "knowledgeId": "kp_0013",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c005",
    "chapter": "C语言基础语法与程序结构",
    "topic": "运算符优先级",
    "difficulty": "易错",
    "question": "表达式 a & b == 0 在 C 中会先计算哪一部分？",
    "options": [
      "先计算 a & b，再与 0 比较",
      "先计算 b == 0，再与 a 做按位与",
      "先计算 a & 0，再与 b 比较",
      "这个表达式一定无法编译"
    ],
    "answer": 1,
    "explanation": "相等运算符 == 的优先级高于按位与 &，所以 a & b == 0 会按 a & (b == 0) 理解。判断某些位是否全为 0 时应写成 (a & b) == 0，括号能避免误读。",
    "tags": [
      "优先级",
      "位运算"
    ],
    "knowledgeId": "kp_0007",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  }
]

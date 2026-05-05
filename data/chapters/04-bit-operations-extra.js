module.exports = [
  {
    "id": "c314",
    "chapter": "位运算与位级操作",
    "topic": "按位与清位",
    "difficulty": "基础",
    "question": "下面代码围绕「按位与清位」最应该补充什么检查？\n请重点从「按位与清位」的单元测试覆盖角度判断（样例组 23）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位与",
      "清位",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "错误诊断"
    ],
    "knowledgeId": "kp_0049",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c315",
    "chapter": "位运算与位级操作",
    "topic": "按位或置位",
    "difficulty": "进阶",
    "question": "要把第 5 位置 1，下面哪个选项最适合填入空白处？\n请重点从「按位或置位」的代码评审角度判断（样例组 24）。\nuint32_t reg = read_reg();\nuint32_t mask = 1u << 5;\nreg = ____;\nwrite_reg(reg);",
    "options": [
      "reg & mask",
      "reg ^ mask",
      "reg & ~mask",
      "reg | mask"
    ],
    "answer": 3,
    "explanation": "置位应使用按位或，保留其他位并把目标位写成 1。& mask 会清掉其他位，^ mask 是翻转，& ~mask 是清零。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位或",
      "置位",
      "扩展题库",
      "代码相关题",
      "填空选择"
    ],
    "knowledgeId": "kp_0050",
    "type": "fill_blank",
    "code": "uint32_t reg = read_reg();\nuint32_t mask = 1u << 5;\nreg = ____;\nwrite_reg(reg);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c316",
    "chapter": "位运算与位级操作",
    "topic": "按位异或翻转",
    "difficulty": "易错",
    "question": "执行后 flags 的十六进制值是多少？\n请重点从「按位异或翻转」的内存破坏定位角度判断（样例组 25）。\nuint8_t flags = 0x5Au;\nflags ^= 0x0Fu;",
    "options": [
      "0x55",
      "0x0F",
      "0x5F",
      "0x50"
    ],
    "answer": 0,
    "explanation": "0x5A 的低 4 位是 A，和 0x0F 异或会翻转为 5，高 4 位保持 5，所以结果是 0x55。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "异或",
      "翻转",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码计算",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0051",
    "type": "calculation",
    "code": "uint8_t flags = 0x5Au;\nflags ^= 0x0Fu;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c317",
    "chapter": "位运算与位级操作",
    "topic": "左移位数",
    "difficulty": "面试",
    "question": "下面代码围绕「左移位数」最应该补充什么检查？\n请重点从「左移位数」的寄存器副作用角度判断（样例组 26）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 1,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "左移",
      "掩码",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "错误诊断"
    ],
    "knowledgeId": "kp_0052",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c318",
    "chapter": "位运算与位级操作",
    "topic": "右移负数",
    "difficulty": "基础",
    "question": "下面代码围绕「右移负数」最应该补充什么检查？\n请重点从「右移负数」的编译优化影响角度判断（样例组 27）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "右移",
      "可移植性",
      "扩展题库",
      "代码相关题",
      "填空选择",
      "错误诊断"
    ],
    "knowledgeId": "kp_0053",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c319",
    "chapter": "位运算与位级操作",
    "topic": "位字段提取",
    "difficulty": "进阶",
    "question": "下面代码围绕「位字段提取」最应该补充什么检查？\n请重点从「位字段提取」的资源受限 MCU角度判断（样例组 28）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界"
    ],
    "answer": 3,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位字段",
      "掩码",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0054",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c320",
    "chapter": "位运算与位级操作",
    "topic": "寄存器读改写",
    "difficulty": "易错",
    "question": "下面代码围绕「寄存器读改写」最应该补充什么检查？\n请重点从「寄存器读改写」的面试追问角度判断（样例组 29）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 0,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "寄存器",
      "位操作",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "interview",
      "错误诊断"
    ],
    "knowledgeId": "kp_0055",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c321",
    "chapter": "位运算与位级操作",
    "topic": "判断2的幂",
    "difficulty": "面试",
    "question": "下面代码围绕「判断2的幂」最应该补充什么检查？\n请重点从「判断2的幂」的调试复盘角度判断（样例组 30）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 1,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位技巧",
      "2的幂",
      "扩展题库",
      "代码相关题",
      "填空选择",
      "错误诊断"
    ],
    "knowledgeId": "kp_0056",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c322",
    "chapter": "位运算与位级操作",
    "topic": "字节拆分",
    "difficulty": "基础",
    "question": "下面代码围绕「字节拆分」最应该补充什么检查？\n请重点从「字节拆分」的量产固件稳定性角度判断（样例组 31）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "字节序",
      "协议",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0057",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c323",
    "chapter": "位运算与位级操作",
    "topic": "按位与清位",
    "difficulty": "进阶",
    "question": "下面代码围绕「按位与清位」最应该补充什么检查？\n请重点从「按位与清位」的初始化顺序角度判断（样例组 32）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界"
    ],
    "answer": 3,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位与",
      "清位",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "错误诊断"
    ],
    "knowledgeId": "kp_0049",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c324",
    "chapter": "位运算与位级操作",
    "topic": "按位或置位",
    "difficulty": "易错",
    "question": "要把第 5 位置 1，下面哪个选项最适合填入空白处？\n请重点从「按位或置位」的边界条件角度判断（样例组 33）。\nuint32_t reg = read_reg();\nuint32_t mask = 1u << 5;\nreg = ____;\nwrite_reg(reg);",
    "options": [
      "reg | mask",
      "reg & mask",
      "reg ^ mask",
      "reg & ~mask"
    ],
    "answer": 0,
    "explanation": "置位应使用按位或，保留其他位并把目标位写成 1。& mask 会清掉其他位，^ mask 是翻转，& ~mask 是清零。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位或",
      "置位",
      "扩展题库",
      "代码相关题",
      "填空选择"
    ],
    "knowledgeId": "kp_0050",
    "type": "fill_blank",
    "code": "uint32_t reg = read_reg();\nuint32_t mask = 1u << 5;\nreg = ____;\nwrite_reg(reg);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c325",
    "chapter": "位运算与位级操作",
    "topic": "按位异或翻转",
    "difficulty": "面试",
    "question": "执行后 flags 的十六进制值是多少？\n请重点从「按位异或翻转」的失败路径角度判断（样例组 34）。\nuint8_t flags = 0x5Au;\nflags ^= 0x0Fu;",
    "options": [
      "0x0F",
      "0x55",
      "0x5F",
      "0x50"
    ],
    "answer": 1,
    "explanation": "0x5A 的低 4 位是 A，和 0x0F 异或会翻转为 5，高 4 位保持 5，所以结果是 0x55。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "异或",
      "翻转",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码计算"
    ],
    "knowledgeId": "kp_0051",
    "type": "calculation",
    "code": "uint8_t flags = 0x5Au;\nflags ^= 0x0Fu;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c326",
    "chapter": "位运算与位级操作",
    "topic": "左移位数",
    "difficulty": "基础",
    "question": "下面代码围绕「左移位数」最应该补充什么检查？\n请重点从「左移位数」的生命周期角度判断（样例组 35）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "左移",
      "掩码",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0052",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c327",
    "chapter": "位运算与位级操作",
    "topic": "右移负数",
    "difficulty": "进阶",
    "question": "下面代码围绕「右移负数」最应该补充什么检查？\n请重点从「右移负数」的可移植性角度判断（样例组 36）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界"
    ],
    "answer": 3,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "右移",
      "可移植性",
      "扩展题库",
      "代码相关题",
      "填空选择",
      "错误诊断"
    ],
    "knowledgeId": "kp_0053",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c328",
    "chapter": "位运算与位级操作",
    "topic": "位字段提取",
    "difficulty": "易错",
    "question": "下面代码围绕「位字段提取」最应该补充什么检查？\n请重点从「位字段提取」的中断安全角度判断（样例组 37）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 0,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位字段",
      "掩码",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0054",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c329",
    "chapter": "位运算与位级操作",
    "topic": "寄存器读改写",
    "difficulty": "面试",
    "question": "下面代码围绕「寄存器读改写」最应该补充什么检查？\n请重点从「寄存器读改写」的长期运行稳定性角度判断（样例组 38）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 1,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "寄存器",
      "位操作",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "错误诊断"
    ],
    "knowledgeId": "kp_0055",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c330",
    "chapter": "位运算与位级操作",
    "topic": "判断2的幂",
    "difficulty": "基础",
    "question": "下面代码围绕「判断2的幂」最应该补充什么检查？\n请重点从「判断2的幂」的接口契约角度判断（样例组 39）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位技巧",
      "2的幂",
      "扩展题库",
      "代码相关题",
      "填空选择",
      "错误诊断"
    ],
    "knowledgeId": "kp_0056",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c331",
    "chapter": "位运算与位级操作",
    "topic": "字节拆分",
    "difficulty": "进阶",
    "question": "下面代码围绕「字节拆分」最应该补充什么检查？\n请重点从「字节拆分」的单元测试覆盖角度判断（样例组 40）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界"
    ],
    "answer": 3,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "字节序",
      "协议",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0057",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c332",
    "chapter": "位运算与位级操作",
    "topic": "按位与清位",
    "difficulty": "易错",
    "question": "下面代码围绕「按位与清位」最应该补充什么检查？\n请重点从「按位与清位」的代码评审角度判断（样例组 41）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 0,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位与",
      "清位",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "错误诊断"
    ],
    "knowledgeId": "kp_0049",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c333",
    "chapter": "位运算与位级操作",
    "topic": "按位或置位",
    "difficulty": "面试",
    "question": "要把第 5 位置 1，下面哪个选项最适合填入空白处？\n请重点从「按位或置位」的内存破坏定位角度判断（样例组 42）。\nuint32_t reg = read_reg();\nuint32_t mask = 1u << 5;\nreg = ____;\nwrite_reg(reg);",
    "options": [
      "reg & mask",
      "reg | mask",
      "reg ^ mask",
      "reg & ~mask"
    ],
    "answer": 1,
    "explanation": "置位应使用按位或，保留其他位并把目标位写成 1。& mask 会清掉其他位，^ mask 是翻转，& ~mask 是清零。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位或",
      "置位",
      "扩展题库",
      "代码相关题",
      "填空选择",
      "补漏"
    ],
    "knowledgeId": "kp_0050",
    "type": "fill_blank",
    "code": "uint32_t reg = read_reg();\nuint32_t mask = 1u << 5;\nreg = ____;\nwrite_reg(reg);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c334",
    "chapter": "位运算与位级操作",
    "topic": "按位异或翻转",
    "difficulty": "基础",
    "question": "执行后 flags 的十六进制值是多少？\n请重点从「按位异或翻转」的寄存器副作用角度判断（样例组 43）。\nuint8_t flags = 0x5Au;\nflags ^= 0x0Fu;",
    "options": [
      "0x0F",
      "0x5F",
      "0x55",
      "0x50"
    ],
    "answer": 2,
    "explanation": "0x5A 的低 4 位是 A，和 0x0F 异或会翻转为 5，高 4 位保持 5，所以结果是 0x55。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "异或",
      "翻转",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码计算"
    ],
    "knowledgeId": "kp_0051",
    "type": "calculation",
    "code": "uint8_t flags = 0x5Au;\nflags ^= 0x0Fu;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c335",
    "chapter": "位运算与位级操作",
    "topic": "左移位数",
    "difficulty": "进阶",
    "question": "下面代码围绕「左移位数」最应该补充什么检查？\n请重点从「左移位数」的编译优化影响角度判断（样例组 44）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界"
    ],
    "answer": 3,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "左移",
      "掩码",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "错误诊断"
    ],
    "knowledgeId": "kp_0052",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c336",
    "chapter": "位运算与位级操作",
    "topic": "右移负数",
    "difficulty": "易错",
    "question": "下面代码围绕「右移负数」最应该补充什么检查？\n请重点从「右移负数」的资源受限 MCU角度判断（样例组 45）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 0,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "右移",
      "可移植性",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "错误诊断"
    ],
    "knowledgeId": "kp_0053",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c337",
    "chapter": "位运算与位级操作",
    "topic": "位字段提取",
    "difficulty": "面试",
    "question": "下面代码围绕「位字段提取」最应该补充什么检查？\n请重点从「位字段提取」的面试追问角度判断（样例组 46）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 1,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位字段",
      "掩码",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "interview"
    ],
    "knowledgeId": "kp_0054",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c338",
    "chapter": "位运算与位级操作",
    "topic": "寄存器读改写",
    "difficulty": "基础",
    "question": "下面代码围绕「寄存器读改写」最应该补充什么检查？\n请重点从「寄存器读改写」的调试复盘角度判断（样例组 47）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "寄存器",
      "位操作",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "错误诊断"
    ],
    "knowledgeId": "kp_0055",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c339",
    "chapter": "位运算与位级操作",
    "topic": "判断2的幂",
    "difficulty": "进阶",
    "question": "下面代码围绕「判断2的幂」最应该补充什么检查？\n请重点从「判断2的幂」的量产固件稳定性角度判断（样例组 48）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界"
    ],
    "answer": 3,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位技巧",
      "2的幂",
      "扩展题库",
      "代码相关题",
      "填空选择",
      "错误诊断"
    ],
    "knowledgeId": "kp_0056",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c340",
    "chapter": "位运算与位级操作",
    "topic": "字节拆分",
    "difficulty": "易错",
    "question": "下面代码围绕「字节拆分」最应该补充什么检查？\n请重点从「字节拆分」的初始化顺序角度判断（样例组 49）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 0,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "字节序",
      "协议",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0057",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c341",
    "chapter": "位运算与位级操作",
    "topic": "按位与清位",
    "difficulty": "面试",
    "question": "下面代码围绕「按位与清位」最应该补充什么检查？\n请重点从「按位与清位」的边界条件角度判断（样例组 50）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 1,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位与",
      "清位",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "错误诊断"
    ],
    "knowledgeId": "kp_0049",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c342",
    "chapter": "位运算与位级操作",
    "topic": "按位或置位",
    "difficulty": "基础",
    "question": "要把第 5 位置 1，下面哪个选项最适合填入空白处？\n请重点从「按位或置位」的失败路径角度判断（样例组 51）。\nuint32_t reg = read_reg();\nuint32_t mask = 1u << 5;\nreg = ____;\nwrite_reg(reg);",
    "options": [
      "reg & mask",
      "reg ^ mask",
      "reg | mask",
      "reg & ~mask"
    ],
    "answer": 2,
    "explanation": "置位应使用按位或，保留其他位并把目标位写成 1。& mask 会清掉其他位，^ mask 是翻转，& ~mask 是清零。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位或",
      "置位",
      "扩展题库",
      "代码相关题",
      "填空选择"
    ],
    "knowledgeId": "kp_0050",
    "type": "fill_blank",
    "code": "uint32_t reg = read_reg();\nuint32_t mask = 1u << 5;\nreg = ____;\nwrite_reg(reg);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c343",
    "chapter": "位运算与位级操作",
    "topic": "按位异或翻转",
    "difficulty": "进阶",
    "question": "执行后 flags 的十六进制值是多少？\n请重点从「按位异或翻转」的生命周期角度判断（样例组 52）。\nuint8_t flags = 0x5Au;\nflags ^= 0x0Fu;",
    "options": [
      "0x0F",
      "0x5F",
      "0x50",
      "0x55"
    ],
    "answer": 3,
    "explanation": "0x5A 的低 4 位是 A，和 0x0F 异或会翻转为 5，高 4 位保持 5，所以结果是 0x55。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "异或",
      "翻转",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码计算",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0051",
    "type": "calculation",
    "code": "uint8_t flags = 0x5Au;\nflags ^= 0x0Fu;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c344",
    "chapter": "位运算与位级操作",
    "topic": "左移位数",
    "difficulty": "易错",
    "question": "下面代码围绕「左移位数」最应该补充什么检查？\n请重点从「左移位数」的可移植性角度判断（样例组 53）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 0,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "左移",
      "掩码",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "错误诊断"
    ],
    "knowledgeId": "kp_0052",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c345",
    "chapter": "位运算与位级操作",
    "topic": "右移负数",
    "difficulty": "面试",
    "question": "下面代码围绕「右移负数」最应该补充什么检查？\n请重点从「右移负数」的中断安全角度判断（样例组 54）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 1,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "右移",
      "可移植性",
      "扩展题库",
      "代码相关题",
      "填空选择",
      "错误诊断",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0053",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c346",
    "chapter": "位运算与位级操作",
    "topic": "位字段提取",
    "difficulty": "基础",
    "question": "下面代码围绕「位字段提取」最应该补充什么检查？\n请重点从「位字段提取」的长期运行稳定性角度判断（样例组 55）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位字段",
      "掩码",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0054",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c347",
    "chapter": "位运算与位级操作",
    "topic": "寄存器读改写",
    "difficulty": "进阶",
    "question": "下面代码围绕「寄存器读改写」最应该补充什么检查？\n请重点从「寄存器读改写」的接口契约角度判断（样例组 56）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界"
    ],
    "answer": 3,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "寄存器",
      "位操作",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "错误诊断"
    ],
    "knowledgeId": "kp_0055",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c348",
    "chapter": "位运算与位级操作",
    "topic": "判断2的幂",
    "difficulty": "易错",
    "question": "下面代码围绕「判断2的幂」最应该补充什么检查？\n请重点从「判断2的幂」的单元测试覆盖角度判断（样例组 57）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 0,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位技巧",
      "2的幂",
      "扩展题库",
      "代码相关题",
      "填空选择",
      "错误诊断"
    ],
    "knowledgeId": "kp_0056",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c349",
    "chapter": "位运算与位级操作",
    "topic": "字节拆分",
    "difficulty": "面试",
    "question": "下面代码围绕「字节拆分」最应该补充什么检查？\n请重点从「字节拆分」的代码评审角度判断（样例组 58）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 1,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "字节序",
      "协议",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0057",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c350",
    "chapter": "位运算与位级操作",
    "topic": "按位与清位",
    "difficulty": "基础",
    "question": "下面代码围绕「按位与清位」最应该补充什么检查？\n请重点从「按位与清位」的内存破坏定位角度判断（样例组 59）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位与",
      "清位",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "错误诊断"
    ],
    "knowledgeId": "kp_0049",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c351",
    "chapter": "位运算与位级操作",
    "topic": "按位或置位",
    "difficulty": "进阶",
    "question": "要把第 5 位置 1，下面哪个选项最适合填入空白处？\n请重点从「按位或置位」的寄存器副作用角度判断（样例组 60）。\nuint32_t reg = read_reg();\nuint32_t mask = 1u << 5;\nreg = ____;\nwrite_reg(reg);",
    "options": [
      "reg & mask",
      "reg ^ mask",
      "reg & ~mask",
      "reg | mask"
    ],
    "answer": 3,
    "explanation": "置位应使用按位或，保留其他位并把目标位写成 1。& mask 会清掉其他位，^ mask 是翻转，& ~mask 是清零。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位或",
      "置位",
      "扩展题库",
      "代码相关题",
      "填空选择"
    ],
    "knowledgeId": "kp_0050",
    "type": "fill_blank",
    "code": "uint32_t reg = read_reg();\nuint32_t mask = 1u << 5;\nreg = ____;\nwrite_reg(reg);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c352",
    "chapter": "位运算与位级操作",
    "topic": "按位异或翻转",
    "difficulty": "易错",
    "question": "执行后 flags 的十六进制值是多少？\n请重点从「按位异或翻转」的编译优化影响角度判断（样例组 61）。\nuint8_t flags = 0x5Au;\nflags ^= 0x0Fu;",
    "options": [
      "0x55",
      "0x0F",
      "0x5F",
      "0x50"
    ],
    "answer": 0,
    "explanation": "0x5A 的低 4 位是 A，和 0x0F 异或会翻转为 5，高 4 位保持 5，所以结果是 0x55。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "异或",
      "翻转",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码计算"
    ],
    "knowledgeId": "kp_0051",
    "type": "calculation",
    "code": "uint8_t flags = 0x5Au;\nflags ^= 0x0Fu;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c353",
    "chapter": "位运算与位级操作",
    "topic": "左移位数",
    "difficulty": "面试",
    "question": "下面代码围绕「左移位数」最应该补充什么检查？\n请重点从「左移位数」的资源受限 MCU角度判断（样例组 62）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 1,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "左移",
      "掩码",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "错误诊断"
    ],
    "knowledgeId": "kp_0052",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c354",
    "chapter": "位运算与位级操作",
    "topic": "右移负数",
    "difficulty": "基础",
    "question": "下面代码围绕「右移负数」最应该补充什么检查？\n请重点从「右移负数」的面试追问角度判断（样例组 63）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "右移",
      "可移植性",
      "扩展题库",
      "代码相关题",
      "填空选择",
      "错误诊断",
      "interview"
    ],
    "knowledgeId": "kp_0053",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c355",
    "chapter": "位运算与位级操作",
    "topic": "位字段提取",
    "difficulty": "进阶",
    "question": "下面代码围绕「位字段提取」最应该补充什么检查？\n请重点从「位字段提取」的调试复盘角度判断（样例组 64）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界"
    ],
    "answer": 3,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位字段",
      "掩码",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0054",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c356",
    "chapter": "位运算与位级操作",
    "topic": "寄存器读改写",
    "difficulty": "易错",
    "question": "下面代码围绕「寄存器读改写」最应该补充什么检查？\n请重点从「寄存器读改写」的量产固件稳定性角度判断（样例组 65）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 0,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "寄存器",
      "位操作",
      "扩展题库",
      "代码相关题",
      "补漏",
      "代码计算",
      "错误诊断"
    ],
    "knowledgeId": "kp_0055",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c357",
    "chapter": "位运算与位级操作",
    "topic": "判断2的幂",
    "difficulty": "面试",
    "question": "下面代码围绕「判断2的幂」最应该补充什么检查？\n请重点从「判断2的幂」的初始化顺序角度判断（样例组 66）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 1,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "位技巧",
      "2的幂",
      "扩展题库",
      "代码相关题",
      "填空选择",
      "错误诊断"
    ],
    "knowledgeId": "kp_0056",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c358",
    "chapter": "位运算与位级操作",
    "topic": "字节拆分",
    "difficulty": "基础",
    "question": "下面代码围绕「字节拆分」最应该补充什么检查？\n请重点从「字节拆分」的边界条件角度判断（样例组 67）。\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。改变 signed 或返回类型不能消除越界移位问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "字节序",
      "协议",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0057",
    "type": "bug_fix",
    "code": "uint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "reviewStatus": "待复核"
  }
]

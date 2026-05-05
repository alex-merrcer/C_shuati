module.exports = [
  {
    "id": "c314",
    "chapter": "位运算与位级操作",
    "topic": "按位与清位",
    "difficulty": "基础",
    "question": "在寄存器位设置中看到下面这段和「按位与清位」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。",
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
    "question": "要让这段「按位或置位」代码按预期工作，空白处最适合填什么？\nuint32_t reg = read_reg();\nuint32_t mask = 1u << 5;\nreg = ____;\nwrite_reg(reg);",
    "options": [
      "reg & mask",
      "reg ^ mask",
      "reg & ~mask",
      "reg | mask"
    ],
    "answer": 3,
    "explanation": "置位应使用按位或，保留其他位并把目标位写成 1。 正确填法必须保证：移位范围、掩码宽度和无关位是否被保留。 & mask 会清掉其他位，^ mask 是翻转，& ~mask 是清零。",
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
    "question": "按题干给定假设分析这段「按位异或翻转」代码，哪项结果正确？\nuint8_t flags = 0x5Au;\nflags ^= 0x0Fu;",
    "options": [
      "0x55",
      "0x0F",
      "0x5F",
      "0x50"
    ],
    "answer": 0,
    "explanation": "0x5A 的低 4 位是 A，和 0x0F 异或会翻转为 5，高 4 位保持 5，所以结果是 0x55。 先按题干假设推导，再检查：移位范围、掩码宽度和无关位是否被保留。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。",
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
    "question": "在寄存器位设置中看到下面这段和「左移位数」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 1,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到状态标志打包里，重点看首次调用时移位数是否小于类型位宽。",
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
    "question": "在寄存器位设置中看到下面这段和「右移负数」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到CRC 输入整理里，重点看首次调用时移位数是否小于类型位宽。",
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
    "question": "在寄存器位设置中看到下面这段和「位字段提取」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界"
    ],
    "answer": 3,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到权限位检查里，重点看首次调用时移位数是否小于类型位宽。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「寄存器读改写」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 0,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 改变 signed 或返回类型不能消除越界移位问题。",
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
    "question": "在寄存器位设置中看到下面这段和「判断2的幂」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 1,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到通信协议标志位里，重点看首次调用时移位数是否小于类型位宽。",
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
    "question": "在寄存器位设置中看到下面这段和「字节拆分」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n    return (1u << n) - 1u;\n}",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到错误码位图维护里，重点看首次调用时移位数是否小于类型位宽。",
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
    "question": "在寄存器位设置中看到下面这段和「按位与清位」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到状态标志打包里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界"
    ],
    "answer": 3,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到GPIO 模式配置里，重点看首次调用时移位数是否小于类型位宽。",
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
    "question": "要让这段「按位或置位」代码按预期工作，空白处最适合填什么？\nuint32_t reg = read_reg();\nuint32_t mask = 1u << 5;\nreg = ____;\nwrite_reg(reg);\n请把它放到状态标志打包里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "reg | mask",
      "reg & mask",
      "reg ^ mask",
      "reg & ~mask"
    ],
    "answer": 0,
    "explanation": "置位应使用按位或，保留其他位并把目标位写成 1。 正确填法必须保证：移位范围、掩码宽度和无关位是否被保留。 & mask 会清掉其他位，^ mask 是翻转，& ~mask 是清零。\n补测时把代码放到状态标志打包里，重点看首次调用时移位数是否小于类型位宽。",
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
    "question": "按题干给定假设分析这段「按位异或翻转」代码，哪项结果正确？\nuint8_t flags = 0x5Au;\nflags ^= 0x0Fu;\n请把它放到状态标志打包里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "0x0F",
      "0x55",
      "0x5F",
      "0x50"
    ],
    "answer": 1,
    "explanation": "0x5A 的低 4 位是 A，和 0x0F 异或会翻转为 5，高 4 位保持 5，所以结果是 0x55。 先按题干假设推导，再检查：移位范围、掩码宽度和无关位是否被保留。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到状态标志打包里，重点看首次调用时移位数是否小于类型位宽。",
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
    "question": "在寄存器位设置中看到下面这段和「左移位数」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到状态标志打包里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到定时器控制位修改里，重点看首次调用时移位数是否小于类型位宽。",
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
    "question": "在寄存器位设置中看到下面这段和「右移负数」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到状态标志打包里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界"
    ],
    "answer": 3,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到寄存器位设置里，重点看首次调用时掩码宽度是否匹配目标类型。",
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
    "question": "在寄存器位设置中看到下面这段和「位字段提取」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到状态标志打包里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 0,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到状态标志打包里，重点看首次调用时掩码宽度是否匹配目标类型。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「寄存器读改写」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到寄存器状态位清除里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 1,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到寄存器状态位清除里，重点看首次调用时volatile 是否只解决可见性。",
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
    "question": "在寄存器位设置中看到下面这段和「判断2的幂」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到状态标志打包里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到CRC 输入整理里，重点看首次调用时掩码宽度是否匹配目标类型。",
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
    "question": "在寄存器位设置中看到下面这段和「字节拆分」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到状态标志打包里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界"
    ],
    "answer": 3,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到权限位检查里，重点看首次调用时掩码宽度是否匹配目标类型。",
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
    "question": "在寄存器位设置中看到下面这段和「按位与清位」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到CRC 输入整理里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 0,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到通信协议标志位里，重点看首次调用时掩码宽度是否匹配目标类型。",
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
    "question": "要让这段「按位或置位」代码按预期工作，空白处最适合填什么？\nuint32_t reg = read_reg();\nuint32_t mask = 1u << 5;\nreg = ____;\nwrite_reg(reg);\n请把它放到CRC 输入整理里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "reg & mask",
      "reg | mask",
      "reg ^ mask",
      "reg & ~mask"
    ],
    "answer": 1,
    "explanation": "置位应使用按位或，保留其他位并把目标位写成 1。 正确填法必须保证：移位范围、掩码宽度和无关位是否被保留。 & mask 会清掉其他位，^ mask 是翻转，& ~mask 是清零。\n补测时把代码放到CRC 输入整理里，重点看首次调用时移位数是否小于类型位宽。",
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
    "question": "按题干给定假设分析这段「按位异或翻转」代码，哪项结果正确？\nuint8_t flags = 0x5Au;\nflags ^= 0x0Fu;\n请把它放到CRC 输入整理里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "0x0F",
      "0x5F",
      "0x55",
      "0x50"
    ],
    "answer": 2,
    "explanation": "0x5A 的低 4 位是 A，和 0x0F 异或会翻转为 5，高 4 位保持 5，所以结果是 0x55。 先按题干假设推导，再检查：移位范围、掩码宽度和无关位是否被保留。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到CRC 输入整理里，重点看首次调用时移位数是否小于类型位宽。",
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
    "question": "在寄存器位设置中看到下面这段和「左移位数」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到CRC 输入整理里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界"
    ],
    "answer": 3,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到错误码位图维护里，重点看首次调用时掩码宽度是否匹配目标类型。",
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
    "question": "在寄存器位设置中看到下面这段和「右移负数」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到CRC 输入整理里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 0,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到GPIO 模式配置里，重点看首次调用时掩码宽度是否匹配目标类型。",
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
    "question": "在寄存器位设置中看到下面这段和「位字段提取」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到CRC 输入整理里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 1,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到定时器控制位修改里，重点看首次调用时掩码宽度是否匹配目标类型。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「寄存器读改写」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到DMA 完成标志检查里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到DMA 完成标志检查里，重点看首次调用时volatile 是否只解决可见性。",
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
    "question": "在寄存器位设置中看到下面这段和「判断2的幂」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到CRC 输入整理里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界"
    ],
    "answer": 3,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到寄存器位设置里，重点看首次调用时无关位是否被保留。",
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
    "question": "在寄存器位设置中看到下面这段和「字节拆分」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到CRC 输入整理里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 0,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到状态标志打包里，重点看首次调用时无关位是否被保留。",
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
    "question": "在寄存器位设置中看到下面这段和「按位与清位」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到权限位检查里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 1,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到CRC 输入整理里，重点看首次调用时无关位是否被保留。",
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
    "question": "要让这段「按位或置位」代码按预期工作，空白处最适合填什么？\nuint32_t reg = read_reg();\nuint32_t mask = 1u << 5;\nreg = ____;\nwrite_reg(reg);\n请把它放到权限位检查里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "reg & mask",
      "reg ^ mask",
      "reg | mask",
      "reg & ~mask"
    ],
    "answer": 2,
    "explanation": "置位应使用按位或，保留其他位并把目标位写成 1。 正确填法必须保证：移位范围、掩码宽度和无关位是否被保留。 & mask 会清掉其他位，^ mask 是翻转，& ~mask 是清零。\n补测时把代码放到权限位检查里，重点看首次调用时移位数是否小于类型位宽。",
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
    "question": "按题干给定假设分析这段「按位异或翻转」代码，哪项结果正确？\nuint8_t flags = 0x5Au;\nflags ^= 0x0Fu;\n请把它放到权限位检查里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "0x0F",
      "0x5F",
      "0x50",
      "0x55"
    ],
    "answer": 3,
    "explanation": "0x5A 的低 4 位是 A，和 0x0F 异或会翻转为 5，高 4 位保持 5，所以结果是 0x55。 先按题干假设推导，再检查：移位范围、掩码宽度和无关位是否被保留。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到权限位检查里，重点看首次调用时移位数是否小于类型位宽。",
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
    "question": "在寄存器位设置中看到下面这段和「左移位数」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到权限位检查里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 0,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到权限位检查里，重点看首次调用时无关位是否被保留。",
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
    "question": "在寄存器位设置中看到下面这段和「右移负数」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到权限位检查里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 1,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到通信协议标志位里，重点看首次调用时无关位是否被保留。",
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
    "question": "在寄存器位设置中看到下面这段和「位字段提取」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到权限位检查里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到错误码位图维护里，重点看首次调用时无关位是否被保留。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「寄存器读改写」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到UART 接收回调里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界"
    ],
    "answer": 3,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到UART 接收回调里，重点看首次调用时volatile 是否只解决可见性。",
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
    "question": "在寄存器位设置中看到下面这段和「判断2的幂」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到权限位检查里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 0,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到GPIO 模式配置里，重点看首次调用时无关位是否被保留。",
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
    "question": "在寄存器位设置中看到下面这段和「字节拆分」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到权限位检查里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 1,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到定时器控制位修改里，重点看首次调用时无关位是否被保留。",
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
    "question": "在寄存器位设置中看到下面这段和「按位与清位」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到通信协议标志位里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到寄存器位设置里，重点看首次调用时signed 左移是否有风险。",
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
    "question": "要让这段「按位或置位」代码按预期工作，空白处最适合填什么？\nuint32_t reg = read_reg();\nuint32_t mask = 1u << 5;\nreg = ____;\nwrite_reg(reg);\n请把它放到通信协议标志位里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "reg & mask",
      "reg ^ mask",
      "reg & ~mask",
      "reg | mask"
    ],
    "answer": 3,
    "explanation": "置位应使用按位或，保留其他位并把目标位写成 1。 正确填法必须保证：移位范围、掩码宽度和无关位是否被保留。 & mask 会清掉其他位，^ mask 是翻转，& ~mask 是清零。\n补测时把代码放到通信协议标志位里，重点看首次调用时移位数是否小于类型位宽。",
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
    "question": "按题干给定假设分析这段「按位异或翻转」代码，哪项结果正确？\nuint8_t flags = 0x5Au;\nflags ^= 0x0Fu;\n请把它放到通信协议标志位里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "0x55",
      "0x0F",
      "0x5F",
      "0x50"
    ],
    "answer": 0,
    "explanation": "0x5A 的低 4 位是 A，和 0x0F 异或会翻转为 5，高 4 位保持 5，所以结果是 0x55。 先按题干假设推导，再检查：移位范围、掩码宽度和无关位是否被保留。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到通信协议标志位里，重点看首次调用时移位数是否小于类型位宽。",
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
    "question": "在寄存器位设置中看到下面这段和「左移位数」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到通信协议标志位里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 1,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到状态标志打包里，重点看首次调用时signed 左移是否有风险。",
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
    "question": "在寄存器位设置中看到下面这段和「右移负数」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到通信协议标志位里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到CRC 输入整理里，重点看首次调用时signed 左移是否有风险。",
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
    "question": "在寄存器位设置中看到下面这段和「位字段提取」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到通信协议标志位里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界"
    ],
    "answer": 3,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到权限位检查里，重点看首次调用时signed 左移是否有风险。",
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
    "question": "在中断和主循环共享状态中看到下面这段和「寄存器读改写」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到SysTick 计数里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 0,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到SysTick 计数里，重点看首次调用时volatile 是否只解决可见性。",
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
    "question": "在寄存器位设置中看到下面这段和「判断2的幂」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到通信协议标志位里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "把返回值改成 char，避免产生大掩码",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 1,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到通信协议标志位里，重点看首次调用时signed 左移是否有风险。",
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
    "question": "在寄存器位设置中看到下面这段和「字节拆分」有关的代码，最主要的风险是什么？\nuint32_t make_mask(unsigned int n) {\n return (1u << n) - 1u;\n}\n请把它放到通信协议标志位里判断，尤其看首次调用时移位数是否小于类型位宽。",
    "options": [
      "把 n 改成 signed int，这样任意移位都安全",
      "把返回值改成 char，避免产生大掩码",
      "检查 n 必须小于 1u 所在类型的位宽，避免移位位数越界",
      "删除 1u 后面的 u，让编译器自动处理所有边界"
    ],
    "answer": 2,
    "explanation": "位移题先看操作数类型和移位范围。 真正会出问题的是：移位范围、掩码宽度和无关位是否被保留。 改变 signed 或返回类型不能消除越界移位问题。\n补测时把代码放到错误码位图维护里，重点看首次调用时signed 左移是否有风险。",
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

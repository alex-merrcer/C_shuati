module.exports = [
  {
    "id": "c359",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体初始化",
    "difficulty": "基础",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体初始化」的失败路径角度判断（样例组 68）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "初始化",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0060",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c360",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体指针访问",
    "difficulty": "进阶",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体指针访问」的生命周期角度判断（样例组 69）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 0,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体指针",
      "NULL",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "代码阅读",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0061",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c361",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体浅拷贝",
    "difficulty": "易错",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体浅拷贝」的可移植性角度判断（样例组 70）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "浅拷贝",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码阅读",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0062",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c362",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体对齐",
    "difficulty": "面试",
    "question": "假设 uint32_t 按 4 字节对齐，sizeof(struct S) 通常是多少？\n请重点从「结构体对齐」的中断安全角度判断（样例组 71）。\nstruct S {\n    uint8_t a;\n    uint32_t b;\n};",
    "options": [
      "5，结构体大小一定等于所有成员大小之和",
      "4，因为结构体大小等于最大成员大小",
      "8，a 后面通常会有 3 字节填充，整体大小也按最大对齐补齐",
      "C 语言禁止结构体中出现填充字节"
    ],
    "answer": 2,
    "explanation": "结构体大小不是简单求和。编译器会为了成员对齐插入 padding，题干给出了常见对齐假设。 同时要把“成员偏移、container_of思想”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "对齐",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "代码计算",
      "错误诊断",
      "成员偏移",
      "container_of思想"
    ],
    "knowledgeId": "kp_0063",
    "type": "calculation",
    "code": "struct S {\n    uint8_t a;\n    uint32_t b;\n};",
    "reviewStatus": "待复核"
  },
  {
    "id": "c363",
    "chapter": "结构体、共用体与枚举",
    "topic": "offsetof宏",
    "difficulty": "基础",
    "question": "下面宏的主要问题是什么？\n请重点从「offsetof宏」的长期运行稳定性角度判断（样例组 72）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 同时要把“成员偏移、container_of思想”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "offsetof",
      "结构体布局",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "成员偏移",
      "container_of思想"
    ],
    "knowledgeId": "kp_0064",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c364",
    "chapter": "结构体、共用体与枚举",
    "topic": "packed结构体",
    "difficulty": "进阶",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「packed结构体」的接口契约角度判断（样例组 73）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 0,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "packed",
      "对齐",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0065",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c365",
    "chapter": "结构体、共用体与枚举",
    "topic": "位段可移植性",
    "difficulty": "易错",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「位段可移植性」的单元测试覆盖角度判断（样例组 74）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "位段",
      "可移植性",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0066",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c366",
    "chapter": "结构体、共用体与枚举",
    "topic": "共用体内存共享",
    "difficulty": "面试",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「共用体内存共享」的代码评审角度判断（样例组 75）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 2,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "共用体",
      "内存",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "补漏"
    ],
    "knowledgeId": "kp_0067",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c367",
    "chapter": "结构体、共用体与枚举",
    "topic": "共用体协议解析",
    "difficulty": "基础",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「共用体协议解析」的内存破坏定位角度判断（样例组 76）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "共用体",
      "协议",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0068",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c368",
    "chapter": "结构体、共用体与枚举",
    "topic": "枚举与状态机",
    "difficulty": "进阶",
    "question": "关于这段代码的理解，哪项正确？\n请重点从「枚举与状态机」的寄存器副作用角度判断（样例组 77）。\nenum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;",
    "options": [
      "raw 的值为 3，枚举常量可以显式指定取值",
      "BUSY 一定自动等于 1，不能显式赋值",
      "enum 变量只能保存 0 和 1",
      "enum 不能用于状态机代码"
    ],
    "answer": 0,
    "explanation": "枚举适合表达状态名和值的关系，显式赋值是合法的；状态机转移仍要由逻辑约束。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "enum",
      "状态机",
      "扩展题库",
      "代码相关题",
      "代码阅读"
    ],
    "knowledgeId": "kp_0069",
    "type": "code_read",
    "code": "enum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c369",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体初始化",
    "difficulty": "易错",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体初始化」的编译优化影响角度判断（样例组 78）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "初始化",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0060",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c370",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体指针访问",
    "difficulty": "面试",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体指针访问」的资源受限 MCU角度判断（样例组 79）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 2,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体指针",
      "NULL",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码阅读",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0061",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c371",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体浅拷贝",
    "difficulty": "基础",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体浅拷贝」的面试追问角度判断（样例组 80）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "浅拷贝",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "interview",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0062",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c372",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体对齐",
    "difficulty": "进阶",
    "question": "假设 uint32_t 按 4 字节对齐，sizeof(struct S) 通常是多少？\n请重点从「结构体对齐」的调试复盘角度判断（样例组 81）。\nstruct S {\n    uint8_t a;\n    uint32_t b;\n};",
    "options": [
      "8，a 后面通常会有 3 字节填充，整体大小也按最大对齐补齐",
      "5，结构体大小一定等于所有成员大小之和",
      "4，因为结构体大小等于最大成员大小",
      "C 语言禁止结构体中出现填充字节"
    ],
    "answer": 0,
    "explanation": "结构体大小不是简单求和。编译器会为了成员对齐插入 padding，题干给出了常见对齐假设。 同时要把“成员偏移、container_of思想”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "对齐",
      "扩展题库",
      "代码相关题",
      "补漏",
      "成员偏移",
      "container_of思想",
      "代码计算"
    ],
    "knowledgeId": "kp_0063",
    "type": "calculation",
    "code": "struct S {\n    uint8_t a;\n    uint32_t b;\n};",
    "reviewStatus": "待复核"
  },
  {
    "id": "c373",
    "chapter": "结构体、共用体与枚举",
    "topic": "offsetof宏",
    "difficulty": "易错",
    "question": "下面宏的主要问题是什么？\n请重点从「offsetof宏」的量产固件稳定性角度判断（样例组 82）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 同时要把“成员偏移、container_of思想”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "offsetof",
      "结构体布局",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "成员偏移",
      "container_of思想"
    ],
    "knowledgeId": "kp_0064",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c374",
    "chapter": "结构体、共用体与枚举",
    "topic": "packed结构体",
    "difficulty": "面试",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「packed结构体」的初始化顺序角度判断（样例组 83）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 2,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "packed",
      "对齐",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0065",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c375",
    "chapter": "结构体、共用体与枚举",
    "topic": "位段可移植性",
    "difficulty": "基础",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「位段可移植性」的边界条件角度判断（样例组 84）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "位段",
      "可移植性",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0066",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c376",
    "chapter": "结构体、共用体与枚举",
    "topic": "共用体内存共享",
    "difficulty": "进阶",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「共用体内存共享」的失败路径角度判断（样例组 85）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "共用体",
      "内存",
      "扩展题库",
      "代码相关题",
      "补漏"
    ],
    "knowledgeId": "kp_0067",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c377",
    "chapter": "结构体、共用体与枚举",
    "topic": "共用体协议解析",
    "difficulty": "易错",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「共用体协议解析」的生命周期角度判断（样例组 86）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "共用体",
      "协议",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0068",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c378",
    "chapter": "结构体、共用体与枚举",
    "topic": "枚举与状态机",
    "difficulty": "面试",
    "question": "关于这段代码的理解，哪项正确？\n请重点从「枚举与状态机」的可移植性角度判断（样例组 87）。\nenum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;",
    "options": [
      "BUSY 一定自动等于 1，不能显式赋值",
      "enum 变量只能保存 0 和 1",
      "raw 的值为 3，枚举常量可以显式指定取值",
      "enum 不能用于状态机代码"
    ],
    "answer": 2,
    "explanation": "枚举适合表达状态名和值的关系，显式赋值是合法的；状态机转移仍要由逻辑约束。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "enum",
      "状态机",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "代码阅读"
    ],
    "knowledgeId": "kp_0069",
    "type": "code_read",
    "code": "enum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c379",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体初始化",
    "difficulty": "基础",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体初始化」的中断安全角度判断（样例组 88）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "初始化",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码阅读",
      "补漏",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0060",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c380",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体指针访问",
    "difficulty": "进阶",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体指针访问」的长期运行稳定性角度判断（样例组 89）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 0,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体指针",
      "NULL",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0061",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c381",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体浅拷贝",
    "difficulty": "易错",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体浅拷贝」的接口契约角度判断（样例组 90）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "浅拷贝",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0062",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c382",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体对齐",
    "difficulty": "面试",
    "question": "假设 uint32_t 按 4 字节对齐，sizeof(struct S) 通常是多少？\n请重点从「结构体对齐」的单元测试覆盖角度判断（样例组 91）。\nstruct S {\n    uint8_t a;\n    uint32_t b;\n};",
    "options": [
      "5，结构体大小一定等于所有成员大小之和",
      "4，因为结构体大小等于最大成员大小",
      "8，a 后面通常会有 3 字节填充，整体大小也按最大对齐补齐",
      "C 语言禁止结构体中出现填充字节"
    ],
    "answer": 2,
    "explanation": "结构体大小不是简单求和。编译器会为了成员对齐插入 padding，题干给出了常见对齐假设。 同时要把“成员偏移、container_of思想”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "对齐",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码计算",
      "成员偏移",
      "container_of思想"
    ],
    "knowledgeId": "kp_0063",
    "type": "calculation",
    "code": "struct S {\n    uint8_t a;\n    uint32_t b;\n};",
    "reviewStatus": "待复核"
  },
  {
    "id": "c383",
    "chapter": "结构体、共用体与枚举",
    "topic": "offsetof宏",
    "difficulty": "基础",
    "question": "下面宏的主要问题是什么？\n请重点从「offsetof宏」的代码评审角度判断（样例组 92）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 同时要把“成员偏移、container_of思想”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "offsetof",
      "结构体布局",
      "扩展题库",
      "代码相关题",
      "补漏",
      "成员偏移",
      "container_of思想",
      "错误诊断"
    ],
    "knowledgeId": "kp_0064",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c384",
    "chapter": "结构体、共用体与枚举",
    "topic": "packed结构体",
    "difficulty": "进阶",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「packed结构体」的内存破坏定位角度判断（样例组 93）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 0,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "packed",
      "对齐",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "错误诊断",
      "补漏",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0065",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c385",
    "chapter": "结构体、共用体与枚举",
    "topic": "位段可移植性",
    "difficulty": "易错",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「位段可移植性」的寄存器副作用角度判断（样例组 94）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "位段",
      "可移植性",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码阅读",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0066",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c386",
    "chapter": "结构体、共用体与枚举",
    "topic": "共用体内存共享",
    "difficulty": "面试",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「共用体内存共享」的编译优化影响角度判断（样例组 95）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 2,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "共用体",
      "内存",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0067",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c387",
    "chapter": "结构体、共用体与枚举",
    "topic": "共用体协议解析",
    "difficulty": "基础",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「共用体协议解析」的资源受限 MCU角度判断（样例组 96）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "共用体",
      "协议",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0068",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c388",
    "chapter": "结构体、共用体与枚举",
    "topic": "枚举与状态机",
    "difficulty": "进阶",
    "question": "关于这段代码的理解，哪项正确？\n请重点从「枚举与状态机」的面试追问角度判断（样例组 0）。\nenum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;",
    "options": [
      "raw 的值为 3，枚举常量可以显式指定取值",
      "BUSY 一定自动等于 1，不能显式赋值",
      "enum 变量只能保存 0 和 1",
      "enum 不能用于状态机代码"
    ],
    "answer": 0,
    "explanation": "枚举适合表达状态名和值的关系，显式赋值是合法的；状态机转移仍要由逻辑约束。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "enum",
      "状态机",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码阅读",
      "interview"
    ],
    "knowledgeId": "kp_0069",
    "type": "code_read",
    "code": "enum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c389",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体初始化",
    "difficulty": "易错",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体初始化」的调试复盘角度判断（样例组 1）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "初始化",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0060",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c390",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体指针访问",
    "difficulty": "面试",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体指针访问」的量产固件稳定性角度判断（样例组 2）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 2,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体指针",
      "NULL",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0061",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c391",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体浅拷贝",
    "difficulty": "基础",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体浅拷贝」的初始化顺序角度判断（样例组 3）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "浅拷贝",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码阅读",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0062",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c392",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体对齐",
    "difficulty": "进阶",
    "question": "假设 uint32_t 按 4 字节对齐，sizeof(struct S) 通常是多少？\n请重点从「结构体对齐」的边界条件角度判断（样例组 4）。\nstruct S {\n    uint8_t a;\n    uint32_t b;\n};",
    "options": [
      "8，a 后面通常会有 3 字节填充，整体大小也按最大对齐补齐",
      "5，结构体大小一定等于所有成员大小之和",
      "4，因为结构体大小等于最大成员大小",
      "C 语言禁止结构体中出现填充字节"
    ],
    "answer": 0,
    "explanation": "结构体大小不是简单求和。编译器会为了成员对齐插入 padding，题干给出了常见对齐假设。 同时要把“成员偏移、container_of思想”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "对齐",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "代码计算",
      "成员偏移",
      "container_of思想"
    ],
    "knowledgeId": "kp_0063",
    "type": "calculation",
    "code": "struct S {\n    uint8_t a;\n    uint32_t b;\n};",
    "reviewStatus": "待复核"
  },
  {
    "id": "c393",
    "chapter": "结构体、共用体与枚举",
    "topic": "offsetof宏",
    "difficulty": "易错",
    "question": "下面宏的主要问题是什么？\n请重点从「offsetof宏」的失败路径角度判断（样例组 5）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 同时要把“成员偏移、container_of思想”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "offsetof",
      "结构体布局",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "成员偏移",
      "container_of思想"
    ],
    "knowledgeId": "kp_0064",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c394",
    "chapter": "结构体、共用体与枚举",
    "topic": "packed结构体",
    "difficulty": "面试",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「packed结构体」的生命周期角度判断（样例组 6）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 2,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "packed",
      "对齐",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0065",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c395",
    "chapter": "结构体、共用体与枚举",
    "topic": "位段可移植性",
    "difficulty": "基础",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「位段可移植性」的可移植性角度判断（样例组 7）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "位段",
      "可移植性",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0066",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c396",
    "chapter": "结构体、共用体与枚举",
    "topic": "共用体内存共享",
    "difficulty": "进阶",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「共用体内存共享」的中断安全角度判断（样例组 8）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "共用体",
      "内存",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "补漏"
    ],
    "knowledgeId": "kp_0067",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c397",
    "chapter": "结构体、共用体与枚举",
    "topic": "共用体协议解析",
    "difficulty": "易错",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「共用体协议解析」的长期运行稳定性角度判断（样例组 9）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "共用体",
      "协议",
      "扩展题库",
      "代码相关题",
      "补漏",
      "协议字段解析",
      "错误诊断"
    ],
    "knowledgeId": "kp_0068",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c398",
    "chapter": "结构体、共用体与枚举",
    "topic": "枚举与状态机",
    "difficulty": "面试",
    "question": "关于这段代码的理解，哪项正确？\n请重点从「枚举与状态机」的接口契约角度判断（样例组 10）。\nenum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;",
    "options": [
      "BUSY 一定自动等于 1，不能显式赋值",
      "enum 变量只能保存 0 和 1",
      "raw 的值为 3，枚举常量可以显式指定取值",
      "enum 不能用于状态机代码"
    ],
    "answer": 2,
    "explanation": "枚举适合表达状态名和值的关系，显式赋值是合法的；状态机转移仍要由逻辑约束。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "enum",
      "状态机",
      "扩展题库",
      "代码相关题",
      "代码阅读"
    ],
    "knowledgeId": "kp_0069",
    "type": "code_read",
    "code": "enum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c399",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体初始化",
    "difficulty": "基础",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体初始化」的单元测试覆盖角度判断（样例组 11）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "初始化",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0060",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c400",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体指针访问",
    "difficulty": "进阶",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体指针访问」的代码评审角度判断（样例组 12）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 0,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体指针",
      "NULL",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码阅读",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0061",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c401",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体浅拷贝",
    "difficulty": "易错",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体浅拷贝」的内存破坏定位角度判断（样例组 13）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "浅拷贝",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0062",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c402",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体对齐",
    "difficulty": "面试",
    "question": "假设 uint32_t 按 4 字节对齐，sizeof(struct S) 通常是多少？\n请重点从「结构体对齐」的寄存器副作用角度判断（样例组 14）。\nstruct S {\n    uint8_t a;\n    uint32_t b;\n};",
    "options": [
      "5，结构体大小一定等于所有成员大小之和",
      "4，因为结构体大小等于最大成员大小",
      "8，a 后面通常会有 3 字节填充，整体大小也按最大对齐补齐",
      "C 语言禁止结构体中出现填充字节"
    ],
    "answer": 2,
    "explanation": "结构体大小不是简单求和。编译器会为了成员对齐插入 padding，题干给出了常见对齐假设。 同时要把“成员偏移、container_of思想”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "对齐",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "成员偏移",
      "container_of思想"
    ],
    "knowledgeId": "kp_0063",
    "type": "calculation",
    "code": "struct S {\n    uint8_t a;\n    uint32_t b;\n};",
    "reviewStatus": "待复核"
  },
  {
    "id": "c403",
    "chapter": "结构体、共用体与枚举",
    "topic": "offsetof宏",
    "difficulty": "基础",
    "question": "下面宏的主要问题是什么？\n请重点从「offsetof宏」的编译优化影响角度判断（样例组 15）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 同时要把“成员偏移、container_of思想”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "offsetof",
      "结构体布局",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "成员偏移",
      "container_of思想"
    ],
    "knowledgeId": "kp_0064",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c404",
    "chapter": "结构体、共用体与枚举",
    "topic": "packed结构体",
    "difficulty": "进阶",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「packed结构体」的资源受限 MCU角度判断（样例组 16）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 0,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "packed",
      "对齐",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0065",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c405",
    "chapter": "结构体、共用体与枚举",
    "topic": "位段可移植性",
    "difficulty": "易错",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「位段可移植性」的面试追问角度判断（样例组 17）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "位段",
      "可移植性",
      "扩展题库",
      "代码相关题",
      "补漏",
      "interview",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0066",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c406",
    "chapter": "结构体、共用体与枚举",
    "topic": "共用体内存共享",
    "difficulty": "面试",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「共用体内存共享」的调试复盘角度判断（样例组 18）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 2,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "共用体",
      "内存",
      "扩展题库",
      "代码相关题",
      "补漏"
    ],
    "knowledgeId": "kp_0067",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c407",
    "chapter": "结构体、共用体与枚举",
    "topic": "共用体协议解析",
    "difficulty": "基础",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「共用体协议解析」的量产固件稳定性角度判断（样例组 19）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "共用体",
      "协议",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0068",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c408",
    "chapter": "结构体、共用体与枚举",
    "topic": "枚举与状态机",
    "difficulty": "进阶",
    "question": "关于这段代码的理解，哪项正确？\n请重点从「枚举与状态机」的初始化顺序角度判断（样例组 20）。\nenum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;",
    "options": [
      "raw 的值为 3，枚举常量可以显式指定取值",
      "BUSY 一定自动等于 1，不能显式赋值",
      "enum 变量只能保存 0 和 1",
      "enum 不能用于状态机代码"
    ],
    "answer": 0,
    "explanation": "枚举适合表达状态名和值的关系，显式赋值是合法的；状态机转移仍要由逻辑约束。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "enum",
      "状态机",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "代码阅读"
    ],
    "knowledgeId": "kp_0069",
    "type": "code_read",
    "code": "enum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c409",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体初始化",
    "difficulty": "易错",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体初始化」的边界条件角度判断（样例组 21）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "初始化",
      "扩展题库",
      "代码相关题",
      "补漏",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0060",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c410",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体指针访问",
    "difficulty": "面试",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体指针访问」的失败路径角度判断（样例组 22）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 2,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体指针",
      "NULL",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0061",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c411",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体浅拷贝",
    "difficulty": "基础",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体浅拷贝」的生命周期角度判断（样例组 23）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "浅拷贝",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "代码阅读",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0062",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c412",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体对齐",
    "difficulty": "进阶",
    "question": "假设 uint32_t 按 4 字节对齐，sizeof(struct S) 通常是多少？\n请重点从「结构体对齐」的可移植性角度判断（样例组 24）。\nstruct S {\n    uint8_t a;\n    uint32_t b;\n};",
    "options": [
      "8，a 后面通常会有 3 字节填充，整体大小也按最大对齐补齐",
      "5，结构体大小一定等于所有成员大小之和",
      "4，因为结构体大小等于最大成员大小",
      "C 语言禁止结构体中出现填充字节"
    ],
    "answer": 0,
    "explanation": "结构体大小不是简单求和。编译器会为了成员对齐插入 padding，题干给出了常见对齐假设。 同时要把“成员偏移、container_of思想”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "对齐",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码计算",
      "成员偏移",
      "container_of思想"
    ],
    "knowledgeId": "kp_0063",
    "type": "calculation",
    "code": "struct S {\n    uint8_t a;\n    uint32_t b;\n};",
    "reviewStatus": "待复核"
  },
  {
    "id": "c413",
    "chapter": "结构体、共用体与枚举",
    "topic": "offsetof宏",
    "difficulty": "易错",
    "question": "下面宏的主要问题是什么？\n请重点从「offsetof宏」的中断安全角度判断（样例组 25）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 同时要把“成员偏移、container_of思想”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "offsetof",
      "结构体布局",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "成员偏移",
      "container_of思想"
    ],
    "knowledgeId": "kp_0064",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c414",
    "chapter": "结构体、共用体与枚举",
    "topic": "packed结构体",
    "difficulty": "面试",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「packed结构体」的长期运行稳定性角度判断（样例组 26）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 2,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "packed",
      "对齐",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0065",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c415",
    "chapter": "结构体、共用体与枚举",
    "topic": "位段可移植性",
    "difficulty": "基础",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「位段可移植性」的接口契约角度判断（样例组 27）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "位段",
      "可移植性",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码阅读",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0066",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c416",
    "chapter": "结构体、共用体与枚举",
    "topic": "共用体内存共享",
    "difficulty": "进阶",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「共用体内存共享」的单元测试覆盖角度判断（样例组 28）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "共用体",
      "内存",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0067",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c417",
    "chapter": "结构体、共用体与枚举",
    "topic": "共用体协议解析",
    "difficulty": "易错",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「共用体协议解析」的代码评审角度判断（样例组 29）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "共用体",
      "协议",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0068",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c418",
    "chapter": "结构体、共用体与枚举",
    "topic": "枚举与状态机",
    "difficulty": "面试",
    "question": "关于这段代码的理解，哪项正确？\n请重点从「枚举与状态机」的内存破坏定位角度判断（样例组 30）。\nenum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;",
    "options": [
      "BUSY 一定自动等于 1，不能显式赋值",
      "enum 变量只能保存 0 和 1",
      "raw 的值为 3，枚举常量可以显式指定取值",
      "enum 不能用于状态机代码"
    ],
    "answer": 2,
    "explanation": "枚举适合表达状态名和值的关系，显式赋值是合法的；状态机转移仍要由逻辑约束。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "enum",
      "状态机",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码阅读",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0069",
    "type": "code_read",
    "code": "enum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c419",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体初始化",
    "difficulty": "基础",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体初始化」的寄存器副作用角度判断（样例组 31）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "初始化",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0060",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c420",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体指针访问",
    "difficulty": "进阶",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体指针访问」的编译优化影响角度判断（样例组 32）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 0,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体指针",
      "NULL",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0061",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c421",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体浅拷贝",
    "difficulty": "易错",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体浅拷贝」的资源受限 MCU角度判断（样例组 33）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "浅拷贝",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码阅读",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0062",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c422",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体对齐",
    "difficulty": "面试",
    "question": "假设 uint32_t 按 4 字节对齐，sizeof(struct S) 通常是多少？\n请重点从「结构体对齐」的面试追问角度判断（样例组 34）。\nstruct S {\n    uint8_t a;\n    uint32_t b;\n};",
    "options": [
      "5，结构体大小一定等于所有成员大小之和",
      "4，因为结构体大小等于最大成员大小",
      "8，a 后面通常会有 3 字节填充，整体大小也按最大对齐补齐",
      "C 语言禁止结构体中出现填充字节"
    ],
    "answer": 2,
    "explanation": "结构体大小不是简单求和。编译器会为了成员对齐插入 padding，题干给出了常见对齐假设。 同时要把“成员偏移、container_of思想”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "对齐",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "代码计算",
      "interview",
      "成员偏移",
      "container_of思想"
    ],
    "knowledgeId": "kp_0063",
    "type": "calculation",
    "code": "struct S {\n    uint8_t a;\n    uint32_t b;\n};",
    "reviewStatus": "待复核"
  },
  {
    "id": "c423",
    "chapter": "结构体、共用体与枚举",
    "topic": "offsetof宏",
    "difficulty": "基础",
    "question": "下面宏的主要问题是什么？\n请重点从「offsetof宏」的调试复盘角度判断（样例组 35）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 同时要把“成员偏移、container_of思想”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "offsetof",
      "结构体布局",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "成员偏移",
      "container_of思想"
    ],
    "knowledgeId": "kp_0064",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c424",
    "chapter": "结构体、共用体与枚举",
    "topic": "packed结构体",
    "difficulty": "进阶",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「packed结构体」的量产固件稳定性角度判断（样例组 36）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 0,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "packed",
      "对齐",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0065",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c425",
    "chapter": "结构体、共用体与枚举",
    "topic": "位段可移植性",
    "difficulty": "易错",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「位段可移植性」的初始化顺序角度判断（样例组 37）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "位段",
      "可移植性",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0066",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c426",
    "chapter": "结构体、共用体与枚举",
    "topic": "共用体内存共享",
    "difficulty": "面试",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「共用体内存共享」的边界条件角度判断（样例组 38）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 2,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "共用体",
      "内存",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "补漏"
    ],
    "knowledgeId": "kp_0067",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c427",
    "chapter": "结构体、共用体与枚举",
    "topic": "共用体协议解析",
    "difficulty": "基础",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「共用体协议解析」的失败路径角度判断（样例组 39）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "共用体",
      "协议",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0068",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c428",
    "chapter": "结构体、共用体与枚举",
    "topic": "枚举与状态机",
    "difficulty": "进阶",
    "question": "关于这段代码的理解，哪项正确？\n请重点从「枚举与状态机」的生命周期角度判断（样例组 40）。\nenum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;",
    "options": [
      "raw 的值为 3，枚举常量可以显式指定取值",
      "BUSY 一定自动等于 1，不能显式赋值",
      "enum 变量只能保存 0 和 1",
      "enum 不能用于状态机代码"
    ],
    "answer": 0,
    "explanation": "枚举适合表达状态名和值的关系，显式赋值是合法的；状态机转移仍要由逻辑约束。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "enum",
      "状态机",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0069",
    "type": "code_read",
    "code": "enum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c429",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体初始化",
    "difficulty": "易错",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体初始化」的可移植性角度判断（样例组 41）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "初始化",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0060",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c430",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体指针访问",
    "difficulty": "面试",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体指针访问」的中断安全角度判断（样例组 42）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 2,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体指针",
      "NULL",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码阅读",
      "补漏",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0061",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c431",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体浅拷贝",
    "difficulty": "基础",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「结构体浅拷贝」的长期运行稳定性角度判断（样例组 43）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "浅拷贝",
      "扩展题库",
      "代码相关题",
      "补漏",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0062",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c432",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体对齐",
    "difficulty": "进阶",
    "question": "假设 uint32_t 按 4 字节对齐，sizeof(struct S) 通常是多少？\n请重点从「结构体对齐」的接口契约角度判断（样例组 44）。\nstruct S {\n    uint8_t a;\n    uint32_t b;\n};",
    "options": [
      "8，a 后面通常会有 3 字节填充，整体大小也按最大对齐补齐",
      "5，结构体大小一定等于所有成员大小之和",
      "4，因为结构体大小等于最大成员大小",
      "C 语言禁止结构体中出现填充字节"
    ],
    "answer": 0,
    "explanation": "结构体大小不是简单求和。编译器会为了成员对齐插入 padding，题干给出了常见对齐假设。 同时要把“成员偏移、container_of思想”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "对齐",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "成员偏移",
      "container_of思想"
    ],
    "knowledgeId": "kp_0063",
    "type": "calculation",
    "code": "struct S {\n    uint8_t a;\n    uint32_t b;\n};",
    "reviewStatus": "待复核"
  },
  {
    "id": "c433",
    "chapter": "结构体、共用体与枚举",
    "topic": "offsetof宏",
    "difficulty": "易错",
    "question": "下面宏的主要问题是什么？\n请重点从「offsetof宏」的单元测试覆盖角度判断（样例组 45）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 同时要把“成员偏移、container_of思想”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "offsetof",
      "结构体布局",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "成员偏移",
      "container_of思想"
    ],
    "knowledgeId": "kp_0064",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c434",
    "chapter": "结构体、共用体与枚举",
    "topic": "packed结构体",
    "difficulty": "面试",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「packed结构体」的代码评审角度判断（样例组 46）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 2,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "packed",
      "对齐",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0065",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c435",
    "chapter": "结构体、共用体与枚举",
    "topic": "位段可移植性",
    "difficulty": "基础",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「位段可移植性」的内存破坏定位角度判断（样例组 47）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "位段",
      "可移植性",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "代码阅读",
      "补漏",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0066",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c436",
    "chapter": "结构体、共用体与枚举",
    "topic": "共用体内存共享",
    "difficulty": "进阶",
    "question": "如果目标 MCU 读取 16 位变量不是原子操作，这段代码缺少哪一步？\n请重点从「共用体内存共享」的寄存器副作用角度判断（样例组 48）。\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "共用体",
      "内存",
      "扩展题库",
      "代码相关题",
      "补漏"
    ],
    "knowledgeId": "kp_0067",
    "type": "missing_step",
    "code": "volatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c437",
    "chapter": "结构体、共用体与枚举",
    "topic": "共用体协议解析",
    "difficulty": "易错",
    "question": "下面代码解析外部数据的主要风险是什么？\n请重点从「共用体协议解析」的编译优化影响角度判断（样例组 49）。\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。memcpy 不会自动处理字节序、padding 或对齐问题。 同时要把“协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "共用体",
      "协议",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "错误诊断",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0068",
    "type": "bug_fix",
    "code": "struct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "reviewStatus": "待复核"
  },
  {
    "id": "c438",
    "chapter": "结构体、共用体与枚举",
    "topic": "枚举与状态机",
    "difficulty": "面试",
    "question": "关于这段代码的理解，哪项正确？\n请重点从「枚举与状态机」的资源受限 MCU角度判断（样例组 50）。\nenum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;",
    "options": [
      "BUSY 一定自动等于 1，不能显式赋值",
      "enum 变量只能保存 0 和 1",
      "raw 的值为 3，枚举常量可以显式指定取值",
      "enum 不能用于状态机代码"
    ],
    "answer": 2,
    "explanation": "枚举适合表达状态名和值的关系，显式赋值是合法的；状态机转移仍要由逻辑约束。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "enum",
      "状态机",
      "扩展题库",
      "代码相关题",
      "补漏",
      "代码阅读"
    ],
    "knowledgeId": "kp_0069",
    "type": "code_read",
    "code": "enum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;",
    "reviewStatus": "待复核"
  }
]

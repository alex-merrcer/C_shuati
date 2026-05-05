module.exports = [
  {
    "id": "c359",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体初始化",
    "difficulty": "基础",
    "question": "在协议帧头解析中看到下面这段和「结构体初始化」有关的代码，最主要的风险是什么？\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体指针访问」有关的代码，最主要的风险是什么？\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 0,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到Flash 参数结构保存里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体浅拷贝」有关的代码，最主要的风险是什么？\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到跨 MCU 数据交换里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "按题干给定假设分析这段「结构体对齐」代码，哪项结果正确？\nstruct S {\n    uint8_t a;\n    uint32_t b;\n};",
    "options": [
      "5，结构体大小一定等于所有成员大小之和",
      "4，因为结构体大小等于最大成员大小",
      "8，a 后面通常会有 3 字节填充，整体大小也按最大对齐补齐",
      "C 语言禁止结构体中出现填充字节"
    ],
    "answer": 2,
    "explanation": "结构体大小不是简单求和。 先按题干假设推导，再检查：结构体布局、填充字节、对齐和字节序假设是否写清楚。 编译器会为了成员对齐插入 padding，题干给出了常见对齐假设。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。",
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
    "question": "在协议帧头解析中看到下面这段和「offsetof宏」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。",
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
    "question": "在协议帧头解析中看到下面这段和「packed结构体」有关的代码，最主要的风险是什么？\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 0,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到网络字节序转换里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「位段可移植性」有关的代码，最主要的风险是什么？\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到寄存器位域审查里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "这段「共用体内存共享」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n    return adc_value;\n}",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 2,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。",
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
    "question": "在协议帧头解析中看到下面这段和「共用体协议解析」有关的代码，最主要的风险是什么？\nstruct Header {\n    uint8_t type;\n    uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到结构体数组序列化里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "读完这段「枚举与状态机」代码，哪项判断正确？\nenum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;",
    "options": [
      "raw 的值为 3，枚举常量可以显式指定取值",
      "BUSY 一定自动等于 1，不能显式赋值",
      "enum 变量只能保存 0 和 1",
      "enum 不能用于状态机代码"
    ],
    "answer": 0,
    "explanation": "枚举适合表达状态名和值的关系，显式赋值是合法的；状态机转移仍要由逻辑约束。 读这段代码时要盯住：结构体布局、填充字节、对齐和字节序假设是否写清楚。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体初始化」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到Flash 参数结构保存里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到升级包头校验里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体指针访问」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到Flash 参数结构保存里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 2,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到日志二进制格式解析里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体浅拷贝」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到Flash 参数结构保存里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到协议帧头解析里，重点看首次调用时对齐假设是否跨平台成立。",
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
    "question": "按题干给定假设分析这段「结构体对齐」代码，哪项结果正确？\nstruct S {\n uint8_t a;\n uint32_t b;\n};\n请把它放到Flash 参数结构保存里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "8，a 后面通常会有 3 字节填充，整体大小也按最大对齐补齐",
      "5，结构体大小一定等于所有成员大小之和",
      "4，因为结构体大小等于最大成员大小",
      "C 语言禁止结构体中出现填充字节"
    ],
    "answer": 0,
    "explanation": "结构体大小不是简单求和。 先按题干假设推导，再检查：结构体布局、填充字节、对齐和字节序假设是否写清楚。 编译器会为了成员对齐插入 padding，题干给出了常见对齐假设。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到Flash 参数结构保存里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「offsetof宏」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到Flash 参数结构保存里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到Flash 参数结构保存里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「packed结构体」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到Flash 参数结构保存里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 2,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到Flash 参数结构保存里，重点看首次调用时对齐假设是否跨平台成立。",
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
    "question": "在协议帧头解析中看到下面这段和「位段可移植性」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到Flash 参数结构保存里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到跨 MCU 数据交换里，重点看首次调用时对齐假设是否跨平台成立。",
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
    "question": "这段「共用体内存共享」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到寄存器状态位清除里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到寄存器状态位清除里，重点看首次调用时volatile 是否只解决可见性。",
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
    "question": "在协议帧头解析中看到下面这段和「共用体协议解析」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到Flash 参数结构保存里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到网络字节序转换里，重点看首次调用时对齐假设是否跨平台成立。",
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
    "question": "读完这段「枚举与状态机」代码，哪项判断正确？\nenum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;\n请把它放到Flash 参数结构保存里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "BUSY 一定自动等于 1，不能显式赋值",
      "enum 变量只能保存 0 和 1",
      "raw 的值为 3，枚举常量可以显式指定取值",
      "enum 不能用于状态机代码"
    ],
    "answer": 2,
    "explanation": "枚举适合表达状态名和值的关系，显式赋值是合法的；状态机转移仍要由逻辑约束。 读这段代码时要盯住：结构体布局、填充字节、对齐和字节序假设是否写清楚。\n补测时把代码放到Flash 参数结构保存里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体初始化」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到跨 MCU 数据交换里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到寄存器位域审查里，重点看首次调用时对齐假设是否跨平台成立。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体指针访问」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到跨 MCU 数据交换里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 0,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到结构体数组序列化里，重点看首次调用时对齐假设是否跨平台成立。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体浅拷贝」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到跨 MCU 数据交换里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到升级包头校验里，重点看首次调用时对齐假设是否跨平台成立。",
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
    "question": "按题干给定假设分析这段「结构体对齐」代码，哪项结果正确？\nstruct S {\n uint8_t a;\n uint32_t b;\n};\n请把它放到跨 MCU 数据交换里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "5，结构体大小一定等于所有成员大小之和",
      "4，因为结构体大小等于最大成员大小",
      "8，a 后面通常会有 3 字节填充，整体大小也按最大对齐补齐",
      "C 语言禁止结构体中出现填充字节"
    ],
    "answer": 2,
    "explanation": "结构体大小不是简单求和。 先按题干假设推导，再检查：结构体布局、填充字节、对齐和字节序假设是否写清楚。 编译器会为了成员对齐插入 padding，题干给出了常见对齐假设。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到跨 MCU 数据交换里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「offsetof宏」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到跨 MCU 数据交换里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到跨 MCU 数据交换里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「packed结构体」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到跨 MCU 数据交换里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 0,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到日志二进制格式解析里，重点看首次调用时对齐假设是否跨平台成立。",
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
    "question": "在协议帧头解析中看到下面这段和「位段可移植性」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到跨 MCU 数据交换里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到协议帧头解析里，重点看首次调用时大小端是否写清楚。",
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
    "question": "这段「共用体内存共享」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到DMA 完成标志检查里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 2,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到DMA 完成标志检查里，重点看首次调用时volatile 是否只解决可见性。",
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
    "question": "在协议帧头解析中看到下面这段和「共用体协议解析」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到跨 MCU 数据交换里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到Flash 参数结构保存里，重点看首次调用时大小端是否写清楚。",
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
    "question": "读完这段「枚举与状态机」代码，哪项判断正确？\nenum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;\n请把它放到跨 MCU 数据交换里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "raw 的值为 3，枚举常量可以显式指定取值",
      "BUSY 一定自动等于 1，不能显式赋值",
      "enum 变量只能保存 0 和 1",
      "enum 不能用于状态机代码"
    ],
    "answer": 0,
    "explanation": "枚举适合表达状态名和值的关系，显式赋值是合法的；状态机转移仍要由逻辑约束。 读这段代码时要盯住：结构体布局、填充字节、对齐和字节序假设是否写清楚。\n补测时把代码放到跨 MCU 数据交换里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体初始化」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到网络字节序转换里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到跨 MCU 数据交换里，重点看首次调用时大小端是否写清楚。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体指针访问」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到网络字节序转换里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 2,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到网络字节序转换里，重点看首次调用时大小端是否写清楚。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体浅拷贝」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到网络字节序转换里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到寄存器位域审查里，重点看首次调用时大小端是否写清楚。",
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
    "question": "按题干给定假设分析这段「结构体对齐」代码，哪项结果正确？\nstruct S {\n uint8_t a;\n uint32_t b;\n};\n请把它放到网络字节序转换里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "8，a 后面通常会有 3 字节填充，整体大小也按最大对齐补齐",
      "5，结构体大小一定等于所有成员大小之和",
      "4，因为结构体大小等于最大成员大小",
      "C 语言禁止结构体中出现填充字节"
    ],
    "answer": 0,
    "explanation": "结构体大小不是简单求和。 先按题干假设推导，再检查：结构体布局、填充字节、对齐和字节序假设是否写清楚。 编译器会为了成员对齐插入 padding，题干给出了常见对齐假设。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到网络字节序转换里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「offsetof宏」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到网络字节序转换里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到网络字节序转换里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「packed结构体」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到网络字节序转换里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 2,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到结构体数组序列化里，重点看首次调用时大小端是否写清楚。",
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
    "question": "在协议帧头解析中看到下面这段和「位段可移植性」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到网络字节序转换里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到升级包头校验里，重点看首次调用时大小端是否写清楚。",
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
    "question": "这段「共用体内存共享」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到UART 接收回调里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到UART 接收回调里，重点看首次调用时volatile 是否只解决可见性。",
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
    "question": "在协议帧头解析中看到下面这段和「共用体协议解析」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到网络字节序转换里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到日志二进制格式解析里，重点看首次调用时大小端是否写清楚。",
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
    "question": "读完这段「枚举与状态机」代码，哪项判断正确？\nenum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;\n请把它放到网络字节序转换里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "BUSY 一定自动等于 1，不能显式赋值",
      "enum 变量只能保存 0 和 1",
      "raw 的值为 3，枚举常量可以显式指定取值",
      "enum 不能用于状态机代码"
    ],
    "answer": 2,
    "explanation": "枚举适合表达状态名和值的关系，显式赋值是合法的；状态机转移仍要由逻辑约束。 读这段代码时要盯住：结构体布局、填充字节、对齐和字节序假设是否写清楚。\n补测时把代码放到网络字节序转换里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体初始化」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到寄存器位域审查里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到协议帧头解析里，重点看首次调用时memcpy 长度是否正好覆盖字段。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体指针访问」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到寄存器位域审查里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 0,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到Flash 参数结构保存里，重点看首次调用时memcpy 长度是否正好覆盖字段。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体浅拷贝」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到寄存器位域审查里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到跨 MCU 数据交换里，重点看首次调用时memcpy 长度是否正好覆盖字段。",
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
    "question": "按题干给定假设分析这段「结构体对齐」代码，哪项结果正确？\nstruct S {\n uint8_t a;\n uint32_t b;\n};\n请把它放到寄存器位域审查里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "5，结构体大小一定等于所有成员大小之和",
      "4，因为结构体大小等于最大成员大小",
      "8，a 后面通常会有 3 字节填充，整体大小也按最大对齐补齐",
      "C 语言禁止结构体中出现填充字节"
    ],
    "answer": 2,
    "explanation": "结构体大小不是简单求和。 先按题干假设推导，再检查：结构体布局、填充字节、对齐和字节序假设是否写清楚。 编译器会为了成员对齐插入 padding，题干给出了常见对齐假设。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到寄存器位域审查里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「offsetof宏」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到寄存器位域审查里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到寄存器位域审查里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「packed结构体」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到寄存器位域审查里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 0,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到网络字节序转换里，重点看首次调用时memcpy 长度是否正好覆盖字段。",
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
    "question": "在协议帧头解析中看到下面这段和「位段可移植性」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到寄存器位域审查里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到寄存器位域审查里，重点看首次调用时memcpy 长度是否正好覆盖字段。",
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
    "question": "这段「共用体内存共享」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到SysTick 计数里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 2,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到SysTick 计数里，重点看首次调用时volatile 是否只解决可见性。",
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
    "question": "在协议帧头解析中看到下面这段和「共用体协议解析」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到寄存器位域审查里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到结构体数组序列化里，重点看首次调用时memcpy 长度是否正好覆盖字段。",
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
    "question": "读完这段「枚举与状态机」代码，哪项判断正确？\nenum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;\n请把它放到寄存器位域审查里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "raw 的值为 3，枚举常量可以显式指定取值",
      "BUSY 一定自动等于 1，不能显式赋值",
      "enum 变量只能保存 0 和 1",
      "enum 不能用于状态机代码"
    ],
    "answer": 0,
    "explanation": "枚举适合表达状态名和值的关系，显式赋值是合法的；状态机转移仍要由逻辑约束。 读这段代码时要盯住：结构体布局、填充字节、对齐和字节序假设是否写清楚。\n补测时把代码放到寄存器位域审查里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体初始化」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到结构体数组序列化里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到升级包头校验里，重点看首次调用时memcpy 长度是否正好覆盖字段。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体指针访问」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到结构体数组序列化里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 2,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到日志二进制格式解析里，重点看首次调用时memcpy 长度是否正好覆盖字段。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体浅拷贝」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到结构体数组序列化里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到协议帧头解析里，重点看首次调用时union 当前有效成员是否明确。",
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
    "question": "按题干给定假设分析这段「结构体对齐」代码，哪项结果正确？\nstruct S {\n uint8_t a;\n uint32_t b;\n};\n请把它放到结构体数组序列化里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "8，a 后面通常会有 3 字节填充，整体大小也按最大对齐补齐",
      "5，结构体大小一定等于所有成员大小之和",
      "4，因为结构体大小等于最大成员大小",
      "C 语言禁止结构体中出现填充字节"
    ],
    "answer": 0,
    "explanation": "结构体大小不是简单求和。 先按题干假设推导，再检查：结构体布局、填充字节、对齐和字节序假设是否写清楚。 编译器会为了成员对齐插入 padding，题干给出了常见对齐假设。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到结构体数组序列化里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「offsetof宏」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到结构体数组序列化里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到结构体数组序列化里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「packed结构体」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到结构体数组序列化里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 2,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到Flash 参数结构保存里，重点看首次调用时union 当前有效成员是否明确。",
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
    "question": "在协议帧头解析中看到下面这段和「位段可移植性」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到结构体数组序列化里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到跨 MCU 数据交换里，重点看首次调用时union 当前有效成员是否明确。",
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
    "question": "这段「共用体内存共享」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到GPIO 输出寄存器修改里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到GPIO 输出寄存器修改里，重点看首次调用时volatile 是否只解决可见性。",
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
    "question": "在协议帧头解析中看到下面这段和「共用体协议解析」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到结构体数组序列化里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到网络字节序转换里，重点看首次调用时union 当前有效成员是否明确。",
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
    "question": "读完这段「枚举与状态机」代码，哪项判断正确？\nenum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;\n请把它放到结构体数组序列化里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "BUSY 一定自动等于 1，不能显式赋值",
      "enum 变量只能保存 0 和 1",
      "raw 的值为 3，枚举常量可以显式指定取值",
      "enum 不能用于状态机代码"
    ],
    "answer": 2,
    "explanation": "枚举适合表达状态名和值的关系，显式赋值是合法的；状态机转移仍要由逻辑约束。 读这段代码时要盯住：结构体布局、填充字节、对齐和字节序假设是否写清楚。\n补测时把代码放到结构体数组序列化里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体初始化」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到升级包头校验里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到寄存器位域审查里，重点看首次调用时union 当前有效成员是否明确。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体指针访问」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到升级包头校验里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 0,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到结构体数组序列化里，重点看首次调用时union 当前有效成员是否明确。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体浅拷贝」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到升级包头校验里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到升级包头校验里，重点看首次调用时union 当前有效成员是否明确。",
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
    "question": "按题干给定假设分析这段「结构体对齐」代码，哪项结果正确？\nstruct S {\n uint8_t a;\n uint32_t b;\n};\n请把它放到升级包头校验里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "5，结构体大小一定等于所有成员大小之和",
      "4，因为结构体大小等于最大成员大小",
      "8，a 后面通常会有 3 字节填充，整体大小也按最大对齐补齐",
      "C 语言禁止结构体中出现填充字节"
    ],
    "answer": 2,
    "explanation": "结构体大小不是简单求和。 先按题干假设推导，再检查：结构体布局、填充字节、对齐和字节序假设是否写清楚。 编译器会为了成员对齐插入 padding，题干给出了常见对齐假设。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到升级包头校验里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「offsetof宏」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到升级包头校验里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到升级包头校验里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「packed结构体」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到升级包头校验里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 0,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到日志二进制格式解析里，重点看首次调用时union 当前有效成员是否明确。",
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
    "question": "在协议帧头解析中看到下面这段和「位段可移植性」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到升级包头校验里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到协议帧头解析里，重点看首次调用时enum 底层取值是否被误当宽度。",
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
    "question": "这段「共用体内存共享」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到低功耗唤醒标志里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 2,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到低功耗唤醒标志里，重点看首次调用时volatile 是否只解决可见性。",
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
    "question": "在协议帧头解析中看到下面这段和「共用体协议解析」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到升级包头校验里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到Flash 参数结构保存里，重点看首次调用时enum 底层取值是否被误当宽度。",
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
    "question": "读完这段「枚举与状态机」代码，哪项判断正确？\nenum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;\n请把它放到升级包头校验里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "raw 的值为 3，枚举常量可以显式指定取值",
      "BUSY 一定自动等于 1，不能显式赋值",
      "enum 变量只能保存 0 和 1",
      "enum 不能用于状态机代码"
    ],
    "answer": 0,
    "explanation": "枚举适合表达状态名和值的关系，显式赋值是合法的；状态机转移仍要由逻辑约束。 读这段代码时要盯住：结构体布局、填充字节、对齐和字节序假设是否写清楚。\n补测时把代码放到升级包头校验里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体初始化」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到日志二进制格式解析里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到跨 MCU 数据交换里，重点看首次调用时enum 底层取值是否被误当宽度。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体指针访问」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到日志二进制格式解析里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 2,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到网络字节序转换里，重点看首次调用时enum 底层取值是否被误当宽度。",
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
    "question": "在协议帧头解析中看到下面这段和「结构体浅拷贝」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到日志二进制格式解析里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到寄存器位域审查里，重点看首次调用时enum 底层取值是否被误当宽度。",
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
    "question": "按题干给定假设分析这段「结构体对齐」代码，哪项结果正确？\nstruct S {\n uint8_t a;\n uint32_t b;\n};\n请把它放到日志二进制格式解析里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "8，a 后面通常会有 3 字节填充，整体大小也按最大对齐补齐",
      "5，结构体大小一定等于所有成员大小之和",
      "4，因为结构体大小等于最大成员大小",
      "C 语言禁止结构体中出现填充字节"
    ],
    "answer": 0,
    "explanation": "结构体大小不是简单求和。 先按题干假设推导，再检查：结构体布局、填充字节、对齐和字节序假设是否写清楚。 编译器会为了成员对齐插入 padding，题干给出了常见对齐假设。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到日志二进制格式解析里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「offsetof宏」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到日志二进制格式解析里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到日志二进制格式解析里，重点看首次调用时填充字节是否被当成有效字段。",
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
    "question": "在协议帧头解析中看到下面这段和「packed结构体」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到日志二进制格式解析里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 2,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到结构体数组序列化里，重点看首次调用时enum 底层取值是否被误当宽度。",
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
    "question": "在协议帧头解析中看到下面这段和「位段可移植性」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到日志二进制格式解析里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响"
    ],
    "answer": 3,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到升级包头校验里，重点看首次调用时enum 底层取值是否被误当宽度。",
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
    "question": "这段「共用体内存共享」代码还少一个关键保护，应该先补哪一步？\nvolatile uint16_t adc_value;\n\nuint16_t read_adc_snapshot(void) {\n return adc_value;\n}\n请把它放到设备忙等待循环里判断，尤其看首次调用时volatile 是否只解决可见性。",
    "options": [
      "在读取共享变量时使用临界区或其他同步机制，避免中断更新造成撕裂读",
      "删除 volatile，让编译器把读取优化成一次",
      "把返回类型改成 uint8_t，自动避免并发问题",
      "在函数末尾调用 free(&adc_value)"
    ],
    "answer": 0,
    "explanation": "volatile 只能保证每次读取发生，不能阻止 ISR 在多字节读取中间修改变量；正确选项补的是同步。 这段代码缺的不是语法，而是要补上：共享变量可见性、寄存器副作用和读改写是否需要额外的原子性保护。\n补测时把代码放到设备忙等待循环里，重点看首次调用时volatile 是否只解决可见性。",
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
    "question": "在协议帧头解析中看到下面这段和「共用体协议解析」有关的代码，最主要的风险是什么？\nstruct Header {\n uint8_t type;\n uint32_t len;\n};\n\nstruct Header h;\nmemcpy(&h, flash_addr, sizeof(h));\n请把它放到日志二进制格式解析里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "memcpy 会自动把外部字节序转换成本机字节序",
      "直接按结构体布局解析会受填充字节、对齐和字节序影响",
      "结构体成员在所有编译器上都紧密排列",
      "只要用了 uint32_t，未对齐访问一定不会出问题"
    ],
    "answer": 1,
    "explanation": "协议、Flash 记录和通信帧更适合按字节显式解析。 真正会出问题的是：结构体布局、填充字节、对齐和字节序假设是否写清楚。 memcpy 不会自动处理字节序、padding 或对齐问题。\n补测时把代码放到日志二进制格式解析里，重点看首次调用时enum 底层取值是否被误当宽度。",
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
    "question": "读完这段「枚举与状态机」代码，哪项判断正确？\nenum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;\n请把它放到日志二进制格式解析里判断，尤其看首次调用时填充字节是否被当成有效字段。",
    "options": [
      "BUSY 一定自动等于 1，不能显式赋值",
      "enum 变量只能保存 0 和 1",
      "raw 的值为 3，枚举常量可以显式指定取值",
      "enum 不能用于状态机代码"
    ],
    "answer": 2,
    "explanation": "枚举适合表达状态名和值的关系，显式赋值是合法的；状态机转移仍要由逻辑约束。 读这段代码时要盯住：结构体布局、填充字节、对齐和字节序假设是否写清楚。\n补测时把代码放到日志二进制格式解析里，重点看首次调用时填充字节是否被当成有效字段。",
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

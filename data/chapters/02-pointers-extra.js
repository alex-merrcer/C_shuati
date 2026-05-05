module.exports = [
  {
    "id": "c079",
    "chapter": "指针体系",
    "topic": "指针初始化",
    "difficulty": "基础",
    "question": "下面代码围绕「指针初始化」最主要的问题是什么？\n请重点从「指针初始化」的寄存器副作用角度判断（样例组 79）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针",
      "初始化",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "错误诊断"
    ],
    "knowledgeId": "kp_0014",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c080",
    "chapter": "指针体系",
    "topic": "空指针NULL",
    "difficulty": "进阶",
    "question": "下面代码缺少哪一步，最容易导致「空指针NULL」相关缺陷？\n请重点从「空指针NULL」的编译优化影响角度判断（样例组 80）。\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "options": [
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 0,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "NULL",
      "空指针",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0015",
    "type": "missing_step",
    "code": "uint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c081",
    "chapter": "指针体系",
    "topic": "野指针",
    "difficulty": "易错",
    "question": "下面代码围绕「野指针」最主要的问题是什么？\n请重点从「野指针」的资源受限 MCU角度判断（样例组 81）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "野指针",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0016",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c082",
    "chapter": "指针体系",
    "topic": "指针步长",
    "difficulty": "面试",
    "question": "阅读代码，关于「指针步长」的判断哪项正确？\n请重点从「指针步长」的面试追问角度判断（样例组 82）。\nint a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;",
    "options": [
      "p += 2 表示地址只增加 2 个字节",
      "p += 2 后指向 a[1]，x 的值为 2",
      "p += 2 后指向 a[2]，x 的值为 3",
      "数组名不能赋给指针变量，所以这段代码无法表达数组访问"
    ],
    "answer": 2,
    "explanation": "指针加整数按所指类型的元素为单位移动。这里 p 从 a[0] 移动到 a[2]，不是固定增加 2 字节。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "指针运算",
      "步长",
      "扩展题库",
      "代码相关题",
      "补漏",
      "代码阅读",
      "interview"
    ],
    "knowledgeId": "kp_0017",
    "type": "code_read",
    "code": "int a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c083",
    "chapter": "指针体系",
    "topic": "指针相减",
    "difficulty": "基础",
    "question": "下面代码围绕「指针相减」最主要的问题是什么？\n请重点从「指针相减」的调试复盘角度判断（样例组 83）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针相减",
      "数组",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码阅读",
      "错误诊断"
    ],
    "knowledgeId": "kp_0018",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c084",
    "chapter": "指针体系",
    "topic": "二级指针",
    "difficulty": "进阶",
    "question": "下面代码缺少哪一步，最容易导致「二级指针」相关缺陷？\n请重点从「二级指针」的量产固件稳定性角度判断（样例组 84）。\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "options": [
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 0,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "二级指针",
      "输出参数",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0019",
    "type": "missing_step",
    "code": "uint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c085",
    "chapter": "指针体系",
    "topic": "指针数组",
    "difficulty": "易错",
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，sizeof(buf) 更可能是多少？\n请重点从「指针数组」的初始化顺序角度判断（样例组 85）。\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "16，因为形参写了 buf[16]",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 1,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 同时要把“行指针”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针数组",
      "数组指针",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "行指针"
    ],
    "knowledgeId": "kp_0020",
    "type": "calculation",
    "code": "void clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c086",
    "chapter": "指针体系",
    "topic": "数组指针",
    "difficulty": "面试",
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，sizeof(buf) 更可能是多少？\n请重点从「数组指针」的边界条件角度判断（样例组 86）。\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 2,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 同时要把“行指针、自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "数组指针",
      "二维数组",
      "扩展题库",
      "代码相关题",
      "补漏",
      "行指针",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码计算"
    ],
    "knowledgeId": "kp_0021",
    "type": "calculation",
    "code": "void clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c087",
    "chapter": "指针体系",
    "topic": "void指针",
    "difficulty": "基础",
    "question": "下面代码围绕「void指针」最主要的问题是什么？\n请重点从「void指针」的失败路径角度判断（样例组 87）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "void指针",
      "通用接口",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0022",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c088",
    "chapter": "指针体系",
    "topic": "函数指针",
    "difficulty": "进阶",
    "question": "下面代码围绕「函数指针」最主要的问题是什么？\n请重点从「函数指针」的生命周期角度判断（样例组 88）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "函数指针",
      "回调",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0023",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c089",
    "chapter": "指针体系",
    "topic": "const指针组合",
    "difficulty": "易错",
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「const指针组合」的可移植性角度判断（样例组 89）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "const",
      "指针",
      "扩展题库",
      "代码相关题",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0024",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c090",
    "chapter": "指针体系",
    "topic": "volatile指针",
    "difficulty": "面试",
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「volatile指针」的中断安全角度判断（样例组 90）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 2,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "volatile",
      "寄存器",
      "扩展题库",
      "代码相关题",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0025",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c091",
    "chapter": "指针体系",
    "topic": "寄存器地址指针",
    "difficulty": "基础",
    "question": "下面代码围绕「寄存器地址指针」最主要的问题是什么？\n请重点从「寄存器地址指针」的长期运行稳定性角度判断（样例组 91）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "寄存器",
      "指针",
      "扩展题库",
      "代码相关题",
      "interview",
      "错误诊断"
    ],
    "knowledgeId": "kp_0026",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c092",
    "chapter": "指针体系",
    "topic": "函数返回局部变量地址",
    "difficulty": "进阶",
    "question": "下面代码围绕「函数返回局部变量地址」最主要的问题是什么？\n请重点从「函数返回局部变量地址」的接口契约角度判断（样例组 92）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "悬空指针",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码阅读"
    ],
    "knowledgeId": "kp_0027",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c093",
    "chapter": "指针体系",
    "topic": "指针类型匹配",
    "difficulty": "易错",
    "question": "下面代码围绕「指针类型匹配」最主要的问题是什么？\n请重点从「指针类型匹配」的单元测试覆盖角度判断（样例组 93）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "指针类型",
      "别名",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0028",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c094",
    "chapter": "指针体系",
    "topic": "指针初始化",
    "difficulty": "面试",
    "question": "下面代码围绕「指针初始化」最主要的问题是什么？\n请重点从「指针初始化」的代码评审角度判断（样例组 94）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针",
      "初始化",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "错误诊断"
    ],
    "knowledgeId": "kp_0014",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c095",
    "chapter": "指针体系",
    "topic": "空指针NULL",
    "difficulty": "基础",
    "question": "下面代码缺少哪一步，最容易导致「空指针NULL」相关缺陷？\n请重点从「空指针NULL」的内存破坏定位角度判断（样例组 95）。\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效"
    ],
    "answer": 3,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "NULL",
      "空指针",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0015",
    "type": "missing_step",
    "code": "uint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c096",
    "chapter": "指针体系",
    "topic": "野指针",
    "difficulty": "进阶",
    "question": "下面代码围绕「野指针」最主要的问题是什么？\n请重点从「野指针」的寄存器副作用角度判断（样例组 96）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "野指针",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0016",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c097",
    "chapter": "指针体系",
    "topic": "指针步长",
    "difficulty": "易错",
    "question": "阅读代码，关于「指针步长」的判断哪项正确？\n请重点从「指针步长」的编译优化影响角度判断（样例组 0）。\nint a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;",
    "options": [
      "p += 2 表示地址只增加 2 个字节",
      "p += 2 后指向 a[2]，x 的值为 3",
      "p += 2 后指向 a[1]，x 的值为 2",
      "数组名不能赋给指针变量，所以这段代码无法表达数组访问"
    ],
    "answer": 1,
    "explanation": "指针加整数按所指类型的元素为单位移动。这里 p 从 a[0] 移动到 a[2]，不是固定增加 2 字节。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "指针运算",
      "步长",
      "扩展题库",
      "代码相关题",
      "补漏",
      "代码阅读"
    ],
    "knowledgeId": "kp_0017",
    "type": "code_read",
    "code": "int a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c098",
    "chapter": "指针体系",
    "topic": "指针相减",
    "difficulty": "面试",
    "question": "下面代码围绕「指针相减」最主要的问题是什么？\n请重点从「指针相减」的资源受限 MCU角度判断（样例组 1）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针相减",
      "数组",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码阅读",
      "错误诊断"
    ],
    "knowledgeId": "kp_0018",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c099",
    "chapter": "指针体系",
    "topic": "二级指针",
    "difficulty": "基础",
    "question": "下面代码缺少哪一步，最容易导致「二级指针」相关缺陷？\n请重点从「二级指针」的面试追问角度判断（样例组 2）。\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效"
    ],
    "answer": 3,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "二级指针",
      "输出参数",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏",
      "interview",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0019",
    "type": "missing_step",
    "code": "uint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c100",
    "chapter": "指针体系",
    "topic": "指针数组",
    "difficulty": "进阶",
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，sizeof(buf) 更可能是多少？\n请重点从「指针数组」的调试复盘角度判断（样例组 3）。\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 0,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 同时要把“行指针”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针数组",
      "数组指针",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "行指针"
    ],
    "knowledgeId": "kp_0020",
    "type": "calculation",
    "code": "void clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c101",
    "chapter": "指针体系",
    "topic": "数组指针",
    "difficulty": "易错",
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，sizeof(buf) 更可能是多少？\n请重点从「数组指针」的量产固件稳定性角度判断（样例组 4）。\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "16，因为形参写了 buf[16]",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 1,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 同时要把“行指针、自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "数组指针",
      "二维数组",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "补漏",
      "行指针",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0021",
    "type": "calculation",
    "code": "void clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c102",
    "chapter": "指针体系",
    "topic": "void指针",
    "difficulty": "面试",
    "question": "下面代码围绕「void指针」最主要的问题是什么？\n请重点从「void指针」的初始化顺序角度判断（样例组 5）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "void指针",
      "通用接口",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0022",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c103",
    "chapter": "指针体系",
    "topic": "函数指针",
    "difficulty": "基础",
    "question": "下面代码围绕「函数指针」最主要的问题是什么？\n请重点从「函数指针」的边界条件角度判断（样例组 6）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "函数指针",
      "回调",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "错误诊断"
    ],
    "knowledgeId": "kp_0023",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c104",
    "chapter": "指针体系",
    "topic": "const指针组合",
    "difficulty": "进阶",
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「const指针组合」的失败路径角度判断（样例组 7）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 0,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "const",
      "指针",
      "扩展题库",
      "代码相关题",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0024",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c105",
    "chapter": "指针体系",
    "topic": "volatile指针",
    "difficulty": "易错",
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「volatile指针」的生命周期角度判断（样例组 8）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "volatile",
      "寄存器",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0025",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c106",
    "chapter": "指针体系",
    "topic": "寄存器地址指针",
    "difficulty": "面试",
    "question": "下面代码围绕「寄存器地址指针」最主要的问题是什么？\n请重点从「寄存器地址指针」的可移植性角度判断（样例组 9）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "寄存器",
      "指针",
      "扩展题库",
      "代码相关题",
      "interview",
      "错误诊断"
    ],
    "knowledgeId": "kp_0026",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c107",
    "chapter": "指针体系",
    "topic": "函数返回局部变量地址",
    "difficulty": "基础",
    "question": "下面代码围绕「函数返回局部变量地址」最主要的问题是什么？\n请重点从「函数返回局部变量地址」的中断安全角度判断（样例组 10）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "悬空指针",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码阅读"
    ],
    "knowledgeId": "kp_0027",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c108",
    "chapter": "指针体系",
    "topic": "指针类型匹配",
    "difficulty": "进阶",
    "question": "下面代码围绕「指针类型匹配」最主要的问题是什么？\n请重点从「指针类型匹配」的长期运行稳定性角度判断（样例组 11）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "指针类型",
      "别名",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0028",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c109",
    "chapter": "指针体系",
    "topic": "指针初始化",
    "difficulty": "易错",
    "question": "下面代码围绕「指针初始化」最主要的问题是什么？\n请重点从「指针初始化」的接口契约角度判断（样例组 12）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针",
      "初始化",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "错误诊断"
    ],
    "knowledgeId": "kp_0014",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c110",
    "chapter": "指针体系",
    "topic": "空指针NULL",
    "difficulty": "面试",
    "question": "下面代码缺少哪一步，最容易导致「空指针NULL」相关缺陷？\n请重点从「空指针NULL」的单元测试覆盖角度判断（样例组 13）。\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 2,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "NULL",
      "空指针",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0015",
    "type": "missing_step",
    "code": "uint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c111",
    "chapter": "指针体系",
    "topic": "野指针",
    "difficulty": "基础",
    "question": "下面代码围绕「野指针」最主要的问题是什么？\n请重点从「野指针」的代码评审角度判断（样例组 14）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "野指针",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0016",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c112",
    "chapter": "指针体系",
    "topic": "指针步长",
    "difficulty": "进阶",
    "question": "阅读代码，关于「指针步长」的判断哪项正确？\n请重点从「指针步长」的内存破坏定位角度判断（样例组 15）。\nint a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;",
    "options": [
      "p += 2 后指向 a[2]，x 的值为 3",
      "p += 2 表示地址只增加 2 个字节",
      "p += 2 后指向 a[1]，x 的值为 2",
      "数组名不能赋给指针变量，所以这段代码无法表达数组访问"
    ],
    "answer": 0,
    "explanation": "指针加整数按所指类型的元素为单位移动。这里 p 从 a[0] 移动到 a[2]，不是固定增加 2 字节。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针运算",
      "步长",
      "扩展题库",
      "代码相关题",
      "补漏",
      "代码阅读",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0017",
    "type": "code_read",
    "code": "int a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c113",
    "chapter": "指针体系",
    "topic": "指针相减",
    "difficulty": "易错",
    "question": "下面代码围绕「指针相减」最主要的问题是什么？\n请重点从「指针相减」的寄存器副作用角度判断（样例组 16）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针相减",
      "数组",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码阅读",
      "错误诊断"
    ],
    "knowledgeId": "kp_0018",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c114",
    "chapter": "指针体系",
    "topic": "二级指针",
    "difficulty": "面试",
    "question": "下面代码缺少哪一步，最容易导致「二级指针」相关缺陷？\n请重点从「二级指针」的编译优化影响角度判断（样例组 17）。\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 2,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "二级指针",
      "输出参数",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0019",
    "type": "missing_step",
    "code": "uint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c115",
    "chapter": "指针体系",
    "topic": "指针数组",
    "difficulty": "基础",
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，sizeof(buf) 更可能是多少？\n请重点从「指针数组」的资源受限 MCU角度判断（样例组 18）。\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小"
    ],
    "answer": 3,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 同时要把“行指针”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针数组",
      "数组指针",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "行指针"
    ],
    "knowledgeId": "kp_0020",
    "type": "calculation",
    "code": "void clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c116",
    "chapter": "指针体系",
    "topic": "数组指针",
    "difficulty": "进阶",
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，sizeof(buf) 更可能是多少？\n请重点从「数组指针」的面试追问角度判断（样例组 19）。\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 0,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 同时要把“行指针、自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "数组指针",
      "二维数组",
      "扩展题库",
      "代码相关题",
      "补漏",
      "interview",
      "行指针",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码计算"
    ],
    "knowledgeId": "kp_0021",
    "type": "calculation",
    "code": "void clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c117",
    "chapter": "指针体系",
    "topic": "void指针",
    "difficulty": "易错",
    "question": "下面代码围绕「void指针」最主要的问题是什么？\n请重点从「void指针」的调试复盘角度判断（样例组 20）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "void指针",
      "通用接口",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0022",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c118",
    "chapter": "指针体系",
    "topic": "函数指针",
    "difficulty": "面试",
    "question": "下面代码围绕「函数指针」最主要的问题是什么？\n请重点从「函数指针」的量产固件稳定性角度判断（样例组 21）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "函数指针",
      "回调",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0023",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c119",
    "chapter": "指针体系",
    "topic": "const指针组合",
    "difficulty": "基础",
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「const指针组合」的初始化顺序角度判断（样例组 22）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问"
    ],
    "answer": 3,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "const",
      "指针",
      "扩展题库",
      "代码相关题",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0024",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c120",
    "chapter": "指针体系",
    "topic": "volatile指针",
    "difficulty": "进阶",
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「volatile指针」的边界条件角度判断（样例组 23）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 0,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "volatile",
      "寄存器",
      "扩展题库",
      "代码相关题",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0025",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c121",
    "chapter": "指针体系",
    "topic": "寄存器地址指针",
    "difficulty": "易错",
    "question": "下面代码围绕「寄存器地址指针」最主要的问题是什么？\n请重点从「寄存器地址指针」的失败路径角度判断（样例组 24）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "寄存器",
      "指针",
      "扩展题库",
      "代码相关题",
      "interview",
      "错误诊断"
    ],
    "knowledgeId": "kp_0026",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c122",
    "chapter": "指针体系",
    "topic": "函数返回局部变量地址",
    "difficulty": "面试",
    "question": "下面代码围绕「函数返回局部变量地址」最主要的问题是什么？\n请重点从「函数返回局部变量地址」的生命周期角度判断（样例组 25）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "悬空指针",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码阅读"
    ],
    "knowledgeId": "kp_0027",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c123",
    "chapter": "指针体系",
    "topic": "指针类型匹配",
    "difficulty": "基础",
    "question": "下面代码围绕「指针类型匹配」最主要的问题是什么？\n请重点从「指针类型匹配」的可移植性角度判断（样例组 26）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "指针类型",
      "别名",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0028",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c124",
    "chapter": "指针体系",
    "topic": "指针初始化",
    "difficulty": "进阶",
    "question": "下面代码围绕「指针初始化」最主要的问题是什么？\n请重点从「指针初始化」的中断安全角度判断（样例组 27）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针",
      "初始化",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "错误诊断"
    ],
    "knowledgeId": "kp_0014",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c125",
    "chapter": "指针体系",
    "topic": "空指针NULL",
    "difficulty": "易错",
    "question": "下面代码缺少哪一步，最容易导致「空指针NULL」相关缺陷？\n请重点从「空指针NULL」的长期运行稳定性角度判断（样例组 28）。\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 1,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "NULL",
      "空指针",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0015",
    "type": "missing_step",
    "code": "uint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c126",
    "chapter": "指针体系",
    "topic": "野指针",
    "difficulty": "面试",
    "question": "下面代码围绕「野指针」最主要的问题是什么？\n请重点从「野指针」的接口契约角度判断（样例组 29）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "野指针",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0016",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c127",
    "chapter": "指针体系",
    "topic": "指针步长",
    "difficulty": "基础",
    "question": "阅读代码，关于「指针步长」的判断哪项正确？\n请重点从「指针步长」的单元测试覆盖角度判断（样例组 30）。\nint a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;",
    "options": [
      "p += 2 表示地址只增加 2 个字节",
      "p += 2 后指向 a[1]，x 的值为 2",
      "数组名不能赋给指针变量，所以这段代码无法表达数组访问",
      "p += 2 后指向 a[2]，x 的值为 3"
    ],
    "answer": 3,
    "explanation": "指针加整数按所指类型的元素为单位移动。这里 p 从 a[0] 移动到 a[2]，不是固定增加 2 字节。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "指针运算",
      "步长",
      "扩展题库",
      "代码相关题",
      "补漏",
      "代码阅读"
    ],
    "knowledgeId": "kp_0017",
    "type": "code_read",
    "code": "int a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c128",
    "chapter": "指针体系",
    "topic": "指针相减",
    "difficulty": "进阶",
    "question": "下面代码围绕「指针相减」最主要的问题是什么？\n请重点从「指针相减」的代码评审角度判断（样例组 31）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针相减",
      "数组",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码阅读",
      "错误诊断"
    ],
    "knowledgeId": "kp_0018",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c129",
    "chapter": "指针体系",
    "topic": "二级指针",
    "difficulty": "易错",
    "question": "下面代码缺少哪一步，最容易导致「二级指针」相关缺陷？\n请重点从「二级指针」的内存破坏定位角度判断（样例组 32）。\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 1,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "二级指针",
      "输出参数",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0019",
    "type": "missing_step",
    "code": "uint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c130",
    "chapter": "指针体系",
    "topic": "指针数组",
    "difficulty": "面试",
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，sizeof(buf) 更可能是多少？\n请重点从「指针数组」的寄存器副作用角度判断（样例组 33）。\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 2,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 同时要把“行指针”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针数组",
      "数组指针",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "行指针"
    ],
    "knowledgeId": "kp_0020",
    "type": "calculation",
    "code": "void clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c131",
    "chapter": "指针体系",
    "topic": "数组指针",
    "difficulty": "基础",
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，sizeof(buf) 更可能是多少？\n请重点从「数组指针」的编译优化影响角度判断（样例组 34）。\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小"
    ],
    "answer": 3,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 同时要把“行指针、自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "数组指针",
      "二维数组",
      "扩展题库",
      "代码相关题",
      "补漏",
      "行指针",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码计算"
    ],
    "knowledgeId": "kp_0021",
    "type": "calculation",
    "code": "void clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c132",
    "chapter": "指针体系",
    "topic": "void指针",
    "difficulty": "进阶",
    "question": "下面代码围绕「void指针」最主要的问题是什么？\n请重点从「void指针」的资源受限 MCU角度判断（样例组 35）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "void指针",
      "通用接口",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0022",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c133",
    "chapter": "指针体系",
    "topic": "函数指针",
    "difficulty": "易错",
    "question": "下面代码围绕「函数指针」最主要的问题是什么？\n请重点从「函数指针」的面试追问角度判断（样例组 36）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "函数指针",
      "回调",
      "扩展题库",
      "代码相关题",
      "补漏",
      "interview",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "错误诊断"
    ],
    "knowledgeId": "kp_0023",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c134",
    "chapter": "指针体系",
    "topic": "const指针组合",
    "difficulty": "面试",
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「const指针组合」的调试复盘角度判断（样例组 37）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 2,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "const",
      "指针",
      "扩展题库",
      "代码相关题",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0024",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c135",
    "chapter": "指针体系",
    "topic": "volatile指针",
    "difficulty": "基础",
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「volatile指针」的量产固件稳定性角度判断（样例组 38）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问"
    ],
    "answer": 3,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "volatile",
      "寄存器",
      "扩展题库",
      "代码相关题",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0025",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c136",
    "chapter": "指针体系",
    "topic": "寄存器地址指针",
    "difficulty": "进阶",
    "question": "下面代码围绕「寄存器地址指针」最主要的问题是什么？\n请重点从「寄存器地址指针」的初始化顺序角度判断（样例组 39）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "寄存器",
      "指针",
      "扩展题库",
      "代码相关题",
      "interview",
      "错误诊断"
    ],
    "knowledgeId": "kp_0026",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c137",
    "chapter": "指针体系",
    "topic": "函数返回局部变量地址",
    "difficulty": "易错",
    "question": "下面代码围绕「函数返回局部变量地址」最主要的问题是什么？\n请重点从「函数返回局部变量地址」的边界条件角度判断（样例组 40）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "悬空指针",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码阅读"
    ],
    "knowledgeId": "kp_0027",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c138",
    "chapter": "指针体系",
    "topic": "指针类型匹配",
    "difficulty": "面试",
    "question": "下面代码围绕「指针类型匹配」最主要的问题是什么？\n请重点从「指针类型匹配」的失败路径角度判断（样例组 41）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "指针类型",
      "别名",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0028",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c139",
    "chapter": "指针体系",
    "topic": "指针初始化",
    "difficulty": "基础",
    "question": "下面代码围绕「指针初始化」最主要的问题是什么？\n请重点从「指针初始化」的生命周期角度判断（样例组 42）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针",
      "初始化",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0014",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c140",
    "chapter": "指针体系",
    "topic": "空指针NULL",
    "difficulty": "进阶",
    "question": "下面代码缺少哪一步，最容易导致「空指针NULL」相关缺陷？\n请重点从「空指针NULL」的可移植性角度判断（样例组 43）。\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "options": [
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 0,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "NULL",
      "空指针",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0015",
    "type": "missing_step",
    "code": "uint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c141",
    "chapter": "指针体系",
    "topic": "野指针",
    "difficulty": "易错",
    "question": "下面代码围绕「野指针」最主要的问题是什么？\n请重点从「野指针」的中断安全角度判断（样例组 44）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "野指针",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0016",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c142",
    "chapter": "指针体系",
    "topic": "指针步长",
    "difficulty": "面试",
    "question": "阅读代码，关于「指针步长」的判断哪项正确？\n请重点从「指针步长」的长期运行稳定性角度判断（样例组 45）。\nint a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;",
    "options": [
      "p += 2 表示地址只增加 2 个字节",
      "p += 2 后指向 a[1]，x 的值为 2",
      "p += 2 后指向 a[2]，x 的值为 3",
      "数组名不能赋给指针变量，所以这段代码无法表达数组访问"
    ],
    "answer": 2,
    "explanation": "指针加整数按所指类型的元素为单位移动。这里 p 从 a[0] 移动到 a[2]，不是固定增加 2 字节。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "指针运算",
      "步长",
      "扩展题库",
      "代码相关题",
      "补漏",
      "代码阅读"
    ],
    "knowledgeId": "kp_0017",
    "type": "code_read",
    "code": "int a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c143",
    "chapter": "指针体系",
    "topic": "指针相减",
    "difficulty": "基础",
    "question": "下面代码围绕「指针相减」最主要的问题是什么？\n请重点从「指针相减」的接口契约角度判断（样例组 46）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针相减",
      "数组",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码阅读",
      "错误诊断"
    ],
    "knowledgeId": "kp_0018",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c144",
    "chapter": "指针体系",
    "topic": "二级指针",
    "difficulty": "进阶",
    "question": "下面代码缺少哪一步，最容易导致「二级指针」相关缺陷？\n请重点从「二级指针」的单元测试覆盖角度判断（样例组 47）。\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "options": [
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 0,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "二级指针",
      "输出参数",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0019",
    "type": "missing_step",
    "code": "uint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c145",
    "chapter": "指针体系",
    "topic": "指针数组",
    "difficulty": "易错",
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，sizeof(buf) 更可能是多少？\n请重点从「指针数组」的代码评审角度判断（样例组 48）。\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "16，因为形参写了 buf[16]",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 1,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 同时要把“行指针”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针数组",
      "数组指针",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "行指针"
    ],
    "knowledgeId": "kp_0020",
    "type": "calculation",
    "code": "void clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c146",
    "chapter": "指针体系",
    "topic": "数组指针",
    "difficulty": "面试",
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，sizeof(buf) 更可能是多少？\n请重点从「数组指针」的内存破坏定位角度判断（样例组 49）。\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 2,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 同时要把“行指针、自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "数组指针",
      "二维数组",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "行指针",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码计算"
    ],
    "knowledgeId": "kp_0021",
    "type": "calculation",
    "code": "void clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c147",
    "chapter": "指针体系",
    "topic": "void指针",
    "difficulty": "基础",
    "question": "下面代码围绕「void指针」最主要的问题是什么？\n请重点从「void指针」的寄存器副作用角度判断（样例组 50）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "void指针",
      "通用接口",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0022",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c148",
    "chapter": "指针体系",
    "topic": "函数指针",
    "difficulty": "进阶",
    "question": "下面代码围绕「函数指针」最主要的问题是什么？\n请重点从「函数指针」的编译优化影响角度判断（样例组 51）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "函数指针",
      "回调",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "错误诊断"
    ],
    "knowledgeId": "kp_0023",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c149",
    "chapter": "指针体系",
    "topic": "const指针组合",
    "difficulty": "易错",
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「const指针组合」的资源受限 MCU角度判断（样例组 52）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "const",
      "指针",
      "扩展题库",
      "代码相关题",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0024",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c150",
    "chapter": "指针体系",
    "topic": "volatile指针",
    "difficulty": "面试",
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「volatile指针」的面试追问角度判断（样例组 53）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 2,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "volatile",
      "寄存器",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "interview"
    ],
    "knowledgeId": "kp_0025",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c151",
    "chapter": "指针体系",
    "topic": "寄存器地址指针",
    "difficulty": "基础",
    "question": "下面代码围绕「寄存器地址指针」最主要的问题是什么？\n请重点从「寄存器地址指针」的调试复盘角度判断（样例组 54）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "寄存器",
      "指针",
      "扩展题库",
      "代码相关题",
      "interview",
      "错误诊断"
    ],
    "knowledgeId": "kp_0026",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c152",
    "chapter": "指针体系",
    "topic": "函数返回局部变量地址",
    "difficulty": "进阶",
    "question": "下面代码围绕「函数返回局部变量地址」最主要的问题是什么？\n请重点从「函数返回局部变量地址」的量产固件稳定性角度判断（样例组 55）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "悬空指针",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码阅读"
    ],
    "knowledgeId": "kp_0027",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c153",
    "chapter": "指针体系",
    "topic": "指针类型匹配",
    "difficulty": "易错",
    "question": "下面代码围绕「指针类型匹配」最主要的问题是什么？\n请重点从「指针类型匹配」的初始化顺序角度判断（样例组 56）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "指针类型",
      "别名",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "错误诊断"
    ],
    "knowledgeId": "kp_0028",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c154",
    "chapter": "指针体系",
    "topic": "指针初始化",
    "difficulty": "面试",
    "question": "下面代码围绕「指针初始化」最主要的问题是什么？\n请重点从「指针初始化」的边界条件角度判断（样例组 57）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针",
      "初始化",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "错误诊断"
    ],
    "knowledgeId": "kp_0014",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c155",
    "chapter": "指针体系",
    "topic": "空指针NULL",
    "difficulty": "基础",
    "question": "下面代码缺少哪一步，最容易导致「空指针NULL」相关缺陷？\n请重点从「空指针NULL」的失败路径角度判断（样例组 58）。\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效"
    ],
    "answer": 3,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "NULL",
      "空指针",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0015",
    "type": "missing_step",
    "code": "uint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c156",
    "chapter": "指针体系",
    "topic": "野指针",
    "difficulty": "进阶",
    "question": "下面代码围绕「野指针」最主要的问题是什么？\n请重点从「野指针」的生命周期角度判断（样例组 59）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "野指针",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0016",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c157",
    "chapter": "指针体系",
    "topic": "指针步长",
    "difficulty": "易错",
    "question": "阅读代码，关于「指针步长」的判断哪项正确？\n请重点从「指针步长」的可移植性角度判断（样例组 60）。\nint a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;",
    "options": [
      "p += 2 表示地址只增加 2 个字节",
      "p += 2 后指向 a[2]，x 的值为 3",
      "p += 2 后指向 a[1]，x 的值为 2",
      "数组名不能赋给指针变量，所以这段代码无法表达数组访问"
    ],
    "answer": 1,
    "explanation": "指针加整数按所指类型的元素为单位移动。这里 p 从 a[0] 移动到 a[2]，不是固定增加 2 字节。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "指针运算",
      "步长",
      "扩展题库",
      "代码相关题",
      "补漏",
      "代码阅读"
    ],
    "knowledgeId": "kp_0017",
    "type": "code_read",
    "code": "int a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c158",
    "chapter": "指针体系",
    "topic": "指针相减",
    "difficulty": "面试",
    "question": "下面代码围绕「指针相减」最主要的问题是什么？\n请重点从「指针相减」的中断安全角度判断（样例组 61）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "指针相减",
      "数组",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "代码阅读"
    ],
    "knowledgeId": "kp_0018",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c159",
    "chapter": "指针体系",
    "topic": "二级指针",
    "difficulty": "基础",
    "question": "下面代码缺少哪一步，最容易导致「二级指针」相关缺陷？\n请重点从「二级指针」的长期运行稳定性角度判断（样例组 62）。\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效"
    ],
    "answer": 3,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "二级指针",
      "输出参数",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0019",
    "type": "missing_step",
    "code": "uint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c160",
    "chapter": "指针体系",
    "topic": "指针数组",
    "difficulty": "进阶",
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，sizeof(buf) 更可能是多少？\n请重点从「指针数组」的接口契约角度判断（样例组 63）。\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 0,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 同时要把“行指针”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针数组",
      "数组指针",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "行指针"
    ],
    "knowledgeId": "kp_0020",
    "type": "calculation",
    "code": "void clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c161",
    "chapter": "指针体系",
    "topic": "数组指针",
    "difficulty": "易错",
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，sizeof(buf) 更可能是多少？\n请重点从「数组指针」的单元测试覆盖角度判断（样例组 64）。\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "16，因为形参写了 buf[16]",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 1,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 同时要把“行指针、自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "数组指针",
      "二维数组",
      "扩展题库",
      "代码相关题",
      "补漏",
      "行指针",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码计算"
    ],
    "knowledgeId": "kp_0021",
    "type": "calculation",
    "code": "void clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c162",
    "chapter": "指针体系",
    "topic": "void指针",
    "difficulty": "面试",
    "question": "下面代码围绕「void指针」最主要的问题是什么？\n请重点从「void指针」的代码评审角度判断（样例组 65）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "void指针",
      "通用接口",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0022",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c163",
    "chapter": "指针体系",
    "topic": "函数指针",
    "difficulty": "基础",
    "question": "下面代码围绕「函数指针」最主要的问题是什么？\n请重点从「函数指针」的内存破坏定位角度判断（样例组 66）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "函数指针",
      "回调",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0023",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c164",
    "chapter": "指针体系",
    "topic": "const指针组合",
    "difficulty": "进阶",
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「const指针组合」的寄存器副作用角度判断（样例组 67）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 0,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "const",
      "指针",
      "扩展题库",
      "代码相关题",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0024",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c165",
    "chapter": "指针体系",
    "topic": "volatile指针",
    "difficulty": "易错",
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「volatile指针」的编译优化影响角度判断（样例组 68）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "volatile",
      "寄存器",
      "扩展题库",
      "代码相关题",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0025",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c166",
    "chapter": "指针体系",
    "topic": "寄存器地址指针",
    "difficulty": "面试",
    "question": "下面代码围绕「寄存器地址指针」最主要的问题是什么？\n请重点从「寄存器地址指针」的资源受限 MCU角度判断（样例组 69）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "寄存器",
      "指针",
      "扩展题库",
      "代码相关题",
      "interview",
      "错误诊断"
    ],
    "knowledgeId": "kp_0026",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c167",
    "chapter": "指针体系",
    "topic": "函数返回局部变量地址",
    "difficulty": "基础",
    "question": "下面代码围绕「函数返回局部变量地址」最主要的问题是什么？\n请重点从「函数返回局部变量地址」的面试追问角度判断（样例组 70）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "悬空指针",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "interview",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码阅读"
    ],
    "knowledgeId": "kp_0027",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c168",
    "chapter": "指针体系",
    "topic": "指针类型匹配",
    "difficulty": "进阶",
    "question": "下面代码围绕「指针类型匹配」最主要的问题是什么？\n请重点从「指针类型匹配」的调试复盘角度判断（样例组 71）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "指针类型",
      "别名",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0028",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c169",
    "chapter": "指针体系",
    "topic": "指针初始化",
    "difficulty": "易错",
    "question": "下面代码围绕「指针初始化」最主要的问题是什么？\n请重点从「指针初始化」的量产固件稳定性角度判断（样例组 72）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针",
      "初始化",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "错误诊断"
    ],
    "knowledgeId": "kp_0014",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c170",
    "chapter": "指针体系",
    "topic": "空指针NULL",
    "difficulty": "面试",
    "question": "下面代码缺少哪一步，最容易导致「空指针NULL」相关缺陷？\n请重点从「空指针NULL」的初始化顺序角度判断（样例组 73）。\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 2,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "NULL",
      "空指针",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0015",
    "type": "missing_step",
    "code": "uint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c171",
    "chapter": "指针体系",
    "topic": "野指针",
    "difficulty": "基础",
    "question": "下面代码围绕「野指针」最主要的问题是什么？\n请重点从「野指针」的边界条件角度判断（样例组 74）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "野指针",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0016",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c172",
    "chapter": "指针体系",
    "topic": "指针步长",
    "difficulty": "进阶",
    "question": "阅读代码，关于「指针步长」的判断哪项正确？\n请重点从「指针步长」的失败路径角度判断（样例组 75）。\nint a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;",
    "options": [
      "p += 2 后指向 a[2]，x 的值为 3",
      "p += 2 表示地址只增加 2 个字节",
      "p += 2 后指向 a[1]，x 的值为 2",
      "数组名不能赋给指针变量，所以这段代码无法表达数组访问"
    ],
    "answer": 0,
    "explanation": "指针加整数按所指类型的元素为单位移动。这里 p 从 a[0] 移动到 a[2]，不是固定增加 2 字节。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "指针运算",
      "步长",
      "扩展题库",
      "代码相关题",
      "补漏",
      "代码阅读"
    ],
    "knowledgeId": "kp_0017",
    "type": "code_read",
    "code": "int a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c173",
    "chapter": "指针体系",
    "topic": "指针相减",
    "difficulty": "易错",
    "question": "下面代码围绕「指针相减」最主要的问题是什么？\n请重点从「指针相减」的生命周期角度判断（样例组 76）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针相减",
      "数组",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码阅读"
    ],
    "knowledgeId": "kp_0018",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c174",
    "chapter": "指针体系",
    "topic": "二级指针",
    "difficulty": "面试",
    "question": "下面代码缺少哪一步，最容易导致「二级指针」相关缺陷？\n请重点从「二级指针」的可移植性角度判断（样例组 77）。\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 2,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "二级指针",
      "输出参数",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0019",
    "type": "missing_step",
    "code": "uint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c175",
    "chapter": "指针体系",
    "topic": "指针数组",
    "difficulty": "基础",
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，sizeof(buf) 更可能是多少？\n请重点从「指针数组」的中断安全角度判断（样例组 78）。\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小"
    ],
    "answer": 3,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 同时要把“行指针”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针数组",
      "数组指针",
      "扩展题库",
      "代码相关题",
      "补漏",
      "行指针",
      "代码计算"
    ],
    "knowledgeId": "kp_0020",
    "type": "calculation",
    "code": "void clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c176",
    "chapter": "指针体系",
    "topic": "数组指针",
    "difficulty": "进阶",
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，sizeof(buf) 更可能是多少？\n请重点从「数组指针」的长期运行稳定性角度判断（样例组 79）。\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 0,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 同时要把“行指针、自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "数组指针",
      "二维数组",
      "扩展题库",
      "代码相关题",
      "补漏",
      "行指针",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码计算"
    ],
    "knowledgeId": "kp_0021",
    "type": "calculation",
    "code": "void clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c177",
    "chapter": "指针体系",
    "topic": "void指针",
    "difficulty": "易错",
    "question": "下面代码围绕「void指针」最主要的问题是什么？\n请重点从「void指针」的接口契约角度判断（样例组 80）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "void指针",
      "通用接口",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0022",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c178",
    "chapter": "指针体系",
    "topic": "函数指针",
    "difficulty": "面试",
    "question": "下面代码围绕「函数指针」最主要的问题是什么？\n请重点从「函数指针」的单元测试覆盖角度判断（样例组 81）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "函数指针",
      "回调",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "错误诊断"
    ],
    "knowledgeId": "kp_0023",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c179",
    "chapter": "指针体系",
    "topic": "const指针组合",
    "difficulty": "基础",
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「const指针组合」的代码评审角度判断（样例组 82）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问"
    ],
    "answer": 3,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "const",
      "指针",
      "扩展题库",
      "代码相关题",
      "补漏",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0024",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c180",
    "chapter": "指针体系",
    "topic": "volatile指针",
    "difficulty": "进阶",
    "question": "关于这段寄存器访问代码，哪项判断最准确？\n请重点从「volatile指针」的内存破坏定位角度判断（样例组 83）。\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 0,
    "explanation": "这题区分 const 和 volatile 的位置。volatile 不保证原子性，const 也不表示硬件值不变。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "volatile",
      "寄存器",
      "扩展题库",
      "代码相关题",
      "嵌入式场景",
      "补漏"
    ],
    "knowledgeId": "kp_0025",
    "type": "scenario_code",
    "code": "volatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c181",
    "chapter": "指针体系",
    "topic": "寄存器地址指针",
    "difficulty": "易错",
    "question": "下面代码围绕「寄存器地址指针」最主要的问题是什么？\n请重点从「寄存器地址指针」的寄存器副作用角度判断（样例组 84）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "寄存器",
      "指针",
      "扩展题库",
      "代码相关题",
      "interview",
      "错误诊断"
    ],
    "knowledgeId": "kp_0026",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c182",
    "chapter": "指针体系",
    "topic": "函数返回局部变量地址",
    "difficulty": "面试",
    "question": "下面代码围绕「函数返回局部变量地址」最主要的问题是什么？\n请重点从「函数返回局部变量地址」的编译优化影响角度判断（样例组 85）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "悬空指针",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码阅读"
    ],
    "knowledgeId": "kp_0027",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c183",
    "chapter": "指针体系",
    "topic": "指针类型匹配",
    "difficulty": "基础",
    "question": "下面代码围绕「指针类型匹配」最主要的问题是什么？\n请重点从「指针类型匹配」的资源受限 MCU角度判断（样例组 86）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "指针类型",
      "别名",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0028",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c184",
    "chapter": "指针体系",
    "topic": "指针初始化",
    "difficulty": "进阶",
    "question": "下面代码围绕「指针初始化」最主要的问题是什么？\n请重点从「指针初始化」的面试追问角度判断（样例组 87）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针",
      "初始化",
      "扩展题库",
      "代码相关题",
      "补漏",
      "interview",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "错误诊断"
    ],
    "knowledgeId": "kp_0014",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c185",
    "chapter": "指针体系",
    "topic": "空指针NULL",
    "difficulty": "易错",
    "question": "下面代码缺少哪一步，最容易导致「空指针NULL」相关缺陷？\n请重点从「空指针NULL」的调试复盘角度判断（样例组 88）。\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 1,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "NULL",
      "空指针",
      "扩展题库",
      "代码相关题",
      "代码阅读",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0015",
    "type": "missing_step",
    "code": "uint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c186",
    "chapter": "指针体系",
    "topic": "野指针",
    "difficulty": "面试",
    "question": "下面代码围绕「野指针」最主要的问题是什么？\n请重点从「野指针」的量产固件稳定性角度判断（样例组 89）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "野指针",
      "生命周期",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0016",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c187",
    "chapter": "指针体系",
    "topic": "指针步长",
    "difficulty": "基础",
    "question": "阅读代码，关于「指针步长」的判断哪项正确？\n请重点从「指针步长」的初始化顺序角度判断（样例组 90）。\nint a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;",
    "options": [
      "p += 2 表示地址只增加 2 个字节",
      "p += 2 后指向 a[1]，x 的值为 2",
      "数组名不能赋给指针变量，所以这段代码无法表达数组访问",
      "p += 2 后指向 a[2]，x 的值为 3"
    ],
    "answer": 3,
    "explanation": "指针加整数按所指类型的元素为单位移动。这里 p 从 a[0] 移动到 a[2]，不是固定增加 2 字节。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "指针运算",
      "步长",
      "扩展题库",
      "代码相关题",
      "补漏",
      "代码阅读"
    ],
    "knowledgeId": "kp_0017",
    "type": "code_read",
    "code": "int a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c188",
    "chapter": "指针体系",
    "topic": "指针相减",
    "difficulty": "进阶",
    "question": "下面代码围绕「指针相减」最主要的问题是什么？\n请重点从「指针相减」的边界条件角度判断（样例组 91）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "指针相减",
      "数组",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "代码阅读"
    ],
    "knowledgeId": "kp_0018",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c189",
    "chapter": "指针体系",
    "topic": "二级指针",
    "difficulty": "易错",
    "question": "下面代码缺少哪一步，最容易导致「二级指针」相关缺陷？\n请重点从「二级指针」的失败路径角度判断（样例组 92）。\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 1,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "二级指针",
      "输出参数",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0019",
    "type": "missing_step",
    "code": "uint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c190",
    "chapter": "指针体系",
    "topic": "指针数组",
    "difficulty": "面试",
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，sizeof(buf) 更可能是多少？\n请重点从「指针数组」的生命周期角度判断（样例组 93）。\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 2,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 同时要把“行指针、自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "指针数组",
      "数组指针",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "错误诊断",
      "行指针",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0020",
    "type": "calculation",
    "code": "void clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c191",
    "chapter": "指针体系",
    "topic": "数组指针",
    "difficulty": "基础",
    "question": "在常见 32 位 MCU、指针大小为 4 字节的假设下，sizeof(buf) 更可能是多少？\n请重点从「数组指针」的可移植性角度判断（样例组 94）。\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小"
    ],
    "answer": 3,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 同时要把“行指针、自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "数组指针",
      "二维数组",
      "扩展题库",
      "代码相关题",
      "补漏",
      "行指针",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "代码计算"
    ],
    "knowledgeId": "kp_0021",
    "type": "calculation",
    "code": "void clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c192",
    "chapter": "指针体系",
    "topic": "void指针",
    "difficulty": "进阶",
    "question": "下面代码围绕「void指针」最主要的问题是什么？\n请重点从「void指针」的中断安全角度判断（样例组 95）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "void指针",
      "通用接口",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0022",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c193",
    "chapter": "指针体系",
    "topic": "函数指针",
    "difficulty": "易错",
    "question": "下面代码围绕「函数指针」最主要的问题是什么？\n请重点从「函数指针」的长期运行稳定性角度判断（样例组 96）。\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "函数指针",
      "回调",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "错误诊断"
    ],
    "knowledgeId": "kp_0023",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  }
]

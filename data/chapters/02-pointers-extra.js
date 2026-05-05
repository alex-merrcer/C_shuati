module.exports = [
  {
    "id": "c079",
    "chapter": "指针体系",
    "topic": "指针初始化",
    "difficulty": "基础",
    "question": "在驱动初始化失败路径中看到下面这段和「指针初始化」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。",
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
    "question": "这段「空指针NULL」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "options": [
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 0,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「野指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到回调函数入参检查里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "读完这段「指针步长」代码，哪项判断正确？\nint a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;",
    "options": [
      "p += 2 表示地址只增加 2 个字节",
      "p += 2 后指向 a[1]，x 的值为 2",
      "p += 2 后指向 a[2]，x 的值为 3",
      "数组名不能赋给指针变量，所以这段代码无法表达数组访问"
    ],
    "answer": 2,
    "explanation": "指针加整数按所指类型的元素为单位移动。 读这段代码时要盯住：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 这里 p 从 a[0] 移动到 a[2]，不是固定增加 2 字节。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针相减」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到DMA 缓冲区获取里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "这段「二级指针」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "options": [
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 0,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。\n补测时把代码放到回调函数入参检查里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "按题干给定假设分析这段「指针数组」代码，哪项结果正确？\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "16，因为形参写了 buf[16]",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 1,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 先按题干假设推导，再检查：隐式类型转换、运算符结合顺序和题干给定的平台假设是否一致。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。",
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
    "question": "按题干给定假设分析这段「数组指针」代码，哪项结果正确？\nvoid clear_buf(uint8_t buf[16]) {\n    memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);",
    "options": [
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 2,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 先按题干假设推导，再检查：隐式类型转换、运算符结合顺序和题干给定的平台假设是否一致。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到配置参数解析里，重点看首次调用时空输入和 NULL 指针。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「void指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到链表遍历入口里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「函数指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到设备句柄打开失败里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "驱动初始化失败路径里的这段「const指针组合」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：const 修饰的是指针本身还是指向对象，调用方是否仍可能改到底层数据。 volatile 不保证原子性，const 也不表示硬件值不变。",
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
    "question": "驱动初始化失败路径里的这段「volatile指针」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 2,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 volatile 不保证原子性，const 也不表示硬件值不变。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「寄存器地址指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到命令解析返回对象里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「函数返回局部变量地址」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到传感器数据指针更新里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针类型匹配」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到协议解析输出参数里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针初始化」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到回调函数入参检查里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到驱动初始化失败路径里，重点看首次调用时NULL 路径是否提前返回。",
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
    "question": "这段「空指针NULL」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);\n请把它放到回调函数入参检查里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效"
    ],
    "answer": 3,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。\n补测时把代码放到DMA 缓冲区获取里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「野指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到回调函数入参检查里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到回调函数入参检查里，重点看首次调用时NULL 路径是否提前返回。",
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
    "question": "读完这段「指针步长」代码，哪项判断正确？\nint a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;\n请把它放到回调函数入参检查里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p += 2 表示地址只增加 2 个字节",
      "p += 2 后指向 a[2]，x 的值为 3",
      "p += 2 后指向 a[1]，x 的值为 2",
      "数组名不能赋给指针变量，所以这段代码无法表达数组访问"
    ],
    "answer": 1,
    "explanation": "指针加整数按所指类型的元素为单位移动。 读这段代码时要盯住：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 这里 p 从 a[0] 移动到 a[2]，不是固定增加 2 字节。\n补测时把代码放到回调函数入参检查里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针相减」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到回调函数入参检查里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到DMA 缓冲区获取里，重点看首次调用时NULL 路径是否提前返回。",
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
    "question": "这段「二级指针」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);\n请把它放到回调函数入参检查里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效"
    ],
    "answer": 3,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。\n补测时把代码放到链表遍历入口里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "按题干给定假设分析这段「指针数组」代码，哪项结果正确？\nvoid clear_buf(uint8_t buf[16]) {\n memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);\n请把它放到配置参数解析里判断，尤其看首次调用时空输入和 NULL 指针。",
    "options": [
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 0,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 先按题干假设推导，再检查：隐式类型转换、运算符结合顺序和题干给定的平台假设是否一致。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到Bootloader 跳转前检查里，重点看首次调用时空输入和 NULL 指针。",
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
    "question": "按题干给定假设分析这段「数组指针」代码，哪项结果正确？\nvoid clear_buf(uint8_t buf[16]) {\n memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);\n请把它放到配置参数解析里判断，尤其看首次调用时空输入和 NULL 指针。",
    "options": [
      "16，因为形参写了 buf[16]",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 1,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 先按题干假设推导，再检查：隐式类型转换、运算符结合顺序和题干给定的平台假设是否一致。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到Flash 写入后的回读校验里，重点看首次调用时空输入和 NULL 指针。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「void指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到回调函数入参检查里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到链表遍历入口里，重点看首次调用时NULL 路径是否提前返回。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「函数指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到回调函数入参检查里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到设备句柄打开失败里，重点看首次调用时NULL 路径是否提前返回。",
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
    "question": "驱动初始化失败路径里的这段「const指针组合」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到回调函数入参检查里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 0,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：const 修饰的是指针本身还是指向对象，调用方是否仍可能改到底层数据。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到回调函数入参检查里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "驱动初始化失败路径里的这段「volatile指针」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到回调函数入参检查里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到回调函数入参检查里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「寄存器地址指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到回调函数入参检查里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到命令解析返回对象里，重点看首次调用时NULL 路径是否提前返回。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「函数返回局部变量地址」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到回调函数入参检查里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到传感器数据指针更新里，重点看首次调用时NULL 路径是否提前返回。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针类型匹配」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到回调函数入参检查里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到协议解析输出参数里，重点看首次调用时NULL 路径是否提前返回。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针初始化」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到DMA 缓冲区获取里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到驱动初始化失败路径里，重点看首次调用时局部对象地址是否逃逸。",
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
    "question": "这段「空指针NULL」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);\n请把它放到DMA 缓冲区获取里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 2,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。\n补测时把代码放到设备句柄打开失败里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「野指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到DMA 缓冲区获取里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到回调函数入参检查里，重点看首次调用时局部对象地址是否逃逸。",
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
    "question": "读完这段「指针步长」代码，哪项判断正确？\nint a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;\n请把它放到DMA 缓冲区获取里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p += 2 后指向 a[2]，x 的值为 3",
      "p += 2 表示地址只增加 2 个字节",
      "p += 2 后指向 a[1]，x 的值为 2",
      "数组名不能赋给指针变量，所以这段代码无法表达数组访问"
    ],
    "answer": 0,
    "explanation": "指针加整数按所指类型的元素为单位移动。 读这段代码时要盯住：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 这里 p 从 a[0] 移动到 a[2]，不是固定增加 2 字节。\n补测时把代码放到DMA 缓冲区获取里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针相减」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到DMA 缓冲区获取里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到DMA 缓冲区获取里，重点看首次调用时局部对象地址是否逃逸。",
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
    "question": "这段「二级指针」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);\n请把它放到DMA 缓冲区获取里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 2,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。\n补测时把代码放到命令解析返回对象里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "按题干给定假设分析这段「指针数组」代码，哪项结果正确？\nvoid clear_buf(uint8_t buf[16]) {\n memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);\n请把它放到Bootloader 跳转前检查里判断，尤其看首次调用时空输入和 NULL 指针。",
    "options": [
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小"
    ],
    "answer": 3,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 先按题干假设推导，再检查：隐式类型转换、运算符结合顺序和题干给定的平台假设是否一致。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到DMA 半传输回调里，重点看首次调用时空输入和 NULL 指针。",
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
    "question": "按题干给定假设分析这段「数组指针」代码，哪项结果正确？\nvoid clear_buf(uint8_t buf[16]) {\n memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);\n请把它放到Bootloader 跳转前检查里判断，尤其看首次调用时空输入和 NULL 指针。",
    "options": [
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 0,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 先按题干假设推导，再检查：隐式类型转换、运算符结合顺序和题干给定的平台假设是否一致。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到传感器采样任务里，重点看首次调用时空输入和 NULL 指针。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「void指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到DMA 缓冲区获取里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到链表遍历入口里，重点看首次调用时局部对象地址是否逃逸。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「函数指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到DMA 缓冲区获取里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到设备句柄打开失败里，重点看首次调用时局部对象地址是否逃逸。",
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
    "question": "驱动初始化失败路径里的这段「const指针组合」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到DMA 缓冲区获取里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问"
    ],
    "answer": 3,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：const 修饰的是指针本身还是指向对象，调用方是否仍可能改到底层数据。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到DMA 缓冲区获取里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "驱动初始化失败路径里的这段「volatile指针」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到DMA 缓冲区获取里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 0,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到DMA 缓冲区获取里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「寄存器地址指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到DMA 缓冲区获取里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到命令解析返回对象里，重点看首次调用时局部对象地址是否逃逸。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「函数返回局部变量地址」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到DMA 缓冲区获取里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到传感器数据指针更新里，重点看首次调用时局部对象地址是否逃逸。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针类型匹配」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到DMA 缓冲区获取里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到协议解析输出参数里，重点看首次调用时局部对象地址是否逃逸。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针初始化」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到链表遍历入口里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到驱动初始化失败路径里，重点看首次调用时释放后的地址是否还被用。",
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
    "question": "这段「空指针NULL」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);\n请把它放到链表遍历入口里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 1,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。\n补测时把代码放到传感器数据指针更新里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「野指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到链表遍历入口里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到回调函数入参检查里，重点看首次调用时释放后的地址是否还被用。",
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
    "question": "读完这段「指针步长」代码，哪项判断正确？\nint a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;\n请把它放到链表遍历入口里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p += 2 表示地址只增加 2 个字节",
      "p += 2 后指向 a[1]，x 的值为 2",
      "数组名不能赋给指针变量，所以这段代码无法表达数组访问",
      "p += 2 后指向 a[2]，x 的值为 3"
    ],
    "answer": 3,
    "explanation": "指针加整数按所指类型的元素为单位移动。 读这段代码时要盯住：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 这里 p 从 a[0] 移动到 a[2]，不是固定增加 2 字节。\n补测时把代码放到链表遍历入口里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针相减」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到链表遍历入口里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到DMA 缓冲区获取里，重点看首次调用时释放后的地址是否还被用。",
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
    "question": "这段「二级指针」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);\n请把它放到链表遍历入口里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 1,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。\n补测时把代码放到协议解析输出参数里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "按题干给定假设分析这段「指针数组」代码，哪项结果正确？\nvoid clear_buf(uint8_t buf[16]) {\n memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);\n请把它放到Flash 写入后的回读校验里判断，尤其看首次调用时空输入和 NULL 指针。",
    "options": [
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 2,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 先按题干假设推导，再检查：隐式类型转换、运算符结合顺序和题干给定的平台假设是否一致。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到环形缓冲区入队路径里，重点看首次调用时空输入和 NULL 指针。",
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
    "question": "按题干给定假设分析这段「数组指针」代码，哪项结果正确？\nvoid clear_buf(uint8_t buf[16]) {\n memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);\n请把它放到Flash 写入后的回读校验里判断，尤其看首次调用时空输入和 NULL 指针。",
    "options": [
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小"
    ],
    "answer": 3,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 先按题干假设推导，再检查：隐式类型转换、运算符结合顺序和题干给定的平台假设是否一致。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到链表节点删除函数里，重点看首次调用时空输入和 NULL 指针。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「void指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到链表遍历入口里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到链表遍历入口里，重点看首次调用时释放后的地址是否还被用。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「函数指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到链表遍历入口里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到设备句柄打开失败里，重点看首次调用时释放后的地址是否还被用。",
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
    "question": "驱动初始化失败路径里的这段「const指针组合」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到链表遍历入口里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 2,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：const 修饰的是指针本身还是指向对象，调用方是否仍可能改到底层数据。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到链表遍历入口里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "驱动初始化失败路径里的这段「volatile指针」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到链表遍历入口里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问"
    ],
    "answer": 3,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到链表遍历入口里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「寄存器地址指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到链表遍历入口里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到命令解析返回对象里，重点看首次调用时释放后的地址是否还被用。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「函数返回局部变量地址」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到链表遍历入口里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到传感器数据指针更新里，重点看首次调用时释放后的地址是否还被用。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针类型匹配」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到链表遍历入口里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到协议解析输出参数里，重点看首次调用时释放后的地址是否还被用。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针初始化」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到设备句柄打开失败里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到驱动初始化失败路径里，重点看首次调用时输出参数是否检查为空。",
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
    "question": "这段「空指针NULL」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);\n请把它放到设备句柄打开失败里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 0,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。\n补测时把代码放到驱动初始化失败路径里，重点看首次调用时NULL 路径是否提前返回。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「野指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到设备句柄打开失败里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到回调函数入参检查里，重点看首次调用时输出参数是否检查为空。",
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
    "question": "读完这段「指针步长」代码，哪项判断正确？\nint a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;\n请把它放到设备句柄打开失败里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p += 2 表示地址只增加 2 个字节",
      "p += 2 后指向 a[1]，x 的值为 2",
      "p += 2 后指向 a[2]，x 的值为 3",
      "数组名不能赋给指针变量，所以这段代码无法表达数组访问"
    ],
    "answer": 2,
    "explanation": "指针加整数按所指类型的元素为单位移动。 读这段代码时要盯住：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 这里 p 从 a[0] 移动到 a[2]，不是固定增加 2 字节。\n补测时把代码放到设备句柄打开失败里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针相减」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到设备句柄打开失败里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到DMA 缓冲区获取里，重点看首次调用时输出参数是否检查为空。",
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
    "question": "这段「二级指针」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);\n请把它放到设备句柄打开失败里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 0,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。\n补测时把代码放到回调函数入参检查里，重点看首次调用时NULL 路径是否提前返回。",
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
    "question": "按题干给定假设分析这段「指针数组」代码，哪项结果正确？\nvoid clear_buf(uint8_t buf[16]) {\n memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);\n请把它放到DMA 半传输回调里判断，尤其看首次调用时空输入和 NULL 指针。",
    "options": [
      "16，因为形参写了 buf[16]",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 1,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 先按题干假设推导，再检查：隐式类型转换、运算符结合顺序和题干给定的平台假设是否一致。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到协议帧长度校验里，重点看首次调用时空输入和 NULL 指针。",
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
    "question": "按题干给定假设分析这段「数组指针」代码，哪项结果正确？\nvoid clear_buf(uint8_t buf[16]) {\n memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);\n请把它放到DMA 半传输回调里判断，尤其看首次调用时空输入和 NULL 指针。",
    "options": [
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 2,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 先按题干假设推导，再检查：隐式类型转换、运算符结合顺序和题干给定的平台假设是否一致。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到寄存器状态位清除里，重点看首次调用时空输入和 NULL 指针。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「void指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到设备句柄打开失败里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到链表遍历入口里，重点看首次调用时输出参数是否检查为空。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「函数指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到设备句柄打开失败里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到设备句柄打开失败里，重点看首次调用时输出参数是否检查为空。",
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
    "question": "驱动初始化失败路径里的这段「const指针组合」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到设备句柄打开失败里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：const 修饰的是指针本身还是指向对象，调用方是否仍可能改到底层数据。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到设备句柄打开失败里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "驱动初始化失败路径里的这段「volatile指针」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到设备句柄打开失败里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 2,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到设备句柄打开失败里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「寄存器地址指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到设备句柄打开失败里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到命令解析返回对象里，重点看首次调用时输出参数是否检查为空。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「函数返回局部变量地址」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到设备句柄打开失败里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到传感器数据指针更新里，重点看首次调用时输出参数是否检查为空。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针类型匹配」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到设备句柄打开失败里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到协议解析输出参数里，重点看首次调用时输出参数是否检查为空。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针初始化」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到命令解析返回对象里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到驱动初始化失败路径里，重点看首次调用时多级指针是否少解一层。",
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
    "question": "这段「空指针NULL」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);\n请把它放到命令解析返回对象里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效"
    ],
    "answer": 3,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。\n补测时把代码放到DMA 缓冲区获取里，重点看首次调用时NULL 路径是否提前返回。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「野指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到命令解析返回对象里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到回调函数入参检查里，重点看首次调用时多级指针是否少解一层。",
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
    "question": "读完这段「指针步长」代码，哪项判断正确？\nint a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;\n请把它放到命令解析返回对象里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p += 2 表示地址只增加 2 个字节",
      "p += 2 后指向 a[2]，x 的值为 3",
      "p += 2 后指向 a[1]，x 的值为 2",
      "数组名不能赋给指针变量，所以这段代码无法表达数组访问"
    ],
    "answer": 1,
    "explanation": "指针加整数按所指类型的元素为单位移动。 读这段代码时要盯住：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 这里 p 从 a[0] 移动到 a[2]，不是固定增加 2 字节。\n补测时把代码放到命令解析返回对象里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针相减」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到命令解析返回对象里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到DMA 缓冲区获取里，重点看首次调用时多级指针是否少解一层。",
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
    "question": "这段「二级指针」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);\n请把它放到命令解析返回对象里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效"
    ],
    "answer": 3,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。\n补测时把代码放到链表遍历入口里，重点看首次调用时NULL 路径是否提前返回。",
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
    "question": "按题干给定假设分析这段「指针数组」代码，哪项结果正确？\nvoid clear_buf(uint8_t buf[16]) {\n memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);\n请把它放到传感器采样任务里判断，尤其看首次调用时空输入和 NULL 指针。",
    "options": [
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 0,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 先按题干假设推导，再检查：隐式类型转换、运算符结合顺序和题干给定的平台假设是否一致。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到命令行参数复制里，重点看首次调用时空输入和 NULL 指针。",
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
    "question": "按题干给定假设分析这段「数组指针」代码，哪项结果正确？\nvoid clear_buf(uint8_t buf[16]) {\n memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);\n请把它放到传感器采样任务里判断，尤其看首次调用时空输入和 NULL 指针。",
    "options": [
      "16，因为形参写了 buf[16]",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 1,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 先按题干假设推导，再检查：隐式类型转换、运算符结合顺序和题干给定的平台假设是否一致。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到RTOS 任务异常退出里，重点看首次调用时空输入和 NULL 指针。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「void指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到命令解析返回对象里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到链表遍历入口里，重点看首次调用时多级指针是否少解一层。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「函数指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到命令解析返回对象里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到设备句柄打开失败里，重点看首次调用时多级指针是否少解一层。",
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
    "question": "驱动初始化失败路径里的这段「const指针组合」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到命令解析返回对象里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 0,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：const 修饰的是指针本身还是指向对象，调用方是否仍可能改到底层数据。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到命令解析返回对象里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "驱动初始化失败路径里的这段「volatile指针」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到命令解析返回对象里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 1,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到命令解析返回对象里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「寄存器地址指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到命令解析返回对象里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到命令解析返回对象里，重点看首次调用时多级指针是否少解一层。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「函数返回局部变量地址」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到命令解析返回对象里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到传感器数据指针更新里，重点看首次调用时多级指针是否少解一层。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针类型匹配」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到命令解析返回对象里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到协议解析输出参数里，重点看首次调用时多级指针是否少解一层。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针初始化」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到传感器数据指针更新里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到驱动初始化失败路径里，重点看首次调用时数组名和指针是否混淆。",
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
    "question": "这段「空指针NULL」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);\n请把它放到传感器数据指针更新里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 2,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。\n补测时把代码放到设备句柄打开失败里，重点看首次调用时NULL 路径是否提前返回。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「野指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到传感器数据指针更新里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到回调函数入参检查里，重点看首次调用时数组名和指针是否混淆。",
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
    "question": "读完这段「指针步长」代码，哪项判断正确？\nint a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;\n请把它放到传感器数据指针更新里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p += 2 后指向 a[2]，x 的值为 3",
      "p += 2 表示地址只增加 2 个字节",
      "p += 2 后指向 a[1]，x 的值为 2",
      "数组名不能赋给指针变量，所以这段代码无法表达数组访问"
    ],
    "answer": 0,
    "explanation": "指针加整数按所指类型的元素为单位移动。 读这段代码时要盯住：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 这里 p 从 a[0] 移动到 a[2]，不是固定增加 2 字节。\n补测时把代码放到传感器数据指针更新里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针相减」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到传感器数据指针更新里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到DMA 缓冲区获取里，重点看首次调用时数组名和指针是否混淆。",
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
    "question": "这段「二级指针」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);\n请把它放到传感器数据指针更新里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 2,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。\n补测时把代码放到命令解析返回对象里，重点看首次调用时NULL 路径是否提前返回。",
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
    "question": "按题干给定假设分析这段「指针数组」代码，哪项结果正确？\nvoid clear_buf(uint8_t buf[16]) {\n memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);\n请把它放到环形缓冲区入队路径里判断，尤其看首次调用时空输入和 NULL 指针。",
    "options": [
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小"
    ],
    "answer": 3,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 先按题干假设推导，再检查：隐式类型转换、运算符结合顺序和题干给定的平台假设是否一致。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到单元测试失败现场里，重点看首次调用时空输入和 NULL 指针。",
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
    "question": "按题干给定假设分析这段「数组指针」代码，哪项结果正确？\nvoid clear_buf(uint8_t buf[16]) {\n memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);\n请把它放到环形缓冲区入队路径里判断，尤其看首次调用时空输入和 NULL 指针。",
    "options": [
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 0,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 先按题干假设推导，再检查：隐式类型转换、运算符结合顺序和题干给定的平台假设是否一致。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到固件升级状态机里，重点看首次调用时空输入和 NULL 指针。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「void指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到传感器数据指针更新里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到链表遍历入口里，重点看首次调用时数组名和指针是否混淆。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「函数指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到传感器数据指针更新里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到设备句柄打开失败里，重点看首次调用时数组名和指针是否混淆。",
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
    "question": "驱动初始化失败路径里的这段「const指针组合」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到传感器数据指针更新里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义",
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问"
    ],
    "answer": 3,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：const 修饰的是指针本身还是指向对象，调用方是否仍可能改到底层数据。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到传感器数据指针更新里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "驱动初始化失败路径里的这段「volatile指针」代码，哪项判断最稳妥？\nvolatile uint32_t * const GPIO_ODR = (volatile uint32_t *)0x48000014u;\n*GPIO_ODR |= (1u << 5);\n请把它放到传感器数据指针更新里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "volatile 修饰被访问对象，const 修饰指针变量本身，适合表达固定寄存器地址访问",
      "const 表示寄存器值永远不会变化",
      "volatile 可以保证这次读改写是原子的",
      "去掉 volatile 不会影响硬件寄存器访问语义"
    ],
    "answer": 0,
    "explanation": "这题区分 const 和 volatile 的位置。 放到嵌入式现场看，关键是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 volatile 不保证原子性，const 也不表示硬件值不变。\n补测时把代码放到传感器数据指针更新里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「寄存器地址指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到传感器数据指针更新里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到命令解析返回对象里，重点看首次调用时数组名和指针是否混淆。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「函数返回局部变量地址」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到传感器数据指针更新里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到传感器数据指针更新里，重点看首次调用时数组名和指针是否混淆。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针类型匹配」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到传感器数据指针更新里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为"
    ],
    "answer": 3,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到协议解析输出参数里，重点看首次调用时数组名和指针是否混淆。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针初始化」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到协议解析输出参数里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到驱动初始化失败路径里，重点看首次调用时失败路径是否仍然解引用。",
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
    "question": "这段「空指针NULL」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);\n请把它放到协议解析输出参数里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 1,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。\n补测时把代码放到传感器数据指针更新里，重点看首次调用时NULL 路径是否提前返回。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「野指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到协议解析输出参数里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到回调函数入参检查里，重点看首次调用时失败路径是否仍然解引用。",
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
    "question": "读完这段「指针步长」代码，哪项判断正确？\nint a[4] = {1, 2, 3, 4};\nint *p = a;\np += 2;\nint x = *p;\n请把它放到协议解析输出参数里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p += 2 表示地址只增加 2 个字节",
      "p += 2 后指向 a[1]，x 的值为 2",
      "数组名不能赋给指针变量，所以这段代码无法表达数组访问",
      "p += 2 后指向 a[2]，x 的值为 3"
    ],
    "answer": 3,
    "explanation": "指针加整数按所指类型的元素为单位移动。 读这段代码时要盯住：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 这里 p 从 a[0] 移动到 a[2]，不是固定增加 2 字节。\n补测时把代码放到协议解析输出参数里，重点看首次调用时指针是否先指向合法对象。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「指针相减」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到协议解析输出参数里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到DMA 缓冲区获取里，重点看首次调用时失败路径是否仍然解引用。",
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
    "question": "这段「二级指针」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);\n请把它放到协议解析输出参数里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量"
    ],
    "answer": 1,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。\n补测时把代码放到协议解析输出参数里，重点看首次调用时NULL 路径是否提前返回。",
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
    "question": "按题干给定假设分析这段「指针数组」代码，哪项结果正确？\nvoid clear_buf(uint8_t buf[16]) {\n memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);\n请把它放到链表节点删除函数里判断，尤其看首次调用时空输入和 NULL 指针。",
    "options": [
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小",
      "无法编译，因为数组不能作为函数参数"
    ],
    "answer": 2,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 先按题干假设推导，再检查：隐式类型转换、运算符结合顺序和题干给定的平台假设是否一致。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到低功耗唤醒后的初始化里，重点看首次调用时空输入和 NULL 指针。",
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
    "question": "按题干给定假设分析这段「数组指针」代码，哪项结果正确？\nvoid clear_buf(uint8_t buf[16]) {\n memset(buf, 0, sizeof(buf));\n}\n\nuint8_t data[16];\nclear_buf(data);\n请把它放到链表节点删除函数里判断，尤其看首次调用时空输入和 NULL 指针。",
    "options": [
      "16，因为形参写了 buf[16]",
      "1，因为 uint8_t 是 1 字节",
      "无法编译，因为数组不能作为函数参数",
      "4，因为形参数组会调整为指针，sizeof(buf) 得到指针大小"
    ],
    "answer": 3,
    "explanation": "函数形参中的数组声明会调整为指针，sizeof(buf) 不是调用者数组容量；正确接口应额外传入长度。 先按题干假设推导，再检查：隐式类型转换、运算符结合顺序和题干给定的平台假设是否一致。 计算题要先固定题干给出的位宽、对齐、指针大小或整数类型假设，再按 C 语言规则逐步推导，不能把某个平台的一次输出当作标准结论。\n补测时把代码放到中断和主循环共享状态里，重点看首次调用时空输入和 NULL 指针。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「void指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到协议解析输出参数里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到链表遍历入口里，重点看首次调用时失败路径是否仍然解引用。",
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
    "question": "在驱动初始化失败路径中看到下面这段和「函数指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到协议解析输出参数里判断，尤其看首次调用时指针是否先指向合法对象。",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 1,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到设备句柄打开失败里，重点看首次调用时失败路径是否仍然解引用。",
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

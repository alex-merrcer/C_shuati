module.exports = [
  {
    "id": "c554",
    "chapter": "内存与存储区",
    "topic": "text段",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「text段」的内存破坏定位角度判断（样例组 69）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "text",
      "段",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0101",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c555",
    "chapter": "内存与存储区",
    "topic": "rodata段",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「rodata段」的寄存器副作用角度判断（样例组 70）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "rodata",
      "只读",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0102",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c556",
    "chapter": "内存与存储区",
    "topic": "data段",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「data段」的编译优化影响角度判断（样例组 71）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "data段",
      "启动",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0103",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c557",
    "chapter": "内存与存储区",
    "topic": "bss段",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「bss段」的资源受限 MCU角度判断（样例组 72）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "bss",
      "启动",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0104",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c558",
    "chapter": "内存与存储区",
    "topic": "栈帧",
    "difficulty": "基础",
    "question": "下面链表代码的主要问题是什么？\n请重点从「栈帧」的面试追问角度判断（样例组 73）。\nvoid delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 2,
    "explanation": "链表删除要关注指针更新顺序和所有权。正确选项指出释放后使用；free 不会自动维护链表链接。 同时要把“自动存储期、静态存储期、局部变量分配、push操作、pop操作、删除头节点”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "栈",
      "栈帧",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "push操作",
      "pop操作",
      "删除头节点"
    ],
    "knowledgeId": "kp_0105",
    "type": "bug_fix",
    "code": "void delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c559",
    "chapter": "内存与存储区",
    "topic": "栈溢出",
    "difficulty": "进阶",
    "question": "下面链表代码的主要问题是什么？\n请重点从「栈溢出」的调试复盘角度判断（样例组 74）。\nvoid delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free"
    ],
    "answer": 3,
    "explanation": "链表删除要关注指针更新顺序和所有权。正确选项指出释放后使用；free 不会自动维护链表链接。 同时要把“自动存储期、静态存储期、局部变量分配、push操作、pop操作、删除头节点”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "栈",
      "溢出",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "push操作",
      "pop操作",
      "入队操作",
      "出队操作",
      "错误诊断",
      "删除头节点"
    ],
    "knowledgeId": "kp_0106",
    "type": "bug_fix",
    "code": "void delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c560",
    "chapter": "内存与存储区",
    "topic": "malloc失败",
    "difficulty": "易错",
    "question": "下面代码缺少哪一步最关键？\n请重点从「malloc失败」的量产固件稳定性角度判断（样例组 75）。\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "options": [
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 0,
    "explanation": "动态内存题先看失败路径。malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "malloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0107",
    "type": "missing_step",
    "code": "uint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c561",
    "chapter": "内存与存储区",
    "topic": "free后使用",
    "difficulty": "面试",
    "question": "下面代码的主要风险是什么？\n请重点从「free后使用」的初始化顺序角度判断（样例组 76）。\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "free 后继续通过 p 写内存，属于释放后使用",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 1,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。正确选项指出 use-after-free。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "free",
      "悬空指针",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断"
    ],
    "knowledgeId": "kp_0108",
    "type": "bug_fix",
    "code": "uint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c562",
    "chapter": "内存与存储区",
    "topic": "重复释放",
    "difficulty": "基础",
    "question": "下面代码的主要风险是什么？\n请重点从「重复释放」的边界条件角度判断（样例组 77）。\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "free 后继续通过 p 写内存，属于释放后使用",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 2,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。正确选项指出 use-after-free。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "free",
      "内存管理",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0109",
    "type": "bug_fix",
    "code": "uint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c563",
    "chapter": "内存与存储区",
    "topic": "内存泄漏",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「内存泄漏」的失败路径角度判断（样例组 78）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "内存泄漏",
      "堆",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "上浮调整",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0110",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c564",
    "chapter": "内存与存储区",
    "topic": "内存碎片",
    "difficulty": "易错",
    "question": "下面代码缺少哪一步最关键？\n请重点从「内存碎片」的生命周期角度判断（样例组 79）。\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "options": [
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 0,
    "explanation": "动态内存题先看失败路径。malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "内存碎片",
      "堆",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "删除头节点",
      "补漏"
    ],
    "knowledgeId": "kp_0111",
    "type": "missing_step",
    "code": "uint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c565",
    "chapter": "内存与存储区",
    "topic": "realloc",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「realloc」的可移植性角度判断（样例组 80）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "realloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0112",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c566",
    "chapter": "内存与存储区",
    "topic": "calloc",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「calloc」的中断安全角度判断（样例组 81）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "calloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0113",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c567",
    "chapter": "内存与存储区",
    "topic": "text段",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「text段」的长期运行稳定性角度判断（样例组 82）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "text",
      "段",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0101",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c568",
    "chapter": "内存与存储区",
    "topic": "rodata段",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「rodata段」的接口契约角度判断（样例组 83）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "rodata",
      "只读",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0102",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c569",
    "chapter": "内存与存储区",
    "topic": "data段",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「data段」的单元测试覆盖角度判断（样例组 84）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "data段",
      "启动",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0103",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c570",
    "chapter": "内存与存储区",
    "topic": "bss段",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「bss段」的代码评审角度判断（样例组 85）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "bss",
      "启动",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0104",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c571",
    "chapter": "内存与存储区",
    "topic": "栈帧",
    "difficulty": "进阶",
    "question": "下面链表代码的主要问题是什么？\n请重点从「栈帧」的内存破坏定位角度判断（样例组 86）。\nvoid delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free"
    ],
    "answer": 3,
    "explanation": "链表删除要关注指针更新顺序和所有权。正确选项指出释放后使用；free 不会自动维护链表链接。 同时要把“自动存储期、静态存储期、局部变量分配、push操作、pop操作、删除头节点”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "栈",
      "栈帧",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "push操作",
      "pop操作",
      "入队操作",
      "出队操作",
      "错误诊断",
      "删除头节点"
    ],
    "knowledgeId": "kp_0105",
    "type": "bug_fix",
    "code": "void delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c572",
    "chapter": "内存与存储区",
    "topic": "栈溢出",
    "difficulty": "易错",
    "question": "下面链表代码的主要问题是什么？\n请重点从「栈溢出」的寄存器副作用角度判断（样例组 87）。\nvoid delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "options": [
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 0,
    "explanation": "链表删除要关注指针更新顺序和所有权。正确选项指出释放后使用；free 不会自动维护链表链接。 同时要把“自动存储期、静态存储期、局部变量分配、push操作、pop操作、删除头节点”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "栈",
      "溢出",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "push操作",
      "pop操作",
      "上浮调整",
      "错误诊断",
      "删除头节点"
    ],
    "knowledgeId": "kp_0106",
    "type": "bug_fix",
    "code": "void delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c573",
    "chapter": "内存与存储区",
    "topic": "malloc失败",
    "difficulty": "面试",
    "question": "下面代码缺少哪一步最关键？\n请重点从「malloc失败」的编译优化影响角度判断（样例组 88）。\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "options": [
      "在 malloc 前先 free(buf)",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 1,
    "explanation": "动态内存题先看失败路径。malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "malloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "补漏"
    ],
    "knowledgeId": "kp_0107",
    "type": "missing_step",
    "code": "uint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c574",
    "chapter": "内存与存储区",
    "topic": "free后使用",
    "difficulty": "基础",
    "question": "下面代码的主要风险是什么？\n请重点从「free后使用」的资源受限 MCU角度判断（样例组 89）。\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "free 后继续通过 p 写内存，属于释放后使用",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 2,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。正确选项指出 use-after-free。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "free",
      "悬空指针",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0108",
    "type": "bug_fix",
    "code": "uint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c575",
    "chapter": "内存与存储区",
    "topic": "重复释放",
    "difficulty": "进阶",
    "question": "下面代码的主要风险是什么？\n请重点从「重复释放」的面试追问角度判断（样例组 90）。\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构",
      "free 后继续通过 p 写内存，属于释放后使用"
    ],
    "answer": 3,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。正确选项指出 use-after-free。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "free",
      "内存管理",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "interview"
    ],
    "knowledgeId": "kp_0109",
    "type": "bug_fix",
    "code": "uint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c576",
    "chapter": "内存与存储区",
    "topic": "内存泄漏",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「内存泄漏」的调试复盘角度判断（样例组 91）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "内存泄漏",
      "堆",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "删除头节点",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0110",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c577",
    "chapter": "内存与存储区",
    "topic": "内存碎片",
    "difficulty": "面试",
    "question": "下面代码缺少哪一步最关键？\n请重点从「内存碎片」的量产固件稳定性角度判断（样例组 92）。\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "options": [
      "在 malloc 前先 free(buf)",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 1,
    "explanation": "动态内存题先看失败路径。malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "内存碎片",
      "堆",
      "扩展题库",
      "代码相关题",
      "补漏",
      "入队操作",
      "出队操作"
    ],
    "knowledgeId": "kp_0111",
    "type": "missing_step",
    "code": "uint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c578",
    "chapter": "内存与存储区",
    "topic": "realloc",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「realloc」的初始化顺序角度判断（样例组 93）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "realloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0112",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c579",
    "chapter": "内存与存储区",
    "topic": "calloc",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「calloc」的边界条件角度判断（样例组 94）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "calloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0113",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c580",
    "chapter": "内存与存储区",
    "topic": "text段",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「text段」的失败路径角度判断（样例组 95）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "text",
      "段",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0101",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c581",
    "chapter": "内存与存储区",
    "topic": "rodata段",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「rodata段」的生命周期角度判断（样例组 96）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "rodata",
      "只读",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0102",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c582",
    "chapter": "内存与存储区",
    "topic": "data段",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「data段」的可移植性角度判断（样例组 0）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "data段",
      "启动",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0103",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c583",
    "chapter": "内存与存储区",
    "topic": "bss段",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「bss段」的中断安全角度判断（样例组 1）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "bss",
      "启动",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0104",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c584",
    "chapter": "内存与存储区",
    "topic": "栈帧",
    "difficulty": "易错",
    "question": "下面链表代码的主要问题是什么？\n请重点从「栈帧」的长期运行稳定性角度判断（样例组 2）。\nvoid delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "options": [
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 0,
    "explanation": "链表删除要关注指针更新顺序和所有权。正确选项指出释放后使用；free 不会自动维护链表链接。 同时要把“自动存储期、静态存储期、局部变量分配、push操作、pop操作、删除头节点”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "栈",
      "栈帧",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "push操作",
      "pop操作",
      "上浮调整",
      "错误诊断",
      "删除头节点"
    ],
    "knowledgeId": "kp_0105",
    "type": "bug_fix",
    "code": "void delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c585",
    "chapter": "内存与存储区",
    "topic": "栈溢出",
    "difficulty": "面试",
    "question": "下面链表代码的主要问题是什么？\n请重点从「栈溢出」的接口契约角度判断（样例组 3）。\nvoid delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 1,
    "explanation": "链表删除要关注指针更新顺序和所有权。正确选项指出释放后使用；free 不会自动维护链表链接。 同时要把“自动存储期、静态存储期、局部变量分配、push操作、pop操作、删除头节点”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "栈",
      "溢出",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "push操作",
      "pop操作",
      "删除头节点"
    ],
    "knowledgeId": "kp_0106",
    "type": "bug_fix",
    "code": "void delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c586",
    "chapter": "内存与存储区",
    "topic": "malloc失败",
    "difficulty": "基础",
    "question": "下面代码缺少哪一步最关键？\n请重点从「malloc失败」的单元测试覆盖角度判断（样例组 4）。\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "options": [
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 2,
    "explanation": "动态内存题先看失败路径。malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "malloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断"
    ],
    "knowledgeId": "kp_0107",
    "type": "missing_step",
    "code": "uint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c587",
    "chapter": "内存与存储区",
    "topic": "free后使用",
    "difficulty": "进阶",
    "question": "下面代码的主要风险是什么？\n请重点从「free后使用」的代码评审角度判断（样例组 5）。\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构",
      "free 后继续通过 p 写内存，属于释放后使用"
    ],
    "answer": 3,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。正确选项指出 use-after-free。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "free",
      "悬空指针",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0108",
    "type": "bug_fix",
    "code": "uint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c588",
    "chapter": "内存与存储区",
    "topic": "重复释放",
    "difficulty": "易错",
    "question": "下面代码的主要风险是什么？\n请重点从「重复释放」的内存破坏定位角度判断（样例组 6）。\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "options": [
      "free 后继续通过 p 写内存，属于释放后使用",
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 0,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。正确选项指出 use-after-free。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "free",
      "内存管理",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断"
    ],
    "knowledgeId": "kp_0109",
    "type": "bug_fix",
    "code": "uint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c589",
    "chapter": "内存与存储区",
    "topic": "内存泄漏",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「内存泄漏」的寄存器副作用角度判断（样例组 7）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "内存泄漏",
      "堆",
      "扩展题库",
      "代码相关题",
      "补漏",
      "入队操作",
      "出队操作",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0110",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c590",
    "chapter": "内存与存储区",
    "topic": "内存碎片",
    "difficulty": "基础",
    "question": "下面代码缺少哪一步最关键？\n请重点从「内存碎片」的编译优化影响角度判断（样例组 8）。\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "options": [
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 2,
    "explanation": "动态内存题先看失败路径。malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "内存碎片",
      "堆",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "上浮调整",
      "补漏"
    ],
    "knowledgeId": "kp_0111",
    "type": "missing_step",
    "code": "uint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c591",
    "chapter": "内存与存储区",
    "topic": "realloc",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「realloc」的资源受限 MCU角度判断（样例组 9）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "realloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0112",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c592",
    "chapter": "内存与存储区",
    "topic": "calloc",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「calloc」的面试追问角度判断（样例组 10）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "calloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "interview",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0113",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c593",
    "chapter": "内存与存储区",
    "topic": "text段",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「text段」的调试复盘角度判断（样例组 11）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "text",
      "段",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0101",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c594",
    "chapter": "内存与存储区",
    "topic": "rodata段",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「rodata段」的量产固件稳定性角度判断（样例组 12）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "rodata",
      "只读",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0102",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c595",
    "chapter": "内存与存储区",
    "topic": "data段",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「data段」的初始化顺序角度判断（样例组 13）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "data段",
      "启动",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0103",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c596",
    "chapter": "内存与存储区",
    "topic": "bss段",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「bss段」的边界条件角度判断（样例组 14）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "bss",
      "启动",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0104",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c597",
    "chapter": "内存与存储区",
    "topic": "栈帧",
    "difficulty": "面试",
    "question": "下面链表代码的主要问题是什么？\n请重点从「栈帧」的失败路径角度判断（样例组 15）。\nvoid delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 1,
    "explanation": "链表删除要关注指针更新顺序和所有权。正确选项指出释放后使用；free 不会自动维护链表链接。 同时要把“自动存储期、静态存储期、局部变量分配、push操作、pop操作、删除头节点”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "栈",
      "栈帧",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "push操作",
      "pop操作",
      "删除头节点"
    ],
    "knowledgeId": "kp_0105",
    "type": "bug_fix",
    "code": "void delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c598",
    "chapter": "内存与存储区",
    "topic": "栈溢出",
    "difficulty": "基础",
    "question": "下面链表代码的主要问题是什么？\n请重点从「栈溢出」的生命周期角度判断（样例组 16）。\nvoid delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 2,
    "explanation": "链表删除要关注指针更新顺序和所有权。正确选项指出释放后使用；free 不会自动维护链表链接。 同时要把“自动存储期、静态存储期、局部变量分配、push操作、pop操作、删除头节点”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "栈",
      "溢出",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "push操作",
      "pop操作",
      "入队操作",
      "出队操作",
      "错误诊断",
      "删除头节点"
    ],
    "knowledgeId": "kp_0106",
    "type": "bug_fix",
    "code": "void delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c599",
    "chapter": "内存与存储区",
    "topic": "malloc失败",
    "difficulty": "进阶",
    "question": "下面代码缺少哪一步最关键？\n请重点从「malloc失败」的可移植性角度判断（样例组 17）。\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "options": [
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet"
    ],
    "answer": 3,
    "explanation": "动态内存题先看失败路径。malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "malloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0107",
    "type": "missing_step",
    "code": "uint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c600",
    "chapter": "内存与存储区",
    "topic": "free后使用",
    "difficulty": "易错",
    "question": "下面代码的主要风险是什么？\n请重点从「free后使用」的中断安全角度判断（样例组 18）。\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "options": [
      "free 后继续通过 p 写内存，属于释放后使用",
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 0,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。正确选项指出 use-after-free。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "free",
      "悬空指针",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0108",
    "type": "bug_fix",
    "code": "uint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c601",
    "chapter": "内存与存储区",
    "topic": "重复释放",
    "difficulty": "面试",
    "question": "下面代码的主要风险是什么？\n请重点从「重复释放」的长期运行稳定性角度判断（样例组 19）。\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "free 后继续通过 p 写内存，属于释放后使用",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 1,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。正确选项指出 use-after-free。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "free",
      "内存管理",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0109",
    "type": "bug_fix",
    "code": "uint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c602",
    "chapter": "内存与存储区",
    "topic": "内存泄漏",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「内存泄漏」的接口契约角度判断（样例组 20）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "内存泄漏",
      "堆",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "上浮调整",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0110",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c603",
    "chapter": "内存与存储区",
    "topic": "内存碎片",
    "difficulty": "进阶",
    "question": "下面代码缺少哪一步最关键？\n请重点从「内存碎片」的单元测试覆盖角度判断（样例组 21）。\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "options": [
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet"
    ],
    "answer": 3,
    "explanation": "动态内存题先看失败路径。malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "内存碎片",
      "堆",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "删除头节点",
      "补漏"
    ],
    "knowledgeId": "kp_0111",
    "type": "missing_step",
    "code": "uint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c604",
    "chapter": "内存与存储区",
    "topic": "realloc",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「realloc」的代码评审角度判断（样例组 22）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "realloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0112",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c605",
    "chapter": "内存与存储区",
    "topic": "calloc",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「calloc」的内存破坏定位角度判断（样例组 23）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "calloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0113",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c606",
    "chapter": "内存与存储区",
    "topic": "text段",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「text段」的寄存器副作用角度判断（样例组 24）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "text",
      "段",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0101",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c607",
    "chapter": "内存与存储区",
    "topic": "rodata段",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「rodata段」的编译优化影响角度判断（样例组 25）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "rodata",
      "只读",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0102",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c608",
    "chapter": "内存与存储区",
    "topic": "data段",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「data段」的资源受限 MCU角度判断（样例组 26）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "data段",
      "启动",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0103",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c609",
    "chapter": "内存与存储区",
    "topic": "bss段",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「bss段」的面试追问角度判断（样例组 27）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "bss",
      "启动",
      "扩展题库",
      "代码相关题",
      "补漏",
      "interview",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0104",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c610",
    "chapter": "内存与存储区",
    "topic": "栈帧",
    "difficulty": "基础",
    "question": "下面链表代码的主要问题是什么？\n请重点从「栈帧」的调试复盘角度判断（样例组 28）。\nvoid delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 2,
    "explanation": "链表删除要关注指针更新顺序和所有权。正确选项指出释放后使用；free 不会自动维护链表链接。 同时要把“自动存储期、静态存储期、局部变量分配、push操作、pop操作、删除头节点”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "栈",
      "栈帧",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "push操作",
      "pop操作",
      "入队操作",
      "出队操作",
      "错误诊断",
      "删除头节点"
    ],
    "knowledgeId": "kp_0105",
    "type": "bug_fix",
    "code": "void delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c611",
    "chapter": "内存与存储区",
    "topic": "栈溢出",
    "difficulty": "进阶",
    "question": "下面链表代码的主要问题是什么？\n请重点从「栈溢出」的量产固件稳定性角度判断（样例组 29）。\nvoid delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free"
    ],
    "answer": 3,
    "explanation": "链表删除要关注指针更新顺序和所有权。正确选项指出释放后使用；free 不会自动维护链表链接。 同时要把“自动存储期、静态存储期、局部变量分配、push操作、pop操作、删除头节点”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "栈",
      "溢出",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "push操作",
      "pop操作",
      "上浮调整",
      "错误诊断",
      "删除头节点"
    ],
    "knowledgeId": "kp_0106",
    "type": "bug_fix",
    "code": "void delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c612",
    "chapter": "内存与存储区",
    "topic": "malloc失败",
    "difficulty": "易错",
    "question": "下面代码缺少哪一步最关键？\n请重点从「malloc失败」的初始化顺序角度判断（样例组 30）。\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "options": [
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 0,
    "explanation": "动态内存题先看失败路径。malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "malloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "补漏"
    ],
    "knowledgeId": "kp_0107",
    "type": "missing_step",
    "code": "uint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c613",
    "chapter": "内存与存储区",
    "topic": "free后使用",
    "difficulty": "面试",
    "question": "下面代码的主要风险是什么？\n请重点从「free后使用」的边界条件角度判断（样例组 31）。\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "free 后继续通过 p 写内存，属于释放后使用",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 1,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。正确选项指出 use-after-free。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "free",
      "悬空指针",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0108",
    "type": "bug_fix",
    "code": "uint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c614",
    "chapter": "内存与存储区",
    "topic": "重复释放",
    "difficulty": "基础",
    "question": "下面代码的主要风险是什么？\n请重点从「重复释放」的失败路径角度判断（样例组 32）。\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "free 后继续通过 p 写内存，属于释放后使用",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 2,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。正确选项指出 use-after-free。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "free",
      "内存管理",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0109",
    "type": "bug_fix",
    "code": "uint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c615",
    "chapter": "内存与存储区",
    "topic": "内存泄漏",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「内存泄漏」的生命周期角度判断（样例组 33）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "内存泄漏",
      "堆",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "删除头节点",
      "补漏"
    ],
    "knowledgeId": "kp_0110",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c616",
    "chapter": "内存与存储区",
    "topic": "内存碎片",
    "difficulty": "易错",
    "question": "下面代码缺少哪一步最关键？\n请重点从「内存碎片」的可移植性角度判断（样例组 34）。\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "options": [
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 0,
    "explanation": "动态内存题先看失败路径。malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "内存碎片",
      "堆",
      "扩展题库",
      "代码相关题",
      "补漏",
      "入队操作",
      "出队操作"
    ],
    "knowledgeId": "kp_0111",
    "type": "missing_step",
    "code": "uint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c617",
    "chapter": "内存与存储区",
    "topic": "realloc",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「realloc」的中断安全角度判断（样例组 35）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "realloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0112",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c618",
    "chapter": "内存与存储区",
    "topic": "calloc",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「calloc」的长期运行稳定性角度判断（样例组 36）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "calloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0113",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c619",
    "chapter": "内存与存储区",
    "topic": "text段",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「text段」的接口契约角度判断（样例组 37）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "text",
      "段",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0101",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c620",
    "chapter": "内存与存储区",
    "topic": "rodata段",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「rodata段」的单元测试覆盖角度判断（样例组 38）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "rodata",
      "只读",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0102",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c621",
    "chapter": "内存与存储区",
    "topic": "data段",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「data段」的代码评审角度判断（样例组 39）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "data段",
      "启动",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0103",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c622",
    "chapter": "内存与存储区",
    "topic": "bss段",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「bss段」的内存破坏定位角度判断（样例组 40）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "bss",
      "启动",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0104",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c623",
    "chapter": "内存与存储区",
    "topic": "栈帧",
    "difficulty": "进阶",
    "question": "下面链表代码的主要问题是什么？\n请重点从「栈帧」的寄存器副作用角度判断（样例组 41）。\nvoid delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free"
    ],
    "answer": 3,
    "explanation": "链表删除要关注指针更新顺序和所有权。正确选项指出释放后使用；free 不会自动维护链表链接。 同时要把“自动存储期、静态存储期、局部变量分配、push操作、pop操作、删除头节点”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "栈",
      "栈帧",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "push操作",
      "pop操作",
      "上浮调整",
      "错误诊断",
      "删除头节点"
    ],
    "knowledgeId": "kp_0105",
    "type": "bug_fix",
    "code": "void delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c624",
    "chapter": "内存与存储区",
    "topic": "栈溢出",
    "difficulty": "易错",
    "question": "下面链表代码的主要问题是什么？\n请重点从「栈溢出」的编译优化影响角度判断（样例组 42）。\nvoid delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "options": [
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 0,
    "explanation": "链表删除要关注指针更新顺序和所有权。正确选项指出释放后使用；free 不会自动维护链表链接。 同时要把“自动存储期、静态存储期、局部变量分配、push操作、pop操作、删除头节点”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "栈",
      "溢出",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "push操作",
      "pop操作",
      "删除头节点"
    ],
    "knowledgeId": "kp_0106",
    "type": "bug_fix",
    "code": "void delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c625",
    "chapter": "内存与存储区",
    "topic": "malloc失败",
    "difficulty": "面试",
    "question": "下面代码缺少哪一步最关键？\n请重点从「malloc失败」的资源受限 MCU角度判断（样例组 43）。\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "options": [
      "在 malloc 前先 free(buf)",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 1,
    "explanation": "动态内存题先看失败路径。malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "malloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0107",
    "type": "missing_step",
    "code": "uint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c626",
    "chapter": "内存与存储区",
    "topic": "free后使用",
    "difficulty": "基础",
    "question": "下面代码的主要风险是什么？\n请重点从「free后使用」的面试追问角度判断（样例组 44）。\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "free 后继续通过 p 写内存，属于释放后使用",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 2,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。正确选项指出 use-after-free。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "free",
      "悬空指针",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "interview"
    ],
    "knowledgeId": "kp_0108",
    "type": "bug_fix",
    "code": "uint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c627",
    "chapter": "内存与存储区",
    "topic": "重复释放",
    "difficulty": "进阶",
    "question": "下面代码的主要风险是什么？\n请重点从「重复释放」的调试复盘角度判断（样例组 45）。\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构",
      "free 后继续通过 p 写内存，属于释放后使用"
    ],
    "answer": 3,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。正确选项指出 use-after-free。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "free",
      "内存管理",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断"
    ],
    "knowledgeId": "kp_0109",
    "type": "bug_fix",
    "code": "uint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c628",
    "chapter": "内存与存储区",
    "topic": "内存泄漏",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「内存泄漏」的量产固件稳定性角度判断（样例组 46）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "内存泄漏",
      "堆",
      "扩展题库",
      "代码相关题",
      "补漏",
      "入队操作",
      "出队操作",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0110",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c629",
    "chapter": "内存与存储区",
    "topic": "内存碎片",
    "difficulty": "面试",
    "question": "下面代码缺少哪一步最关键？\n请重点从「内存碎片」的初始化顺序角度判断（样例组 47）。\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "options": [
      "在 malloc 前先 free(buf)",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 1,
    "explanation": "动态内存题先看失败路径。malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "内存碎片",
      "堆",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "上浮调整",
      "补漏"
    ],
    "knowledgeId": "kp_0111",
    "type": "missing_step",
    "code": "uint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c630",
    "chapter": "内存与存储区",
    "topic": "realloc",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「realloc」的边界条件角度判断（样例组 48）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "realloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0112",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c631",
    "chapter": "内存与存储区",
    "topic": "calloc",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「calloc」的失败路径角度判断（样例组 49）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "calloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0113",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c632",
    "chapter": "内存与存储区",
    "topic": "text段",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「text段」的生命周期角度判断（样例组 50）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "text",
      "段",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0101",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c633",
    "chapter": "内存与存储区",
    "topic": "rodata段",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「rodata段」的可移植性角度判断（样例组 51）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "rodata",
      "只读",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0102",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c634",
    "chapter": "内存与存储区",
    "topic": "data段",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「data段」的中断安全角度判断（样例组 52）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "data段",
      "启动",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0103",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c635",
    "chapter": "内存与存储区",
    "topic": "bss段",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「bss段」的长期运行稳定性角度判断（样例组 53）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "bss",
      "启动",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0104",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c636",
    "chapter": "内存与存储区",
    "topic": "栈帧",
    "difficulty": "易错",
    "question": "下面链表代码的主要问题是什么？\n请重点从「栈帧」的接口契约角度判断（样例组 54）。\nvoid delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "options": [
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 0,
    "explanation": "链表删除要关注指针更新顺序和所有权。正确选项指出释放后使用；free 不会自动维护链表链接。 同时要把“自动存储期、静态存储期、局部变量分配、push操作、pop操作、删除头节点”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "栈",
      "栈帧",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "push操作",
      "pop操作",
      "删除头节点"
    ],
    "knowledgeId": "kp_0105",
    "type": "bug_fix",
    "code": "void delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c637",
    "chapter": "内存与存储区",
    "topic": "栈溢出",
    "difficulty": "面试",
    "question": "下面链表代码的主要问题是什么？\n请重点从「栈溢出」的单元测试覆盖角度判断（样例组 55）。\nvoid delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 1,
    "explanation": "链表删除要关注指针更新顺序和所有权。正确选项指出释放后使用；free 不会自动维护链表链接。 同时要把“自动存储期、静态存储期、局部变量分配、push操作、pop操作、删除头节点”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "栈",
      "溢出",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "push操作",
      "pop操作",
      "入队操作",
      "出队操作",
      "错误诊断",
      "删除头节点"
    ],
    "knowledgeId": "kp_0106",
    "type": "bug_fix",
    "code": "void delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c638",
    "chapter": "内存与存储区",
    "topic": "malloc失败",
    "difficulty": "基础",
    "question": "下面代码缺少哪一步最关键？\n请重点从「malloc失败」的代码评审角度判断（样例组 56）。\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "options": [
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 2,
    "explanation": "动态内存题先看失败路径。malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "malloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0107",
    "type": "missing_step",
    "code": "uint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c639",
    "chapter": "内存与存储区",
    "topic": "free后使用",
    "difficulty": "进阶",
    "question": "下面代码的主要风险是什么？\n请重点从「free后使用」的内存破坏定位角度判断（样例组 57）。\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构",
      "free 后继续通过 p 写内存，属于释放后使用"
    ],
    "answer": 3,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。正确选项指出 use-after-free。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "free",
      "悬空指针",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断"
    ],
    "knowledgeId": "kp_0108",
    "type": "bug_fix",
    "code": "uint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c640",
    "chapter": "内存与存储区",
    "topic": "重复释放",
    "difficulty": "易错",
    "question": "下面代码的主要风险是什么？\n请重点从「重复释放」的寄存器副作用角度判断（样例组 58）。\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "options": [
      "free 后继续通过 p 写内存，属于释放后使用",
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 0,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。正确选项指出 use-after-free。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "free",
      "内存管理",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0109",
    "type": "bug_fix",
    "code": "uint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "reviewStatus": "待复核"
  },
  {
    "id": "c641",
    "chapter": "内存与存储区",
    "topic": "内存泄漏",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「内存泄漏」的编译优化影响角度判断（样例组 59）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "内存泄漏",
      "堆",
      "扩展题库",
      "代码相关题",
      "代码计算",
      "上浮调整",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0110",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c642",
    "chapter": "内存与存储区",
    "topic": "内存碎片",
    "difficulty": "基础",
    "question": "下面代码缺少哪一步最关键？\n请重点从「内存碎片」的资源受限 MCU角度判断（样例组 60）。\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "options": [
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 2,
    "explanation": "动态内存题先看失败路径。malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
    "tags": [
      "内存碎片",
      "堆",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "删除头节点",
      "补漏"
    ],
    "knowledgeId": "kp_0111",
    "type": "missing_step",
    "code": "uint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c643",
    "chapter": "内存与存储区",
    "topic": "realloc",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「realloc」的面试追问角度判断（样例组 61）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "realloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "interview",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0112",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c644",
    "chapter": "内存与存储区",
    "topic": "calloc",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「calloc」的调试复盘角度判断（样例组 62）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "calloc",
      "动态内存",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0113",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c645",
    "chapter": "内存与存储区",
    "topic": "text段",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「text段」的量产固件稳定性角度判断（样例组 63）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "text",
      "段",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0101",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c646",
    "chapter": "内存与存储区",
    "topic": "rodata段",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「rodata段」的初始化顺序角度判断（样例组 64）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "rodata",
      "只读",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0102",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c647",
    "chapter": "内存与存储区",
    "topic": "data段",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「data段」的边界条件角度判断（样例组 65）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "data段",
      "启动",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0103",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c648",
    "chapter": "内存与存储区",
    "topic": "bss段",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「bss段」的失败路径角度判断（样例组 66）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "bss",
      "启动",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0104",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  }
]

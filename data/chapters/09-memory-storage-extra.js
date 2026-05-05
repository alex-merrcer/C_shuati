module.exports = [
  {
    "id": "c554",
    "chapter": "内存与存储区",
    "topic": "text段",
    "difficulty": "基础",
    "question": "在串口接收缓冲区中看到下面这段和「text段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到命令行参数复制里，重点看首次调用时输入长度刚好等于目标容量。",
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
    "question": "在串口接收缓冲区中看到下面这段和「rodata段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到AT 指令解析里，重点看首次调用时输入长度刚好等于目标容量。",
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
    "question": "在串口接收缓冲区中看到下面这段和「data段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到配置项读取里，重点看首次调用时输入长度刚好等于目标容量。",
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
    "question": "在串口接收缓冲区中看到下面这段和「bss段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到日志前缀拼接里，重点看首次调用时输入长度刚好等于目标容量。",
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
    "question": "在链表节点删除函数中看到下面这段和「栈帧」有关的代码，最主要的风险是什么？\nvoid delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 2,
    "explanation": "链表删除要关注指针更新顺序和所有权。 真正会出问题的是：空链表、单节点、头尾节点以及释放前后的指针更新顺序是否被覆盖。 正确选项指出释放后使用；free 不会自动维护链表链接。",
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
    "question": "在链表节点删除函数中看到下面这段和「栈溢出」有关的代码，最主要的风险是什么？\nvoid delete_after(Node *prev) {\n    Node *victim = prev->next;\n    free(victim);\n    prev->next = victim->next;\n}",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free"
    ],
    "answer": 3,
    "explanation": "链表删除要关注指针更新顺序和所有权。 真正会出问题的是：空链表、单节点、头尾节点以及释放前后的指针更新顺序是否被覆盖。 正确选项指出释放后使用；free 不会自动维护链表链接。\n补测时把代码放到空链表遍历里，重点看首次调用时prev 是否为 NULL。",
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
    "question": "这段「malloc失败」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "options": [
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 0,
    "explanation": "动态内存题先看失败路径。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。",
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
    "question": "在RTOS 任务异常退出中看到下面这段和「free后使用」有关的代码，最主要的风险是什么？\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "free 后继续通过 p 写内存，属于释放后使用",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 1,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项指出 use-after-free。",
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
    "question": "在RTOS 任务异常退出中看到下面这段和「重复释放」有关的代码，最主要的风险是什么？\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "free 后继续通过 p 写内存，属于释放后使用",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 2,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项指出 use-after-free。\n补测时把代码放到驱动初始化失败路径里，重点看首次调用时分配失败后是否继续使用。",
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
    "question": "在串口接收缓冲区中看到下面这段和「内存泄漏」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到协议字段转字符串里，重点看首次调用时输入长度刚好等于目标容量。",
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
    "question": "这段「内存碎片」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "options": [
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 0,
    "explanation": "动态内存题先看失败路径。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。\n补测时把代码放到驱动初始化失败路径里，重点看首次调用时分配失败后是否继续使用。",
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
    "question": "在串口接收缓冲区中看到下面这段和「realloc」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到设备名保存里，重点看首次调用时输入长度刚好等于目标容量。",
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
    "question": "在串口接收缓冲区中看到下面这段和「calloc」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到Bootloader 命令解析里，重点看首次调用时输入长度刚好等于目标容量。",
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
    "question": "在串口接收缓冲区中看到下面这段和「text段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到命令行参数复制里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到串口接收缓冲区里，重点看首次调用时源数据没有结尾 0。",
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
    "question": "在串口接收缓冲区中看到下面这段和「rodata段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到命令行参数复制里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到命令行参数复制里，重点看首次调用时源数据没有结尾 0。",
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
    "question": "在串口接收缓冲区中看到下面这段和「data段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到命令行参数复制里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到AT 指令解析里，重点看首次调用时源数据没有结尾 0。",
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
    "question": "在串口接收缓冲区中看到下面这段和「bss段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到命令行参数复制里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到配置项读取里，重点看首次调用时源数据没有结尾 0。",
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
    "question": "在链表节点删除函数中看到下面这段和「栈帧」有关的代码，最主要的风险是什么？\nvoid delete_after(Node *prev) {\n Node *victim = prev->next;\n free(victim);\n prev->next = victim->next;\n}\n请把它放到空链表遍历里判断，尤其看首次调用时prev 是否为 NULL。",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free"
    ],
    "answer": 3,
    "explanation": "链表删除要关注指针更新顺序和所有权。 真正会出问题的是：空链表、单节点、头尾节点以及释放前后的指针更新顺序是否被覆盖。 正确选项指出释放后使用；free 不会自动维护链表链接。\n补测时把代码放到单节点链表释放里，重点看首次调用时prev 是否为 NULL。",
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
    "question": "在链表节点删除函数中看到下面这段和「栈溢出」有关的代码，最主要的风险是什么？\nvoid delete_after(Node *prev) {\n Node *victim = prev->next;\n free(victim);\n prev->next = victim->next;\n}\n请把它放到空链表遍历里判断，尤其看首次调用时prev 是否为 NULL。",
    "options": [
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 0,
    "explanation": "链表删除要关注指针更新顺序和所有权。 真正会出问题的是：空链表、单节点、头尾节点以及释放前后的指针更新顺序是否被覆盖。 正确选项指出释放后使用；free 不会自动维护链表链接。\n补测时把代码放到头节点删除路径里，重点看首次调用时prev 是否为 NULL。",
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
    "question": "这段「malloc失败」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);\n请把它放到驱动初始化失败路径里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "在 malloc 前先 free(buf)",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 1,
    "explanation": "动态内存题先看失败路径。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。\n补测时把代码放到协议帧缓存申请里，重点看首次调用时分配失败后是否继续使用。",
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
    "question": "在RTOS 任务异常退出中看到下面这段和「free后使用」有关的代码，最主要的风险是什么？\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;\n请把它放到驱动初始化失败路径里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "free 后继续通过 p 写内存，属于释放后使用",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 2,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项指出 use-after-free。\n补测时把代码放到协议帧缓存申请里，重点看首次调用时分配失败后是否继续使用。",
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
    "question": "在RTOS 任务异常退出中看到下面这段和「重复释放」有关的代码，最主要的风险是什么？\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;\n请把它放到驱动初始化失败路径里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构",
      "free 后继续通过 p 写内存，属于释放后使用"
    ],
    "answer": 3,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项指出 use-after-free。\n补测时把代码放到配置表重新加载里，重点看首次调用时分配失败后是否继续使用。",
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
    "question": "在串口接收缓冲区中看到下面这段和「内存泄漏」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到命令行参数复制里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到日志前缀拼接里，重点看首次调用时源数据没有结尾 0。",
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
    "question": "这段「内存碎片」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);\n请把它放到驱动初始化失败路径里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "在 malloc 前先 free(buf)",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 1,
    "explanation": "动态内存题先看失败路径。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。\n补测时把代码放到配置表重新加载里，重点看首次调用时分配失败后是否继续使用。",
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
    "question": "在串口接收缓冲区中看到下面这段和「realloc」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到命令行参数复制里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到协议字段转字符串里，重点看首次调用时源数据没有结尾 0。",
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
    "question": "在串口接收缓冲区中看到下面这段和「calloc」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到命令行参数复制里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到设备名保存里，重点看首次调用时源数据没有结尾 0。",
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
    "question": "在串口接收缓冲区中看到下面这段和「text段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到AT 指令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到Bootloader 命令解析里，重点看首次调用时源数据没有结尾 0。",
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
    "question": "在串口接收缓冲区中看到下面这段和「rodata段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到AT 指令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到串口接收缓冲区里，重点看首次调用时源指针为 NULL。",
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
    "question": "在串口接收缓冲区中看到下面这段和「data段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到AT 指令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到命令行参数复制里，重点看首次调用时源指针为 NULL。",
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
    "question": "在串口接收缓冲区中看到下面这段和「bss段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到AT 指令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到AT 指令解析里，重点看首次调用时源指针为 NULL。",
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
    "question": "在链表节点删除函数中看到下面这段和「栈帧」有关的代码，最主要的风险是什么？\nvoid delete_after(Node *prev) {\n Node *victim = prev->next;\n free(victim);\n prev->next = victim->next;\n}\n请把它放到单节点链表释放里判断，尤其看首次调用时prev 是否为 NULL。",
    "options": [
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 0,
    "explanation": "链表删除要关注指针更新顺序和所有权。 真正会出问题的是：空链表、单节点、头尾节点以及释放前后的指针更新顺序是否被覆盖。 正确选项指出释放后使用；free 不会自动维护链表链接。\n补测时把代码放到尾节点删除路径里，重点看首次调用时prev 是否为 NULL。",
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
    "question": "在链表节点删除函数中看到下面这段和「栈溢出」有关的代码，最主要的风险是什么？\nvoid delete_after(Node *prev) {\n Node *victim = prev->next;\n free(victim);\n prev->next = victim->next;\n}\n请把它放到单节点链表释放里判断，尤其看首次调用时prev 是否为 NULL。",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 1,
    "explanation": "链表删除要关注指针更新顺序和所有权。 真正会出问题的是：空链表、单节点、头尾节点以及释放前后的指针更新顺序是否被覆盖。 正确选项指出释放后使用；free 不会自动维护链表链接。\n补测时把代码放到链表查找失败路径里，重点看首次调用时prev 是否为 NULL。",
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
    "question": "这段「malloc失败」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);\n请把它放到协议帧缓存申请里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 2,
    "explanation": "动态内存题先看失败路径。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。\n补测时把代码放到链表节点回收里，重点看首次调用时分配失败后是否继续使用。",
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
    "question": "在RTOS 任务异常退出中看到下面这段和「free后使用」有关的代码，最主要的风险是什么？\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;\n请把它放到协议帧缓存申请里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构",
      "free 后继续通过 p 写内存，属于释放后使用"
    ],
    "answer": 3,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项指出 use-after-free。\n补测时把代码放到链表节点回收里，重点看首次调用时分配失败后是否继续使用。",
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
    "question": "在RTOS 任务异常退出中看到下面这段和「重复释放」有关的代码，最主要的风险是什么？\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;\n请把它放到协议帧缓存申请里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "free 后继续通过 p 写内存，属于释放后使用",
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 0,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项指出 use-after-free。\n补测时把代码放到错误码提前返回里，重点看首次调用时分配失败后是否继续使用。",
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
    "question": "在串口接收缓冲区中看到下面这段和「内存泄漏」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到AT 指令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到配置项读取里，重点看首次调用时源指针为 NULL。",
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
    "question": "这段「内存碎片」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);\n请把它放到协议帧缓存申请里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 2,
    "explanation": "动态内存题先看失败路径。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。\n补测时把代码放到错误码提前返回里，重点看首次调用时分配失败后是否继续使用。",
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
    "question": "在串口接收缓冲区中看到下面这段和「realloc」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到AT 指令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到日志前缀拼接里，重点看首次调用时源指针为 NULL。",
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
    "question": "在串口接收缓冲区中看到下面这段和「calloc」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到AT 指令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到协议字段转字符串里，重点看首次调用时源指针为 NULL。",
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
    "question": "在串口接收缓冲区中看到下面这段和「text段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到配置项读取里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到设备名保存里，重点看首次调用时源指针为 NULL。",
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
    "question": "在串口接收缓冲区中看到下面这段和「rodata段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到配置项读取里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到Bootloader 命令解析里，重点看首次调用时源指针为 NULL。",
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
    "question": "在串口接收缓冲区中看到下面这段和「data段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到配置项读取里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到串口接收缓冲区里，重点看首次调用时目标数组只剩一个字节。",
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
    "question": "在串口接收缓冲区中看到下面这段和「bss段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到配置项读取里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到命令行参数复制里，重点看首次调用时目标数组只剩一个字节。",
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
    "question": "在链表节点删除函数中看到下面这段和「栈帧」有关的代码，最主要的风险是什么？\nvoid delete_after(Node *prev) {\n Node *victim = prev->next;\n free(victim);\n prev->next = victim->next;\n}\n请把它放到头节点删除路径里判断，尤其看首次调用时prev 是否为 NULL。",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 1,
    "explanation": "链表删除要关注指针更新顺序和所有权。 真正会出问题的是：空链表、单节点、头尾节点以及释放前后的指针更新顺序是否被覆盖。 正确选项指出释放后使用；free 不会自动维护链表链接。\n补测时把代码放到链表插入回滚里，重点看首次调用时prev 是否为 NULL。",
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
    "question": "在链表节点删除函数中看到下面这段和「栈溢出」有关的代码，最主要的风险是什么？\nvoid delete_after(Node *prev) {\n Node *victim = prev->next;\n free(victim);\n prev->next = victim->next;\n}\n请把它放到头节点删除路径里判断，尤其看首次调用时prev 是否为 NULL。",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 2,
    "explanation": "链表删除要关注指针更新顺序和所有权。 真正会出问题的是：空链表、单节点、头尾节点以及释放前后的指针更新顺序是否被覆盖。 正确选项指出释放后使用；free 不会自动维护链表链接。\n补测时把代码放到节点池回收函数里，重点看首次调用时prev 是否为 NULL。",
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
    "question": "这段「malloc失败」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);\n请把它放到配置表重新加载里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet"
    ],
    "answer": 3,
    "explanation": "动态内存题先看失败路径。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。\n补测时把代码放到缓冲区扩容里，重点看首次调用时分配失败后是否继续使用。",
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
    "question": "在RTOS 任务异常退出中看到下面这段和「free后使用」有关的代码，最主要的风险是什么？\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;\n请把它放到配置表重新加载里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "free 后继续通过 p 写内存，属于释放后使用",
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 0,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项指出 use-after-free。\n补测时把代码放到缓冲区扩容里，重点看首次调用时分配失败后是否继续使用。",
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
    "question": "在RTOS 任务异常退出中看到下面这段和「重复释放」有关的代码，最主要的风险是什么？\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;\n请把它放到配置表重新加载里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "free 后继续通过 p 写内存，属于释放后使用",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 1,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项指出 use-after-free。\n补测时把代码放到单元测试内存检查里，重点看首次调用时分配失败后是否继续使用。",
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
    "question": "在串口接收缓冲区中看到下面这段和「内存泄漏」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到配置项读取里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到AT 指令解析里，重点看首次调用时目标数组只剩一个字节。",
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
    "question": "这段「内存碎片」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);\n请把它放到配置表重新加载里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet"
    ],
    "answer": 3,
    "explanation": "动态内存题先看失败路径。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。\n补测时把代码放到单元测试内存检查里，重点看首次调用时分配失败后是否继续使用。",
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
    "question": "在串口接收缓冲区中看到下面这段和「realloc」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到配置项读取里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到配置项读取里，重点看首次调用时目标数组只剩一个字节。",
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
    "question": "在串口接收缓冲区中看到下面这段和「calloc」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到配置项读取里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到日志前缀拼接里，重点看首次调用时目标数组只剩一个字节。",
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
    "question": "在串口接收缓冲区中看到下面这段和「text段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到日志前缀拼接里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到协议字段转字符串里，重点看首次调用时目标数组只剩一个字节。",
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
    "question": "在串口接收缓冲区中看到下面这段和「rodata段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到日志前缀拼接里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到设备名保存里，重点看首次调用时目标数组只剩一个字节。",
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
    "question": "在串口接收缓冲区中看到下面这段和「data段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到日志前缀拼接里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到Bootloader 命令解析里，重点看首次调用时目标数组只剩一个字节。",
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
    "question": "在串口接收缓冲区中看到下面这段和「bss段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到日志前缀拼接里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到串口接收缓冲区里，重点看首次调用时接收数据里包含内嵌 0。",
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
    "question": "在链表节点删除函数中看到下面这段和「栈帧」有关的代码，最主要的风险是什么？\nvoid delete_after(Node *prev) {\n Node *victim = prev->next;\n free(victim);\n prev->next = victim->next;\n}\n请把它放到尾节点删除路径里判断，尤其看首次调用时prev 是否为 NULL。",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 2,
    "explanation": "链表删除要关注指针更新顺序和所有权。 真正会出问题的是：空链表、单节点、头尾节点以及释放前后的指针更新顺序是否被覆盖。 正确选项指出释放后使用；free 不会自动维护链表链接。\n补测时把代码放到链表节点删除函数里，重点看首次调用时prev->next 是否为空。",
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
    "question": "在链表节点删除函数中看到下面这段和「栈溢出」有关的代码，最主要的风险是什么？\nvoid delete_after(Node *prev) {\n Node *victim = prev->next;\n free(victim);\n prev->next = victim->next;\n}\n请把它放到尾节点删除路径里判断，尤其看首次调用时prev 是否为 NULL。",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free"
    ],
    "answer": 3,
    "explanation": "链表删除要关注指针更新顺序和所有权。 真正会出问题的是：空链表、单节点、头尾节点以及释放前后的指针更新顺序是否被覆盖。 正确选项指出释放后使用；free 不会自动维护链表链接。\n补测时把代码放到空链表遍历里，重点看首次调用时prev->next 是否为空。",
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
    "question": "这段「malloc失败」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);\n请把它放到链表节点回收里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 0,
    "explanation": "动态内存题先看失败路径。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。\n补测时把代码放到RTOS 任务异常退出里，重点看首次调用时提前返回是否遗漏释放。",
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
    "question": "在RTOS 任务异常退出中看到下面这段和「free后使用」有关的代码，最主要的风险是什么？\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;\n请把它放到链表节点回收里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "free 后继续通过 p 写内存，属于释放后使用",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 1,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项指出 use-after-free。\n补测时把代码放到RTOS 任务异常退出里，重点看首次调用时提前返回是否遗漏释放。",
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
    "question": "在RTOS 任务异常退出中看到下面这段和「重复释放」有关的代码，最主要的风险是什么？\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;\n请把它放到链表节点回收里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "free 后继续通过 p 写内存，属于释放后使用",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 2,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项指出 use-after-free。\n补测时把代码放到驱动初始化失败路径里，重点看首次调用时提前返回是否遗漏释放。",
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
    "question": "在串口接收缓冲区中看到下面这段和「内存泄漏」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到日志前缀拼接里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到命令行参数复制里，重点看首次调用时接收数据里包含内嵌 0。",
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
    "question": "这段「内存碎片」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);\n请把它放到链表节点回收里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 0,
    "explanation": "动态内存题先看失败路径。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。\n补测时把代码放到驱动初始化失败路径里，重点看首次调用时提前返回是否遗漏释放。",
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
    "question": "在串口接收缓冲区中看到下面这段和「realloc」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到日志前缀拼接里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到AT 指令解析里，重点看首次调用时接收数据里包含内嵌 0。",
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
    "question": "在串口接收缓冲区中看到下面这段和「calloc」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到日志前缀拼接里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到配置项读取里，重点看首次调用时接收数据里包含内嵌 0。",
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
    "question": "在串口接收缓冲区中看到下面这段和「text段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到协议字段转字符串里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到日志前缀拼接里，重点看首次调用时接收数据里包含内嵌 0。",
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
    "question": "在串口接收缓冲区中看到下面这段和「rodata段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到协议字段转字符串里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到协议字段转字符串里，重点看首次调用时接收数据里包含内嵌 0。",
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
    "question": "在串口接收缓冲区中看到下面这段和「data段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到协议字段转字符串里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到设备名保存里，重点看首次调用时接收数据里包含内嵌 0。",
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
    "question": "在串口接收缓冲区中看到下面这段和「bss段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到协议字段转字符串里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到Bootloader 命令解析里，重点看首次调用时接收数据里包含内嵌 0。",
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
    "question": "在链表节点删除函数中看到下面这段和「栈帧」有关的代码，最主要的风险是什么？\nvoid delete_after(Node *prev) {\n Node *victim = prev->next;\n free(victim);\n prev->next = victim->next;\n}\n请把它放到链表查找失败路径里判断，尤其看首次调用时prev 是否为 NULL。",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free"
    ],
    "answer": 3,
    "explanation": "链表删除要关注指针更新顺序和所有权。 真正会出问题的是：空链表、单节点、头尾节点以及释放前后的指针更新顺序是否被覆盖。 正确选项指出释放后使用；free 不会自动维护链表链接。\n补测时把代码放到单节点链表释放里，重点看首次调用时prev->next 是否为空。",
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
    "question": "在链表节点删除函数中看到下面这段和「栈溢出」有关的代码，最主要的风险是什么？\nvoid delete_after(Node *prev) {\n Node *victim = prev->next;\n free(victim);\n prev->next = victim->next;\n}\n请把它放到链表查找失败路径里判断，尤其看首次调用时prev 是否为 NULL。",
    "options": [
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 0,
    "explanation": "链表删除要关注指针更新顺序和所有权。 真正会出问题的是：空链表、单节点、头尾节点以及释放前后的指针更新顺序是否被覆盖。 正确选项指出释放后使用；free 不会自动维护链表链接。\n补测时把代码放到头节点删除路径里，重点看首次调用时prev->next 是否为空。",
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
    "question": "这段「malloc失败」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);\n请把它放到错误码提前返回里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "在 malloc 前先 free(buf)",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 1,
    "explanation": "动态内存题先看失败路径。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。\n补测时把代码放到协议帧缓存申请里，重点看首次调用时提前返回是否遗漏释放。",
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
    "question": "在RTOS 任务异常退出中看到下面这段和「free后使用」有关的代码，最主要的风险是什么？\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;\n请把它放到错误码提前返回里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "free 后继续通过 p 写内存，属于释放后使用",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 2,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项指出 use-after-free。\n补测时把代码放到协议帧缓存申请里，重点看首次调用时提前返回是否遗漏释放。",
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
    "question": "在RTOS 任务异常退出中看到下面这段和「重复释放」有关的代码，最主要的风险是什么？\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;\n请把它放到错误码提前返回里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构",
      "free 后继续通过 p 写内存，属于释放后使用"
    ],
    "answer": 3,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项指出 use-after-free。\n补测时把代码放到配置表重新加载里，重点看首次调用时提前返回是否遗漏释放。",
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
    "question": "在串口接收缓冲区中看到下面这段和「内存泄漏」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到协议字段转字符串里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到串口接收缓冲区里，重点看首次调用时字符串函数是否越过缓冲区。",
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
    "question": "这段「内存碎片」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);\n请把它放到错误码提前返回里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "在 malloc 前先 free(buf)",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 1,
    "explanation": "动态内存题先看失败路径。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。\n补测时把代码放到配置表重新加载里，重点看首次调用时提前返回是否遗漏释放。",
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
    "question": "在串口接收缓冲区中看到下面这段和「realloc」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到协议字段转字符串里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到命令行参数复制里，重点看首次调用时字符串函数是否越过缓冲区。",
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
    "question": "在串口接收缓冲区中看到下面这段和「calloc」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到协议字段转字符串里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到AT 指令解析里，重点看首次调用时字符串函数是否越过缓冲区。",
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
    "question": "在串口接收缓冲区中看到下面这段和「text段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到设备名保存里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到配置项读取里，重点看首次调用时字符串函数是否越过缓冲区。",
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
    "question": "在串口接收缓冲区中看到下面这段和「rodata段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到设备名保存里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到日志前缀拼接里，重点看首次调用时字符串函数是否越过缓冲区。",
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
    "question": "在串口接收缓冲区中看到下面这段和「data段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到设备名保存里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到协议字段转字符串里，重点看首次调用时字符串函数是否越过缓冲区。",
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
    "question": "在串口接收缓冲区中看到下面这段和「bss段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到设备名保存里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到设备名保存里，重点看首次调用时字符串函数是否越过缓冲区。",
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
    "question": "在链表节点删除函数中看到下面这段和「栈帧」有关的代码，最主要的风险是什么？\nvoid delete_after(Node *prev) {\n Node *victim = prev->next;\n free(victim);\n prev->next = victim->next;\n}\n请把它放到链表插入回滚里判断，尤其看首次调用时prev 是否为 NULL。",
    "options": [
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "free 后读取结构体成员是安全的，只要不写入",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 0,
    "explanation": "链表删除要关注指针更新顺序和所有权。 真正会出问题的是：空链表、单节点、头尾节点以及释放前后的指针更新顺序是否被覆盖。 正确选项指出释放后使用；free 不会自动维护链表链接。\n补测时把代码放到尾节点删除路径里，重点看首次调用时prev->next 是否为空。",
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
    "question": "在链表节点删除函数中看到下面这段和「栈溢出」有关的代码，最主要的风险是什么？\nvoid delete_after(Node *prev) {\n Node *victim = prev->next;\n free(victim);\n prev->next = victim->next;\n}\n请把它放到链表插入回滚里判断，尤其看首次调用时prev 是否为 NULL。",
    "options": [
      "free 后读取结构体成员是安全的，只要不写入",
      "释放 victim 后又访问 victim->next，应先保存 next 再 free",
      "prev->next 会被 free 自动改成后继节点",
      "把 victim 声明为 static 就能避免释放后使用"
    ],
    "answer": 1,
    "explanation": "链表删除要关注指针更新顺序和所有权。 真正会出问题的是：空链表、单节点、头尾节点以及释放前后的指针更新顺序是否被覆盖。 正确选项指出释放后使用；free 不会自动维护链表链接。\n补测时把代码放到链表查找失败路径里，重点看首次调用时prev->next 是否为空。",
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
    "question": "这段「malloc失败」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);\n请把它放到缓冲区扩容里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 2,
    "explanation": "动态内存题先看失败路径。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。\n补测时把代码放到链表节点回收里，重点看首次调用时提前返回是否遗漏释放。",
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
    "question": "在RTOS 任务异常退出中看到下面这段和「free后使用」有关的代码，最主要的风险是什么？\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;\n请把它放到缓冲区扩容里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构",
      "free 后继续通过 p 写内存，属于释放后使用"
    ],
    "answer": 3,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项指出 use-after-free。\n补测时把代码放到链表节点回收里，重点看首次调用时提前返回是否遗漏释放。",
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
    "question": "在RTOS 任务异常退出中看到下面这段和「重复释放」有关的代码，最主要的风险是什么？\nuint8_t *p = malloc(32);\nfree(p);\n*p = 0x55;\n请把它放到缓冲区扩容里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "free 后继续通过 p 写内存，属于释放后使用",
      "free 会把 p 自动置为 NULL，所以 *p 写入是安全空操作",
      "malloc 得到的 32 字节在 free 后仍归当前模块独占",
      "只写 1 字节不会破坏堆管理结构"
    ],
    "answer": 0,
    "explanation": "释放后原指针值可能仍在变量中，但它不再代表有效对象。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项指出 use-after-free。\n补测时把代码放到错误码提前返回里，重点看首次调用时提前返回是否遗漏释放。",
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
    "question": "在串口接收缓冲区中看到下面这段和「内存泄漏」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到设备名保存里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到Bootloader 命令解析里，重点看首次调用时字符串函数是否越过缓冲区。",
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
    "question": "这段「内存碎片」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);\n请把它放到缓冲区扩容里判断，尤其看首次调用时分配失败后是否继续使用。",
    "options": [
      "在 malloc 前先 free(buf)",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 2,
    "explanation": "动态内存题先看失败路径。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。\n补测时把代码放到错误码提前返回里，重点看首次调用时提前返回是否遗漏释放。",
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
    "question": "在串口接收缓冲区中看到下面这段和「realloc」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到设备名保存里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到串口接收缓冲区里，重点看首次调用时复制后是否补了结束符。",
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
    "question": "在串口接收缓冲区中看到下面这段和「calloc」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到设备名保存里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到命令行参数复制里，重点看首次调用时复制后是否补了结束符。",
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
    "question": "在串口接收缓冲区中看到下面这段和「text段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到Bootloader 命令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到AT 指令解析里，重点看首次调用时复制后是否补了结束符。",
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
    "question": "在串口接收缓冲区中看到下面这段和「rodata段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到Bootloader 命令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到配置项读取里，重点看首次调用时复制后是否补了结束符。",
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
    "question": "在串口接收缓冲区中看到下面这段和「data段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到Bootloader 命令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到日志前缀拼接里，重点看首次调用时复制后是否补了结束符。",
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
    "question": "在串口接收缓冲区中看到下面这段和「bss段」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到Bootloader 命令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到协议字段转字符串里，重点看首次调用时复制后是否补了结束符。",
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

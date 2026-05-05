module.exports = [
  {
    "id": "c025",
    "chapter": "内存与存储区",
    "topic": "malloc/free",
    "difficulty": "基础",
    "question": "这段「malloc/free」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "options": [
      "在 malloc 前先 free(buf)",
      "检查 malloc 返回值是否为 NULL，再决定是否调用 read_packet",
      "把 128 改成 sizeof(buf)，这样能自动得到申请大小",
      "删除 free(buf)，避免释放后使用"
    ],
    "answer": 1,
    "explanation": "动态内存题先看失败路径。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 malloc 可能返回 NULL；sizeof(buf) 是指针大小，删除 free 会制造泄漏。\n补测时把代码放到缓冲区扩容里，重点看首次调用时提前返回是否遗漏释放。",
    "tags": [
      "malloc",
      "free",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0114",
    "type": "missing_step",
    "code": "uint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c026",
    "chapter": "内存与存储区",
    "topic": "内存泄漏",
    "difficulty": "基础",
    "question": "在串口接收缓冲区中看到下面这段和「内存泄漏」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到Bootloader 命令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到设备名保存里，重点看首次调用时复制后是否补了结束符。",
    "tags": [
      "内存泄漏",
      "动态内存",
      "代码相关题",
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
    "id": "c027",
    "chapter": "内存与存储区",
    "topic": "存储区",
    "difficulty": "进阶",
    "question": "在串口接收缓冲区中看到下面这段和「存储区」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到Bootloader 命令解析里，重点看首次调用时复制后是否补了结束符。",
    "tags": [
      "存储期",
      "static",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0115",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  }
]

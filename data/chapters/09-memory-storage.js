module.exports = [
  {
    "id": "c025",
    "chapter": "内存与存储区",
    "topic": "malloc/free",
    "difficulty": "基础",
    "question": "下面代码缺少哪一步最关键？\n请重点从「malloc/free」的单元测试覆盖角度判断（样例组 25）。\nuint8_t *buf = malloc(128);\nread_packet(buf, 128);\nfree(buf);",
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
    "question": "这段代码的主要问题是什么？\n请重点从「内存泄漏」的代码评审角度判断（样例组 26）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
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
    "question": "这段代码的主要问题是什么？\n请重点从「存储区」的内存破坏定位角度判断（样例组 27）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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

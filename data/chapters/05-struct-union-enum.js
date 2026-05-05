module.exports = [
  {
    "id": "c015",
    "chapter": "结构体、共用体与枚举",
    "topic": "结构体大小与内存对齐",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「结构体大小与内存对齐」的调试复盘角度判断（样例组 15）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "结构体",
      "内存对齐",
      "代码相关题",
      "补漏",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0070",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c016",
    "chapter": "结构体、共用体与枚举",
    "topic": "enum",
    "difficulty": "基础",
    "question": "关于这段代码的理解，哪项正确？\n请重点从「enum」的量产固件稳定性角度判断（样例组 16）。\nenum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;",
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
      "代码相关题",
      "错误诊断",
      "代码阅读"
    ],
    "knowledgeId": "kp_0071",
    "type": "code_read",
    "code": "enum State { IDLE = 0, BUSY = 3 };\nenum State s = BUSY;\nint raw = s;",
    "reviewStatus": "待复核"
  }
]

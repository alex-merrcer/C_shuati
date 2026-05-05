module.exports = [
  {
    "id": "c649",
    "chapter": "内存管理、对齐与字节序",
    "topic": "非对齐访问",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「非对齐访问」的生命周期角度判断（样例组 67）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "对齐",
      "内存访问",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0122",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c650",
    "chapter": "内存管理、对齐与字节序",
    "topic": "DMA缓冲区对齐",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「DMA缓冲区对齐」的可移植性角度判断（样例组 68）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "DMA",
      "对齐",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "协议字段解析",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0123",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c651",
    "chapter": "内存管理、对齐与字节序",
    "topic": "Cache Line对齐",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「Cache Line对齐」的中断安全角度判断（样例组 69）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "Cache",
      "DMA",
      "扩展题库",
      "代码相关题",
      "补漏",
      "嵌入式场景",
      "协议字段解析",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0124",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c652",
    "chapter": "内存管理、对齐与字节序",
    "topic": "大端模式",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「大端模式」的长期运行稳定性角度判断（样例组 70）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "大端",
      "字节序",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0125",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c653",
    "chapter": "内存管理、对齐与字节序",
    "topic": "小端模式",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「小端模式」的接口契约角度判断（样例组 71）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "小端",
      "字节序",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "协议字段解析",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0126",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c654",
    "chapter": "内存管理、对齐与字节序",
    "topic": "网络字节序",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「网络字节序」的单元测试覆盖角度判断（样例组 72）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "网络字节序",
      "协议",
      "扩展题库",
      "代码相关题",
      "补漏",
      "协议字段解析",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0127",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c655",
    "chapter": "内存管理、对齐与字节序",
    "topic": "packed副作用",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「packed副作用」的代码评审角度判断（样例组 73）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "knowledgeId": "kp_0128",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c656",
    "chapter": "内存管理、对齐与字节序",
    "topic": "非对齐访问",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「非对齐访问」的内存破坏定位角度判断（样例组 74）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "对齐",
      "内存访问",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "协议字段解析",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0122",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c657",
    "chapter": "内存管理、对齐与字节序",
    "topic": "DMA缓冲区对齐",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「DMA缓冲区对齐」的寄存器副作用角度判断（样例组 75）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "DMA",
      "对齐",
      "扩展题库",
      "代码相关题",
      "补漏",
      "协议字段解析",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0123",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c658",
    "chapter": "内存管理、对齐与字节序",
    "topic": "Cache Line对齐",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「Cache Line对齐」的编译优化影响角度判断（样例组 76）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "Cache",
      "DMA",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0124",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c659",
    "chapter": "内存管理、对齐与字节序",
    "topic": "大端模式",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「大端模式」的资源受限 MCU角度判断（样例组 77）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "大端",
      "字节序",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "协议字段解析",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0125",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c660",
    "chapter": "内存管理、对齐与字节序",
    "topic": "小端模式",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「小端模式」的面试追问角度判断（样例组 78）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "小端",
      "字节序",
      "扩展题库",
      "代码相关题",
      "补漏",
      "interview",
      "协议字段解析",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0126",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c661",
    "chapter": "内存管理、对齐与字节序",
    "topic": "网络字节序",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「网络字节序」的调试复盘角度判断（样例组 79）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "网络字节序",
      "协议",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0127",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c662",
    "chapter": "内存管理、对齐与字节序",
    "topic": "packed副作用",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「packed副作用」的量产固件稳定性角度判断（样例组 80）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "packed",
      "对齐",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "协议字段解析",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0128",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c663",
    "chapter": "内存管理、对齐与字节序",
    "topic": "非对齐访问",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「非对齐访问」的初始化顺序角度判断（样例组 81）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "对齐",
      "内存访问",
      "扩展题库",
      "代码相关题",
      "补漏",
      "协议字段解析",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0122",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c664",
    "chapter": "内存管理、对齐与字节序",
    "topic": "DMA缓冲区对齐",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「DMA缓冲区对齐」的边界条件角度判断（样例组 82）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "DMA",
      "对齐",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0123",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c665",
    "chapter": "内存管理、对齐与字节序",
    "topic": "Cache Line对齐",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「Cache Line对齐」的失败路径角度判断（样例组 83）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "Cache",
      "DMA",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "协议字段解析",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0124",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c666",
    "chapter": "内存管理、对齐与字节序",
    "topic": "大端模式",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「大端模式」的生命周期角度判断（样例组 84）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "大端",
      "字节序",
      "扩展题库",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "协议字段解析",
      "错误诊断"
    ],
    "knowledgeId": "kp_0125",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c667",
    "chapter": "内存管理、对齐与字节序",
    "topic": "小端模式",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「小端模式」的可移植性角度判断（样例组 85）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "小端",
      "字节序",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0126",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c668",
    "chapter": "内存管理、对齐与字节序",
    "topic": "网络字节序",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「网络字节序」的中断安全角度判断（样例组 86）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "网络字节序",
      "协议",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "协议字段解析",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0127",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c669",
    "chapter": "内存管理、对齐与字节序",
    "topic": "packed副作用",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「packed副作用」的长期运行稳定性角度判断（样例组 87）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "packed",
      "对齐",
      "扩展题库",
      "代码相关题",
      "补漏",
      "协议字段解析",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0128",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c670",
    "chapter": "内存管理、对齐与字节序",
    "topic": "非对齐访问",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「非对齐访问」的接口契约角度判断（样例组 88）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "对齐",
      "内存访问",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0122",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c671",
    "chapter": "内存管理、对齐与字节序",
    "topic": "DMA缓冲区对齐",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「DMA缓冲区对齐」的单元测试覆盖角度判断（样例组 89）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "DMA",
      "对齐",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "协议字段解析",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0123",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c672",
    "chapter": "内存管理、对齐与字节序",
    "topic": "Cache Line对齐",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「Cache Line对齐」的代码评审角度判断（样例组 90）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "Cache",
      "DMA",
      "扩展题库",
      "代码相关题",
      "补漏",
      "协议字段解析",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0124",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c673",
    "chapter": "内存管理、对齐与字节序",
    "topic": "大端模式",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「大端模式」的内存破坏定位角度判断（样例组 91）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "大端",
      "字节序",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0125",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c674",
    "chapter": "内存管理、对齐与字节序",
    "topic": "小端模式",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「小端模式」的寄存器副作用角度判断（样例组 92）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "小端",
      "字节序",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "协议字段解析",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0126",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c675",
    "chapter": "内存管理、对齐与字节序",
    "topic": "网络字节序",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「网络字节序」的编译优化影响角度判断（样例组 93）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "网络字节序",
      "协议",
      "扩展题库",
      "代码相关题",
      "补漏",
      "协议字段解析",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0127",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c676",
    "chapter": "内存管理、对齐与字节序",
    "topic": "packed副作用",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「packed副作用」的资源受限 MCU角度判断（样例组 94）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "knowledgeId": "kp_0128",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c677",
    "chapter": "内存管理、对齐与字节序",
    "topic": "非对齐访问",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「非对齐访问」的面试追问角度判断（样例组 95）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "对齐",
      "内存访问",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "interview",
      "协议字段解析",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0122",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c678",
    "chapter": "内存管理、对齐与字节序",
    "topic": "DMA缓冲区对齐",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「DMA缓冲区对齐」的调试复盘角度判断（样例组 96）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "DMA",
      "对齐",
      "扩展题库",
      "代码相关题",
      "补漏",
      "协议字段解析",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0123",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c679",
    "chapter": "内存管理、对齐与字节序",
    "topic": "Cache Line对齐",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「Cache Line对齐」的量产固件稳定性角度判断（样例组 0）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "Cache",
      "DMA",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0124",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c680",
    "chapter": "内存管理、对齐与字节序",
    "topic": "大端模式",
    "difficulty": "面试",
    "question": "这段代码的主要问题是什么？\n请重点从「大端模式」的初始化顺序角度判断（样例组 1）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "大端",
      "字节序",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "协议字段解析",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0125",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c681",
    "chapter": "内存管理、对齐与字节序",
    "topic": "小端模式",
    "difficulty": "基础",
    "question": "这段代码的主要问题是什么？\n请重点从「小端模式」的边界条件角度判断（样例组 2）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "小端",
      "字节序",
      "扩展题库",
      "代码相关题",
      "补漏",
      "协议字段解析",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0126",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c682",
    "chapter": "内存管理、对齐与字节序",
    "topic": "网络字节序",
    "difficulty": "进阶",
    "question": "这段代码的主要问题是什么？\n请重点从「网络字节序」的失败路径角度判断（样例组 3）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "网络字节序",
      "协议",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配",
      "协议字段解析"
    ],
    "knowledgeId": "kp_0127",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  },
  {
    "id": "c683",
    "chapter": "内存管理、对齐与字节序",
    "topic": "packed副作用",
    "difficulty": "易错",
    "question": "这段代码的主要问题是什么？\n请重点从「packed副作用」的生命周期角度判断（样例组 4）。\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。类型转换不能改变存储期。 同时要把“自动存储期、静态存储期、局部变量分配、协议字段解析”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "knowledgeId": "kp_0128",
    "type": "bug_fix",
    "code": "char *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "reviewStatus": "待复核"
  }
]

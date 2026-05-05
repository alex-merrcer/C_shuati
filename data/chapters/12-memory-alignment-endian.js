module.exports = [
  {
    "id": "c649",
    "chapter": "内存管理、对齐与字节序",
    "topic": "非对齐访问",
    "difficulty": "基础",
    "question": "在串口接收缓冲区中看到下面这段和「非对齐访问」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到串口接收缓冲区里，重点看首次调用时长度单位是字节还是字符。",
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
    "question": "在串口接收缓冲区中看到下面这段和「DMA缓冲区对齐」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到命令行参数复制里，重点看首次调用时长度单位是字节还是字符。",
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
    "question": "在串口接收缓冲区中看到下面这段和「Cache Line对齐」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到AT 指令解析里，重点看首次调用时长度单位是字节还是字符。",
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
    "question": "在串口接收缓冲区中看到下面这段和「大端模式」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到配置项读取里，重点看首次调用时长度单位是字节还是字符。",
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
    "question": "在串口接收缓冲区中看到下面这段和「小端模式」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到日志前缀拼接里，重点看首次调用时长度单位是字节还是字符。",
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
    "question": "在串口接收缓冲区中看到下面这段和「网络字节序」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到协议字段转字符串里，重点看首次调用时长度单位是字节还是字符。",
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
    "question": "在串口接收缓冲区中看到下面这段和「packed副作用」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n    char name[16] = \"sensor\";\n    return name;\n}",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到设备名保存里，重点看首次调用时长度单位是字节还是字符。",
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
    "question": "在串口接收缓冲区中看到下面这段和「非对齐访问」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到命令行参数复制里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到Bootloader 命令解析里，重点看首次调用时长度单位是字节还是字符。",
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
    "question": "在串口接收缓冲区中看到下面这段和「DMA缓冲区对齐」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到命令行参数复制里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到串口接收缓冲区里，重点看连续调用两次时输入长度刚好等于目标容量。",
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
    "question": "在串口接收缓冲区中看到下面这段和「Cache Line对齐」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到命令行参数复制里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到命令行参数复制里，重点看连续调用两次时输入长度刚好等于目标容量。",
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
    "question": "在串口接收缓冲区中看到下面这段和「大端模式」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到命令行参数复制里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到AT 指令解析里，重点看连续调用两次时输入长度刚好等于目标容量。",
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
    "question": "在串口接收缓冲区中看到下面这段和「小端模式」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到命令行参数复制里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到配置项读取里，重点看连续调用两次时输入长度刚好等于目标容量。",
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
    "question": "在串口接收缓冲区中看到下面这段和「网络字节序」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到命令行参数复制里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到日志前缀拼接里，重点看连续调用两次时输入长度刚好等于目标容量。",
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
    "question": "在串口接收缓冲区中看到下面这段和「packed副作用」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到命令行参数复制里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到协议字段转字符串里，重点看连续调用两次时输入长度刚好等于目标容量。",
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
    "question": "在串口接收缓冲区中看到下面这段和「非对齐访问」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到AT 指令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到设备名保存里，重点看连续调用两次时输入长度刚好等于目标容量。",
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
    "question": "在串口接收缓冲区中看到下面这段和「DMA缓冲区对齐」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到AT 指令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到Bootloader 命令解析里，重点看连续调用两次时输入长度刚好等于目标容量。",
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
    "question": "在串口接收缓冲区中看到下面这段和「Cache Line对齐」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到AT 指令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到串口接收缓冲区里，重点看连续调用两次时源数据没有结尾 0。",
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
    "question": "在串口接收缓冲区中看到下面这段和「大端模式」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到AT 指令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到命令行参数复制里，重点看连续调用两次时源数据没有结尾 0。",
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
    "question": "在串口接收缓冲区中看到下面这段和「小端模式」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到AT 指令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到AT 指令解析里，重点看连续调用两次时源数据没有结尾 0。",
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
    "question": "在串口接收缓冲区中看到下面这段和「网络字节序」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到AT 指令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到配置项读取里，重点看连续调用两次时源数据没有结尾 0。",
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
    "question": "在串口接收缓冲区中看到下面这段和「packed副作用」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到AT 指令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到日志前缀拼接里，重点看连续调用两次时源数据没有结尾 0。",
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
    "question": "在串口接收缓冲区中看到下面这段和「非对齐访问」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到配置项读取里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到协议字段转字符串里，重点看连续调用两次时源数据没有结尾 0。",
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
    "question": "在串口接收缓冲区中看到下面这段和「DMA缓冲区对齐」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到配置项读取里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到设备名保存里，重点看连续调用两次时源数据没有结尾 0。",
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
    "question": "在串口接收缓冲区中看到下面这段和「Cache Line对齐」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到配置项读取里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到Bootloader 命令解析里，重点看连续调用两次时源数据没有结尾 0。",
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
    "question": "在串口接收缓冲区中看到下面这段和「大端模式」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到配置项读取里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到串口接收缓冲区里，重点看连续调用两次时源指针为 NULL。",
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
    "question": "在串口接收缓冲区中看到下面这段和「小端模式」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到配置项读取里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到命令行参数复制里，重点看连续调用两次时源指针为 NULL。",
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
    "question": "在串口接收缓冲区中看到下面这段和「网络字节序」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到配置项读取里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到AT 指令解析里，重点看连续调用两次时源指针为 NULL。",
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
    "question": "在串口接收缓冲区中看到下面这段和「packed副作用」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到配置项读取里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到配置项读取里，重点看连续调用两次时源指针为 NULL。",
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
    "question": "在串口接收缓冲区中看到下面这段和「非对齐访问」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到日志前缀拼接里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到日志前缀拼接里，重点看连续调用两次时源指针为 NULL。",
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
    "question": "在串口接收缓冲区中看到下面这段和「DMA缓冲区对齐」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到日志前缀拼接里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到协议字段转字符串里，重点看连续调用两次时源指针为 NULL。",
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
    "question": "在串口接收缓冲区中看到下面这段和「Cache Line对齐」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到日志前缀拼接里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到设备名保存里，重点看连续调用两次时源指针为 NULL。",
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
    "question": "在串口接收缓冲区中看到下面这段和「大端模式」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到日志前缀拼接里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 0,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到Bootloader 命令解析里，重点看连续调用两次时源指针为 NULL。",
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
    "question": "在串口接收缓冲区中看到下面这段和「小端模式」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到日志前缀拼接里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 1,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到串口接收缓冲区里，重点看连续调用两次时目标数组只剩一个字节。",
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
    "question": "在串口接收缓冲区中看到下面这段和「网络字节序」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到日志前缀拼接里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针",
      "把返回类型改成 void * 就能延长 name 生命周期"
    ],
    "answer": 2,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到命令行参数复制里，重点看连续调用两次时目标数组只剩一个字节。",
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
    "question": "在串口接收缓冲区中看到下面这段和「packed副作用」有关的代码，最主要的风险是什么？\nchar *make_name(void) {\n char name[16] = \"sensor\";\n return name;\n}\n请把它放到日志前缀拼接里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "字符串 sensor 太短，必须填满 16 字节",
      "局部数组会自动搬到堆上，所以返回地址安全",
      "把返回类型改成 void * 就能延长 name 生命周期",
      "返回了局部自动数组的地址，函数返回后该地址变成悬空指针"
    ],
    "answer": 3,
    "explanation": "局部自动对象在函数返回后生命周期结束。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 类型转换不能改变存储期。\n补测时把代码放到AT 指令解析里，重点看连续调用两次时目标数组只剩一个字节。",
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

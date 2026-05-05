module.exports = [
  {
    "id": "c006",
    "chapter": "指针体系",
    "topic": "指针基础",
    "difficulty": "基础",
    "question": "在驱动初始化失败路径中看到下面这段和「指针基础」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);",
    "options": [
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 2,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到命令解析返回对象里，重点看首次调用时失败路径是否仍然解引用。",
    "tags": [
      "指针",
      "声明",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0029",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c007",
    "chapter": "指针体系",
    "topic": "NULL 指针",
    "difficulty": "基础",
    "question": "这段「NULL 指针」代码还少一个关键保护，应该先补哪一步？\nuint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "options": [
      "把 buf 强制转换为 void *，这样所有平台都能安全访问",
      "先调用 free(buf)，避免后续处理函数泄漏内存",
      "把 32 改成 sizeof(buf)，就能得到 DMA 缓冲区容量",
      "在使用 buf 前检查它是否为 NULL，并确认返回缓冲区生命周期仍然有效"
    ],
    "answer": 3,
    "explanation": "指针接口题要同时看空指针、生命周期和容量。 这段代码缺的不是语法，而是要补上：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 正确选项补齐调用前置条件；sizeof(buf) 只会得到指针大小，free 会制造悬空指针。\n补测时把代码放到驱动初始化失败路径里，重点看首次调用时局部对象地址是否逃逸。",
    "tags": [
      "NULL",
      "空指针",
      "代码相关题",
      "补漏",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0030",
    "type": "missing_step",
    "code": "uint8_t *buf = get_dma_buffer();\nprocess_packet(buf, 32);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c008",
    "chapter": "指针体系",
    "topic": "野指针",
    "difficulty": "易错",
    "question": "在驱动初始化失败路径中看到下面这段和「野指针」有关的代码，最主要的风险是什么？\nint *p;\n*p = 10;\nuse_value(*p);\n请把它放到驱动初始化失败路径里判断，尤其看首次调用时NULL 路径是否提前返回。",
    "options": [
      "p 是未初始化指针，解引用会访问不确定地址，属于未定义行为",
      "p 会自动指向一个值为 0 的 int 对象",
      "只要后面马上写入 *p，未初始化指针就是安全的",
      "把 p 声明成 static 才是唯一正确修复方式"
    ],
    "answer": 0,
    "explanation": "正确选项指出指针必须先指向合法对象或置为 NULL。 真正会出问题的是：指针先指向合法对象，再解引用；失败路径不能继续把无效地址当对象用。 干扰项错在把“声明了指针”和“拥有可写对象”混为一谈。\n补测时把代码放到传感器数据指针更新里，重点看首次调用时失败路径是否仍然解引用。",
    "tags": [
      "野指针",
      "free",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0016",
    "type": "bug_fix",
    "code": "int *p;\n*p = 10;\nuse_value(*p);",
    "reviewStatus": "待复核"
  }
]

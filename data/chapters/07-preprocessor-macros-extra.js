module.exports = [
  {
    "id": "c474",
    "chapter": "预处理与宏",
    "topic": "宏括号保护",
    "difficulty": "基础",
    "question": "在头文件宏接口审查中看到下面这段和「宏括号保护」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 2,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到头文件宏接口审查里，重点看首次调用时宏体是否加足括号。",
    "tags": [
      "宏",
      "括号",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0081",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c475",
    "chapter": "预处理与宏",
    "topic": "宏副作用",
    "difficulty": "进阶",
    "question": "在头文件宏接口审查中看到下面这段和「宏副作用」有关的代码，最主要的风险是什么？\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint i = 1;\nint m = MAX(i++, 3);",
    "options": [
      "三目运算符不能出现在宏中",
      "i++ 作为实参时不会发生自增",
      "MAX 宏会自动转换成 inline 函数",
      "宏参数 i++ 可能被求值多次，产生副作用问题"
    ],
    "answer": 3,
    "explanation": "宏参数按文本展开，可能出现多次。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确选项指出副作用风险；预处理器不会自动生成临时变量。",
    "tags": [
      "宏",
      "副作用",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0082",
    "type": "bug_fix",
    "code": "#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint i = 1;\nint m = MAX(i++, 3);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c476",
    "chapter": "预处理与宏",
    "topic": "do while(0)宏",
    "difficulty": "易错",
    "question": "这段「do while(0)宏」代码还少一个关键保护，应该先补哪一步？\n#define SET_READY() ready = 1; log_ready()\n\nif (ok)\n    SET_READY();\nelse\n    recover();",
    "options": [
      "用 do { ... } while (0) 包装宏体，让它像一条语句一样使用",
      "删除 else 分支，避免语法冲突",
      "把宏名改成小写，预处理器就会自动保护",
      "把 ready 声明为 volatile 就能修复 if/else 绑定问题"
    ],
    "answer": 0,
    "explanation": "多语句宏常用 do { ... } while (0) 处理悬挂 else 和语句边界。 这段代码缺的不是语法，而是要补上：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 volatile 解决不了文本展开问题。",
    "tags": [
      "宏",
      "do while",
      "扩展题库",
      "代码相关题",
      "补漏"
    ],
    "knowledgeId": "kp_0083",
    "type": "missing_step",
    "code": "#define SET_READY() ready = 1; log_ready()\n\nif (ok)\n    SET_READY();\nelse\n    recover();",
    "reviewStatus": "待复核"
  },
  {
    "id": "c477",
    "chapter": "预处理与宏",
    "topic": "字符串化#",
    "difficulty": "面试",
    "question": "在串口接收缓冲区中看到下面这段和「字符串化#」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 正确写法通常是 #define SQUARE(x) ((x) * (x))。",
    "tags": [
      "宏",
      "字符串化",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0084",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c478",
    "chapter": "预处理与宏",
    "topic": "连接符##",
    "difficulty": "基础",
    "question": "在头文件宏接口审查中看到下面这段和「连接符##」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 2,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到寄存器位操作宏里，重点看首次调用时宏体是否加足括号。",
    "tags": [
      "宏",
      "连接符",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0085",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c479",
    "chapter": "预处理与宏",
    "topic": "include guard",
    "difficulty": "进阶",
    "question": "在头文件宏接口审查中看到下面这段和「include guard」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到日志宏展开里，重点看首次调用时宏体是否加足括号。",
    "tags": [
      "头文件",
      "include guard",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断",
      "#ifdef",
      "#ifndef",
      "#endif",
      "功能裁剪",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0086",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c480",
    "chapter": "预处理与宏",
    "topic": "条件编译",
    "difficulty": "易错",
    "question": "在头文件宏接口审查中看到下面这段和「条件编译」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 0,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到条件编译开关里，重点看首次调用时宏体是否加足括号。",
    "tags": [
      "条件编译",
      "平台",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "#ifdef",
      "#ifndef",
      "#endif",
      "功能裁剪"
    ],
    "knowledgeId": "kp_0087",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c481",
    "chapter": "预处理与宏",
    "topic": "宏括号保护",
    "difficulty": "面试",
    "question": "在头文件宏接口审查中看到下面这段和「宏括号保护」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到寄存器位操作宏里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到断言宏封装里，重点看首次调用时宏体是否加足括号。",
    "tags": [
      "宏",
      "括号",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0081",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c482",
    "chapter": "预处理与宏",
    "topic": "宏副作用",
    "difficulty": "基础",
    "question": "在头文件宏接口审查中看到下面这段和「宏副作用」有关的代码，最主要的风险是什么？\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint i = 1;\nint m = MAX(i++, 3);\n请把它放到寄存器位操作宏里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "三目运算符不能出现在宏中",
      "i++ 作为实参时不会发生自增",
      "宏参数 i++ 可能被求值多次，产生副作用问题",
      "MAX 宏会自动转换成 inline 函数"
    ],
    "answer": 2,
    "explanation": "宏参数按文本展开，可能出现多次。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确选项指出副作用风险；预处理器不会自动生成临时变量。\n补测时把代码放到寄存器位操作宏里，重点看首次调用时实参是否被求值多次。",
    "tags": [
      "宏",
      "副作用",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断"
    ],
    "knowledgeId": "kp_0082",
    "type": "bug_fix",
    "code": "#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint i = 1;\nint m = MAX(i++, 3);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c483",
    "chapter": "预处理与宏",
    "topic": "do while(0)宏",
    "difficulty": "进阶",
    "question": "这段「do while(0)宏」代码还少一个关键保护，应该先补哪一步？\n#define SET_READY() ready = 1; log_ready()\n\nif (ok)\n SET_READY();\nelse\n recover();\n请把它放到寄存器位操作宏里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "删除 else 分支，避免语法冲突",
      "把宏名改成小写，预处理器就会自动保护",
      "把 ready 声明为 volatile 就能修复 if/else 绑定问题",
      "用 do { ... } while (0) 包装宏体，让它像一条语句一样使用"
    ],
    "answer": 3,
    "explanation": "多语句宏常用 do { ... } while (0) 处理悬挂 else 和语句边界。 这段代码缺的不是语法，而是要补上：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 volatile 解决不了文本展开问题。\n补测时把代码放到寄存器位操作宏里，重点看首次调用时实参是否被求值多次。",
    "tags": [
      "宏",
      "do while",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0083",
    "type": "missing_step",
    "code": "#define SET_READY() ready = 1; log_ready()\n\nif (ok)\n    SET_READY();\nelse\n    recover();",
    "reviewStatus": "待复核"
  },
  {
    "id": "c484",
    "chapter": "预处理与宏",
    "topic": "字符串化#",
    "difficulty": "易错",
    "question": "在串口接收缓冲区中看到下面这段和「字符串化#」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到命令行参数复制里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 0,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到命令行参数复制里，重点看首次调用时输入长度刚好等于目标容量。",
    "tags": [
      "宏",
      "字符串化",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0084",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c485",
    "chapter": "预处理与宏",
    "topic": "连接符##",
    "difficulty": "面试",
    "question": "在头文件宏接口审查中看到下面这段和「连接符##」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到寄存器位操作宏里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到多语句宏放进 if里，重点看首次调用时宏体是否加足括号。",
    "tags": [
      "宏",
      "连接符",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断"
    ],
    "knowledgeId": "kp_0085",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c486",
    "chapter": "预处理与宏",
    "topic": "include guard",
    "difficulty": "基础",
    "question": "在头文件宏接口审查中看到下面这段和「include guard」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到寄存器位操作宏里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 2,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到宏参数带自增里，重点看首次调用时宏体是否加足括号。",
    "tags": [
      "头文件",
      "include guard",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏",
      "#ifdef",
      "#ifndef",
      "#endif",
      "功能裁剪"
    ],
    "knowledgeId": "kp_0086",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c487",
    "chapter": "预处理与宏",
    "topic": "条件编译",
    "difficulty": "进阶",
    "question": "在头文件宏接口审查中看到下面这段和「条件编译」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到寄存器位操作宏里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到跨模块公共宏维护里，重点看首次调用时宏体是否加足括号。",
    "tags": [
      "条件编译",
      "平台",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "#ifdef",
      "#ifndef",
      "#endif",
      "功能裁剪"
    ],
    "knowledgeId": "kp_0087",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c488",
    "chapter": "预处理与宏",
    "topic": "宏括号保护",
    "difficulty": "易错",
    "question": "在头文件宏接口审查中看到下面这段和「宏括号保护」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到日志宏展开里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 0,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到头文件宏接口审查里，重点看首次调用时多语句宏是否用 do while 包裹。",
    "tags": [
      "宏",
      "括号",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断"
    ],
    "knowledgeId": "kp_0081",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c489",
    "chapter": "预处理与宏",
    "topic": "宏副作用",
    "difficulty": "面试",
    "question": "在头文件宏接口审查中看到下面这段和「宏副作用」有关的代码，最主要的风险是什么？\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint i = 1;\nint m = MAX(i++, 3);\n请把它放到日志宏展开里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "三目运算符不能出现在宏中",
      "宏参数 i++ 可能被求值多次，产生副作用问题",
      "i++ 作为实参时不会发生自增",
      "MAX 宏会自动转换成 inline 函数"
    ],
    "answer": 1,
    "explanation": "宏参数按文本展开，可能出现多次。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确选项指出副作用风险；预处理器不会自动生成临时变量。\n补测时把代码放到日志宏展开里，重点看首次调用时实参是否被求值多次。",
    "tags": [
      "宏",
      "副作用",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0082",
    "type": "bug_fix",
    "code": "#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint i = 1;\nint m = MAX(i++, 3);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c490",
    "chapter": "预处理与宏",
    "topic": "do while(0)宏",
    "difficulty": "基础",
    "question": "这段「do while(0)宏」代码还少一个关键保护，应该先补哪一步？\n#define SET_READY() ready = 1; log_ready()\n\nif (ok)\n SET_READY();\nelse\n recover();\n请把它放到日志宏展开里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "删除 else 分支，避免语法冲突",
      "把宏名改成小写，预处理器就会自动保护",
      "用 do { ... } while (0) 包装宏体，让它像一条语句一样使用",
      "把 ready 声明为 volatile 就能修复 if/else 绑定问题"
    ],
    "answer": 2,
    "explanation": "多语句宏常用 do { ... } while (0) 处理悬挂 else 和语句边界。 这段代码缺的不是语法，而是要补上：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 volatile 解决不了文本展开问题。\n补测时把代码放到日志宏展开里，重点看首次调用时实参是否被求值多次。",
    "tags": [
      "宏",
      "do while",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏",
      "interview"
    ],
    "knowledgeId": "kp_0083",
    "type": "missing_step",
    "code": "#define SET_READY() ready = 1; log_ready()\n\nif (ok)\n    SET_READY();\nelse\n    recover();",
    "reviewStatus": "待复核"
  },
  {
    "id": "c491",
    "chapter": "预处理与宏",
    "topic": "字符串化#",
    "difficulty": "进阶",
    "question": "在串口接收缓冲区中看到下面这段和「字符串化#」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到AT 指令解析里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到AT 指令解析里，重点看首次调用时输入长度刚好等于目标容量。",
    "tags": [
      "宏",
      "字符串化",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断"
    ],
    "knowledgeId": "kp_0084",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c492",
    "chapter": "预处理与宏",
    "topic": "连接符##",
    "difficulty": "易错",
    "question": "在头文件宏接口审查中看到下面这段和「连接符##」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到日志宏展开里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 0,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到寄存器位操作宏里，重点看首次调用时多语句宏是否用 do while 包裹。",
    "tags": [
      "宏",
      "连接符",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0085",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c493",
    "chapter": "预处理与宏",
    "topic": "include guard",
    "difficulty": "面试",
    "question": "在头文件宏接口审查中看到下面这段和「include guard」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到日志宏展开里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到日志宏展开里，重点看首次调用时多语句宏是否用 do while 包裹。",
    "tags": [
      "头文件",
      "include guard",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "#ifdef",
      "#ifndef",
      "#endif",
      "功能裁剪"
    ],
    "knowledgeId": "kp_0086",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c494",
    "chapter": "预处理与宏",
    "topic": "条件编译",
    "difficulty": "基础",
    "question": "在头文件宏接口审查中看到下面这段和「条件编译」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到日志宏展开里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 2,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到条件编译开关里，重点看首次调用时多语句宏是否用 do while 包裹。",
    "tags": [
      "条件编译",
      "平台",
      "扩展题库",
      "代码相关题",
      "补漏",
      "#ifdef",
      "#ifndef",
      "#endif",
      "功能裁剪",
      "错误诊断"
    ],
    "knowledgeId": "kp_0087",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c495",
    "chapter": "预处理与宏",
    "topic": "宏括号保护",
    "difficulty": "进阶",
    "question": "在头文件宏接口审查中看到下面这段和「宏括号保护」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到条件编译开关里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到断言宏封装里，重点看首次调用时多语句宏是否用 do while 包裹。",
    "tags": [
      "宏",
      "括号",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0081",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c496",
    "chapter": "预处理与宏",
    "topic": "宏副作用",
    "difficulty": "易错",
    "question": "在头文件宏接口审查中看到下面这段和「宏副作用」有关的代码，最主要的风险是什么？\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint i = 1;\nint m = MAX(i++, 3);\n请把它放到条件编译开关里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "宏参数 i++ 可能被求值多次，产生副作用问题",
      "三目运算符不能出现在宏中",
      "i++ 作为实参时不会发生自增",
      "MAX 宏会自动转换成 inline 函数"
    ],
    "answer": 0,
    "explanation": "宏参数按文本展开，可能出现多次。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确选项指出副作用风险；预处理器不会自动生成临时变量。\n补测时把代码放到条件编译开关里，重点看首次调用时实参是否被求值多次。",
    "tags": [
      "宏",
      "副作用",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0082",
    "type": "bug_fix",
    "code": "#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint i = 1;\nint m = MAX(i++, 3);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c497",
    "chapter": "预处理与宏",
    "topic": "do while(0)宏",
    "difficulty": "面试",
    "question": "这段「do while(0)宏」代码还少一个关键保护，应该先补哪一步？\n#define SET_READY() ready = 1; log_ready()\n\nif (ok)\n SET_READY();\nelse\n recover();\n请把它放到条件编译开关里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "删除 else 分支，避免语法冲突",
      "用 do { ... } while (0) 包装宏体，让它像一条语句一样使用",
      "把宏名改成小写，预处理器就会自动保护",
      "把 ready 声明为 volatile 就能修复 if/else 绑定问题"
    ],
    "answer": 1,
    "explanation": "多语句宏常用 do { ... } while (0) 处理悬挂 else 和语句边界。 这段代码缺的不是语法，而是要补上：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 volatile 解决不了文本展开问题。\n补测时把代码放到条件编译开关里，重点看首次调用时实参是否被求值多次。",
    "tags": [
      "宏",
      "do while",
      "扩展题库",
      "代码相关题",
      "补漏"
    ],
    "knowledgeId": "kp_0083",
    "type": "missing_step",
    "code": "#define SET_READY() ready = 1; log_ready()\n\nif (ok)\n    SET_READY();\nelse\n    recover();",
    "reviewStatus": "待复核"
  },
  {
    "id": "c498",
    "chapter": "预处理与宏",
    "topic": "字符串化#",
    "difficulty": "基础",
    "question": "在串口接收缓冲区中看到下面这段和「字符串化#」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到配置项读取里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 2,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到配置项读取里，重点看首次调用时输入长度刚好等于目标容量。",
    "tags": [
      "宏",
      "字符串化",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "嵌入式场景"
    ],
    "knowledgeId": "kp_0084",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c499",
    "chapter": "预处理与宏",
    "topic": "连接符##",
    "difficulty": "进阶",
    "question": "在头文件宏接口审查中看到下面这段和「连接符##」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到条件编译开关里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到多语句宏放进 if里，重点看首次调用时多语句宏是否用 do while 包裹。",
    "tags": [
      "宏",
      "连接符",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0085",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c500",
    "chapter": "预处理与宏",
    "topic": "include guard",
    "difficulty": "易错",
    "question": "在头文件宏接口审查中看到下面这段和「include guard」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到条件编译开关里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 0,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到宏参数带自增里，重点看首次调用时多语句宏是否用 do while 包裹。",
    "tags": [
      "头文件",
      "include guard",
      "扩展题库",
      "代码相关题",
      "补漏",
      "#ifdef",
      "#ifndef",
      "#endif",
      "功能裁剪",
      "错误诊断"
    ],
    "knowledgeId": "kp_0086",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c501",
    "chapter": "预处理与宏",
    "topic": "条件编译",
    "difficulty": "面试",
    "question": "在头文件宏接口审查中看到下面这段和「条件编译」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到条件编译开关里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到跨模块公共宏维护里，重点看首次调用时多语句宏是否用 do while 包裹。",
    "tags": [
      "条件编译",
      "平台",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "#ifdef",
      "#ifndef",
      "#endif",
      "功能裁剪"
    ],
    "knowledgeId": "kp_0087",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c502",
    "chapter": "预处理与宏",
    "topic": "宏括号保护",
    "difficulty": "基础",
    "question": "在头文件宏接口审查中看到下面这段和「宏括号保护」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到断言宏封装里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 2,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到头文件宏接口审查里，重点看首次调用时优先级是否改变结果。",
    "tags": [
      "宏",
      "括号",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0081",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c503",
    "chapter": "预处理与宏",
    "topic": "宏副作用",
    "difficulty": "进阶",
    "question": "在头文件宏接口审查中看到下面这段和「宏副作用」有关的代码，最主要的风险是什么？\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint i = 1;\nint m = MAX(i++, 3);\n请把它放到断言宏封装里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "三目运算符不能出现在宏中",
      "i++ 作为实参时不会发生自增",
      "MAX 宏会自动转换成 inline 函数",
      "宏参数 i++ 可能被求值多次，产生副作用问题"
    ],
    "answer": 3,
    "explanation": "宏参数按文本展开，可能出现多次。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确选项指出副作用风险；预处理器不会自动生成临时变量。\n补测时把代码放到断言宏封装里，重点看首次调用时实参是否被求值多次。",
    "tags": [
      "宏",
      "副作用",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断"
    ],
    "knowledgeId": "kp_0082",
    "type": "bug_fix",
    "code": "#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint i = 1;\nint m = MAX(i++, 3);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c504",
    "chapter": "预处理与宏",
    "topic": "do while(0)宏",
    "difficulty": "易错",
    "question": "这段「do while(0)宏」代码还少一个关键保护，应该先补哪一步？\n#define SET_READY() ready = 1; log_ready()\n\nif (ok)\n SET_READY();\nelse\n recover();\n请把它放到断言宏封装里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "用 do { ... } while (0) 包装宏体，让它像一条语句一样使用",
      "删除 else 分支，避免语法冲突",
      "把宏名改成小写，预处理器就会自动保护",
      "把 ready 声明为 volatile 就能修复 if/else 绑定问题"
    ],
    "answer": 0,
    "explanation": "多语句宏常用 do { ... } while (0) 处理悬挂 else 和语句边界。 这段代码缺的不是语法，而是要补上：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 volatile 解决不了文本展开问题。\n补测时把代码放到断言宏封装里，重点看首次调用时实参是否被求值多次。",
    "tags": [
      "宏",
      "do while",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "补漏"
    ],
    "knowledgeId": "kp_0083",
    "type": "missing_step",
    "code": "#define SET_READY() ready = 1; log_ready()\n\nif (ok)\n    SET_READY();\nelse\n    recover();",
    "reviewStatus": "待复核"
  },
  {
    "id": "c505",
    "chapter": "预处理与宏",
    "topic": "字符串化#",
    "difficulty": "面试",
    "question": "在串口接收缓冲区中看到下面这段和「字符串化#」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到日志前缀拼接里判断，尤其看首次调用时输入长度刚好等于目标容量。",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：目标缓冲区容量、结束符和源数据长度是否同时受控。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到日志前缀拼接里，重点看首次调用时输入长度刚好等于目标容量。",
    "tags": [
      "宏",
      "字符串化",
      "扩展题库",
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0084",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c506",
    "chapter": "预处理与宏",
    "topic": "连接符##",
    "difficulty": "基础",
    "question": "在头文件宏接口审查中看到下面这段和「连接符##」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到断言宏封装里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 2,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到寄存器位操作宏里，重点看首次调用时优先级是否改变结果。",
    "tags": [
      "宏",
      "连接符",
      "扩展题库",
      "代码相关题",
      "补漏",
      "错误诊断"
    ],
    "knowledgeId": "kp_0085",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c507",
    "chapter": "预处理与宏",
    "topic": "include guard",
    "difficulty": "进阶",
    "question": "在头文件宏接口审查中看到下面这段和「include guard」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到断言宏封装里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到日志宏展开里，重点看首次调用时优先级是否改变结果。",
    "tags": [
      "头文件",
      "include guard",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "interview",
      "#ifdef",
      "#ifndef",
      "#endif",
      "功能裁剪"
    ],
    "knowledgeId": "kp_0086",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c508",
    "chapter": "预处理与宏",
    "topic": "条件编译",
    "difficulty": "易错",
    "question": "在头文件宏接口审查中看到下面这段和「条件编译」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到断言宏封装里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 0,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到条件编译开关里，重点看首次调用时优先级是否改变结果。",
    "tags": [
      "条件编译",
      "平台",
      "扩展题库",
      "代码相关题",
      "错误诊断",
      "#ifdef",
      "#ifndef",
      "#endif",
      "功能裁剪"
    ],
    "knowledgeId": "kp_0087",
    "type": "bug_fix",
    "code": "#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "reviewStatus": "待复核"
  }
]

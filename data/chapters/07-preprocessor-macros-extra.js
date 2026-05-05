module.exports = [
  {
    "id": "c474",
    "chapter": "预处理与宏",
    "topic": "宏括号保护",
    "difficulty": "基础",
    "question": "下面宏的主要问题是什么？\n请重点从「宏括号保护」的调试复盘角度判断（样例组 86）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 2,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面代码的主要风险是什么？\n请重点从「宏副作用」的量产固件稳定性角度判断（样例组 87）。\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint i = 1;\nint m = MAX(i++, 3);",
    "options": [
      "三目运算符不能出现在宏中",
      "i++ 作为实参时不会发生自增",
      "MAX 宏会自动转换成 inline 函数",
      "宏参数 i++ 可能被求值多次，产生副作用问题"
    ],
    "answer": 3,
    "explanation": "宏参数按文本展开，可能出现多次。正确选项指出副作用风险；预处理器不会自动生成临时变量。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "这个多语句宏缺少哪种保护更合适？\n请重点从「do while(0)宏」的初始化顺序角度判断（样例组 88）。\n#define SET_READY() ready = 1; log_ready()\n\nif (ok)\n    SET_READY();\nelse\n    recover();",
    "options": [
      "用 do { ... } while (0) 包装宏体，让它像一条语句一样使用",
      "删除 else 分支，避免语法冲突",
      "把宏名改成小写，预处理器就会自动保护",
      "把 ready 声明为 volatile 就能修复 if/else 绑定问题"
    ],
    "answer": 0,
    "explanation": "多语句宏常用 do { ... } while (0) 处理悬挂 else 和语句边界。volatile 解决不了文本展开问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「字符串化#」的边界条件角度判断（样例组 89）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「连接符##」的失败路径角度判断（样例组 90）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 2,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「include guard」的生命周期角度判断（样例组 91）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 同时要把“#ifdef、#ifndef、#endif、功能裁剪、自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「条件编译」的可移植性角度判断（样例组 92）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 0,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 同时要把“#ifdef、#ifndef、#endif、功能裁剪”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「宏括号保护」的中断安全角度判断（样例组 93）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面代码的主要风险是什么？\n请重点从「宏副作用」的长期运行稳定性角度判断（样例组 94）。\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint i = 1;\nint m = MAX(i++, 3);",
    "options": [
      "三目运算符不能出现在宏中",
      "i++ 作为实参时不会发生自增",
      "宏参数 i++ 可能被求值多次，产生副作用问题",
      "MAX 宏会自动转换成 inline 函数"
    ],
    "answer": 2,
    "explanation": "宏参数按文本展开，可能出现多次。正确选项指出副作用风险；预处理器不会自动生成临时变量。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "这个多语句宏缺少哪种保护更合适？\n请重点从「do while(0)宏」的接口契约角度判断（样例组 95）。\n#define SET_READY() ready = 1; log_ready()\n\nif (ok)\n    SET_READY();\nelse\n    recover();",
    "options": [
      "删除 else 分支，避免语法冲突",
      "把宏名改成小写，预处理器就会自动保护",
      "把 ready 声明为 volatile 就能修复 if/else 绑定问题",
      "用 do { ... } while (0) 包装宏体，让它像一条语句一样使用"
    ],
    "answer": 3,
    "explanation": "多语句宏常用 do { ... } while (0) 处理悬挂 else 和语句边界。volatile 解决不了文本展开问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「字符串化#」的单元测试覆盖角度判断（样例组 96）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 0,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「连接符##」的代码评审角度判断（样例组 0）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「include guard」的内存破坏定位角度判断（样例组 1）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 2,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 同时要把“#ifdef、#ifndef、#endif、功能裁剪”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「条件编译」的寄存器副作用角度判断（样例组 2）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 同时要把“#ifdef、#ifndef、#endif、功能裁剪”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「宏括号保护」的编译优化影响角度判断（样例组 3）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 0,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面代码的主要风险是什么？\n请重点从「宏副作用」的资源受限 MCU角度判断（样例组 4）。\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint i = 1;\nint m = MAX(i++, 3);",
    "options": [
      "三目运算符不能出现在宏中",
      "宏参数 i++ 可能被求值多次，产生副作用问题",
      "i++ 作为实参时不会发生自增",
      "MAX 宏会自动转换成 inline 函数"
    ],
    "answer": 1,
    "explanation": "宏参数按文本展开，可能出现多次。正确选项指出副作用风险；预处理器不会自动生成临时变量。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "这个多语句宏缺少哪种保护更合适？\n请重点从「do while(0)宏」的面试追问角度判断（样例组 5）。\n#define SET_READY() ready = 1; log_ready()\n\nif (ok)\n    SET_READY();\nelse\n    recover();",
    "options": [
      "删除 else 分支，避免语法冲突",
      "把宏名改成小写，预处理器就会自动保护",
      "用 do { ... } while (0) 包装宏体，让它像一条语句一样使用",
      "把 ready 声明为 volatile 就能修复 if/else 绑定问题"
    ],
    "answer": 2,
    "explanation": "多语句宏常用 do { ... } while (0) 处理悬挂 else 和语句边界。volatile 解决不了文本展开问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「字符串化#」的调试复盘角度判断（样例组 6）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「连接符##」的量产固件稳定性角度判断（样例组 7）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 0,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「include guard」的初始化顺序角度判断（样例组 8）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 同时要把“#ifdef、#ifndef、#endif、功能裁剪”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「条件编译」的边界条件角度判断（样例组 9）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 2,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 同时要把“#ifdef、#ifndef、#endif、功能裁剪”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「宏括号保护」的失败路径角度判断（样例组 10）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面代码的主要风险是什么？\n请重点从「宏副作用」的生命周期角度判断（样例组 11）。\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint i = 1;\nint m = MAX(i++, 3);",
    "options": [
      "宏参数 i++ 可能被求值多次，产生副作用问题",
      "三目运算符不能出现在宏中",
      "i++ 作为实参时不会发生自增",
      "MAX 宏会自动转换成 inline 函数"
    ],
    "answer": 0,
    "explanation": "宏参数按文本展开，可能出现多次。正确选项指出副作用风险；预处理器不会自动生成临时变量。 同时要把“自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "这个多语句宏缺少哪种保护更合适？\n请重点从「do while(0)宏」的可移植性角度判断（样例组 12）。\n#define SET_READY() ready = 1; log_ready()\n\nif (ok)\n    SET_READY();\nelse\n    recover();",
    "options": [
      "删除 else 分支，避免语法冲突",
      "用 do { ... } while (0) 包装宏体，让它像一条语句一样使用",
      "把宏名改成小写，预处理器就会自动保护",
      "把 ready 声明为 volatile 就能修复 if/else 绑定问题"
    ],
    "answer": 1,
    "explanation": "多语句宏常用 do { ... } while (0) 处理悬挂 else 和语句边界。volatile 解决不了文本展开问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「字符串化#」的中断安全角度判断（样例组 13）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 2,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「连接符##」的长期运行稳定性角度判断（样例组 14）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「include guard」的接口契约角度判断（样例组 15）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 0,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 同时要把“#ifdef、#ifndef、#endif、功能裁剪”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「条件编译」的单元测试覆盖角度判断（样例组 16）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 同时要把“#ifdef、#ifndef、#endif、功能裁剪”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「宏括号保护」的代码评审角度判断（样例组 17）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 2,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面代码的主要风险是什么？\n请重点从「宏副作用」的内存破坏定位角度判断（样例组 18）。\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint i = 1;\nint m = MAX(i++, 3);",
    "options": [
      "三目运算符不能出现在宏中",
      "i++ 作为实参时不会发生自增",
      "MAX 宏会自动转换成 inline 函数",
      "宏参数 i++ 可能被求值多次，产生副作用问题"
    ],
    "answer": 3,
    "explanation": "宏参数按文本展开，可能出现多次。正确选项指出副作用风险；预处理器不会自动生成临时变量。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "这个多语句宏缺少哪种保护更合适？\n请重点从「do while(0)宏」的寄存器副作用角度判断（样例组 19）。\n#define SET_READY() ready = 1; log_ready()\n\nif (ok)\n    SET_READY();\nelse\n    recover();",
    "options": [
      "用 do { ... } while (0) 包装宏体，让它像一条语句一样使用",
      "删除 else 分支，避免语法冲突",
      "把宏名改成小写，预处理器就会自动保护",
      "把 ready 声明为 volatile 就能修复 if/else 绑定问题"
    ],
    "answer": 0,
    "explanation": "多语句宏常用 do { ... } while (0) 处理悬挂 else 和语句边界。volatile 解决不了文本展开问题。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「字符串化#」的编译优化影响角度判断（样例组 20）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 1,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「连接符##」的资源受限 MCU角度判断（样例组 21）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 2,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 审题时应同时看代码前置条件、边界输入、失败路径和平台假设；这些干扰项常把“能编译”误当成“语义安全”。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「include guard」的面试追问角度判断（样例组 22）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题",
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)"
    ],
    "answer": 3,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 同时要把“#ifdef、#ifndef、#endif、功能裁剪”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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
    "question": "下面宏的主要问题是什么？\n请重点从「条件编译」的调试复盘角度判断（样例组 23）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 0,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 同时要把“#ifdef、#ifndef、#endif、功能裁剪”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
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

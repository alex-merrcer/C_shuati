module.exports = [
  {
    "id": "c019",
    "chapter": "预处理与宏",
    "topic": "宏副作用",
    "difficulty": "易错",
    "question": "下面代码的主要风险是什么？\n请重点从「宏副作用」的失败路径角度判断（样例组 19）。\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint i = 1;\nint m = MAX(i++, 3);",
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
      "代码相关题",
      "错误诊断"
    ],
    "knowledgeId": "kp_0082",
    "type": "bug_fix",
    "code": "#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint i = 1;\nint m = MAX(i++, 3);",
    "reviewStatus": "待复核"
  },
  {
    "id": "c020",
    "chapter": "预处理与宏",
    "topic": "include guard",
    "difficulty": "基础",
    "question": "下面宏的主要问题是什么？\n请重点从「include guard」的生命周期角度判断（样例组 20）。\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);",
    "options": [
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 0,
    "explanation": "函数式宏是文本替换。正确写法通常是 #define SQUARE(x) ((x) * (x))。 同时要把“#ifdef、#ifndef、#endif、功能裁剪、自动存储期、静态存储期、局部变量分配”作为关联知识点复盘，避免只记住代码片段而漏掉知识树名称。",
    "tags": [
      "预处理",
      "头文件",
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
  }
]

module.exports = [
  {
    "id": "c019",
    "chapter": "预处理与宏",
    "topic": "宏副作用",
    "difficulty": "易错",
    "question": "在头文件宏接口审查中看到下面这段和「宏副作用」有关的代码，最主要的风险是什么？\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\nint i = 1;\nint m = MAX(i++, 3);\n请把它放到多语句宏放进 if里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "三目运算符不能出现在宏中",
      "i++ 作为实参时不会发生自增",
      "MAX 宏会自动转换成 inline 函数",
      "宏参数 i++ 可能被求值多次，产生副作用问题"
    ],
    "answer": 3,
    "explanation": "宏参数按文本展开，可能出现多次。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确选项指出副作用风险；预处理器不会自动生成临时变量。\n补测时把代码放到多语句宏放进 if里，重点看首次调用时实参是否被求值多次。",
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
    "question": "在头文件宏接口审查中看到下面这段和「include guard」有关的代码，最主要的风险是什么？\n#define SQUARE(x) x * x\nint y = SQUARE(1 + 2);\n请把它放到多语句宏放进 if里判断，尤其看首次调用时实参是否被求值多次。",
    "options": [
      "宏参数和整体表达式缺少括号，展开后不是期望的 (1 + 2) * (1 + 2)",
      "宏不能接收表达式作为参数",
      "SQUARE 会在运行时自动创建临时变量保护参数",
      "把 y 改成 unsigned 就能修复宏展开问题"
    ],
    "answer": 0,
    "explanation": "函数式宏是文本替换。 真正会出问题的是：宏展开后的真实表达式、参数副作用和语句边界是否仍正确。 正确写法通常是 #define SQUARE(x) ((x) * (x))。\n补测时把代码放到断言宏封装里，重点看首次调用时优先级是否改变结果。",
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

module.exports = [
  {
    "id": "c509",
    "chapter": "const、volatile、static、extern",
    "topic": "const对象",
    "difficulty": "基础",
    "question": "关于「const对象」，哪项说法更符合嵌入式 C 的稳妥写法？",
    "options": [
      "const 变量一定存放在 Flash",
      "const 表达只读意图，但不等同于所有场景都放入只读物理存储",
      "const 可以防止任何方式修改底层内存",
      "const 和宏完全等价"
    ],
    "answer": 1,
    "explanation": "是否进入 Flash 或 rodata 取决于对象属性、链接脚本和平台实现。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "const",
      "只读",
      "扩展题库"
    ]
  },
  {
    "id": "c510",
    "chapter": "const、volatile、static、extern",
    "topic": "const参数",
    "difficulty": "进阶",
    "question": "关于「const参数」，哪项说法更符合嵌入式 C 的稳妥写法？",
    "options": [
      "const 指针参数不能传数组",
      "const 会让函数自动更快",
      "指针参数若只读不写，使用指向 const 的指针能表达接口约束",
      "只要当前编译器能通过，就可以认为写法完全可移植"
    ],
    "answer": 2,
    "explanation": "例如 const uint8_t *buf 能告诉调用者函数不会通过该指针修改数据。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "const",
      "函数参数",
      "扩展题库"
    ]
  },
  {
    "id": "c511",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile变量",
    "difficulty": "易错",
    "question": "关于「volatile变量」，哪项说法更符合嵌入式 C 的稳妥写法？",
    "options": [
      "volatile 变量一定不会被中断打断",
      "只要当前编译器能通过，就可以认为写法完全可移植",
      "把所有警告关闭，可以避免这类问题影响程序运行",
      "volatile 用于提示对象可能被当前执行流之外改变，不能随意缓存或优化访问"
    ],
    "answer": 3,
    "explanation": "中断标志和硬件寄存器常见，但 volatile 不等于线程安全。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "volatile",
      "优化",
      "扩展题库"
    ]
  },
  {
    "id": "c512",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile中断共享变量",
    "difficulty": "面试",
    "question": "关于「volatile中断共享变量」，哪项说法更符合嵌入式 C 的稳妥写法？",
    "options": [
      "ISR 和主循环共享的标志位通常需要 volatile，并配合临界区处理复合访问",
      "只要当前编译器能通过，就可以认为写法完全可移植",
      "把所有警告关闭，可以避免这类问题影响程序运行",
      "依赖一次测试输出即可证明该写法在所有平台都正确"
    ],
    "answer": 0,
    "explanation": "volatile 解决可见性，临界区解决竞争窗口。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "volatile",
      "中断",
      "扩展题库"
    ]
  },
  {
    "id": "c513",
    "chapter": "const、volatile、static、extern",
    "topic": "static局部变量",
    "difficulty": "基础",
    "question": "关于「static局部变量」，哪项说法更符合嵌入式 C 的稳妥写法？",
    "options": [
      "把所有警告关闭，可以避免这类问题影响程序运行",
      "static 局部变量只初始化一次，生命周期到程序结束，但作用域仍在函数内",
      "依赖一次测试输出即可证明该写法在所有平台都正确",
      "遇到不确定行为时，直接用强制类型转换就能消除风险"
    ],
    "answer": 1,
    "explanation": "它适合保存状态，也会让函数不再无状态。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "static",
      "生命周期",
      "扩展题库"
    ]
  },
  {
    "id": "c514",
    "chapter": "const、volatile、static、extern",
    "topic": "static全局变量",
    "difficulty": "进阶",
    "question": "关于「static全局变量」，哪项说法更符合嵌入式 C 的稳妥写法？",
    "options": [
      "依赖一次测试输出即可证明该写法在所有平台都正确",
      "遇到不确定行为时，直接用强制类型转换就能消除风险",
      "文件作用域 static 变量具有内部链接，只在当前编译单元可见",
      "代码体积小就一定更安全，不需要关注边界条件"
    ],
    "answer": 2,
    "explanation": "这能隐藏模块内部状态，减少命名冲突。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "static",
      "内部链接",
      "扩展题库"
    ]
  },
  {
    "id": "c515",
    "chapter": "const、volatile、static、extern",
    "topic": "extern变量声明",
    "difficulty": "易错",
    "question": "关于「extern变量声明」，哪项说法更符合嵌入式 C 的稳妥写法？",
    "options": [
      "遇到不确定行为时，直接用强制类型转换就能消除风险",
      "代码体积小就一定更安全，不需要关注边界条件",
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则",
      "extern 声明不分配存储，真正定义应放在一个源文件中"
    ],
    "answer": 3,
    "explanation": "头文件中放 extern 声明，源文件中放唯一定义，是常见组织方式。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "extern",
      "声明定义",
      "扩展题库"
    ]
  },
  {
    "id": "c516",
    "chapter": "const、volatile、static、extern",
    "topic": "extern与头文件",
    "difficulty": "面试",
    "question": "关于「extern与头文件」，哪项说法更符合嵌入式 C 的稳妥写法？",
    "options": [
      "头文件中的 extern 声明应与唯一源文件定义保持类型一致",
      "代码体积小就一定更安全，不需要关注边界条件",
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则",
      "头文件和源文件声明不同也没关系"
    ],
    "answer": 0,
    "explanation": "类型不一致会造成链接或运行期解释错误。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "extern",
      "头文件",
      "扩展题库"
    ]
  },
  {
    "id": "c517",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile const寄存器",
    "difficulty": "基础",
    "question": "关于「volatile const寄存器」，哪项说法更符合嵌入式 C 的稳妥写法？",
    "options": [
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则",
      "只读硬件寄存器常声明为 volatile const，表示值会变化但软件不应写",
      "volatile const 表示变量永远不变",
      "volatile const 可以随意写入"
    ],
    "answer": 1,
    "explanation": "const 约束写访问，volatile 保证每次读取真实发生。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "volatile",
      "const",
      "寄存器",
      "扩展题库"
    ]
  },
  {
    "id": "c518",
    "chapter": "const、volatile、static、extern",
    "topic": "const对象",
    "difficulty": "进阶",
    "question": "代码评审时看到「const对象」相关实现，优先检查哪一点？",
    "options": [
      "const 变量一定存放在 Flash",
      "const 可以防止任何方式修改底层内存",
      "const 表达只读意图，但不等同于所有场景都放入只读物理存储",
      "const 和宏完全等价"
    ],
    "answer": 2,
    "explanation": "是否进入 Flash 或 rodata 取决于对象属性、链接脚本和平台实现。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "const",
      "只读",
      "扩展题库"
    ]
  },
  {
    "id": "c519",
    "chapter": "const、volatile、static、extern",
    "topic": "const参数",
    "difficulty": "易错",
    "question": "代码评审时看到「const参数」相关实现，优先检查哪一点？",
    "options": [
      "const 指针参数不能传数组",
      "const 会让函数自动更快",
      "只要当前编译器能通过，就可以认为写法完全可移植",
      "指针参数若只读不写，使用指向 const 的指针能表达接口约束"
    ],
    "answer": 3,
    "explanation": "例如 const uint8_t *buf 能告诉调用者函数不会通过该指针修改数据。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "const",
      "函数参数",
      "扩展题库"
    ]
  },
  {
    "id": "c520",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile变量",
    "difficulty": "面试",
    "question": "代码评审时看到「volatile变量」相关实现，优先检查哪一点？",
    "options": [
      "volatile 用于提示对象可能被当前执行流之外改变，不能随意缓存或优化访问",
      "volatile 变量一定不会被中断打断",
      "只要当前编译器能通过，就可以认为写法完全可移植",
      "把所有警告关闭，可以避免这类问题影响程序运行"
    ],
    "answer": 0,
    "explanation": "中断标志和硬件寄存器常见，但 volatile 不等于线程安全。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "volatile",
      "优化",
      "扩展题库"
    ]
  },
  {
    "id": "c521",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile中断共享变量",
    "difficulty": "基础",
    "question": "代码评审时看到「volatile中断共享变量」相关实现，优先检查哪一点？",
    "options": [
      "只要当前编译器能通过，就可以认为写法完全可移植",
      "ISR 和主循环共享的标志位通常需要 volatile，并配合临界区处理复合访问",
      "把所有警告关闭，可以避免这类问题影响程序运行",
      "依赖一次测试输出即可证明该写法在所有平台都正确"
    ],
    "answer": 1,
    "explanation": "volatile 解决可见性，临界区解决竞争窗口。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "volatile",
      "中断",
      "扩展题库"
    ]
  },
  {
    "id": "c522",
    "chapter": "const、volatile、static、extern",
    "topic": "static局部变量",
    "difficulty": "进阶",
    "question": "代码评审时看到「static局部变量」相关实现，优先检查哪一点？",
    "options": [
      "把所有警告关闭，可以避免这类问题影响程序运行",
      "依赖一次测试输出即可证明该写法在所有平台都正确",
      "static 局部变量只初始化一次，生命周期到程序结束，但作用域仍在函数内",
      "遇到不确定行为时，直接用强制类型转换就能消除风险"
    ],
    "answer": 2,
    "explanation": "它适合保存状态，也会让函数不再无状态。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "static",
      "生命周期",
      "扩展题库"
    ]
  },
  {
    "id": "c523",
    "chapter": "const、volatile、static、extern",
    "topic": "static全局变量",
    "difficulty": "易错",
    "question": "代码评审时看到「static全局变量」相关实现，优先检查哪一点？",
    "options": [
      "依赖一次测试输出即可证明该写法在所有平台都正确",
      "遇到不确定行为时，直接用强制类型转换就能消除风险",
      "代码体积小就一定更安全，不需要关注边界条件",
      "文件作用域 static 变量具有内部链接，只在当前编译单元可见"
    ],
    "answer": 3,
    "explanation": "这能隐藏模块内部状态，减少命名冲突。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "static",
      "内部链接",
      "扩展题库"
    ]
  },
  {
    "id": "c524",
    "chapter": "const、volatile、static、extern",
    "topic": "extern变量声明",
    "difficulty": "面试",
    "question": "代码评审时看到「extern变量声明」相关实现，优先检查哪一点？",
    "options": [
      "extern 声明不分配存储，真正定义应放在一个源文件中",
      "遇到不确定行为时，直接用强制类型转换就能消除风险",
      "代码体积小就一定更安全，不需要关注边界条件",
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则"
    ],
    "answer": 0,
    "explanation": "头文件中放 extern 声明，源文件中放唯一定义，是常见组织方式。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "extern",
      "声明定义",
      "扩展题库"
    ]
  },
  {
    "id": "c525",
    "chapter": "const、volatile、static、extern",
    "topic": "extern与头文件",
    "difficulty": "基础",
    "question": "代码评审时看到「extern与头文件」相关实现，优先检查哪一点？",
    "options": [
      "代码体积小就一定更安全，不需要关注边界条件",
      "头文件中的 extern 声明应与唯一源文件定义保持类型一致",
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则",
      "头文件和源文件声明不同也没关系"
    ],
    "answer": 1,
    "explanation": "类型不一致会造成链接或运行期解释错误。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "extern",
      "头文件",
      "扩展题库"
    ]
  },
  {
    "id": "c526",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile const寄存器",
    "difficulty": "进阶",
    "question": "代码评审时看到「volatile const寄存器」相关实现，优先检查哪一点？",
    "options": [
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则",
      "volatile const 表示变量永远不变",
      "只读硬件寄存器常声明为 volatile const，表示值会变化但软件不应写",
      "volatile const 可以随意写入"
    ],
    "answer": 2,
    "explanation": "const 约束写访问，volatile 保证每次读取真实发生。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "volatile",
      "const",
      "寄存器",
      "扩展题库"
    ]
  },
  {
    "id": "c527",
    "chapter": "const、volatile、static、extern",
    "topic": "const对象",
    "difficulty": "易错",
    "question": "下列关于「const对象」的理解，哪项最不容易埋坑？",
    "options": [
      "const 变量一定存放在 Flash",
      "const 可以防止任何方式修改底层内存",
      "const 和宏完全等价",
      "const 表达只读意图，但不等同于所有场景都放入只读物理存储"
    ],
    "answer": 3,
    "explanation": "是否进入 Flash 或 rodata 取决于对象属性、链接脚本和平台实现。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "const",
      "只读",
      "扩展题库"
    ]
  },
  {
    "id": "c528",
    "chapter": "const、volatile、static、extern",
    "topic": "const参数",
    "difficulty": "面试",
    "question": "下列关于「const参数」的理解，哪项最不容易埋坑？",
    "options": [
      "指针参数若只读不写，使用指向 const 的指针能表达接口约束",
      "const 指针参数不能传数组",
      "const 会让函数自动更快",
      "只要当前编译器能通过，就可以认为写法完全可移植"
    ],
    "answer": 0,
    "explanation": "例如 const uint8_t *buf 能告诉调用者函数不会通过该指针修改数据。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "const",
      "函数参数",
      "扩展题库"
    ]
  },
  {
    "id": "c529",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile变量",
    "difficulty": "基础",
    "question": "下列关于「volatile变量」的理解，哪项最不容易埋坑？",
    "options": [
      "volatile 变量一定不会被中断打断",
      "volatile 用于提示对象可能被当前执行流之外改变，不能随意缓存或优化访问",
      "只要当前编译器能通过，就可以认为写法完全可移植",
      "把所有警告关闭，可以避免这类问题影响程序运行"
    ],
    "answer": 1,
    "explanation": "中断标志和硬件寄存器常见，但 volatile 不等于线程安全。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "volatile",
      "优化",
      "扩展题库"
    ]
  },
  {
    "id": "c530",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile中断共享变量",
    "difficulty": "进阶",
    "question": "下列关于「volatile中断共享变量」的理解，哪项最不容易埋坑？",
    "options": [
      "只要当前编译器能通过，就可以认为写法完全可移植",
      "把所有警告关闭，可以避免这类问题影响程序运行",
      "ISR 和主循环共享的标志位通常需要 volatile，并配合临界区处理复合访问",
      "依赖一次测试输出即可证明该写法在所有平台都正确"
    ],
    "answer": 2,
    "explanation": "volatile 解决可见性，临界区解决竞争窗口。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "volatile",
      "中断",
      "扩展题库"
    ]
  },
  {
    "id": "c531",
    "chapter": "const、volatile、static、extern",
    "topic": "static局部变量",
    "difficulty": "易错",
    "question": "下列关于「static局部变量」的理解，哪项最不容易埋坑？",
    "options": [
      "把所有警告关闭，可以避免这类问题影响程序运行",
      "依赖一次测试输出即可证明该写法在所有平台都正确",
      "遇到不确定行为时，直接用强制类型转换就能消除风险",
      "static 局部变量只初始化一次，生命周期到程序结束，但作用域仍在函数内"
    ],
    "answer": 3,
    "explanation": "它适合保存状态，也会让函数不再无状态。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "static",
      "生命周期",
      "扩展题库"
    ]
  },
  {
    "id": "c532",
    "chapter": "const、volatile、static、extern",
    "topic": "static全局变量",
    "difficulty": "面试",
    "question": "下列关于「static全局变量」的理解，哪项最不容易埋坑？",
    "options": [
      "文件作用域 static 变量具有内部链接，只在当前编译单元可见",
      "依赖一次测试输出即可证明该写法在所有平台都正确",
      "遇到不确定行为时，直接用强制类型转换就能消除风险",
      "代码体积小就一定更安全，不需要关注边界条件"
    ],
    "answer": 0,
    "explanation": "这能隐藏模块内部状态，减少命名冲突。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "static",
      "内部链接",
      "扩展题库"
    ]
  },
  {
    "id": "c533",
    "chapter": "const、volatile、static、extern",
    "topic": "extern变量声明",
    "difficulty": "基础",
    "question": "下列关于「extern变量声明」的理解，哪项最不容易埋坑？",
    "options": [
      "遇到不确定行为时，直接用强制类型转换就能消除风险",
      "extern 声明不分配存储，真正定义应放在一个源文件中",
      "代码体积小就一定更安全，不需要关注边界条件",
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则"
    ],
    "answer": 1,
    "explanation": "头文件中放 extern 声明，源文件中放唯一定义，是常见组织方式。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "extern",
      "声明定义",
      "扩展题库"
    ]
  },
  {
    "id": "c534",
    "chapter": "const、volatile、static、extern",
    "topic": "extern与头文件",
    "difficulty": "进阶",
    "question": "下列关于「extern与头文件」的理解，哪项最不容易埋坑？",
    "options": [
      "代码体积小就一定更安全，不需要关注边界条件",
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则",
      "头文件中的 extern 声明应与唯一源文件定义保持类型一致",
      "头文件和源文件声明不同也没关系"
    ],
    "answer": 2,
    "explanation": "类型不一致会造成链接或运行期解释错误。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "extern",
      "头文件",
      "扩展题库"
    ]
  },
  {
    "id": "c535",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile const寄存器",
    "difficulty": "易错",
    "question": "下列关于「volatile const寄存器」的理解，哪项最不容易埋坑？",
    "options": [
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则",
      "volatile const 表示变量永远不变",
      "volatile const 可以随意写入",
      "只读硬件寄存器常声明为 volatile const，表示值会变化但软件不应写"
    ],
    "answer": 3,
    "explanation": "const 约束写访问，volatile 保证每次读取真实发生。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "volatile",
      "const",
      "寄存器",
      "扩展题库"
    ]
  },
  {
    "id": "c536",
    "chapter": "const、volatile、static、extern",
    "topic": "const对象",
    "difficulty": "面试",
    "question": "做裸机或 RTOS 项目时使用「const对象」，哪项判断更可靠？",
    "options": [
      "const 表达只读意图，但不等同于所有场景都放入只读物理存储",
      "const 变量一定存放在 Flash",
      "const 可以防止任何方式修改底层内存",
      "const 和宏完全等价"
    ],
    "answer": 0,
    "explanation": "是否进入 Flash 或 rodata 取决于对象属性、链接脚本和平台实现。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "const",
      "只读",
      "扩展题库"
    ]
  },
  {
    "id": "c537",
    "chapter": "const、volatile、static、extern",
    "topic": "const参数",
    "difficulty": "基础",
    "question": "做裸机或 RTOS 项目时使用「const参数」，哪项判断更可靠？",
    "options": [
      "const 指针参数不能传数组",
      "指针参数若只读不写，使用指向 const 的指针能表达接口约束",
      "const 会让函数自动更快",
      "只要当前编译器能通过，就可以认为写法完全可移植"
    ],
    "answer": 1,
    "explanation": "例如 const uint8_t *buf 能告诉调用者函数不会通过该指针修改数据。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "const",
      "函数参数",
      "扩展题库"
    ]
  },
  {
    "id": "c538",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile变量",
    "difficulty": "进阶",
    "question": "做裸机或 RTOS 项目时使用「volatile变量」，哪项判断更可靠？",
    "options": [
      "volatile 变量一定不会被中断打断",
      "只要当前编译器能通过，就可以认为写法完全可移植",
      "volatile 用于提示对象可能被当前执行流之外改变，不能随意缓存或优化访问",
      "把所有警告关闭，可以避免这类问题影响程序运行"
    ],
    "answer": 2,
    "explanation": "中断标志和硬件寄存器常见，但 volatile 不等于线程安全。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "volatile",
      "优化",
      "扩展题库"
    ]
  },
  {
    "id": "c539",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile中断共享变量",
    "difficulty": "易错",
    "question": "做裸机或 RTOS 项目时使用「volatile中断共享变量」，哪项判断更可靠？",
    "options": [
      "只要当前编译器能通过，就可以认为写法完全可移植",
      "把所有警告关闭，可以避免这类问题影响程序运行",
      "依赖一次测试输出即可证明该写法在所有平台都正确",
      "ISR 和主循环共享的标志位通常需要 volatile，并配合临界区处理复合访问"
    ],
    "answer": 3,
    "explanation": "volatile 解决可见性，临界区解决竞争窗口。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "volatile",
      "中断",
      "扩展题库"
    ]
  },
  {
    "id": "c540",
    "chapter": "const、volatile、static、extern",
    "topic": "static局部变量",
    "difficulty": "面试",
    "question": "做裸机或 RTOS 项目时使用「static局部变量」，哪项判断更可靠？",
    "options": [
      "static 局部变量只初始化一次，生命周期到程序结束，但作用域仍在函数内",
      "把所有警告关闭，可以避免这类问题影响程序运行",
      "依赖一次测试输出即可证明该写法在所有平台都正确",
      "遇到不确定行为时，直接用强制类型转换就能消除风险"
    ],
    "answer": 0,
    "explanation": "它适合保存状态，也会让函数不再无状态。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "static",
      "生命周期",
      "扩展题库"
    ]
  },
  {
    "id": "c541",
    "chapter": "const、volatile、static、extern",
    "topic": "static全局变量",
    "difficulty": "基础",
    "question": "做裸机或 RTOS 项目时使用「static全局变量」，哪项判断更可靠？",
    "options": [
      "依赖一次测试输出即可证明该写法在所有平台都正确",
      "文件作用域 static 变量具有内部链接，只在当前编译单元可见",
      "遇到不确定行为时，直接用强制类型转换就能消除风险",
      "代码体积小就一定更安全，不需要关注边界条件"
    ],
    "answer": 1,
    "explanation": "这能隐藏模块内部状态，减少命名冲突。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "static",
      "内部链接",
      "扩展题库"
    ]
  },
  {
    "id": "c542",
    "chapter": "const、volatile、static、extern",
    "topic": "extern变量声明",
    "difficulty": "进阶",
    "question": "做裸机或 RTOS 项目时使用「extern变量声明」，哪项判断更可靠？",
    "options": [
      "遇到不确定行为时，直接用强制类型转换就能消除风险",
      "代码体积小就一定更安全，不需要关注边界条件",
      "extern 声明不分配存储，真正定义应放在一个源文件中",
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则"
    ],
    "answer": 2,
    "explanation": "头文件中放 extern 声明，源文件中放唯一定义，是常见组织方式。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "extern",
      "声明定义",
      "扩展题库"
    ]
  },
  {
    "id": "c543",
    "chapter": "const、volatile、static、extern",
    "topic": "extern与头文件",
    "difficulty": "易错",
    "question": "做裸机或 RTOS 项目时使用「extern与头文件」，哪项判断更可靠？",
    "options": [
      "代码体积小就一定更安全，不需要关注边界条件",
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则",
      "头文件和源文件声明不同也没关系",
      "头文件中的 extern 声明应与唯一源文件定义保持类型一致"
    ],
    "answer": 3,
    "explanation": "类型不一致会造成链接或运行期解释错误。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "extern",
      "头文件",
      "扩展题库"
    ]
  },
  {
    "id": "c544",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile const寄存器",
    "difficulty": "面试",
    "question": "做裸机或 RTOS 项目时使用「volatile const寄存器」，哪项判断更可靠？",
    "options": [
      "只读硬件寄存器常声明为 volatile const，表示值会变化但软件不应写",
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则",
      "volatile const 表示变量永远不变",
      "volatile const 可以随意写入"
    ],
    "answer": 0,
    "explanation": "const 约束写访问，volatile 保证每次读取真实发生。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "volatile",
      "const",
      "寄存器",
      "扩展题库"
    ]
  },
  {
    "id": "c545",
    "chapter": "const、volatile、static、extern",
    "topic": "const对象",
    "difficulty": "基础",
    "question": "遇到「const对象」相关 bug 时，哪项排查方向最合理？",
    "options": [
      "const 变量一定存放在 Flash",
      "const 表达只读意图，但不等同于所有场景都放入只读物理存储",
      "const 可以防止任何方式修改底层内存",
      "const 和宏完全等价"
    ],
    "answer": 1,
    "explanation": "是否进入 Flash 或 rodata 取决于对象属性、链接脚本和平台实现。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "const",
      "只读",
      "扩展题库"
    ]
  },
  {
    "id": "c546",
    "chapter": "const、volatile、static、extern",
    "topic": "const参数",
    "difficulty": "进阶",
    "question": "遇到「const参数」相关 bug 时，哪项排查方向最合理？",
    "options": [
      "const 指针参数不能传数组",
      "const 会让函数自动更快",
      "指针参数若只读不写，使用指向 const 的指针能表达接口约束",
      "只要当前编译器能通过，就可以认为写法完全可移植"
    ],
    "answer": 2,
    "explanation": "例如 const uint8_t *buf 能告诉调用者函数不会通过该指针修改数据。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "const",
      "函数参数",
      "扩展题库"
    ]
  },
  {
    "id": "c547",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile变量",
    "difficulty": "易错",
    "question": "遇到「volatile变量」相关 bug 时，哪项排查方向最合理？",
    "options": [
      "volatile 变量一定不会被中断打断",
      "只要当前编译器能通过，就可以认为写法完全可移植",
      "把所有警告关闭，可以避免这类问题影响程序运行",
      "volatile 用于提示对象可能被当前执行流之外改变，不能随意缓存或优化访问"
    ],
    "answer": 3,
    "explanation": "中断标志和硬件寄存器常见，但 volatile 不等于线程安全。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "volatile",
      "优化",
      "扩展题库"
    ]
  },
  {
    "id": "c548",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile中断共享变量",
    "difficulty": "面试",
    "question": "遇到「volatile中断共享变量」相关 bug 时，哪项排查方向最合理？",
    "options": [
      "ISR 和主循环共享的标志位通常需要 volatile，并配合临界区处理复合访问",
      "只要当前编译器能通过，就可以认为写法完全可移植",
      "把所有警告关闭，可以避免这类问题影响程序运行",
      "依赖一次测试输出即可证明该写法在所有平台都正确"
    ],
    "answer": 0,
    "explanation": "volatile 解决可见性，临界区解决竞争窗口。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "volatile",
      "中断",
      "扩展题库"
    ]
  },
  {
    "id": "c549",
    "chapter": "const、volatile、static、extern",
    "topic": "static局部变量",
    "difficulty": "基础",
    "question": "遇到「static局部变量」相关 bug 时，哪项排查方向最合理？",
    "options": [
      "把所有警告关闭，可以避免这类问题影响程序运行",
      "static 局部变量只初始化一次，生命周期到程序结束，但作用域仍在函数内",
      "依赖一次测试输出即可证明该写法在所有平台都正确",
      "遇到不确定行为时，直接用强制类型转换就能消除风险"
    ],
    "answer": 1,
    "explanation": "它适合保存状态，也会让函数不再无状态。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "static",
      "生命周期",
      "扩展题库"
    ]
  },
  {
    "id": "c550",
    "chapter": "const、volatile、static、extern",
    "topic": "static全局变量",
    "difficulty": "进阶",
    "question": "遇到「static全局变量」相关 bug 时，哪项排查方向最合理？",
    "options": [
      "依赖一次测试输出即可证明该写法在所有平台都正确",
      "遇到不确定行为时，直接用强制类型转换就能消除风险",
      "文件作用域 static 变量具有内部链接，只在当前编译单元可见",
      "代码体积小就一定更安全，不需要关注边界条件"
    ],
    "answer": 2,
    "explanation": "这能隐藏模块内部状态，减少命名冲突。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "static",
      "内部链接",
      "扩展题库"
    ]
  },
  {
    "id": "c551",
    "chapter": "const、volatile、static、extern",
    "topic": "extern变量声明",
    "difficulty": "易错",
    "question": "遇到「extern变量声明」相关 bug 时，哪项排查方向最合理？",
    "options": [
      "遇到不确定行为时，直接用强制类型转换就能消除风险",
      "代码体积小就一定更安全，不需要关注边界条件",
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则",
      "extern 声明不分配存储，真正定义应放在一个源文件中"
    ],
    "answer": 3,
    "explanation": "头文件中放 extern 声明，源文件中放唯一定义，是常见组织方式。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "extern",
      "声明定义",
      "扩展题库"
    ]
  },
  {
    "id": "c552",
    "chapter": "const、volatile、static、extern",
    "topic": "extern与头文件",
    "difficulty": "面试",
    "question": "遇到「extern与头文件」相关 bug 时，哪项排查方向最合理？",
    "options": [
      "头文件中的 extern 声明应与唯一源文件定义保持类型一致",
      "代码体积小就一定更安全，不需要关注边界条件",
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则",
      "头文件和源文件声明不同也没关系"
    ],
    "answer": 0,
    "explanation": "类型不一致会造成链接或运行期解释错误。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "extern",
      "头文件",
      "扩展题库"
    ]
  },
  {
    "id": "c553",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile const寄存器",
    "difficulty": "基础",
    "question": "遇到「volatile const寄存器」相关 bug 时，哪项排查方向最合理？",
    "options": [
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则",
      "只读硬件寄存器常声明为 volatile const，表示值会变化但软件不应写",
      "volatile const 表示变量永远不变",
      "volatile const 可以随意写入"
    ],
    "answer": 1,
    "explanation": "const 约束写访问，volatile 保证每次读取真实发生。 这道题的重点是先确认边界条件、对象生命周期和平台差异，再决定写法是否安全。",
    "tags": [
      "volatile",
      "const",
      "寄存器",
      "扩展题库"
    ]
  }
]

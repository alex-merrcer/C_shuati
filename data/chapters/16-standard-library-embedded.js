module.exports = [
  {
    "id": "c779",
    "chapter": "标准库与嵌入式限制",
    "topic": "printf代码体积",
    "difficulty": "基础",
    "question": "为了让「printf代码体积」更可维护，哪项做法更推荐？",
    "options": [
      "printf 不会影响固件大小",
      "浮点 printf 永远默认启用且无成本",
      "printf 比直接寄存器输出一定更实时",
      "printf 尤其带浮点格式时可能显著增加代码体积"
    ],
    "answer": 3,
    "explanation": "这段 printf代码体积 相关代码：小 Flash 项目要评估格式化输出的链接开销。 如果要写成公共模块，最好把容量、所有权和失败路径都放进接口说明。",
    "tags": [
      "printf",
      "代码体积",
      "扩展题库"
    ],
    "knowledgeId": "kp_0149",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c780",
    "chapter": "标准库与嵌入式限制",
    "topic": "标准库可重入性",
    "difficulty": "进阶",
    "question": "选择「标准库可重入性」实现方案时，哪项取舍更适合嵌入式项目？",
    "options": [
      "某些标准库函数在特定实现中可能使用全局状态，需确认可重入性",
      "可重入性与库实现无关",
      "errno 永远是普通局部变量",
      "只要当前编译器能通过，就可以认为写法完全可移植"
    ],
    "answer": 0,
    "explanation": "这段 标准库可重入性 相关代码：RTOS 和中断环境下调用库函数要看实现文档。 这也是嵌入式 C 容易挖坑的地方：局部写法会影响全局稳定性。",
    "tags": [
      "标准库",
      "可重入",
      "扩展题库",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0150",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c781",
    "chapter": "标准库与嵌入式限制",
    "topic": "assert",
    "difficulty": "易错",
    "question": "代码评审时看到「assert」相关实现，优先检查哪一点？",
    "options": [
      "assert 失败会自动修复数据",
      "assert 适合开发期暴露错误，但发布固件要明确失败处理策略",
      "只要当前编译器能通过，就可以认为写法完全可移植",
      "把所有警告关闭，可以避免这类问题影响程序运行"
    ],
    "answer": 1,
    "explanation": "这段 assert 相关代码：裸机环境下 assert 可能进入死循环、复位或无输出。 这类题不应该背输出结果，而应判断代码是否具备可移植和可维护的前提。",
    "tags": [
      "assert",
      "调试",
      "扩展题库"
    ],
    "knowledgeId": "kp_0151",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c782",
    "chapter": "标准库与嵌入式限制",
    "topic": "errno",
    "difficulty": "面试",
    "question": "如果要把「errno」用于长期运行固件，哪项更值得坚持？",
    "options": [
      "只要当前编译器能通过，就可以认为写法完全可移植",
      "把所有警告关闭，可以避免这类问题影响程序运行",
      "errno 是库函数错误报告机制之一，多任务环境下要确认其线程局部实现",
      "依赖一次测试输出即可证明该写法在所有平台都正确"
    ],
    "answer": 2,
    "explanation": "这段 errno 相关代码：不同 C 库和 RTOS 移植层处理方式不同。 遇到类似场景时，优先用清晰的类型和显式检查替代侥幸运行。",
    "tags": [
      "errno",
      "标准库",
      "扩展题库"
    ],
    "knowledgeId": "kp_0152",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c783",
    "chapter": "标准库与嵌入式限制",
    "topic": "文件IO限制",
    "difficulty": "基础",
    "question": "下面哪个反例最能说明「文件IO限制」不能只凭经验处理？",
    "options": [
      "把所有警告关闭，可以避免这类问题影响程序运行",
      "依赖一次测试输出即可证明该写法在所有平台都正确",
      "遇到不确定行为时，直接用强制类型转换就能消除风险",
      "裸机环境通常没有完整文件系统，stdio 文件接口可能不可用或需重定向"
    ],
    "answer": 3,
    "explanation": "这段 文件IO限制 相关代码：移植标准库时要关注底层系统调用桩函数。 如果这里写错，问题往往不是立即崩溃，而是表现为偶发数据破坏。",
    "tags": [
      "stdio",
      "裸机",
      "扩展题库"
    ],
    "knowledgeId": "kp_0153",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c784",
    "chapter": "标准库与嵌入式限制",
    "topic": "printf代码体积",
    "difficulty": "进阶",
    "question": "下面哪种写法最符合「printf代码体积」的边界意识？",
    "options": [
      "printf 尤其带浮点格式时可能显著增加代码体积",
      "依赖一次测试输出即可证明该写法在所有平台都正确",
      "遇到不确定行为时，直接用强制类型转换就能消除风险",
      "代码体积小就一定更安全，不需要关注边界条件"
    ],
    "answer": 0,
    "explanation": "这段 printf代码体积 相关代码：小 Flash 项目要评估格式化输出的链接开销。 实际项目中应把这个点写成明确的接口约束，而不是靠调用者猜测。",
    "tags": [
      "printf",
      "代码体积",
      "扩展题库"
    ],
    "knowledgeId": "kp_0149",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c785",
    "chapter": "标准库与嵌入式限制",
    "topic": "标准库可重入性",
    "difficulty": "易错",
    "question": "审查「标准库可重入性」相关宏或接口时，哪项最需要写进注释或约定？",
    "options": [
      "遇到不确定行为时，直接用强制类型转换就能消除风险",
      "某些标准库函数在特定实现中可能使用全局状态，需确认可重入性",
      "代码体积小就一定更安全，不需要关注边界条件",
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则"
    ],
    "answer": 1,
    "explanation": "这段 标准库可重入性 相关代码：RTOS 和中断环境下调用库函数要看实现文档。 如果要写成公共模块，最好把容量、所有权和失败路径都放进接口说明。",
    "tags": [
      "标准库",
      "可重入",
      "扩展题库"
    ],
    "knowledgeId": "kp_0150",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c786",
    "chapter": "标准库与嵌入式限制",
    "topic": "assert",
    "difficulty": "面试",
    "question": "下面哪个检查项最能提前发现「assert」相关缺陷？",
    "options": [
      "代码体积小就一定更安全，不需要关注边界条件",
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则",
      "assert 适合开发期暴露错误，但发布固件要明确失败处理策略",
      "assert 可以替代运行时错误处理"
    ],
    "answer": 2,
    "explanation": "这段 assert 相关代码：裸机环境下 assert 可能进入死循环、复位或无输出。 这也是嵌入式 C 容易挖坑的地方：局部写法会影响全局稳定性。",
    "tags": [
      "assert",
      "调试",
      "扩展题库",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0151",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c787",
    "chapter": "标准库与嵌入式限制",
    "topic": "errno",
    "difficulty": "基础",
    "question": "维护别人写的「errno」代码时，第一步更应该做什么？",
    "options": [
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则",
      "errno 一定是全局共享且不可变",
      "errno 不需要在调用前后理解函数约定",
      "errno 是库函数错误报告机制之一，多任务环境下要确认其线程局部实现"
    ],
    "answer": 3,
    "explanation": "这段 errno 相关代码：不同 C 库和 RTOS 移植层处理方式不同。 这类题不应该背输出结果，而应判断代码是否具备可移植和可维护的前提。",
    "tags": [
      "errno",
      "标准库",
      "扩展题库"
    ],
    "knowledgeId": "kp_0152",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c788",
    "chapter": "标准库与嵌入式限制",
    "topic": "文件IO限制",
    "difficulty": "进阶",
    "question": "遇到「文件IO限制」相关 bug 时，哪项排查方向最合理？",
    "options": [
      "裸机环境通常没有完整文件系统，stdio 文件接口可能不可用或需重定向",
      "裸机一定支持 fopen 访问 PC 文件",
      "文件 IO 与链接脚本无关",
      "没有文件系统也能自动保存日志到磁盘"
    ],
    "answer": 0,
    "explanation": "这段 文件IO限制 相关代码：移植标准库时要关注底层系统调用桩函数。 遇到类似场景时，优先用清晰的类型和显式检查替代侥幸运行。",
    "tags": [
      "stdio",
      "裸机",
      "扩展题库"
    ],
    "knowledgeId": "kp_0153",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c789",
    "chapter": "标准库与嵌入式限制",
    "topic": "printf代码体积",
    "difficulty": "易错",
    "question": "如果「printf代码体积」相关代码偶发失败，哪项排查最接近根因？",
    "options": [
      "浮点 printf 永远默认启用且无成本",
      "printf 尤其带浮点格式时可能显著增加代码体积",
      "printf 比直接寄存器输出一定更实时",
      "只要当前编译器能通过，就可以认为写法完全可移植"
    ],
    "answer": 1,
    "explanation": "这段 printf代码体积 相关代码：小 Flash 项目要评估格式化输出的链接开销。 更稳的做法是先保证 C 语义正确，再考虑性能和代码体积。",
    "tags": [
      "printf",
      "代码体积",
      "扩展题库"
    ],
    "knowledgeId": "kp_0149",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c790",
    "chapter": "标准库与嵌入式限制",
    "topic": "标准库可重入性",
    "difficulty": "面试",
    "question": "下列关于「标准库可重入性」的理解，哪项最不容易埋坑？",
    "options": [
      "errno 永远是普通局部变量",
      "只要当前编译器能通过，就可以认为写法完全可移植",
      "某些标准库函数在特定实现中可能使用全局状态，需确认可重入性",
      "把所有警告关闭，可以避免这类问题影响程序运行"
    ],
    "answer": 2,
    "explanation": "这段 标准库可重入性 相关代码：RTOS 和中断环境下调用库函数要看实现文档。 实际项目中应把这个点写成明确的接口约束，而不是靠调用者猜测。",
    "tags": [
      "标准库",
      "可重入",
      "扩展题库"
    ],
    "knowledgeId": "kp_0150",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c791",
    "chapter": "标准库与嵌入式限制",
    "topic": "assert",
    "difficulty": "基础",
    "question": "看到「assert」出现在中断或驱动路径中，哪项判断最谨慎？",
    "options": [
      "只要当前编译器能通过，就可以认为写法完全可移植",
      "把所有警告关闭，可以避免这类问题影响程序运行",
      "依赖一次测试输出即可证明该写法在所有平台都正确",
      "assert 适合开发期暴露错误，但发布固件要明确失败处理策略"
    ],
    "answer": 3,
    "explanation": "这段 assert 相关代码：裸机环境下 assert 可能进入死循环、复位或无输出。 如果要写成公共模块，最好把容量、所有权和失败路径都放进接口说明。",
    "tags": [
      "assert",
      "调试",
      "扩展题库"
    ],
    "knowledgeId": "kp_0151",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c792",
    "chapter": "标准库与嵌入式限制",
    "topic": "errno",
    "difficulty": "进阶",
    "question": "在资源受限的 MCU 中使用「errno」，哪项策略更稳？",
    "options": [
      "errno 是库函数错误报告机制之一，多任务环境下要确认其线程局部实现",
      "把所有警告关闭，可以避免这类问题影响程序运行",
      "依赖一次测试输出即可证明该写法在所有平台都正确",
      "遇到不确定行为时，直接用强制类型转换就能消除风险"
    ],
    "answer": 0,
    "explanation": "这段 errno 相关代码：不同 C 库和 RTOS 移植层处理方式不同。 这也是嵌入式 C 容易挖坑的地方：局部写法会影响全局稳定性。",
    "tags": [
      "errno",
      "标准库",
      "扩展题库",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0152",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c793",
    "chapter": "标准库与嵌入式限制",
    "topic": "文件IO限制",
    "difficulty": "易错",
    "question": "做代码走查时，哪项描述最能说明「文件IO限制」的真实风险？",
    "options": [
      "依赖一次测试输出即可证明该写法在所有平台都正确",
      "裸机环境通常没有完整文件系统，stdio 文件接口可能不可用或需重定向",
      "遇到不确定行为时，直接用强制类型转换就能消除风险",
      "代码体积小就一定更安全，不需要关注边界条件"
    ],
    "answer": 1,
    "explanation": "这段 文件IO限制 相关代码：移植标准库时要关注底层系统调用桩函数。 这类题不应该背输出结果，而应判断代码是否具备可移植和可维护的前提。",
    "tags": [
      "stdio",
      "裸机",
      "扩展题库"
    ],
    "knowledgeId": "kp_0153",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c794",
    "chapter": "标准库与嵌入式限制",
    "topic": "printf代码体积",
    "difficulty": "面试",
    "question": "如果「printf代码体积」牵涉数组、指针或生命周期，哪项检查最关键？",
    "options": [
      "遇到不确定行为时，直接用强制类型转换就能消除风险",
      "代码体积小就一定更安全，不需要关注边界条件",
      "printf 尤其带浮点格式时可能显著增加代码体积",
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则"
    ],
    "answer": 2,
    "explanation": "这段 printf代码体积 相关代码：小 Flash 项目要评估格式化输出的链接开销。 审查这类代码时，建议同时看边界、生命周期、类型和平台差异。",
    "tags": [
      "printf",
      "代码体积",
      "扩展题库",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0149",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c795",
    "chapter": "标准库与嵌入式限制",
    "topic": "标准库可重入性",
    "difficulty": "基础",
    "question": "把「标准库可重入性」写进驱动代码前，哪项约束最应该先确认？",
    "options": [
      "代码体积小就一定更安全，不需要关注边界条件",
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则",
      "所有标准库函数都可在 ISR 中安全调用",
      "某些标准库函数在特定实现中可能使用全局状态，需确认可重入性"
    ],
    "answer": 3,
    "explanation": "这段 标准库可重入性 相关代码：RTOS 和中断环境下调用库函数要看实现文档。 更稳的做法是先保证 C 语义正确，再考虑性能和代码体积。",
    "tags": [
      "标准库",
      "可重入",
      "扩展题库"
    ],
    "knowledgeId": "kp_0150",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c796",
    "chapter": "标准库与嵌入式限制",
    "topic": "assert",
    "difficulty": "进阶",
    "question": "关于「assert」的边界条件，哪项说法最准确？",
    "options": [
      "assert 适合开发期暴露错误，但发布固件要明确失败处理策略",
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则",
      "assert 可以替代运行时错误处理",
      "assert 在所有发布版都必须保留完整输出"
    ],
    "answer": 0,
    "explanation": "这段 assert 相关代码：裸机环境下 assert 可能进入死循环、复位或无输出。 实际项目中应把这个点写成明确的接口约束，而不是靠调用者猜测。",
    "tags": [
      "assert",
      "调试",
      "扩展题库"
    ],
    "knowledgeId": "kp_0151",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c797",
    "chapter": "标准库与嵌入式限制",
    "topic": "errno",
    "difficulty": "易错",
    "question": "为了让「errno」更可维护，哪项做法更推荐？",
    "options": [
      "errno 一定是全局共享且不可变",
      "errno 是库函数错误报告机制之一，多任务环境下要确认其线程局部实现",
      "errno 不需要在调用前后理解函数约定",
      "errno 能报告所有硬件寄存器错误"
    ],
    "answer": 1,
    "explanation": "这段 errno 相关代码：不同 C 库和 RTOS 移植层处理方式不同。 如果要写成公共模块，最好把容量、所有权和失败路径都放进接口说明。",
    "tags": [
      "errno",
      "标准库",
      "扩展题库"
    ],
    "knowledgeId": "kp_0152",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c798",
    "chapter": "标准库与嵌入式限制",
    "topic": "文件IO限制",
    "difficulty": "面试",
    "question": "选择「文件IO限制」实现方案时，哪项取舍更适合嵌入式项目？",
    "options": [
      "文件 IO 与链接脚本无关",
      "没有文件系统也能自动保存日志到磁盘",
      "裸机环境通常没有完整文件系统，stdio 文件接口可能不可用或需重定向",
      "只要当前编译器能通过，就可以认为写法完全可移植"
    ],
    "answer": 2,
    "explanation": "这段 文件IO限制 相关代码：移植标准库时要关注底层系统调用桩函数。 这也是嵌入式 C 容易挖坑的地方：局部写法会影响全局稳定性。",
    "tags": [
      "stdio",
      "裸机",
      "扩展题库",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0153",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c799",
    "chapter": "标准库与嵌入式限制",
    "topic": "printf代码体积",
    "difficulty": "基础",
    "question": "做裸机或 RTOS 项目时使用「printf代码体积」，哪项判断更可靠？",
    "options": [
      "printf 比直接寄存器输出一定更实时",
      "只要当前编译器能通过，就可以认为写法完全可移植",
      "把所有警告关闭，可以避免这类问题影响程序运行",
      "printf 尤其带浮点格式时可能显著增加代码体积"
    ],
    "answer": 3,
    "explanation": "这段 printf代码体积 相关代码：小 Flash 项目要评估格式化输出的链接开销。 做题时要把“能跑一次”和“标准保证、平台保证”分开看。",
    "tags": [
      "printf",
      "代码体积",
      "扩展题库"
    ],
    "knowledgeId": "kp_0149",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c800",
    "chapter": "标准库与嵌入式限制",
    "topic": "标准库可重入性",
    "difficulty": "进阶",
    "question": "下面哪项不是靠编译通过就能证明「标准库可重入性」安全的原因？",
    "options": [
      "某些标准库函数在特定实现中可能使用全局状态，需确认可重入性",
      "只要当前编译器能通过，就可以认为写法完全可移植",
      "把所有警告关闭，可以避免这类问题影响程序运行",
      "依赖一次测试输出即可证明该写法在所有平台都正确"
    ],
    "answer": 0,
    "explanation": "这段 标准库可重入性 相关代码：RTOS 和中断环境下调用库函数要看实现文档。 审查这类代码时，建议同时看边界、生命周期、类型和平台差异。",
    "tags": [
      "标准库",
      "可重入",
      "扩展题库",
      "自动存储期",
      "静态存储期",
      "局部变量分配"
    ],
    "knowledgeId": "kp_0150",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c801",
    "chapter": "标准库与嵌入式限制",
    "topic": "assert",
    "difficulty": "易错",
    "question": "针对「assert」写接口时，哪项输入约束应由调用者或被调用者明确？",
    "options": [
      "把所有警告关闭，可以避免这类问题影响程序运行",
      "assert 适合开发期暴露错误，但发布固件要明确失败处理策略",
      "依赖一次测试输出即可证明该写法在所有平台都正确",
      "遇到不确定行为时，直接用强制类型转换就能消除风险"
    ],
    "answer": 1,
    "explanation": "这段 assert 相关代码：裸机环境下 assert 可能进入死循环、复位或无输出。 更稳的做法是先保证 C 语义正确，再考虑性能和代码体积。",
    "tags": [
      "assert",
      "调试",
      "扩展题库"
    ],
    "knowledgeId": "kp_0151",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c802",
    "chapter": "标准库与嵌入式限制",
    "topic": "errno",
    "difficulty": "面试",
    "question": "下面哪种写法最符合「errno」的边界意识？",
    "options": [
      "依赖一次测试输出即可证明该写法在所有平台都正确",
      "遇到不确定行为时，直接用强制类型转换就能消除风险",
      "errno 是库函数错误报告机制之一，多任务环境下要确认其线程局部实现",
      "代码体积小就一定更安全，不需要关注边界条件"
    ],
    "answer": 2,
    "explanation": "这段 errno 相关代码：不同 C 库和 RTOS 移植层处理方式不同。 实际项目中应把这个点写成明确的接口约束，而不是靠调用者猜测。",
    "tags": [
      "errno",
      "标准库",
      "扩展题库"
    ],
    "knowledgeId": "kp_0152",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  },
  {
    "id": "c803",
    "chapter": "标准库与嵌入式限制",
    "topic": "文件IO限制",
    "difficulty": "基础",
    "question": "审查「文件IO限制」相关宏或接口时，哪项最需要写进注释或约定？",
    "options": [
      "遇到不确定行为时，直接用强制类型转换就能消除风险",
      "代码体积小就一定更安全，不需要关注边界条件",
      "嵌入式项目资源有限，所以可以忽略标准 C 的基本规则",
      "裸机环境通常没有完整文件系统，stdio 文件接口可能不可用或需重定向"
    ],
    "answer": 3,
    "explanation": "这段 文件IO限制 相关代码：移植标准库时要关注底层系统调用桩函数。 如果要写成公共模块，最好把容量、所有权和失败路径都放进接口说明。",
    "tags": [
      "stdio",
      "裸机",
      "扩展题库"
    ],
    "knowledgeId": "kp_0153",
    "type": "concept",
    "code": "",
    "reviewStatus": "待复核"
  }
]

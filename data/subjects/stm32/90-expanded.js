const q = require('./create-question')

module.exports = [
  q({
    id: "s101",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-01-02-s101",
    topic: "ARM Cortex-M 内核与 STM32 的关系",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「ARM Cortex-M 内核与 STM32 的关系」时，哪项理解最准确？",
    code: "",
    options: [
      "Cortex-M 题要区分 Thread/Handler 模式、MSP/PSP、异常返回和特权级",
      "所有异常都在 Thread 模式运行",
      "MSP 和 PSP 永远指向同一块栈",
      "EXC_RETURN 只是普通函数返回地址"
    ],
    answer: 0,
    explanation: "内核基础题考执行模式和栈。错误选项把异常机制当成普通 C 函数调用。",
    tags: [
      "STM32",
      "SPL",
      "ARM Cortex-M 内核与 STM32 的关系"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s102",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-01-01-s102",
    topic: "Cortex-M0、M3、M4、M7 差异",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「Cortex-M0、M3、M4、M7 差异」，哪项说法更稳妥？",
    code: "",
    options: [
      "Cortex-M 题要区分 Thread/Handler 模式、MSP/PSP、异常返回和特权级",
      "所有异常都在 Thread 模式运行",
      "MSP 和 PSP 永远指向同一块栈",
      "EXC_RETURN 只是普通函数返回地址"
    ],
    answer: 0,
    explanation: "内核基础题考执行模式和栈。错误选项把异常机制当成普通 C 函数调用。",
    tags: [
      "STM32",
      "SPL",
      "Cortex-M0、M3、M4、M7 差异"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s103",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-01-01-s103",
    topic: "时钟源概念",
    type: "concept",
    difficulty: "基础",
    question: "排查「时钟源概念」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "时钟源概念"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s104",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-01-01-s104",
    topic: "GPIO 端口与引脚",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「GPIO 端口与引脚」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO 端口与引脚"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s105",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-01-02-s105",
    topic: "中断源",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「中断源」时，哪项理解最准确？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "中断源"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s106",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-01-01-s106",
    topic: "EXTI 外部中断线",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「EXTI 外部中断线」，哪项说法更稳妥？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "EXTI 外部中断线"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s107",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-01-01-s107",
    topic: "SysTick 定时器",
    type: "concept",
    difficulty: "进阶",
    question: "排查「SysTick 定时器」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "SysTick 定时器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s108",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-01-01-s108",
    topic: "基本定时器",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「基本定时器」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "基本定时器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s109",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-01-01-s109",
    topic: "UART 与 USART 区别",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「UART 与 USART 区别」时，哪项理解最准确？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "UART 与 USART 区别"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s110",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-01-02-s110",
    topic: "DMA 控制器",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「DMA 控制器」，哪项说法更稳妥？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA 控制器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s111",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-01-02-s111",
    topic: "ADC 分辨率",
    type: "concept",
    difficulty: "面试",
    question: "排查「ADC 分辨率」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "ADC 分辨率"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s112",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-01-01-s112",
    topic: "DAC 是什么",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「DAC 是什么」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "DAC 输出要关注参考电压、输出缓冲、触发源和负载能力，数字值只决定理想比例",
      "DAC 可以直接驱动任意大功率负载",
      "DAC 输出与参考电压无关",
      "DAC 不需要模拟引脚配置"
    ],
    answer: 0,
    explanation: "DAC 题要把数字配置和模拟输出能力一起看。错误选项忽略了参考电压和负载限制。",
    tags: [
      "STM32",
      "SPL",
      "DAC 是什么"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s113",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-01-02-s113",
    topic: "SDA 数据线",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「SDA 数据线」时，哪项理解最准确？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "SDA 数据线"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s114",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-01-02-s114",
    topic: "SCK",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「SCK」，哪项说法更稳妥？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "SCK"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s115",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-01-01-s115",
    topic: "CAN 总线",
    type: "concept",
    difficulty: "基础",
    question: "排查「CAN 总线」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "CAN 总线"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s116",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-01-02-s116",
    topic: "SD 卡容量类型 SDSC / SDHC / SDXC",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「SD 卡容量类型 SDSC / SDHC / SDXC」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "SD 卡容量类型 SDSC / SDHC / SDXC"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s117",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-01-01-s117",
    topic: "RTC 实时时钟",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「RTC 实时时钟」时，哪项理解最准确？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "RTC 实时时钟"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s118",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-01-01-s118",
    topic: "片内 Flash",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「片内 Flash」，哪项说法更稳妥？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "片内 Flash"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s119",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-01-01-s119",
    topic: "IWDG 作用",
    type: "concept",
    difficulty: "进阶",
    question: "排查「IWDG 作用」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "IWDG 作用"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s120",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-01-01-s120",
    topic: "Sleep 模式",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「Sleep 模式」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "低功耗模式要区分 Sleep、Stop、Standby 的时钟、SRAM 保持、唤醒源和恢复流程",
      "所有低功耗模式唤醒后都从原语句继续且时钟不变",
      "Standby 和普通延时没有区别",
      "唤醒源不需要提前配置"
    ],
    answer: 0,
    explanation: "低功耗题常考模式差异和唤醒后的时钟恢复。错误选项把不同低功耗等级混为一谈。",
    tags: [
      "STM32",
      "SPL",
      "Sleep 模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s121",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-01-01-s121",
    topic: "Bootloader 是什么",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「Bootloader 是什么」时，哪项理解最准确？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "Bootloader 是什么"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s122",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-01-01-s122",
    topic: "Flash 起始地址",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「Flash 起始地址」，哪项说法更稳妥？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "Flash 起始地址"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s123",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-01-01-s123",
    topic: "标准外设库作用",
    type: "concept",
    difficulty: "基础",
    question: "排查「标准外设库作用」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "标准外设库作用"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s124",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-01-01-s124",
    topic: "外设基地址",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「外设基地址」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "外设基地址"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s125",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-01-02-s125",
    topic: "裸机与 RTOS 区别",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「裸机与 RTOS 区别」时，哪项理解最准确？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "裸机与 RTOS 区别"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s126",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-01-01-s126",
    topic: "SWD 下载",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「SWD 下载」，哪项说法更稳妥？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "SWD 下载"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s127",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-01-01-s127",
    topic: "帧头",
    type: "concept",
    difficulty: "基础",
    question: "排查「帧头」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "帧头"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s128",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-01-02-s128",
    topic: "上拉与下拉作用",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「上拉与下拉作用」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "上拉与下拉作用"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s129",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-01-01-s129",
    topic: "BSP 层",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「BSP 层」时，哪项理解最准确？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "BSP 层"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s130",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-01-03-s130",
    topic: "MCU、MPU、SoC 的区别",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「MCU、MPU、SoC 的区别」，哪项说法更稳妥？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "MCU、MPU、SoC 的区别"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s131",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-01-02-s131",
    topic: "Thumb 指令集",
    type: "concept",
    difficulty: "面试",
    question: "排查「Thumb 指令集」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "Cortex-M 题要区分 Thread/Handler 模式、MSP/PSP、异常返回和特权级",
      "所有异常都在 Thread 模式运行",
      "MSP 和 PSP 永远指向同一块栈",
      "EXC_RETURN 只是普通函数返回地址"
    ],
    answer: 0,
    explanation: "内核基础题考执行模式和栈。错误选项把异常机制当成普通 C 函数调用。",
    tags: [
      "STM32",
      "SPL",
      "Thumb 指令集"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s132",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-01-02-s132",
    topic: "HSI 内部高速时钟",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「HSI 内部高速时钟」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "HSI 内部高速时钟"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s133",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-01-02-s133",
    topic: "GPIO 输入模式",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「GPIO 输入模式」时，哪项理解最准确？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO 输入模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s134",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-01-03-s134",
    topic: "中断向量表",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「中断向量表」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "中断向量表"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s135",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-01-02-s135",
    topic: "GPIO 与 EXTI 映射",
    type: "concept",
    difficulty: "基础",
    question: "排查「GPIO 与 EXTI 映射」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO 与 EXTI 映射"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s136",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-01-02-s136",
    topic: "SysTick 24 位递减计数器",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「SysTick 24 位递减计数器」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "SysTick 24 位递减计数器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s137",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-01-02-s137",
    topic: "通用定时器",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「通用定时器」时，哪项理解最准确？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "通用定时器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s138",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-01-02-s138",
    topic: "波特率",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「波特率」，哪项说法更稳妥？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "波特率"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s139",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-01-03-s139",
    topic: "DMA 通道",
    type: "concept",
    difficulty: "基础",
    question: "排查「DMA 通道」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA 通道"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s140",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-01-03-s140",
    topic: "参考电压 Vref",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「参考电压 Vref」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "参考电压 Vref"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s141",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-01-02-s141",
    topic: "DAC 分辨率",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「DAC 分辨率」时，哪项理解最准确？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "DAC 分辨率"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s142",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-01-03-s142",
    topic: "SCL 时钟线",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「SCL 时钟线」，哪项说法更稳妥？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "SCL 时钟线"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s143",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-01-03-s143",
    topic: "MOSI",
    type: "concept",
    difficulty: "进阶",
    question: "排查「MOSI」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "MOSI"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s144",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-01-02-s144",
    topic: "CAN_H 与 CAN_L",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「CAN_H 与 CAN_L」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "CAN_H 与 CAN_L"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s145",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-01-03-s145",
    topic: "SD 卡块读写",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「SD 卡块读写」时，哪项理解最准确？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "SD 卡块读写"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s146",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-01-02-s146",
    topic: "备份域",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「备份域」，哪项说法更稳妥？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "备份域"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s147",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-01-02-s147",
    topic: "Flash 页 Page",
    type: "concept",
    difficulty: "基础",
    question: "排查「Flash 页 Page」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "Flash 页 Page"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s148",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-01-02-s148",
    topic: "LSI 时钟",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「LSI 时钟」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "LSI 时钟"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s149",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-01-02-s149",
    topic: "Stop 模式",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「Stop 模式」时，哪项理解最准确？",
    code: "",
    options: [
      "低功耗模式要区分 Sleep、Stop、Standby 的时钟、SRAM 保持、唤醒源和恢复流程",
      "所有低功耗模式唤醒后都从原语句继续且时钟不变",
      "Standby 和普通延时没有区别",
      "唤醒源不需要提前配置"
    ],
    answer: 0,
    explanation: "低功耗题常考模式差异和唤醒后的时钟恢复。错误选项把不同低功耗等级混为一谈。",
    tags: [
      "STM32",
      "SPL",
      "Stop 模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s150",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-01-02-s150",
    topic: "App 应用程序",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「App 应用程序」，哪项说法更稳妥？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "App 应用程序"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s151",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-01-02-s151",
    topic: "SRAM 起始地址",
    type: "concept",
    difficulty: "面试",
    question: "排查「SRAM 起始地址」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      "SRAM 起始地址"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s152",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-01-02-s152",
    topic: "外设结构体定义",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「外设结构体定义」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "外设结构体定义"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s153",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-01-02-s153",
    topic: "寄存器偏移",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「寄存器偏移」时，哪项理解最准确？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "寄存器偏移"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s154",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-01-03-s154",
    topic: "任务 Task",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「任务 Task」，哪项说法更稳妥？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "任务 Task"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s155",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-01-02-s155",
    topic: "JTAG 下载",
    type: "concept",
    difficulty: "进阶",
    question: "排查「JTAG 下载」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "JTAG 下载"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s156",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-01-02-s156",
    topic: "帧尾",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「帧尾」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "帧尾"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s157",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-01-03-s157",
    topic: "BSRR 为什么比 ODR 安全",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「BSRR 为什么比 ODR 安全」时，哪项理解最准确？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "BSRR 为什么比 ODR 安全"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s158",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-01-02-s158",
    topic: "Driver 层",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「Driver 层」，哪项说法更稳妥？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "Driver 层"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s159",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-01-04-s159",
    topic: "STM32 常见系列：F1、F4、G0、H7、L 系列",
    type: "concept",
    difficulty: "基础",
    question: "排查「STM32 常见系列：F1、F4、G0、H7、L 系列」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "STM32 常见系列：F1、F4、G0、H7、L 系列"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s160",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-01-03-s160",
    topic: "Thread Mode 与 Handler Mode",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「Thread Mode 与 Handler Mode」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "Thread Mode 与 Handler Mode"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s161",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-01-03-s161",
    topic: "HSE 外部高速时钟",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「HSE 外部高速时钟」时，哪项理解最准确？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "HSE 外部高速时钟"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s162",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-01-03-s162",
    topic: "GPIO 输出模式",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「GPIO 输出模式」，哪项说法更稳妥？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO 输出模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s163",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-01-04-s163",
    topic: "中断服务函数 ISR",
    type: "concept",
    difficulty: "基础",
    question: "排查「中断服务函数 ISR」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "中断服务函数 ISR"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s164",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-01-03-s164",
    topic: "上升沿触发",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「上升沿触发」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "上升沿触发"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s165",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-01-03-s165",
    topic: "SysTick 时钟来源",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「SysTick 时钟来源」时，哪项理解最准确？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "SysTick 时钟来源"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s166",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-01-03-s166",
    topic: "高级定时器",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「高级定时器」，哪项说法更稳妥？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "高级定时器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s167",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-01-03-s167",
    topic: "数据位",
    type: "concept",
    difficulty: "进阶",
    question: "排查「数据位」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "数据位"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s168",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-01-04-s168",
    topic: "DMA Stream",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「DMA Stream」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA Stream"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s169",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-01-04-s169",
    topic: "采样时间",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「采样时间」时，哪项理解最准确？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "采样时间"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s170",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-01-03-s170",
    topic: "DAC 输出电压",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「DAC 输出电压」，哪项说法更稳妥？",
    code: "",
    options: [
      "DAC 输出要关注参考电压、输出缓冲、触发源和负载能力，数字值只决定理想比例",
      "DAC 可以直接驱动任意大功率负载",
      "DAC 输出与参考电压无关",
      "DAC 不需要模拟引脚配置"
    ],
    answer: 0,
    explanation: "DAC 题要把数字配置和模拟输出能力一起看。错误选项忽略了参考电压和负载限制。",
    tags: [
      "STM32",
      "SPL",
      "DAC 输出电压"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s171",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-01-04-s171",
    topic: "开漏输出",
    type: "concept",
    difficulty: "面试",
    question: "排查「开漏输出」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "开漏输出"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s172",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-01-04-s172",
    topic: "MISO",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「MISO」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "MISO"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s173",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-01-03-s173",
    topic: "差分信号",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「差分信号」时，哪项理解最准确？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "差分信号"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s174",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-01-04-s174",
    topic: "扇区 Sector",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「扇区 Sector」，哪项说法更稳妥？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "扇区 Sector"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s175",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-01-03-s175",
    topic: "LSE 时钟",
    type: "concept",
    difficulty: "基础",
    question: "排查「LSE 时钟」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "LSE 时钟"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s176",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-01-03-s176",
    topic: "Flash 扇区 Sector",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「Flash 扇区 Sector」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "Flash 扇区 Sector"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s177",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-01-03-s177",
    topic: "IWDG 预分频",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「IWDG 预分频」时，哪项理解最准确？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "IWDG 预分频"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s178",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-01-03-s178",
    topic: "Standby 模式",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「Standby 模式」，哪项说法更稳妥？",
    code: "",
    options: [
      "低功耗模式要区分 Sleep、Stop、Standby 的时钟、SRAM 保持、唤醒源和恢复流程",
      "所有低功耗模式唤醒后都从原语句继续且时钟不变",
      "Standby 和普通延时没有区别",
      "唤醒源不需要提前配置"
    ],
    answer: 0,
    explanation: "低功耗题常考模式差异和唤醒后的时钟恢复。错误选项把不同低功耗等级混为一谈。",
    tags: [
      "STM32",
      "SPL",
      "Standby 模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s179",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-01-03-s179",
    topic: "Flash 分区",
    type: "concept",
    difficulty: "进阶",
    question: "排查「Flash 分区」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "Flash 分区"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s180",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-01-03-s180",
    topic: "栈区",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「栈区」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      "栈区"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s181",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-01-03-s181",
    topic: "初始化结构体模式",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「初始化结构体模式」时，哪项理解最准确？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "初始化结构体模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s182",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-01-03-s182",
    topic: "结构体映射寄存器",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「结构体映射寄存器」，哪项说法更稳妥？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "结构体映射寄存器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s183",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-01-04-s183",
    topic: "调度器 Scheduler",
    type: "concept",
    difficulty: "基础",
    question: "排查「调度器 Scheduler」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "调度器 Scheduler"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s184",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-01-03-s184",
    topic: "ST-Link",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「ST-Link」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "ST-Link"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s185",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-01-03-s185",
    topic: "长度字段",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「长度字段」时，哪项理解最准确？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "长度字段"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s186",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-01-04-s186",
    topic: "GPIO 为什么要开时钟",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「GPIO 为什么要开时钟」，哪项说法更稳妥？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "GPIO 为什么要开时钟"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s187",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-01-03-s187",
    topic: "App 层",
    type: "concept",
    difficulty: "基础",
    question: "排查「App 层」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "App 层"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s188",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-01-05-s188",
    topic: "STM32 型号命名规则",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「STM32 型号命名规则」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "STM32 型号命名规则"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s189",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-01-04-s189",
    topic: "MSP 主堆栈指针",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「MSP 主堆栈指针」时，哪项理解最准确？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "MSP 主堆栈指针"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s190",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-01-04-s190",
    topic: "LSI 内部低速时钟",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「LSI 内部低速时钟」，哪项说法更稳妥？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "LSI 内部低速时钟"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s191",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-01-04-s191",
    topic: "GPIO 复用功能模式",
    type: "concept",
    difficulty: "面试",
    question: "排查「GPIO 复用功能模式」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO 复用功能模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s192",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-01-05-s192",
    topic: "中断入口与退出",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「中断入口与退出」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "中断入口与退出"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s193",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-01-04-s193",
    topic: "下降沿触发",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「下降沿触发」时，哪项理解最准确？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "下降沿触发"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s194",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-01-04-s194",
    topic: "SysTick 重装载值",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「SysTick 重装载值」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "SysTick 重装载值"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s195",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-01-04-s195",
    topic: "计数器 CNT",
    type: "concept",
    difficulty: "基础",
    question: "排查「计数器 CNT」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "计数器 CNT"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s196",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-01-04-s196",
    topic: "停止位",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「停止位」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "停止位"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s197",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-01-05-s197",
    topic: "DMA 请求源",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「DMA 请求源」时，哪项理解最准确？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA 请求源"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s198",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-01-05-s198",
    topic: "转换时间",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「转换时间」，哪项说法更稳妥？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "转换时间"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s199",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-01-04-s199",
    topic: "DAC 数据对齐",
    type: "concept",
    difficulty: "基础",
    question: "排查「DAC 数据对齐」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "DAC 输出要关注参考电压、输出缓冲、触发源和负载能力，数字值只决定理想比例",
      "DAC 可以直接驱动任意大功率负载",
      "DAC 输出与参考电压无关",
      "DAC 不需要模拟引脚配置"
    ],
    answer: 0,
    explanation: "DAC 题要把数字配置和模拟输出能力一起看。错误选项忽略了参考电压和负载限制。",
    tags: [
      "STM32",
      "SPL",
      "DAC 数据对齐"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s200",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-01-05-s200",
    topic: "上拉电阻",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「上拉电阻」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "上拉电阻"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s201",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-01-05-s201",
    topic: "NSS / CS",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「NSS / CS」时，哪项理解最准确？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "NSS / CS"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s202",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-01-04-s202",
    topic: "终端电阻",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「终端电阻」，哪项说法更稳妥？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "终端电阻"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s203",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-01-05-s203",
    topic: "块大小 Block Size",
    type: "concept",
    difficulty: "进阶",
    question: "排查「块大小 Block Size」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "块大小 Block Size"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s204",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-01-04-s204",
    topic: "LSI 时钟",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「LSI 时钟」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "LSI 时钟"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s205",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-01-04-s205",
    topic: "Flash 擦除",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「Flash 擦除」时，哪项理解最准确？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "Flash 擦除"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s206",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-01-04-s206",
    topic: "IWDG 重装载值",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「IWDG 重装载值」，哪项说法更稳妥？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "IWDG 重装载值"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s207",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-01-04-s207",
    topic: "Shutdown 模式",
    type: "concept",
    difficulty: "基础",
    question: "排查「Shutdown 模式」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "低功耗模式要区分 Sleep、Stop、Standby 的时钟、SRAM 保持、唤醒源和恢复流程",
      "所有低功耗模式唤醒后都从原语句继续且时钟不变",
      "Standby 和普通延时没有区别",
      "唤醒源不需要提前配置"
    ],
    answer: 0,
    explanation: "低功耗题常考模式差异和唤醒后的时钟恢复。错误选项把不同低功耗等级混为一谈。",
    tags: [
      "STM32",
      "SPL",
      "Shutdown 模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s208",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-01-04-s208",
    topic: "启动地址",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「启动地址」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "启动地址"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s209",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-01-04-s209",
    topic: "堆区",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「堆区」时，哪项理解最准确？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      "堆区"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s210",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-01-04-s210",
    topic: "外设 Init 函数",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「外设 Init 函数」，哪项说法更稳妥？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "外设 Init 函数"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s211",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-01-04-s211",
    topic: "volatile 寄存器访问",
    type: "concept",
    difficulty: "面试",
    question: "排查「volatile 寄存器访问」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "volatile 寄存器访问"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s212",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-01-05-s212",
    topic: "抢占式调度",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「抢占式调度」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "抢占式调度"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s213",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-01-04-s213",
    topic: "J-Link",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「J-Link」时，哪项理解最准确？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "J-Link"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s214",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-01-04-s214",
    topic: "命令字",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「命令字」，哪项说法更稳妥？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "命令字"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s215",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-01-05-s215",
    topic: "输入浮空的风险",
    type: "concept",
    difficulty: "进阶",
    question: "排查「输入浮空的风险」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "输入浮空的风险"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s216",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-01-04-s216",
    topic: "模块化设计",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「模块化设计」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "模块化设计"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s217",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-01-06-s217",
    topic: "STM32 片上资源概念",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「STM32 片上资源概念」时，哪项理解最准确？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "STM32 片上资源概念"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s218",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-01-05-s218",
    topic: "PSP 进程堆栈指针",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「PSP 进程堆栈指针」，哪项说法更稳妥？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      "PSP 进程堆栈指针"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s219",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-01-05-s219",
    topic: "LSE 外部低速时钟",
    type: "concept",
    difficulty: "基础",
    question: "排查「LSE 外部低速时钟」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "LSE 外部低速时钟"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s220",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-01-05-s220",
    topic: "GPIO 模拟输入模式",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「GPIO 模拟输入模式」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO 模拟输入模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s221",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-01-06-s221",
    topic: "中断现场保护",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「中断现场保护」时，哪项理解最准确？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "中断现场保护"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s222",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-01-05-s222",
    topic: "双边沿触发",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「双边沿触发」，哪项说法更稳妥？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "双边沿触发"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s223",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-01-05-s223",
    topic: "SysTick 中断",
    type: "concept",
    difficulty: "基础",
    question: "排查「SysTick 中断」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "SysTick 中断"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s224",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-01-05-s224",
    topic: "预分频器 PSC",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「预分频器 PSC」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "预分频器 PSC"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s225",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-01-05-s225",
    topic: "校验位",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「校验位」时，哪项理解最准确？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "校验位"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s226",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-01-06-s226",
    topic: "外设到内存",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「外设到内存」，哪项说法更稳妥？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "外设到内存"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s227",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-01-06-s227",
    topic: "单次转换",
    type: "concept",
    difficulty: "进阶",
    question: "排查「单次转换」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "单次转换"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s228",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-01-05-s228",
    topic: "DAC 通道",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「DAC 通道」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "DAC 输出要关注参考电压、输出缓冲、触发源和负载能力，数字值只决定理想比例",
      "DAC 可以直接驱动任意大功率负载",
      "DAC 输出与参考电压无关",
      "DAC 不需要模拟引脚配置"
    ],
    answer: 0,
    explanation: "DAC 题要把数字配置和模拟输出能力一起看。错误选项忽略了参考电压和负载限制。",
    tags: [
      "STM32",
      "SPL",
      "DAC 通道"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s229",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-01-07-s229",
    topic: "7 位地址",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「7 位地址」时，哪项理解最准确？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "7 位地址"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s230",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-01-06-s230",
    topic: "主机模式",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「主机模式」，哪项说法更稳妥？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "主机模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s231",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-01-05-s231",
    topic: "标准帧",
    type: "concept",
    difficulty: "面试",
    question: "排查「标准帧」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "标准帧"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s232",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-01-06-s232",
    topic: "SD 卡初始化流程",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「SD 卡初始化流程」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "SD 卡初始化流程"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s233",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-01-05-s233",
    topic: "RTC 预分频",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「RTC 预分频」时，哪项理解最准确？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "RTC 预分频"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s234",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-01-05-s234",
    topic: "Flash 编程",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「Flash 编程」，哪项说法更稳妥？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "Flash 编程"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s235",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-01-05-s235",
    topic: "喂狗",
    type: "concept",
    difficulty: "基础",
    question: "排查「喂狗」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "喂狗"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s236",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-01-05-s236",
    topic: "运行模式功耗",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「运行模式功耗」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "低功耗模式要区分 Sleep、Stop、Standby 的时钟、SRAM 保持、唤醒源和恢复流程",
      "所有低功耗模式唤醒后都从原语句继续且时钟不变",
      "Standby 和普通延时没有区别",
      "唤醒源不需要提前配置"
    ],
    answer: 0,
    explanation: "低功耗题常考模式差异和唤醒后的时钟恢复。错误选项把不同低功耗等级混为一谈。",
    tags: [
      "STM32",
      "SPL",
      "运行模式功耗"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s237",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-01-05-s237",
    topic: "中断向量表重定位",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「中断向量表重定位」时，哪项理解最准确？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "中断向量表重定位"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s238",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-01-05-s238",
    topic: ".text 段",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「.text 段」，哪项说法更稳妥？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      ".text 段"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s239",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-01-05-s239",
    topic: "外设 Cmd 函数",
    type: "concept",
    difficulty: "进阶",
    question: "排查「外设 Cmd 函数」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "外设 Cmd 函数"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s240",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-01-05-s240",
    topic: "位操作配置寄存器",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「位操作配置寄存器」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "位操作配置寄存器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s241",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-01-06-s241",
    topic: "时间片轮转",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「时间片轮转」时，哪项理解最准确？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "时间片轮转"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s242",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-01-05-s242",
    topic: "串口 ISP 下载",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「串口 ISP 下载」，哪项说法更稳妥？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "串口 ISP 下载"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s243",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-01-05-s243",
    topic: "校验和",
    type: "concept",
    difficulty: "基础",
    question: "排查「校验和」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "校验和"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s244",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-01-06-s244",
    topic: "复用功能配置错误排查",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「复用功能配置错误排查」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "复用功能配置错误排查"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s245",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-01-05-s245",
    topic: "状态机设计",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「状态机设计」时，哪项理解最准确？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "状态机设计"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s246",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-01-07-s246",
    topic: "外设挂载到总线的概念",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「外设挂载到总线的概念」，哪项说法更稳妥？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "外设挂载到总线的概念"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s247",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-01-06-s247",
    topic: "CONTROL 寄存器",
    type: "concept",
    difficulty: "基础",
    question: "排查「CONTROL 寄存器」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "CONTROL 寄存器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s248",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-01-06-s248",
    topic: "PLL 锁相环",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「PLL 锁相环」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "PLL 锁相环"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s249",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-01-08-s249",
    topic: "上拉输入",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「上拉输入」时，哪项理解最准确？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "上拉输入"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s250",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-01-07-s250",
    topic: "中断嵌套",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「中断嵌套」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "中断嵌套"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s251",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-01-06-s251",
    topic: "EXTI 中断模式",
    type: "concept",
    difficulty: "面试",
    question: "排查「EXTI 中断模式」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "EXTI 中断模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s252",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-01-06-s252",
    topic: "SysTick_Config",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「SysTick_Config」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "SysTick_Config"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s253",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-01-06-s253",
    topic: "自动重装载寄存器 ARR",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「自动重装载寄存器 ARR」时，哪项理解最准确？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "自动重装载寄存器 ARR"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s254",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-01-06-s254",
    topic: "全双工通信",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「全双工通信」，哪项说法更稳妥？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "全双工通信"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s255",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-01-07-s255",
    topic: "内存到外设",
    type: "concept",
    difficulty: "基础",
    question: "排查「内存到外设」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "内存到外设"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s256",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-01-07-s256",
    topic: "连续转换",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「连续转换」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "连续转换"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s257",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-01-06-s257",
    topic: "DAC 输出缓冲",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「DAC 输出缓冲」时，哪项理解最准确？",
    code: "",
    options: [
      "DAC 输出要关注参考电压、输出缓冲、触发源和负载能力，数字值只决定理想比例",
      "DAC 可以直接驱动任意大功率负载",
      "DAC 输出与参考电压无关",
      "DAC 不需要模拟引脚配置"
    ],
    answer: 0,
    explanation: "DAC 题要把数字配置和模拟输出能力一起看。错误选项忽略了参考电压和负载限制。",
    tags: [
      "STM32",
      "SPL",
      "DAC 输出缓冲"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s258",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-01-08-s258",
    topic: "10 位地址",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「10 位地址」，哪项说法更稳妥？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "10 位地址"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s259",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-01-07-s259",
    topic: "从机模式",
    type: "concept",
    difficulty: "基础",
    question: "排查「从机模式」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "从机模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s260",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-01-06-s260",
    topic: "扩展帧",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「扩展帧」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "扩展帧"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s261",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-01-07-s261",
    topic: "SD 卡命令 CMD",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「SD 卡命令 CMD」时，哪项理解最准确？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "SD 卡命令 CMD"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s262",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-01-06-s262",
    topic: "日期时间寄存器",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「日期时间寄存器」，哪项说法更稳妥？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "日期时间寄存器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s263",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-01-06-s263",
    topic: "Flash 写保护",
    type: "concept",
    difficulty: "进阶",
    question: "排查「Flash 写保护」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "Flash 写保护"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s264",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-01-06-s264",
    topic: "超时复位",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「超时复位」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "超时复位"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s265",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-01-06-s265",
    topic: "外设时钟关闭",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「外设时钟关闭」时，哪项理解最准确？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "外设时钟关闭"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s266",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-01-06-s266",
    topic: "MSP 设置",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「MSP 设置」，哪项说法更稳妥？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "MSP 设置"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s267",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-01-06-s267",
    topic: ".rodata 段",
    type: "concept",
    difficulty: "基础",
    question: "排查「.rodata 段」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      ".rodata 段"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s268",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-01-06-s268",
    topic: "Flag 状态读取",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「Flag 状态读取」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "Flag 状态读取"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s269",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-01-06-s269",
    topic: "读改写风险",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「读改写风险」时，哪项理解最准确？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "读改写风险"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s270",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-01-07-s270",
    topic: "Tick 节拍",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「Tick 节拍」，哪项说法更稳妥？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "Tick 节拍"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s271",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-01-06-s271",
    topic: "Boot0 配置",
    type: "concept",
    difficulty: "面试",
    question: "排查「Boot0 配置」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "Boot0 配置"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s272",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-01-06-s272",
    topic: "CRC 校验",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「CRC 校验」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "CRC 校验"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s273",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-01-07-s273",
    topic: "SWD/JTAG 引脚被占用问题",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「SWD/JTAG 引脚被占用问题」时，哪项理解最准确？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "SWD/JTAG 引脚被占用问题"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s274",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-01-06-s274",
    topic: "事件驱动设计",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「事件驱动设计」，哪项说法更稳妥？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "事件驱动设计"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s275",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-01-09-s275",
    topic: "外设时钟与外设工作的关系",
    type: "concept",
    difficulty: "进阶",
    question: "排查「外设时钟与外设工作的关系」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "外设时钟与外设工作的关系"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s276",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-01-07-s276",
    topic: "xPSR 程序状态寄存器",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「xPSR 程序状态寄存器」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "xPSR 程序状态寄存器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s277",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-01-07-s277",
    topic: "系统时钟 SYSCLK",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「系统时钟 SYSCLK」时，哪项理解最准确？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "系统时钟 SYSCLK"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s278",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-01-09-s278",
    topic: "下拉输入",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「下拉输入」，哪项说法更稳妥？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "下拉输入"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s279",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-01-08-s279",
    topic: "中断使能",
    type: "concept",
    difficulty: "基础",
    question: "排查「中断使能」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "中断使能"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s280",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-01-07-s280",
    topic: "EXTI 事件模式",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「EXTI 事件模式」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "EXTI 事件模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s281",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-01-07-s281",
    topic: "SysTick_Handler",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「SysTick_Handler」时，哪项理解最准确？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "SysTick_Handler"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s282",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-01-07-s282",
    topic: "更新事件",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「更新事件」，哪项说法更稳妥？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "更新事件"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s283",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-01-07-s283",
    topic: "半双工通信",
    type: "concept",
    difficulty: "基础",
    question: "排查「半双工通信」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "半双工通信"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s284",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-01-08-s284",
    topic: "内存到内存",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「内存到内存」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "内存到内存"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s285",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-01-08-s285",
    topic: "扫描模式",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「扫描模式」时，哪项理解最准确？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "扫描模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s286",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-01-07-s286",
    topic: "DAC 触发源",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「DAC 触发源」，哪项说法更稳妥？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "DAC 触发源"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s287",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-01-09-s287",
    topic: "ACK 应答",
    type: "concept",
    difficulty: "进阶",
    question: "排查「ACK 应答」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "ACK 应答"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s288",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-01-08-s288",
    topic: "全双工",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「全双工」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "全双工"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s289",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-01-07-s289",
    topic: "数据帧",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「数据帧」时，哪项理解最准确？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "数据帧"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s290",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-01-08-s290",
    topic: "SD 卡响应 Response",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「SD 卡响应 Response」，哪项说法更稳妥？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "SD 卡响应 Response"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s291",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-01-07-s291",
    topic: "闹钟 Alarm",
    type: "concept",
    difficulty: "面试",
    question: "排查「闹钟 Alarm」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "闹钟 Alarm"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s292",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-01-07-s292",
    topic: "Option Bytes",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「Option Bytes」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "Option Bytes"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s293",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-01-07-s293",
    topic: "IWDG 无法关闭",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「IWDG 无法关闭」时，哪项理解最准确？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "IWDG 无法关闭"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s294",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-01-07-s294",
    topic: "GPIO 低功耗配置",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「GPIO 低功耗配置」，哪项说法更稳妥？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO 低功耗配置"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s295",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-01-07-s295",
    topic: "跳转到 App",
    type: "concept",
    difficulty: "基础",
    question: "排查「跳转到 App」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "跳转到 App"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s296",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-01-07-s296",
    topic: ".data 段",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「.data 段」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      ".data 段"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s297",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-01-07-s297",
    topic: "IT 中断状态读取",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「IT 中断状态读取」时，哪项理解最准确？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "IT 中断状态读取"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s298",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-01-07-s298",
    topic: "只读寄存器",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「只读寄存器」，哪项说法更稳妥？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "只读寄存器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s299",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-01-08-s299",
    topic: "空闲任务",
    type: "concept",
    difficulty: "进阶",
    question: "排查「空闲任务」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "空闲任务"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s300",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-01-07-s300",
    topic: "复位方式",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「复位方式」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "复位方式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s301",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-01-07-s301",
    topic: "超时重传",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「超时重传」时，哪项理解最准确？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "超时重传"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s302",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-01-08-s302",
    topic: "GPIO 输出速度含义",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「GPIO 输出速度含义」，哪项说法更稳妥？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO 输出速度含义"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s303",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-01-07-s303",
    topic: "回调函数设计",
    type: "concept",
    difficulty: "基础",
    question: "排查「回调函数设计」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "回调函数设计"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s304",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-01-10-s304",
    topic: "裸机程序基本运行流程",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「裸机程序基本运行流程」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "裸机程序基本运行流程"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s305",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-01-08-s305",
    topic: "LR 特殊返回值 EXC_RETURN",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「LR 特殊返回值 EXC_RETURN」时，哪项理解最准确？",
    code: "",
    options: [
      "Cortex-M 题要区分 Thread/Handler 模式、MSP/PSP、异常返回和特权级",
      "所有异常都在 Thread 模式运行",
      "MSP 和 PSP 永远指向同一块栈",
      "EXC_RETURN 只是普通函数返回地址"
    ],
    answer: 0,
    explanation: "内核基础题考执行模式和栈。错误选项把异常机制当成普通 C 函数调用。",
    tags: [
      "STM32",
      "SPL",
      "LR 特殊返回值 EXC_RETURN"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s306",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-01-08-s306",
    topic: "AHB 总线时钟 HCLK",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「AHB 总线时钟 HCLK」，哪项说法更稳妥？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "AHB 总线时钟 HCLK"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s307",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-01-10-s307",
    topic: "浮空输入",
    type: "concept",
    difficulty: "基础",
    question: "排查「浮空输入」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "浮空输入"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s308",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-01-09-s308",
    topic: "中断挂起",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「中断挂起」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "中断挂起"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s309",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-01-08-s309",
    topic: "EXTI 线复用冲突",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「EXTI 线复用冲突」时，哪项理解最准确？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "EXTI 线复用冲突"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s310",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-01-08-s310",
    topic: "毫秒 tick 计数",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「毫秒 tick 计数」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "毫秒 tick 计数"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s311",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-01-08-s311",
    topic: "定时器溢出",
    type: "concept",
    difficulty: "面试",
    question: "排查「定时器溢出」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "定时器溢出"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s312",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-01-08-s312",
    topic: "TTL 串口",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「TTL 串口」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "TTL 串口"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s313",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-01-09-s313",
    topic: "DMA 传输方向",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「DMA 传输方向」时，哪项理解最准确？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA 传输方向"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s314",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-01-09-s314",
    topic: "规则通道",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「规则通道」，哪项说法更稳妥？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "规则通道"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s315",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-01-08-s315",
    topic: "DAC DMA",
    type: "concept",
    difficulty: "基础",
    question: "排查「DAC DMA」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DAC DMA"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s316",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-01-10-s316",
    topic: "NACK 非应答",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「NACK 非应答」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "NACK 非应答"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s317",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-01-09-s317",
    topic: "半双工",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「半双工」时，哪项理解最准确？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "半双工"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s318",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-01-08-s318",
    topic: "远程帧",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「远程帧」，哪项说法更稳妥？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "远程帧"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s319",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-01-09-s319",
    topic: "SD 卡忙状态",
    type: "concept",
    difficulty: "基础",
    question: "排查「SD 卡忙状态」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "SD 卡忙状态"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s320",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-01-08-s320",
    topic: "Wakeup 唤醒定时器",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「Wakeup 唤醒定时器」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "Wakeup 唤醒定时器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s321",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-01-08-s321",
    topic: "读保护 RDP",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「读保护 RDP」时，哪项理解最准确？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "读保护 RDP"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s322",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-01-08-s322",
    topic: "低功耗下 IWDG",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「低功耗下 IWDG」，哪项说法更稳妥？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "低功耗下 IWDG"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s323",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-01-08-s323",
    topic: "Flash 低功耗",
    type: "concept",
    difficulty: "进阶",
    question: "排查「Flash 低功耗」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "Flash 低功耗"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s324",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-01-08-s324",
    topic: "Boot0 启动模式",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「Boot0 启动模式」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "Boot0 启动模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s325",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-01-08-s325",
    topic: ".bss 段",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「.bss 段」时，哪项理解最准确？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      ".bss 段"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s326",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-01-08-s326",
    topic: "PendingBit 清除",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「PendingBit 清除」，哪项说法更稳妥？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "PendingBit 清除"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s327",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-01-08-s327",
    topic: "只写寄存器",
    type: "concept",
    difficulty: "基础",
    question: "排查「只写寄存器」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "只写寄存器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s328",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-01-09-s328",
    topic: "守护任务",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「守护任务」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "守护任务"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s329",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-01-08-s329",
    topic: "下载失败排查",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「下载失败排查」时，哪项理解最准确？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "下载失败排查"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s330",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-01-08-s330",
    topic: "ACK 应答",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「ACK 应答」，哪项说法更稳妥？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "ACK 应答"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s331",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-01-09-s331",
    topic: "按键消抖方法",
    type: "concept",
    difficulty: "面试",
    question: "排查「按键消抖方法」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "按键消抖方法"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s332",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-01-08-s332",
    topic: "配置文件设计",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「配置文件设计」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "配置文件设计"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s333",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-02-01-s333",
    topic: "标准外设库 SPL 是什么",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「标准外设库 SPL 是什么」时，哪项理解最准确？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "标准外设库 SPL 是什么"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s334",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-01-09-s334",
    topic: "内核寄存器组",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「内核寄存器组」，哪项说法更稳妥？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "内核寄存器组"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s335",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-01-09-s335",
    topic: "APB1 总线时钟 PCLK1",
    type: "concept",
    difficulty: "进阶",
    question: "排查「APB1 总线时钟 PCLK1」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "APB1 总线时钟 PCLK1"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s336",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-02-01-s336",
    topic: "GPIO_InitTypeDef",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「GPIO_InitTypeDef」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO_InitTypeDef"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s337",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-01-10-s337",
    topic: "中断清除",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「中断清除」时，哪项理解最准确？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "中断清除"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s338",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-01-09-s338",
    topic: "EXTI0 到 EXTI15",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「EXTI0 到 EXTI15」，哪项说法更稳妥？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "EXTI0 到 EXTI15"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s339",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-01-09-s339",
    topic: "SysTick 溢出",
    type: "concept",
    difficulty: "基础",
    question: "排查「SysTick 溢出」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "SysTick 溢出"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s340",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-01-09-s340",
    topic: "定时中断",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「定时中断」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "定时中断"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s341",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-01-09-s341",
    topic: "RS232",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「RS232」时，哪项理解最准确？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "RS232"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s342",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-01-10-s342",
    topic: "DMA 优先级",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「DMA 优先级」，哪项说法更稳妥？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA 优先级"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s343",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-01-10-s343",
    topic: "注入通道",
    type: "concept",
    difficulty: "基础",
    question: "排查「注入通道」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "注入通道"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s344",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-01-09-s344",
    topic: "波形输出",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「波形输出」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "DAC 输出要关注参考电压、输出缓冲、触发源和负载能力，数字值只决定理想比例",
      "DAC 可以直接驱动任意大功率负载",
      "DAC 输出与参考电压无关",
      "DAC 不需要模拟引脚配置"
    ],
    answer: 0,
    explanation: "DAC 题要把数字配置和模拟输出能力一起看。错误选项忽略了参考电压和负载限制。",
    tags: [
      "STM32",
      "SPL",
      "波形输出"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s345",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-02-01-s345",
    topic: "起始信号 START",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「起始信号 START」时，哪项理解最准确？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "起始信号 START"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s346",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-01-10-s346",
    topic: "同步串行通信",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「同步串行通信」，哪项说法更稳妥？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "同步串行通信"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s347",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-01-09-s347",
    topic: "仲裁机制",
    type: "concept",
    difficulty: "进阶",
    question: "排查「仲裁机制」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "仲裁机制"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s348",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-01-10-s348",
    topic: "SD 卡热插拔",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「SD 卡热插拔」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "SD 卡热插拔"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s349",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-01-09-s349",
    topic: "备份寄存器",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「备份寄存器」时，哪项理解最准确？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "备份寄存器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s350",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-01-09-s350",
    topic: "Flash 等待周期",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「Flash 等待周期」，哪项说法更稳妥？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "Flash 等待周期"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s351",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-01-09-s351",
    topic: "IWDG 超时时间计算",
    type: "concept",
    difficulty: "面试",
    question: "排查「IWDG 超时时间计算」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "IWDG 超时时间计算"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s352",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-01-09-s352",
    topic: "SRAM 保持",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「SRAM 保持」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "低功耗模式要区分 Sleep、Stop、Standby 的时钟、SRAM 保持、唤醒源和恢复流程",
      "所有低功耗模式唤醒后都从原语句继续且时钟不变",
      "Standby 和普通延时没有区别",
      "唤醒源不需要提前配置"
    ],
    answer: 0,
    explanation: "低功耗题常考模式差异和唤醒后的时钟恢复。错误选项把不同低功耗等级混为一谈。",
    tags: [
      "STM32",
      "SPL",
      "SRAM 保持"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s353",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-01-09-s353",
    topic: "系统 Bootloader",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「系统 Bootloader」时，哪项理解最准确？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "系统 Bootloader"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s354",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-01-09-s354",
    topic: "向量表段",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「向量表段」，哪项说法更稳妥？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "向量表段"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s355",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-01-09-s355",
    topic: "外设 DeInit 函数",
    type: "concept",
    difficulty: "基础",
    question: "排查「外设 DeInit 函数」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "外设 DeInit 函数"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s356",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-01-09-s356",
    topic: "写 1 清零标志位",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「写 1 清零标志位」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "写 1 清零标志位"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s357",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-01-10-s357",
    topic: "任务优先级",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「任务优先级」时，哪项理解最准确？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "任务优先级"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s358",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-01-09-s358",
    topic: "芯片锁定解除",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「芯片锁定解除」，哪项说法更稳妥？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "芯片锁定解除"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s359",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-01-09-s359",
    topic: "粘包处理",
    type: "concept",
    difficulty: "进阶",
    question: "排查「粘包处理」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "粘包处理"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s360",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-01-10-s360",
    topic: "GPIO 中断配置流程",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「GPIO 中断配置流程」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO 中断配置流程"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s361",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-01-09-s361",
    topic: "日志系统设计",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「日志系统设计」时，哪项理解最准确？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "日志系统设计"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s362",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-02-02-s362",
    topic: "标准库与寄存器的关系",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「标准库与寄存器的关系」，哪项说法更稳妥？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "标准库与寄存器的关系"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s363",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-01-10-s363",
    topic: "特权级与非特权级",
    type: "concept",
    difficulty: "基础",
    question: "排查「特权级与非特权级」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "Cortex-M 题要区分 Thread/Handler 模式、MSP/PSP、异常返回和特权级",
      "所有异常都在 Thread 模式运行",
      "MSP 和 PSP 永远指向同一块栈",
      "EXC_RETURN 只是普通函数返回地址"
    ],
    answer: 0,
    explanation: "内核基础题考执行模式和栈。错误选项把异常机制当成普通 C 函数调用。",
    tags: [
      "STM32",
      "SPL",
      "特权级与非特权级"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s364",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-01-10-s364",
    topic: "APB2 总线时钟 PCLK2",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「APB2 总线时钟 PCLK2」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "APB2 总线时钟 PCLK2"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s365",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-02-02-s365",
    topic: "GPIO_Pin 字段",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「GPIO_Pin 字段」时，哪项理解最准确？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO_Pin 字段"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s366",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-02-02-s366",
    topic: "NVIC_IRQChannel",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「NVIC_IRQChannel」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "NVIC_IRQChannel"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s367",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-01-10-s367",
    topic: "EXTI 分组中断",
    type: "concept",
    difficulty: "基础",
    question: "排查「EXTI 分组中断」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "EXTI 分组中断"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s368",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-01-10-s368",
    topic: "SysTick 与系统节拍",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「SysTick 与系统节拍」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "SysTick 与系统节拍"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s369",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-01-10-s369",
    topic: "定时周期计算",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「定时周期计算」时，哪项理解最准确？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "定时周期计算"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s370",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-01-10-s370",
    topic: "RS485",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「RS485」，哪项说法更稳妥？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "RS485"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s371",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-02-01-s371",
    topic: "DMA_InitTypeDef",
    type: "concept",
    difficulty: "面试",
    question: "排查「DMA_InitTypeDef」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA_InitTypeDef"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s372",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-02-01-s372",
    topic: "ADC_InitTypeDef",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「ADC_InitTypeDef」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "ADC_InitTypeDef"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s373",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-01-10-s373",
    topic: "DAC 噪声",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「DAC 噪声」时，哪项理解最准确？",
    code: "",
    options: [
      "DAC 输出要关注参考电压、输出缓冲、触发源和负载能力，数字值只决定理想比例",
      "DAC 可以直接驱动任意大功率负载",
      "DAC 输出与参考电压无关",
      "DAC 不需要模拟引脚配置"
    ],
    answer: 0,
    explanation: "DAC 题要把数字配置和模拟输出能力一起看。错误选项忽略了参考电压和负载限制。",
    tags: [
      "STM32",
      "SPL",
      "DAC 噪声"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s374",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-02-03-s374",
    topic: "地址发送",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「地址发送」，哪项说法更稳妥？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "地址发送"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s375",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-02-01-s375",
    topic: "CPOL 时钟极性",
    type: "concept",
    difficulty: "基础",
    question: "排查「CPOL 时钟极性」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "CPOL 时钟极性"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s376",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-01-10-s376",
    topic: "CAN ID 优先级",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「CAN ID 优先级」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "CAN ID 优先级"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s377",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-02-01-s377",
    topic: "SDIO 是什么",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「SDIO 是什么」时，哪项理解最准确？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "SDIO 是什么"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s378",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-01-10-s378",
    topic: "VBAT 供电",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「VBAT 供电」，哪项说法更稳妥？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "VBAT 供电"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s379",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-01-10-s379",
    topic: "Flash 寿命",
    type: "concept",
    difficulty: "基础",
    question: "排查「Flash 寿命」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "Flash 寿命"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s380",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-01-10-s380",
    topic: "IWDG 调试风险",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「IWDG 调试风险」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "IWDG 调试风险"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s381",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-01-10-s381",
    topic: "唤醒源",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「唤醒源」时，哪项理解最准确？",
    code: "",
    options: [
      "低功耗模式要区分 Sleep、Stop、Standby 的时钟、SRAM 保持、唤醒源和恢复流程",
      "所有低功耗模式唤醒后都从原语句继续且时钟不变",
      "Standby 和普通延时没有区别",
      "唤醒源不需要提前配置"
    ],
    answer: 0,
    explanation: "低功耗题常考模式差异和唤醒后的时钟恢复。错误选项把不同低功耗等级混为一谈。",
    tags: [
      "STM32",
      "SPL",
      "唤醒源"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s382",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-01-10-s382",
    topic: "用户 Bootloader",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「用户 Bootloader」，哪项说法更稳妥？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "用户 Bootloader"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s383",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-01-10-s383",
    topic: "自定义段",
    type: "concept",
    difficulty: "进阶",
    question: "排查「自定义段」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      "自定义段"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s384",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-01-10-s384",
    topic: "assert_param 参数检查",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「assert_param 参数检查」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "assert_param 参数检查"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s385",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-01-10-s385",
    topic: "寄存器保留位",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「寄存器保留位」时，哪项理解最准确？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "寄存器保留位"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s386",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-02-01-s386",
    topic: "xTaskCreate",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「xTaskCreate」，哪项说法更稳妥？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "xTaskCreate"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s387",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-01-10-s387",
    topic: "下载后不运行",
    type: "concept",
    difficulty: "基础",
    question: "排查「下载后不运行」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "下载后不运行"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s388",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-01-10-s388",
    topic: "拆包处理",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「拆包处理」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "拆包处理"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s389",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-02-01-s389",
    topic: "NVIC 优先级分组",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「NVIC 优先级分组」时，哪项理解最准确？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "NVIC 优先级分组"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s390",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-01-10-s390",
    topic: "错误码设计",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「错误码设计」，哪项说法更稳妥？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "错误码设计"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s391",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-02-06-s391",
    topic: "Keil MDK 标准库工程结构",
    type: "concept",
    difficulty: "面试",
    question: "排查「Keil MDK 标准库工程结构」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "Keil MDK 标准库工程结构"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s392",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-02-01-s392",
    topic: "Flash 地址空间",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「Flash 地址空间」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "Flash 地址空间"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s393",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-02-01-s393",
    topic: "SystemInit 函数",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「SystemInit 函数」时，哪项理解最准确？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "SystemInit 函数"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s394",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-02-03-s394",
    topic: "GPIO_Mode 字段",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「GPIO_Mode 字段」，哪项说法更稳妥？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO_Mode 字段"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s395",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-02-03-s395",
    topic: "NVIC_IRQChannelPreemptionPriority",
    type: "concept",
    difficulty: "进阶",
    question: "排查「NVIC_IRQChannelPreemptionPriority」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "NVIC_IRQChannelPreemptionPriority"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s396",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-02-01-s396",
    topic: "EXTI_InitTypeDef",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「EXTI_InitTypeDef」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "EXTI_InitTypeDef"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s397",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-02-01-s397",
    topic: "阻塞延时",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「阻塞延时」时，哪项理解最准确？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "阻塞延时"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s398",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-02-01-s398",
    topic: "TIM_TimeBaseInitTypeDef",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「TIM_TimeBaseInitTypeDef」，哪项说法更稳妥？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "TIM_TimeBaseInitTypeDef"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s399",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-02-02-s399",
    topic: "USART_BaudRate",
    type: "concept",
    difficulty: "基础",
    question: "排查「USART_BaudRate」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "USART_BaudRate"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s400",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-02-02-s400",
    topic: "DMA_PeripheralBaseAddr",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「DMA_PeripheralBaseAddr」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA_PeripheralBaseAddr"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s401",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-02-02-s401",
    topic: "ADC_Mode",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「ADC_Mode」时，哪项理解最准确？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "ADC_Mode"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s402",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-02-01-s402",
    topic: "DAC_InitTypeDef",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「DAC_InitTypeDef」，哪项说法更稳妥？",
    code: "",
    options: [
      "DAC 输出要关注参考电压、输出缓冲、触发源和负载能力，数字值只决定理想比例",
      "DAC 可以直接驱动任意大功率负载",
      "DAC 输出与参考电压无关",
      "DAC 不需要模拟引脚配置"
    ],
    answer: 0,
    explanation: "DAC 题要把数字配置和模拟输出能力一起看。错误选项忽略了参考电压和负载限制。",
    tags: [
      "STM32",
      "SPL",
      "DAC_InitTypeDef"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s403",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-02-04-s403",
    topic: "读写位",
    type: "concept",
    difficulty: "基础",
    question: "排查「读写位」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "读写位"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s404",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-02-02-s404",
    topic: "CPHA 时钟相位",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「CPHA 时钟相位」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "CPHA 时钟相位"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s405",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-02-01-s405",
    topic: "CAN_InitTypeDef",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「CAN_InitTypeDef」时，哪项理解最准确？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "CAN_InitTypeDef"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s406",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-02-02-s406",
    topic: "SDIO CLK",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「SDIO CLK」，哪项说法更稳妥？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "SDIO CLK"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s407",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-02-01-s407",
    topic: "RTC 初始化",
    type: "concept",
    difficulty: "进阶",
    question: "排查「RTC 初始化」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "RTC 初始化"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s408",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-02-01-s408",
    topic: "FLASH_Unlock",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「FLASH_Unlock」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "FLASH_Unlock"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s409",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-02-01-s409",
    topic: "WWDG 作用",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「WWDG 作用」时，哪项理解最准确？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "WWDG 作用"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s410",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-02-01-s410",
    topic: "PWR_EnterSTOPMode",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「PWR_EnterSTOPMode」，哪项说法更稳妥？",
    code: "",
    options: [
      "低功耗模式要区分 Sleep、Stop、Standby 的时钟、SRAM 保持、唤醒源和恢复流程",
      "所有低功耗模式唤醒后都从原语句继续且时钟不变",
      "Standby 和普通延时没有区别",
      "唤醒源不需要提前配置"
    ],
    answer: 0,
    explanation: "低功耗题常考模式差异和唤醒后的时钟恢复。错误选项把不同低功耗等级混为一谈。",
    tags: [
      "STM32",
      "SPL",
      "PWR_EnterSTOPMode"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s411",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-02-01-s411",
    topic: "串口升级",
    type: "concept",
    difficulty: "面试",
    question: "排查「串口升级」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "串口升级"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s412",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-02-01-s412",
    topic: "scatter 文件",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「scatter 文件」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      "scatter 文件"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s413",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-02-01-s413",
    topic: "先开时钟再初始化",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「先开时钟再初始化」时，哪项理解最准确？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "先开时钟再初始化"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s414",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-02-01-s414",
    topic: "标准库函数最终操作寄存器",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「标准库函数最终操作寄存器」，哪项说法更稳妥？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "标准库函数最终操作寄存器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s415",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-02-02-s415",
    topic: "任务栈大小",
    type: "concept",
    difficulty: "基础",
    question: "排查「任务栈大小」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      "任务栈大小"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s416",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-02-01-s416",
    topic: "断点",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「断点」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "断点"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s417",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-02-01-s417",
    topic: "Modbus RTU",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「Modbus RTU」时，哪项理解最准确？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "Modbus RTU"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s418",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-02-02-s418",
    topic: "抢占优先级与响应优先级区别",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「抢占优先级与响应优先级区别」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "抢占优先级与响应优先级区别"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s419",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-02-01-s419",
    topic: "参数检查",
    type: "concept",
    difficulty: "进阶",
    question: "排查「参数检查」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "参数检查"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s420",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-02-07-s420",
    topic: "启动文件与标准库工程关系",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「启动文件与标准库工程关系」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      "启动文件与标准库工程关系"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s421",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-02-02-s421",
    topic: "SRAM 地址空间",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「SRAM 地址空间」时，哪项理解最准确？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "SRAM 地址空间"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s422",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-02-02-s422",
    topic: "SetSysClock 函数",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「SetSysClock 函数」，哪项说法更稳妥？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "SetSysClock 函数"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s423",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-02-05-s423",
    topic: "GPIO_Init 函数",
    type: "concept",
    difficulty: "基础",
    question: "排查「GPIO_Init 函数」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO_Init 函数"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s424",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-02-04-s424",
    topic: "NVIC_IRQChannelSubPriority",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「NVIC_IRQChannelSubPriority」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "NVIC_IRQChannelSubPriority"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s425",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-02-03-s425",
    topic: "EXTI_Mode",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「EXTI_Mode」时，哪项理解最准确？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "EXTI_Mode"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s426",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-02-02-s426",
    topic: "非阻塞延时",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「非阻塞延时」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "非阻塞延时"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s427",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-02-04-s427",
    topic: "TIM_CounterMode",
    type: "concept",
    difficulty: "基础",
    question: "排查「TIM_CounterMode」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "TIM_CounterMode"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s428",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-02-03-s428",
    topic: "USART_WordLength",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「USART_WordLength」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "USART_WordLength"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s429",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-02-03-s429",
    topic: "DMA_MemoryBaseAddr",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「DMA_MemoryBaseAddr」时，哪项理解最准确？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA_MemoryBaseAddr"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s430",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-02-03-s430",
    topic: "ADC_ScanConvMode",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「ADC_ScanConvMode」，哪项说法更稳妥？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "ADC_ScanConvMode"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s431",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-02-02-s431",
    topic: "DAC_Init",
    type: "concept",
    difficulty: "面试",
    question: "排查「DAC_Init」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "DAC 输出要关注参考电压、输出缓冲、触发源和负载能力，数字值只决定理想比例",
      "DAC 可以直接驱动任意大功率负载",
      "DAC 输出与参考电压无关",
      "DAC 不需要模拟引脚配置"
    ],
    answer: 0,
    explanation: "DAC 题要把数字配置和模拟输出能力一起看。错误选项忽略了参考电压和负载限制。",
    tags: [
      "STM32",
      "SPL",
      "DAC_Init"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s432",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-02-06-s432",
    topic: "数据接收",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「数据接收」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "数据接收"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s433",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-02-04-s433",
    topic: "SPI Mode 1",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「SPI Mode 1」时，哪项理解最准确？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "SPI Mode 1"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s434",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-02-02-s434",
    topic: "CAN_Mode",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「CAN_Mode」，哪项说法更稳妥？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "CAN_Mode"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s435",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-02-03-s435",
    topic: "SDIO CMD",
    type: "concept",
    difficulty: "基础",
    question: "排查「SDIO CMD」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "SDIO CMD"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s436",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-02-02-s436",
    topic: "设置时间",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「设置时间」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "设置时间"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s437",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-02-02-s437",
    topic: "FLASH_Lock",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「FLASH_Lock」时，哪项理解最准确？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "FLASH_Lock"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s438",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-02-02-s438",
    topic: "窗口机制",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「窗口机制」，哪项说法更稳妥？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "窗口机制"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s439",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-02-02-s439",
    topic: "PWR_EnterSTANDBYMode",
    type: "concept",
    difficulty: "基础",
    question: "排查「PWR_EnterSTANDBYMode」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "低功耗模式要区分 Sleep、Stop、Standby 的时钟、SRAM 保持、唤醒源和恢复流程",
      "所有低功耗模式唤醒后都从原语句继续且时钟不变",
      "Standby 和普通延时没有区别",
      "唤醒源不需要提前配置"
    ],
    answer: 0,
    explanation: "低功耗题常考模式差异和唤醒后的时钟恢复。错误选项把不同低功耗等级混为一谈。",
    tags: [
      "STM32",
      "SPL",
      "PWR_EnterSTANDBYMode"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s440",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-02-02-s440",
    topic: "CAN 升级",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「CAN 升级」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "CAN 升级"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s441",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-02-02-s441",
    topic: "Flash 区域定义",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「Flash 区域定义」时，哪项理解最准确？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "Flash 区域定义"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s442",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-02-02-s442",
    topic: "先配置 GPIO 再配置外设",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「先配置 GPIO 再配置外设」，哪项说法更稳妥？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "先配置 GPIO 再配置外设"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s443",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-02-02-s443",
    topic: "GPIO_SetBits 与 BSRR",
    type: "concept",
    difficulty: "进阶",
    question: "排查「GPIO_SetBits 与 BSRR」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO_SetBits 与 BSRR"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s444",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-02-04-s444",
    topic: "vTaskDelay",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「vTaskDelay」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "vTaskDelay"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s445",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-02-02-s445",
    topic: "单步执行",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「单步执行」时，哪项理解最准确？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "单步执行"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s446",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-02-02-s446",
    topic: "Modbus TCP",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「Modbus TCP」，哪项说法更稳妥？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "Modbus TCP"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s447",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-02-04-s447",
    topic: "中断共享变量为什么加 volatile",
    type: "concept",
    difficulty: "基础",
    question: "排查「中断共享变量为什么加 volatile」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "中断共享变量为什么加 volatile"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s448",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-02-02-s448",
    topic: "超时机制",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「超时机制」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "超时机制"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s449",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-02-08-s449",
    topic: "中断文件 stm32f10x_it.c / stm32f4xx_it.c",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「中断文件 stm32f10x_it.c / stm32f4xx_it.c」时，哪项理解最准确？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "中断文件 stm32f10x_it.c / stm32f4xx_it.c"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s450",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-02-03-s450",
    topic: "外设地址空间",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「外设地址空间」，哪项说法更稳妥？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "外设地址空间"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s451",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-02-03-s451",
    topic: "RCC_HSEConfig",
    type: "concept",
    difficulty: "面试",
    question: "排查「RCC_HSEConfig」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "RCC_HSEConfig"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s452",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-02-06-s452",
    topic: "GPIO_SetBits",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「GPIO_SetBits」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO_SetBits"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s453",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-02-06-s453",
    topic: "NVIC_Init",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「NVIC_Init」时，哪项理解最准确？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "NVIC_Init"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s454",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-02-05-s454",
    topic: "EXTI_LineCmd",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「EXTI_LineCmd」，哪项说法更稳妥？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "EXTI_LineCmd"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s455",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-02-03-s455",
    topic: "软件延时不精确",
    type: "concept",
    difficulty: "进阶",
    question: "排查「软件延时不精确」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "软件延时不精确"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s456",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-02-05-s456",
    topic: "TIM_ClockDivision",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「TIM_ClockDivision」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "TIM_ClockDivision"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s457",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-02-04-s457",
    topic: "USART_StopBits",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「USART_StopBits」时，哪项理解最准确？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "USART_StopBits"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s458",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-02-06-s458",
    topic: "DMA_PeripheralInc",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「DMA_PeripheralInc」，哪项说法更稳妥？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA_PeripheralInc"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s459",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-02-05-s459",
    topic: "ADC_ExternalTrigConv",
    type: "concept",
    difficulty: "基础",
    question: "排查「ADC_ExternalTrigConv」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "ADC_ExternalTrigConv"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s460",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-02-03-s460",
    topic: "DAC_Cmd",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「DAC_Cmd」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "DAC 输出要关注参考电压、输出缓冲、触发源和负载能力，数字值只决定理想比例",
      "DAC 可以直接驱动任意大功率负载",
      "DAC 输出与参考电压无关",
      "DAC 不需要模拟引脚配置"
    ],
    answer: 0,
    explanation: "DAC 题要把数字配置和模拟输出能力一起看。错误选项忽略了参考电压和负载限制。",
    tags: [
      "STM32",
      "SPL",
      "DAC_Cmd"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s461",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-02-07-s461",
    topic: "重复起始信号",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「重复起始信号」时，哪项理解最准确？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "重复起始信号"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s462",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-02-05-s462",
    topic: "SPI Mode 2",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「SPI Mode 2」，哪项说法更稳妥？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "SPI Mode 2"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s463",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-02-03-s463",
    topic: "CAN_SJW",
    type: "concept",
    difficulty: "基础",
    question: "排查「CAN_SJW」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "CAN_SJW"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s464",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-02-04-s464",
    topic: "SDIO D0-D3 数据线",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「SDIO D0-D3 数据线」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "SDIO D0-D3 数据线"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s465",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-02-03-s465",
    topic: "读取时间",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「读取时间」时，哪项理解最准确？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "读取时间"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s466",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-02-03-s466",
    topic: "FLASH_ErasePage",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「FLASH_ErasePage」，哪项说法更稳妥？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "FLASH_ErasePage"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s467",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-02-03-s467",
    topic: "过早喂狗错误",
    type: "concept",
    difficulty: "进阶",
    question: "排查「过早喂狗错误」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "过早喂狗错误"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s468",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-02-03-s468",
    topic: "PWR_WakeUpPinCmd",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「PWR_WakeUpPinCmd」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "低功耗模式要区分 Sleep、Stop、Standby 的时钟、SRAM 保持、唤醒源和恢复流程",
      "所有低功耗模式唤醒后都从原语句继续且时钟不变",
      "Standby 和普通延时没有区别",
      "唤醒源不需要提前配置"
    ],
    answer: 0,
    explanation: "低功耗题常考模式差异和唤醒后的时钟恢复。错误选项把不同低功耗等级混为一谈。",
    tags: [
      "STM32",
      "SPL",
      "PWR_WakeUpPinCmd"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s469",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-02-03-s469",
    topic: "SD 卡升级",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「SD 卡升级」时，哪项理解最准确？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "SD 卡升级"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s470",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-02-03-s470",
    topic: "RAM 区域定义",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「RAM 区域定义」，哪项说法更稳妥？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      "RAM 区域定义"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s471",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-02-03-s471",
    topic: "先配置 NVIC 再开中断",
    type: "concept",
    difficulty: "面试",
    question: "排查「先配置 NVIC 再开中断」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "先配置 NVIC 再开中断"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s472",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-02-03-s472",
    topic: "GPIO_ResetBits 与 BRR / BSRR",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「GPIO_ResetBits 与 BRR / BSRR」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO_ResetBits 与 BRR / BSRR"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s473",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-02-05-s473",
    topic: "vTaskDelayUntil",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「vTaskDelayUntil」时，哪项理解最准确？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "vTaskDelayUntil"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s474",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-02-03-s474",
    topic: "观察变量",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「观察变量」，哪项说法更稳妥？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "观察变量"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s475",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-02-03-s475",
    topic: "从站地址",
    type: "concept",
    difficulty: "基础",
    question: "排查「从站地址」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "从站地址"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s476",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-02-05-s476",
    topic: "volatile 为什么不保证原子性",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「volatile 为什么不保证原子性」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "volatile 为什么不保证原子性"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s477",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-02-03-s477",
    topic: "错误重试",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「错误重试」时，哪项理解最准确？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "错误重试"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s478",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-02-09-s478",
    topic: "标准库头文件包含关系",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「标准库头文件包含关系」，哪项说法更稳妥？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "标准库头文件包含关系"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s479",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-02-04-s479",
    topic: "系统控制空间 SCS",
    type: "concept",
    difficulty: "进阶",
    question: "排查「系统控制空间 SCS」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "Cortex-M 题要区分 Thread/Handler 模式、MSP/PSP、异常返回和特权级",
      "所有异常都在 Thread 模式运行",
      "MSP 和 PSP 永远指向同一块栈",
      "EXC_RETURN 只是普通函数返回地址"
    ],
    answer: 0,
    explanation: "内核基础题考执行模式和栈。错误选项把异常机制当成普通 C 函数调用。",
    tags: [
      "STM32",
      "SPL",
      "系统控制空间 SCS"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s480",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-02-05-s480",
    topic: "RCC_PLLConfig",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「RCC_PLLConfig」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "RCC_PLLConfig"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s481",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-02-07-s481",
    topic: "GPIO_ResetBits",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「GPIO_ResetBits」时，哪项理解最准确？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO_ResetBits"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s482",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-02-07-s482",
    topic: "NVIC_PriorityGroupConfig",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「NVIC_PriorityGroupConfig」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "NVIC_PriorityGroupConfig"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s483",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-02-06-s483",
    topic: "EXTI_Init",
    type: "concept",
    difficulty: "基础",
    question: "排查「EXTI_Init」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "EXTI_Init"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s484",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-02-04-s484",
    topic: "定时器延时",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「定时器延时」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "定时器延时"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s485",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-02-06-s485",
    topic: "TIM_TimeBaseInit",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「TIM_TimeBaseInit」时，哪项理解最准确？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "TIM_TimeBaseInit"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s486",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-02-05-s486",
    topic: "USART_Parity",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「USART_Parity」，哪项说法更稳妥？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "USART_Parity"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s487",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-02-07-s487",
    topic: "DMA_MemoryInc",
    type: "concept",
    difficulty: "基础",
    question: "排查「DMA_MemoryInc」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA_MemoryInc"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s488",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-02-06-s488",
    topic: "ADC_DataAlign",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「ADC_DataAlign」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "ADC_DataAlign"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s489",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-02-04-s489",
    topic: "DAC_SetChannel1Data",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「DAC_SetChannel1Data」时，哪项理解最准确？",
    code: "",
    options: [
      "DAC 输出要关注参考电压、输出缓冲、触发源和负载能力，数字值只决定理想比例",
      "DAC 可以直接驱动任意大功率负载",
      "DAC 输出与参考电压无关",
      "DAC 不需要模拟引脚配置"
    ],
    answer: 0,
    explanation: "DAC 题要把数字配置和模拟输出能力一起看。错误选项忽略了参考电压和负载限制。",
    tags: [
      "STM32",
      "SPL",
      "DAC_SetChannel1Data"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s490",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-02-08-s490",
    topic: "时钟拉伸",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「时钟拉伸」，哪项说法更稳妥？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "时钟拉伸"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s491",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-02-07-s491",
    topic: "MSB First",
    type: "concept",
    difficulty: "面试",
    question: "排查「MSB First」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "MSB First"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s492",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-02-04-s492",
    topic: "CAN_BS1",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「CAN_BS1」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "CAN_BS1"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s493",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-02-05-s493",
    topic: "1 位模式",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「1 位模式」时，哪项理解最准确？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "1 位模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s494",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-02-04-s494",
    topic: "RTC 秒中断",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「RTC 秒中断」，哪项说法更稳妥？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "RTC 秒中断"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s495",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-02-04-s495",
    topic: "FLASH_EraseSector",
    type: "concept",
    difficulty: "基础",
    question: "排查「FLASH_EraseSector」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "FLASH_EraseSector"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s496",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-02-04-s496",
    topic: "过晚喂狗错误",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「过晚喂狗错误」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "过晚喂狗错误"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s497",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-02-04-s497",
    topic: "PWR_ClearFlag",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「PWR_ClearFlag」时，哪项理解最准确？",
    code: "",
    options: [
      "低功耗模式要区分 Sleep、Stop、Standby 的时钟、SRAM 保持、唤醒源和恢复流程",
      "所有低功耗模式唤醒后都从原语句继续且时钟不变",
      "Standby 和普通延时没有区别",
      "唤醒源不需要提前配置"
    ],
    answer: 0,
    explanation: "低功耗题常考模式差异和唤醒后的时钟恢复。错误选项把不同低功耗等级混为一谈。",
    tags: [
      "STM32",
      "SPL",
      "PWR_ClearFlag"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s498",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-02-04-s498",
    topic: "IAP 在线升级",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「IAP 在线升级」，哪项说法更稳妥？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "IAP 在线升级"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s499",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-02-04-s499",
    topic: "段放置",
    type: "concept",
    difficulty: "基础",
    question: "排查「段放置」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      "段放置"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s500",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-02-04-s500",
    topic: "初始化结构体字段完整性",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「初始化结构体字段完整性」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "初始化结构体字段完整性"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s501",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-02-04-s501",
    topic: "USART_SendData 与 DR / TDR",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「USART_SendData 与 DR / TDR」时，哪项理解最准确？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "USART_SendData 与 DR / TDR"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s502",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-02-06-s502",
    topic: "vTaskDelete",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「vTaskDelete」，哪项说法更稳妥？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "vTaskDelete"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s503",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-02-04-s503",
    topic: "Watch 窗口",
    type: "concept",
    difficulty: "进阶",
    question: "排查「Watch 窗口」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "Watch 窗口"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s504",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-02-04-s504",
    topic: "功能码",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「功能码」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "功能码"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s505",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-02-06-s505",
    topic: "中断标志位为什么要清除",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「中断标志位为什么要清除」时，哪项理解最准确？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "中断标志位为什么要清除"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s506",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-02-04-s506",
    topic: "看门狗恢复",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「看门狗恢复」，哪项说法更稳妥？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "看门狗恢复"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s507",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-02-10-s507",
    topic: "用户代码文件组织方式",
    type: "concept",
    difficulty: "基础",
    question: "排查「用户代码文件组织方式」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "用户代码文件组织方式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s508",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-02-05-s508",
    topic: "启动地址映射",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「启动地址映射」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      "启动地址映射"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s509",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-02-06-s509",
    topic: "RCC_SYSCLKConfig",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「RCC_SYSCLKConfig」时，哪项理解最准确？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "RCC_SYSCLKConfig"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s510",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-02-08-s510",
    topic: "GPIO_WriteBit",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「GPIO_WriteBit」，哪项说法更稳妥？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO_WriteBit"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s511",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-02-08-s511",
    topic: "抢占优先级",
    type: "concept",
    difficulty: "面试",
    question: "排查「抢占优先级」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "抢占优先级"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s512",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-02-07-s512",
    topic: "GPIO_EXTILineConfig",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「GPIO_EXTILineConfig」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO_EXTILineConfig"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s513",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-02-05-s513",
    topic: "微秒延时",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「微秒延时」时，哪项理解最准确？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "微秒延时"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s514",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-02-07-s514",
    topic: "TIM_Cmd",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「TIM_Cmd」，哪项说法更稳妥？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "TIM_Cmd"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s515",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-02-06-s515",
    topic: "USART_Mode",
    type: "concept",
    difficulty: "进阶",
    question: "排查「USART_Mode」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "USART_Mode"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s516",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-02-08-s516",
    topic: "DMA_PeripheralDataSize",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「DMA_PeripheralDataSize」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA_PeripheralDataSize"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s517",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-02-08-s517",
    topic: "ADC_RegularChannelConfig",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「ADC_RegularChannelConfig」时，哪项理解最准确？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "ADC_RegularChannelConfig"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s518",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-02-05-s518",
    topic: "DAC_SetChannel2Data",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「DAC_SetChannel2Data」，哪项说法更稳妥？",
    code: "",
    options: [
      "DAC 输出要关注参考电压、输出缓冲、触发源和负载能力，数字值只决定理想比例",
      "DAC 可以直接驱动任意大功率负载",
      "DAC 输出与参考电压无关",
      "DAC 不需要模拟引脚配置"
    ],
    answer: 0,
    explanation: "DAC 题要把数字配置和模拟输出能力一起看。错误选项忽略了参考电压和负载限制。",
    tags: [
      "STM32",
      "SPL",
      "DAC_SetChannel2Data"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s519",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-02-09-s519",
    topic: "总线仲裁",
    type: "concept",
    difficulty: "基础",
    question: "排查「总线仲裁」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "总线仲裁"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s520",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-02-08-s520",
    topic: "LSB First",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「LSB First」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "LSB First"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s521",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-02-05-s521",
    topic: "CAN_BS2",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「CAN_BS2」时，哪项理解最准确？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "CAN_BS2"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s522",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-02-06-s522",
    topic: "4 位模式",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「4 位模式」，哪项说法更稳妥？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "4 位模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s523",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-02-05-s523",
    topic: "RTC 闹钟中断",
    type: "concept",
    difficulty: "基础",
    question: "排查「RTC 闹钟中断」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "RTC 闹钟中断"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s524",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-02-05-s524",
    topic: "FLASH_ProgramHalfWord",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「FLASH_ProgramHalfWord」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "FLASH_ProgramHalfWord"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s525",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-02-05-s525",
    topic: "WWDG 中断",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「WWDG 中断」时，哪项理解最准确？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "WWDG 中断"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s526",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-02-05-s526",
    topic: "EXTI 唤醒",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「EXTI 唤醒」，哪项说法更稳妥？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "EXTI 唤醒"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s527",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-02-05-s527",
    topic: "固件包格式",
    type: "concept",
    difficulty: "进阶",
    question: "排查「固件包格式」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "固件包格式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s528",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-02-05-s528",
    topic: "启动文件与链接配置关系",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「启动文件与链接配置关系」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      "启动文件与链接配置关系"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s529",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-02-05-s529",
    topic: "标志位轮询",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「标志位轮询」时，哪项理解最准确？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "标志位轮询"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s530",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-02-05-s530",
    topic: "TIM_SetCompare 与 CCR",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「TIM_SetCompare 与 CCR」，哪项说法更稳妥？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "TIM_SetCompare 与 CCR"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s531",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-02-07-s531",
    topic: "任务挂起",
    type: "concept",
    difficulty: "面试",
    question: "排查「任务挂起」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "任务挂起"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s532",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-02-05-s532",
    topic: "Memory 窗口",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「Memory 窗口」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "Memory 窗口"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s533",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-02-05-s533",
    topic: "寄存器地址",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「寄存器地址」时，哪项理解最准确？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "寄存器地址"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s534",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-02-07-s534",
    topic: "中断嵌套风险",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「中断嵌套风险」，哪项说法更稳妥？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "中断嵌套风险"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s535",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-02-05-s535",
    topic: "断电保护",
    type: "concept",
    difficulty: "基础",
    question: "排查「断电保护」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "断电保护"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s536",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-03-02-s536",
    topic: "system_stm32xxx.c 系统时钟文件",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「system_stm32xxx.c 系统时钟文件」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "system_stm32xxx.c 系统时钟文件"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s537",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-02-06-s537",
    topic: "向量表地址",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「向量表地址」时，哪项理解最准确？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "向量表地址"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s538",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-02-07-s538",
    topic: "RCC_HCLKConfig",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「RCC_HCLKConfig」，哪项说法更稳妥？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "RCC_HCLKConfig"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s539",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-02-09-s539",
    topic: "GPIO_ReadInputDataBit",
    type: "concept",
    difficulty: "进阶",
    question: "排查「GPIO_ReadInputDataBit」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO_ReadInputDataBit"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s540",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-02-09-s540",
    topic: "响应优先级",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「响应优先级」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "响应优先级"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s541",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-02-08-s541",
    topic: "EXTI_GetITStatus",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「EXTI_GetITStatus」时，哪项理解最准确？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "EXTI_GetITStatus"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s542",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-02-06-s542",
    topic: "中断中延时风险",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「中断中延时风险」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "中断中延时风险"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s543",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-02-08-s543",
    topic: "TIM_ITConfig",
    type: "concept",
    difficulty: "基础",
    question: "排查「TIM_ITConfig」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "TIM_ITConfig"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s544",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-02-07-s544",
    topic: "USART_HardwareFlowControl",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「USART_HardwareFlowControl」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "USART_HardwareFlowControl"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s545",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-02-09-s545",
    topic: "DMA_MemoryDataSize",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「DMA_MemoryDataSize」时，哪项理解最准确？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA_MemoryDataSize"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s546",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-02-09-s546",
    topic: "ADC_Cmd",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「ADC_Cmd」，哪项说法更稳妥？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "ADC_Cmd"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s547",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-02-06-s547",
    topic: "输出固定电压",
    type: "concept",
    difficulty: "基础",
    question: "排查「输出固定电压」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "DAC 输出要关注参考电压、输出缓冲、触发源和负载能力，数字值只决定理想比例",
      "DAC 可以直接驱动任意大功率负载",
      "DAC 输出与参考电压无关",
      "DAC 不需要模拟引脚配置"
    ],
    answer: 0,
    explanation: "DAC 题要把数字配置和模拟输出能力一起看。错误选项忽略了参考电压和负载限制。",
    tags: [
      "STM32",
      "SPL",
      "输出固定电压"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s548",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-02-10-s548",
    topic: "总线忙",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「总线忙」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "总线忙"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s549",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-02-09-s549",
    topic: "片选时序",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「片选时序」时，哪项理解最准确？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "片选时序"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s550",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-02-06-s550",
    topic: "CAN_Prescaler",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「CAN_Prescaler」，哪项说法更稳妥？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "CAN_Prescaler"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s551",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-02-07-s551",
    topic: "SDIO 时钟分频",
    type: "concept",
    difficulty: "面试",
    question: "排查「SDIO 时钟分频」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "SDIO 时钟分频"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s552",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-02-06-s552",
    topic: "RTC 唤醒低功耗",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「RTC 唤醒低功耗」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "RTC 唤醒低功耗"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s553",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-02-06-s553",
    topic: "FLASH_ProgramWord",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「FLASH_ProgramWord」时，哪项理解最准确？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "FLASH_ProgramWord"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s554",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-02-06-s554",
    topic: "WWDG 时钟来源",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「WWDG 时钟来源」，哪项说法更稳妥？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "WWDG 时钟来源"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s555",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-02-06-s555",
    topic: "RTC 唤醒",
    type: "concept",
    difficulty: "基础",
    question: "排查「RTC 唤醒」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "RTC 唤醒"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s556",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-02-06-s556",
    topic: "固件 CRC 校验",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「固件 CRC 校验」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "固件 CRC 校验"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s557",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-02-06-s557",
    topic: "map 文件分析",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「map 文件分析」时，哪项理解最准确？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      "map 文件分析"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s558",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-02-06-s558",
    topic: "中断模式",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「中断模式」，哪项说法更稳妥？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "中断模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s559",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-02-06-s559",
    topic: "DMA_Init 与 DMA 通道寄存器",
    type: "concept",
    difficulty: "基础",
    question: "排查「DMA_Init 与 DMA 通道寄存器」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA_Init 与 DMA 通道寄存器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s560",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-02-08-s560",
    topic: "任务恢复",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「任务恢复」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "任务恢复"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s561",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-02-06-s561",
    topic: "寄存器窗口",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「寄存器窗口」时，哪项理解最准确？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "寄存器窗口"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s562",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-02-06-s562",
    topic: "CRC16",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「CRC16」，哪项说法更稳妥？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "CRC16"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s563",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-02-08-s563",
    topic: "临界区如何保护",
    type: "concept",
    difficulty: "进阶",
    question: "排查「临界区如何保护」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "临界区如何保护"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s564",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-02-06-s564",
    topic: "Flash 数据校验",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「Flash 数据校验」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "Flash 数据校验"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s565",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-03-03-s565",
    topic: "main.c 主程序文件",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「main.c 主程序文件」时，哪项理解最准确？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "main.c 主程序文件"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s566",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-02-07-s566",
    topic: "外设基地址",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「外设基地址」，哪项说法更稳妥？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "外设基地址"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s567",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-02-08-s567",
    topic: "RCC_PCLK1Config",
    type: "concept",
    difficulty: "基础",
    question: "排查「RCC_PCLK1Config」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "RCC_PCLK1Config"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s568",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-02-10-s568",
    topic: "GPIO_ReadOutputDataBit",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「GPIO_ReadOutputDataBit」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO_ReadOutputDataBit"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s569",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-02-10-s569",
    topic: "中断优先级数值越小优先级越高",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「中断优先级数值越小优先级越高」时，哪项理解最准确？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "中断优先级数值越小优先级越高"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s570",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-02-09-s570",
    topic: "EXTI_ClearITPendingBit",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「EXTI_ClearITPendingBit」，哪项说法更稳妥？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "EXTI_ClearITPendingBit"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s571",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-02-07-s571",
    topic: "RTOS 中延时适配",
    type: "concept",
    difficulty: "面试",
    question: "排查「RTOS 中延时适配」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "RTOS 中延时适配"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s572",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-02-09-s572",
    topic: "TIM_GetITStatus",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「TIM_GetITStatus」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "TIM_GetITStatus"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s573",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-02-08-s573",
    topic: "USART_Init",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「USART_Init」时，哪项理解最准确？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "USART_Init"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s574",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-02-10-s574",
    topic: "DMA_Mode",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「DMA_Mode」，哪项说法更稳妥？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA_Mode"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s575",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-02-10-s575",
    topic: "ADC_SoftwareStartConvCmd",
    type: "concept",
    difficulty: "进阶",
    question: "排查「ADC_SoftwareStartConvCmd」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "ADC_SoftwareStartConvCmd"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s576",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-02-07-s576",
    topic: "TIM 触发 DAC",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「TIM 触发 DAC」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "TIM 触发 DAC"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s577",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-03-01-s577",
    topic: "I2C_InitTypeDef",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「I2C_InitTypeDef」时，哪项理解最准确？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "I2C_InitTypeDef"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s578",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-02-10-s578",
    topic: "SPI 速率",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「SPI 速率」，哪项说法更稳妥？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "SPI 速率"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s579",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-02-07-s579",
    topic: "CAN_FilterInitTypeDef",
    type: "concept",
    difficulty: "基础",
    question: "排查「CAN_FilterInitTypeDef」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "CAN_FilterInitTypeDef"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s580",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-02-08-s580",
    topic: "SDIO 命令通道",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「SDIO 命令通道」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "SDIO 命令通道"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s581",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-02-07-s581",
    topic: "备份寄存器保存数据",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「备份寄存器保存数据」时，哪项理解最准确？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "备份寄存器保存数据"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s582",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-02-07-s582",
    topic: "FLASH_GetStatus",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「FLASH_GetStatus」，哪项说法更稳妥？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "FLASH_GetStatus"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s583",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-02-07-s583",
    topic: "WWDG 计数器",
    type: "concept",
    difficulty: "基础",
    question: "排查「WWDG 计数器」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "WWDG 计数器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s584",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-02-07-s584",
    topic: "WKUP 引脚",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「WKUP 引脚」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "WKUP 引脚"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s585",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-02-07-s585",
    topic: "固件版本号",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「固件版本号」时，哪项理解最准确？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "固件版本号"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s586",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-02-07-s586",
    topic: "栈大小配置",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「栈大小配置」，哪项说法更稳妥？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      "栈大小配置"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s587",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-02-07-s587",
    topic: "DMA 模式",
    type: "concept",
    difficulty: "进阶",
    question: "排查「DMA 模式」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA 模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s588",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-02-07-s588",
    topic: "RCC 时钟使能寄存器",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「RCC 时钟使能寄存器」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "RCC 时钟使能寄存器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s589",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-02-09-s589",
    topic: "任务状态",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「任务状态」时，哪项理解最准确？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "任务状态"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s590",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-02-07-s590",
    topic: "HardFault 调试",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「HardFault 调试」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "HardFault 调试"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s591",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-02-07-s591",
    topic: "03 读保持寄存器",
    type: "concept",
    difficulty: "面试",
    question: "排查「03 读保持寄存器」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "03 读保持寄存器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s592",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-02-09-s592",
    topic: "EXTI 中断一直触发原因",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「EXTI 中断一直触发原因」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "EXTI 中断一直触发原因"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s593",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-02-07-s593",
    topic: "通信异常恢复",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「通信异常恢复」时，哪项理解最准确？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "通信异常恢复"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s594",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-03-04-s594",
    topic: "stm32xxx_it.c 中断服务文件",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「stm32xxx_it.c 中断服务文件」，哪项说法更稳妥？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "stm32xxx_it.c 中断服务文件"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s595",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-02-08-s595",
    topic: "寄存器偏移地址",
    type: "concept",
    difficulty: "基础",
    question: "排查「寄存器偏移地址」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "寄存器偏移地址"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s596",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-02-09-s596",
    topic: "RCC_PCLK2Config",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「RCC_PCLK2Config」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "RCC_PCLK2Config"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s597",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-03-01-s597",
    topic: "点亮 LED",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「点亮 LED」时，哪项理解最准确？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "点亮 LED"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s598",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-03-02-s598",
    topic: "中断中不建议 printf",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「中断中不建议 printf」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "中断中不建议 printf"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s599",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-02-10-s599",
    topic: "EXTI 与 NVIC 配合",
    type: "concept",
    difficulty: "进阶",
    question: "排查「EXTI 与 NVIC 配合」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "EXTI 与 NVIC 配合"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s600",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-02-08-s600",
    topic: "tick 溢出处理",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「tick 溢出处理」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "tick 溢出处理"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s601",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-02-10-s601",
    topic: "TIM_ClearITPendingBit",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「TIM_ClearITPendingBit」时，哪项理解最准确？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "TIM_ClearITPendingBit"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s602",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-02-09-s602",
    topic: "USART_Cmd",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「USART_Cmd」，哪项说法更稳妥？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "USART_Cmd"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s603",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-03-01-s603",
    topic: "USART DMA 发送",
    type: "concept",
    difficulty: "基础",
    question: "排查「USART DMA 发送」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "USART DMA 发送"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s604",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-03-01-s604",
    topic: "电压换算",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「电压换算」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "电压换算"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s605",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-02-08-s605",
    topic: "DMA 查表输出",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「DMA 查表输出」时，哪项理解最准确？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA 查表输出"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s606",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-03-02-s606",
    topic: "I2C_Init",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「I2C_Init」，哪项说法更稳妥？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "I2C_Init"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s607",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-03-01-s607",
    topic: "SPI_InitTypeDef",
    type: "concept",
    difficulty: "基础",
    question: "排查「SPI_InitTypeDef」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "SPI_InitTypeDef"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s608",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-02-08-s608",
    topic: "CAN_FilterInit",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「CAN_FilterInit」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "CAN_FilterInit"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s609",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-02-09-s609",
    topic: "SDIO 数据通道",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「SDIO 数据通道」时，哪项理解最准确？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "SDIO 数据通道"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s610",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-02-08-s610",
    topic: "LSE 起振失败",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「LSE 起振失败」，哪项说法更稳妥？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "LSE 起振失败"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s611",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-02-08-s611",
    topic: "FLASH_WaitForLastOperation",
    type: "concept",
    difficulty: "面试",
    question: "排查「FLASH_WaitForLastOperation」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "FLASH_WaitForLastOperation"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s612",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-02-08-s612",
    topic: "WWDG 窗口值",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「WWDG 窗口值」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "WWDG 窗口值"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s613",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-02-08-s613",
    topic: "Stop 模式唤醒后时钟恢复",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「Stop 模式唤醒后时钟恢复」时，哪项理解最准确？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "Stop 模式唤醒后时钟恢复"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s614",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-02-08-s614",
    topic: "断点续传",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「断点续传」，哪项说法更稳妥？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "断点续传"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s615",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-02-08-s615",
    topic: "堆大小配置",
    type: "concept",
    difficulty: "基础",
    question: "排查「堆大小配置」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      "堆大小配置"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s616",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-02-08-s616",
    topic: "超时机制需要用户实现",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「超时机制需要用户实现」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "超时机制需要用户实现"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s617",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-02-08-s617",
    topic: "EXTI 标志位寄存器",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「EXTI 标志位寄存器」时，哪项理解最准确？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "EXTI 标志位寄存器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s618",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-02-10-s618",
    topic: "栈溢出检测",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「栈溢出检测」，哪项说法更稳妥？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      "栈溢出检测"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s619",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-02-08-s619",
    topic: "printf 调试",
    type: "concept",
    difficulty: "基础",
    question: "排查「printf 调试」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "printf 调试"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s620",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-02-08-s620",
    topic: "06 写单个寄存器",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「06 写单个寄存器」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "06 写单个寄存器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s621",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-02-10-s621",
    topic: "RTOS 中中断优先级限制",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「RTOS 中中断优先级限制」时，哪项理解最准确？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "RTOS 中中断优先级限制"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s622",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-02-08-s622",
    topic: "堆栈溢出检测",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「堆栈溢出检测」，哪项说法更稳妥？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      "堆栈溢出检测"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s623",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-03-06-s623",
    topic: "标准库外设源文件",
    type: "concept",
    difficulty: "进阶",
    question: "排查「标准库外设源文件」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "标准库外设源文件"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s624",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-02-09-s624",
    topic: "内存映射 IO",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「内存映射 IO」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "内存映射 IO"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s625",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-03-01-s625",
    topic: "RCC_APB2PeriphClockCmd",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「RCC_APB2PeriphClockCmd」时，哪项理解最准确？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "RCC_APB2PeriphClockCmd"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s626",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-03-02-s626",
    topic: "推挽输出控制 LED",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「推挽输出控制 LED」，哪项说法更稳妥？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "推挽输出控制 LED"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s627",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-03-03-s627",
    topic: "中断中不建议 malloc",
    type: "concept",
    difficulty: "基础",
    question: "排查「中断中不建议 malloc」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "中断中不建议 malloc"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s628",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-03-02-s628",
    topic: "标志位未清除",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「标志位未清除」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "标志位未清除"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s629",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-02-09-s629",
    topic: "时间差计算",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「时间差计算」时，哪项理解最准确？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "时间差计算"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s630",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-03-01-s630",
    topic: "PWM 基本概念",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「PWM 基本概念」，哪项说法更稳妥？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "PWM 基本概念"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s631",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-02-10-s631",
    topic: "USART_ITConfig",
    type: "concept",
    difficulty: "面试",
    question: "排查「USART_ITConfig」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "USART_ITConfig"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s632",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-03-03-s632",
    topic: "ADC DMA 采样",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「ADC DMA 采样」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "ADC DMA 采样"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s633",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-03-02-s633",
    topic: "采样抖动",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「采样抖动」时，哪项理解最准确？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "采样抖动"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s634",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-02-09-s634",
    topic: "输出负载能力",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「输出负载能力」，哪项说法更稳妥？",
    code: "",
    options: [
      "DAC 输出要关注参考电压、输出缓冲、触发源和负载能力，数字值只决定理想比例",
      "DAC 可以直接驱动任意大功率负载",
      "DAC 输出与参考电压无关",
      "DAC 不需要模拟引脚配置"
    ],
    answer: 0,
    explanation: "DAC 题要把数字配置和模拟输出能力一起看。错误选项忽略了参考电压和负载限制。",
    tags: [
      "STM32",
      "SPL",
      "输出负载能力"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s635",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-03-03-s635",
    topic: "I2C_Cmd",
    type: "concept",
    difficulty: "进阶",
    question: "排查「I2C_Cmd」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "I2C_Cmd"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s636",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-03-03-s636",
    topic: "SPI_Cmd",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「SPI_Cmd」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "SPI_Cmd"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s637",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-02-09-s637",
    topic: "CAN_ITConfig",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「CAN_ITConfig」时，哪项理解最准确？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "CAN_ITConfig"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s638",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-02-10-s638",
    topic: "SDIO 与 DMA",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「SDIO 与 DMA」，哪项说法更稳妥？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "SDIO 与 DMA"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s639",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-02-09-s639",
    topic: "RTC 时间漂移",
    type: "concept",
    difficulty: "基础",
    question: "排查「RTC 时间漂移」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "RTC 时间漂移"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s640",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-02-09-s640",
    topic: "Flash 写入对齐",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「Flash 写入对齐」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "Flash 写入对齐"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s641",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-02-09-s641",
    topic: "WWDG 与 IWDG 区别",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「WWDG 与 IWDG 区别」时，哪项理解最准确？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "WWDG 与 IWDG 区别"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s642",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-02-09-s642",
    topic: "Standby 唤醒后复位行为",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「Standby 唤醒后复位行为」，哪项说法更稳妥？",
    code: "",
    options: [
      "低功耗模式要区分 Sleep、Stop、Standby 的时钟、SRAM 保持、唤醒源和恢复流程",
      "所有低功耗模式唤醒后都从原语句继续且时钟不变",
      "Standby 和普通延时没有区别",
      "唤醒源不需要提前配置"
    ],
    answer: 0,
    explanation: "低功耗题常考模式差异和唤醒后的时钟恢复。错误选项把不同低功耗等级混为一谈。",
    tags: [
      "STM32",
      "SPL",
      "Standby 唤醒后复位行为"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s643",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-02-09-s643",
    topic: "双备份升级",
    type: "concept",
    difficulty: "基础",
    question: "排查「双备份升级」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "双备份升级"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s644",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-02-09-s644",
    topic: "App 偏移地址配置",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「App 偏移地址配置」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      "App 偏移地址配置"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s645",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-02-09-s645",
    topic: "标准库与寄存器位关系",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「标准库与寄存器位关系」时，哪项理解最准确？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "标准库与寄存器位关系"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s646",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-02-09-s646",
    topic: "NVIC 内核寄存器",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「NVIC 内核寄存器」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "NVIC 内核寄存器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s647",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-03-01-s647",
    topic: "任务就绪态",
    type: "concept",
    difficulty: "进阶",
    question: "排查「任务就绪态」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "任务就绪态"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s648",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-02-09-s648",
    topic: "SWO 调试",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「SWO 调试」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "SWO 调试"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s649",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-02-09-s649",
    topic: "16 写多个寄存器",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「16 写多个寄存器」时，哪项理解最准确？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "16 写多个寄存器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s650",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-03-01-s650",
    topic: "串口丢数据原因",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「串口丢数据原因」，哪项说法更稳妥？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "串口丢数据原因"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s651",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-02-09-s651",
    topic: "HardFault 记录",
    type: "concept",
    difficulty: "面试",
    question: "排查「HardFault 记录」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "HardFault 记录"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s652",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-03-07-s652",
    topic: "用户 bsp 文件组织",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「用户 bsp 文件组织」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "用户 bsp 文件组织"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s653",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-02-10-s653",
    topic: "位带区 Bit-band",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「位带区 Bit-band」时，哪项理解最准确？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "位带区 Bit-band"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s654",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-03-02-s654",
    topic: "RCC_APB1PeriphClockCmd",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「RCC_APB1PeriphClockCmd」，哪项说法更稳妥？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "RCC_APB1PeriphClockCmd"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s655",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-03-03-s655",
    topic: "开漏输出控制外设",
    type: "concept",
    difficulty: "基础",
    question: "排查「开漏输出控制外设」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "开漏输出控制外设"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s656",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-03-04-s656",
    topic: "中断中不能长时间阻塞",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「中断中不能长时间阻塞」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "中断中不能长时间阻塞"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s657",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-03-03-s657",
    topic: "按键抖动导致多次中断",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「按键抖动导致多次中断」时，哪项理解最准确？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "按键抖动导致多次中断"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s658",
    subject: "stm32",
    chapter: "SysTick 与延时",
    knowledgeId: "stm32-07-02-10-s658",
    topic: "无阻塞状态机延时",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「无阻塞状态机延时」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "无阻塞状态机延时"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s659",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-03-03-s659",
    topic: "PWM 占空比",
    type: "concept",
    difficulty: "进阶",
    question: "排查「PWM 占空比」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "PWM 占空比"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s660",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-03-01-s660",
    topic: "阻塞发送",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「阻塞发送」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "阻塞发送"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s661",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-03-04-s661",
    topic: "SPI DMA 传输",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「SPI DMA 传输」时，哪项理解最准确？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "SPI DMA 传输"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s662",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-03-03-s662",
    topic: "输入阻抗影响",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「输入阻抗影响」，哪项说法更稳妥？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "输入阻抗影响"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s663",
    subject: "stm32",
    chapter: "DAC",
    knowledgeId: "stm32-12-02-10-s663",
    topic: "DAC 输出缓冲影响",
    type: "concept",
    difficulty: "基础",
    question: "排查「DAC 输出缓冲影响」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "DAC 输出要关注参考电压、输出缓冲、触发源和负载能力，数字值只决定理想比例",
      "DAC 可以直接驱动任意大功率负载",
      "DAC 输出与参考电压无关",
      "DAC 不需要模拟引脚配置"
    ],
    answer: 0,
    explanation: "DAC 题要把数字配置和模拟输出能力一起看。错误选项忽略了参考电压和负载限制。",
    tags: [
      "STM32",
      "SPL",
      "DAC 输出缓冲影响"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s664",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-03-05-s664",
    topic: "I2C_Send7bitAddress",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「I2C_Send7bitAddress」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "I2C_Send7bitAddress"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s665",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-03-04-s665",
    topic: "SPI_I2S_SendData",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「SPI_I2S_SendData」时，哪项理解最准确？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "SPI_I2S_SendData"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s666",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-02-10-s666",
    topic: "CAN 波特率计算",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「CAN 波特率计算」，哪项说法更稳妥？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "CAN 波特率计算"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s667",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-03-02-s667",
    topic: "CS 片选控制",
    type: "concept",
    difficulty: "基础",
    question: "排查「CS 片选控制」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "CS 片选控制"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s668",
    subject: "stm32",
    chapter: "RTC 与备份域",
    knowledgeId: "stm32-17-02-10-s668",
    topic: "时间戳转换",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「时间戳转换」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "时间戳转换"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s669",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-02-10-s669",
    topic: "Flash 错误处理",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「Flash 错误处理」时，哪项理解最准确？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "Flash 错误处理"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s670",
    subject: "stm32",
    chapter: "Watchdog 看门狗",
    knowledgeId: "stm32-19-02-10-s670",
    topic: "看门狗设计策略",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「看门狗设计策略」，哪项说法更稳妥？",
    code: "",
    options: [
      "看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束",
      "喂狗越频繁越一定正确",
      "看门狗只负责提高运行速度",
      "开启看门狗后无需设计任务健康检查"
    ],
    answer: 0,
    explanation: "看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。",
    tags: [
      "STM32",
      "SPL",
      "看门狗设计策略"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s671",
    subject: "stm32",
    chapter: "低功耗",
    knowledgeId: "stm32-20-02-10-s671",
    topic: "低功耗常见误区",
    type: "concept",
    difficulty: "面试",
    question: "排查「低功耗常见误区」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "低功耗模式要区分 Sleep、Stop、Standby 的时钟、SRAM 保持、唤醒源和恢复流程",
      "所有低功耗模式唤醒后都从原语句继续且时钟不变",
      "Standby 和普通延时没有区别",
      "唤醒源不需要提前配置"
    ],
    answer: 0,
    explanation: "低功耗题常考模式差异和唤醒后的时钟恢复。错误选项把不同低功耗等级混为一谈。",
    tags: [
      "STM32",
      "SPL",
      "低功耗常见误区"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s672",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-02-10-s672",
    topic: "升级失败回滚",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「升级失败回滚」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "升级失败回滚"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s673",
    subject: "stm32",
    chapter: "链接与内存布局",
    knowledgeId: "stm32-22-02-10-s673",
    topic: "Bootloader 与 App 链接地址",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「Bootloader 与 App 链接地址」时，哪项理解最准确？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "Bootloader 与 App 链接地址"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s674",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-02-10-s674",
    topic: "标准库版本差异",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「标准库版本差异」，哪项说法更稳妥？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "标准库版本差异"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s675",
    subject: "stm32",
    chapter: "寄存器理解与底层机制",
    knowledgeId: "stm32-24-02-10-s675",
    topic: "标准库封装带来的调试方法",
    type: "concept",
    difficulty: "基础",
    question: "排查「标准库封装带来的调试方法」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险",
      "硬件寄存器可以当普通局部变量缓存",
      "读状态寄存器永远没有副作用",
      "所有寄存器位都可以随意写 1"
    ],
    answer: 0,
    explanation: "寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。",
    tags: [
      "STM32",
      "SPL",
      "标准库封装带来的调试方法"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s676",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-03-03-s676",
    topic: "阻塞态",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「阻塞态」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "阻塞态"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s677",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-02-10-s677",
    topic: "逻辑分析仪调试",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「逻辑分析仪调试」时，哪项理解最准确？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "逻辑分析仪调试"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s678",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-02-10-s678",
    topic: "Modbus 异常响应",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「Modbus 异常响应」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "Modbus 异常响应"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s679",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-03-02-s679",
    topic: "串口接收不定长数据方案",
    type: "concept",
    difficulty: "基础",
    question: "排查「串口接收不定长数据方案」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "串口接收不定长数据方案"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s680",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-02-10-s680",
    topic: "软件版本管理",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「软件版本管理」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "软件版本管理"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s681",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-03-08-s681",
    topic: "用户 driver 文件组织",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「用户 driver 文件组织」时，哪项理解最准确？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "用户 driver 文件组织"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s682",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-03-01-s682",
    topic: "Reset 异常",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「Reset 异常」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "Reset 异常"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s683",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-03-03-s683",
    topic: "RCC_AHBPeriphClockCmd",
    type: "concept",
    difficulty: "进阶",
    question: "排查「RCC_AHBPeriphClockCmd」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "RCC_AHBPeriphClockCmd"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s684",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-03-04-s684",
    topic: "ODR 输出",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「ODR 输出」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "ODR 输出"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s685",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-03-05-s685",
    topic: "中断共享变量需要 volatile",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「中断共享变量需要 volatile」时，哪项理解最准确？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "中断共享变量需要 volatile"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s686",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-03-04-s686",
    topic: "EXTI 线冲突",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「EXTI 线冲突」，哪项说法更稳妥？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "EXTI 线冲突"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s687",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-03-05-s687",
    topic: "TIM_OCInitTypeDef",
    type: "concept",
    difficulty: "基础",
    question: "排查「TIM_OCInitTypeDef」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "TIM_OCInitTypeDef"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s688",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-03-02-s688",
    topic: "中断发送",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「中断发送」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "中断发送"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s689",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-03-05-s689",
    topic: "内存拷贝",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「内存拷贝」时，哪项理解最准确？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "内存拷贝"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s690",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-03-05-s690",
    topic: "ADC 校准",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「ADC 校准」，哪项说法更稳妥？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "ADC 校准"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s691",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-03-06-s691",
    topic: "I2C_SendData",
    type: "concept",
    difficulty: "面试",
    question: "排查「I2C_SendData」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "I2C_SendData"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s692",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-03-05-s692",
    topic: "SPI_I2S_ReceiveData",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「SPI_I2S_ReceiveData」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "SPI_I2S_ReceiveData"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s693",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-03-01-s693",
    topic: "CAN 发送邮箱",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「CAN 发送邮箱」时，哪项理解最准确？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "CAN 发送邮箱"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s694",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-03-03-s694",
    topic: "CMD0 进入 SPI 模式",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「CMD0 进入 SPI 模式」，哪项说法更稳妥？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "CMD0 进入 SPI 模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s695",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-03-01-s695",
    topic: "保存参数",
    type: "concept",
    difficulty: "进阶",
    question: "排查「保存参数」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "保存参数"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s696",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-03-01-s696",
    topic: "跳转前关闭中断",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「跳转前关闭中断」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "跳转前关闭中断"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s697",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-03-01-s697",
    topic: "外设时钟未使能",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「外设时钟未使能」时，哪项理解最准确？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "外设时钟未使能"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s698",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-03-04-s698",
    topic: "挂起态",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「挂起态」，哪项说法更稳妥？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "挂起态"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s699",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-03-01-s699",
    topic: "无法连接芯片",
    type: "concept",
    difficulty: "基础",
    question: "排查「无法连接芯片」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "无法连接芯片"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s700",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-03-01-s700",
    topic: "环形缓冲区",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「环形缓冲区」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "环形缓冲区"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s701",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-03-03-s701",
    topic: "IDLE 中断作用",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「IDLE 中断作用」时，哪项理解最准确？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "IDLE 中断作用"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s702",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-03-01-s702",
    topic: "中断响应时间",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「中断响应时间」，哪项说法更稳妥？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "中断响应时间"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s703",
    subject: "stm32",
    chapter: "STM32 与标准库工程基础",
    knowledgeId: "stm32-01-03-09-s703",
    topic: "用户 app 文件组织",
    type: "concept",
    difficulty: "基础",
    question: "排查「用户 app 文件组织」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "用户 app 文件组织"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s704",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-03-02-s704",
    topic: "NMI 异常",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「NMI 异常」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "NMI 异常"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s705",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-03-05-s705",
    topic: "USART 时钟使能",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「USART 时钟使能」时，哪项理解最准确？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "USART 时钟使能"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s706",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-03-06-s706",
    topic: "BRR / BSRR 原子复位",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「BRR / BSRR 原子复位」，哪项说法更稳妥？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "BRR / BSRR 原子复位"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s707",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-03-06-s707",
    topic: "volatile 不保证原子性",
    type: "concept",
    difficulty: "进阶",
    question: "排查「volatile 不保证原子性」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "volatile 不保证原子性"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s708",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-03-05-s708",
    topic: "AFIO / SYSCFG 时钟未开启",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「AFIO / SYSCFG 时钟未开启」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "AFIO / SYSCFG 时钟未开启"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s709",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-03-06-s709",
    topic: "TIM_OCxInit",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「TIM_OCxInit」时，哪项理解最准确？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "TIM_OCxInit"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s710",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-03-04-s710",
    topic: "printf 重定向",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「printf 重定向」，哪项说法更稳妥？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "printf 重定向"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s711",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-03-06-s711",
    topic: "双缓冲模式",
    type: "concept",
    difficulty: "面试",
    question: "排查「双缓冲模式」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "双缓冲模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s712",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-03-06-s712",
    topic: "均值滤波",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「均值滤波」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "均值滤波"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s713",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-03-07-s713",
    topic: "I2C_ReceiveData",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「I2C_ReceiveData」时，哪项理解最准确？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "I2C_ReceiveData"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s714",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-03-06-s714",
    topic: "SPI_I2S_GetFlagStatus",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「SPI_I2S_GetFlagStatus」，哪项说法更稳妥？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "SPI_I2S_GetFlagStatus"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s715",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-03-02-s715",
    topic: "CAN 接收 FIFO",
    type: "concept",
    difficulty: "基础",
    question: "排查「CAN 接收 FIFO」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "CAN 接收 FIFO"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s716",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-03-05-s716",
    topic: "ACMD41 初始化",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「ACMD41 初始化」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "ACMD41 初始化"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s717",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-03-02-s717",
    topic: "模拟 EEPROM",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「模拟 EEPROM」时，哪项理解最准确？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "模拟 EEPROM"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s718",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-03-02-s718",
    topic: "跳转前关闭 SysTick",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「跳转前关闭 SysTick」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "跳转前关闭 SysTick"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s719",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-03-02-s719",
    topic: "GPIO 复用模式错误",
    type: "concept",
    difficulty: "进阶",
    question: "排查「GPIO 复用模式错误」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "GPIO 复用模式错误"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s720",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-03-06-s720",
    topic: "时间片调度",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「时间片调度」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "时间片调度"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s721",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-03-02-s721",
    topic: "程序下载后不运行",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「程序下载后不运行」时，哪项理解最准确？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "程序下载后不运行"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s722",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-03-02-s722",
    topic: "FIFO",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「FIFO」，哪项说法更稳妥？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "FIFO"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s723",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-03-05-s723",
    topic: "环形缓冲区设计",
    type: "concept",
    difficulty: "基础",
    question: "排查「环形缓冲区设计」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "环形缓冲区设计"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s724",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-03-02-s724",
    topic: "CPU 占用率",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「CPU 占用率」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "CPU 占用率"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s725",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-03-03-s725",
    topic: "HardFault",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「HardFault」时，哪项理解最准确？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "HardFault"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s726",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-03-06-s726",
    topic: "TIM 时钟使能",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「TIM 时钟使能」，哪项说法更稳妥？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "TIM 时钟使能"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s727",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-03-07-s727",
    topic: "ODR 读改写风险",
    type: "concept",
    difficulty: "基础",
    question: "排查「ODR 读改写风险」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "ODR 读改写风险"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s728",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-03-07-s728",
    topic: "中断标志位要及时清除",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「中断标志位要及时清除」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "中断标志位要及时清除"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s729",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-03-06-s729",
    topic: "NVIC 未使能",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「NVIC 未使能」时，哪项理解最准确？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "NVIC 未使能"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s730",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-03-07-s730",
    topic: "TIM_OCxPreloadConfig",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「TIM_OCxPreloadConfig」，哪项说法更稳妥？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "TIM_OCxPreloadConfig"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s731",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-03-05-s731",
    topic: "TXE 发送数据寄存器空",
    type: "concept",
    difficulty: "面试",
    question: "排查「TXE 发送数据寄存器空」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "TXE 发送数据寄存器空"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s732",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-03-07-s732",
    topic: "DMA 环形缓冲区",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「DMA 环形缓冲区」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA 环形缓冲区"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s733",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-03-07-s733",
    topic: "滑动平均滤波",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「滑动平均滤波」时，哪项理解最准确？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "滑动平均滤波"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s734",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-03-08-s734",
    topic: "I2C_CheckEvent",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「I2C_CheckEvent」，哪项说法更稳妥？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "I2C_CheckEvent"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s735",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-03-07-s735",
    topic: "SPI DMA",
    type: "concept",
    difficulty: "基础",
    question: "排查「SPI DMA」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "SPI DMA"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s736",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-03-03-s736",
    topic: "CAN 中断接收",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「CAN 中断接收」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "CAN 中断接收"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s737",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-03-06-s737",
    topic: "CMD17 单块读",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「CMD17 单块读」时，哪项理解最准确？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "CMD17 单块读"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s738",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-03-03-s738",
    topic: "Flash 擦写前备份",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「Flash 擦写前备份」，哪项说法更稳妥？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "Flash 擦写前备份"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s739",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-03-03-s739",
    topic: "设置 MSP",
    type: "concept",
    difficulty: "基础",
    question: "排查「设置 MSP」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "设置 MSP"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s740",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-03-03-s740",
    topic: "中断标志位未清除",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「中断标志位未清除」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "中断标志位未清除"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s741",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-03-07-s741",
    topic: "PendSV 上下文切换",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「PendSV 上下文切换」时，哪项理解最准确？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "PendSV 上下文切换"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s742",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-03-03-s742",
    topic: "进入 HardFault",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「进入 HardFault」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "进入 HardFault"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s743",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-03-03-s743",
    topic: "状态机解析",
    type: "concept",
    difficulty: "进阶",
    question: "排查「状态机解析」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "状态机解析"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s744",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-03-06-s744",
    topic: "printf 重定向",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「printf 重定向」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "printf 重定向"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s745",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-03-03-s745",
    topic: "DMA 减少 CPU 搬运",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「DMA 减少 CPU 搬运」时，哪项理解最准确？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA 减少 CPU 搬运"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s746",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-03-04-s746",
    topic: "MemManage Fault",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「MemManage Fault」，哪项说法更稳妥？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "MemManage Fault"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s747",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-03-07-s747",
    topic: "ADC 时钟使能",
    type: "concept",
    difficulty: "基础",
    question: "排查「ADC 时钟使能」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "ADC 时钟使能"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s748",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-03-09-s748",
    topic: "输出速度配置",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「输出速度配置」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "输出速度配置"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s749",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-03-08-s749",
    topic: "中断重入风险",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「中断重入风险」时，哪项理解最准确？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "中断重入风险"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s750",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-03-07-s750",
    topic: "中断服务函数名称错误",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「中断服务函数名称错误」，哪项说法更稳妥？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "中断服务函数名称错误"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s751",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-03-08-s751",
    topic: "修改占空比",
    type: "concept",
    difficulty: "面试",
    question: "排查「修改占空比」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "修改占空比"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s752",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-03-06-s752",
    topic: "TC 发送完成",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「TC 发送完成」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "TC 发送完成"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s753",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-03-08-s753",
    topic: "DMA 与 Cache 一致性",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「DMA 与 Cache 一致性」时，哪项理解最准确？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA 与 Cache 一致性"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s754",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-03-08-s754",
    topic: "过采样",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「过采样」，哪项说法更稳妥？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "过采样"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s755",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-03-09-s755",
    topic: "I2C 超时处理",
    type: "concept",
    difficulty: "进阶",
    question: "排查「I2C 超时处理」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "I2C 超时处理"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s756",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-03-08-s756",
    topic: "SPI 数据错位",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「SPI 数据错位」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "SPI 数据错位"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s757",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-03-04-s757",
    topic: "CAN 错误计数器",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「CAN 错误计数器」时，哪项理解最准确？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "CAN 错误计数器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s758",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-03-07-s758",
    topic: "CMD24 单块写",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「CMD24 单块写」，哪项说法更稳妥？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "CMD24 单块写"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s759",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-03-04-s759",
    topic: "Flash 擦写期间中断风险",
    type: "concept",
    difficulty: "基础",
    question: "排查「Flash 擦写期间中断风险」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "Flash 擦写期间中断风险"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s760",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-03-04-s760",
    topic: "设置 VTOR",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「设置 VTOR」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "设置 VTOR"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s761",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-03-04-s761",
    topic: "NVIC 未配置",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「NVIC 未配置」时，哪项理解最准确？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "NVIC 未配置"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s762",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-03-08-s762",
    topic: "SysTick 触发调度",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「SysTick 触发调度」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "SysTick 触发调度"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s763",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-03-04-s763",
    topic: "变量被优化看不到",
    type: "concept",
    difficulty: "基础",
    question: "排查「变量被优化看不到」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "变量被优化看不到"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s764",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-03-04-s764",
    topic: "超时判断",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「超时判断」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "超时判断"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s765",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-03-07-s765",
    topic: "波特率误差",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「波特率误差」时，哪项理解最准确？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "波特率误差"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s766",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-03-04-s766",
    topic: "非阻塞设计",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「非阻塞设计」，哪项说法更稳妥？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "非阻塞设计"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s767",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-03-05-s767",
    topic: "BusFault",
    type: "concept",
    difficulty: "进阶",
    question: "排查「BusFault」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "BusFault"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s768",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-03-08-s768",
    topic: "DMA 时钟使能",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「DMA 时钟使能」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "DMA 时钟使能"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s769",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-03-10-s769",
    topic: "输出电平与外部电路关系",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「输出电平与外部电路关系」时，哪项理解最准确？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "输出电平与外部电路关系"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s770",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-03-09-s770",
    topic: "中断优先级配置错误",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「中断优先级配置错误」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "中断优先级配置错误"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s771",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-03-08-s771",
    topic: "中断里延时风险",
    type: "concept",
    difficulty: "面试",
    question: "排查「中断里延时风险」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "中断里延时风险"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s772",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-03-09-s772",
    topic: "舵机 PWM",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「舵机 PWM」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "舵机 PWM"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s773",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-03-07-s773",
    topic: "USART_SendData",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「USART_SendData」时，哪项理解最准确？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "USART_SendData"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s774",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-03-09-s774",
    topic: "DMA 缓冲区生命周期",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「DMA 缓冲区生命周期」，哪项说法更稳妥？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA 缓冲区生命周期"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s775",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-03-09-s775",
    topic: "温度传感器采样",
    type: "concept",
    difficulty: "基础",
    question: "排查「温度传感器采样」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "温度传感器采样"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s776",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-13-03-10-s776",
    topic: "软件模拟 I2C",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「软件模拟 I2C」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制",
      "7 位地址表示最多只能挂 7 个从机",
      "I2C 高电平由推挽强推才正确",
      "主机读最后一个字节仍必须一直 ACK"
    ],
    answer: 0,
    explanation: "I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。",
    tags: [
      "STM32",
      "SPL",
      "软件模拟 I2C"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s777",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-03-09-s777",
    topic: "NSS 软件控制",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「NSS 软件控制」时，哪项理解最准确？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "NSS 软件控制"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s778",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-03-05-s778",
    topic: "Error Active",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「Error Active」，哪项说法更稳妥？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "Error Active"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s779",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-03-08-s779",
    topic: "多块读写",
    type: "concept",
    difficulty: "进阶",
    question: "排查「多块读写」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "多块读写"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s780",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-03-05-s780",
    topic: "从 Flash 运行代码",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「从 Flash 运行代码」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "从 Flash 运行代码"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s781",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-03-05-s781",
    topic: "外设复位",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「外设复位」时，哪项理解最准确？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "外设复位"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s782",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-03-05-s782",
    topic: "初始化结构体字段漏配",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「初始化结构体字段漏配」，哪项说法更稳妥？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "初始化结构体字段漏配"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s783",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-03-09-s783",
    topic: "临界区",
    type: "concept",
    difficulty: "基础",
    question: "排查「临界区」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "临界区"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s784",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-03-05-s784",
    topic: "中断不进入",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「中断不进入」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "中断不进入"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s785",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-03-05-s785",
    topic: "大小端处理",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「大小端处理」时，哪项理解最准确？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "大小端处理"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s786",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-03-08-s786",
    topic: "ORE 溢出错误",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「ORE 溢出错误」，哪项说法更稳妥？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "ORE 溢出错误"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s787",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-03-05-s787",
    topic: "环形缓冲区",
    type: "concept",
    difficulty: "基础",
    question: "排查「环形缓冲区」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "环形缓冲区"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s788",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-03-06-s788",
    topic: "UsageFault",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「UsageFault」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "UsageFault"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s789",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-03-10-s789",
    topic: "外设不工作与时钟未使能",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「外设不工作与时钟未使能」时，哪项理解最准确？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "外设不工作与时钟未使能"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s790",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-04-01-s790",
    topic: "按键输入",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「按键输入」，哪项说法更稳妥？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "按键输入"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s791",
    subject: "stm32",
    chapter: "NVIC 与中断系统",
    knowledgeId: "stm32-05-03-10-s791",
    topic: "临界区保护",
    type: "concept",
    difficulty: "面试",
    question: "排查「临界区保护」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "临界区保护"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s792",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-03-09-s792",
    topic: "双边沿触发误判",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「双边沿触发误判」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "双边沿触发误判"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s793",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-03-10-s793",
    topic: "LED 呼吸灯",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「LED 呼吸灯」时，哪项理解最准确？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "LED 呼吸灯"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s794",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-03-08-s794",
    topic: "USART_GetFlagStatus",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「USART_GetFlagStatus」，哪项说法更稳妥？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "USART_GetFlagStatus"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s795",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-10-03-10-s795",
    topic: "DMA 传输未完成风险",
    type: "concept",
    difficulty: "基础",
    question: "排查「DMA 传输未完成风险」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。",
    tags: [
      "STM32",
      "SPL",
      "DMA 传输未完成风险"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s796",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-11-03-10-s796",
    topic: "Vrefint 内部参考电压",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「Vrefint 内部参考电压」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响",
      "ADC 时钟越高采样越准",
      "任何 GPIO 模式都适合模拟采样",
      "12 位 ADC 的结果天然就是电压值"
    ],
    answer: 0,
    explanation: "ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。",
    tags: [
      "STM32",
      "SPL",
      "Vrefint 内部参考电压"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s797",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-14-03-10-s797",
    topic: "SPI 调试逻辑分析仪",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「SPI 调试逻辑分析仪」时，哪项理解最准确？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "SPI 调试逻辑分析仪"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s798",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-03-06-s798",
    topic: "Error Passive",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「Error Passive」，哪项说法更稳妥？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "Error Passive"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s799",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-03-09-s799",
    topic: "CRC 处理",
    type: "concept",
    difficulty: "基础",
    question: "排查「CRC 处理」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "CRC 处理"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s800",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-03-06-s800",
    topic: "从 SRAM 运行函数",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「从 SRAM 运行函数」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "从 SRAM 运行函数"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s801",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-03-06-s801",
    topic: "App 地址合法性检查",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「App 地址合法性检查」时，哪项理解最准确？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "App 地址合法性检查"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s802",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-03-06-s802",
    topic: "标志位等待死循环",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「标志位等待死循环」，哪项说法更稳妥？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "标志位等待死循环"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s803",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-03-10-s803",
    topic: "调度器锁定",
    type: "concept",
    difficulty: "进阶",
    question: "排查「调度器锁定」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "调度器锁定"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s804",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-03-06-s804",
    topic: "外设不工作",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「外设不工作」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "外设不工作"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s805",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-03-06-s805",
    topic: "结构体打包风险",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「结构体打包风险」时，哪项理解最准确？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "结构体打包风险"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s806",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-03-09-s806",
    topic: "RS485 方向控制",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「RS485 方向控制」，哪项说法更稳妥？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "RS485 方向控制"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s807",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-03-06-s807",
    topic: "内存占用优化",
    type: "concept",
    difficulty: "基础",
    question: "排查「内存占用优化」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "内存占用优化"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s808",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-03-07-s808",
    topic: "SVCall",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「SVCall」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "SVCall"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s809",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-04-01-s809",
    topic: "为什么外设初始化前要先开时钟",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「为什么外设初始化前要先开时钟」时，哪项理解最准确？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "为什么外设初始化前要先开时钟"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s810",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-04-02-s810",
    topic: "上拉按键",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「上拉按键」，哪项说法更稳妥？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "上拉按键"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s811",
    subject: "stm32",
    chapter: "EXTI 外部中断",
    knowledgeId: "stm32-06-03-10-s811",
    topic: "低功耗唤醒",
    type: "concept",
    difficulty: "面试",
    question: "排查「低功耗唤醒」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。",
    tags: [
      "STM32",
      "SPL",
      "低功耗唤醒"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s812",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-04-01-s812",
    topic: "输入捕获概念",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「输入捕获概念」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "输入捕获概念"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s813",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-03-09-s813",
    topic: "RS485 DE 引脚控制",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「RS485 DE 引脚控制」时，哪项理解最准确？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "RS485 DE 引脚控制"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s814",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-03-07-s814",
    topic: "Bus Off",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「Bus Off」，哪项说法更稳妥？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "Bus Off"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s815",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-03-10-s815",
    topic: "SPI 模式速度切换",
    type: "concept",
    difficulty: "进阶",
    question: "排查「SPI 模式速度切换」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低",
      "CPOL/CPHA 不一致也不会影响采样"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。",
    tags: [
      "STM32",
      "SPL",
      "SPI 模式速度切换"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s816",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-03-07-s816",
    topic: "双 Bank Flash",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「双 Bank Flash」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "双 Bank Flash"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s817",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-03-07-s817",
    topic: "App 栈顶地址检查",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「App 栈顶地址检查」时，哪项理解最准确？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "App 栈顶地址检查"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s818",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-03-07-s818",
    topic: "超时处理缺失",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「超时处理缺失」，哪项说法更稳妥？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "超时处理缺失"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s819",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-04-01-s819",
    topic: "队列概念",
    type: "concept",
    difficulty: "基础",
    question: "排查「队列概念」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "队列概念"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s820",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-03-07-s820",
    topic: "时钟配置错误",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「时钟配置错误」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "时钟配置错误"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s821",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-03-07-s821",
    topic: "对齐访问",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「对齐访问」时，哪项理解最准确？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "对齐访问"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s822",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-03-10-s822",
    topic: "串口协议解析",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「串口协议解析」，哪项说法更稳妥？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "串口协议解析"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s823",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-03-07-s823",
    topic: "Flash 占用优化",
    type: "concept",
    difficulty: "基础",
    question: "排查「Flash 占用优化」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "Flash 占用优化"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s824",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-03-08-s824",
    topic: "PendSV",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「PendSV」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "PendSV"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s825",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-04-03-s825",
    topic: "HSE 起振失败原因",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「HSE 起振失败原因」时，哪项理解最准确？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "HSE 起振失败原因"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s826",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-04-03-s826",
    topic: "下拉按键",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「下拉按键」，哪项说法更稳妥？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "下拉按键"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s827",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-04-02-s827",
    topic: "捕获上升沿",
    type: "concept",
    difficulty: "进阶",
    question: "排查「捕获上升沿」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "捕获上升沿"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s828",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-03-10-s828",
    topic: "发送丢字节问题",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「发送丢字节问题」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "发送丢字节问题"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s829",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-03-08-s829",
    topic: "自动重传",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「自动重传」时，哪项理解最准确？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "自动重传"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s830",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-04-01-s830",
    topic: "FatFs 是什么",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「FatFs 是什么」，哪项说法更稳妥？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "FatFs 是什么"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s831",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-03-08-s831",
    topic: "固件升级",
    type: "concept",
    difficulty: "面试",
    question: "排查「固件升级」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "固件升级"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s832",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-03-08-s832",
    topic: "Flash 擦写保护",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「Flash 擦写保护」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "Flash 擦写保护"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s833",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-03-08-s833",
    topic: "标准库函数调用顺序错误",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「标准库函数调用顺序错误」时，哪项理解最准确？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "标准库函数调用顺序错误"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s834",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-04-03-s834",
    topic: "xQueueSend",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「xQueueSend」，哪项说法更稳妥？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "xQueueSend"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s835",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-03-08-s835",
    topic: "栈溢出",
    type: "concept",
    difficulty: "基础",
    question: "排查「栈溢出」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局",
      "所有变量都一定放在 Flash 中",
      "栈和堆大小不会影响运行稳定性",
      "中断向量表位置与链接配置无关"
    ],
    answer: 0,
    explanation: "链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。",
    tags: [
      "STM32",
      "SPL",
      "栈溢出"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s836",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-03-08-s836",
    topic: "CRC 查表法",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「CRC 查表法」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "CRC 查表法"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s837",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-04-01-s837",
    topic: "定时器周期计算",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「定时器周期计算」时，哪项理解最准确？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "定时器周期计算"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s838",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-03-08-s838",
    topic: "编译优化等级",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「编译优化等级」，哪项说法更稳妥？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。",
    tags: [
      "STM32",
      "SPL",
      "编译优化等级"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s839",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-03-09-s839",
    topic: "SysTick",
    type: "concept",
    difficulty: "进阶",
    question: "排查「SysTick」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "SysTick"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s840",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-04-04-s840",
    topic: "PLL 未锁定问题",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「PLL 未锁定问题」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "PLL 未锁定问题"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s841",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-04-05-s841",
    topic: "软件消抖",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「软件消抖」时，哪项理解最准确？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "软件消抖"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s842",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-04-04-s842",
    topic: "测量频率",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「测量频率」，哪项说法更稳妥？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "测量频率"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s843",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-04-01-s843",
    topic: "阻塞接收",
    type: "concept",
    difficulty: "基础",
    question: "排查「阻塞接收」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "阻塞接收"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s844",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-03-09-s844",
    topic: "CAN 总线不通排查",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「CAN 总线不通排查」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "CAN 总线不通排查"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s845",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-04-03-s845",
    topic: "f_mount",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「f_mount」时，哪项理解最准确？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "f_mount"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s846",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-03-09-s846",
    topic: "Flash 数据校验",
    type: "concept",
    difficulty: "面试",
    question: "关于 STM32 SPL 工程中的「Flash 数据校验」，哪项说法更稳妥？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "Flash 数据校验"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s847",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-03-09-s847",
    topic: "链接地址修改",
    type: "concept",
    difficulty: "基础",
    question: "排查「链接地址修改」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。",
    tags: [
      "STM32",
      "SPL",
      "链接地址修改"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s848",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-03-09-s848",
    topic: "不同芯片库函数差异",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「不同芯片库函数差异」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "InitTypeDef 局部变量不赋完整字段也一定安全",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。",
    tags: [
      "STM32",
      "SPL",
      "不同芯片库函数差异"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s849",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-04-04-s849",
    topic: "xQueueReceive",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「xQueueReceive」时，哪项理解最准确？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。",
    tags: [
      "STM32",
      "SPL",
      "xQueueReceive"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s850",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-03-09-s850",
    topic: "内存越界",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「内存越界」，哪项说法更稳妥？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。",
    tags: [
      "STM32",
      "SPL",
      "内存越界"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s851",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-03-09-s851",
    topic: "CRC 位算法",
    type: "concept",
    difficulty: "面试",
    question: "排查「CRC 位算法」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "协议处理要明确帧边界、长度字段、字节序、校验和超时恢复",
      "只要收到第一个字节就能认为整帧有效",
      "大小端差异不会影响多字节字段",
      "CRC 通过后就不需要检查长度"
    ],
    answer: 0,
    explanation: "通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。",
    tags: [
      "STM32",
      "SPL",
      "CRC 位算法"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s852",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-04-03-s852",
    topic: "PWM 占空比计算",
    type: "concept",
    difficulty: "基础",
    question: "配置或解释「PWM 占空比计算」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "PWM 占空比计算"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s853",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-03-09-s853",
    topic: "低功耗优化",
    type: "concept",
    difficulty: "基础",
    question: "面试问到「低功耗优化」时，哪项理解最准确？",
    code: "",
    options: [
      "低功耗模式要区分 Sleep、Stop、Standby 的时钟、SRAM 保持、唤醒源和恢复流程",
      "所有低功耗模式唤醒后都从原语句继续且时钟不变",
      "Standby 和普通延时没有区别",
      "唤醒源不需要提前配置"
    ],
    answer: 0,
    explanation: "低功耗题常考模式差异和唤醒后的时钟恢复。错误选项把不同低功耗等级混为一谈。",
    tags: [
      "STM32",
      "SPL",
      "低功耗优化"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s854",
    subject: "stm32",
    chapter: "Cortex-M 内核基础",
    knowledgeId: "stm32-02-03-10-s854",
    topic: "中断与异常的区别",
    type: "concept",
    difficulty: "进阶",
    question: "关于 STM32 SPL 工程中的「中断与异常的区别」，哪项说法更稳妥？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数",
      "中断服务函数里适合放长延时和阻塞打印"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。",
    tags: [
      "STM32",
      "SPL",
      "中断与异常的区别"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s855",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-04-05-s855",
    topic: "USART 波特率与时钟关系",
    type: "concept",
    difficulty: "基础",
    question: "排查「USART 波特率与时钟关系」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。",
    tags: [
      "STM32",
      "SPL",
      "USART 波特率与时钟关系"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s856",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-04-06-s856",
    topic: "硬件消抖",
    type: "concept",
    difficulty: "面试",
    question: "配置或解释「硬件消抖」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。",
    tags: [
      "STM32",
      "SPL",
      "硬件消抖"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s857",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-04-06-s857",
    topic: "捕获溢出处理",
    type: "concept",
    difficulty: "进阶",
    question: "面试问到「捕获溢出处理」时，哪项理解最准确？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。",
    tags: [
      "STM32",
      "SPL",
      "捕获溢出处理"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s858",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-04-03-s858",
    topic: "DMA 接收",
    type: "concept",
    difficulty: "基础",
    question: "关于 STM32 SPL 工程中的「DMA 接收」，哪项说法更稳妥？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。",
    tags: [
      "STM32",
      "SPL",
      "DMA 接收"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s859",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-15-03-10-s859",
    topic: "FDCAN 与经典 CAN 差异",
    type: "concept",
    difficulty: "基础",
    question: "排查「FDCAN 与经典 CAN 差异」相关问题时，优先确认哪一点？",
    code: "",
    options: [
      "CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理",
      "CAN 仲裁会破坏获胜节点正在发送的帧",
      "过滤器只影响发送不影响接收",
      "Bus Off 后节点仍能正常发帧"
    ],
    answer: 0,
    explanation: "CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。",
    tags: [
      "STM32",
      "SPL",
      "FDCAN 与经典 CAN 差异"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s860",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-04-04-s860",
    topic: "f_open",
    type: "concept",
    difficulty: "进阶",
    question: "配置或解释「f_open」时，哪项原则更符合真实项目？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。",
    tags: [
      "STM32",
      "SPL",
      "f_open"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s861",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-18-03-10-s861",
    topic: "掉电保护",
    type: "concept",
    difficulty: "面试",
    question: "面试问到「掉电保护」时，哪项理解最准确？",
    code: "",
    options: [
      "片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性",
      "Flash 可以像 SRAM 一样任意字节反复覆盖",
      "擦写寿命无限",
      "写配置时不需要校验或备份"
    ],
    answer: 0,
    explanation: "Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。",
    tags: [
      "STM32",
      "SPL",
      "掉电保护"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s862",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-21-03-10-s862",
    topic: "Bootloader 与 App 共享参数",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「Bootloader 与 App 共享参数」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态",
      "只要函数指针跳过去就一定可靠",
      "跳转前不需要管正在开的外设和中断",
      "应用向量表位置不影响中断"
    ],
    answer: 0,
    explanation: "Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "Bootloader 与 App 共享参数"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s863",
    subject: "stm32",
    chapter: "标准外设库 SPL 机制",
    knowledgeId: "stm32-23-03-10-s863",
    topic: "assert_param 未开启导致问题隐藏",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「assert_param 未开启导致问题隐藏」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开",
      "外设初始化不需要对应源文件加入工程",
      "Cmd 类函数只会影响注释不会影响硬件",
      "InitTypeDef 局部变量不赋完整字段也一定安全"
    ],
    answer: 0,
    explanation: "标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "assert_param 未开启导致问题隐藏"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s864",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-04-05-s864",
    topic: "队列阻塞时间",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「队列阻塞时间」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "队列阻塞时间"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s865",
    subject: "stm32",
    chapter: "调试与下载",
    knowledgeId: "stm32-26-03-10-s865",
    topic: "调试器影响时序",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「调试器影响时序」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径",
      "HardFault 只能靠猜测解决",
      "断点越多实时问题越容易复现",
      "下载成功就说明时钟和外设配置都正确"
    ],
    answer: 0,
    explanation: "调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "调试器影响时序"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s866",
    subject: "stm32",
    chapter: "常见协议与数据处理",
    knowledgeId: "stm32-27-03-10-s866",
    topic: "数据帧错误恢复",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「数据帧错误恢复」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码",
      "TXE 和 TC 表示完全相同的发送状态"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "数据帧错误恢复"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s867",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-04-04-s867",
    topic: "输入捕获测频率",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「输入捕获测频率」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "APB 分频不会影响定时器时钟",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "输入捕获测频率"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s868",
    subject: "stm32",
    chapter: "综合实战与工程能力",
    knowledgeId: "stm32-29-03-10-s868",
    topic: "实时性分析",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「实时性分析」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护",
      "接口不需要说明调用上下文和时序限制"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "实时性分析"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s869",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-04-09-s869",
    topic: "低功耗模式下时钟变化",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「低功耗模式下时钟变化」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "外设异常时优先改业务算法，不需要检查时钟树",
      "SystemCoreClock 永远自动等于真实主频",
      "只要 CPU 能运行，所有外设时钟都会自动打开"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "低功耗模式下时钟变化"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s870",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-04-07-s870",
    topic: "输入电平读取 IDR",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「输入电平读取 IDR」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "复用外设会自动忽略 GPIO 模式",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "输入电平读取 IDR"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s871",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-04-07-s871",
    topic: "PWM 输入模式",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「PWM 输入模式」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "PWM 输入模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s872",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-04-04-s872",
    topic: "RXNE 接收非空",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「RXNE 接收非空」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码",
      "TXE 和 TC 表示完全相同的发送状态"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "RXNE 接收非空"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s873",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-04-05-s873",
    topic: "f_read",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「f_read」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "扇区大小和缓冲区对齐永远无关",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "f_read"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s874",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-04-06-s874",
    topic: "ISR 中发送队列",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「ISR 中发送队列」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "ISR 中发送队列"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s875",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-04-05-s875",
    topic: "输入捕获测脉宽",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「输入捕获测脉宽」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "输入捕获测脉宽"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s876",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-03-04-10-s876",
    topic: "SystemCoreClock 未更新问题",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「SystemCoreClock 未更新问题」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "SystemCoreClock 永远自动等于真实主频",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "SystemCoreClock 未更新问题"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s877",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-04-08-s877",
    topic: "输入电平抖动",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「输入电平抖动」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "输入电平抖动"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s878",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-04-08-s878",
    topic: "输入滤波",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「输入滤波」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "输入滤波"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s879",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-04-06-s879",
    topic: "ORE 溢出错误",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「ORE 溢出错误」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "波特率误差不会导致乱码",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "ORE 溢出错误"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s880",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-04-06-s880",
    topic: "f_write",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「f_write」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "f_write"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s881",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-04-07-s881",
    topic: "xQueueSendFromISR",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「xQueueSendFromISR」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "xQueueSendFromISR"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s882",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-04-06-s882",
    topic: "APB 分频对定时器影响",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「APB 分频对定时器影响」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "APB 分频不会影响定时器时钟",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "APB 分频对定时器影响"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s883",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-04-10-s883",
    topic: "输入模式与外部电路匹配",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「输入模式与外部电路匹配」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "输入模式与外部电路匹配"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s884",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-04-09-s884",
    topic: "捕获中断",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「捕获中断」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "捕获中断"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s885",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-04-07-s885",
    topic: "环形缓冲区接收",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「环形缓冲区接收」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "波特率误差不会导致乱码",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "环形缓冲区接收"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s886",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-04-07-s886",
    topic: "f_lseek",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「f_lseek」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "f_lseek"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s887",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-04-08-s887",
    topic: "队列长度",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「队列长度」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "队列长度"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s888",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-04-07-s888",
    topic: "高级定时器死区",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「高级定时器死区」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "APB 分频不会影响定时器时钟",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "高级定时器死区"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s889",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-05-01-s889",
    topic: "复用功能 AF 概念",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「复用功能 AF 概念」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "复用功能 AF 概念"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s890",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-04-10-s890",
    topic: "输入捕获常见错误",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「输入捕获常见错误」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "输入捕获常见错误"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s891",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-04-08-s891",
    topic: "帧头帧尾协议解析",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「帧头帧尾协议解析」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "波特率误差不会导致乱码",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "帧头帧尾协议解析"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s892",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-04-08-s892",
    topic: "f_close",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「f_close」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "f_close"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s893",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-04-09-s893",
    topic: "队列元素大小",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「队列元素大小」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "队列元素大小"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s894",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-04-08-s894",
    topic: "定时器中断频率",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「定时器中断频率」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "APB 分频不会影响定时器时钟",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "定时器中断频率"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s895",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-05-03-s895",
    topic: "SPI 引脚复用",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「SPI 引脚复用」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "SPI 引脚复用"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s896",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-05-01-s896",
    topic: "互补 PWM",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「互补 PWM」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "互补 PWM"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s897",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-04-09-s897",
    topic: "粘包与拆包",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「粘包与拆包」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "波特率误差不会导致乱码",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "粘包与拆包"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s898",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-04-09-s898",
    topic: "f_mkdir",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「f_mkdir」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "f_mkdir"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s899",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-04-10-s899",
    topic: "队列满与队列空",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「队列满与队列空」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "队列满与队列空"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s900",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-04-09-s900",
    topic: "定时器触发 ADC",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「定时器触发 ADC」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "不清 pending 位也不会重复进中断",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "定时器触发 ADC"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s901",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-05-04-s901",
    topic: "I2C 引脚复用",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「I2C 引脚复用」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "I2C 引脚复用"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s902",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-05-03-s902",
    topic: "刹车输入 BKIN",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「刹车输入 BKIN」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "刹车输入 BKIN"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s903",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-09-04-10-s903",
    topic: "串口丢包排查",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「串口丢包排查」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "波特率误差不会导致乱码",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "串口丢包排查"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s904",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-04-10-s904",
    topic: "文件系统格式化",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「文件系统格式化」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "文件系统格式化"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s905",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-05-01-s905",
    topic: "二值信号量",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「二值信号量」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "二值信号量"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s906",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-04-10-s906",
    topic: "定时器主从同步",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「定时器主从同步」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "APB 分频不会影响定时器时钟",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "定时器主从同步"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s907",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-05-05-s907",
    topic: "TIM PWM 引脚复用",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「TIM PWM 引脚复用」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "TIM PWM 引脚复用"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s908",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-05-04-s908",
    topic: "重复计数器",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「重复计数器」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "重复计数器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s909",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-05-01-s909",
    topic: "SD 卡初始化失败",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「SD 卡初始化失败」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "扇区大小和缓冲区对齐永远无关",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "SD 卡初始化失败"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s910",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-05-02-s910",
    topic: "计数信号量",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「计数信号量」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "计数信号量"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s911",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-05-02-s911",
    topic: "DMA 普通模式与循环模式",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「DMA 普通模式与循环模式」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求",
      "DMA 会自动知道 C 字符串实际长度"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "DMA 普通模式与循环模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s912",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-05-06-s912",
    topic: "AFIO 时钟使能",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「AFIO 时钟使能」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器",
      "SystemCoreClock 永远自动等于真实主频",
      "只要 CPU 能运行，所有外设时钟都会自动打开",
      "外设异常时优先改业务算法，不需要检查时钟树"
    ],
    answer: 0,
    explanation: "RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "AFIO 时钟使能"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s913",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-05-05-s913",
    topic: "中心对齐模式",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「中心对齐模式」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "中心对齐模式"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s914",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-05-02-s914",
    topic: "SDIO 线序错误",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「SDIO 线序错误」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关",
      "f_write 成功与否不用看返回值"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "SDIO 线序错误"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s915",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-05-04-s915",
    topic: "递归互斥量",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「递归互斥量」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "递归互斥量"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s916",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-05-03-s916",
    topic: "DMA 半传输中断",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「DMA 半传输中断」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "DMA 半传输中断"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s917",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-05-07-s917",
    topic: "GPIO_PinRemapConfig",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「GPIO_PinRemapConfig」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式",
      "所有 GPIO 都配置成推挽输出最安全"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "GPIO_PinRemapConfig"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s918",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-05-06-s918",
    topic: "电机控制 PWM",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「电机控制 PWM」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "APB 分频不会影响定时器时钟",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "电机控制 PWM"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s919",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-05-04-s919",
    topic: "读写超时",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「读写超时」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "读写超时"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s920",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-05-05-s920",
    topic: "xSemaphoreTake",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「xSemaphoreTake」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "xSemaphoreTake"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s921",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-05-04-s921",
    topic: "DMA 缓冲区不能是局部变量",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「DMA 缓冲区不能是局部变量」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "只打开 DMA 通道就不需要外设侧 DMA 请求",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "DMA 缓冲区不能是局部变量"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s922",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-05-08-s922",
    topic: "引脚复用冲突",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「引脚复用冲突」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "引脚复用冲突"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s923",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-05-07-s923",
    topic: "三相 PWM",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「三相 PWM」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "三相 PWM"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s924",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-05-05-s924",
    topic: "FATFS 挂载失败",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「FATFS 挂载失败」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "扇区大小和缓冲区对齐永远无关",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "FATFS 挂载失败"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s925",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-05-06-s925",
    topic: "xSemaphoreGive",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「xSemaphoreGive」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "xSemaphoreGive"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s926",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-05-05-s926",
    topic: "DMA 与 Cache 一致性",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「DMA 与 Cache 一致性」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求",
      "DMA 会自动知道 C 字符串实际长度"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "DMA 与 Cache 一致性"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s927",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-05-09-s927",
    topic: "SWD/JTAG 调试引脚占用",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「SWD/JTAG 调试引脚占用」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "复用外设会自动忽略 GPIO 模式",
      "所有 GPIO 都配置成推挽输出最安全",
      "输入引脚不需要确定默认电平"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "SWD/JTAG 调试引脚占用"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s928",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-05-08-s928",
    topic: "主从定时器同步",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「主从定时器同步」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定",
      "APB 分频不会影响定时器时钟"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "主从定时器同步"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s929",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-05-06-s929",
    topic: "写文件后未关闭导致数据丢失",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「写文件后未关闭导致数据丢失」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关",
      "f_write 成功与否不用看返回值"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "写文件后未关闭导致数据丢失"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s930",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-05-07-s930",
    topic: "FromISR 版本 API",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「FromISR 版本 API」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "FromISR 版本 API"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s931",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-05-06-s931",
    topic: "USART DMA 接收不定长数据",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「USART DMA 接收不定长数据」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略",
      "TXE 和 TC 表示完全相同的发送状态",
      "RXNE 置位后可以长时间不读数据寄存器",
      "波特率误差不会导致乱码"
    ],
    answer: 0,
    explanation: "USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "USART DMA 接收不定长数据"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s932",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-04-05-10-s932",
    topic: "重映射与复用差异",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「重映射与复用差异」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换",
      "输入引脚不需要确定默认电平",
      "复用外设会自动忽略 GPIO 模式",
      "所有 GPIO 都配置成推挽输出最安全"
    ],
    answer: 0,
    explanation: "GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "重映射与复用差异"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s933",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-05-09-s933",
    topic: "TRGO 触发输出",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「TRGO 触发输出」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "不清 pending 位也不会重复进中断",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "TRGO 触发输出"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s934",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-05-07-s934",
    topic: "多任务访问文件系统互斥",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「多任务访问文件系统互斥」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "多任务访问文件系统互斥"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s935",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-05-08-s935",
    topic: "优先级反转",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「优先级反转」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "互斥锁和二值信号量在所有场景完全等价",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "优先级反转"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s936",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-05-07-s936",
    topic: "ADC DMA 多通道采样",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「ADC DMA 多通道采样」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "只打开 DMA 通道就不需要外设侧 DMA 请求",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "ADC DMA 多通道采样"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s937",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-08-05-10-s937",
    topic: "定时器触发 ADC",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「定时器触发 ADC」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位",
      "任意两个同编号引脚都能同时独立映射到同一 EXTI 线",
      "只配置边沿触发就不需要 NVIC",
      "不清 pending 位也不会重复进中断"
    ],
    answer: 0,
    explanation: "EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "定时器触发 ADC"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s938",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-05-08-s938",
    topic: "DMA 缓冲区对齐",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「DMA 缓冲区对齐」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求",
      "DMA 会自动知道 C 字符串实际长度"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "DMA 缓冲区对齐"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s939",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-05-09-s939",
    topic: "优先级继承",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「优先级继承」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "优先级继承"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s940",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-05-08-s940",
    topic: "DMA 传输完成判断",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「DMA 传输完成判断」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "DMA 传输完成判断"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s941",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-05-09-s941",
    topic: "Cache 一致性问题",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「Cache 一致性问题」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关",
      "f_write 成功与否不用看返回值"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "Cache 一致性问题"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s942",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-05-10-s942",
    topic: "信号量与队列关系",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「信号量与队列关系」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "信号量与队列关系"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s943",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-05-09-s943",
    topic: "DMA 地址递增配置",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「DMA 地址递增配置」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全",
      "只打开 DMA 通道就不需要外设侧 DMA 请求"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "DMA 地址递增配置"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s944",
    subject: "stm32",
    chapter: "SD 卡 / SDIO / FatFs",
    knowledgeId: "stm32-16-05-10-s944",
    topic: "掉电保护与文件损坏",
    type: "scenario",
    difficulty: "进阶",
    question: "项目中遇到「掉电保护与文件损坏」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "文件系统不受掉电影响",
      "扇区大小和缓冲区对齐永远无关",
      "f_write 成功与否不用看返回值"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "掉电保护与文件损坏"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s945",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-06-01-s945",
    topic: "EventGroup 概念",
    type: "scenario",
    difficulty: "面试",
    question: "项目中遇到「EventGroup 概念」相关现象时，哪种判断最符合 STM32 SPL 排查思路？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。",
    tags: [
      "STM32",
      "SPL",
      "EventGroup 概念"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s946",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-05-10-s946",
    topic: "DMA 数据宽度配置错误",
    type: "bug_fix",
    difficulty: "进阶",
    question: "围绕「DMA 数据宽度配置错误」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "只打开 DMA 通道就不需要外设侧 DMA 请求",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "DMA 数据宽度配置错误"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s947",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-06-03-s947",
    topic: "xEventGroupSetBits",
    type: "bug_fix",
    difficulty: "面试",
    question: "围绕「xEventGroupSetBits」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "xEventGroupSetBits"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s948",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-06-01-s948",
    topic: "任务和中断区别",
    type: "bug_fix",
    difficulty: "进阶",
    question: "围绕「任务和中断区别」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "任务和中断区别"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s949",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-06-04-s949",
    topic: "xEventGroupWaitBits",
    type: "bug_fix",
    difficulty: "进阶",
    question: "围绕「xEventGroupWaitBits」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "xEventGroupWaitBits"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s950",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-06-02-s950",
    topic: "任务优先级设置",
    type: "bug_fix",
    difficulty: "面试",
    question: "围绕「任务优先级设置」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "任务优先级设置"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s951",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-06-05-s951",
    topic: "等待任意位",
    type: "bug_fix",
    difficulty: "进阶",
    question: "围绕「等待任意位」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "等待任意位"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s952",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-06-04-s952",
    topic: "队列和信号量区别",
    type: "bug_fix",
    difficulty: "进阶",
    question: "围绕「队列和信号量区别」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "队列和信号量区别"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s953",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-06-06-s953",
    topic: "等待全部位",
    type: "bug_fix",
    difficulty: "面试",
    question: "围绕「等待全部位」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "等待全部位"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s954",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-06-05-s954",
    topic: "Mutex 和二值信号量区别",
    type: "bug_fix",
    difficulty: "进阶",
    question: "围绕「Mutex 和二值信号量区别」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "Mutex 和二值信号量区别"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s955",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-06-07-s955",
    topic: "自动清除位",
    type: "bug_fix",
    difficulty: "进阶",
    question: "围绕「自动清除位」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "自动清除位"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s956",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-06-06-s956",
    topic: "优先级反转",
    type: "bug_fix",
    difficulty: "面试",
    question: "围绕「优先级反转」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "接口不需要说明调用上下文和时序限制",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "优先级反转"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s957",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-06-08-s957",
    topic: "ISR 设置事件位",
    type: "bug_fix",
    difficulty: "进阶",
    question: "围绕「ISR 设置事件位」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "ISR 设置事件位"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s958",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-06-07-s958",
    topic: "FromISR API",
    type: "bug_fix",
    difficulty: "进阶",
    question: "围绕「FromISR API」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "FromISR API"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s959",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-06-09-s959",
    topic: "事件组适用场景",
    type: "bug_fix",
    difficulty: "面试",
    question: "围绕「事件组适用场景」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "事件组适用场景"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s960",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-06-08-s960",
    topic: "vTaskDelay 与普通阻塞延时区别",
    type: "bug_fix",
    difficulty: "进阶",
    question: "围绕「vTaskDelay 与普通阻塞延时区别」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "SysTick 是内核定时器，延时精度依赖内核时钟、重装载值和中断处理时间",
      "阻塞延时适合放在所有中断服务函数中",
      "SysTick 与系统时钟无关",
      "SysTick 只能给 GPIO 使用"
    ],
    answer: 0,
    explanation: "SysTick 常用于系统节拍或简单延时。错误选项忽略了时钟来源、使用范围和 ISR 中阻塞的风险。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "vTaskDelay 与普通阻塞延时区别"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s961",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-06-10-s961",
    topic: "事件组误用",
    type: "bug_fix",
    difficulty: "进阶",
    question: "围绕「事件组误用」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "事件组误用"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s962",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-06-09-s962",
    topic: "临界区与互斥锁区别",
    type: "bug_fix",
    difficulty: "面试",
    question: "围绕「临界区与互斥锁区别」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "临界区与互斥锁区别"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s963",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-07-01-s963",
    topic: "软件定时器概念",
    type: "bug_fix",
    difficulty: "进阶",
    question: "围绕「软件定时器概念」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "APB 分频不会影响定时器时钟",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "软件定时器概念"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s964",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-06-10-s964",
    topic: "FreeRTOS 中断优先级配置",
    type: "bug_fix",
    difficulty: "进阶",
    question: "围绕「FreeRTOS 中断优先级配置」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系",
      "中断服务函数里适合放长延时和阻塞打印",
      "优先级数值越大一定越先执行",
      "只配置外设中断源就一定能进入服务函数"
    ],
    answer: 0,
    explanation: "中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "FreeRTOS 中断优先级配置"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s965",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-07-02-s965",
    topic: "单次定时器",
    type: "bug_fix",
    difficulty: "面试",
    question: "围绕「单次定时器」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "APB 分频不会影响定时器时钟",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "单次定时器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s966",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-07-01-s966",
    topic: "SDIO 与 SPI 访问 SD 卡区别",
    type: "bug_fix",
    difficulty: "进阶",
    question: "围绕「SDIO 与 SPI 访问 SD 卡区别」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制",
      "CPOL/CPHA 不一致也不会影响采样",
      "SPI 从机不需要时钟也能主动发送数据",
      "多个从机片选可以同时拉低"
    ],
    answer: 0,
    explanation: "SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "SDIO 与 SPI 访问 SD 卡区别"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s967",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-07-03-s967",
    topic: "周期定时器",
    type: "bug_fix",
    difficulty: "进阶",
    question: "围绕「周期定时器」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析",
      "APB 分频不会影响定时器时钟",
      "PSC 和 ARR 的寄存器值不需要加 1 参与计算",
      "PWM 占空比只由 GPIO 输出速度决定"
    ],
    answer: 0,
    explanation: "TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "周期定时器"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s968",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-07-03-s968",
    topic: "FatFs 挂载失败原因",
    type: "bug_fix",
    difficulty: "面试",
    question: "围绕「FatFs 挂载失败原因」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "扇区大小和缓冲区对齐永远无关",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "FatFs 挂载失败原因"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s969",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-07-04-s969",
    topic: "Timer Service Task",
    type: "bug_fix",
    difficulty: "进阶",
    question: "围绕「Timer Service Task」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "Timer Service Task"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s970",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-07-04-s970",
    topic: "写文件后为什么要关闭文件",
    type: "bug_fix",
    difficulty: "进阶",
    question: "围绕「写文件后为什么要关闭文件」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑",
      "接口不需要说明调用上下文和时序限制",
      "只要单次演示通过就不用处理异常路径",
      "所有驱动都写进 main.c 更容易维护"
    ],
    answer: 0,
    explanation: "综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "写文件后为什么要关闭文件"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s971",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-07-05-s971",
    topic: "xTimerCreate",
    type: "bug_fix",
    difficulty: "面试",
    question: "围绕「xTimerCreate」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "xTimerCreate"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s972",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-07-05-s972",
    topic: "SD 卡 DMA 缓冲区对齐",
    type: "bug_fix",
    difficulty: "进阶",
    question: "围绕「SD 卡 DMA 缓冲区对齐」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期",
      "只打开 DMA 通道就不需要外设侧 DMA 请求",
      "DMA 会自动知道 C 字符串实际长度",
      "局部数组作为 DMA 缓冲区总是安全"
    ],
    answer: 0,
    explanation: "DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "SD 卡 DMA 缓冲区对齐"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s973",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-07-06-s973",
    topic: "xTimerStart",
    type: "bug_fix",
    difficulty: "进阶",
    question: "围绕「xTimerStart」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API",
      "任务栈大小不会导致 HardFault",
      "中断里可以随便调用阻塞 API",
      "互斥锁和二值信号量在所有场景完全等价"
    ],
    answer: 0,
    explanation: "FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "xTimerStart"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s974",
    subject: "stm32",
    chapter: "STM32 面试高频专题",
    knowledgeId: "stm32-28-07-06-s974",
    topic: "SD 卡读写超时处理",
    type: "bug_fix",
    difficulty: "面试",
    question: "围绕「SD 卡读写超时处理」排错时，下面哪项最像真实项目里的主要问题？",
    code: "",
    options: [
      "FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数",
      "扇区大小和缓冲区对齐永远无关",
      "f_write 成功与否不用看返回值",
      "文件系统不受掉电影响"
    ],
    answer: 0,
    explanation: "FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。",
    tags: [
      "STM32",
      "SPL",
      "SD 卡读写超时处理"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s975",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-25-07-07-s975",
    topic: "DMA 缓冲区长度",
    type: "calculation",
    difficulty: "进阶",
    question: "ADC 扫描 4 个通道，保存 16 轮采样，DMA 缓冲区至少需要多少个 uint16_t 元素？",
    code: "",
    options: [
      "64 个",
      "16 个",
      "4 个",
      "32 个"
    ],
    answer: 0,
    explanation: "4 通道乘以 16 轮等于 64 个结果。多通道 DMA 要明确结果排列顺序。",
    tags: [
      "STM32",
      "SPL",
      "DMA 缓冲区长度"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s976",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-28-07-07-s976",
    topic: "RTOS tick 时间",
    type: "calculation",
    difficulty: "进阶",
    question: "FreeRTOS tick rate 为 1000Hz，vTaskDelay(10) 约阻塞多久？",
    code: "",
    options: [
      "约 10ms",
      "约 10s",
      "约 1ms",
      "约 100ms"
    ],
    answer: 0,
    explanation: "1000Hz 表示 1 tick 约 1ms，10 tick 约 10ms。实际唤醒还受调度和优先级影响。",
    tags: [
      "STM32",
      "SPL",
      "RTOS tick 时间"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s977",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-25-07-08-s977",
    topic: "APB 分频对定时器时钟的影响",
    type: "calculation",
    difficulty: "面试",
    question: "HCLK=72MHz，APB1 分频为 2，TIM2 挂在 APB1。TIM2 时钟通常是多少？",
    code: "",
    options: [
      "72MHz",
      "36MHz",
      "18MHz",
      "144MHz"
    ],
    answer: 0,
    explanation: "APB 分频不为 1 时，很多 STM32 定时器时钟为 PCLK 的 2 倍。PCLK1=36MHz，因此 TIM2 通常为 72MHz，仍要以具体参考手册为准。",
    tags: [
      "STM32",
      "SPL",
      "APB 分频对定时器时钟的影响"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s978",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-28-07-08-s978",
    topic: "TIM 更新频率计算",
    type: "calculation",
    difficulty: "进阶",
    question: "TIMCLK=84MHz，PSC=83，ARR=999，更新频率是多少？",
    code: "",
    options: [
      "1kHz",
      "10kHz",
      "84kHz",
      "100Hz"
    ],
    answer: 0,
    explanation: "更新频率 = 84MHz / ((83+1)*(999+1)) = 1000Hz。PSC 和 ARR 都要加 1 是常见面试坑。",
    tags: [
      "STM32",
      "SPL",
      "TIM 更新频率计算"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s979",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-25-07-09-s979",
    topic: "PWM 占空比计算",
    type: "calculation",
    difficulty: "进阶",
    question: "ARR=999，CCR=250，PWM 高电平有效时占空比约是多少？",
    code: "",
    options: [
      "25%",
      "50%",
      "2.5%",
      "100%"
    ],
    answer: 0,
    explanation: "一个周期约 1000 个计数，CCR=250 约占四分之一。实际高低电平含义还受 PWM 模式和极性影响。",
    tags: [
      "STM32",
      "SPL",
      "PWM 占空比计算"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s980",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-28-07-09-s980",
    topic: "USART 帧时间估算",
    type: "calculation",
    difficulty: "面试",
    question: "115200bps，8N1 格式发送 1 字节通常占多少位时间？",
    code: "",
    options: [
      "约 10 位时间",
      "约 8 位时间",
      "约 1 位时间",
      "约 16 位时间"
    ],
    answer: 0,
    explanation: "8N1 包含 1 起始位、8 数据位、1 停止位，共约 10 位时间。估算吞吐时不能只看 8 个数据位。",
    tags: [
      "STM32",
      "SPL",
      "USART 帧时间估算"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s981",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-25-07-10-s981",
    topic: "7 位 I2C 地址数量",
    type: "calculation",
    difficulty: "进阶",
    question: "7 位 I2C 地址理论编码数量是多少？",
    code: "",
    options: [
      "128 个编码，但部分保留且受总线条件限制",
      "7 个编码",
      "256 个编码且都可用",
      "无限多个编码"
    ],
    answer: 0,
    explanation: "7 位有 2^7=128 个编码，但有保留地址，实际设备数量还受地址冲突、电容、上拉和速率限制。",
    tags: [
      "STM32",
      "SPL",
      "7 位 I2C 地址数量"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s982",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-28-07-10-s982",
    topic: "SPI 分频计算",
    type: "calculation",
    difficulty: "进阶",
    question: "SPI 输入时钟 72MHz，分频系数为 16，SCK 约是多少？",
    code: "",
    options: [
      "4.5MHz",
      "16MHz",
      "72MHz",
      "1.125MHz"
    ],
    answer: 0,
    explanation: "72MHz / 16 = 4.5MHz。还要确认从设备允许的最大 SPI 时钟和模式。",
    tags: [
      "STM32",
      "SPL",
      "SPI 分频计算"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s983",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-25-08-01-s983",
    topic: "ADC 电压换算",
    type: "calculation",
    difficulty: "面试",
    question: "12 位 ADC，Vref=3.3V，原始值 4095 对应理想电压是多少？",
    code: "",
    options: [
      "约 3.3V",
      "约 1.65V",
      "约 0V",
      "约 4.095V"
    ],
    answer: 0,
    explanation: "12 位满量程通常是 0 到 4095，4095 接近参考电压。实际还受参考源误差和模拟前端影响。",
    tags: [
      "STM32",
      "SPL",
      "ADC 电压换算"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s984",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-25-08-02-s984",
    topic: "ADC 分辨率",
    type: "calculation",
    difficulty: "进阶",
    question: "12 位 ADC 的数字输出一共有多少个量化等级？",
    code: "",
    options: [
      "4096",
      "1024",
      "255",
      "1200"
    ],
    answer: 0,
    explanation: "12 位表示 2^12=4096 个等级，编码通常是 0 到 4095。",
    tags: [
      "STM32",
      "SPL",
      "ADC 分辨率"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s985",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-25-08-03-s985",
    topic: "CAN ID 仲裁优先级",
    type: "calculation",
    difficulty: "进阶",
    question: "标准 CAN 仲裁中，ID 0x100 和 0x080 同时发送，通常谁优先？",
    code: "",
    options: [
      "0x080",
      "0x100",
      "二者随机",
      "ID 大的优先"
    ],
    answer: 0,
    explanation: "CAN 显性位覆盖隐性位，ID 数值越小通常优先级越高。因此 0x080 优先。",
    tags: [
      "STM32",
      "SPL",
      "CAN ID 仲裁优先级"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s986",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-25-08-04-s986",
    topic: "Flash 页数量估算",
    type: "calculation",
    difficulty: "面试",
    question: "每页 1KB，要保存 6KB 参数区，至少需要多少页？",
    code: "",
    options: [
      "6 页",
      "1 页",
      "3 页",
      "8 页固定"
    ],
    answer: 0,
    explanation: "6KB / 1KB = 6 页。真实工程还要考虑备份页、版本和掉电保护。",
    tags: [
      "STM32",
      "SPL",
      "Flash 页数量估算"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s987",
    subject: "stm32",
    chapter: "DMA",
    knowledgeId: "stm32-25-08-05-s987",
    topic: "DMA 缓冲区长度",
    type: "calculation",
    difficulty: "进阶",
    question: "ADC 扫描 4 个通道，保存 16 轮采样，DMA 缓冲区至少需要多少个 uint16_t 元素？",
    code: "",
    options: [
      "64 个",
      "16 个",
      "4 个",
      "32 个"
    ],
    answer: 0,
    explanation: "4 通道乘以 16 轮等于 64 个结果。多通道 DMA 要明确结果排列顺序。",
    tags: [
      "STM32",
      "SPL",
      "DMA 缓冲区长度"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s988",
    subject: "stm32",
    chapter: "FreeRTOS / RTOS",
    knowledgeId: "stm32-25-08-06-s988",
    topic: "RTOS tick 时间",
    type: "calculation",
    difficulty: "进阶",
    question: "FreeRTOS tick rate 为 1000Hz，vTaskDelay(10) 约阻塞多久？",
    code: "",
    options: [
      "约 10ms",
      "约 10s",
      "约 1ms",
      "约 100ms"
    ],
    answer: 0,
    explanation: "1000Hz 表示 1 tick 约 1ms，10 tick 约 10ms。实际唤醒还受调度和优先级影响。",
    tags: [
      "STM32",
      "SPL",
      "RTOS tick 时间"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s989",
    subject: "stm32",
    chapter: "RCC 时钟树",
    knowledgeId: "stm32-25-08-07-s989",
    topic: "APB 分频对定时器时钟的影响",
    type: "calculation",
    difficulty: "面试",
    question: "HCLK=72MHz，APB1 分频为 2，TIM2 挂在 APB1。TIM2 时钟通常是多少？",
    code: "",
    options: [
      "72MHz",
      "36MHz",
      "18MHz",
      "144MHz"
    ],
    answer: 0,
    explanation: "APB 分频不为 1 时，很多 STM32 定时器时钟为 PCLK 的 2 倍。PCLK1=36MHz，因此 TIM2 通常为 72MHz，仍要以具体参考手册为准。",
    tags: [
      "STM32",
      "SPL",
      "APB 分频对定时器时钟的影响"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s990",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-25-08-08-s990",
    topic: "TIM 更新频率计算",
    type: "calculation",
    difficulty: "进阶",
    question: "TIMCLK=84MHz，PSC=83，ARR=999，更新频率是多少？",
    code: "",
    options: [
      "1kHz",
      "10kHz",
      "84kHz",
      "100Hz"
    ],
    answer: 0,
    explanation: "更新频率 = 84MHz / ((83+1)*(999+1)) = 1000Hz。PSC 和 ARR 都要加 1 是常见面试坑。",
    tags: [
      "STM32",
      "SPL",
      "TIM 更新频率计算"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s991",
    subject: "stm32",
    chapter: "定时器 TIM 基础与进阶",
    knowledgeId: "stm32-25-08-09-s991",
    topic: "PWM 占空比计算",
    type: "calculation",
    difficulty: "进阶",
    question: "ARR=999，CCR=250，PWM 高电平有效时占空比约是多少？",
    code: "",
    options: [
      "25%",
      "50%",
      "2.5%",
      "100%"
    ],
    answer: 0,
    explanation: "一个周期约 1000 个计数，CCR=250 约占四分之一。实际高低电平含义还受 PWM 模式和极性影响。",
    tags: [
      "STM32",
      "SPL",
      "PWM 占空比计算"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s992",
    subject: "stm32",
    chapter: "USART / UART 串口",
    knowledgeId: "stm32-25-08-10-s992",
    topic: "USART 帧时间估算",
    type: "calculation",
    difficulty: "面试",
    question: "115200bps，8N1 格式发送 1 字节通常占多少位时间？",
    code: "",
    options: [
      "约 10 位时间",
      "约 8 位时间",
      "约 1 位时间",
      "约 16 位时间"
    ],
    answer: 0,
    explanation: "8N1 包含 1 起始位、8 数据位、1 停止位，共约 10 位时间。估算吞吐时不能只看 8 个数据位。",
    tags: [
      "STM32",
      "SPL",
      "USART 帧时间估算"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s993",
    subject: "stm32",
    chapter: "I2C",
    knowledgeId: "stm32-25-09-01-s993",
    topic: "7 位 I2C 地址数量",
    type: "calculation",
    difficulty: "进阶",
    question: "7 位 I2C 地址理论编码数量是多少？",
    code: "",
    options: [
      "128 个编码，但部分保留且受总线条件限制",
      "7 个编码",
      "256 个编码且都可用",
      "无限多个编码"
    ],
    answer: 0,
    explanation: "7 位有 2^7=128 个编码，但有保留地址，实际设备数量还受地址冲突、电容、上拉和速率限制。",
    tags: [
      "STM32",
      "SPL",
      "7 位 I2C 地址数量"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s994",
    subject: "stm32",
    chapter: "SPI",
    knowledgeId: "stm32-25-09-02-s994",
    topic: "SPI 分频计算",
    type: "calculation",
    difficulty: "进阶",
    question: "SPI 输入时钟 72MHz，分频系数为 16，SCK 约是多少？",
    code: "",
    options: [
      "4.5MHz",
      "16MHz",
      "72MHz",
      "1.125MHz"
    ],
    answer: 0,
    explanation: "72MHz / 16 = 4.5MHz。还要确认从设备允许的最大 SPI 时钟和模式。",
    tags: [
      "STM32",
      "SPL",
      "SPI 分频计算"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s995",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-25-09-03-s995",
    topic: "ADC 电压换算",
    type: "calculation",
    difficulty: "面试",
    question: "12 位 ADC，Vref=3.3V，原始值 4095 对应理想电压是多少？",
    code: "",
    options: [
      "约 3.3V",
      "约 1.65V",
      "约 0V",
      "约 4.095V"
    ],
    answer: 0,
    explanation: "12 位满量程通常是 0 到 4095，4095 接近参考电压。实际还受参考源误差和模拟前端影响。",
    tags: [
      "STM32",
      "SPL",
      "ADC 电压换算"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s996",
    subject: "stm32",
    chapter: "ADC",
    knowledgeId: "stm32-25-09-04-s996",
    topic: "ADC 分辨率",
    type: "calculation",
    difficulty: "进阶",
    question: "12 位 ADC 的数字输出一共有多少个量化等级？",
    code: "",
    options: [
      "4096",
      "1024",
      "255",
      "1200"
    ],
    answer: 0,
    explanation: "12 位表示 2^12=4096 个等级，编码通常是 0 到 4095。",
    tags: [
      "STM32",
      "SPL",
      "ADC 分辨率"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s997",
    subject: "stm32",
    chapter: "CAN / FDCAN",
    knowledgeId: "stm32-25-09-05-s997",
    topic: "CAN ID 仲裁优先级",
    type: "calculation",
    difficulty: "进阶",
    question: "标准 CAN 仲裁中，ID 0x100 和 0x080 同时发送，通常谁优先？",
    code: "",
    options: [
      "0x080",
      "0x100",
      "二者随机",
      "ID 大的优先"
    ],
    answer: 0,
    explanation: "CAN 显性位覆盖隐性位，ID 数值越小通常优先级越高。因此 0x080 优先。",
    tags: [
      "STM32",
      "SPL",
      "CAN ID 仲裁优先级"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s998",
    subject: "stm32",
    chapter: "Flash 与存储",
    knowledgeId: "stm32-25-09-06-s998",
    topic: "Flash 页数量估算",
    type: "calculation",
    difficulty: "面试",
    question: "每页 1KB，要保存 6KB 参数区，至少需要多少页？",
    code: "",
    options: [
      "6 页",
      "1 页",
      "3 页",
      "8 页固定"
    ],
    answer: 0,
    explanation: "6KB / 1KB = 6 页。真实工程还要考虑备份页、版本和掉电保护。",
    tags: [
      "STM32",
      "SPL",
      "Flash 页数量估算"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s999",
    subject: "stm32",
    chapter: "GPIO 基础与进阶",
    knowledgeId: "stm32-25-09-07-s999",
    topic: "BSRR 原子置位",
    type: "code_read",
    difficulty: "易错",
    question: "读下面 SPL 风格 GPIO 操作，哪项判断正确？",
    code: "GPIO_SetBits(GPIOA, GPIO_Pin_5);\nGPIO_ResetBits(GPIOA, GPIO_Pin_6);",
    options: [
      "它通过标准库接口对指定引脚置位或复位，底层通常对应 GPIO 位操作寄存器",
      "这两行会重新配置 GPIO 模式",
      "这两行会自动打开 GPIOA 时钟",
      "这两行会修改 NVIC 优先级"
    ],
    answer: 0,
    explanation: "GPIO_SetBits/ResetBits 是 SPL 常见 GPIO 输出控制接口，不负责开 RCC 时钟，也不配置 NVIC。错误选项把输出控制和初始化流程混在一起。",
    tags: [
      "STM32",
      "SPL",
      "BSRR 原子置位"
    ],
    reviewStatus: "待复核"
  }),
  q({
    id: "s1000",
    subject: "stm32",
    chapter: "Bootloader 与固件升级",
    knowledgeId: "stm32-25-09-08-s1000",
    topic: "Bootloader 跳转前检查",
    type: "missing_step",
    difficulty: "易错",
    question: "Bootloader 准备跳转应用前，下面流程最关键还缺哪一步？",
    code: "uint32_t reset = *(__IO uint32_t *)(APP_ADDR + 4);\n((void (*)(void))reset)();",
    options: [
      "校验应用栈顶地址，设置 MSP，并处理向量表和中断状态",
      "把所有 GPIO 配成浮空输入即可",
      "先执行一次 ADC 校准即可",
      "把 reset 地址强制加 2 就一定正确"
    ],
    answer: 0,
    explanation: "Bootloader 跳转不是普通函数调用。需要保证 MSP、向量表、中断和外设状态都符合应用启动上下文，错误选项只改表面动作。",
    tags: [
      "STM32",
      "SPL",
      "Bootloader 跳转前检查"
    ],
    reviewStatus: "待复核"
  })
]

const q = require('./create-question')

module.exports = [
  q({
    id: 's032',
    chapter: 'EXTI 外部中断',
    knowledgeId: 'stm32-06-02-02',
    topic: 'GPIO_EXTILineConfig',
    type: 'missing_step',
    difficulty: '基础',
    question: '配置 PA0 作为 EXTI0 输入时，下面代码少了哪一步？',
    code: 'EXTI_InitTypeDef exti;\nexti.EXTI_Line = EXTI_Line0;\nexti.EXTI_Mode = EXTI_Mode_Interrupt;\nexti.EXTI_Trigger = EXTI_Trigger_Falling;\nexti.EXTI_LineCmd = ENABLE;\nEXTI_Init(&exti);',
    options: [
      '调用 GPIO_EXTILineConfig 把 GPIOA 的 Pin0 映射到 EXTI0',
      '把 EXTI_Mode_Interrupt 改成 GPIO_Mode_Out_PP',
      '在中断里调用 SystemInit',
      '删除 EXTI_Trigger'
    ],
    answer: 0,
    explanation: 'EXTI 线和具体 GPIO 端口需要通过 AFIO/SYSCFG 之类映射。F1 SPL 中常用 GPIO_EXTILineConfig(GPIO_PortSourceGPIOA, GPIO_PinSource0)。',
    tags: ['EXTI', 'AFIO', 'GPIO映射']
  }),
  q({
    id: 's033',
    chapter: 'EXTI 外部中断',
    knowledgeId: 'stm32-06-03-01',
    topic: '上升沿触发',
    type: 'concept',
    difficulty: '基础',
    question: 'EXTI_Trigger_Rising 表示什么触发条件？',
    options: [
      '输入信号从低电平变为高电平时触发',
      '输入信号从高电平变为低电平时触发',
      '每个 CPU 周期都触发',
      '只有 ADC 转换完成才触发'
    ],
    answer: 0,
    explanation: 'Rising 是上升沿，Falling 是下降沿，Rising_Falling 是双边沿。按键触发要结合电路是上拉还是下拉判断边沿。',
    tags: ['EXTI', '触发边沿']
  }),
  q({
    id: 's034',
    chapter: 'EXTI 外部中断',
    knowledgeId: 'stm32-06-04-04',
    topic: '按键中断消抖',
    type: 'scenario_code',
    difficulty: '进阶',
    question: '按键 EXTI 触发后出现多次事件，下面哪种工程处理更合理？',
    code: 'void EXTI0_IRQHandler(void) {\n    if (EXTI_GetITStatus(EXTI_Line0) != RESET) {\n        key_count++;\n        EXTI_ClearITPendingBit(EXTI_Line0);\n    }\n}',
    options: [
      '在中断中只记录时间或置标志，把消抖判断放到定时器或主循环状态机',
      '在中断里 while 延时 5 秒等待稳定',
      '删除清中断标志位',
      '把 key_count 改成 double 就能消抖'
    ],
    answer: 0,
    explanation: '按键机械抖动会造成多次边沿。中断里应快速退出，消抖可以交给定时器节拍或状态机，避免 ISR 长时间阻塞。',
    tags: ['EXTI', '按键', '消抖']
  }),
  q({
    id: 's035',
    chapter: 'EXTI 外部中断',
    knowledgeId: 'stm32-06-02-04',
    topic: 'EXTI_InitTypeDef',
    type: 'fill_blank',
    difficulty: '基础',
    question: '要把 EXTI0 配置成中断模式，空白处应填什么？',
    code: 'exti.EXTI_Line = EXTI_Line0;\nexti.EXTI_Mode = /* ____ */;\nexti.EXTI_Trigger = EXTI_Trigger_Falling;',
    options: [
      'EXTI_Mode_Interrupt',
      'EXTI_Mode_Event',
      'GPIO_Mode_IN_FLOATING',
      'NVIC_PriorityGroup_2'
    ],
    answer: 0,
    explanation: 'EXTI_Mode_Interrupt 表示产生中断请求，需要配合 NVIC。EXTI_Mode_Event 只产生事件，不会进入 IRQHandler。',
    tags: ['EXTI', '中断模式']
  }),
  q({
    id: 's036',
    chapter: 'EXTI 外部中断',
    knowledgeId: 'stm32-06-05-02',
    topic: 'EXTI 与 NVIC 同时配置',
    type: 'bug_fix',
    difficulty: '易错',
    question: 'EXTI pending 位能置位，但程序不进入 EXTI0_IRQHandler，最可能漏了什么？',
    code: 'GPIO_EXTILineConfig(GPIO_PortSourceGPIOA, GPIO_PinSource0);\nEXTI_Init(&exti);\n/* no NVIC init */',
    options: [
      '没有在 NVIC 中使能对应 EXTI0_IRQn',
      'EXTI 必须使用 USART 时钟',
      'pending 位置位说明中断服务函数一定执行了',
      'GPIO_EXTILineConfig 会自动配置 NVIC'
    ],
    answer: 0,
    explanation: 'EXTI 负责产生外部中断请求，NVIC 负责内核侧接收和分发。两边都要配置，服务函数名也要和启动文件中的向量表一致。',
    tags: ['EXTI', 'NVIC']
  }),
  q({
    id: 's037',
    chapter: 'EXTI 外部中断',
    knowledgeId: 'stm32-06-05-05',
    topic: 'EXTI 线冲突',
    type: 'concept',
    difficulty: '进阶',
    question: '为什么 PA0 和 PB0 不能同时作为两个独立的 EXTI0 中断源？',
    options: [
      '它们都映射到 EXTI Line0，同一条 EXTI 线一次只能选择一个端口源',
      'PA0 和 PB0 物理上是同一个引脚',
      'EXTI 只能接 USART',
      'PB0 不能作为任何输入'
    ],
    answer: 0,
    explanation: 'EXTI 线按引脚编号划分，Px0 共用 EXTI0，Px1 共用 EXTI1。端口源通过映射选择，不能把同编号的多个端口当成独立 EXTI 线。',
    tags: ['EXTI', 'GPIO映射']
  })
]

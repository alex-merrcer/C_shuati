const q = require('./create-question')

module.exports = [
  q({
    id: 's025',
    chapter: 'NVIC 与中断系统',
    knowledgeId: 'stm32-05-01-01',
    topic: '中断是什么',
    type: 'concept',
    difficulty: '基础',
    question: 'STM32 中断机制最核心的作用是什么？',
    options: [
      '让外设或异常事件打断当前执行流，转入对应服务函数处理',
      '让所有代码都变成并行执行',
      '自动修复所有硬件错误',
      '替代主函数 main'
    ],
    answer: 0,
    explanation: '中断是事件驱动机制，CPU 保存现场后跳到向量表中的服务函数。它提高响应速度，但也引入共享变量、优先级和执行时间问题。',
    tags: ['NVIC', '中断']
  }),
  q({
    id: 's026',
    chapter: 'NVIC 与中断系统',
    knowledgeId: 'stm32-05-03-01',
    topic: 'NVIC_InitTypeDef',
    type: 'fill_blank',
    difficulty: '基础',
    question: '要使能 EXTI0_IRQn，空白处最适合填什么？',
    code: 'NVIC_InitTypeDef nvic;\nnvic.NVIC_IRQChannel = EXTI0_IRQn;\nnvic.NVIC_IRQChannelPreemptionPriority = 1;\nnvic.NVIC_IRQChannelSubPriority = 1;\nnvic.NVIC_IRQChannelCmd = /* ____ */;\nNVIC_Init(&nvic);',
    options: [
      'ENABLE',
      'DISABLE',
      'RESET',
      'Bit_RESET'
    ],
    answer: 0,
    explanation: 'NVIC_IRQChannelCmd 控制该通道是否使能。优先级字段只决定抢占和响应顺序，不能替代 ENABLE。',
    tags: ['NVIC', 'EXTI', '初始化']
  }),
  q({
    id: 's027',
    chapter: 'NVIC 与中断系统',
    knowledgeId: 'stm32-05-02-01',
    topic: '抢占优先级',
    type: 'scenario_code',
    difficulty: '进阶',
    question: '两个中断同时就绪时，下面哪项关于抢占优先级的说法正确？',
    code: 'A.NVIC_IRQChannelPreemptionPriority = 0;\nB.NVIC_IRQChannelPreemptionPriority = 2;',
    options: [
      '在同一优先级分组下，数值越小通常优先级越高，A 更可能先响应或抢占 B',
      '数值越大优先级越高，所以 B 一定先执行',
      '抢占优先级只影响 GPIO 输出速度',
      '抢占优先级必须和子优先级完全相同'
    ],
    answer: 0,
    explanation: 'Cortex-M NVIC 中优先级数值通常越小表示逻辑优先级越高。具体可用位数受优先级分组和芯片实现影响。',
    tags: ['NVIC', '抢占优先级']
  }),
  q({
    id: 's028',
    chapter: 'NVIC 与中断系统',
    knowledgeId: 'stm32-05-02-05',
    topic: '优先级分组',
    type: 'bug_fix',
    difficulty: '易错',
    question: '多个模块各自调用 NVIC_PriorityGroupConfig，主要风险是什么？',
    code: 'void BSP_EXTI_Init(void) {\n    NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);\n}\nvoid BSP_USART_Init(void) {\n    NVIC_PriorityGroupConfig(NVIC_PriorityGroup_4);\n}',
    options: [
      '后调用的分组会改变全局解释方式，导致已有优先级含义变化',
      '优先级分组只影响当前函数的局部变量',
      '每个中断必须使用不同优先级分组',
      '不配置分组时中断永远不能触发'
    ],
    answer: 0,
    explanation: '优先级分组是全局配置，建议系统初始化时统一设置一次。多个驱动随意改分组，会让抢占优先级和子优先级的位分配发生变化。',
    tags: ['NVIC', '优先级分组']
  }),
  q({
    id: 's029',
    chapter: 'NVIC 与中断系统',
    knowledgeId: 'stm32-05-05-03',
    topic: '中断标志位清除',
    type: 'missing_step',
    difficulty: '基础',
    question: '下面 EXTI 中断服务函数会反复进入，通常缺少哪一步？',
    code: 'void EXTI0_IRQHandler(void) {\n    if (EXTI_GetITStatus(EXTI_Line0) != RESET) {\n        key_event = 1;\n    }\n}',
    options: [
      '处理后清除 EXTI_Line0 的中断挂起位',
      '在中断里重新配置 HSE',
      '把 key_event 改成 float',
      '删除 if 判断'
    ],
    answer: 0,
    explanation: '很多外设中断都需要软件清除标志位。EXTI 不清 pending bit，退出后仍然认为中断挂起，可能立即再次进入。',
    tags: ['EXTI', '中断标志', 'NVIC']
  }),
  q({
    id: 's030',
    chapter: 'NVIC 与中断系统',
    knowledgeId: 'stm32-05-05-05',
    topic: '中断中不要长时间阻塞',
    type: 'bug_fix',
    difficulty: '面试',
    question: '下面 USART 中断处理的主要问题是什么？',
    code: 'void USART1_IRQHandler(void) {\n    if (USART_GetITStatus(USART1, USART_IT_RXNE) != RESET) {\n        printf("rx\\n");\n        Delay_ms(50);\n    }\n}',
    options: [
      'ISR 中调用 printf 和长延时会拉长中断占用时间，影响实时性',
      'USART 中断里不能读取任何标志位',
      'Delay_ms 在 main 中也一定非法',
      'printf 会自动清除所有 USART 错误'
    ],
    answer: 0,
    explanation: '中断服务函数应短小确定。长时间阻塞会影响其他中断响应和系统实时性，通常只读数据、置标志或放入缓冲区，复杂处理放到主循环或任务中。',
    tags: ['ISR', '实时性', 'USART']
  }),
  q({
    id: 's031',
    chapter: 'NVIC 与中断系统',
    knowledgeId: 'stm32-05-05-02',
    topic: '共享变量 volatile',
    type: 'fill_blank',
    difficulty: '进阶',
    question: '主循环等待中断置位的变量，空白处最适合填什么？',
    code: '/* ____ */ uint8_t rx_done = 0;\nwhile (!rx_done) {}\nvoid USART1_IRQHandler(void) {\n    rx_done = 1;\n}',
    options: [
      'volatile',
      'const',
      'static inline',
      'register const'
    ],
    answer: 0,
    explanation: '被中断和主循环同时访问的简单标志位通常要用 volatile 防止编译器把循环条件缓存起来。但 volatile 不等于互斥，复杂共享数据还要考虑原子性和临界区。',
    tags: ['volatile', '中断共享变量']
  })
]

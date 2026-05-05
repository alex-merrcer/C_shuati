const q = require('./create-question')

module.exports = [
  q({
    id: 's047',
    chapter: 'USART / UART 串口',
    knowledgeId: 'stm32-09-02-01',
    topic: 'USART_InitTypeDef',
    type: 'fill_blank',
    difficulty: '基础',
    question: '使用 SPL 初始化 USART1 为 115200 8N1，空白处最适合填什么？',
    code: 'USART_InitStructure.USART_BaudRate = 115200;\nUSART_InitStructure.USART_WordLength = USART_WordLength_8b;\nUSART_InitStructure.USART_StopBits = USART_StopBits_1;\nUSART_InitStructure.USART_Parity = USART_Parity_No;\nUSART_InitStructure.USART_Mode = /* ____ */;',
    options: [
      'USART_Mode_Rx | USART_Mode_Tx',
      'GPIO_Mode_AF_PP',
      'TIM_CounterMode_Up',
      'DMA_Mode_Circular'
    ],
    answer: 0,
    explanation: 'USART_Mode 配置串口收发方向，常见全双工串口需要同时使能 Rx 和 Tx。GPIO 复用模式是引脚配置，不是 USART_Mode 字段。',
    tags: ['USART', '初始化', '8N1']
  }),
  q({
    id: 's048',
    chapter: 'USART / UART 串口',
    knowledgeId: 'stm32-09-03-03',
    topic: 'USART_GetFlagStatus',
    type: 'code_read',
    difficulty: '基础',
    question: '下面发送一个字节前等待 TXE 的含义是什么？',
    code: 'while (USART_GetFlagStatus(USART1, USART_FLAG_TXE) == RESET) {\n}\nUSART_SendData(USART1, ch);',
    options: [
      '等待发送数据寄存器为空，可以写入下一个数据',
      '等待接收缓冲区满',
      '等待所有中断关闭',
      '等待 GPIO 自动切换成模拟输入'
    ],
    answer: 0,
    explanation: 'TXE 表示发送数据寄存器空，可以写入新数据。若要确认最后一位也发完，通常还要关注 TC 标志。',
    tags: ['USART', 'TXE', '发送']
  }),
  q({
    id: 's049',
    chapter: 'USART / UART 串口',
    knowledgeId: 'stm32-09-04-02',
    topic: 'RXNE 接收中断',
    type: 'missing_step',
    difficulty: '基础',
    question: 'USART 接收中断始终不进，下面初始化代码可能少了哪一步？',
    code: 'USART_ITConfig(USART1, USART_IT_RXNE, ENABLE);\nUSART_Cmd(USART1, ENABLE);',
    options: [
      '还要在 NVIC 中使能 USART1_IRQn，并确保 GPIO 和 USART 时钟已打开',
      '必须关闭 USART_Cmd',
      'RXNE 中断不需要 USART_ITConfig',
      '把波特率设置为 0'
    ],
    answer: 0,
    explanation: 'USART RXNE 中断要同时满足外设时钟、GPIO 复用、USART 本体、USART_ITConfig 和 NVIC 通道使能。任一环节漏掉都可能不进中断。',
    tags: ['USART', 'RXNE', 'NVIC']
  }),
  q({
    id: 's050',
    chapter: 'USART / UART 串口',
    knowledgeId: 'stm32-09-04-05',
    topic: '串口接收溢出 ORE',
    type: 'bug_fix',
    difficulty: '易错',
    question: '串口偶发停止接收，调试发现 ORE 置位，主要说明什么？',
    code: 'if (USART_GetITStatus(USART1, USART_IT_RXNE) != RESET) {\n    /* long processing */\n}',
    options: [
      '接收数据未及时读走，新数据到来导致溢出，需要更快读取 DR 或用缓冲/DMA',
      'ORE 表示发送完成',
      'ORE 只和 GPIO 输出速度有关',
      'ORE 出现后无需处理，硬件会自动丢弃标志'
    ],
    answer: 0,
    explanation: 'ORE 是 overrun error，表示接收数据来不及取走。ISR 里处理太久或没有及时读 DR 都可能触发，工程上常用环形缓冲区或 DMA。',
    tags: ['USART', 'ORE', '接收溢出']
  }),
  q({
    id: 's051',
    chapter: 'USART / UART 串口',
    knowledgeId: 'stm32-09-05-03',
    topic: 'printf 重定向',
    type: 'scenario_code',
    difficulty: '进阶',
    question: '用 printf 重定向到串口时，下面写法最大的工程风险是什么？',
    code: 'int fputc(int ch, FILE *f) {\n    USART_SendData(USART1, (uint8_t)ch);\n    while (USART_GetFlagStatus(USART1, USART_FLAG_TXE) == RESET) {}\n    return ch;\n}',
    options: [
      '阻塞等待会拖慢调用者，在中断或实时路径中尤其危险',
      'fputc 不能返回 ch',
      'USART_SendData 只能发送字符串',
      'TXE 只能用于接收'
    ],
    answer: 0,
    explanation: 'printf 重定向常用于调试，但阻塞式发送会占用 CPU。放在 ISR 或高频实时路径里会明显影响实时性，正式工程常用缓冲和后台发送。',
    tags: ['USART', 'printf', '阻塞']
  }),
  q({
    id: 's052',
    chapter: 'USART / UART 串口',
    knowledgeId: 'stm32-09-06-02',
    topic: '波特率误差',
    type: 'concept',
    difficulty: '进阶',
    question: '串口两端波特率略有误差时，哪项判断更合理？',
    options: [
      '误差过大会造成采样点偏移，出现乱码或帧错误',
      '只要都是 8N1，波特率完全不重要',
      '波特率误差只影响 LED 亮度',
      '串口会自动协商任意波特率'
    ],
    answer: 0,
    explanation: 'UART 是异步通信，双方靠约定波特率采样。误差在一定范围内可容忍，过大就会采样错位，尤其长帧或高速时更明显。',
    tags: ['USART', '波特率', '帧错误']
  }),
  q({
    id: 's053',
    chapter: 'USART / UART 串口',
    knowledgeId: 'stm32-09-07-02',
    topic: '串口环形缓冲区',
    type: 'bug_fix',
    difficulty: '面试',
    question: '下面环形缓冲区入队代码的主要问题是什么？',
    code: 'buf[head++] = data;\nif (head >= SIZE) head = 0;\n/* no full check */',
    options: [
      '没有判断缓冲区满，可能覆盖尚未读取的数据',
      'head 回绕一定非法',
      '数组不能保存串口数据',
      'SIZE 必须等于 1'
    ],
    answer: 0,
    explanation: '串口中断接收常用环形缓冲区，但必须区分空和满。没有满判断时，高速接收会覆盖旧数据，导致协议解析偶发错误。',
    tags: ['USART', '环形缓冲区', '边界']
  })
]

const q = require('./create-question')

module.exports = [
  q({
    id: 's054',
    chapter: 'DMA',
    knowledgeId: 'stm32-10-01-01',
    topic: 'DMA 是什么',
    type: 'concept',
    difficulty: '基础',
    question: 'DMA 在 STM32 中的主要作用是什么？',
    options: [
      '在外设和内存之间搬运数据，减少 CPU 逐字节参与',
      '自动修复 C 语言数组越界',
      '替代所有中断控制器',
      '把 GPIO 电压升高'
    ],
    answer: 0,
    explanation: 'DMA 适合 USART、ADC、SPI 等数据流搬运。CPU 负责配置源、目标、长度和触发条件，搬运过程由 DMA 控制器执行。',
    tags: ['DMA', '数据搬运']
  }),
  q({
    id: 's055',
    chapter: 'DMA',
    knowledgeId: 'stm32-10-02-04',
    topic: 'DMA_DIR',
    type: 'fill_blank',
    difficulty: '基础',
    question: 'USART1_TX 使用 DMA 从内存发送到外设，空白处最适合填什么？',
    code: 'DMA_InitStructure.DMA_PeripheralBaseAddr = (uint32_t)&USART1->DR;\nDMA_InitStructure.DMA_MemoryBaseAddr = (uint32_t)tx_buf;\nDMA_InitStructure.DMA_DIR = /* ____ */;',
    options: [
      'DMA_DIR_PeripheralDST',
      'DMA_DIR_PeripheralSRC',
      'GPIO_Mode_AF_PP',
      'USART_Mode_Rx'
    ],
    answer: 0,
    explanation: '串口发送时数据从内存到 USART 数据寄存器，外设是目的端。接收时方向相反，外设数据寄存器作为源。',
    tags: ['DMA', 'USART_TX', '方向']
  }),
  q({
    id: 's056',
    chapter: 'DMA',
    knowledgeId: 'stm32-10-02-05',
    topic: 'DMA_BufferSize',
    type: 'bug_fix',
    difficulty: '易错',
    question: '下面 DMA 发送字符串为什么可能少发或多发？',
    code: 'char msg[16] = "OK";\nDMA_InitStructure.DMA_MemoryBaseAddr = (uint32_t)msg;\nDMA_InitStructure.DMA_BufferSize = sizeof(msg);',
    options: [
      'sizeof(msg) 是整个数组大小，不一定等于实际要发送的字符串长度',
      'DMA_BufferSize 只能写 0',
      '字符串不能用 DMA 发送',
      'DMA 会自动调用 strlen'
    ],
    answer: 0,
    explanation: 'sizeof(msg)=16，会把未使用的填充字节也发出去。发送文本时要明确协议长度，是 strlen、固定帧长还是包含结尾 0。',
    tags: ['DMA', 'sizeof', '字符串长度']
  }),
  q({
    id: 's057',
    chapter: 'DMA',
    knowledgeId: 'stm32-10-03-02',
    topic: 'DMA 循环模式',
    type: 'scenario_code',
    difficulty: '进阶',
    question: 'ADC 连续采样到固定缓冲区，为什么常用 DMA 循环模式？',
    code: 'DMA_InitStructure.DMA_Mode = DMA_Mode_Circular;\nADC_DMACmd(ADC1, ENABLE);',
    options: [
      '搬满缓冲区后自动回到开头，适合连续采样流',
      '循环模式会自动排序 ADC 数据',
      '循环模式只适合单次发送字符串',
      '循环模式会关闭 ADC 时钟'
    ],
    answer: 0,
    explanation: '循环模式让 DMA 在缓冲区末尾回绕，配合半传输/传输完成中断可以做双半区处理。要注意生产者和消费者不要读写冲突。',
    tags: ['DMA', 'ADC', '循环模式']
  }),
  q({
    id: 's058',
    chapter: 'DMA',
    knowledgeId: 'stm32-10-04-04',
    topic: 'DMA 中断标志清除',
    type: 'missing_step',
    difficulty: '基础',
    question: 'DMA 传输完成中断不断进入，通常少了哪一步？',
    code: 'void DMA1_Channel4_IRQHandler(void) {\n    if (DMA_GetITStatus(DMA1_IT_TC4) != RESET) {\n        tx_done = 1;\n    }\n}',
    options: [
      '清除 DMA1_IT_TC4 等对应中断标志',
      '把 tx_done 改成 uint32_t',
      '关闭所有 GPIO 时钟',
      '删除 DMA 中断服务函数'
    ],
    answer: 0,
    explanation: 'DMA 中断处理完要清除对应标志位。否则中断控制器看到请求仍在，会导致重复进入。',
    tags: ['DMA', '中断标志']
  }),
  q({
    id: 's059',
    chapter: 'DMA',
    knowledgeId: 'stm32-10-05-01',
    topic: 'USART DMA 发送',
    type: 'bug_fix',
    difficulty: '进阶',
    question: '启动 USART DMA 发送前，下面代码还可能漏掉什么关键开关？',
    code: 'DMA_Cmd(DMA1_Channel4, ENABLE);\nUSART_Cmd(USART1, ENABLE);',
    options: [
      '调用 USART_DMACmd 使能 USART 的 DMA 发送请求',
      '把 USART1 改成 ADC1',
      '把 DMA 通道配置成外设到内存',
      '删除 DMA_Cmd'
    ],
    answer: 0,
    explanation: 'DMA 通道启动只是 DMA 控制器准备好了，USART 侧还要允许产生 DMA 请求。SPL 中常用 USART_DMACmd(USART1, USART_DMAReq_Tx, ENABLE)。',
    tags: ['DMA', 'USART', 'DMA请求']
  }),
  q({
    id: 's060',
    chapter: 'DMA',
    knowledgeId: 'stm32-10-06-03',
    topic: 'DMA 缓冲区生命周期',
    type: 'bug_fix',
    difficulty: '面试',
    question: '下面函数用 DMA 发送局部数组，主要风险是什么？',
    code: 'void send_packet(void) {\n    uint8_t buf[8] = {1,2,3,4};\n    DMA_Start(buf, 8);\n}',
    options: [
      '函数返回后 buf 生命周期结束，DMA 可能还在读这块栈内存',
      '局部数组不能初始化',
      'DMA 只能访问 Flash',
      'uint8_t 不能用于串口'
    ],
    answer: 0,
    explanation: 'DMA 异步搬运时，源缓冲区必须在传输完成前保持有效。局部栈数组在函数返回后失效，后续栈复用会导致发送内容异常。',
    tags: ['DMA', '生命周期', '栈内存']
  })
]

const q = require('./create-question')

module.exports = [
  q({
    id: 's075',
    chapter: 'SPI',
    knowledgeId: 'stm32-14-01-01',
    topic: 'SPI 基本特点',
    type: 'concept',
    difficulty: '基础',
    question: 'SPI 通信最典型的特点是什么？',
    options: [
      '同步串行通信，常用 SCK、MOSI、MISO、片选四类信号',
      '只需要一根 SDA 线即可全双工',
      '必须有地址仲裁才能通信',
      '只能半双工且不能全双工'
    ],
    answer: 0,
    explanation: 'SPI 由主机提供时钟，常见连接包含时钟、主出从入、主入从出和片选。它没有 I2C 那样的总线地址机制，片选通常由 GPIO 控制。',
    tags: ['SPI', '同步通信']
  }),
  q({
    id: 's076',
    chapter: 'SPI',
    knowledgeId: 'stm32-14-02-03',
    topic: 'CPOL / CPHA',
    type: 'scenario_code',
    difficulty: '进阶',
    question: 'SPI 读到的数据整体错位，优先检查哪项配置？',
    code: 'SPI_InitStructure.SPI_CPOL = SPI_CPOL_Low;\nSPI_InitStructure.SPI_CPHA = SPI_CPHA_1Edge;',
    options: [
      '主从双方 CPOL/CPHA 模式是否一致',
      'GPIO 是否配置成模拟输入',
      'USART 波特率是否为 115200',
      'ADC 采样时间是否过短'
    ],
    answer: 0,
    explanation: 'CPOL 决定空闲时钟电平，CPHA 决定采样边沿。模式不一致会导致采样时刻错位，看起来像每个字节都不对。',
    tags: ['SPI', 'CPOL', 'CPHA']
  }),
  q({
    id: 's077',
    chapter: 'SPI',
    knowledgeId: 'stm32-14-03-02',
    topic: 'SPI 片选 CS',
    type: 'bug_fix',
    difficulty: '易错',
    question: '多个 SPI 从设备共用总线时，下面代码主要风险是什么？',
    code: 'GPIO_ResetBits(CS_FLASH_PORT, CS_FLASH_PIN);\nGPIO_ResetBits(CS_SENSOR_PORT, CS_SENSOR_PIN);\nSPI_SendData(SPI1, cmd);',
    options: [
      '同时拉低两个片选会让多个从机同时驱动 MISO，造成总线冲突',
      'SPI 必须同时选中所有从机',
      '片选只能由 DMA 控制',
      'MISO 是主机输出线，不会冲突'
    ],
    answer: 0,
    explanation: 'SPI 通常靠片选区分从机，同一时刻只应选中一个。多个从机同时使能时，MISO 可能同时输出不同电平。',
    tags: ['SPI', 'CS', '总线冲突']
  }),
  q({
    id: 's078',
    chapter: 'SPI',
    knowledgeId: 'stm32-14-02-06',
    topic: 'SPI_BaudRatePrescaler',
    type: 'calculation',
    difficulty: '基础',
    question: 'SPI1 输入时钟 72MHz，分频设置为 8，SCK 约是多少？',
    code: 'SPI_InitStructure.SPI_BaudRatePrescaler = SPI_BaudRatePrescaler_8;',
    options: [
      '9MHz',
      '72MHz',
      '1MHz',
      '576MHz'
    ],
    answer: 0,
    explanation: 'SPI SCK 频率约等于外设输入时钟除以分频系数。72MHz / 8 = 9MHz，实际还要看从设备允许的最大时钟。',
    tags: ['SPI', '分频', 'SCK']
  }),
  q({
    id: 's079',
    chapter: 'SPI',
    knowledgeId: 'stm32-14-04-02',
    topic: 'SPI 收发同时进行',
    type: 'code_read',
    difficulty: '进阶',
    question: '为什么 SPI 读取从机数据时，主机常常还要发送哑字节？',
    code: 'SPI_I2S_SendData(SPI1, 0xFF);\nwhile (SPI_I2S_GetFlagStatus(SPI1, SPI_I2S_FLAG_RXNE) == RESET) {}\ndata = SPI_I2S_ReceiveData(SPI1);',
    options: [
      'SPI 时钟由主机发送产生，读数据也需要主机发出时钟',
      '哑字节会自动配置 NVIC',
      '从机可以无时钟主动推送 SPI 数据',
      'RXNE 表示发送缓冲区为空'
    ],
    answer: 0,
    explanation: 'SPI 是同步通信，主机读数据时也必须提供 SCK。发送 0xFF 等哑字节的目的主要是产生时钟，让从机移出数据。',
    tags: ['SPI', '全双工', '哑字节']
  }),
  q({
    id: 's080',
    chapter: 'SPI',
    knowledgeId: 'stm32-14-05-03',
    topic: 'SPI 与 DMA',
    type: 'missing_step',
    difficulty: '进阶',
    question: 'SPI DMA 接收没有数据，除了 DMA 通道外还要确认哪项？',
    code: 'DMA_Cmd(DMA1_Channel2, ENABLE);\nSPI_Cmd(SPI1, ENABLE);',
    options: [
      'SPI_I2S_DMACmd 是否使能了 SPI 的 DMA 请求，并且主机是否产生时钟',
      '是否关闭了所有片选',
      '是否把 SPI 改成 I2C',
      '是否删除了 MISO 引脚'
    ],
    answer: 0,
    explanation: 'SPI DMA 需要 DMA 控制器、SPI DMA 请求和实际时钟同时成立。作为主机接收时，如果没有发送产生时钟，DMA 也收不到数据。',
    tags: ['SPI', 'DMA', '时钟']
  })
]

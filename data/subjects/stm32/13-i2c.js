const q = require('./create-question')

module.exports = [
  q({
    id: 's068',
    chapter: 'I2C',
    knowledgeId: 'stm32-13-01-01',
    topic: 'I2C 总线特点',
    type: 'concept',
    difficulty: '基础',
    question: 'I2C 总线最典型的电气和拓扑特点是什么？',
    options: [
      '两根线 SDA/SCL，开漏加上拉，支持多从机并可支持多主机仲裁',
      '每个从机必须独占 8 根数据线',
      '只能一主一从，不能挂多个器件',
      '必须使用推挽输出强拉高'
    ],
    answer: 0,
    explanation: 'I2C 通过开漏结构实现线与，释放总线后由上拉电阻拉高。理论上可多主多从，实际工程从机数量受地址、总线电容、上拉电阻和速率限制。',
    tags: ['I2C', '开漏', '多主多从']
  }),
  q({
    id: 's069',
    chapter: 'I2C',
    knowledgeId: 'stm32-13-01-06',
    topic: '7 位地址',
    type: 'concept',
    difficulty: '进阶',
    question: '标准 7 位 I2C 地址理论上有多少个取值，工程上为什么不能简单说可挂 128 个从机？',
    options: [
      '7 位有 128 个编码，但部分地址保留且总线电容、地址冲突也会限制数量',
      '7 位地址只能表示 7 个从机',
      'I2C 地址由 STM32 自动随机分配，所以没有上限',
      '只要上拉足够小，就能无限挂从机'
    ],
    answer: 0,
    explanation: '7 位地址空间是 0 到 127，但有保留地址，很多器件地址还可能固定或只允许少量引脚选择。总线电容和上拉也会限制实际挂载数量。',
    tags: ['I2C', '地址', '总线容量']
  }),
  q({
    id: 's070',
    chapter: 'I2C',
    knowledgeId: 'stm32-13-02-05',
    topic: 'I2C_AcknowledgeConfig',
    type: 'missing_step',
    difficulty: '易错',
    question: 'I2C 主机读多个字节时，最后一个字节前通常要处理什么？',
    code: 'I2C_AcknowledgeConfig(I2C1, ENABLE);\n/* receive bytes */',
    options: [
      '在接收最后一个字节前关闭 ACK，并产生 STOP，避免从机继续发送',
      '一直 ACK 到总线断电',
      '把 SDA 配成推挽输出',
      '删除 START 条件'
    ],
    answer: 0,
    explanation: 'I2C 读操作中，主机通过 ACK/NACK 告诉从机是否继续发送。最后一个字节通常要 NACK 并 STOP，具体时序要按参考手册和标准库例程处理。',
    tags: ['I2C', 'ACK', '读时序']
  }),
  q({
    id: 's071',
    chapter: 'I2C',
    knowledgeId: 'stm32-13-02-02',
    topic: 'I2C_InitTypeDef',
    type: 'fill_blank',
    difficulty: '基础',
    question: '标准 I2C 模式 100kHz 初始化时，空白处最适合填什么？',
    code: 'I2C_InitStructure.I2C_Mode = I2C_Mode_I2C;\nI2C_InitStructure.I2C_ClockSpeed = /* ____ */;\nI2C_Init(I2C1, &I2C_InitStructure);',
    options: [
      '100000',
      '115200',
      '72',
      '0x40010800'
    ],
    answer: 0,
    explanation: 'I2C_ClockSpeed 使用 Hz 为单位，100kHz 应写 100000。115200 是常见串口波特率，不是 I2C 标准模式频率。',
    tags: ['I2C', 'ClockSpeed']
  }),
  q({
    id: 's072',
    chapter: 'I2C',
    knowledgeId: 'stm32-13-03-04',
    topic: 'I2C 总线忙',
    type: 'bug_fix',
    difficulty: '面试',
    question: '系统上电后 I2C 一直 BUSY，常见硬件或时序原因是什么？',
    code: 'while (I2C_GetFlagStatus(I2C1, I2C_FLAG_BUSY)) {\n}',
    options: [
      'SDA/SCL 被从机或外部电路拉低，或上一次通信异常未释放总线',
      'BUSY 表示总线空闲',
      'I2C 总线不需要上拉',
      '只要 CPU 主频高就不会 BUSY'
    ],
    answer: 0,
    explanation: 'I2C BUSY 长时间置位常见于从机拉住 SDA、上拉异常、复位时序不同步等。工程上可能需要 GPIO 手动释放 SCL/SDA 或复位 I2C 外设。',
    tags: ['I2C', 'BUSY', '故障恢复']
  }),
  q({
    id: 's073',
    chapter: 'I2C',
    knowledgeId: 'stm32-13-04-02',
    topic: '软件 I2C',
    type: 'scenario_code',
    difficulty: '进阶',
    question: '软件模拟 I2C 时，SDA 输出高电平更稳妥的做法是什么？',
    code: '/* release SDA */\nGPIO_SetBits(GPIOB, GPIO_Pin_7);',
    options: [
      '用开漏输出释放 SDA，由上拉电阻拉高，而不是强推高和其他器件冲突',
      '把 SDA 改成模拟输入并永不读取',
      '始终强推高，忽略从机 ACK',
      '去掉上拉电阻'
    ],
    answer: 0,
    explanation: 'I2C 的高电平来自释放总线后的上拉。软件 I2C 也应尊重开漏语义，否则从机 ACK 拉低时主机强推高可能产生冲突。',
    tags: ['I2C', '软件模拟', '开漏']
  }),
  q({
    id: 's074',
    chapter: 'I2C',
    knowledgeId: 'stm32-13-05-04',
    topic: 'I2C 地址左移',
    type: 'bug_fix',
    difficulty: '易错',
    question: '从机手册给 7 位地址 0x50，下面写法为什么可能错？',
    code: 'I2C_Send7bitAddress(I2C1, 0xA0, I2C_Direction_Transmitter);',
    options: [
      'SPL 函数参数通常按库说明传 7 位地址左移后的 8 位地址或 7 位地址要看具体函数约定，不能混淆手册地址和读写位',
      '0x50 和 0xA0 永远完全等价，不需要看库说明',
      'I2C 地址只能是十进制',
      '读写位由 GPIO_Mode 决定'
    ],
    answer: 0,
    explanation: 'I2C 地址题常卡在 7 位地址、左移一位和读写位。使用 SPL 时要按具体函数文档和例程传参，不同库或封装可能约定不同。',
    tags: ['I2C', '地址左移', 'SPL']
  })
]

const q = require('./create-question')

module.exports = [
  q({
    id: 's017',
    chapter: 'GPIO 基础与进阶',
    knowledgeId: 'stm32-04-01-06',
    topic: '推挽输出',
    type: 'concept',
    difficulty: '基础',
    question: 'GPIO 推挽输出最适合下面哪种场景？',
    options: [
      '直接输出高低电平驱动普通 LED 或数字控制信号',
      '多个器件共用一根线并且任意器件只能拉低',
      '采集 ADC 模拟电压',
      '作为 I2C 总线的默认推荐输出模式'
    ],
    answer: 0,
    explanation: '推挽输出可以主动输出高电平和低电平，适合普通数字输出。I2C 这类线与结构通常使用开漏加上拉，而模拟输入要使用模拟模式。',
    tags: ['GPIO', '推挽输出']
  }),
  q({
    id: 's018',
    chapter: 'GPIO 基础与进阶',
    knowledgeId: 'stm32-04-01-07',
    topic: '开漏输出',
    type: 'scenario_code',
    difficulty: '进阶',
    question: '用 GPIO 模拟一根可被多个器件拉低的告警线时，哪种配置更合理？',
    code: 'GPIO_InitStructure.GPIO_Pin = GPIO_Pin_6;\nGPIO_InitStructure.GPIO_Speed = GPIO_Speed_50MHz;\n/* mode ? */',
    options: [
      'GPIO_Mode_Out_OD，并配合合适的上拉',
      'GPIO_Mode_Out_PP，所有器件同时推高',
      'GPIO_Mode_AIN，不需要数字输入输出',
      'GPIO_Mode_IN_FLOATING，且不用外部上拉'
    ],
    answer: 0,
    explanation: '开漏输出只能主动拉低，释放时由上拉电阻拉高，适合线与、多器件共享等场景。推挽多个输出直接相连可能产生冲突电流。',
    tags: ['GPIO', '开漏', '上拉']
  }),
  q({
    id: 's019',
    chapter: 'GPIO 基础与进阶',
    knowledgeId: 'stm32-04-03-05',
    topic: 'BSRR 原子置位',
    type: 'code_read',
    difficulty: '进阶',
    question: '下面两种置位方式在中断并发场景下，哪项判断更稳妥？',
    code: 'GPIOA->ODR |= GPIO_Pin_5;\n\nGPIOA->BSRR = GPIO_Pin_5;',
    options: [
      'BSRR 写寄存器通常能避免 ODR 读改写被中断打断导致的位丢失',
      'ODR |= 一定比 BSRR 更原子',
      'BSRR 只能清零，不能置位',
      '两者都会自动关闭中断'
    ],
    answer: 0,
    explanation: 'ODR |= 是读-改-写序列，中途如果另一个上下文也改 ODR，可能覆盖对方结果。BSRR 用一次写操作设置或复位目标位，更适合并发修改 GPIO 位。',
    tags: ['GPIO', 'BSRR', '原子操作']
  }),
  q({
    id: 's020',
    chapter: 'GPIO 基础与进阶',
    knowledgeId: 'stm32-04-04-09',
    topic: '浮空输入风险',
    type: 'bug_fix',
    difficulty: '易错',
    question: '按键未按下时读数随机跳变，下面配置的主要问题是什么？',
    code: 'GPIO_InitStructure.GPIO_Pin = GPIO_Pin_0;\nGPIO_InitStructure.GPIO_Mode = GPIO_Mode_IN_FLOATING;\nGPIO_Init(GPIOA, &GPIO_InitStructure);',
    options: [
      '输入脚浮空，没有上拉或下拉，电平容易受干扰',
      '输入模式一定不能用于按键',
      'GPIO_Pin_0 只能做模拟输入',
      'GPIO_Init 会自动打开内部上拉'
    ],
    answer: 0,
    explanation: '浮空输入没有确定默认电平，未按下时容易被噪声影响。按键输入要结合外部电路选择上拉输入、下拉输入或外部电阻。',
    tags: ['GPIO', '按键', '浮空输入']
  }),
  q({
    id: 's021',
    chapter: 'GPIO 基础与进阶',
    knowledgeId: 'stm32-04-05-02',
    topic: 'USART 引脚复用',
    type: 'fill_blank',
    difficulty: '基础',
    question: 'STM32F1 使用 USART1_TX PA9 时，空白处最适合填什么？',
    code: 'GPIO_InitStructure.GPIO_Pin = GPIO_Pin_9;\nGPIO_InitStructure.GPIO_Speed = GPIO_Speed_50MHz;\nGPIO_InitStructure.GPIO_Mode = /* ____ */;\nGPIO_Init(GPIOA, &GPIO_InitStructure);',
    options: [
      'GPIO_Mode_AF_PP',
      'GPIO_Mode_AIN',
      'GPIO_Mode_IPD',
      'GPIO_Mode_Out_OD'
    ],
    answer: 0,
    explanation: 'USART TX 是外设输出到引脚，应使用复用推挽输出。RX 通常配置为浮空输入或上拉输入，具体看芯片和电路。',
    tags: ['GPIO', 'USART', '复用功能']
  }),
  q({
    id: 's022',
    chapter: 'GPIO 基础与进阶',
    knowledgeId: 'stm32-04-03-08',
    topic: 'GPIO 翻转输出',
    type: 'bug_fix',
    difficulty: '易错',
    question: '下面翻转 LED 的代码在中断同时改其他引脚时有什么风险？',
    code: 'GPIOA->ODR ^= GPIO_Pin_5;',
    options: [
      '这是读改写操作，可能和其他上下文修改 ODR 互相覆盖',
      '异或操作不能用于任何寄存器',
      'GPIO_Pin_5 会自动变成输入',
      'ODR 写入会复位整个芯片'
    ],
    answer: 0,
    explanation: 'ODR ^= 需要先读出整个 ODR，再修改并写回。并发场景下可能覆盖其他位变化，工程上可用临界区或 BSRR 组合方式处理。',
    tags: ['GPIO', 'ODR', '并发风险']
  }),
  q({
    id: 's023',
    chapter: 'GPIO 基础与进阶',
    knowledgeId: 'stm32-04-02-04',
    topic: 'GPIO_Speed 字段',
    type: 'concept',
    difficulty: '基础',
    question: 'GPIO_Speed 在输出模式下主要影响什么？',
    options: [
      '输出驱动边沿速度和相关电气特性，不等于软件循环翻转频率',
      '一定决定 CPU 主频',
      '决定输入按键消抖时间',
      '只要设为 50MHz 就不会有 EMI 问题'
    ],
    answer: 0,
    explanation: 'GPIO_Speed 描述输出驱动能力和边沿速度相关配置。速度越高不一定越好，过快边沿可能增加干扰，实际要结合负载和信号要求。',
    tags: ['GPIO', '输出速度']
  }),
  q({
    id: 's024',
    chapter: 'GPIO 基础与进阶',
    knowledgeId: 'stm32-04-04-04',
    topic: '按键消抖',
    type: 'missing_step',
    difficulty: '基础',
    question: '下面按键检测代码容易一次按下触发多次，主要缺少什么？',
    code: 'if (GPIO_ReadInputDataBit(GPIOA, GPIO_Pin_0) == Bit_RESET) {\n    key_pressed = 1;\n}',
    options: [
      '软件或硬件消抖处理',
      '把 GPIOA 改成 USART1',
      '每次读取前重新下载程序',
      '把 key_pressed 声明成 double'
    ],
    answer: 0,
    explanation: '机械按键按下和释放时会抖动，短时间内电平多次跳变。常见做法是延时确认、状态机消抖或硬件 RC/施密特处理。',
    tags: ['GPIO', '按键', '消抖']
  })
]

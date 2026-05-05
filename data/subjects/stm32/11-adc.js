const q = require('./create-question')

module.exports = [
  q({
    id: 's061',
    chapter: 'ADC',
    knowledgeId: 'stm32-11-01-01',
    topic: 'ADC 是什么',
    type: 'concept',
    difficulty: '基础',
    question: 'STM32 ADC 的基本作用是什么？',
    options: [
      '把模拟电压转换成数字量',
      '把字符串转换成 CAN 帧',
      '自动产生 PWM',
      '替代所有 GPIO 输入'
    ],
    answer: 0,
    explanation: 'ADC 是模数转换器，用于采集电压、传感器输出等模拟信号。采样范围、参考电压、分辨率和采样时间都会影响结果。',
    tags: ['ADC', '模拟采样']
  }),
  q({
    id: 's062',
    chapter: 'ADC',
    knowledgeId: 'stm32-11-02-04',
    topic: 'ADC_SampleTime',
    type: 'scenario_code',
    difficulty: '进阶',
    question: '采集高阻抗传感器时，采样值偏低且波动，优先考虑哪项配置？',
    code: 'ADC_RegularChannelConfig(ADC1, ADC_Channel_1, 1, ADC_SampleTime_1Cycles5);',
    options: [
      '适当增大采样时间，让采样电容有足够时间充电',
      '把 ADC 时钟无限提高',
      '把传感器接到 USART_TX',
      '删除 ADC 校准'
    ],
    answer: 0,
    explanation: '高源阻抗信号驱动 ADC 采样电容较慢，采样时间过短会导致电压尚未稳定。采样时间要结合源阻抗、ADC 时钟和精度要求设置。',
    tags: ['ADC', '采样时间', '源阻抗']
  }),
  q({
    id: 's063',
    chapter: 'ADC',
    knowledgeId: 'stm32-11-02-07',
    topic: 'ADC 校准',
    type: 'missing_step',
    difficulty: '基础',
    question: 'ADC 初始化后直接读取，精度一直偏差较大，常见还缺少哪一步？',
    code: 'ADC_Init(ADC1, &adc);\nADC_Cmd(ADC1, ENABLE);\nADC_SoftwareStartConvCmd(ADC1, ENABLE);',
    options: [
      '按芯片要求执行 ADC 复位校准和校准流程',
      '把 ADC 数据寄存器改成 GPIOA->ODR',
      '开启 USART 中断',
      '把采样时间设为 0'
    ],
    answer: 0,
    explanation: '很多 STM32 的 ADC 启用后需要校准以减小偏差。标准库示例通常包含 ADC_ResetCalibration、ADC_StartCalibration 并等待完成。',
    tags: ['ADC', '校准']
  }),
  q({
    id: 's064',
    chapter: 'ADC',
    knowledgeId: 'stm32-11-03-04',
    topic: 'ADC 转换结果计算电压',
    type: 'calculation',
    difficulty: '基础',
    question: '12 位 ADC，参考电压 3.3V，转换值为 2048，近似输入电压是多少？',
    code: 'uint16_t raw = 2048;\nfloat v = raw * 3.3f / 4095.0f;',
    options: [
      '约 1.65V',
      '约 0.33V',
      '约 3.3V',
      '约 5V'
    ],
    answer: 0,
    explanation: '12 位 ADC 数字范围通常是 0 到 4095。2048 接近满量程一半，因此电压约为 1.65V。工程上还要考虑参考电压误差和校准。',
    tags: ['ADC', '电压计算']
  }),
  q({
    id: 's065',
    chapter: 'ADC',
    knowledgeId: 'stm32-11-04-01',
    topic: 'ADC DMA 多通道采样',
    type: 'bug_fix',
    difficulty: '进阶',
    question: 'ADC 扫描两个通道但 DMA 缓冲区只有一个元素，主要问题是什么？',
    code: 'uint16_t adc_buf[1];\nADC_InitStructure.ADC_ScanConvMode = ENABLE;\nADC_InitStructure.ADC_NbrOfChannel = 2;\nDMA_InitStructure.DMA_BufferSize = 1;',
    options: [
      '缓冲区长度和 DMA_BufferSize 不匹配通道数，会丢失或覆盖采样结果',
      'ADC 扫描模式不能配合 DMA',
      'uint16_t 不能保存 ADC 结果',
      'DMA_BufferSize 必须等于 0'
    ],
    answer: 0,
    explanation: '多通道扫描时，每轮转换会产生多个结果。DMA 缓冲区长度应覆盖通道数或设计好的循环长度，否则结果排列和覆盖都会出问题。',
    tags: ['ADC', 'DMA', '多通道']
  }),
  q({
    id: 's066',
    chapter: 'ADC',
    knowledgeId: 'stm32-11-05-03',
    topic: '模拟输入 GPIO 配置',
    type: 'fill_blank',
    difficulty: '基础',
    question: 'ADC 采集 PA1 前，GPIO 模式空白处最适合填什么？',
    code: 'GPIO_InitStructure.GPIO_Pin = GPIO_Pin_1;\nGPIO_InitStructure.GPIO_Mode = /* ____ */;\nGPIO_Init(GPIOA, &GPIO_InitStructure);',
    options: [
      'GPIO_Mode_AIN',
      'GPIO_Mode_AF_PP',
      'GPIO_Mode_Out_PP',
      'GPIO_Mode_IPD'
    ],
    answer: 0,
    explanation: 'ADC 输入引脚应配置成模拟输入，减少数字输入缓冲等对模拟信号的影响。复用推挽是外设数字输出场景。',
    tags: ['ADC', 'GPIO', '模拟输入']
  }),
  q({
    id: 's067',
    chapter: 'ADC',
    knowledgeId: 'stm32-11-06-02',
    topic: 'ADC 采样抗干扰',
    type: 'scenario_code',
    difficulty: '进阶',
    question: 'ADC 数据偶尔跳变，软件侧哪种处理最常见？',
    code: 'sum = 0;\nfor (i = 0; i < 16; i++) {\n    sum += adc_buf[i];\n}\nvalue = sum / 16;',
    options: [
      '多次采样后平均或滤波，同时检查硬件参考电压和布局',
      '只读取一次永远最准确',
      '把 ADC 数据强制转换成 char',
      '关闭采样电容'
    ],
    answer: 0,
    explanation: 'ADC 抗干扰通常软硬件结合。平均滤波能降低随机噪声，但不能替代合理的采样时间、参考电源、地线和模拟前端设计。',
    tags: ['ADC', '滤波', '抗干扰']
  })
]

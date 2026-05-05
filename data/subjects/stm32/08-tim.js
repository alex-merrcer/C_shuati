const q = require('./create-question')

module.exports = [
  q({
    id: 's038',
    chapter: '定时器 TIM 基础与进阶',
    knowledgeId: 'stm32-08-02-02',
    topic: 'PSC 预分频器',
    type: 'calculation',
    difficulty: '基础',
    question: 'TIM 时钟为 72MHz，PSC=7199，ARR=999。更新事件周期是多少？',
    code: 'TIM_TimeBaseStructure.TIM_Prescaler = 7199;\nTIM_TimeBaseStructure.TIM_Period = 999;',
    options: [
      '100ms',
      '1ms',
      '10s',
      '72ms'
    ],
    answer: 0,
    explanation: '计数频率 = 72MHz / (7199+1) = 10kHz。计数 0 到 999 共 1000 个计数，周期 = 1000 / 10kHz = 0.1s。',
    tags: ['TIM', 'PSC', 'ARR', '时间计算']
  }),
  q({
    id: 's039',
    chapter: '定时器 TIM 基础与进阶',
    knowledgeId: 'stm32-08-02-03',
    topic: 'ARR 自动重装载',
    type: 'concept',
    difficulty: '基础',
    question: '定时器向上计数模式下，ARR 的主要作用是什么？',
    options: [
      '决定计数器到达多少后产生更新并重装',
      '决定 USART 波特率',
      '决定 GPIO 输入上下拉',
      '决定 Flash 等待周期'
    ],
    answer: 0,
    explanation: 'ARR 是自动重装载值，和 PSC 一起决定定时器更新周期。常见计算要注意 PSC 和 ARR 都是寄存器值加 1 后参与分频或计数。',
    tags: ['TIM', 'ARR']
  }),
  q({
    id: 's040',
    chapter: '定时器 TIM 基础与进阶',
    knowledgeId: 'stm32-08-03-04',
    topic: 'TIM_ClearITPendingBit',
    type: 'missing_step',
    difficulty: '基础',
    question: '下面定时器中断会不停重复进入，缺少哪一步？',
    code: 'void TIM2_IRQHandler(void) {\n    if (TIM_GetITStatus(TIM2, TIM_IT_Update) != RESET) {\n        tick++;\n    }\n}',
    options: [
      '清除 TIM_IT_Update 中断挂起位',
      '重新定义 tick 为 double',
      '关闭 GPIOA 时钟',
      '删除 if 判断'
    ],
    answer: 0,
    explanation: '定时器更新中断处理完成后要调用 TIM_ClearITPendingBit 清除标志。否则退出 ISR 后仍处于挂起状态，可能马上再次进入。',
    tags: ['TIM', '中断标志']
  }),
  q({
    id: 's041',
    chapter: '定时器 TIM 基础与进阶',
    knowledgeId: 'stm32-08-04-03',
    topic: 'PWM 占空比',
    type: 'calculation',
    difficulty: '进阶',
    question: '向上计数 PWM 模式中，ARR=999，CCR=250。近似占空比是多少？',
    code: 'TIM_TimeBaseStructure.TIM_Period = 999;\nTIM_OCInitStructure.TIM_Pulse = 250;',
    options: [
      '25%',
      '2.5%',
      '50%',
      '100%'
    ],
    answer: 0,
    explanation: '一个周期约 1000 个计数，CCR=250 时高电平计数约 250 个，占空比约 25%。实际极性和 PWM 模式会影响高低电平含义。',
    tags: ['TIM', 'PWM', 'CCR']
  }),
  q({
    id: 's042',
    chapter: '定时器 TIM 基础与进阶',
    knowledgeId: 'stm32-08-04-05',
    topic: 'PWM 输出 GPIO 复用',
    type: 'bug_fix',
    difficulty: '易错',
    question: 'TIM3 PWM 已启动但引脚没有波形，下面 GPIO 配置可能错在哪里？',
    code: 'GPIO_InitStructure.GPIO_Pin = GPIO_Pin_6;\nGPIO_InitStructure.GPIO_Mode = GPIO_Mode_Out_PP;\nGPIO_Init(GPIOA, &GPIO_InitStructure);',
    options: [
      'PWM 输出脚应配置为定时器通道对应的复用输出模式',
      'PWM 只能从模拟输入脚输出',
      'TIM3 不需要 GPIO 引脚',
      'GPIO_Mode_Out_PP 会自动连接 TIM3_CH1'
    ],
    answer: 0,
    explanation: '定时器通道输出到管脚依赖复用功能配置。普通推挽输出只是 GPIO 自己控制 ODR，不会把 TIM 输出比较信号送到引脚。',
    tags: ['TIM', 'PWM', 'GPIO复用']
  }),
  q({
    id: 's043',
    chapter: '定时器 TIM 基础与进阶',
    knowledgeId: 'stm32-08-05-02',
    topic: '输入捕获',
    type: 'scenario_code',
    difficulty: '进阶',
    question: '用输入捕获测量脉宽时，为什么通常要处理计数器溢出？',
    code: 'rise = TIM_GetCapture1(TIM2);\nfall = TIM_GetCapture2(TIM2);\nwidth = fall - rise;',
    options: [
      '如果下降沿发生在计数器回绕后，直接相减会得到错误结果',
      '输入捕获不会读取任何计数器值',
      'fall 一定大于 rise，不需要判断',
      '溢出只影响 ADC，不影响 TIM'
    ],
    answer: 0,
    explanation: '定时器计数器有有限位宽，测量跨越溢出点时需要结合溢出次数或按模运算处理。否则简单 fall-rise 会在边界情况下错误。',
    tags: ['TIM', '输入捕获', '溢出']
  }),
  q({
    id: 's044',
    chapter: '定时器 TIM 基础与进阶',
    knowledgeId: 'stm32-08-06-01',
    topic: '编码器模式',
    type: 'concept',
    difficulty: '进阶',
    question: '定时器编码器模式通常用于什么场景？',
    options: [
      '读取正交编码器 A/B 相，硬件计数并判断方向',
      '把 Flash 数据编码成 Base64',
      '自动生成 I2C 地址',
      '提升 ADC 分辨率'
    ],
    answer: 0,
    explanation: '编码器模式利用定时器输入通道识别正交脉冲，适合电机位置或速度测量。它不是字符串编码功能。',
    tags: ['TIM', '编码器']
  }),
  q({
    id: 's045',
    chapter: '定时器 TIM 基础与进阶',
    knowledgeId: 'stm32-08-07-02',
    topic: '高级定时器刹车',
    type: 'scenario_code',
    difficulty: '面试',
    question: '电机 PWM 使用高级定时器时，刹车输入 BKIN 的意义是什么？',
    code: 'TIM_BDTRInitStructure.TIM_Break = TIM_Break_Enable;\nTIM_BDTRConfig(TIM1, &TIM_BDTRInitStructure);',
    options: [
      '出现故障输入时硬件快速关闭或切换 PWM 输出，保护功率级',
      '让 PWM 占空比自动变成 100%',
      '把 TIM1 改成普通定时器',
      '只影响串口波特率'
    ],
    answer: 0,
    explanation: '高级定时器面向电机控制等场景，刹车功能可以在过流等故障下快速改变输出状态，减少软件响应延迟。',
    tags: ['TIM1', '高级定时器', '刹车']
  }),
  q({
    id: 's046',
    chapter: '定时器 TIM 基础与进阶',
    knowledgeId: 'stm32-08-03-02',
    topic: 'TIM_ITConfig',
    type: 'fill_blank',
    difficulty: '基础',
    question: '要打开 TIM2 更新中断，空白处最适合填什么？',
    code: 'TIM_ClearITPendingBit(TIM2, TIM_IT_Update);\n/* ____ */\nTIM_Cmd(TIM2, ENABLE);',
    options: [
      'TIM_ITConfig(TIM2, TIM_IT_Update, ENABLE);',
      'GPIO_SetBits(GPIOA, GPIO_Pin_0);',
      'USART_Cmd(USART1, ENABLE);',
      'ADC_SoftwareStartConvCmd(ADC1, ENABLE);'
    ],
    answer: 0,
    explanation: 'TIM_ITConfig 控制定时器中断源是否使能。还需要 NVIC 使能对应 IRQ，定时器本身也要 TIM_Cmd 启动。',
    tags: ['TIM', '中断使能']
  })
]

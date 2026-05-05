const q = require('./create-question')

module.exports = [
  q({
    id: 's009',
    chapter: 'RCC 时钟树',
    knowledgeId: 'stm32-03-03-04',
    topic: 'GPIO 时钟使能',
    type: 'fill_blank',
    difficulty: '基础',
    question: '在 STM32F1 SPL 中初始化 GPIOB 前，空白处最适合填什么？',
    code: '/* ____ */\nGPIO_Init(GPIOB, &GPIO_InitStructure);',
    options: [
      'RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOB, ENABLE);',
      'RCC_APB1PeriphClockCmd(RCC_APB1Periph_GPIOB, ENABLE);',
      'GPIO_SetBits(GPIOB, GPIO_Pin_All);',
      'NVIC_Init(&NVIC_InitStructure);'
    ],
    answer: 0,
    explanation: 'STM32F1 的 GPIO 端口挂在 APB2 总线上，所以 GPIOB 时钟用 RCC_APB2PeriphClockCmd 使能。把它写到 APB1 是常见错误。',
    tags: ['RCC', 'GPIO', 'APB2']
  }),
  q({
    id: 's010',
    chapter: 'RCC 时钟树',
    knowledgeId: 'stm32-03-04-02',
    topic: 'APB 分频对定时器时钟的影响',
    type: 'calculation',
    difficulty: '进阶',
    question: '假设 STM32F1 中 HCLK=72MHz，APB1 分频为 2，TIM2 挂在 APB1。TIM2 的计数器输入时钟通常是多少？',
    code: 'RCC_HCLKConfig(RCC_SYSCLK_Div1);\nRCC_PCLK1Config(RCC_HCLK_Div2);\n/* TIM2 on APB1 */',
    options: [
      '72MHz',
      '36MHz',
      '18MHz',
      '8MHz'
    ],
    answer: 0,
    explanation: '很多 STM32 系列中 APB 分频不为 1 时，挂在该 APB 上的定时器时钟会变成 PCLK 的 2 倍。这里 PCLK1=36MHz，因此 TIM2 时钟通常为 72MHz。具体仍要以对应参考手册为准。',
    tags: ['RCC', 'TIM', 'APB分频']
  }),
  q({
    id: 's011',
    chapter: 'RCC 时钟树',
    knowledgeId: 'stm32-03-02-10',
    topic: 'SystemCoreClock 变量',
    type: 'bug_fix',
    difficulty: '易错',
    question: '切换系统时钟后 SysTick 延时明显不准，下面代码主要少了什么？',
    code: 'RCC_SYSCLKConfig(RCC_SYSCLKSource_PLLCLK);\nSysTick_Config(SystemCoreClock / 1000);',
    options: [
      '在使用 SystemCoreClock 前调用 SystemCoreClockUpdate 或同步更新该变量',
      '把 SysTick_Config 的参数改成 0',
      '删除 PLL 配置，SysTick 只能用 HSI',
      '把 SystemCoreClock 定义成局部变量'
    ],
    answer: 0,
    explanation: 'SystemCoreClock 是软件变量，不一定会在你手动切换时钟后自动变成真实频率。用它计算 SysTick 重装载值前要确认它已经更新。',
    tags: ['SystemCoreClock', 'SysTick', '时钟切换']
  }),
  q({
    id: 's012',
    chapter: 'RCC 时钟树',
    knowledgeId: 'stm32-03-02-04',
    topic: 'RCC_WaitForHSEStartUp',
    type: 'scenario_code',
    difficulty: '进阶',
    question: '使用 HSE 作为 PLL 输入时，下面哪种处理更稳妥？',
    code: 'RCC_HSEConfig(RCC_HSE_ON);\nstatus = RCC_WaitForHSEStartUp();\nif (status == SUCCESS) {\n    /* config PLL */\n}',
    options: [
      '先等待 HSE 起振成功，再配置并切换 PLL；失败时走降级或报错路径',
      '不需要等待，HSE_ON 后 PLL 一定立即可用',
      'HSE 起振失败时继续使用未锁定 PLL 更快',
      '只要 GPIO 时钟打开，HSE 状态不影响系统时钟'
    ],
    answer: 0,
    explanation: '外部晶振可能因为硬件、负载电容、焊接或启动时间失败。等待并检查状态可以避免系统切到不可靠的时钟源。',
    tags: ['HSE', 'PLL', '时钟可靠性']
  }),
  q({
    id: 's013',
    chapter: 'RCC 时钟树',
    knowledgeId: 'stm32-03-04-06',
    topic: 'ADC 时钟不能过高',
    type: 'concept',
    difficulty: '基础',
    question: '为什么配置 ADC 前要关注 ADCCLK 不能过高？',
    options: [
      'ADC 有最高工作时钟限制，过高会影响转换精度或不符合手册要求',
      'ADC 时钟越高采样越准，没有上限',
      'ADC 不需要时钟，只需要模拟输入电压',
      'ADCCLK 只影响 GPIO 输出速度'
    ],
    answer: 0,
    explanation: 'ADC 属于模拟外设，转换时钟要满足数据手册限制。SPL 中常通过 RCC_ADCCLKConfig 设置分频，不能只追求高频。',
    tags: ['ADC', 'RCC', '时钟限制']
  }),
  q({
    id: 's014',
    chapter: 'RCC 时钟树',
    knowledgeId: 'stm32-03-03-09',
    topic: 'SPI/I2C/CAN 时钟使能',
    type: 'bug_fix',
    difficulty: '易错',
    question: 'I2C1 初始化后寄存器配置似乎没有生效，最可能漏掉哪类时钟？',
    code: 'GPIO_Init(GPIOB, &gpio);\nI2C_Init(I2C1, &i2c);\nI2C_Cmd(I2C1, ENABLE);',
    options: [
      '除了 GPIOB 时钟，还要打开 I2C1 外设时钟',
      '只要打开 GPIOB 时钟，I2C1 内部时钟一定自动打开',
      'I2C1 使用 APB2 时钟，必须打开 USART1',
      'I2C 不需要 RCC，只有 SPI 需要'
    ],
    answer: 0,
    explanation: '复用引脚的 GPIO 时钟和外设本体时钟是两件事。I2C1 在 F1 中通常挂 APB1，漏开 I2C1 时钟会导致外设寄存器配置无效。',
    tags: ['I2C', 'RCC', '外设时钟']
  }),
  q({
    id: 's015',
    chapter: 'RCC 时钟树',
    knowledgeId: 'stm32-03-04-08',
    topic: 'Flash 等待周期与主频关系',
    type: 'missing_step',
    difficulty: '进阶',
    question: '把系统主频提升到较高频率前，通常还要配置哪一项？',
    code: 'RCC_PLLConfig(RCC_PLLSource_HSE_Div1, RCC_PLLMul_9);\nRCC_SYSCLKConfig(RCC_SYSCLKSource_PLLCLK);',
    options: [
      '按主频和电压配置 Flash 等待周期',
      '把所有 GPIO 改成开漏输出',
      '关闭 SysTick 中断',
      '删除启动文件'
    ],
    answer: 0,
    explanation: 'Flash 访问速度跟不上高主频时，需要配置合适等待周期。很多标准库系统时钟模板会在升频前处理 Flash latency，这是稳定运行的基础条件之一。',
    tags: ['Flash latency', '主频', 'RCC']
  }),
  q({
    id: 's016',
    chapter: 'RCC 时钟树',
    knowledgeId: 'stm32-03-04-07',
    topic: 'RTC 为什么常用 LSE',
    type: 'concept',
    difficulty: '基础',
    question: 'RTC 常使用 LSE 32.768kHz 晶振的主要原因是什么？',
    options: [
      'LSE 适合低功耗、长期计时，频率也方便分频得到 1Hz',
      'LSE 是最高速时钟，适合驱动 CPU 主频',
      'LSE 只能给 USART 使用',
      'RTC 使用 LSE 后就不需要备份域'
    ],
    answer: 0,
    explanation: 'RTC 关注长期计时和低功耗，32.768kHz 晶振常用于手表类计时，分频方便。它不是用来跑高性能主频的时钟源。',
    tags: ['RTC', 'LSE', '低功耗']
  })
]

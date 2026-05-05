const q = require('./create-question')

module.exports = [
  q({
    id: 's093',
    chapter: 'STM32 面试高频专题',
    knowledgeId: 'stm32-28-01-01',
    topic: '外设初始化顺序',
    type: 'interview',
    difficulty: '面试',
    question: '面试官问“标准库点亮一个 LED 的初始化顺序”，最完整的回答是哪项？',
    options: [
      '开 GPIO 时钟，配置 GPIO 模式/速度/引脚，再调用 GPIO_SetBits 或 ResetBits 控制电平',
      '直接写 while(1)，硬件会自动点亮',
      '只配置 NVIC，不需要 GPIO',
      '先调用 printf，再配置启动文件'
    ],
    answer: 0,
    explanation: '这类题考的是 SPL 外设初始化套路：RCC 时钟、GPIO_InitTypeDef 填字段、GPIO_Init、生效后再操作输出。顺序漏时钟是最常见问题。',
    tags: ['面试', 'GPIO', '初始化顺序']
  }),
  q({
    id: 's094',
    chapter: 'STM32 面试高频专题',
    knowledgeId: 'stm32-28-02-03',
    topic: '中断与轮询取舍',
    type: 'interview',
    difficulty: '面试',
    question: 'USART 接收是用轮询、中断还是 DMA，最合理的选择依据是什么？',
    options: [
      '看数据速率、实时性、CPU 占用、协议帧长度和丢包容忍度',
      '所有项目必须只用轮询',
      '所有项目必须只用 DMA',
      '只由变量名决定'
    ],
    answer: 0,
    explanation: '低速简单命令可轮询，高速或异步接收常用中断环形缓冲，连续大吞吐可用 DMA。面试回答要结合场景而不是背单一答案。',
    tags: ['面试', 'USART', 'DMA', '中断']
  }),
  q({
    id: 's095',
    chapter: 'STM32 面试高频专题',
    knowledgeId: 'stm32-28-03-04',
    topic: 'HardFault 排查',
    type: 'scenario_code',
    difficulty: '面试',
    question: '下面代码在 STM32 上可能触发 HardFault，最优先怀疑什么？',
    code: 'uint32_t *p = (uint32_t *)0x20000001;\n*p = 0x12345678;',
    options: [
      '地址非 4 字节对齐，某些内核或配置下非对齐访问会异常',
      '0x12345678 不是合法整数',
      'uint32_t 不能用于 SRAM',
      '指针类型转换一定会自动修正地址'
    ],
    answer: 0,
    explanation: 'C 代码里的地址访问还要符合 Cortex-M 对齐和总线规则。HardFault 排查要看异常寄存器、访问地址、栈回溯和具体内核支持情况。',
    tags: ['面试', 'HardFault', '对齐']
  }),
  q({
    id: 's096',
    chapter: 'STM32 面试高频专题',
    knowledgeId: 'stm32-28-04-02',
    topic: 'volatile 与寄存器',
    type: 'fill_blank',
    difficulty: '面试',
    question: '定义内存映射寄存器指针时，空白处最适合填什么？',
    code: '#define GPIOA_ODR_ADDR 0x4001080Cu\n#define GPIOA_ODR (*(/* ____ */ uint32_t *)GPIOA_ODR_ADDR)',
    options: [
      'volatile',
      'const',
      'static',
      'extern'
    ],
    answer: 0,
    explanation: '硬件寄存器可能被硬件或其他上下文改变，访问不能被编译器随意缓存或删除。volatile 表达的是可见性约束，但不保证原子性。',
    tags: ['面试', 'volatile', '寄存器']
  }),
  q({
    id: 's097',
    chapter: 'STM32 面试高频专题',
    knowledgeId: 'stm32-28-05-01',
    topic: 'I2C 能挂多少设备',
    type: 'interview',
    difficulty: '面试',
    question: '被问到“I2C 最多能挂多少个从机和多少个主机”时，哪种回答更专业？',
    options: [
      '理论受地址空间影响，7 位地址约 128 个编码但有保留；主机也可多主，但实际受地址冲突、总线电容、上拉、速率和仲裁设计限制',
      '固定只能挂 1 个从机和 1 个主机',
      '固定能挂 65535 个从机，和硬件无关',
      '从机数量只由 C 数组长度决定'
    ],
    answer: 0,
    explanation: 'I2C 支持多从机，也有多主机制，但工程限制很多。面试要区分理论协议能力和实际板级设计限制，不能只背一个绝对数字。',
    tags: ['面试', 'I2C', '多主多从']
  }),
  q({
    id: 's098',
    chapter: 'STM32 面试高频专题',
    knowledgeId: 'stm32-28-06-03',
    topic: '定时器时间计算',
    type: 'calculation',
    difficulty: '面试',
    question: 'TIM 时钟 84MHz，希望 1kHz 更新事件。下面哪组 PSC/ARR 可行？',
    code: 'update = TIMCLK / ((PSC + 1) * (ARR + 1));',
    options: [
      'PSC=83，ARR=999',
      'PSC=84，ARR=1000',
      'PSC=0，ARR=84',
      'PSC=999，ARR=83'
    ],
    answer: 0,
    explanation: '84MHz / ((83+1)*(999+1)) = 84MHz / 84000 = 1000Hz。做 TIM 题要始终记住 PSC 和 ARR 都是加 1 后参与计算。',
    tags: ['面试', 'TIM', '计算']
  }),
  q({
    id: 's099',
    chapter: 'STM32 面试高频专题',
    knowledgeId: 'stm32-28-07-02',
    topic: 'Bootloader 跳转 App',
    type: 'missing_step',
    difficulty: '面试',
    question: 'Bootloader 跳转 App 前，下面流程还必须重点确认什么？',
    code: 'uint32_t app_sp = *(__IO uint32_t *)APP_ADDR;\nuint32_t app_reset = *(__IO uint32_t *)(APP_ADDR + 4);\n((void (*)(void))app_reset)();',
    options: [
      '检查栈顶地址合法，设置 MSP，必要时关闭中断并重定位向量表',
      '直接跳转即可，不需要管栈和中断',
      '把 APP_ADDR 改成任意奇数',
      '先打开所有外设时钟'
    ],
    answer: 0,
    explanation: 'Bootloader 跳转要处理 MSP、向量表、中断状态、外设复位和 App 有效性。只调用复位入口容易因为栈或中断向量不对而 HardFault。',
    tags: ['面试', 'Bootloader', '向量表']
  }),
  q({
    id: 's100',
    chapter: 'STM32 面试高频专题',
    knowledgeId: 'stm32-28-08-01',
    topic: '标准库与寄存器关系',
    type: 'concept',
    difficulty: '面试',
    question: '本项目要求使用 SPL 标准外设库时，下面哪项理解最准确？',
    options: [
      '使用 GPIO_Init、RCC_APB2PeriphClockCmd、USART_Init 等标准库接口，同时理解它们最终配置的是外设寄存器',
      '标准库会自动推导所有硬件连接，所以不需要看原理图',
      '标准库函数名只是一层注释，不会影响寄存器配置',
      '只要 main 函数能运行，外设时钟和引脚复用都可以忽略'
    ],
    answer: 0,
    explanation: 'SPL 的价值是把寄存器配置封装成结构体和函数，但不是替代硬件理解。外设时钟、GPIO 模式、复用关系和中断配置仍要按参考手册和原理图确认。',
    tags: ['面试', 'SPL', '寄存器']
  })
]

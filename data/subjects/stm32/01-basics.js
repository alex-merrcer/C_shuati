const q = require('./create-question')

module.exports = [
  q({
    id: 's001',
    chapter: 'STM32 与标准库工程基础',
    knowledgeId: 'stm32-01-01-01',
    topic: 'STM32 是什么',
    type: 'concept',
    difficulty: '基础',
    question: '用标准外设库学习 STM32 时，下面哪句话最准确？',
    options: [
      'STM32 是基于 ARM Cortex-M 等内核的一系列 MCU，标准库是访问片上外设的一层 C 接口',
      'STM32 标准库会自动生成所有业务代码，所以不需要理解寄存器',
      'STM32 只能使用图形化配置工具，标准外设库已经不能编译',
      'STM32 是一种操作系统，GPIO、USART 都属于系统调用'
    ],
    answer: 0,
    explanation: 'STM32 是微控制器系列，SPL 标准外设库把寄存器操作封装成结构体和函数，但底层仍然对应具体外设寄存器。理解库函数和寄存器的关系，调试外设问题时会更稳。',
    tags: ['STM32', 'SPL', 'MCU']
  }),
  q({
    id: 's002',
    chapter: 'STM32 与标准库工程基础',
    knowledgeId: 'stm32-01-02-05',
    topic: '标准库外设初始化流程',
    type: 'missing_step',
    difficulty: '基础',
    question: '下面 GPIO 初始化代码一直不能点亮 LED，最可能少了哪一步？',
    code: 'GPIO_InitTypeDef GPIO_InitStructure;\nGPIO_InitStructure.GPIO_Pin = GPIO_Pin_5;\nGPIO_InitStructure.GPIO_Mode = GPIO_Mode_Out_PP;\nGPIO_InitStructure.GPIO_Speed = GPIO_Speed_50MHz;\nGPIO_Init(GPIOA, &GPIO_InitStructure);',
    options: [
      '在 GPIO_Init 之前使能 GPIOA 所在总线的外设时钟',
      '把 GPIO_Mode_Out_PP 改成 GPIO_Mode_AIN',
      '在 main 函数前调用 GPIO_SetBits',
      '删除 GPIO_Speed 字段'
    ],
    answer: 0,
    explanation: 'SPL 初始化外设前通常要先打开对应外设时钟。F1 中 GPIOA 挂在 APB2，总线时钟没开时写配置寄存器不会让端口真正工作。',
    tags: ['GPIO', 'RCC', '初始化流程']
  }),
  q({
    id: 's003',
    chapter: 'STM32 与标准库工程基础',
    knowledgeId: 'stm32-01-03-05',
    topic: 'stm32xxx_conf.h 标准库配置文件',
    type: 'bug_fix',
    difficulty: '易错',
    question: '标准库工程中调用 GPIO_Init 报函数未声明，下面判断最稳妥的是哪项？',
    code: '#include "stm32f10x.h"\n\nint main(void) {\n    GPIO_Init(GPIOA, 0);\n}',
    options: [
      '可能没有在 stm32f10x_conf.h 中启用或包含对应外设头文件，也可能工程未加入 stm32f10x_gpio.c',
      'GPIO_Init 不是标准外设库函数，SPL 工程里永远不能使用',
      '只要包含 stdio.h 就能声明 GPIO_Init',
      '把 main 改成 void main 即可'
    ],
    answer: 0,
    explanation: 'SPL 工程不仅要有总头文件，还要通过配置头文件包含外设头，并把对应 .c 文件加入工程。函数未声明和链接不到定义是两个阶段的问题，排查时要分开看。',
    tags: ['工程结构', '头文件', 'SPL']
  }),
  q({
    id: 's004',
    chapter: 'STM32 与标准库工程基础',
    knowledgeId: 'stm32-01-03-01',
    topic: 'startup 启动文件',
    type: 'concept',
    difficulty: '基础',
    question: '启动文件在 STM32 标准库工程中的核心作用是什么？',
    options: [
      '提供中断向量表和复位入口，完成进入 C 运行环境前的基础启动流程',
      '负责配置所有 GPIO 的输出电平',
      '负责把所有外设时钟打开',
      '负责实现 printf 的串口重定向'
    ],
    answer: 0,
    explanation: '启动文件通常包含向量表、Reset_Handler、堆栈初值等内容。它把程序从复位入口带到 SystemInit 和 main，而不是替业务代码初始化所有外设。',
    tags: ['启动文件', '向量表']
  }),
  q({
    id: 's005',
    chapter: 'STM32 与标准库工程基础',
    knowledgeId: 'stm32-01-02-04',
    topic: '标准库初始化结构体思想',
    type: 'bug_fix',
    difficulty: '易错',
    question: '这段初始化结构体代码的主要风险是什么？',
    code: 'GPIO_InitTypeDef init;\ninit.GPIO_Pin = GPIO_Pin_0;\ninit.GPIO_Mode = GPIO_Mode_Out_PP;\nGPIO_Init(GPIOA, &init);',
    options: [
      'init 没有完整初始化，GPIO_Speed 等字段可能是随机值',
      'GPIO_InitTypeDef 只能定义成全局变量',
      'GPIO_Pin_0 不能用于输出',
      'GPIO_Init 的第二个参数必须传 NULL'
    ],
    answer: 0,
    explanation: 'SPL 的初始化结构体字段要完整赋值，或者先调用对应 StructInit 函数。局部变量未初始化会带入不确定配置，外设表现可能很怪。',
    tags: ['初始化结构体', '局部变量']
  }),
  q({
    id: 's006',
    chapter: 'STM32 与标准库工程基础',
    knowledgeId: 'stm32-01-01-08',
    topic: '引脚复用与外设功能关系',
    type: 'scenario_code',
    difficulty: '进阶',
    question: 'USART1 已经初始化但 TX 引脚没有波形，下面 GPIO 配置最可能的问题是什么？',
    code: 'GPIO_InitStructure.GPIO_Pin = GPIO_Pin_9;\nGPIO_InitStructure.GPIO_Mode = GPIO_Mode_Out_PP;\nGPIO_InitStructure.GPIO_Speed = GPIO_Speed_50MHz;\nGPIO_Init(GPIOA, &GPIO_InitStructure);',
    options: [
      'USART TX 引脚应配置为复用推挽输出，而不是普通推挽输出',
      'USART TX 引脚必须配置为模拟输入',
      'GPIO_Speed 只能写 2MHz',
      'PA9 不能作为 USART1_TX'
    ],
    answer: 0,
    explanation: '外设占用引脚时，GPIO 模式要和复用功能匹配。F1 标准库中 USART TX 常用 GPIO_Mode_AF_PP，普通输出不会把 USART 外设信号接到引脚上。',
    tags: ['引脚复用', 'USART', 'GPIO']
  }),
  q({
    id: 's007',
    chapter: 'STM32 与标准库工程基础',
    knowledgeId: 'stm32-01-03-10',
    topic: '头文件防重复包含',
    type: 'fill_blank',
    difficulty: '基础',
    question: '下面用户 bsp_led.h 的空白处最适合填什么？',
    code: '#ifndef __BSP_LED_H\n#define __BSP_LED_H\n\nvoid LED_Init(void);\n\n/* ____ */',
    options: [
      '#endif',
      '#include "bsp_led.h"',
      '#define __BSP_LED_H',
      'while (1)'
    ],
    answer: 0,
    explanation: '头文件保护宏需要用 #ifndef/#define/#endif 包起来，防止重复包含导致重复声明或类型重定义。结尾缺的是 #endif。',
    tags: ['头文件', '工程组织']
  }),
  q({
    id: 's008',
    chapter: 'STM32 与标准库工程基础',
    knowledgeId: 'stm32-01-02-03',
    topic: '标准库函数命名规律',
    type: 'concept',
    difficulty: '基础',
    question: '看到 RCC_APB2PeriphClockCmd(GPIO 时钟使能相关函数) 这种 SPL 函数名，最合理的理解是什么？',
    options: [
      '前缀通常对应外设模块，函数名描述操作对象和动作',
      '所有 SPL 函数都必须返回 int',
      '函数名中带 Cmd 说明它只能在中断里调用',
      'APB2 说明这个函数会配置内核异常优先级'
    ],
    answer: 0,
    explanation: 'SPL 命名通常以外设模块为前缀，例如 RCC、GPIO、USART。Cmd 一类函数常用于使能或失能某功能，但仍要看参数和手册说明。',
    tags: ['SPL', '函数命名']
  })
]

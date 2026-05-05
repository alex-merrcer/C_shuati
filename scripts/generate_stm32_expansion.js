const fs = require('fs')
const path = require('path')

const rootDir = path.join(__dirname, '..')
const treePath = path.join(rootDir, 'stm32_standard_library_knowledge_tree_v1_1_choice_only.md')
const outputPath = path.join(rootDir, 'data', 'subjects', 'stm32', '90-expanded.js')

const targetCounts = {
  concept: 761,
  scenario: 84,
  bug_fix: 29,
  calculation: 24,
  code_read: 1,
  missing_step: 1
}

const bannedPattern = /\bHAL\b|\bLL\b|CubeMX|USB|传感器模块/

function parseKnowledgeTree() {
  const text = fs.readFileSync(treePath, 'utf8')
  const leaves = []
  let chapter = ''

  text.split(/\r?\n/).forEach(function (line) {
    const chapterMatch = /^# (\d+) (.+)$/.exec(line)
    if (chapterMatch) {
      chapter = chapterMatch[2].trim()
      return
    }

    const leafMatch = /^### (\d+)\.(\d+)\.(\d+) (.+)$/.exec(line)
    if (leafMatch && chapter) {
      const title = leafMatch[4].trim()
      const id = 'stm32-' + pad(leafMatch[1]) + '-' + pad(leafMatch[2]) + '-' + pad(leafMatch[3])

      if (!bannedPattern.test(title) && !bannedPattern.test(chapter)) {
        leaves.push({
          chapter: chapter,
          knowledgeId: id,
          topic: title
        })
      }
    }
  })

  return leaves
}

function pad(value) {
  return String(value).length < 2 ? '0' + value : String(value)
}

function sanitize(value) {
  return String(value || '')
    .replace(/\bHAL\b/g, '其他封装库')
    .replace(/\bLL\b/g, '底层封装库')
    .replace(/CubeMX/g, '图形化配置工具')
    .replace(/USB/g, '高速外设')
    .replace(/传感器模块/g, '外部模块')
}

function categoryFor(item) {
  const text = item.chapter + ' ' + item.topic

  if (/RCC|时钟|PLL|HSE|HSI|LSE|LSI|SYSCLK|HCLK|PCLK|SystemCoreClock|Flash 等待/.test(text)) return 'rcc'
  if (/GPIO|引脚|推挽|开漏|上拉|下拉|浮空|复用|BSRR|ODR|IDR/.test(text)) return 'gpio'
  if (/NVIC|中断优先级|抢占|子优先级|异常|HardFault|SysTick|PendSV|SVCall|Handler/.test(text)) return 'nvic'
  if (/EXTI|外部中断|触发|边沿|AFIO/.test(text)) return 'exti'
  if (/SysTick|延时|滴答/.test(text)) return 'systick'
  if (/TIM|定时器|PWM|输入捕获|输出比较|编码器|PSC|ARR|CCR|刹车/.test(text)) return 'tim'
  if (/USART|UART|串口|波特率|TXE|TC|RXNE|ORE|帧错误/.test(text)) return 'usart'
  if (/DMA|搬运|循环模式|地址递增|BufferSize|半传输/.test(text)) return 'dma'
  if (/ADC|采样|分辨率|参考电压|校准|模拟输入|转换/.test(text)) return 'adc'
  if (/DAC/.test(text)) return 'dac'
  if (/I2C|ACK|NACK|SDA|SCL|仲裁|从机|主机|7 位地址|总线忙/.test(text)) return 'i2c'
  if (/SPI|CPOL|CPHA|MOSI|MISO|SCK|片选|全双工/.test(text)) return 'spi'
  if (/CAN|FDCAN|Bus Off|过滤器|仲裁|ID|位时序/.test(text)) return 'can'
  if (/SD|SDIO|FatFs|f_mount|f_open|f_write|扇区|文件系统/.test(text)) return 'fatfs'
  if (/RTC|备份域|BKP|闹钟/.test(text)) return 'rtc'
  if (/Flash|擦写|页|扇区|寿命|掉电|存储/.test(text)) return 'flash'
  if (/IWDG|WWDG|看门狗|喂狗|窗口/.test(text)) return 'watchdog'
  if (/低功耗|Stop|Standby|Sleep|唤醒/.test(text)) return 'lowpower'
  if (/Bootloader|固件|升级|跳转|MSP|VTOR|向量表/.test(text)) return 'bootloader'
  if (/链接|内存布局|栈|堆|启动|分散加载|section/.test(text)) return 'linker'
  if (/标准外设库|SPL|StructInit|InitTypeDef|Cmd|DeInit/.test(text)) return 'spl'
  if (/寄存器|位带|内存映射|volatile|地址/.test(text)) return 'register'
  if (/FreeRTOS|RTOS|任务|队列|信号量|互斥|FromISR|调度/.test(text)) return 'rtos'
  if (/调试|下载|SWD|JTAG|断点|Fault|故障/.test(text)) return 'debug'
  if (/协议|CRC|字节序|帧|校验|通信/.test(text)) return 'protocol'
  if (/Cortex|内核|MSP|PSP|CONTROL|xPSR|特权/.test(text)) return 'cortex'

  return 'project'
}

const profiles = {
  rcc: {
    correct: '先确认时钟源、PLL、AHB/APB 分频和外设时钟使能，标准库函数只是把这些关系写入 RCC 等寄存器',
    wrong: ['只要 CPU 能运行，所有外设时钟都会自动打开', '外设异常时优先改业务算法，不需要检查时钟树', 'SystemCoreClock 永远自动等于真实主频'],
    explain: 'RCC 类问题通常不是单个函数名问题，而是时钟源、分频、总线挂载和软件变量是否一致。错误选项把外设时钟、系统时钟和软件变量混成了一件事。'
  },
  gpio: {
    correct: 'GPIO 模式必须和外部电路及复用外设匹配，例如推挽、开漏、上拉下拉、模拟输入和复用输出不能随意替换',
    wrong: ['所有 GPIO 都配置成推挽输出最安全', '输入引脚不需要确定默认电平', '复用外设会自动忽略 GPIO 模式'],
    explain: 'GPIO 的关键是电气连接和引脚复用。错误选项忽略了开漏总线、浮空输入和复用功能对模式的要求。'
  },
  nvic: {
    correct: '要同时理解异常入口、NVIC 通道使能、优先级分组、抢占优先级和中断标志清除之间的关系',
    wrong: ['优先级数值越大一定越先执行', '只配置外设中断源就一定能进入服务函数', '中断服务函数里适合放长延时和阻塞打印'],
    explain: '中断题常考外设侧请求和内核侧 NVIC 的配合。错误选项分别混淆优先级含义、漏掉 NVIC 或忽略 ISR 实时性。'
  },
  exti: {
    correct: 'EXTI 要同时配置 GPIO 输入、EXTI 线映射、触发边沿、NVIC 通道，并在服务函数中清除挂起位',
    wrong: ['任意两个同编号引脚都能同时独立映射到同一 EXTI 线', '只配置边沿触发就不需要 NVIC', '不清 pending 位也不会重复进中断'],
    explain: 'EXTI 横跨 GPIO、映射控制、EXTI 控制器和 NVIC。错误选项都是工程里常见漏项。'
  },
  systick: {
    correct: 'SysTick 是内核定时器，延时精度依赖内核时钟、重装载值和中断处理时间',
    wrong: ['SysTick 与系统时钟无关', 'SysTick 只能给 GPIO 使用', '阻塞延时适合放在所有中断服务函数中'],
    explain: 'SysTick 常用于系统节拍或简单延时。错误选项忽略了时钟来源、使用范围和 ISR 中阻塞的风险。'
  },
  tim: {
    correct: '定时器要把 TIM 时钟、PSC、ARR、CCR、计数模式和通道输出关系一起分析',
    wrong: ['PSC 和 ARR 的寄存器值不需要加 1 参与计算', 'PWM 占空比只由 GPIO 输出速度决定', 'APB 分频不会影响定时器时钟'],
    explain: 'TIM/PWM 面试最常考计算和边界。错误选项分别忽略了加一规则、CCR 的意义和 APB 分频对 TIMCLK 的影响。'
  },
  usart: {
    correct: 'USART 要同时匹配波特率、帧格式、GPIO 复用、状态标志和接收缓冲策略',
    wrong: ['TXE 和 TC 表示完全相同的发送状态', 'RXNE 置位后可以长时间不读数据寄存器', '波特率误差不会导致乱码'],
    explain: 'USART 问题常落在 TXE/TC、RXNE/ORE、波特率误差和 GPIO 复用。错误选项都对应真实项目里的典型坑。'
  },
  dma: {
    correct: 'DMA 配置要明确方向、源/目的地址、地址递增、数据宽度、长度、模式和缓冲区生命周期',
    wrong: ['DMA 会自动知道 C 字符串实际长度', '局部数组作为 DMA 缓冲区总是安全', '只打开 DMA 通道就不需要外设侧 DMA 请求'],
    explain: 'DMA 减少 CPU 搬运，但不会替你管理对象生命周期和协议长度。错误选项忽略了异步传输和外设请求。'
  },
  adc: {
    correct: 'ADC 结果受分辨率、参考电压、采样时间、源阻抗、时钟和校准影响',
    wrong: ['ADC 时钟越高采样越准', '任何 GPIO 模式都适合模拟采样', '12 位 ADC 的结果天然就是电压值'],
    explain: 'ADC 是模拟外设，配置和硬件条件同样重要。错误选项把数字接口思维套到了模拟采样上。'
  },
  dac: {
    correct: 'DAC 输出要关注参考电压、输出缓冲、触发源和负载能力，数字值只决定理想比例',
    wrong: ['DAC 可以直接驱动任意大功率负载', 'DAC 输出与参考电压无关', 'DAC 不需要模拟引脚配置'],
    explain: 'DAC 题要把数字配置和模拟输出能力一起看。错误选项忽略了参考电压和负载限制。'
  },
  i2c: {
    correct: 'I2C 依赖开漏上拉、地址匹配、ACK/NACK、时序状态和总线释放，理论多主多从还受电容和地址限制',
    wrong: ['7 位地址表示最多只能挂 7 个从机', 'I2C 高电平由推挽强推才正确', '主机读最后一个字节仍必须一直 ACK'],
    explain: 'I2C 面试常考 7 位地址、上拉、ACK/NACK、多主仲裁和 BUSY。错误选项混淆了地址位数和实际总线约束。'
  },
  spi: {
    correct: 'SPI 要匹配 CPOL/CPHA、位序、片选时序和主机提供时钟的全双工机制',
    wrong: ['SPI 从机不需要时钟也能主动发送数据', '多个从机片选可以同时拉低', 'CPOL/CPHA 不一致也不会影响采样'],
    explain: 'SPI 简单但很容易错在模式和片选。错误选项会导致错位采样或 MISO 总线冲突。'
  },
  can: {
    correct: 'CAN 通过显性/隐性位仲裁，ID 数值越小通常优先级越高，并依赖位时序、过滤器和错误状态管理',
    wrong: ['CAN 仲裁会破坏获胜节点正在发送的帧', '过滤器只影响发送不影响接收', 'Bus Off 后节点仍能正常发帧'],
    explain: 'CAN 的重点是非破坏仲裁、ID 优先级、过滤器和错误状态。错误选项忽略了 CAN 控制器的核心机制。'
  },
  fatfs: {
    correct: 'FatFs 要先保证底层块设备读写可靠，再挂载文件系统，并检查每次文件操作返回值和实际字节数',
    wrong: ['f_write 成功与否不用看返回值', '文件系统不受掉电影响', '扇区大小和缓冲区对齐永远无关'],
    explain: 'FatFs 题重点不是背 API，而是底层介质、挂载、返回值、f_sync 和掉电一致性。错误选项忽视了文件系统的失败路径。'
  },
  rtc: {
    correct: 'RTC 常依赖 LSE/LSI 和备份域，掉电保持能力取决于 VBAT、备份域和时钟源',
    wrong: ['RTC 一定由高速主频驱动', '进入低功耗后 RTC 必然停止', '备份域和普通 SRAM 完全一样'],
    explain: 'RTC 关注长期计时和低功耗保持。错误选项混淆了主系统时钟、备份域和低功耗行为。'
  },
  flash: {
    correct: '片内 Flash 通常要先擦除页或扇区再写入，并考虑写入粒度、寿命、锁保护和掉电一致性',
    wrong: ['Flash 可以像 SRAM 一样任意字节反复覆盖', '擦写寿命无限', '写配置时不需要校验或备份'],
    explain: 'Flash 存储题常考擦除粒度、寿命和掉电风险。错误选项把非易失存储当成普通内存使用。'
  },
  watchdog: {
    correct: '看门狗用于在软件失控时复位系统，IWDG 更独立，WWDG 强调窗口时间约束',
    wrong: ['喂狗越频繁越一定正确', '看门狗只负责提高运行速度', '开启看门狗后无需设计任务健康检查'],
    explain: '看门狗不是装饰功能。错误选项忽略了窗口看门狗过早喂狗也可能违规，以及系统健康监测的重要性。'
  },
  lowpower: {
    correct: '低功耗模式要区分 Sleep、Stop、Standby 的时钟、SRAM 保持、唤醒源和恢复流程',
    wrong: ['所有低功耗模式唤醒后都从原语句继续且时钟不变', 'Standby 和普通延时没有区别', '唤醒源不需要提前配置'],
    explain: '低功耗题常考模式差异和唤醒后的时钟恢复。错误选项把不同低功耗等级混为一谈。'
  },
  bootloader: {
    correct: 'Bootloader 跳转应用前要校验栈顶和复位入口，设置 MSP，处理向量表和中断状态',
    wrong: ['只要函数指针跳过去就一定可靠', '跳转前不需要管正在开的外设和中断', '应用向量表位置不影响中断'],
    explain: 'Bootloader 面试最容易漏 MSP、VTOR、关闭中断和外设状态。错误选项只看到了函数调用，没有看到启动上下文。'
  },
  linker: {
    correct: '链接脚本或分散加载文件决定代码、只读数据、已初始化数据、BSS、堆和栈的地址布局',
    wrong: ['所有变量都一定放在 Flash 中', '栈和堆大小不会影响运行稳定性', '中断向量表位置与链接配置无关'],
    explain: '链接与内存布局决定程序如何落到 Flash/SRAM。错误选项忽略了运行时内存和启动文件的配合。'
  },
  spl: {
    correct: 'SPL 初始化通常按开时钟、填 InitTypeDef、调用 Init、配置中断或功能使能的顺序展开',
    wrong: ['InitTypeDef 局部变量不赋完整字段也一定安全', '外设初始化不需要对应源文件加入工程', 'Cmd 类函数只会影响注释不会影响硬件'],
    explain: '标准库考点是流程和结构体字段。错误选项对应未初始化结构体、工程文件缺失和功能未使能。'
  },
  register: {
    correct: '寄存器访问要理解内存映射、volatile、位操作副作用和读改写风险',
    wrong: ['硬件寄存器可以当普通局部变量缓存', '读状态寄存器永远没有副作用', '所有寄存器位都可以随意写 1'],
    explain: '寄存器题要看硬件语义。错误选项忽视 volatile、清标志方式和保留位写入风险。'
  },
  rtos: {
    correct: 'RTOS 题要区分任务、队列、信号量、互斥锁、优先级和中断上下文 API',
    wrong: ['中断里可以随便调用阻塞 API', '互斥锁和二值信号量在所有场景完全等价', '任务栈大小不会导致 HardFault'],
    explain: 'FreeRTOS 面试常考 FromISR、优先级反转、队列拷贝语义和任务栈。错误选项忽略了上下文限制。'
  },
  debug: {
    correct: '调试故障要结合复位原因、Fault 状态寄存器、栈回溯、外设标志和最小复现路径',
    wrong: ['HardFault 只能靠猜测解决', '断点越多实时问题越容易复现', '下载成功就说明时钟和外设配置都正确'],
    explain: '调试题考排查方法。错误选项没有区分编译、下载、运行和外设状态。'
  },
  protocol: {
    correct: '协议处理要明确帧边界、长度字段、字节序、校验和超时恢复',
    wrong: ['只要收到第一个字节就能认为整帧有效', '大小端差异不会影响多字节字段', 'CRC 通过后就不需要检查长度'],
    explain: '通信协议题强调边界和异常路径。错误选项忽略了长度、字节序和校验的组合关系。'
  },
  cortex: {
    correct: 'Cortex-M 题要区分 Thread/Handler 模式、MSP/PSP、异常返回和特权级',
    wrong: ['所有异常都在 Thread 模式运行', 'MSP 和 PSP 永远指向同一块栈', 'EXC_RETURN 只是普通函数返回地址'],
    explain: '内核基础题考执行模式和栈。错误选项把异常机制当成普通 C 函数调用。'
  },
  project: {
    correct: '工程能力题要把初始化顺序、模块边界、错误处理、资源所有权和可测试性一起考虑',
    wrong: ['只要单次演示通过就不用处理异常路径', '所有驱动都写进 main.c 更容易维护', '接口不需要说明调用上下文和时序限制'],
    explain: '综合工程题看长期维护和异常路径。错误选项只关注短期跑通，不适合真实项目。'
  }
}

function profileFor(item) {
  return profiles[categoryFor(item)] || profiles.project
}

function pickDifficulty(type, index) {
  if (type === 'calculation' || type === 'bug_fix') return index % 3 === 0 ? '面试' : '进阶'
  if (type === 'scenario') return index % 4 === 0 ? '面试' : '进阶'
  if (type === 'code_read' || type === 'missing_step') return '易错'
  return index % 5 === 0 ? '面试' : (index % 3 === 0 ? '进阶' : '基础')
}

function makeConcept(item, id, index) {
  const p = profileFor(item)
  const stems = [
    '面试问到「' + item.topic + '」时，哪项理解最准确？',
    '关于 STM32 SPL 工程中的「' + item.topic + '」，哪项说法更稳妥？',
    '排查「' + item.topic + '」相关问题时，优先确认哪一点？',
    '配置或解释「' + item.topic + '」时，哪项原则更符合真实项目？'
  ]

  return buildQuestion(item, id, 'concept', stems[index % stems.length], '', [
    p.correct,
    p.wrong[0],
    p.wrong[1],
    p.wrong[2]
  ], p.explain, index)
}

function makeScenario(item, id, index) {
  const p = profileFor(item)
  const question = '项目中遇到「' + item.topic + '」相关现象时，哪种判断最符合 STM32 SPL 排查思路？'
  const explain = p.explain + ' 场景题不只问定义，还要把原理图、时钟、外设状态和软件配置顺序一起核对。'

  return buildQuestion(item, id, 'scenario', question, '', [
    p.correct,
    p.wrong[(index + 1) % 3],
    p.wrong[(index + 2) % 3],
    p.wrong[index % 3]
  ], explain, index)
}

function makeBugFix(item, id, index) {
  const p = profileFor(item)
  const question = '围绕「' + item.topic + '」排错时，下面哪项最像真实项目里的主要问题？'
  const explain = p.explain + ' 改错题要先定位导致外设不工作、数据异常或系统卡死的根因，而不是只改表面参数。'

  return buildQuestion(item, id, 'bug_fix', question, '', [
    p.correct,
    p.wrong[2],
    p.wrong[0],
    p.wrong[1]
  ], explain, index)
}

const calculations = [
  ['RCC 时钟树', 'stm32-calc-rcc-timclk', 'APB 分频对定时器时钟的影响', 'HCLK=72MHz，APB1 分频为 2，TIM2 挂在 APB1。TIM2 时钟通常是多少？', ['72MHz', '36MHz', '18MHz', '144MHz'], 'APB 分频不为 1 时，很多 STM32 定时器时钟为 PCLK 的 2 倍。PCLK1=36MHz，因此 TIM2 通常为 72MHz，仍要以具体参考手册为准。'],
  ['定时器 TIM 基础与进阶', 'stm32-calc-tim-1khz', 'TIM 更新频率计算', 'TIMCLK=84MHz，PSC=83，ARR=999，更新频率是多少？', ['1kHz', '10kHz', '84kHz', '100Hz'], '更新频率 = 84MHz / ((83+1)*(999+1)) = 1000Hz。PSC 和 ARR 都要加 1 是常见面试坑。'],
  ['定时器 TIM 基础与进阶', 'stm32-calc-pwm-duty', 'PWM 占空比计算', 'ARR=999，CCR=250，PWM 高电平有效时占空比约是多少？', ['25%', '50%', '2.5%', '100%'], '一个周期约 1000 个计数，CCR=250 约占四分之一。实际高低电平含义还受 PWM 模式和极性影响。'],
  ['USART / UART 串口', 'stm32-calc-usart-frame', 'USART 帧时间估算', '115200bps，8N1 格式发送 1 字节通常占多少位时间？', ['约 10 位时间', '约 8 位时间', '约 1 位时间', '约 16 位时间'], '8N1 包含 1 起始位、8 数据位、1 停止位，共约 10 位时间。估算吞吐时不能只看 8 个数据位。'],
  ['I2C', 'stm32-calc-i2c-addr', '7 位 I2C 地址数量', '7 位 I2C 地址理论编码数量是多少？', ['128 个编码，但部分保留且受总线条件限制', '7 个编码', '256 个编码且都可用', '无限多个编码'], '7 位有 2^7=128 个编码，但有保留地址，实际设备数量还受地址冲突、电容、上拉和速率限制。'],
  ['SPI', 'stm32-calc-spi-sck', 'SPI 分频计算', 'SPI 输入时钟 72MHz，分频系数为 16，SCK 约是多少？', ['4.5MHz', '16MHz', '72MHz', '1.125MHz'], '72MHz / 16 = 4.5MHz。还要确认从设备允许的最大 SPI 时钟和模式。'],
  ['ADC', 'stm32-calc-adc-vref', 'ADC 电压换算', '12 位 ADC，Vref=3.3V，原始值 4095 对应理想电压是多少？', ['约 3.3V', '约 1.65V', '约 0V', '约 4.095V'], '12 位满量程通常是 0 到 4095，4095 接近参考电压。实际还受参考源误差和模拟前端影响。'],
  ['ADC', 'stm32-calc-adc-resolution', 'ADC 分辨率', '12 位 ADC 的数字输出一共有多少个量化等级？', ['4096', '1024', '255', '1200'], '12 位表示 2^12=4096 个等级，编码通常是 0 到 4095。'],
  ['CAN / FDCAN', 'stm32-calc-can-id', 'CAN ID 仲裁优先级', '标准 CAN 仲裁中，ID 0x100 和 0x080 同时发送，通常谁优先？', ['0x080', '0x100', '二者随机', 'ID 大的优先'], 'CAN 显性位覆盖隐性位，ID 数值越小通常优先级越高。因此 0x080 优先。'],
  ['Flash 与存储', 'stm32-calc-flash-pages', 'Flash 页数量估算', '每页 1KB，要保存 6KB 参数区，至少需要多少页？', ['6 页', '1 页', '3 页', '8 页固定'], '6KB / 1KB = 6 页。真实工程还要考虑备份页、版本和掉电保护。'],
  ['DMA', 'stm32-calc-dma-buffer', 'DMA 缓冲区长度', 'ADC 扫描 4 个通道，保存 16 轮采样，DMA 缓冲区至少需要多少个 uint16_t 元素？', ['64 个', '16 个', '4 个', '32 个'], '4 通道乘以 16 轮等于 64 个结果。多通道 DMA 要明确结果排列顺序。'],
  ['FreeRTOS / RTOS', 'stm32-calc-rtos-tick', 'RTOS tick 时间', 'FreeRTOS tick rate 为 1000Hz，vTaskDelay(10) 约阻塞多久？', ['约 10ms', '约 10s', '约 1ms', '约 100ms'], '1000Hz 表示 1 tick 约 1ms，10 tick 约 10ms。实际唤醒还受调度和优先级影响。']
]

function makeCalculation(item, id, index) {
  const base = calculations[index % calculations.length]

  return {
    id: id,
    subject: 'stm32',
    chapter: base[0],
    knowledgeId: item.knowledgeId + '-' + id,
    topic: base[2],
    type: 'calculation',
    difficulty: pickDifficulty('calculation', index),
    question: base[3],
    code: '',
    options: base[4],
    answer: 0,
    explanation: base[5],
    tags: ['STM32', 'SPL', base[2]],
    reviewStatus: '待复核'
  }
}

function makeCodeRead(item, id, index) {
  return buildQuestion({
    chapter: 'GPIO 基础与进阶',
    knowledgeId: item.knowledgeId,
    topic: 'BSRR 原子置位'
  }, id, 'code_read', '读下面 SPL 风格 GPIO 操作，哪项判断正确？', 'GPIO_SetBits(GPIOA, GPIO_Pin_5);\nGPIO_ResetBits(GPIOA, GPIO_Pin_6);', [
    '它通过标准库接口对指定引脚置位或复位，底层通常对应 GPIO 位操作寄存器',
    '这两行会重新配置 GPIO 模式',
    '这两行会自动打开 GPIOA 时钟',
    '这两行会修改 NVIC 优先级'
  ], 'GPIO_SetBits/ResetBits 是 SPL 常见 GPIO 输出控制接口，不负责开 RCC 时钟，也不配置 NVIC。错误选项把输出控制和初始化流程混在一起。', index)
}

function makeMissingStep(item, id, index) {
  return buildQuestion({
    chapter: 'Bootloader 与固件升级',
    knowledgeId: item.knowledgeId,
    topic: 'Bootloader 跳转前检查'
  }, id, 'missing_step', 'Bootloader 准备跳转应用前，下面流程最关键还缺哪一步？', 'uint32_t reset = *(__IO uint32_t *)(APP_ADDR + 4);\n((void (*)(void))reset)();', [
    '校验应用栈顶地址，设置 MSP，并处理向量表和中断状态',
    '把所有 GPIO 配成浮空输入即可',
    '先执行一次 ADC 校准即可',
    '把 reset 地址强制加 2 就一定正确'
  ], 'Bootloader 跳转不是普通函数调用。需要保证 MSP、向量表、中断和外设状态都符合应用启动上下文，错误选项只改表面动作。', index)
}

function buildQuestion(item, id, type, question, code, options, explanation, index) {
  const cleanedOptions = options.map(sanitize)
  const cleanedQuestion = sanitize(question)
  const cleanedExplanation = sanitize(explanation)

  return {
    id: id,
    subject: 'stm32',
    chapter: item.chapter,
    knowledgeId: item.knowledgeId + '-' + id,
    topic: item.topic,
    type: type,
    difficulty: pickDifficulty(type, index),
    question: cleanedQuestion,
    code: code || '',
    options: cleanedOptions,
    answer: 0,
    explanation: cleanedExplanation,
    tags: ['STM32', 'SPL', item.topic],
    reviewStatus: '待复核'
  }
}

function getLeafSequence(leaves) {
  const manualBases = getManualKnowledgeBases()
  const byChapter = {}
  const chapterOrder = []

  leaves.filter(function (leaf) {
    return !manualBases[leaf.knowledgeId]
  }).forEach(function (leaf) {
    if (!byChapter[leaf.chapter]) {
      byChapter[leaf.chapter] = []
      chapterOrder.push(leaf.chapter)
    }
    byChapter[leaf.chapter].push(leaf)
  })

  const sequence = []
  const uniqueCursors = {}
  let added = true

  while (sequence.length < totalTarget() && added) {
    added = false

    chapterOrder.forEach(function (chapter) {
      const list = byChapter[chapter]
      const cursor = uniqueCursors[chapter] || 0

      if (sequence.length < totalTarget() && cursor < list.length) {
        sequence.push(list[cursor])
        uniqueCursors[chapter] = cursor + 1
        added = true
      }
    })
  }

  const focusChapters = {
    'RCC 时钟树': 4,
    'GPIO 基础与进阶': 4,
    'NVIC 与中断系统': 4,
    'EXTI 外部中断': 3,
    '定时器 TIM 基础与进阶': 5,
    'USART / UART 串口': 4,
    'DMA': 4,
    'ADC': 4,
    'I2C': 4,
    'SPI': 4,
    'CAN / FDCAN': 4,
    'Flash 与存储': 4,
    'Watchdog 看门狗': 3,
    '低功耗': 3,
    'Bootloader 与固件升级': 4,
    'FreeRTOS / RTOS': 5,
    'STM32 面试高频专题': 5
  }
  const cursors = {}
  while (sequence.length < totalTarget()) {
    chapterOrder.forEach(function (chapter) {
      const weight = focusChapters[chapter] || 2
      const list = byChapter[chapter]
      let cursor = cursors[chapter] || 0

      for (let i = 0; i < weight && sequence.length < totalTarget(); i += 1) {
        sequence.push(list[cursor % list.length])
        cursor += 1
      }

      cursors[chapter] = cursor
    })
  }

  return sequence
}

function getManualKnowledgeBases() {
  const dir = path.join(rootDir, 'data', 'subjects', 'stm32')
  const skip = {
    'create-question.js': true,
    'index.js': true,
    '90-expanded.js': true
  }
  const bases = {}

  fs.readdirSync(dir).forEach(function (file) {
    if (!/\.js$/.test(file) || skip[file]) {
      return
    }

    const fullPath = path.join(dir, file)
    delete require.cache[require.resolve(fullPath)]
    const list = require(fullPath)

    list.forEach(function (question) {
      const match = /stm32-\d{2}-\d{2}-\d{2}/.exec(question.knowledgeId || '')
      if (match) {
        bases[match[0]] = true
      }
    })
  })

  return bases
}

function totalTarget() {
  return Object.keys(targetCounts).reduce(function (sum, key) {
    return sum + targetCounts[key]
  }, 0)
}

function buildTypeList() {
  const list = []
  Object.keys(targetCounts).forEach(function (type) {
    for (let i = 0; i < targetCounts[type]; i += 1) {
      list.push(type)
    }
  })
  return list
}

function createQuestions() {
  const leaves = parseKnowledgeTree()
  const sequence = getLeafSequence(leaves)
  const types = buildTypeList()

  return types.map(function (type, index) {
    const id = 's' + String(index + 101).padStart(3, '0')
    const item = sequence[index]

    if (type === 'scenario') return makeScenario(item, id, index)
    if (type === 'bug_fix') return makeBugFix(item, id, index)
    if (type === 'calculation') return makeCalculation(item, id, index)
    if (type === 'code_read') return makeCodeRead(item, id, index)
    if (type === 'missing_step') return makeMissingStep(item, id, index)
    return makeConcept(item, id, index)
  })
}

function writeQuestions(questions) {
  const source = "const q = require('./create-question')\n\nmodule.exports = " + JSON.stringify(questions, null, 2)
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/\n  \{/g, '\n  q({')
    .replace(/\n  \}/g, '\n  })') + '\n'

  fs.writeFileSync(outputPath, source, 'utf8')
}

const questions = createQuestions()
writeQuestions(questions)
console.log('已生成 STM32 扩展题：' + questions.length + ' 道 -> ' + path.relative(rootDir, outputPath))

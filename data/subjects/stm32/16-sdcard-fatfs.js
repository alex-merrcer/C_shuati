const q = require('./create-question')

module.exports = [
  q({
    id: 's081',
    chapter: 'SD 卡 / SDIO / FatFs',
    knowledgeId: 'stm32-16-01-01',
    topic: 'SD 卡通信方式',
    type: 'concept',
    difficulty: '基础',
    question: 'STM32 连接 SD 卡常见的两类方式是什么？',
    options: [
      'SPI 模式或 SDIO/SDMMC 模式',
      '只能用 USART',
      '只能用 ADC',
      '必须通过 I2C 访问所有 SD 卡'
    ],
    answer: 0,
    explanation: 'SD 卡可用 SPI 模式简化连接，也可用 SDIO/SDMMC 获得更高性能。具体取决于芯片外设、引脚和文件系统需求。',
    tags: ['SD卡', 'SPI', 'SDIO']
  }),
  q({
    id: 's082',
    chapter: 'SD 卡 / SDIO / FatFs',
    knowledgeId: 'stm32-16-03-01',
    topic: 'FatFs 挂载',
    type: 'missing_step',
    difficulty: '基础',
    question: '调用 f_open 前，通常需要先完成哪一步？',
    code: 'FIL file;\nFRESULT res;\nres = f_open(&file, "0:/log.txt", FA_WRITE | FA_OPEN_ALWAYS);',
    options: [
      '先初始化底层磁盘驱动并调用 f_mount 挂载文件系统',
      '先打开 ADC 校准',
      '先把文件名改成中文变量名',
      '先关闭 SD 卡供电'
    ],
    answer: 0,
    explanation: 'FatFs 需要底层 diskio 能访问介质，并通过 f_mount 注册文件系统对象。未挂载或底层初始化失败时，f_open 往往返回错误。',
    tags: ['FatFs', 'f_mount', 'f_open']
  }),
  q({
    id: 's083',
    chapter: 'SD 卡 / SDIO / FatFs',
    knowledgeId: 'stm32-16-03-04',
    topic: 'f_write 返回值',
    type: 'bug_fix',
    difficulty: '易错',
    question: '下面写文件代码主要少检查什么？',
    code: 'UINT bw;\nf_write(&file, buf, len, &bw);\nf_close(&file);',
    options: [
      '应检查 FRESULT 和 bw 是否等于期望写入长度',
      'f_write 一定不会失败',
      'bw 是输入参数，不会被修改',
      'f_close 前必须复位 MCU'
    ],
    answer: 0,
    explanation: '文件写入可能因为空间不足、介质错误、掉卡等失败。既要检查返回值，也要检查实际写入字节数。',
    tags: ['FatFs', 'f_write', '错误处理']
  }),
  q({
    id: 's084',
    chapter: 'SD 卡 / SDIO / FatFs',
    knowledgeId: 'stm32-16-04-02',
    topic: '扇区大小',
    type: 'concept',
    difficulty: '进阶',
    question: '文件系统和 SD 卡底层读写常提到的扇区通常意味着什么？',
    options: [
      '块设备一次逻辑读写的基本单位，常见为 512 字节',
      'C 语言数组的最后一个元素',
      'GPIO 的一个引脚',
      'NVIC 的一个优先级分组'
    ],
    answer: 0,
    explanation: 'FatFs 通过 disk_read/disk_write 按扇区访问底层介质。很多 SD 卡逻辑扇区为 512 字节，缓存大小和对齐要按配置处理。',
    tags: ['FatFs', '扇区', '块设备']
  }),
  q({
    id: 's085',
    chapter: 'SD 卡 / SDIO / FatFs',
    knowledgeId: 'stm32-16-05-03',
    topic: '掉电保护',
    type: 'scenario_code',
    difficulty: '面试',
    question: '数据记录仪写 SD 卡时，哪种做法更能降低掉电丢数据风险？',
    code: 'f_write(&file, buf, len, &bw);\n/* power may fail */',
    options: [
      '关键数据分段写入并定期 f_sync，同时设计掉电检测和完整性校验',
      '永远不调用 f_close 或 f_sync',
      '把文件系统缓冲区放在未初始化指针处',
      '关闭所有错误返回检查'
    ],
    answer: 0,
    explanation: 'FatFs 可能缓存目录项和数据，掉电会造成未刷写或文件系统损坏。工程上要结合 f_sync、日志格式、CRC、备份区和掉电保持时间。',
    tags: ['FatFs', '掉电保护', '数据完整性']
  })
]

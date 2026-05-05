const q = require('./create-question')

module.exports = [
  q({
    id: 's086',
    chapter: 'FreeRTOS / RTOS',
    knowledgeId: 'stm32-25-01-01',
    topic: 'RTOS 基本概念',
    type: 'concept',
    difficulty: '基础',
    question: '在 STM32 上使用 FreeRTOS 的主要目的是什么？',
    options: [
      '把系统拆成多个任务并由调度器管理时序和资源',
      '让所有代码无需考虑共享资源',
      '自动提高 CPU 主频',
      '替代所有外设驱动'
    ],
    answer: 0,
    explanation: 'RTOS 提供任务、调度、同步和通信机制，适合较复杂的嵌入式应用。它不会消除并发问题，反而要求更清楚地管理共享资源。',
    tags: ['FreeRTOS', '任务', '调度']
  }),
  q({
    id: 's087',
    chapter: 'FreeRTOS / RTOS',
    knowledgeId: 'stm32-25-02-03',
    topic: '任务栈大小',
    type: 'bug_fix',
    difficulty: '易错',
    question: '任务偶发 HardFault，下面任务代码的重点排查方向是什么？',
    code: 'void TaskA(void *arg) {\n    uint8_t big_buf[2048];\n    printf("run\\n");\n    for (;;) {}\n}',
    options: [
      '任务栈可能不足，局部大数组和 printf 都会增加栈压力',
      '任务函数不能有 for 循环',
      'uint8_t 数组只能放在 Flash',
      'printf 会自动扩大任务栈'
    ],
    answer: 0,
    explanation: 'FreeRTOS 每个任务有独立栈，局部大数组、库函数调用、嵌套调用都会消耗栈。要用水位检测、栈溢出钩子和合理分配排查。',
    tags: ['FreeRTOS', '任务栈', 'HardFault']
  }),
  q({
    id: 's088',
    chapter: 'FreeRTOS / RTOS',
    knowledgeId: 'stm32-25-03-02',
    topic: '中断中使用 FromISR API',
    type: 'fill_blank',
    difficulty: '进阶',
    question: '在 ISR 中释放信号量，空白处更适合使用哪类 API？',
    code: 'void EXTI0_IRQHandler(void) {\n    BaseType_t xHigherPriorityTaskWoken = pdFALSE;\n    /* ____ */\n    portYIELD_FROM_ISR(xHigherPriorityTaskWoken);\n}',
    options: [
      'xSemaphoreGiveFromISR(sem, &xHigherPriorityTaskWoken);',
      'xSemaphoreGive(sem);',
      'vTaskDelay(10);',
      'printf("irq");'
    ],
    answer: 0,
    explanation: 'FreeRTOS 在中断上下文要使用 FromISR 版本 API，并按需要触发上下文切换。普通阻塞 API 可能在 ISR 中非法或行为错误。',
    tags: ['FreeRTOS', 'ISR', 'FromISR']
  }),
  q({
    id: 's089',
    chapter: 'FreeRTOS / RTOS',
    knowledgeId: 'stm32-25-03-05',
    topic: '队列传递数据',
    type: 'scenario_code',
    difficulty: '进阶',
    question: '下面队列发送代码有什么生命周期风险？',
    code: 'void producer(void) {\n    uint8_t buf[8];\n    xQueueSend(q, &buf, 0);\n}',
    options: [
      '如果队列元素设计成指针，发送局部数组地址会在函数返回后失效',
      '队列永远只能发送全局变量',
      'xQueueSend 会自动深拷贝任意指针指向的全部内容',
      '局部数组不能被初始化'
    ],
    answer: 0,
    explanation: '队列会拷贝元素本身。如果元素是指针，拷贝的是地址，不会拷贝地址指向的缓冲区。要明确队列元素类型和数据所有权。',
    tags: ['FreeRTOS', '队列', '生命周期']
  }),
  q({
    id: 's090',
    chapter: 'FreeRTOS / RTOS',
    knowledgeId: 'stm32-25-04-02',
    topic: '互斥锁优先级继承',
    type: 'concept',
    difficulty: '面试',
    question: 'FreeRTOS 互斥锁相对二值信号量的重要区别之一是什么？',
    options: [
      '互斥锁可用于互斥访问并支持优先级继承，降低优先级反转影响',
      '互斥锁只能在中断里使用',
      '二值信号量一定会保护共享资源所有临界区',
      '互斥锁会自动关闭所有外设中断'
    ],
    answer: 0,
    explanation: '互斥锁用于资源互斥，FreeRTOS mutex 具备优先级继承机制。二值信号量更常用于事件同步，不等价于所有互斥场景。',
    tags: ['FreeRTOS', '互斥锁', '优先级反转']
  }),
  q({
    id: 's091',
    chapter: 'FreeRTOS / RTOS',
    knowledgeId: 'stm32-25-05-03',
    topic: 'vTaskDelay 与阻塞',
    type: 'code_read',
    difficulty: '基础',
    question: '任务中调用 vTaskDelay(10) 的核心效果是什么？',
    code: 'for (;;) {\n    LED_Toggle();\n    vTaskDelay(10);\n}',
    options: [
      '当前任务进入阻塞一段 tick 时间，让调度器运行其他就绪任务',
      'CPU 进入永久死机状态',
      '关闭 SysTick',
      '把 LED 引脚切换成输入'
    ],
    answer: 0,
    explanation: 'vTaskDelay 按 tick 延时，调用任务阻塞，其他任务可运行。实际时间取决于 tick 频率，不能把参数直接当毫秒，除非配置正好对应。',
    tags: ['FreeRTOS', 'vTaskDelay', 'tick']
  }),
  q({
    id: 's092',
    chapter: 'FreeRTOS / RTOS',
    knowledgeId: 'stm32-25-06-02',
    topic: '临界区',
    type: 'missing_step',
    difficulty: '进阶',
    question: '多个任务同时修改全局链表，最需要补哪类保护？',
    code: 'list_insert(&g_list, node);\nlist_remove(&g_list, old);',
    options: [
      '用互斥锁或临界区保护链表结构更新',
      '把链表节点改成 float',
      '关闭编译优化即可',
      '把所有函数写成 inline'
    ],
    answer: 0,
    explanation: '链表更新涉及多个指针写操作，并发任务打断会破坏结构。RTOS 中应使用 mutex、临界区或单线程消息队列等方式明确所有权。',
    tags: ['FreeRTOS', '临界区', '链表']
  })
]

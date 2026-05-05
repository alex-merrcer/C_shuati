module.exports = [
  {
    "id": "c021",
    "chapter": "const、volatile、static、extern",
    "topic": "static 局部变量",
    "difficulty": "基础",
    "question": "函数内的 static 局部变量有什么特点？",
    "options": [
      "每次进入函数都会重新创建并清零",
      "生命周期贯穿整个程序运行期，但作用域仍限制在该函数内",
      "只能保存指针，不能保存整数",
      "一定存放在栈上"
    ],
    "answer": 1,
    "explanation": "static 局部变量具有静态存储期，只初始化一次，生命周期持续到程序结束。但它的名字只在函数块内可见。它适合保存函数内部状态，但也会让函数变得有状态，需要谨慎使用。",
    "tags": [
      "static",
      "存储期"
    ]
  },
  {
    "id": "c022",
    "chapter": "const、volatile、static、extern",
    "topic": "extern 声明",
    "difficulty": "基础",
    "question": "extern int g_count; 在头文件中的常见含义是什么？",
    "options": [
      "定义一个新的全局变量并分配存储空间",
      "声明有一个名为 g_count 的 int 对象在别处定义",
      "把 g_count 变成只读变量",
      "把 g_count 限制为当前文件私有"
    ],
    "answer": 1,
    "explanation": "extern 声明告诉编译器这个对象在其他地方有定义，当前文件可以引用它。真正分配存储空间的定义通常写在某一个 .c 文件中，例如 int g_count;。声明和定义要区分清楚。",
    "tags": [
      "extern",
      "全局变量"
    ]
  },
  {
    "id": "c023",
    "chapter": "const、volatile、static、extern",
    "topic": "volatile",
    "difficulty": "进阶",
    "question": "嵌入式中把硬件寄存器映射指针声明为 volatile 的主要原因是什么？",
    "options": [
      "让变量自动加锁，避免中断竞争",
      "提示编译器该对象可能被当前代码之外的因素改变，访问不能被随意优化掉",
      "让变量存入 Flash 而不是 RAM",
      "让所有访问都变成原子操作"
    ],
    "answer": 1,
    "explanation": "硬件寄存器、ISR 修改的标志位等对象可能在普通代码看不到的地方变化。volatile 告诉编译器每次访问都应真的读写该对象，不能把值随意缓存到寄存器里。但 volatile 不等于原子性或互斥锁。",
    "tags": [
      "volatile",
      "寄存器"
    ]
  },
  {
    "id": "c024",
    "chapter": "const、volatile、static、extern",
    "topic": "const 指针",
    "difficulty": "易错",
    "question": "const int *p 的含义是什么？",
    "options": [
      "p 是常量指针，不能改变 p 的指向",
      "p 指向的 int 对象不能通过 p 修改，但 p 可以改指向别处",
      "p 和 *p 都一定不能改变",
      "p 只能指向 NULL"
    ],
    "answer": 1,
    "explanation": "const int *p 表示 p 指向 const int，即不能通过 p 修改所指对象，但 p 本身不是 const，可以改为指向别的 int。若想让指针本身不可改，应写 int * const p。",
    "tags": [
      "const",
      "指针"
    ]
  }
]

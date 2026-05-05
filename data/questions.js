const questions = [
  {
    id: "c001",
    chapter: "C语言基础语法与程序结构",
    topic: "main 函数",
    difficulty: "基础",
    question: "关于标准 C 程序入口 main 函数，哪种写法更符合常见的可移植写法？",
    options: [
      "int main(void) { return 0; }",
      "void main(void) { }",
      "main() { }",
      "int start(void) { return 0; }"
    ],
    answer: 0,
    explanation: "标准 C 程序通常从 main 函数开始执行，常见可移植写法是 int main(void) 或 int main(int argc, char *argv[])。返回 int 可以把程序结束状态交给运行环境。void main 不是标准 C 规定的通用形式。",
    tags: ["main", "程序结构"]
  },
  {
    id: "c002",
    chapter: "C语言基础语法与程序结构",
    topic: "基本数据类型",
    difficulty: "基础",
    question: "在编写嵌入式 C 程序时，下面哪种说法更适合初学者记忆？",
    options: [
      "char、short、int、long 的字节数在所有平台都固定不变",
      "C 标准规定了基本整数类型的相对范围要求，但具体字节数可能随平台变化",
      "int 一定是 32 位，所以可以直接保存所有寄存器值",
      "long 一定比指针更大"
    ],
    answer: 1,
    explanation: "C 标准没有把 int、long 等类型的字节数固定死，只规定了一些相对范围要求。嵌入式平台差异较大，涉及位宽明确的硬件数据时，应优先考虑 stdint.h 中的固定宽度整数类型。",
    tags: ["基本类型", "可移植性"]
  },
  {
    id: "c003",
    chapter: "C语言基础语法与程序结构",
    topic: "signed 与 unsigned",
    difficulty: "易错",
    question: "关于 signed int 和 unsigned int，下面哪项说法正确？",
    options: [
      "unsigned int 不能参与算术运算",
      "signed int 溢出后的结果由 C 标准保证为回绕",
      "unsigned int 的无符号运算按模数回绕，signed int 溢出属于未定义行为",
      "signed int 一定比 unsigned int 占用更多内存"
    ],
    answer: 2,
    explanation: "无符号整数运算在超出范围时按模 2 的位宽回绕，这是 C 标准定义的行为。带符号整数溢出是未定义行为，不能依赖它得到某个固定结果。",
    tags: ["signed", "unsigned", "溢出"]
  },
  {
    id: "c004",
    chapter: "C语言基础语法与程序结构",
    topic: "sizeof",
    difficulty: "基础",
    question: "对表达式 sizeof(char)，C 标准保证的结果是什么？",
    options: [
      "1",
      "2",
      "4",
      "取决于编译器，可能为任意值"
    ],
    answer: 0,
    explanation: "sizeof 的结果单位是 char 的大小，所以 sizeof(char) 按定义恒为 1。这里的 1 表示 1 个 char 单位，并不等价于某个平台上的物理存储细节。",
    tags: ["sizeof", "基本类型"]
  },
  {
    id: "c005",
    chapter: "C语言基础语法与程序结构",
    topic: "运算符优先级",
    difficulty: "易错",
    question: "表达式 a & b == 0 在 C 中会先计算哪一部分？",
    options: [
      "先计算 a & b，再与 0 比较",
      "先计算 b == 0，再与 a 做按位与",
      "先计算 a & 0，再与 b 比较",
      "这个表达式一定无法编译"
    ],
    answer: 1,
    explanation: "相等运算符 == 的优先级高于按位与 &，所以 a & b == 0 会按 a & (b == 0) 理解。判断某些位是否全为 0 时应写成 (a & b) == 0，括号能避免误读。",
    tags: ["优先级", "位运算"]
  },
  {
    id: "c006",
    chapter: "指针体系",
    topic: "指针基础",
    difficulty: "基础",
    question: "关于 int *p; 这条声明，哪项理解正确？",
    options: [
      "p 是一个 int 类型变量",
      "p 是一个指针变量，可以保存 int 对象的地址",
      "*p 一定已经有合法值",
      "p 会自动指向 0"
    ],
    answer: 1,
    explanation: "int *p 声明了一个指向 int 的指针变量 p。它只是能保存地址，并不代表已经指向了合法对象。局部未初始化指针的值不确定，使用前必须初始化。",
    tags: ["指针", "声明"]
  },
  {
    id: "c007",
    chapter: "指针体系",
    topic: "NULL 指针",
    difficulty: "基础",
    question: "关于 NULL 指针，哪项说法正确？",
    options: [
      "NULL 指针可以安全解引用，只会得到 0",
      "NULL 表示空指针常量，常用于表达当前不指向任何有效对象",
      "NULL 一定等于地址 0x00000000，所有平台都这样",
      "NULL 只能赋给 int，不能赋给指针"
    ],
    answer: 1,
    explanation: "NULL 用来表示空指针常量，常见用途是初始化指针或判断指针是否有效。空指针不能解引用，解引用空指针是未定义行为。它的内部表示不应被写死为某个具体地址。",
    tags: ["NULL", "空指针"]
  },
  {
    id: "c008",
    chapter: "指针体系",
    topic: "野指针",
    difficulty: "易错",
    question: "下面哪种情况最容易形成野指针？",
    options: [
      "int *p = NULL;",
      "int value = 3; int *p = &value;",
      "free(p); 之后继续使用 p 指向的内存",
      "把指针作为函数参数传入"
    ],
    answer: 2,
    explanation: "free(p) 后，p 中原来的地址值通常还在，但那块内存已经不再属于当前程序逻辑继续使用的对象。继续通过 p 读写就是典型的悬空指针问题。释放后可把 p 置为 NULL，降低误用风险。",
    tags: ["野指针", "free"]
  },
  {
    id: "c009",
    chapter: "数组与字符串",
    topic: "数组名退化",
    difficulty: "进阶",
    question: "下面函数中，arr 在函数体内本质上是什么？\nvoid f(int arr[]) {\n    /* ... */\n}",
    options: [
      "完整数组对象，可以用 sizeof(arr) 得到原数组总字节数",
      "int 指针，通常无法仅靠 arr 得到原数组元素个数",
      "只能指向 1 个 int，不能访问 arr[1]",
      "数组副本，修改 arr[0] 不影响调用者"
    ],
    answer: 1,
    explanation: "数组作为函数参数时会调整为指针参数，void f(int arr[]) 与 void f(int *arr) 在形参层面等价。函数内 sizeof(arr) 得到的是指针大小，不是调用者数组总大小，因此长度通常要额外传入。",
    tags: ["数组", "退化", "函数参数"]
  },
  {
    id: "c010",
    chapter: "数组与字符串",
    topic: "字符串结束符 \\0",
    difficulty: "基础",
    question: "C 字符串为什么需要结尾的 \\0？",
    options: [
      "它用于标记字符串结束，许多字符串函数靠它停止读取",
      "它用于表示字符 '0'，必须显示在屏幕上",
      "它只在 C++ 中需要，C 语言不需要",
      "它能自动防止数组越界"
    ],
    answer: 0,
    explanation: "C 字符串是以空字符 \\0 结束的字符序列。strlen、printf 的 %s 等函数通常会一直读取到 \\0 为止。如果字符数组没有正确的 \\0，字符串函数可能继续读到数组之外。",
    tags: ["字符串", "\\0"]
  },
  {
    id: "c011",
    chapter: "数组与字符串",
    topic: "strlen",
    difficulty: "基础",
    question: "阅读定义：\nchar s[] = \"abc\";\n对 strlen(s) 的结果，哪项说法正确？",
    options: [
      "结果是 3，因为 strlen 统计 \\0 之前的字符数",
      "结果是 4，因为 strlen 会统计结尾 \\0",
      "结果等于 sizeof(s)，在所有情况下都一样",
      "结果不确定，因为字符串字面量不能放入数组"
    ],
    answer: 0,
    explanation: "s 数组中实际存放 'a'、'b'、'c'、'\\0' 共 4 个字符，但 strlen 只统计结尾 \\0 之前的字符个数，所以是 3。sizeof(s) 才会得到数组对象占用的总字节数。",
    tags: ["strlen", "字符串"]
  },
  {
    id: "c012",
    chapter: "数组与字符串",
    topic: "strcpy 风险",
    difficulty: "易错",
    question: "使用 strcpy(dst, src) 时最需要注意什么？",
    options: [
      "dst 必须有足够空间容纳 src 的内容和结尾 \\0",
      "src 必须比 dst 更短 1 个字节以上，否则编译失败",
      "strcpy 会自动扩容 dst",
      "strcpy 会自动检查数组边界并抛出异常"
    ],
    answer: 0,
    explanation: "strcpy 会复制源字符串直到结尾 \\0，但它不知道目标数组容量。如果 dst 空间不足，就会写出边界，造成内存破坏。在嵌入式代码中应明确容量，必要时使用带长度限制的接口并检查截断。",
    tags: ["strcpy", "数组越界"]
  },
  {
    id: "c013",
    chapter: "位运算与位级操作",
    topic: "位与、位或、位异或",
    difficulty: "基础",
    question: "要把变量 flags 的第 3 位清零，且不影响其他位，哪种写法更合适？",
    options: [
      "flags |= (1u << 3);",
      "flags &= ~(1u << 3);",
      "flags ^= (1u << 3);",
      "flags = (1u << 3);"
    ],
    answer: 1,
    explanation: "清零某一位通常使用按位与和取反掩码：flags &= ~(1u << 3)。按位或会置位，按位异或会翻转，直接赋值会丢掉其他位。",
    tags: ["位与", "掩码"]
  },
  {
    id: "c014",
    chapter: "位运算与位级操作",
    topic: "左移和右移",
    difficulty: "易错",
    question: "关于移位操作，哪项说法更安全？",
    options: [
      "左移任意位数都安全，超出类型宽度会自动变 0",
      "对无符号整数做位操作通常更清晰，移位位数必须小于被移位对象的宽度",
      "右移负数在所有平台都一定补 0",
      "1 << 31 在所有平台都一定得到最高位掩码"
    ],
    answer: 1,
    explanation: "移位位数不能为负，也不能大于或等于被移位对象的宽度。嵌入式位操作通常优先使用无符号类型，例如 1u << n。右移负数以及带符号左移到不可表示范围都不适合作为可移植写法。",
    tags: ["左移", "右移", "可移植性"]
  },
  {
    id: "c015",
    chapter: "结构体、共用体与枚举",
    topic: "结构体大小与内存对齐",
    difficulty: "进阶",
    question: "关于结构体大小，哪项说法正确？",
    options: [
      "结构体大小一定等于所有成员 sizeof 的简单相加",
      "编译器可能为满足对齐要求在成员之间或末尾加入填充字节",
      "结构体成员顺序不会影响大小",
      "结构体在所有编译器上的内存布局都完全相同"
    ],
    answer: 1,
    explanation: "结构体成员通常需要按各自的对齐要求放置，编译器可能插入 padding。因此结构体大小不一定等于成员大小之和。嵌入式通信协议或寄存器映射中不能随意假设布局，必要时要查看 ABI、编译器选项和对齐策略。",
    tags: ["结构体", "内存对齐"]
  },
  {
    id: "c016",
    chapter: "结构体、共用体与枚举",
    topic: "enum",
    difficulty: "基础",
    question: "阅读枚举定义：\nenum State {\n    IDLE = 0,\n    RUNNING = 3,\n    ERROR\n};\nERROR 的值通常是多少？",
    options: [
      "0",
      "1",
      "3",
      "4"
    ],
    answer: 3,
    explanation: "枚举成员如果没有显式赋值，会在前一个枚举值基础上加 1。RUNNING 被指定为 3，所以后面的 ERROR 为 4。枚举适合表达状态、命令等有名字的整数常量。",
    tags: ["enum", "状态机"]
  },
  {
    id: "c017",
    chapter: "函数与模块化",
    topic: "函数参数传递",
    difficulty: "基础",
    question: "C 语言函数参数传递的基本规则是什么？",
    options: [
      "所有参数都按引用传递",
      "普通参数按值传递，想修改调用者对象通常传入指针",
      "数组参数会完整复制整个数组",
      "函数可以直接修改调用者的局部变量名"
    ],
    answer: 1,
    explanation: "C 的函数参数本质上按值传递。传入 int x 时，函数拿到的是副本；传入地址时，指针本身也是副本，但它指向调用者对象，因此可以通过解引用修改原对象。",
    tags: ["函数参数", "指针"]
  },
  {
    id: "c018",
    chapter: "函数与模块化",
    topic: "模块接口",
    difficulty: "进阶",
    question: "在多文件 C 项目中，函数原型通常应该放在哪里，便于其他 .c 文件调用？",
    options: [
      "只写在某个 .c 文件底部",
      "写在对应的 .h 头文件中，并由需要调用的 .c 文件 include",
      "写在 makefile 中",
      "运行时用字符串声明"
    ],
    answer: 1,
    explanation: "头文件常用于声明模块对外提供的函数、类型和宏，源文件负责定义具体实现。调用方 include 头文件后，编译器可以检查参数和返回值是否匹配，这比散落的手写声明更可靠。",
    tags: ["模块化", "头文件"]
  },
  {
    id: "c019",
    chapter: "预处理与宏",
    topic: "宏副作用",
    difficulty: "易错",
    question: "阅读宏：\n#define SQUARE(x) ((x) * (x))\n使用 SQUARE(i++) 有什么问题？",
    options: [
      "没有问题，i 只会自增一次",
      "宏展开会让 i++ 出现两次，可能造成多次副作用",
      "宏一定比函数更安全",
      "预处理器会自动把 i++ 保存为临时变量"
    ],
    answer: 1,
    explanation: "宏只是预处理阶段的文本替换，SQUARE(i++) 会近似展开为 ((i++) * (i++))。同一个实参被求值多次，副作用也会发生多次。需要避免把带副作用的表达式传给这类宏。",
    tags: ["宏", "副作用"]
  },
  {
    id: "c020",
    chapter: "预处理与宏",
    topic: "include guard",
    difficulty: "基础",
    question: "头文件中使用 #ifndef/#define/#endif 的 include guard 主要目的是什么？",
    options: [
      "防止同一个头文件被重复包含导致重复声明或重复定义问题",
      "让程序运行速度翻倍",
      "自动释放动态内存",
      "把所有函数变成内联函数"
    ],
    answer: 0,
    explanation: "include guard 用来防止同一个头文件在一次预处理过程中被重复展开。它能减少重复包含引起的类型重定义等问题，是 C 项目头文件的常见保护写法。",
    tags: ["预处理", "头文件"]
  },
  {
    id: "c021",
    chapter: "const、volatile、static、extern",
    topic: "static 局部变量",
    difficulty: "基础",
    question: "函数内的 static 局部变量有什么特点？",
    options: [
      "每次进入函数都会重新创建并清零",
      "生命周期贯穿整个程序运行期，但作用域仍限制在该函数内",
      "只能保存指针，不能保存整数",
      "一定存放在栈上"
    ],
    answer: 1,
    explanation: "static 局部变量具有静态存储期，只初始化一次，生命周期持续到程序结束。但它的名字只在函数块内可见。它适合保存函数内部状态，但也会让函数变得有状态，需要谨慎使用。",
    tags: ["static", "存储期"]
  },
  {
    id: "c022",
    chapter: "const、volatile、static、extern",
    topic: "extern 声明",
    difficulty: "基础",
    question: "extern int g_count; 在头文件中的常见含义是什么？",
    options: [
      "定义一个新的全局变量并分配存储空间",
      "声明有一个名为 g_count 的 int 对象在别处定义",
      "把 g_count 变成只读变量",
      "把 g_count 限制为当前文件私有"
    ],
    answer: 1,
    explanation: "extern 声明告诉编译器这个对象在其他地方有定义，当前文件可以引用它。真正分配存储空间的定义通常写在某一个 .c 文件中，例如 int g_count;。声明和定义要区分清楚。",
    tags: ["extern", "全局变量"]
  },
  {
    id: "c023",
    chapter: "const、volatile、static、extern",
    topic: "volatile",
    difficulty: "进阶",
    question: "嵌入式中把硬件寄存器映射指针声明为 volatile 的主要原因是什么？",
    options: [
      "让变量自动加锁，避免中断竞争",
      "提示编译器该对象可能被当前代码之外的因素改变，访问不能被随意优化掉",
      "让变量存入 Flash 而不是 RAM",
      "让所有访问都变成原子操作"
    ],
    answer: 1,
    explanation: "硬件寄存器、ISR 修改的标志位等对象可能在普通代码看不到的地方变化。volatile 告诉编译器每次访问都应真的读写该对象，不能把值随意缓存到寄存器里。但 volatile 不等于原子性或互斥锁。",
    tags: ["volatile", "寄存器"]
  },
  {
    id: "c024",
    chapter: "const、volatile、static、extern",
    topic: "const 指针",
    difficulty: "易错",
    question: "const int *p 的含义是什么？",
    options: [
      "p 是常量指针，不能改变 p 的指向",
      "p 指向的 int 对象不能通过 p 修改，但 p 可以改指向别处",
      "p 和 *p 都一定不能改变",
      "p 只能指向 NULL"
    ],
    answer: 1,
    explanation: "const int *p 表示 p 指向 const int，即不能通过 p 修改所指对象，但 p 本身不是 const，可以改为指向别的 int。若想让指针本身不可改，应写 int * const p。",
    tags: ["const", "指针"]
  },
  {
    id: "c025",
    chapter: "内存与存储区",
    topic: "malloc/free",
    difficulty: "基础",
    question: "使用 malloc 申请内存后，哪项做法正确？",
    options: [
      "无需检查返回值，malloc 永远成功",
      "使用前检查返回值是否为 NULL，使用完用 free 释放",
      "用完后调用 delete 释放",
      "free 后继续使用原指针读写内存"
    ],
    answer: 1,
    explanation: "malloc 可能失败并返回 NULL，使用前应检查。成功申请的内存用完后应通过 free 释放。free 后不应继续访问那块内存，必要时把指针置为 NULL。",
    tags: ["malloc", "free"]
  },
  {
    id: "c026",
    chapter: "内存与存储区",
    topic: "内存泄漏",
    difficulty: "基础",
    question: "下面哪种情况属于内存泄漏？",
    options: [
      "malloc 得到的指针在所有引用丢失前没有 free，之后再也无法释放那块内存",
      "局部变量离开作用域自动销毁",
      "把指针初始化为 NULL",
      "读取 const 对象"
    ],
    answer: 0,
    explanation: "内存泄漏指程序失去了释放动态内存的途径，使那块内存长期占用。嵌入式设备内存有限，长期运行任务中的泄漏尤其危险，可能导致系统逐渐不可用。",
    tags: ["内存泄漏", "动态内存"]
  },
  {
    id: "c027",
    chapter: "内存与存储区",
    topic: "存储区",
    difficulty: "进阶",
    question: "关于局部自动变量和 static 局部变量的存储期，哪项说法正确？",
    options: [
      "局部自动变量和 static 局部变量都在程序结束时才销毁",
      "局部自动变量通常随块进入和离开而创建销毁，static 局部变量具有静态存储期",
      "static 局部变量每次函数调用都会重新初始化",
      "局部自动变量一定可以安全返回其地址"
    ],
    answer: 1,
    explanation: "普通局部变量具有自动存储期，离开作用域后生命周期结束，返回其地址会形成悬空指针。static 局部变量具有静态存储期，只初始化一次，生命周期到程序结束。",
    tags: ["存储期", "static"]
  },
  {
    id: "c028",
    chapter: "未定义行为与常见陷阱",
    topic: "数组越界",
    difficulty: "易错",
    question: "int a[3] = {1, 2, 3}; 访问 a[3] 有什么问题？",
    options: [
      "a[3] 是最后一个元素，完全正确",
      "数组下标从 1 开始，所以 a[3] 是第三个元素",
      "a[3] 越过了合法范围，访问它是未定义行为",
      "C 会自动扩展数组长度"
    ],
    answer: 2,
    explanation: "长度为 3 的数组合法下标是 0、1、2。a[3] 已经越界，读写都会造成未定义行为。嵌入式中数组越界可能破坏栈、全局变量或控制数据，非常隐蔽。",
    tags: ["数组越界", "未定义行为"]
  },
  {
    id: "c029",
    chapter: "未定义行为与常见陷阱",
    topic: "空指针解引用",
    difficulty: "易错",
    question: "下面代码有什么问题？\nint *p = NULL;\n*p = 1;",
    options: [
      "没有问题，会把 1 写入地址 0",
      "空指针解引用，属于未定义行为",
      "只有在 release 模式下才有问题",
      "这只是语法错误，无法通过任何编译器"
    ],
    answer: 1,
    explanation: "NULL 表示不指向有效对象。通过 *p 写入时需要 p 指向一个合法 int 对象，否则就是未定义行为。实际系统中可能崩溃，也可能破坏内存，不能依赖任何固定现象。",
    tags: ["NULL", "未定义行为"]
  },
  {
    id: "c030",
    chapter: "未定义行为与常见陷阱",
    topic: "signed 与 unsigned 比较",
    difficulty: "易错",
    question: "阅读代码：\nint a = -1;\nunsigned int b = 1;\nif (a < b) {\n    /* ... */\n}\n下面哪项理解更正确？",
    options: [
      "a 会一直按 -1 与 1 比较，所以条件一定为真",
      "混合 signed 和 unsigned 比较会发生常见算术转换，结果容易违背直觉，应避免这样写",
      "unsigned int 会自动变成 signed int，条件一定为真",
      "这段代码语法非法"
    ],
    answer: 1,
    explanation: "当 signed 与 unsigned 混合运算或比较时，C 会按规则做类型转换。若 signed 值不能安全表示为 unsigned 对应的直觉含义，结果可能让初学者意外。实际代码中应统一类型或显式检查范围。",
    tags: ["signed", "unsigned", "比较"]
  },
  {
    id: "c031",
    chapter: "面试高频综合专题",
    topic: "typedef",
    difficulty: "面试",
    question: "typedef unsigned char uint8_alias; 的作用是什么？",
    options: [
      "定义一个名为 uint8_alias 的类型别名",
      "定义一个新的变量 uint8_alias",
      "强制 unsigned char 一定为 8 位",
      "把所有 char 都改成 unsigned char"
    ],
    answer: 0,
    explanation: "typedef 用于给已有类型起别名，uint8_alias 可以像类型名一样使用。但这个别名本身不能保证 unsigned char 的位宽一定是 8 位。需要固定宽度时应优先使用 stdint.h 的 uint8_t，并确认平台提供该类型。",
    tags: ["typedef", "类型别名"]
  },
  {
    id: "c032",
    chapter: "面试高频综合专题",
    topic: "stdint.h 固定宽度类型",
    difficulty: "面试",
    question: "在需要明确表示 32 位无符号寄存器值时，哪种类型最合适？",
    options: [
      "unsigned int，因为它在所有平台都是 32 位",
      "uint32_t，因为它在提供该类型的平台上明确表示 32 位无符号整数",
      "long，因为它一定和寄存器一样宽",
      "char *，因为指针可以保存任何整数"
    ],
    answer: 1,
    explanation: "stdint.h 提供固定宽度整数类型。uint32_t 表示 32 位无符号整数，适合表达明确位宽的数据。并非所有平台都必须提供所有固定宽度类型，但现代嵌入式 C 环境通常会提供常用类型。",
    tags: ["stdint.h", "固定宽度类型"]
  },
  {
    id: "c033",
    chapter: "面试高频综合专题",
    topic: "嵌入式寄存器 volatile 访问",
    difficulty: "面试",
    question: "下面哪个声明更适合访问地址为 0x40000000 的 32 位硬件寄存器？",
    options: [
      "#define REG (*(volatile uint32_t *)0x40000000u)",
      "#define REG (*(uint32_t *)0x40000000u)",
      "uint32_t REG = 0x40000000u;",
      "#define REG 0x40000000u"
    ],
    answer: 0,
    explanation: "硬件寄存器访问需要把固定地址转换成指向对应宽度对象的指针，再解引用。volatile 告诉编译器不要省略或合并这些访问。实际项目还应确认地址、位宽、对齐和芯片手册描述一致。",
    tags: ["volatile", "寄存器", "uint32_t"]
  }
]

module.exports = questions

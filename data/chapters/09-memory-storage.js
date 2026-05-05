module.exports = [
  {
    "id": "c025",
    "chapter": "内存与存储区",
    "topic": "malloc/free",
    "difficulty": "基础",
    "question": "使用 malloc 申请内存后，哪项做法正确？",
    "options": [
      "无需检查返回值，malloc 永远成功",
      "使用前检查返回值是否为 NULL，使用完用 free 释放",
      "用完后调用 delete 释放",
      "free 后继续使用原指针读写内存"
    ],
    "answer": 1,
    "explanation": "malloc 可能失败并返回 NULL，使用前应检查。成功申请的内存用完后应通过 free 释放。free 后不应继续访问那块内存，必要时把指针置为 NULL。",
    "tags": [
      "malloc",
      "free"
    ]
  },
  {
    "id": "c026",
    "chapter": "内存与存储区",
    "topic": "内存泄漏",
    "difficulty": "基础",
    "question": "下面哪种情况属于内存泄漏？",
    "options": [
      "malloc 得到的指针在所有引用丢失前没有 free，之后再也无法释放那块内存",
      "局部变量离开作用域自动销毁",
      "把指针初始化为 NULL",
      "读取 const 对象"
    ],
    "answer": 0,
    "explanation": "内存泄漏指程序失去了释放动态内存的途径，使那块内存长期占用。嵌入式设备内存有限，长期运行任务中的泄漏尤其危险，可能导致系统逐渐不可用。",
    "tags": [
      "内存泄漏",
      "动态内存"
    ]
  },
  {
    "id": "c027",
    "chapter": "内存与存储区",
    "topic": "存储区",
    "difficulty": "进阶",
    "question": "关于局部自动变量和 static 局部变量的存储期，哪项说法正确？",
    "options": [
      "局部自动变量和 static 局部变量都在程序结束时才销毁",
      "局部自动变量通常随块进入和离开而创建销毁，static 局部变量具有静态存储期",
      "static 局部变量每次函数调用都会重新初始化",
      "局部自动变量一定可以安全返回其地址"
    ],
    "answer": 1,
    "explanation": "普通局部变量具有自动存储期，离开作用域后生命周期结束，返回其地址会形成悬空指针。static 局部变量具有静态存储期，只初始化一次，生命周期到程序结束。",
    "tags": [
      "存储期",
      "static"
    ]
  }
]

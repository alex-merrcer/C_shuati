const path = require('path')

const questionPath = path.join(__dirname, '..', 'data', 'questions')
const requiredFields = [
  'id',
  'chapter',
  'topic',
  'difficulty',
  'question',
  'options',
  'answer',
  'explanation',
  'tags'
]
const allowedDifficulties = ['基础', '进阶', '易错', '面试']
const errors = []

let questions

try {
  questions = require(questionPath)
} catch (error) {
  console.error('题库加载失败：' + error.message)
  process.exit(1)
}

if (!Array.isArray(questions)) {
  console.error('题库校验失败：data/questions.js 必须导出数组。')
  process.exit(1)
}

const idSet = {}

questions.forEach(function (question, index) {
  const label = question && question.id ? question.id : '第 ' + (index + 1) + ' 题'

  if (!question || typeof question !== 'object' || Array.isArray(question)) {
    errors.push({
      id: label,
      reason: '题目必须是对象'
    })
    return
  }

  requiredFields.forEach(function (field) {
    if (question[field] === undefined || question[field] === null) {
      errors.push({
        id: label,
        reason: '缺少字段 ' + field
      })
    }
  })

  if (question.id) {
    if (idSet[question.id]) {
      errors.push({
        id: label,
        reason: 'id 重复'
      })
    }
    idSet[question.id] = true
  }

  if (!Array.isArray(question.options) || question.options.length !== 4) {
    errors.push({
      id: label,
      reason: 'options 必须刚好包含 4 个选项'
    })
  }

  if ([0, 1, 2, 3].indexOf(question.answer) === -1) {
    errors.push({
      id: label,
      reason: 'answer 必须是 0、1、2、3'
    })
  }

  if (allowedDifficulties.indexOf(question.difficulty) === -1) {
    errors.push({
      id: label,
      reason: 'difficulty 只能是：' + allowedDifficulties.join('、')
    })
  }

  if (typeof question.question !== 'string' || question.question.trim() === '') {
    errors.push({
      id: label,
      reason: 'question 不能为空'
    })
  }

  if (typeof question.explanation !== 'string' || question.explanation.trim() === '') {
    errors.push({
      id: label,
      reason: 'explanation 不能为空'
    })
  }

  if (!Array.isArray(question.tags)) {
    errors.push({
      id: label,
      reason: 'tags 必须是数组'
    })
  }
})

if (errors.length > 0) {
  console.error('题库校验失败，共 ' + errors.length + ' 个问题：')
  errors.forEach(function (error) {
    console.error('- [' + error.id + '] ' + error.reason)
  })
  process.exit(1)
}

console.log('题库校验通过，共 ' + questions.length + ' 道题。')

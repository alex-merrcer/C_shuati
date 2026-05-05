const path = require('path')

const questionPath = path.join(__dirname, '..', 'data', 'questions')
const requiredFields = [
  'id',
  'subject',
  'chapter',
  'knowledgeId',
  'topic',
  'type',
  'difficulty',
  'question',
  'code',
  'options',
  'answer',
  'explanation',
  'tags',
  'reviewStatus'
]
const allowedSubjects = ['c', 'stm32']
const allowedDifficulties = ['基础', '进阶', '易错', '面试']
const cAllowedTypes = [
  'concept',
  'code_read',
  'bug_fix',
  'fill_blank',
  'missing_step',
  'calculation',
  'scenario_code',
  'interview'
]
const stm32AllowedTypes = [
  'concept',
  'scenario',
  'bug_fix',
  'calculation',
  'code_read',
  'missing_step'
]
const cCodeRequiredTypes = [
  'code_read',
  'bug_fix',
  'fill_blank',
  'missing_step',
  'calculation',
  'scenario_code'
]
const stm32CodeRequiredTypes = [
  'code_read',
  'missing_step'
]
const stm32BannedPattern = /\bHAL\b|\bLL\b|CubeMX|USB|传感器模块/
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
const subjectCount = {
  c: 0,
  stm32: 0
}

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

  if (allowedSubjects.indexOf(question.subject) === -1) {
    errors.push({
      id: label,
      reason: 'subject 只能是：' + allowedSubjects.join('、')
    })
  } else {
    subjectCount[question.subject] += 1
  }

  if (question.id && /^s\d+/.test(question.id) && question.subject !== 'stm32') {
    errors.push({
      id: label,
      reason: 'STM32 题目 id 以 s 开头时 subject 必须是 stm32'
    })
  }

  if (question.id && /^c\d+/.test(question.id) && question.subject !== 'c') {
    errors.push({
      id: label,
      reason: 'C 语言题目 id 以 c 开头时 subject 必须是 c'
    })
  }

  if (typeof question.knowledgeId !== 'string' || question.knowledgeId.trim() === '') {
    errors.push({
      id: label,
      reason: 'knowledgeId 不能为空'
    })
  }

  const allowedTypes = question.subject === 'stm32' ? stm32AllowedTypes : cAllowedTypes
  const codeRequiredTypes = question.subject === 'stm32' ? stm32CodeRequiredTypes : cCodeRequiredTypes

  if (allowedTypes.indexOf(question.type) === -1) {
    errors.push({
      id: label,
      reason: 'type 只能是：' + allowedTypes.join('、')
    })
  }

  if (codeRequiredTypes.indexOf(question.type) !== -1 && (typeof question.code !== 'string' || question.code.trim() === '')) {
    errors.push({
      id: label,
      reason: 'type 为 ' + question.type + ' 时必须有非空 code 字段'
    })
  }

  if (question.code !== undefined && typeof question.code !== 'string') {
    errors.push({
      id: label,
      reason: 'code 必须是字符串'
    })
  }

  if (!Array.isArray(question.options) || question.options.length !== 4) {
    errors.push({
      id: label,
      reason: 'options 必须刚好包含 4 个选项'
    })
  } else {
    const optionMap = {}
    question.options.forEach(function (option, optionIndex) {
      if (typeof option !== 'string' || option.trim() === '') {
        errors.push({
          id: label,
          reason: '第 ' + (optionIndex + 1) + ' 个选项不能为空'
        })
      }
      optionMap[option] = true
    })

    if (Object.keys(optionMap).length !== 4) {
      errors.push({
        id: label,
        reason: 'options 中存在重复选项'
      })
    }
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

  if (question.reviewStatus !== '待复核') {
    errors.push({
      id: label,
      reason: 'reviewStatus 当前应统一标记为“待复核”'
    })
  }

  if (question.subject === 'stm32' && stm32BannedPattern.test(JSON.stringify(question))) {
    errors.push({
      id: label,
      reason: 'STM32 题目中不能出现 HAL、LL、CubeMX、USB 或传感器模块专项内容'
    })
  }
})

if (subjectCount.stm32 < 800 || subjectCount.stm32 > 1000) {
  errors.push({
    id: 'stm32',
    reason: 'STM32 题量应在 800 到 1000 道之间，实际为 ' + subjectCount.stm32 + ' 道'
  })
}

if (errors.length > 0) {
  console.error('题库校验失败，共 ' + errors.length + ' 个问题：')
  errors.forEach(function (error) {
    console.error('- [' + error.id + '] ' + error.reason)
  })
  process.exit(1)
}

console.log('题库校验通过，共 ' + questions.length + ' 道题。C语言 ' + subjectCount.c + ' 道，STM32 ' + subjectCount.stm32 + ' 道。')

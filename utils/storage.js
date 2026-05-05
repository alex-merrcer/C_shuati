const WRONG_IDS_KEY = 'wrongQuestionIds'
const WRONG_MAP_KEY = 'wrongQuestionMap'
const STUDY_STATS_KEY = 'studyStats'

function getTodayKey() {
  const date = new Date()
  const year = date.getFullYear()
  const monthValue = date.getMonth() + 1
  const dayValue = date.getDate()
  const month = monthValue < 10 ? '0' + monthValue : String(monthValue)
  const day = dayValue < 10 ? '0' + dayValue : String(dayValue)

  return year + '-' + month + '-' + day
}

function getDefaultStudyStats() {
  return {
    totalAnswered: 0,
    totalCorrect: 0,
    totalWrong: 0,
    chapterStats: {},
    topicStats: {},
    dailyStats: {},
    lastStudyAt: 0
  }
}

function normalizeCounter(value) {
  const source = value && typeof value === 'object' ? value : {}

  return {
    answered: Number(source.answered) || 0,
    correct: Number(source.correct) || 0,
    wrong: Number(source.wrong) || 0
  }
}

function getStudyStats() {
  const rawStats = wx.getStorageSync(STUDY_STATS_KEY)
  const stats = getDefaultStudyStats()

  if (!rawStats || typeof rawStats !== 'object' || Array.isArray(rawStats)) {
    return stats
  }

  stats.totalAnswered = Number(rawStats.totalAnswered) || 0
  stats.totalCorrect = Number(rawStats.totalCorrect) || 0
  stats.totalWrong = Number(rawStats.totalWrong) || 0
  stats.lastStudyAt = Number(rawStats.lastStudyAt) || 0
  stats.chapterStats = rawStats.chapterStats && typeof rawStats.chapterStats === 'object' && !Array.isArray(rawStats.chapterStats) ? rawStats.chapterStats : {}
  stats.topicStats = rawStats.topicStats && typeof rawStats.topicStats === 'object' && !Array.isArray(rawStats.topicStats) ? rawStats.topicStats : {}
  stats.dailyStats = rawStats.dailyStats && typeof rawStats.dailyStats === 'object' && !Array.isArray(rawStats.dailyStats) ? rawStats.dailyStats : {}

  return stats
}

function saveStudyStats(stats) {
  wx.setStorageSync(STUDY_STATS_KEY, stats)
}

function addCounter(map, key, isCorrect) {
  if (!map[key]) {
    map[key] = {
      answered: 0,
      correct: 0,
      wrong: 0
    }
  } else {
    map[key] = normalizeCounter(map[key])
  }

  map[key].answered += 1

  if (isCorrect) {
    map[key].correct += 1
  } else {
    map[key].wrong += 1
  }
}

function updateStudyStats(question, isCorrect) {
  const stats = getStudyStats()
  const todayKey = getTodayKey()

  stats.totalAnswered += 1

  if (isCorrect) {
    stats.totalCorrect += 1
  } else {
    stats.totalWrong += 1
  }

  addCounter(stats.chapterStats, question.chapter, isCorrect)
  addCounter(stats.topicStats, question.topic, isCorrect)
  addCounter(stats.dailyStats, todayKey, isCorrect)
  stats.lastStudyAt = Date.now()

  saveStudyStats(stats)
  return stats
}

function clearStudyStats() {
  wx.removeStorageSync(STUDY_STATS_KEY)
}

function getAccuracy(correct, answered) {
  if (!answered) {
    return 0
  }

  return Math.round((correct / answered) * 100)
}

function getAccuracyText(correct, answered) {
  if (!answered) {
    return '暂无数据'
  }

  return getAccuracy(correct, answered) + '%'
}

function getRawWrongIds() {
  const ids = wx.getStorageSync(WRONG_IDS_KEY)
  return Array.isArray(ids) ? ids : []
}

function getRawWrongMap() {
  const map = wx.getStorageSync(WRONG_MAP_KEY)
  return map && typeof map === 'object' && !Array.isArray(map) ? map : null
}

function buildQuestionMap(questionList) {
  const questionMap = {}

  if (!Array.isArray(questionList)) {
    return questionMap
  }

  questionList.forEach(function (question) {
    questionMap[question.id] = question
  })

  return questionMap
}

function normalizeWrongRecord(record, id, question) {
  const source = record && typeof record === 'object' ? record : {}
  const hasWrongCount = source.wrongCount !== undefined && source.wrongCount !== null

  return {
    id: id,
    wrongCount: hasWrongCount ? Number(source.wrongCount) || 0 : 1,
    correctCount: Number(source.correctCount) || 0,
    lastWrongAt: Number(source.lastWrongAt) || 0,
    lastCorrectAt: Number(source.lastCorrectAt) || 0,
    lastSelectedAnswer: typeof source.lastSelectedAnswer === 'number' ? source.lastSelectedAnswer : null,
    chapter: source.chapter || (question ? question.chapter : ''),
    topic: source.topic || (question ? question.topic : '')
  }
}

function saveWrongMap(map) {
  wx.setStorageSync(WRONG_MAP_KEY, map)
  wx.setStorageSync(WRONG_IDS_KEY, Object.keys(map))
}

function migrateWrongQuestions(questionList) {
  const questionMap = buildQuestionMap(questionList)
  const existingMap = getRawWrongMap()

  if (existingMap) {
    const normalizedMap = {}

    Object.keys(existingMap).forEach(function (id) {
      normalizedMap[id] = normalizeWrongRecord(existingMap[id], id, questionMap[id])
    })

    saveWrongMap(normalizedMap)
    return normalizedMap
  }

  const ids = getRawWrongIds()
  const migratedMap = {}

  ids.forEach(function (id) {
    migratedMap[id] = normalizeWrongRecord(null, id, questionMap[id])
  })

  saveWrongMap(migratedMap)
  return migratedMap
}

function getWrongQuestionMap(questionList) {
  return migrateWrongQuestions(questionList)
}

function getWrongQuestionIds(questionList) {
  return Object.keys(migrateWrongQuestions(questionList))
}

function getWrongQuestionCount(questionList) {
  return getWrongQuestionIds(questionList).length
}

function saveWrongQuestion(question, selectedAnswer) {
  const map = migrateWrongQuestions()
  const existed = !!map[question.id]
  const now = Date.now()
  const record = normalizeWrongRecord(map[question.id], question.id, question)

  record.wrongCount += existed ? 1 : 0
  record.lastWrongAt = now
  record.lastSelectedAnswer = selectedAnswer
  record.chapter = question.chapter
  record.topic = question.topic
  map[question.id] = record

  saveWrongMap(map)
  return !existed
}

function removeWrongQuestion(questionOrId) {
  const id = typeof questionOrId === 'string' ? questionOrId : questionOrId.id
  const map = migrateWrongQuestions()
  const record = map[id]

  if (!record) {
    return false
  }

  const updatedRecord = normalizeWrongRecord(record, id, null)
  updatedRecord.correctCount += 1
  updatedRecord.lastCorrectAt = Date.now()
  map[id] = updatedRecord
  delete map[id]
  saveWrongMap(map)

  return true
}

function clearWrongQuestions() {
  wx.setStorageSync(WRONG_IDS_KEY, [])
  wx.setStorageSync(WRONG_MAP_KEY, {})
}

module.exports = {
  getTodayKey: getTodayKey,
  getStudyStats: getStudyStats,
  updateStudyStats: updateStudyStats,
  clearStudyStats: clearStudyStats,
  getAccuracy: getAccuracy,
  getAccuracyText: getAccuracyText,
  migrateWrongQuestions: migrateWrongQuestions,
  getWrongQuestionMap: getWrongQuestionMap,
  getWrongQuestionIds: getWrongQuestionIds,
  getWrongQuestionCount: getWrongQuestionCount,
  saveWrongQuestion: saveWrongQuestion,
  removeWrongQuestion: removeWrongQuestion,
  clearWrongQuestions: clearWrongQuestions
}

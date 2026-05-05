const WRONG_IDS_KEY = 'wrongQuestionIds'
const WRONG_MAP_KEY = 'wrongQuestionMap'
const STUDY_STATS_KEY = 'studyStats'
const SUBJECTS = {
  c: true,
  stm32: true
}

function normalizeSubject(subject) {
  return SUBJECTS[subject] ? subject : 'c'
}

function getQuestionSubject(question) {
  return normalizeSubject(question && question.subject)
}

function getScopedKey(subject, key) {
  return normalizeSubject(subject) + '::' + key
}

function getTodayKey() {
  const date = new Date()
  const year = date.getFullYear()
  const monthValue = date.getMonth() + 1
  const dayValue = date.getDate()
  const month = monthValue < 10 ? '0' + monthValue : String(monthValue)
  const day = dayValue < 10 ? '0' + dayValue : String(dayValue)

  return year + '-' + month + '-' + day
}

function normalizeCounter(value) {
  const source = value && typeof value === 'object' ? value : {}

  return {
    answered: Number(source.answered) || 0,
    correct: Number(source.correct) || 0,
    wrong: Number(source.wrong) || 0
  }
}

function getDefaultStudyStats() {
  return {
    totalAnswered: 0,
    totalCorrect: 0,
    totalWrong: 0,
    subjectStats: {
      c: normalizeCounter(null),
      stm32: normalizeCounter(null)
    },
    chapterStats: {},
    topicStats: {},
    dailyStats: {},
    lastStudyAt: 0
  }
}

function normalizeSubjectStats(rawSubjectStats, fallback) {
  const source = rawSubjectStats && typeof rawSubjectStats === 'object' && !Array.isArray(rawSubjectStats) ? rawSubjectStats : {}

  return {
    c: normalizeCounter(source.c || fallback),
    stm32: normalizeCounter(source.stm32)
  }
}

function cloneMap(source) {
  const map = {}

  if (!source || typeof source !== 'object' || Array.isArray(source)) {
    return map
  }

  Object.keys(source).forEach(function (key) {
    map[key] = normalizeCounter(source[key])
  })

  return map
}

function ensureLegacyScopedMap(map, subject, isDaily) {
  Object.keys(map).forEach(function (key) {
    if (key.indexOf('::') !== -1) {
      return
    }

    if (isDaily && !/^\d{4}-\d{2}-\d{2}$/.test(key)) {
      return
    }

    const scopedKey = getScopedKey(subject, key)
    if (!map[scopedKey]) {
      map[scopedKey] = normalizeCounter(map[key])
    }
  })
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
  stats.subjectStats = normalizeSubjectStats(rawStats.subjectStats, {
    answered: stats.totalAnswered,
    correct: stats.totalCorrect,
    wrong: stats.totalWrong
  })
  stats.chapterStats = cloneMap(rawStats.chapterStats)
  stats.topicStats = cloneMap(rawStats.topicStats)
  stats.dailyStats = cloneMap(rawStats.dailyStats)

  ensureLegacyScopedMap(stats.chapterStats, 'c', false)
  ensureLegacyScopedMap(stats.topicStats, 'c', false)
  ensureLegacyScopedMap(stats.dailyStats, 'c', true)

  return stats
}

function saveStudyStats(stats) {
  wx.setStorageSync(STUDY_STATS_KEY, stats)
}

function addCounter(map, key, isCorrect) {
  if (!map[key]) {
    map[key] = normalizeCounter(null)
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
  const subject = getQuestionSubject(question)

  stats.totalAnswered += 1

  if (isCorrect) {
    stats.totalCorrect += 1
  } else {
    stats.totalWrong += 1
  }

  addCounter(stats.subjectStats, subject, isCorrect)
  addCounter(stats.chapterStats, getScopedKey(subject, question.chapter), isCorrect)
  addCounter(stats.topicStats, getScopedKey(subject, question.topic), isCorrect)
  addCounter(stats.dailyStats, todayKey, isCorrect)
  addCounter(stats.dailyStats, getScopedKey(subject, todayKey), isCorrect)
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

function getScopedCounter(map, subject, key) {
  const scopedKey = getScopedKey(subject, key)

  if (map && map[scopedKey]) {
    return normalizeCounter(map[scopedKey])
  }

  if (normalizeSubject(subject) === 'c' && map && map[key]) {
    return normalizeCounter(map[key])
  }

  return normalizeCounter(null)
}

function getSubjectStats(stats, subject) {
  const source = stats && stats.subjectStats ? stats.subjectStats : {}
  return normalizeCounter(source[normalizeSubject(subject)])
}

function getSubjectDailyStats(stats, subject, dayKey) {
  return getScopedCounter(stats.dailyStats || {}, subject, dayKey)
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
  const subject = normalizeSubject(source.subject || (question ? question.subject : 'c'))

  return {
    id: id,
    subject: subject,
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

function getWrongQuestionMap(questionList, subject) {
  const map = migrateWrongQuestions(questionList)

  if (!subject) {
    return map
  }

  const normalizedSubject = normalizeSubject(subject)
  const filteredMap = {}

  Object.keys(map).forEach(function (id) {
    if (normalizeSubject(map[id].subject) === normalizedSubject) {
      filteredMap[id] = map[id]
    }
  })

  return filteredMap
}

function getWrongQuestionIds(questionList, subject) {
  return Object.keys(getWrongQuestionMap(questionList, subject))
}

function getWrongQuestionCount(questionList, subject) {
  return getWrongQuestionIds(questionList, subject).length
}

function saveWrongQuestion(question, selectedAnswer) {
  const map = migrateWrongQuestions([question])
  const existed = !!map[question.id]
  const now = Date.now()
  const record = normalizeWrongRecord(map[question.id], question.id, question)

  record.wrongCount += existed ? 1 : 0
  record.lastWrongAt = now
  record.lastSelectedAnswer = selectedAnswer
  record.subject = getQuestionSubject(question)
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

function clearWrongQuestions(subject) {
  if (!subject) {
    wx.setStorageSync(WRONG_IDS_KEY, [])
    wx.setStorageSync(WRONG_MAP_KEY, {})
    return
  }

  const normalizedSubject = normalizeSubject(subject)
  const map = migrateWrongQuestions()

  Object.keys(map).forEach(function (id) {
    if (normalizeSubject(map[id].subject) === normalizedSubject) {
      delete map[id]
    }
  })

  saveWrongMap(map)
}

module.exports = {
  normalizeSubject: normalizeSubject,
  getScopedKey: getScopedKey,
  getTodayKey: getTodayKey,
  getStudyStats: getStudyStats,
  updateStudyStats: updateStudyStats,
  clearStudyStats: clearStudyStats,
  getAccuracy: getAccuracy,
  getAccuracyText: getAccuracyText,
  getScopedCounter: getScopedCounter,
  getSubjectStats: getSubjectStats,
  getSubjectDailyStats: getSubjectDailyStats,
  migrateWrongQuestions: migrateWrongQuestions,
  getWrongQuestionMap: getWrongQuestionMap,
  getWrongQuestionIds: getWrongQuestionIds,
  getWrongQuestionCount: getWrongQuestionCount,
  saveWrongQuestion: saveWrongQuestion,
  removeWrongQuestion: removeWrongQuestion,
  clearWrongQuestions: clearWrongQuestions
}

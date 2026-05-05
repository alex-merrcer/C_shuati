const questions = require('../../data/questions')
const storage = require('../../utils/storage')

const SUBJECT_NAMES = {
  c: 'C语言',
  stm32: 'STM32'
}

function getQuestionCountMap(questionList, field) {
  const map = {}

  questionList.forEach(function (question) {
    if (!map[question[field]]) {
      map[question[field]] = 0
    }
    map[question[field]] += 1
  })

  return map
}

function getSortedNames(map) {
  return Object.keys(map).sort(function (a, b) {
    return a.localeCompare(b)
  })
}

function buildRows(countMap, statsMap, subject) {
  return getSortedNames(countMap).map(function (name) {
    const stats = storage.getScopedCounter(statsMap, subject, name)
    const hasData = stats.answered > 0

    return {
      name: name,
      count: countMap[name],
      answered: stats.answered,
      correct: stats.correct,
      wrong: stats.wrong,
      accuracyText: hasData ? storage.getAccuracy(stats.correct, stats.answered) + '%' : '未开始'
    }
  })
}

function formatTime(timestamp) {
  if (!timestamp) {
    return '暂无记录'
  }

  const date = new Date(timestamp)
  const monthValue = date.getMonth() + 1
  const dayValue = date.getDate()
  const hourValue = date.getHours()
  const minuteValue = date.getMinutes()
  const month = monthValue < 10 ? '0' + monthValue : String(monthValue)
  const day = dayValue < 10 ? '0' + dayValue : String(dayValue)
  const hour = hourValue < 10 ? '0' + hourValue : String(hourValue)
  const minute = minuteValue < 10 ? '0' + minuteValue : String(minuteValue)

  return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute
}

function getSubjectQuestions(subject) {
  const normalizedSubject = storage.normalizeSubject(subject)

  return questions.filter(function (question) {
    return storage.normalizeSubject(question.subject) === normalizedSubject
  })
}

Page({
  data: {
    subject: 'c',
    subjectName: 'C语言',
    overview: {
      totalAnswered: 0,
      totalCorrect: 0,
      totalWrong: 0,
      totalAccuracyText: '暂无数据',
      todayAnswered: 0,
      todayCorrect: 0,
      todayWrong: 0,
      todayAccuracyText: '暂无数据',
      lastStudyText: '暂无记录'
    },
    chapterRows: [],
    topicRows: []
  },

  onLoad(options) {
    const subject = storage.normalizeSubject(options.subject || 'c')
    this.setData({
      subject: subject,
      subjectName: SUBJECT_NAMES[subject] || 'C语言'
    })
  },

  onShow() {
    this.loadStats()
  },

  loadStats() {
    const subject = this.data.subject
    const stats = storage.getStudyStats()
    const todayKey = storage.getTodayKey()
    const subjectStats = storage.getSubjectStats(stats, subject)
    const todayStats = storage.getSubjectDailyStats(stats, subject, todayKey)
    const subjectQuestions = getSubjectQuestions(subject)
    const chapterCountMap = getQuestionCountMap(subjectQuestions, 'chapter')
    const topicCountMap = getQuestionCountMap(subjectQuestions, 'topic')

    this.setData({
      overview: {
        totalAnswered: subjectStats.answered,
        totalCorrect: subjectStats.correct,
        totalWrong: subjectStats.wrong,
        totalAccuracyText: storage.getAccuracyText(subjectStats.correct, subjectStats.answered),
        todayAnswered: todayStats.answered,
        todayCorrect: todayStats.correct,
        todayWrong: todayStats.wrong,
        todayAccuracyText: storage.getAccuracyText(todayStats.correct, todayStats.answered),
        lastStudyText: formatTime(stats.lastStudyAt)
      },
      chapterRows: buildRows(chapterCountMap, stats.chapterStats, subject),
      topicRows: buildRows(topicCountMap, stats.topicStats, subject)
    })
  }
})

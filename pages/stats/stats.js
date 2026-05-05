const questions = require('../../data/questions')
const storage = require('../../utils/storage')

function getCounter(source) {
  const value = source && typeof source === 'object' ? source : {}

  return {
    answered: Number(value.answered) || 0,
    correct: Number(value.correct) || 0,
    wrong: Number(value.wrong) || 0
  }
}

function getQuestionCountMap(field) {
  const map = {}

  questions.forEach(function (question) {
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

function buildRows(countMap, statsMap) {
  return getSortedNames(countMap).map(function (name) {
    const stats = getCounter(statsMap[name])
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

Page({
  data: {
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

  onShow() {
    this.loadStats()
  },

  loadStats() {
    const stats = storage.getStudyStats()
    const todayKey = storage.getTodayKey()
    const todayStats = getCounter(stats.dailyStats[todayKey])
    const chapterCountMap = getQuestionCountMap('chapter')
    const topicCountMap = getQuestionCountMap('topic')

    this.setData({
      overview: {
        totalAnswered: stats.totalAnswered,
        totalCorrect: stats.totalCorrect,
        totalWrong: stats.totalWrong,
        totalAccuracyText: storage.getAccuracyText(stats.totalCorrect, stats.totalAnswered),
        todayAnswered: todayStats.answered,
        todayCorrect: todayStats.correct,
        todayWrong: todayStats.wrong,
        todayAccuracyText: storage.getAccuracyText(todayStats.correct, todayStats.answered),
        lastStudyText: formatTime(stats.lastStudyAt)
      },
      chapterRows: buildRows(chapterCountMap, stats.chapterStats),
      topicRows: buildRows(topicCountMap, stats.topicStats)
    })
  }
})

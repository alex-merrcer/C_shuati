const questions = require('../../data/questions')
const storage = require('../../utils/storage')

Page({
  data: {
    chapters: [],
    totalCount: 0,
    wrongCount: 0,
    overview: {
      totalAnswered: 0,
      totalAccuracyText: '暂无数据',
      todayAnswered: 0,
      wrongCount: 0
    }
  },

  onLoad() {
    this.loadHomeData()
  },

  onShow() {
    this.loadHomeData()
  },

  loadHomeData() {
    const chapterMap = {}
    const chapters = []
    const studyStats = storage.getStudyStats()
    const todayKey = storage.getTodayKey()
    const todayStats = studyStats.dailyStats[todayKey] || {
      answered: 0,
      correct: 0,
      wrong: 0
    }
    const wrongCount = storage.getWrongQuestionCount(questions)

    questions.forEach(function (item) {
      if (!chapterMap[item.chapter]) {
        chapterMap[item.chapter] = {
          name: item.chapter,
          count: 0,
          answered: 0,
          accuracyText: '未开始',
          studyText: '未开始'
        }
        chapters.push(chapterMap[item.chapter])
      }
      chapterMap[item.chapter].count += 1
    })

    chapters.forEach(function (chapter) {
      const chapterStats = studyStats.chapterStats[chapter.name]

      if (chapterStats && chapterStats.answered) {
        chapter.answered = chapterStats.answered
        chapter.accuracyText = storage.getAccuracy(chapterStats.correct, chapterStats.answered) + '%'
        chapter.studyText = '已答 ' + chapter.answered + '｜正确率 ' + chapter.accuracyText
      }
    })

    this.setData({
      chapters: chapters,
      totalCount: questions.length,
      wrongCount: wrongCount,
      overview: {
        totalAnswered: studyStats.totalAnswered,
        totalAccuracyText: storage.getAccuracyText(studyStats.totalCorrect, studyStats.totalAnswered),
        todayAnswered: todayStats.answered || 0,
        wrongCount: wrongCount
      }
    })
  },

  startRandom() {
    wx.navigateTo({
      url: '/pages/quiz/quiz?mode=random'
    })
  },

  startChapter(e) {
    const chapter = e.currentTarget.dataset.chapter
    wx.navigateTo({
      url: '/pages/quiz/quiz?mode=chapter&chapter=' + encodeURIComponent(chapter)
    })
  },

  openWrongBook() {
    wx.navigateTo({
      url: '/pages/quiz/quiz?mode=wrong'
    })
  },

  openStudyStats() {
    wx.navigateTo({
      url: '/pages/stats/stats'
    })
  },

  clearWrongBook() {
    const that = this

    wx.showModal({
      title: '清空错题',
      content: '确认清空本地错题本吗？',
      confirmText: '清空',
      success(res) {
        if (res.confirm) {
          storage.clearWrongQuestions()
          that.loadHomeData()
          wx.showToast({
            title: '已清空错题',
            icon: 'success'
          })
        }
      }
    })
  },

  clearStudyStats() {
    const that = this

    wx.showModal({
      title: '清空学习统计',
      content: '确认清空累计学习统计吗？错题本不会被清空。',
      confirmText: '清空',
      success(res) {
        if (res.confirm) {
          storage.clearStudyStats()
          that.loadHomeData()
          wx.showToast({
            title: '已清空统计',
            icon: 'success'
          })
        }
      }
    })
  }
})

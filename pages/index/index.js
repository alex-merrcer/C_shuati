const questions = require('../../data/questions')

Page({
  data: {
    chapters: [],
    totalCount: 0,
    wrongCount: 0
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

    questions.forEach(function (item) {
      if (!chapterMap[item.chapter]) {
        chapterMap[item.chapter] = {
          name: item.chapter,
          count: 0
        }
        chapters.push(chapterMap[item.chapter])
      }
      chapterMap[item.chapter].count += 1
    })

    this.setData({
      chapters: chapters,
      totalCount: questions.length,
      wrongCount: this.getWrongCount()
    })
  },

  getWrongCount() {
    const ids = wx.getStorageSync('wrongQuestionIds')
    return Array.isArray(ids) ? ids.length : 0
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

  clearWrongBook() {
    const that = this

    wx.showModal({
      title: '清空错题',
      content: '确认清空本地错题本吗？',
      confirmText: '清空',
      success(res) {
        if (res.confirm) {
          wx.setStorageSync('wrongQuestionIds', [])
          that.setData({
            wrongCount: 0
          })
          wx.showToast({
            title: '已清空错题',
            icon: 'success'
          })
        }
      }
    })
  }
})

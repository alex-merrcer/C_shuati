const questions = require('../../data/questions')
const storage = require('../../utils/storage')

const SUBJECTS = [
  {
    key: 'c',
    name: 'C语言刷题',
    shortName: 'C语言',
    description: '嵌入式 C 语言选择题'
  },
  {
    key: 'stm32',
    name: 'STM32刷题',
    shortName: 'STM32',
    description: '标准外设库 SPL 选择题'
  }
]

const TYPE_LABELS = {
  concept: '概念理解',
  code_read: '代码阅读',
  bug_fix: '错误诊断',
  fill_blank: '填空选择',
  missing_step: '补漏步骤',
  calculation: '计算推导',
  scenario: '工程场景',
  scenario_code: '工程场景',
  interview: '面试综合'
}

function getSubjectMeta(subject) {
  const normalizedSubject = storage.normalizeSubject(subject)

  for (let i = 0; i < SUBJECTS.length; i += 1) {
    if (SUBJECTS[i].key === normalizedSubject) {
      return SUBJECTS[i]
    }
  }

  return SUBJECTS[0]
}

function getSubjectQuestions(subject) {
  const normalizedSubject = storage.normalizeSubject(subject)

  return questions.filter(function (question) {
    return storage.normalizeSubject(question.subject) === normalizedSubject
  })
}

function buildSubjectTabs(currentSubject) {
  return SUBJECTS.map(function (subject) {
    return {
      key: subject.key,
      name: subject.name,
      description: subject.description,
      className: subject.key === currentSubject ? ' active' : ''
    }
  })
}

function buildTypeRows(questionList) {
  const typeMap = {}
  const rows = []

  questionList.forEach(function (question) {
    if (!typeMap[question.type]) {
      typeMap[question.type] = {
        type: question.type,
        label: TYPE_LABELS[question.type] || question.type,
        count: 0
      }
      rows.push(typeMap[question.type])
    }
    typeMap[question.type].count += 1
  })

  return rows.sort(function (a, b) {
    return a.label.localeCompare(b.label)
  })
}

Page({
  data: {
    subjects: buildSubjectTabs('c'),
    currentSubject: 'c',
    subjectTitle: 'C语言刷题',
    subjectDescription: '嵌入式 C 语言选择题',
    chapters: [],
    typeRows: [],
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

  switchSubject(e) {
    const subject = storage.normalizeSubject(e.currentTarget.dataset.subject)
    this.setData({
      currentSubject: subject
    })
    this.loadHomeData(subject)
  },

  loadHomeData(subjectValue) {
    const subject = storage.normalizeSubject(subjectValue || this.data.currentSubject)
    const subjectMeta = getSubjectMeta(subject)
    const subjectQuestions = getSubjectQuestions(subject)
    const chapterMap = {}
    const chapters = []
    const studyStats = storage.getStudyStats()
    const todayKey = storage.getTodayKey()
    const subjectStats = storage.getSubjectStats(studyStats, subject)
    const todayStats = storage.getSubjectDailyStats(studyStats, subject, todayKey)
    const wrongCount = storage.getWrongQuestionCount(subjectQuestions, subject)

    subjectQuestions.forEach(function (item) {
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
      const chapterStats = storage.getScopedCounter(studyStats.chapterStats, subject, chapter.name)

      if (chapterStats && chapterStats.answered) {
        chapter.answered = chapterStats.answered
        chapter.accuracyText = storage.getAccuracy(chapterStats.correct, chapterStats.answered) + '%'
        chapter.studyText = '已答 ' + chapter.answered + '｜正确率 ' + chapter.accuracyText
      }
    })

    this.setData({
      subjects: buildSubjectTabs(subject),
      currentSubject: subject,
      subjectTitle: subjectMeta.name,
      subjectDescription: subjectMeta.description,
      chapters: chapters,
      typeRows: buildTypeRows(subjectQuestions),
      totalCount: subjectQuestions.length,
      wrongCount: wrongCount,
      overview: {
        totalAnswered: subjectStats.answered,
        totalAccuracyText: storage.getAccuracyText(subjectStats.correct, subjectStats.answered),
        todayAnswered: todayStats.answered || 0,
        wrongCount: wrongCount
      }
    })
  },

  startRandom() {
    wx.navigateTo({
      url: '/pages/quiz/quiz?subject=' + this.data.currentSubject + '&mode=random'
    })
  },

  startChapter(e) {
    const chapter = e.currentTarget.dataset.chapter
    wx.navigateTo({
      url: '/pages/quiz/quiz?subject=' + this.data.currentSubject + '&mode=chapter&chapter=' + encodeURIComponent(chapter)
    })
  },

  startType(e) {
    const type = e.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/quiz/quiz?subject=' + this.data.currentSubject + '&mode=type&type=' + encodeURIComponent(type)
    })
  },

  openWrongBook() {
    wx.navigateTo({
      url: '/pages/quiz/quiz?subject=' + this.data.currentSubject + '&mode=wrong'
    })
  },

  openStudyStats() {
    wx.navigateTo({
      url: '/pages/stats/stats?subject=' + this.data.currentSubject
    })
  },

  clearWrongBook() {
    const that = this
    const subjectName = getSubjectMeta(this.data.currentSubject).shortName

    wx.showModal({
      title: '清空错题',
      content: '确认清空' + subjectName + '的本地错题本吗？',
      confirmText: '清空',
      success(res) {
        if (res.confirm) {
          storage.clearWrongQuestions(that.data.currentSubject)
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

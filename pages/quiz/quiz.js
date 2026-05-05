const questions = require('../../data/questions')
const storage = require('../../utils/storage')

function shuffleQuestions(list) {
  const copied = list.slice()

  for (let i = copied.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = copied[i]
    copied[i] = copied[j]
    copied[j] = temp
  }

  return copied
}

function getQuestionById(id) {
  for (let i = 0; i < questions.length; i += 1) {
    if (questions[i].id === id) {
      return questions[i]
    }
  }

  return null
}

function getWrongQuestionIds() {
  return storage.getWrongQuestionIds(questions)
}

function saveWrongQuestionId(id, selectedAnswer) {
  const question = getQuestionById(id)

  if (!question) {
    return false
  }

  return storage.saveWrongQuestion(question, selectedAnswer)
}

function removeWrongQuestionId(id) {
  return storage.removeWrongQuestion(id)
}

function getOptionLabel(index) {
  const labels = ['A', 'B', 'C', 'D']
  return labels[index] || ''
}

function createRoundStats(total) {
  return {
    total: total,
    answered: 0,
    correct: 0,
    wrong: 0,
    accuracy: 0,
    newWrongCount: 0,
    removedWrongCount: 0
  }
}

Page({
  data: {
    mode: 'random',
    chapter: '',
    questionList: [],
    answerRecords: {},
    roundStats: createRoundStats(0),
    currentIndex: 0,
    totalCount: 0,
    currentQuestion: null,
    optionItems: [],
    selectedAnswer: null,
    submitted: false,
    isCorrect: false,
    correctAnswerText: ''
  },

  onLoad(options) {
    const mode = options.mode || 'random'
    const chapter = options.chapter ? decodeURIComponent(options.chapter) : ''
    let list = []

    storage.migrateWrongQuestions(questions)

    if (mode === 'chapter') {
      list = questions.filter(function (item) {
        return item.chapter === chapter
      })

      if (list.length === 0) {
        this.backWithToast('该章节暂无题目')
        return
      }
    } else if (mode === 'wrong') {
      const wrongIds = getWrongQuestionIds()

      if (wrongIds.length === 0) {
        this.backWithToast('暂无错题')
        return
      }

      list = questions.filter(function (item) {
        return wrongIds.indexOf(item.id) !== -1
      })

      if (list.length === 0) {
        storage.clearWrongQuestions()
        this.backWithToast('暂无错题')
        return
      }
    } else {
      list = questions
    }

    const shuffled = shuffleQuestions(list)

    this.setData({
      mode: mode,
      chapter: chapter,
      questionList: shuffled,
      answerRecords: {},
      roundStats: createRoundStats(shuffled.length),
      currentIndex: 0,
      totalCount: shuffled.length
    })
    this.loadCurrentQuestion()
  },

  backWithToast(title) {
    wx.showToast({
      title: title,
      icon: 'none',
      duration: 1200
    })

    setTimeout(function () {
      wx.navigateBack({
        delta: 1
      })
    }, 1200)
  },

  loadCurrentQuestion() {
    const question = this.data.questionList[this.data.currentIndex]
    const record = question ? this.data.answerRecords[question.id] : null
    const selectedAnswer = record ? record.selectedAnswer : null
    const submitted = !!record
    const isCorrect = record ? record.isCorrect : false

    this.setData({
      currentQuestion: question,
      optionItems: this.buildOptionItems(question, selectedAnswer, submitted),
      selectedAnswer: selectedAnswer,
      submitted: submitted,
      isCorrect: isCorrect,
      correctAnswerText: submitted && !isCorrect ? getOptionLabel(question.answer) + '. ' + question.options[question.answer] : ''
    })
  },

  buildOptionItems(question, selectedAnswer, submitted) {
    if (!question) {
      return []
    }

    return question.options.map(function (option, index) {
      let className = ''

      if (selectedAnswer === index) {
        className += ' selected'
      }

      if (submitted && question.answer === index) {
        className += ' correct'
      }

      if (submitted && selectedAnswer === index && selectedAnswer !== question.answer) {
        className += ' wrong'
      }

      return {
        index: index,
        label: getOptionLabel(index),
        text: option,
        className: className
      }
    })
  },

  selectOption(e) {
    if (this.data.submitted) {
      return
    }

    const selectedAnswer = Number(e.currentTarget.dataset.index)
    this.submitSelectedAnswer(selectedAnswer)
  },

  submitSelectedAnswer(selectedAnswer) {
    const question = this.data.currentQuestion

    if (!question || selectedAnswer < 0 || selectedAnswer > 3 || this.data.answerRecords[question.id]) {
      return
    }

    const isCorrect = selectedAnswer === question.answer
    const answerRecords = Object.assign({}, this.data.answerRecords)
    let newWrong = false
    let removedWrong = false

    answerRecords[question.id] = {
      selectedAnswer: selectedAnswer,
      isCorrect: isCorrect,
      answeredAt: Date.now()
    }

    if (isCorrect) {
      if (this.data.mode === 'wrong') {
        removedWrong = removeWrongQuestionId(question.id)
      }
    } else {
      newWrong = saveWrongQuestionId(question.id, selectedAnswer)
    }

    storage.updateStudyStats(question, isCorrect)

    this.setData({
      answerRecords: answerRecords,
      roundStats: this.buildNextRoundStats(isCorrect, newWrong, removedWrong),
      selectedAnswer: selectedAnswer,
      submitted: true,
      isCorrect: isCorrect,
      correctAnswerText: isCorrect ? '' : getOptionLabel(question.answer) + '. ' + question.options[question.answer],
      optionItems: this.buildOptionItems(question, selectedAnswer, true)
    })
  },

  buildNextRoundStats(isCorrect, newWrong, removedWrong) {
    const stats = Object.assign({}, this.data.roundStats)

    stats.total = this.data.totalCount
    stats.answered += 1

    if (isCorrect) {
      stats.correct += 1
    } else {
      stats.wrong += 1
    }

    if (newWrong) {
      stats.newWrongCount += 1
    }

    if (removedWrong) {
      stats.removedWrongCount += 1
    }

    stats.accuracy = stats.answered ? Math.round((stats.correct / stats.answered) * 100) : 0

    return stats
  },

  handleTouchStart(e) {
    const touch = e.touches && e.touches[0]

    if (!touch) {
      return
    }

    this.touchStartX = touch.clientX
    this.touchStartY = touch.clientY
  },

  handleTouchEnd(e) {
    const touch = e.changedTouches && e.changedTouches[0]

    if (!touch || this.touchStartX === undefined || this.touchStartY === undefined) {
      return
    }

    const deltaX = touch.clientX - this.touchStartX
    const deltaY = touch.clientY - this.touchStartY
    const absX = Math.abs(deltaX)
    const absY = Math.abs(deltaY)

    if (absX < 70 || absX < absY * 1.2) {
      return
    }

    if (deltaX < 0) {
      this.goNextQuestion()
    } else {
      this.goPrevQuestion()
    }
  },

  goNextQuestion() {
    const that = this

    if (this.data.currentIndex >= this.data.totalCount - 1) {
      this.showRoundStatsAndBack()
      return
    }

    this.setData({
      currentIndex: this.data.currentIndex + 1
    }, function () {
      that.loadCurrentQuestion()
    })
  },

  goPrevQuestion() {
    const that = this

    if (this.data.currentIndex <= 0) {
      wx.showToast({
        title: '已经是第一题',
        icon: 'none'
      })
      return
    }

    this.setData({
      currentIndex: this.data.currentIndex - 1
    }, function () {
      that.loadCurrentQuestion()
    })
  },

  showRoundStatsAndBack() {
    const stats = this.data.roundStats
    const content = [
      '总题数：' + stats.total,
      '已答题：' + stats.answered,
      '答对：' + stats.correct,
      '答错：' + stats.wrong,
      '正确率：' + stats.accuracy + '%',
      '新增错题：' + stats.newWrongCount,
      '移出错题：' + stats.removedWrongCount
    ].join('\n')

    wx.showModal({
      title: '本轮刷题完成',
      content: content,
      showCancel: false,
      success() {
        wx.navigateBack({
          delta: 1
        })
      }
    })
  },

  getOptionLabel(index) {
    return getOptionLabel(index)
  }
})

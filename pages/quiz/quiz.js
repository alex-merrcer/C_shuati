const questions = require('../../data/questions')

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

function getWrongQuestionIds() {
  const ids = wx.getStorageSync('wrongQuestionIds')
  return Array.isArray(ids) ? ids : []
}

function saveWrongQuestionId(id) {
  const ids = getWrongQuestionIds()

  if (ids.indexOf(id) === -1) {
    ids.push(id)
    wx.setStorageSync('wrongQuestionIds', ids)
  }
}

function removeWrongQuestionId(id) {
  const ids = getWrongQuestionIds()
  const nextIds = ids.filter(function (item) {
    return item !== id
  })

  wx.setStorageSync('wrongQuestionIds', nextIds)
}

function getOptionLabel(index) {
  const labels = ['A', 'B', 'C', 'D']
  return labels[index] || ''
}

Page({
  data: {
    mode: 'random',
    chapter: '',
    questionList: [],
    answerRecords: {},
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
        wx.setStorageSync('wrongQuestionIds', [])
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

    if (!question || selectedAnswer < 0 || selectedAnswer > 3) {
      return
    }

    const isCorrect = selectedAnswer === question.answer
    const answerRecords = Object.assign({}, this.data.answerRecords)

    answerRecords[question.id] = {
      selectedAnswer: selectedAnswer,
      isCorrect: isCorrect
    }

    if (isCorrect) {
      if (this.data.mode === 'wrong') {
        removeWrongQuestionId(question.id)
      }
    } else {
      saveWrongQuestionId(question.id)
    }

    this.setData({
      answerRecords: answerRecords,
      selectedAnswer: selectedAnswer,
      submitted: true,
      isCorrect: isCorrect,
      correctAnswerText: isCorrect ? '' : getOptionLabel(question.answer) + '. ' + question.options[question.answer],
      optionItems: this.buildOptionItems(question, selectedAnswer, true)
    })
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
      wx.showModal({
        title: '提示',
        content: '本轮刷题完成',
        showCancel: false,
        success() {
          wx.navigateBack({
            delta: 1
          })
        }
      })
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

  getOptionLabel(index) {
    return getOptionLabel(index)
  }
})

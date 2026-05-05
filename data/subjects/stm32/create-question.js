function createQuestion(question) {
  const typeMap = {
    fill_blank: 'concept',
    scenario_code: 'scenario',
    interview: 'concept'
  }

  return Object.assign({
    subject: 'stm32',
    code: '',
    reviewStatus: '待复核'
  }, question, {
    type: typeMap[question.type] || question.type
  })
}

module.exports = createQuestion

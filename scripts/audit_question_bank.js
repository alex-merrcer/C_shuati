const fs = require('fs')
const path = require('path')

const rootDir = path.join(__dirname, '..')
const treePath = path.join(rootDir, '嵌入式C语言知识树.md')
const reportPath = path.join(rootDir, 'docs', 'question_bank_audit.md')
const questions = require(path.join(rootDir, 'data', 'questions'))

function stripNumber(text) {
  return text.replace(/^\s*\d+(\.\d+)*\s*/, '').trim()
}

function normalize(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[ \t\r\n"'`*_#\-—–:：,，.。;；()（）[\]【】{}<>《》/\\|]/g, '')
    .replace(/相关|基础|常见|问题|操作|判断|区别|使用|应用|处理|计算|访问|定义|特性|机制|规则/g, '')
}

function parseKnowledgeTree(content) {
  const lines = content.split(/\r?\n/)
  const chapters = []
  const sections = []
  const leaves = []
  let currentChapter = null
  let currentSection = null

  lines.forEach(function (line) {
    if (/^#\s+/.test(line)) {
      currentChapter = {
        raw: line.replace(/^#\s+/, '').trim(),
        title: stripNumber(line.replace(/^#\s+/, '').trim())
      }
      chapters.push(currentChapter)
      currentSection = null
      return
    }

    if (/^##\s+/.test(line)) {
      currentSection = {
        raw: line.replace(/^##\s+/, '').trim(),
        title: stripNumber(line.replace(/^##\s+/, '').trim()),
        chapter: currentChapter ? currentChapter.title : ''
      }
      sections.push(currentSection)
      return
    }

    if (/^###\s+/.test(line)) {
      leaves.push({
        raw: line.replace(/^###\s+/, '').trim(),
        title: stripNumber(line.replace(/^###\s+/, '').trim()),
        chapter: currentChapter ? currentChapter.title : '',
        section: currentSection ? currentSection.title : ''
      })
    }
  })

  return {
    chapters: chapters,
    sections: sections,
    leaves: leaves
  }
}

function getQuestionCorpus(question) {
  return normalize([
    question.chapter,
    question.topic,
    question.question,
    question.explanation,
    Array.isArray(question.tags) ? question.tags.join(' ') : '',
    Array.isArray(question.options) ? question.options.join(' ') : ''
  ].join(' '))
}

function isLeafCovered(leaf, corpuses) {
  const leafText = normalize(leaf.title)
  const sectionText = normalize(leaf.section)

  if (!leafText) {
    return false
  }

  return corpuses.some(function (corpus) {
    if (corpus.indexOf(leafText) !== -1) {
      return true
    }

    if (leafText.length >= 4 && corpus.indexOf(leafText.slice(0, 4)) !== -1 && corpus.indexOf(sectionText) !== -1) {
      return true
    }

    if (sectionText && corpus.indexOf(sectionText) !== -1 && leafText.indexOf(sectionText) !== -1) {
      return true
    }

    return false
  })
}

function countBy(list, picker) {
  const map = {}

  list.forEach(function (item) {
    const key = picker(item)
    map[key] = (map[key] || 0) + 1
  })

  return map
}

function topEntries(map, limit) {
  return Object.keys(map)
    .map(function (key) {
      return {
        key: key,
        count: map[key]
      }
    })
    .sort(function (a, b) {
      return b.count - a.count || a.key.localeCompare(b.key)
    })
    .slice(0, limit)
}

function getStem(questionText) {
  return questionText.replace(/「.*?」/g, '「...」')
}

function getStructuralIssues() {
  const issues = []
  const idMap = {}
  const questionTextMap = {}
  const allowedDifficulties = {
    '基础': true,
    '进阶': true,
    '易错': true,
    '面试': true
  }

  questions.forEach(function (question, index) {
    const label = question.id || 'index-' + index

    if (!question.id) {
      issues.push(label + ': id 为空')
    } else if (idMap[question.id]) {
      issues.push(label + ': id 重复')
    }
    idMap[question.id] = true

    if (!Array.isArray(question.options) || question.options.length !== 4) {
      issues.push(label + ': options 不是 4 个')
    } else {
      const optionSet = {}
      question.options.forEach(function (option) {
        optionSet[option] = true
      })
      if (Object.keys(optionSet).length !== 4) {
        issues.push(label + ': 选项内容重复')
      }
    }

    if ([0, 1, 2, 3].indexOf(question.answer) === -1) {
      issues.push(label + ': answer 非法')
    }

    if (!allowedDifficulties[question.difficulty]) {
      issues.push(label + ': difficulty 非法')
    }

    if (!question.question || !String(question.question).trim()) {
      issues.push(label + ': question 为空')
    }

    if (!question.explanation || !String(question.explanation).trim()) {
      issues.push(label + ': explanation 为空')
    }

    if (!Array.isArray(question.tags)) {
      issues.push(label + ': tags 不是数组')
    }

    questionTextMap[question.question] = (questionTextMap[question.question] || 0) + 1
  })

  Object.keys(questionTextMap).forEach(function (text) {
    if (questionTextMap[text] > 1) {
      issues.push('题干重复: ' + text)
    }
  })

  return issues
}

function getQualitySignals() {
  const stemCount = countBy(questions, function (question) {
    return getStem(question.question)
  })
  const explanationCount = countBy(questions, function (question) {
    return question.explanation
  })
  const topicCount = countBy(questions, function (question) {
    return question.chapter + ' / ' + question.topic
  })
  const shortExplanationCount = questions.filter(function (question) {
    return question.explanation.length < 45
  }).length
  const codeQuestionCount = questions.filter(function (question) {
    return question.question.indexOf('\n') !== -1 || question.question.indexOf(';') !== -1 || question.question.indexOf('#define') !== -1
  }).length
  const templateStemGroups = topEntries(stemCount, 10).filter(function (entry) {
    return entry.count >= 20
  })
  const repeatedExplanations = topEntries(explanationCount, 10).filter(function (entry) {
    return entry.count >= 5
  })

  return {
    shortExplanationCount: shortExplanationCount,
    codeQuestionCount: codeQuestionCount,
    templateStemGroups: templateStemGroups,
    repeatedExplanations: repeatedExplanations,
    topTopics: topEntries(topicCount, 15)
  }
}

function buildCoverage(tree) {
  const corpuses = questions.map(getQuestionCorpus)
  const coveredLeaves = []
  const uncoveredLeaves = []

  tree.leaves.forEach(function (leaf) {
    if (isLeafCovered(leaf, corpuses)) {
      coveredLeaves.push(leaf)
    } else {
      uncoveredLeaves.push(leaf)
    }
  })

  const chapterCoverage = {}
  tree.chapters.forEach(function (chapter) {
    chapterCoverage[chapter.title] = {
      total: 0,
      covered: 0
    }
  })

  tree.leaves.forEach(function (leaf) {
    if (!chapterCoverage[leaf.chapter]) {
      chapterCoverage[leaf.chapter] = {
        total: 0,
        covered: 0
      }
    }
    chapterCoverage[leaf.chapter].total += 1
  })

  coveredLeaves.forEach(function (leaf) {
    chapterCoverage[leaf.chapter].covered += 1
  })

  return {
    coveredLeaves: coveredLeaves,
    uncoveredLeaves: uncoveredLeaves,
    chapterCoverage: chapterCoverage
  }
}

function percent(numerator, denominator) {
  if (!denominator) {
    return '0%'
  }

  return Math.round((numerator / denominator) * 100) + '%'
}

function section(title) {
  return '\n## ' + title + '\n'
}

function table(headers, rows) {
  const lines = []
  lines.push('| ' + headers.join(' | ') + ' |')
  lines.push('| ' + headers.map(function () { return '---' }).join(' | ') + ' |')
  rows.forEach(function (row) {
    lines.push('| ' + row.join(' | ') + ' |')
  })
  return lines.join('\n')
}

function buildReport(tree, coverage, structuralIssues, qualitySignals) {
  const chapterQuestionCount = countBy(questions, function (question) {
    return question.chapter
  })
  const difficultyCount = countBy(questions, function (question) {
    return question.difficulty
  })
  const coveredCount = coverage.coveredLeaves.length
  const totalLeaves = tree.leaves.length
  const lines = []

  lines.push('# 题库覆盖与质量审查报告')
  lines.push('')
  lines.push('生成时间：' + new Date().toLocaleString())
  lines.push('')
  lines.push('本报告由 `node scripts/audit_question_bank.js` 生成，用于评估题库是否覆盖 `嵌入式C语言知识树.md`。覆盖判断采用关键词启发式匹配，结果适合定位缺口，不等同于人工最终审题。')

  lines.push(section('结论摘要'))
  lines.push('- 题库总量：' + questions.length + ' 道。')
  lines.push('- 知识树一级章节：' + tree.chapters.length + ' 个。')
  lines.push('- 知识树叶子知识点：' + totalLeaves + ' 个。')
  lines.push('- 启发式覆盖叶子知识点：' + coveredCount + ' 个，覆盖率 ' + percent(coveredCount, totalLeaves) + '。')
  lines.push('- 结构性错误：' + structuralIssues.length + ' 个。')
  lines.push('- 代码题数量：' + qualitySignals.codeQuestionCount + ' 道。')
  lines.push('- 短解析题数量：' + qualitySignals.shortExplanationCount + ' 道。')
  lines.push('')
  if (coverage.uncoveredLeaves.length === 0 && structuralIssues.length === 0 && qualitySignals.shortExplanationCount === 0) {
    lines.push('审查判断：当前题库已经补齐知识树叶子点，结构字段校验未发现问题，代码阅读题、边界判断题和错误诊断题数量已有明显提升。后续重点应从“补数量”转向人工复审：优先精修高频题干模板、核心章节反例题和解析表述的准确性。')
  } else {
    lines.push('审查判断：当前题库仍存在覆盖或结构质量缺口，下一步应继续按未覆盖叶子知识点、结构性问题和短解析题清单逐项修复。')
  }

  lines.push(section('章节题量分布'))
  lines.push(table(['题库章节', '题数'], topEntries(chapterQuestionCount, 50).map(function (entry) {
    return [entry.key, String(entry.count)]
  })))

  lines.push(section('难度分布'))
  lines.push(table(['难度', '题数'], topEntries(difficultyCount, 10).map(function (entry) {
    return [entry.key, String(entry.count)]
  })))

  lines.push(section('知识树章节覆盖'))
  lines.push(table(['知识树章节', '叶子点', '已覆盖', '覆盖率'], Object.keys(coverage.chapterCoverage).map(function (chapter) {
    const item = coverage.chapterCoverage[chapter]
    return [chapter, String(item.total), String(item.covered), percent(item.covered, item.total)]
  })))

  lines.push(section('未覆盖知识点清单'))
  if (coverage.uncoveredLeaves.length === 0) {
    lines.push('全部叶子知识点均已被启发式匹配覆盖。')
  } else {
    coverage.uncoveredLeaves.forEach(function (leaf) {
      lines.push('- ' + leaf.raw + '（' + leaf.chapter + ' / ' + leaf.section + '）')
    })
  }

  lines.push(section('题目质量信号'))
  lines.push('### 高频题干模板')
  if (qualitySignals.templateStemGroups.length === 0) {
    lines.push('未发现单一题干模板大量重复。')
  } else {
    lines.push(table(['题干模板', '数量'], qualitySignals.templateStemGroups.map(function (entry) {
      return [entry.key, String(entry.count)]
    })))
  }

  lines.push('')
  lines.push('### 重复解析')
  if (qualitySignals.repeatedExplanations.length === 0) {
    lines.push('未发现高频重复解析。')
  } else {
    lines.push(table(['解析文本前 60 字', '重复次数'], qualitySignals.repeatedExplanations.map(function (entry) {
      return [entry.key.slice(0, 60), String(entry.count)]
    })))
  }

  lines.push('')
  lines.push('### 高频题目主题')
  lines.push(table(['章节 / 主题', '题数'], qualitySignals.topTopics.map(function (entry) {
    return [entry.key, String(entry.count)]
  })))

  lines.push(section('结构性问题'))
  if (structuralIssues.length === 0) {
    lines.push('未发现 id、选项数量、答案范围、难度枚举、空题干、空解析等结构性错误。')
  } else {
    structuralIssues.forEach(function (issue) {
      lines.push('- ' + issue)
    })
  }

  lines.push(section('建议'))
  lines.push('- 不要再只按数量扩题，后续每一轮扩题应以“未覆盖知识点清单”为输入。')
  lines.push('- 对高频模板题进行人工或半自动改写，增加真实 C 代码片段、错误代码诊断、边界条件题。')
  lines.push('- 对数组、指针、字符串、结构体、内存、未定义行为等核心章节建立最低覆盖阈值，例如每个叶子知识点至少 2-3 道题。')
  lines.push('- 对数据结构题继续偏向 C 实现细节：数组实现、链表指针维护、内存池、边界判断，而不是抽象概念题。')
  lines.push('- 增加二次审题脚本：检测相同 explanation、相同 options 组合、过短解析、题干模板重复。')

  return lines.join('\n') + '\n'
}

function run() {
  const tree = parseKnowledgeTree(fs.readFileSync(treePath, 'utf8'))
  const coverage = buildCoverage(tree)
  const structuralIssues = getStructuralIssues()
  const qualitySignals = getQualitySignals()
  const report = buildReport(tree, coverage, structuralIssues, qualitySignals)

  fs.writeFileSync(reportPath, report, 'utf8')
  console.log('题库审查报告已生成：' + path.relative(rootDir, reportPath))
  console.log('题库总数：' + questions.length)
  console.log('知识树叶子点：' + tree.leaves.length)
  console.log('启发式覆盖：' + coverage.coveredLeaves.length + '/' + tree.leaves.length + '（' + percent(coverage.coveredLeaves.length, tree.leaves.length) + '）')
  console.log('结构性问题：' + structuralIssues.length)
}

run()

const path = require('path')
const fs = require('fs')
const parser = require('./mdParser')

function hyphenate (str) {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
}

module.exports = function extraDemo (content) {
  const markdownDir = path.dirname(this.resourcePath)
  const demoLinks = []

  content = content.replace(
    /<demo-code([\s\S]*?)>([\s\S]*?)<\/demo-code>/g,
    function (_, attrs, link) {
      link = link.trim() // 去换行符
      const tag = 'demo-code-' + hyphenate(path.basename(link, '.vue'))
      const fullLink = path.join(markdownDir, link)
      demoLinks.indexOf(fullLink) === -1 && demoLinks.push(fullLink)
      const demoContent = fs.readFileSync(fullLink, { encoding: 'utf8' })
      const demoParseredContent = parser.render(
        '```html\n' + demoContent + '\n```'
      )
      return `
        <demo-playground${attrs}
        origin-code="${escape(demoContent)}"
        code-snippet="${escape(demoParseredContent)}">
          <${tag} />
        </demo-playground>
      `
    }
  )

  return [content, demoLinks]
}

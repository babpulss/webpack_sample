const fs = require('fs')
const path = require('path')
const Handlebars = require('handlebars')

Handlebars.registerPartial('part', fs.readFileSync(path.resolve(__dirname, 'partials', 'part.hbs'), 'utf-8'))
Handlebars.registerPartial('part2', fs.readFileSync(path.resolve(__dirname, 'partials', 'part2.hbs'), 'utf-8'))

Handlebars.registerHelper('getHeader', function(text, root) {
  console.log(text);
  console.log(root);
  if (text === "hello") {
    return "world"
  } else {
    return "world22"
  }
})

module.exports = Handlebars
1. error - const messagebird = require('messagebird')('J3ztvuCWoT7wgUUZyX18rqUnB')
                                          ^

TypeError: require(...) is not a function


- solved from [this (added .initClient)](https://www.npmjs.com/package/messagebird)


2. app.engine('handlebars', expresshbs({ defaultLayout: 'main' }))
                         ^

TypeError: expresshbs is not a function


- solved from [this(first answer)](https://stackoverflow.com/questions/69959820/typeerror-exphbs-is-not-a-function)


3. Handlebars template being rendered as raw html
- solved from  [this(triple curly braces instead of double)](https://stackoverflow.com/questions/42751686/handlebars-template-being-rendered-as-raw-html)
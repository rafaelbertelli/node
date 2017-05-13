const fs = require('fs')

const files = fs.readdirSync(__dirname)

files.map(f => console.log(f))

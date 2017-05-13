const _ = require('lodash')

const alunos = [
    {
        nome : 'Rafael',
        nota : 8.5
    },
    {
        nome : 'Maria',
        nota : 8
    },
    {
        nome : 'Renan',
        nota : 7.5
    }
]

const media = _.sumBy(alunos, 'nota') / alunos.length

console.log(media)
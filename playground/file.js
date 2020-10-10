


const fs = require('fs')
const { info } = require('console')

//const JSONtext = JSON.stringify(text)
//const JSONpar = JSON.parse(JSONtext)
//fs.writeFileSync('sample1-json.json',JSONtext)

const readF = fs.readFileSync('sample1-json.json')
const info1 = JSON.parse(readF.toString())

info1.name='saiveer reddy'
info1.city='SF'

const ifoJSON = JSON.stringify(info1)
fs.writeFileSync('sample1-json.json',ifoJSON)
console.log(ifoJSON)
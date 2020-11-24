// jdi misalkan pgn CV 100k, rate 0,8. 
// Jdi buyer ketik #cv tsel 100.000 ovo
// Jdi kita bls kyak : silakan kirim pulsa ke blablabla sebesar 100.000, kita akan kirim ke ovo sebesar 80.000

const fs = require('fs-extra')
const groupList = JSON.parse(fs.readFileSync('./feature/groupList.json'))
const groupId = "628985665498-1605543004@g.us"

const check = groupList.includes(groupId)
console.log(check);
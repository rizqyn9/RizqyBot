"use strict";

// jdi misalkan pgn CV 100k, rate 0,8. 
// Jdi buyer ketik #cv tsel 100.000 ovo
// Jdi kita bls kyak : silakan kirim pulsa ke blablabla sebesar 100.000, kita akan kirim ke ovo sebesar 80.000
var fs = require('fs-extra');

var groupList = JSON.parse(fs.readFileSync('./feature/groupList.json'));
var groupId = "628985665498-1605543004@g.us";
var check = groupList.includes(groupId);
console.log(check);
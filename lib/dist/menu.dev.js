"use strict";

var fs = require('fs-extra'); // const { 
//     prefix
// } = JSON.parse(fs.readFileSync('./settings/setting.json'))


var _require = require('./../bot-setting.json'),
    botName = _require.botName,
    ownerNumber = _require.ownerNumber,
    memberLimit = _require.memberLimit,
    groupLimit = _require.groupLimit,
    prefix = _require.prefix,
    waFeed = _require.waFeed,
    waProblem = _require.waProblem,
    cacheMessage = _require.cacheMessage,
    botVersion = _require.botVersion;

exports.textTnC = function () {
  return "\nSyarat dan ketentuan penggunaan *".concat(botName, "* :\n\n- Dilarang melakukan spam pada ").concat(botName, ", terutama menggunakan fitur download.\n- Dilarang telepon ke nomor ").concat(botName, ", langsung *BLOCK OTOMATIS*.\n- Jangan lupa donasi agar ").concat(botName, " tetap berjalan (*").concat(prefix, "donasi*).\n- Semua privasi pengguna akan tetap aman, karena ").concat(botName, " ini sepenuhnya dijalankan pada sistem.\n\nBila terjadi kerusakan atau masalah pada ").concat(botName, " bisa hubungi : ").concat(waProblem);
};

exports.textMenu = function (pushname) {
  return "\n    Hai ".concat(pushname, "  \uD83E\uDD70 ! \nSelamat menggunakan *").concat(botName, "* v").concat(botVersion, " dari *R - Dev* \uD83E\uDD73\n\nDonasi jika RDP mati\nOpen jasa pembuatan Bot WA : ").concat(waFeed, "\n*_JASA_* = [*NOT FREE*]\n\nKirim perintah dibawah ini untuk menggunakan bot ini\n\nSticker creator :\n\u27B5 *").concat(prefix, "sticker*\n\u27B5 *").concat(prefix, "stickergif*\n\nTentang Bot:\n\u27B5 *").concat(prefix, "tnc*\n\u27B5 *").concat(prefix, "donasi*\n\u27B5 *").concat(prefix, "ownerbot*\n\nMenu buat bos R-Dev :\n\u27B5 *").concat(prefix, "ban* \n\u27B5 *").concat(prefix, "bc* \n\u27B5 *").concat(prefix, "leaveall* \n\u27B5 *").concat(prefix, "clearall* \n\nJangan lupa react dan donasi ya sob,\n*").concat(prefix, "donasi*\n\nTerimakasih \uD83D\uDE00");
};

exports.textAdmin = function () {
  return "\n    [ *Hanya untuk Admin Grup* ]  \n    \n    \u27B5 *".concat(prefix, "add*\n    \u27B5 *").concat(prefix, "kick* @tagUser\n    \u27B5 *").concat(prefix, "promote* @tagUser\n    \u27B5 *").concat(prefix, "demote* @tagUser\n    \u27B5 *").concat(prefix, "tagall*\n    \u27B5 *").concat(prefix, "del*\n    \n    \n    Menu buat bos R-Dev\n    \u27B5 *").concat(prefix, "kickall*\n    ");
};

exports.textDonasi = function () {
  return "\n    Terimakasih telah menggunakan bot ini, jika RDP mati maka bot tidak dapat digunakan, support developer sewa RDP mahal sob :(\n    \n    Direct Donasi :\n    OVO \t08985665498\n    Dana \t08985665498\n    GoPay \t08985665498\n    Link Aja \t08985665498\n    \n    Donasi yang masuk akan digunakan untuk pengembangan dan pengoperasian bot R-Bot.\n    Terimakasih - Rizqy as DEV";
};
"use strict";

var _require = require('../bot-setting.json'),
    waFeed = _require.waFeed,
    waProblem = _require.waProblem; // !Contact


var infoProblem = "Bila terjadi kesalahan silahkan hubungi : ".concat(waProblem, " as R-Dev");
var infoFeedback = "Untuk feedback dan selengkapya tentang Bot ini, bisa hubungi : ".concat(waFeed, " as *R-Dev*"); // !For Global
// !For personal
// !For Group

module.exports = {
  infoProblem: infoProblem,
  infoFeedback: infoFeedback
};
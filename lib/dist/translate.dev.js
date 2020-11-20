"use strict";

var _require = require('google-translate-open-api'),
    translate = _require["default"];

var style = require('../custom/console');
/**
 * Translate Text
 * @param  {String} text
 * @param  {String} lang
 */


module.exports = doing = function doing(text, lang) {
  return new Promise(function (resolve, reject) {
    console.log(style.msg("Menerjemahkan teks ke ".concat(lang)));
    translate(text, {
      tld: 'cn',
      to: lang
    }).then(function (text) {
      return resolve(text.data[0]);
    })["catch"](function (err) {
      return reject(err);
    });
  });
};
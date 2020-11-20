"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

require('dotenv').config();

var _require = require('@open-wa/wa-automate'),
    decryptMedia = _require.decryptMedia;

var moment = require('moment-timezone');

moment.tz.setDefault('Asia/Jakarta').locale('id');

var axios = require('axios');

var fetch = require('node-fetch');

var appRoot = require('app-root-path');

var low = require('lowdb');

var FileSync = require('lowdb/adapters/FileSync');

var db_group = new FileSync(appRoot + '/lib/data/group.json');
var db = low(db_group);
db.defaults({
  group: []
}).write();

var _require2 = require('remove.bg'),
    removeBackgroundFromImageBase64 = _require2.removeBackgroundFromImageBase64;

var _require3 = require('child_process'),
    exec = _require3.exec;

var _require4 = require('./lib'),
    menuId = _require4.menuId,
    cekResi = _require4.cekResi,
    urlShortener = _require4.urlShortener,
    meme = _require4.meme,
    translate = _require4.translate,
    getLocationData = _require4.getLocationData,
    images = _require4.images,
    resep = _require4.resep,
    rugapoi = _require4.rugapoi,
    rugaapi = _require4.rugaapi,
    cariKasar = _require4.cariKasar;

var _require5 = require('./utils'),
    msgFilter = _require5.msgFilter,
    color = _require5.color,
    processTime = _require5.processTime,
    isUrl = _require5.isUrl;

var _require6 = require('./utils/fetcher'),
    uploadImages = _require6.uploadImages;

var fs = require('fs-extra');

var banned = JSON.parse(fs.readFileSync('./settings/banned.json'));
var simi = JSON.parse(fs.readFileSync('./settings/simi.json'));
var ngegas = JSON.parse(fs.readFileSync('./settings/ngegas.json')); // ? BOT - Settings

var _require7 = require('./bot-setting.json'),
    botName = _require7.botName,
    ownerNumber = _require7.ownerNumber,
    memberLimit = _require7.memberLimit,
    groupLimit = _require7.groupLimit,
    prefix = _require7.prefix,
    waFeed = _require7.waFeed; // ? Style console


var style = require('./custom/console');

var _require8 = require('./msg/msg-temp'),
    infoProblem = _require8.infoProblem; // const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))
// let { 
//     ownerNumber, 
//     groupLimit, 
//     memberLimit,
//     prefix
// } = setting


var _JSON$parse = JSON.parse(fs.readFileSync('./settings/api.json')),
    apiNoBg = _JSON$parse.apiNoBg,
    apiSimi = _JSON$parse.apiSimi;

function formatin(duit) {
  var reverse = duit.toString().split('').reverse().join('');
  var ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan.join('.').split('').reverse().join('');
  return ribuan;
}

var inArray = function inArray(needle, haystack) {
  var length = haystack.length;

  for (var i = 0; i < length; i++) {
    if (haystack[i].id == needle) return i;
  }

  return false;
};

module.exports = HandleMsg = function HandleMsg(bocilClient, message) {
  var type, id, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList, body, name, formattedTitle, pushname, verifiedName, formattedName, botNumber, groupId, groupAdmins, isGroupAdmins, chats, pengirim, isBotGroupAdmins, command, arg, args, argx, isCmd, uaOverride, url, isQuotedImage, isQuotedVideo, isOwnerBot, isBanned, isSimi, isNgegas, isKasar, timeFormat, linkgrup, islink, chekgrup, cgrup, loadedMsg, chatIds, groups, encryptMedia, _mimetype, _mediaData, _imageBase, mediaData, imageBase64, base64img, outFile, result, filename, isGiphy, isMediaGiphy, getGiphyCode, giphyCode, smallGifUrl, gifUrl, _smallGifUrl, top, bottom, _encryptMedia, _mediaData2, getUrl, ImageBase64, qmaker, quotes, author, theme, hasilqmaker, nulisq, nulisp, responseh, data, idx, pesan, responseh2, last, responsh, responsih, surah, responsih2, _responsih2$data, name_translations, number_of_ayah, number_of_surah, recitations, solatx, solatj, daerahq, instag, quotex, randmeme, cariwall, hasilwall, carireddit, hasilreddit, cariresep, hasilresep, igstalk, igstalkpict, wikip, wikis, cuacaq, cuacap, chordq, chordp, scrinshit, _fetch, imgBS4, kurirs, ttsGB, dataText, quoteText, zoneStatus, datax, _i3, _zoneStatus$data$_i, zone, region, _zone, text, shortlink, klasemen, urut, textKlas, i, _i4, groupMem, hehex, _i5, inxx, nixx, reset, isOwner, allMem, _i6, xnxx, _i7, msg, chatz, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, idk, cvk, allChatz, allGroupz, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, gclist, allChatx, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, dchat, find, cekuser, isIn, denda, cekMember, _cekuser;

  return regeneratorRuntime.async(function HandleMsg$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          type = message.type, id = message.id, from = message.from, t = message.t, sender = message.sender, isGroupMsg = message.isGroupMsg, chat = message.chat, chatId = message.chatId, caption = message.caption, isMedia = message.isMedia, mimetype = message.mimetype, quotedMsg = message.quotedMsg, quotedMsgObj = message.quotedMsgObj, mentionedJidList = message.mentionedJidList;
          body = message.body;
          name = chat.name, formattedTitle = chat.formattedTitle;
          pushname = sender.pushname, verifiedName = sender.verifiedName, formattedName = sender.formattedName;
          pushname = pushname || verifiedName || formattedName; // verifiedName is the name of someone who uses a business account

          _context13.next = 8;
          return regeneratorRuntime.awrap(bocilClient.getHostNumber());

        case 8:
          _context13.t0 = _context13.sent;
          botNumber = _context13.t0 + '@c.us';
          groupId = isGroupMsg ? chat.groupMetadata.id : '';

          if (!isGroupMsg) {
            _context13.next = 17;
            break;
          }

          _context13.next = 14;
          return regeneratorRuntime.awrap(bocilClient.getGroupAdmins(groupId));

        case 14:
          _context13.t1 = _context13.sent;
          _context13.next = 18;
          break;

        case 17:
          _context13.t1 = '';

        case 18:
          groupAdmins = _context13.t1;
          isGroupAdmins = groupAdmins.includes(sender.id) || false;
          chats = type === 'chat' ? body : type === 'image' || type === 'video' ? caption : '';
          pengirim = sender.id;
          isBotGroupAdmins = groupAdmins.includes(botNumber) || false; // Bot Prefix

          body = type === 'chat' && body.startsWith(prefix) ? body : (type === 'image' && caption || type === 'video' && caption) && caption.startsWith(prefix) ? caption : '';
          command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
          arg = body.trim().substring(body.indexOf(' ') + 1);
          args = body.trim().split(/ +/).slice(1);
          argx = chats.slice(0).trim().split(/ +/).shift().toLowerCase();
          isCmd = body.startsWith(prefix);
          uaOverride = process.env.UserAgent;
          url = args.length !== 0 ? args[0] : '';
          isQuotedImage = quotedMsg && quotedMsg.type === 'image';
          isQuotedVideo = quotedMsg && quotedMsg.type === 'video'; // [IDENTIFY]

          isOwnerBot = ownerNumber.includes(pengirim);
          isBanned = banned.includes(pengirim);
          isSimi = simi.includes(chatId);
          isNgegas = ngegas.includes(chatId);
          _context13.next = 39;
          return regeneratorRuntime.awrap(cariKasar(chats));

        case 39:
          isKasar = _context13.sent;
          // ? Console View
          timeFormat = moment(t * 1000).format('DD/MM/YY HH:mm:ss'); //! SPAM RULES CONSOLE

          if (!(isCmd && msgFilter.isFiltered(from) && !isGroupMsg)) {
            _context13.next = 43;
            break;
          }

          return _context13.abrupt("return", style.spamChat(timeFormat, "".concat(command, " [").concat(args.length, "]"), 'from', pushname));

        case 43:
          if (!(isCmd && msgFilter.isFiltered(from) && isGroupMsg)) {
            _context13.next = 45;
            break;
          }

          return _context13.abrupt("return", style.spamGroup(timeFormat, "".concat(command, " [").concat(args.length, "]"), 'from', pushname, 'in', name || formattedTitle));

        case 45:
          //!BADWORDS CONSOLE
          if (!isCmd && isKasar && isGroupMsg) {
            style.exeGroup(timeFormat, "".concat(command, " [").concat(args.length, "]"), 'from', pushname, 'in', name || formattedTitle);
          } //!EXECUTION CONSOLE


          if (isCmd && !isGroupMsg) {
            style.exeChat(timeFormat, "".concat(command, " [").concat(args.length, "]"), 'from', pushname);
          }

          if (isCmd && isGroupMsg) {
            style.exeGroup(timeFormat, "".concat(command, " [").concat(args.length, "]"), 'from', pushname, 'in', name || formattedTitle);
          } // [BETA] Avoid Spam Message


          msgFilter.addFilter(from); //! Filter Banned People

          if (isBanned) {
            style.banPerson(timeFormat, "".concat(command, " [").concat(args.length, "]"), 'from', pushname);
          } //! COMMAND


          _context13.t2 = command;
          _context13.next = _context13.t2 === 'speed' ? 53 : _context13.t2 === 'ping' ? 53 : _context13.t2 === 'tnc' ? 56 : _context13.t2 === 'menu' ? 59 : _context13.t2 === 'help' ? 59 : _context13.t2 === 'menuadmin' ? 62 : _context13.t2 === 'donate' ? 69 : _context13.t2 === 'donasi' ? 69 : _context13.t2 === 'ownerbot' ? 72 : _context13.t2 === 'join' ? 75 : _context13.t2 === 'botstat' ? 99 : _context13.t2 === 'sticker' ? 110 : _context13.t2 === 'stiker' ? 110 : _context13.t2 === 'stickergif' ? 155 : _context13.t2 === 'stikergif' ? 155 : _context13.t2 === 'stikergiphy' ? 173 : _context13.t2 === 'stickergiphy' ? 173 : _context13.t2 === 'meme' ? 197 : _context13.t2 === 'quotemaker' ? 216 : _context13.t2 === 'nulis' ? 236 : _context13.t2 === 'listsurah' ? 245 : _context13.t2 === 'infosurah' ? 247 : _context13.t2 === 'surah' ? 258 : _context13.t2 === 'tafsir' ? 279 : _context13.t2 === 'alaudio' ? 298 : _context13.t2 === 'jsolat' ? 339 : _context13.t2 === 'daerah' ? 348 : _context13.t2 === 'instagram' ? 354 : _context13.t2 === 'ytmp3' ? 362 : _context13.t2 === 'ytmp4' ? 366 : _context13.t2 === 'artinama' ? 370 : _context13.t2 === 'cekjodoh' ? 374 : _context13.t2 === 'fakta' ? 378 : _context13.t2 === 'katabijak' ? 380 : _context13.t2 === 'pantun' ? 382 : _context13.t2 === 'quote' ? 384 : _context13.t2 === 'anime' ? 390 : _context13.t2 === 'kpop' ? 394 : _context13.t2 === 'memes' ? 398 : _context13.t2 === 'images' ? 403 : _context13.t2 === 'sreddit' ? 412 : _context13.t2 === 'resep' ? 421 : _context13.t2 === 'nekopoi' ? 430 : _context13.t2 === 'stalkig' ? 432 : _context13.t2 === 'wiki' ? 443 : _context13.t2 === 'cuaca' ? 452 : _context13.t2 === 'lirik' ? 461 : _context13.t2 === 'chord' ? 465 : _context13.t2 === 'ss' ? 474 : _context13.t2 === 'play' ? 482 : _context13.t2 === 'whatanime' ? 486 : _context13.t2 === 'resi' ? 504 : _context13.t2 === 'tts' ? 512 : _context13.t2 === 'translate' ? 520 : _context13.t2 === 'covidindo' ? 527 : _context13.t2 === 'ceklokasi' ? 529 : _context13.t2 === 'shortlink' ? 541 : _context13.t2 === 'bapakfont' ? 551 : _context13.t2 === 'klasmen' ? 555 : _context13.t2 === 'add' ? 565 : _context13.t2 === 'kick' ? 582 : _context13.t2 === 'promote' ? 608 : _context13.t2 === 'demote' ? 629 : _context13.t2 === 'bye' ? 650 : _context13.t2 === 'del' ? 656 : _context13.t2 === 'tagall' ? 664 : _context13.t2 === 'everyone' ? 664 : _context13.t2 === 'simisimi' ? 677 : _context13.t2 === 'simi' ? 681 : _context13.t2 === 'katakasar' ? 689 : _context13.t2 === 'kasar' ? 693 : _context13.t2 === 'reset' ? 701 : _context13.t2 === 'kickall' ? 710 : _context13.t2 === 'ban' ? 732 : _context13.t2 === 'bc' ? 738 : _context13.t2 === 'leaveall' ? 777 : _context13.t2 === 'clearall' ? 817 : 850;
          break;

        case 53:
          _context13.next = 55;
          return regeneratorRuntime.awrap(bocilClient.sendText(from, "Hai,\n respon bot : ".concat(processTime(t, moment()), " _Second_")));

        case 55:
          return _context13.abrupt("break", 851);

        case 56:
          _context13.next = 58;
          return regeneratorRuntime.awrap(bocilClient.sendText(from, menuId.textTnC()));

        case 58:
          return _context13.abrupt("break", 851);

        case 59:
          _context13.next = 61;
          return regeneratorRuntime.awrap(bocilClient.sendText(from, menuId.textMenu(pushname)).then(function () {
            return isGroupMsg && isGroupAdmins ? bocilClient.sendText(from, "Admin Grup : *".concat(prefix, "menuadmin*")) : null;
          }));

        case 61:
          return _context13.abrupt("break", 851);

        case 62:
          if (isGroupMsg) {
            _context13.next = 64;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Perintah ini hanya dapat digunakan didalam grup. ".concat(infoProblem), id));

        case 64:
          if (isGroupAdmins) {
            _context13.next = 66;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, '*Gagal*, perintah ini hanya dapat digunakan oleh admin grup', id));

        case 66:
          _context13.next = 68;
          return regeneratorRuntime.awrap(bocilClient.sendText(from, menuId.textAdmin()));

        case 68:
          return _context13.abrupt("break", 851);

        case 69:
          _context13.next = 71;
          return regeneratorRuntime.awrap(bocilClient.sendText(from, menuId.textDonasi()));

        case 71:
          return _context13.abrupt("break", 851);

        case 72:
          _context13.next = 74;
          return regeneratorRuntime.awrap(bocilClient.sendContact(from, ownerNumber).then(function () {
            return bocilClient.sendText(from, 'Jika kalian ingin request fitur silahkan chat nomor owner!');
          }));

        case 74:
          return _context13.abrupt("break", 851);

        case 75:
          if (!(args.length == 0)) {
            _context13.next = 77;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Jika kalian ingin mengundang bot kegroup silahkan invite atau dengan\nketik ".concat(prefix, "join [link group]"), id));

        case 77:
          linkgrup = body.slice(6);
          islink = linkgrup.match(/(https:\/\/chat.whatsapp.com)/gi);
          _context13.next = 81;
          return regeneratorRuntime.awrap(bocilClient.inviteInfo(linkgrup));

        case 81:
          chekgrup = _context13.sent;

          if (islink) {
            _context13.next = 84;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, 'Maaf link group-nya salah! silahkan kirim link yang benar', id));

        case 84:
          if (!isOwnerBot) {
            _context13.next = 89;
            break;
          }

          _context13.next = 87;
          return regeneratorRuntime.awrap(bocilClient.joinGroupViaLink(linkgrup).then(function _callee() {
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(bocilClient.sendText(from, 'Berhasil join grup via link!'));

                  case 2:
                    _context.next = 4;
                    return regeneratorRuntime.awrap(bocilClient.sendText(chekgrup.id, "Hai minna~, Im bocilClient BOT. To find out the commands on this bot type ".concat(prefix, "menu")));

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            });
          }));

        case 87:
          _context13.next = 98;
          break;

        case 89:
          _context13.next = 91;
          return regeneratorRuntime.awrap(bocilClient.getAllGroups());

        case 91:
          cgrup = _context13.sent;

          if (!(cgrup.length > groupLimit)) {
            _context13.next = 94;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Sorry, the group on this bot is full\nMax Group is: ".concat(groupLimit), id));

        case 94:
          if (!(cgrup.size < memberLimit)) {
            _context13.next = 96;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Sorry, BOT wil not join if the group members do not exceed ".concat(memberLimit, " people"), id));

        case 96:
          _context13.next = 98;
          return regeneratorRuntime.awrap(bocilClient.joinGroupViaLink(linkgrup).then(function _callee2() {
            return regeneratorRuntime.async(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return regeneratorRuntime.awrap(bocilClient.reply(from, 'Berhasil join grup via link!', id));

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          })["catch"](function () {
            bocilClient.reply(from, 'Gagal!', id);
          }));

        case 98:
          return _context13.abrupt("break", 851);

        case 99:
          _context13.next = 101;
          return regeneratorRuntime.awrap(bocilClient.getAmountOfLoadedMessages());

        case 101:
          loadedMsg = _context13.sent;
          _context13.next = 104;
          return regeneratorRuntime.awrap(bocilClient.getAllChatIds());

        case 104:
          chatIds = _context13.sent;
          _context13.next = 107;
          return regeneratorRuntime.awrap(bocilClient.getAllGroups());

        case 107:
          groups = _context13.sent;
          bocilClient.sendText(from, "Status :\n- *".concat(loadedMsg, "* Loaded Messages\n- *").concat(groups.length, "* Group Chats\n- *").concat(chatIds.length - groups.length, "* Personal Chats\n- *").concat(chatIds.length, "* Total Chats"));
          return _context13.abrupt("break", 851);

        case 110:
          if (!((isMedia || isQuotedImage) && args.length === 0)) {
            _context13.next = 120;
            break;
          }

          encryptMedia = isQuotedImage ? quotedMsg : message;
          _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype;
          _context13.next = 115;
          return regeneratorRuntime.awrap(decryptMedia(encryptMedia, uaOverride));

        case 115:
          _mediaData = _context13.sent;
          _imageBase = "data:".concat(_mimetype, ";base64,").concat(_mediaData.toString('base64'));
          bocilClient.sendImageAsSticker(from, _imageBase).then(function () {
            bocilClient.reply(from, "\u2611 Sukses dibuat ".concat(botName));
            console.log(style.msg(style.msg("Sticker Processed for ".concat(processTime(t, moment()), " Second"))));
          });
          _context13.next = 154;
          break;

        case 120:
          if (!(args[0] === 'nobg')) {
            _context13.next = 145;
            break;
          }

          if (!(isMedia || isQuotedImage)) {
            _context13.next = 143;
            break;
          }

          _context13.prev = 122;
          _context13.next = 125;
          return regeneratorRuntime.awrap(decryptMedia(message, uaOverride));

        case 125:
          mediaData = _context13.sent;
          imageBase64 = "data:".concat(mimetype, ";base64,").concat(mediaData.toString('base64'));
          base64img = imageBase64;
          outFile = './media/noBg.png'; // kamu dapat mengambil api key dari website remove.bg dan ubahnya difolder settings/api.json

          _context13.next = 131;
          return regeneratorRuntime.awrap(removeBackgroundFromImageBase64({
            base64img: base64img,
            apiKey: apiNoBg,
            size: 'auto',
            type: 'auto',
            outFile: outFile
          }));

        case 131:
          result = _context13.sent;
          _context13.next = 134;
          return regeneratorRuntime.awrap(fs.writeFile(outFile, result.base64img));

        case 134:
          _context13.next = 136;
          return regeneratorRuntime.awrap(bocilClient.sendImageAsSticker(from, "data:".concat(mimetype, ";base64,").concat(result.base64img)));

        case 136:
          _context13.next = 143;
          break;

        case 138:
          _context13.prev = 138;
          _context13.t3 = _context13["catch"](122);
          console.log(_context13.t3);
          _context13.next = 143;
          return regeneratorRuntime.awrap(bocilClient.reply(from, 'Maaf batas penggunaan hari ini sudah mencapai maksimal', id));

        case 143:
          _context13.next = 154;
          break;

        case 145:
          if (!(args.length === 1)) {
            _context13.next = 152;
            break;
          }

          if (isUrl(url)) {
            _context13.next = 149;
            break;
          }

          _context13.next = 149;
          return regeneratorRuntime.awrap(bocilClient.reply(from, 'Maaf, link yang kamu kirim tidak valid.', id));

        case 149:
          bocilClient.sendStickerfromUrl(from, url).then(function (r) {
            return !r && r !== undefined ? bocilClient.sendText(from, 'Maaf, link yang kamu kirim tidak memuat gambar.') : bocilClient.reply(from, "\u2611 Sukses dibuat ".concat(botName));
          }).then(function () {
            return console.log(style.msg("Sticker Processed for ".concat(processTime(t, moment()), " Second")));
          });
          _context13.next = 154;
          break;

        case 152:
          _context13.next = 154;
          return regeneratorRuntime.awrap(bocilClient.reply(from, "Tidak ada gambar! Untuk menggunakan ".concat(prefix, "sticker\n\n\nKirim gambar dengan caption\n").concat(prefix, "sticker <biasa>\n").concat(prefix, "sticker nobg <tanpa background>\n\natau Kirim pesan dengan\n").concat(prefix, "sticker <link_gambar>"), id));

        case 154:
          return _context13.abrupt("break", 851);

        case 155:
          if (!(isMedia || isQuotedVideo)) {
            _context13.next = 171;
            break;
          }

          if (!(mimetype === 'video/mp4' && message.duration < 10 || mimetype === 'image/gif' && message.duration < 10)) {
            _context13.next = 168;
            break;
          }

          _context13.next = 159;
          return regeneratorRuntime.awrap(decryptMedia(message, uaOverride));

        case 159:
          mediaData = _context13.sent;
          bocilClient.reply(from, '⌛ Sedang di proses silahkan tunggu ± 1 min!', id);
          filename = "./media/stickergif.".concat(mimetype.split('/')[1]);
          _context13.next = 164;
          return regeneratorRuntime.awrap(fs.writeFileSync(filename, mediaData));

        case 164:
          _context13.next = 166;
          return regeneratorRuntime.awrap(exec("gify ".concat(filename, " ./media/stickergf.gif --fps=30 --scale=240:240"), function _callee3(error, stdout, stderr) {
            var gif;
            return regeneratorRuntime.async(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return regeneratorRuntime.awrap(fs.readFileSync('./media/stickergf.gif', {
                      encoding: "base64"
                    }));

                  case 2:
                    gif = _context3.sent;
                    _context3.next = 5;
                    return regeneratorRuntime.awrap(bocilClient.sendImageAsSticker(from, "data:image/gif;base64,".concat(gif.toString('base64')))["catch"](function () {
                      bocilClient.reply(from, '↳ Maaf filenya terlalu besar!', id);
                    }));

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          }));

        case 166:
          _context13.next = 169;
          break;

        case 168:
          bocilClient.reply(from, "\u21B3 Kirim gif dengan *".concat(prefix, "stickergif* max video 10 sec!"), id);

        case 169:
          _context13.next = 172;
          break;

        case 171:
          bocilClient.reply(from, "\u21B3 Kirim gif dengan caption *".concat(prefix, "stickergif*"), id);

        case 172:
          return _context13.abrupt("break", 851);

        case 173:
          if (!(args.length !== 1)) {
            _context13.next = 175;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "\u2718 Format pesan salah.\nKetik pesan dengan *".concat(prefix, "stickergiphy* <link_giphy>"), id));

        case 175:
          isGiphy = url.match(new RegExp(/https?:\/\/(www\.)?giphy.com/, 'gi'));
          isMediaGiphy = url.match(new RegExp(/https?:\/\/media.giphy.com\/media/, 'gi'));

          if (!isGiphy) {
            _context13.next = 186;
            break;
          }

          getGiphyCode = url.match(new RegExp(/(\/|\-)(?:.(?!(\/|\-)))+$/, 'gi'));

          if (getGiphyCode) {
            _context13.next = 181;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, '✘ Gagal mengambil kode giphy', id));

        case 181:
          giphyCode = getGiphyCode[0].replace(/[-\/]/gi, '');
          smallGifUrl = 'https://media.giphy.com/media/' + giphyCode + '/giphy-downsized.gif';
          bocilClient.sendGiphyAsSticker(from, smallGifUrl).then(function () {
            bocilClient.reply(from, "\u2611 Sukses dibuat ".concat(botName));
            console.log(style.msg("Sticker Processed for ".concat(processTime(t, moment()), " Second")));
          })["catch"](function (err) {
            return console.log(err);
          });
          _context13.next = 196;
          break;

        case 186:
          if (!isMediaGiphy) {
            _context13.next = 194;
            break;
          }

          gifUrl = url.match(new RegExp(/(giphy|source).(gif|mp4)/, 'gi'));

          if (gifUrl) {
            _context13.next = 190;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, '✘ Gagal mengambil kode giphy', id));

        case 190:
          _smallGifUrl = url.replace(gifUrl[0], 'giphy-downsized.gif');
          bocilClient.sendGiphyAsSticker(from, _smallGifUrl).then(function () {
            bocilClient.reply(from, "\u2611 Sukses dibuat ".concat(botName));
            console.log(style.msg("Sticker Processed for ".concat(processTime(t, moment()), " Second")));
          })["catch"](function () {
            bocilClient.reply(from, "\u2718 Ada yang Error!", id);
          });
          _context13.next = 196;
          break;

        case 194:
          _context13.next = 196;
          return regeneratorRuntime.awrap(bocilClient.reply(from, '✘ Hanya bisa menggunakan link dari Giphy', id));

        case 196:
          return _context13.abrupt("break", 851);

        case 197:
          if (!((isMedia || isQuotedImage) && args.length >= 2)) {
            _context13.next = 213;
            break;
          }

          top = arg.split('|')[0];
          bottom = arg.split('|')[1];
          _encryptMedia = isQuotedImage ? quotedMsg : message;
          _context13.next = 203;
          return regeneratorRuntime.awrap(decryptMedia(_encryptMedia, uaOverride));

        case 203:
          _mediaData2 = _context13.sent;
          _context13.next = 206;
          return regeneratorRuntime.awrap(uploadImages(_mediaData2, false));

        case 206:
          getUrl = _context13.sent;
          _context13.next = 209;
          return regeneratorRuntime.awrap(meme.custom(getUrl, top, bottom));

        case 209:
          ImageBase64 = _context13.sent;
          bocilClient.sendFile(from, ImageBase64, 'image.png', '', null, true).then(function () {
            bocilClient.reply(from, 'Ini makasih!', id);
          })["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!');
          });
          _context13.next = 215;
          break;

        case 213:
          _context13.next = 215;
          return regeneratorRuntime.awrap(bocilClient.reply(from, "Tidak ada gambar! Silahkan kirim gambar dengan caption ".concat(prefix, "meme <teks_atas> | <teks_bawah>\ncontoh: ").concat(prefix, "meme teks atas | teks bawah"), id));

        case 215:
          return _context13.abrupt("break", 851);

        case 216:
          qmaker = body.trim().split('|');

          if (!(qmaker.length >= 3)) {
            _context13.next = 234;
            break;
          }

          quotes = qmaker[1];
          author = qmaker[2];
          theme = qmaker[3];
          bocilClient.reply(from, 'Proses kak..', id);
          _context13.prev = 222;
          _context13.next = 225;
          return regeneratorRuntime.awrap(images.quote(quotes, author, theme));

        case 225:
          hasilqmaker = _context13.sent;
          bocilClient.sendFileFromUrl(from, "".concat(hasilqmaker), '', 'Ini kak..', id);
          _context13.next = 232;
          break;

        case 229:
          _context13.prev = 229;
          _context13.t4 = _context13["catch"](222);
          bocilClient.reply('Yahh proses gagal, kakak isinya sudah benar belum?..', id);

        case 232:
          _context13.next = 235;
          break;

        case 234:
          bocilClient.reply(from, "Pemakaian ".concat(prefix, "quotemaker |isi quote|author|theme\n\ncontoh: ").concat(prefix, "quotemaker |aku sayang kamu|-bocilClient|random\n\nuntuk theme nya pakai random ya kak.."));

        case 235:
          return _context13.abrupt("break", 851);

        case 236:
          if (!(args.length == 0)) {
            _context13.next = 238;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Membuat bot menulis teks yang dikirim menjadi gambar\nPemakaian: ".concat(prefix, "nulis [teks]\n\ncontoh: ").concat(prefix, "nulis i love you 3000"), id));

        case 238:
          nulisq = body.slice(7);
          _context13.next = 241;
          return regeneratorRuntime.awrap(rugaapi.tulis(nulisq));

        case 241:
          nulisp = _context13.sent;
          _context13.next = 244;
          return regeneratorRuntime.awrap(bocilClient.sendImage(from, "".concat(nulisp), '', 'Nih...', id)["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!', id);
          }));

        case 244:
          return _context13.abrupt("break", 851);

        case 245:
          try {
            axios.get('https://raw.githubusercontent.com/bocilClientZ/grabbed-results/main/islam/surah.json').then(function (response) {
              var hehex = '╔══✪〘 List Surah 〙✪══\n';

              for (var _i = 0; _i < response.data.data.length; _i++) {
                hehex += '╠➥ ';
                hehex += response.data.data[_i].name.transliteration.id.toLowerCase() + '\n';
              }

              hehex += '╚═〘 *A R U G A  B O T* 〙';
              bocilClient.reply(from, hehex, id);
            });
          } catch (err) {
            bocilClient.reply(from, err, id);
          }

          return _context13.abrupt("break", 851);

        case 247:
          if (!(args.length == 0)) {
            _context13.next = 249;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "*_".concat(prefix, "infosurah <nama surah>_*\nMenampilkan informasi lengkap mengenai surah tertentu. Contoh penggunan: ").concat(prefix, "infosurah al-baqarah"), message.id));

        case 249:
          _context13.next = 251;
          return regeneratorRuntime.awrap(axios.get('https://raw.githubusercontent.com/bocilClientZ/grabbed-results/main/islam/surah.json'));

        case 251:
          responseh = _context13.sent;
          data = responseh.data.data;
          idx = data.findIndex(function (post, index) {
            if (post.name.transliteration.id.toLowerCase() == args[0].toLowerCase() || post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()) return true;
          });
          pesan = "";
          pesan = pesan + "Nama : " + data[idx].name.transliteration.id + "\n" + "Asma : " + data[idx].name["short"] + "\n" + "Arti : " + data[idx].name.translation.id + "\n" + "Jumlah ayat : " + data[idx].numberOfVerses + "\n" + "Nomor surah : " + data[idx].number + "\n" + "Jenis : " + data[idx].revelation.id + "\n" + "Keterangan : " + data[idx].tafsir.id;
          bocilClient.reply(from, pesan, message.id);
          return _context13.abrupt("break", 851);

        case 258:
          if (!(args.length == 0)) {
            _context13.next = 260;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "*_".concat(prefix, "surah <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ").concat(prefix, "surah al-baqarah 1\n\n*_").concat(prefix, "surah <nama surah> <ayat> en/id_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Inggris / Indonesia. Contoh penggunaan : ").concat(prefix, "surah al-baqarah 1 id"), message.id));

        case 260:
          _context13.next = 262;
          return regeneratorRuntime.awrap(axios.get('https://raw.githubusercontent.com/bocilClientZ/grabbed-results/main/islam/surah.json'));

        case 262:
          responseh = _context13.sent;
          data = responseh.data.data;
          idx = data.findIndex(function (post, index) {
            if (post.name.transliteration.id.toLowerCase() == args[0].toLowerCase() || post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()) return true;
          });
          nmr = data[idx].number;

          if (isNaN(nmr)) {
            _context13.next = 278;
            break;
          }

          _context13.next = 269;
          return regeneratorRuntime.awrap(axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + args[1]));

        case 269:
          responseh2 = _context13.sent;
          data = responseh2.data.data;

          last = function last(array, n) {
            if (array == null) return void 0;
            if (n == null) return array[array.length - 1];
            return array.slice(Math.max(array.length - n, 0));
          };

          bhs = last(args);
          pesan = "";
          pesan = pesan + data.text.arab + "\n\n";

          if (bhs == "en") {
            pesan = pesan + data.translation.en;
          } else {
            pesan = pesan + data.translation.id;
          }

          pesan = pesan + "\n\n(Q.S. " + data.surah.name.transliteration.id + ":" + args[1] + ")";
          bocilClient.reply(from, pesan, message.id);

        case 278:
          return _context13.abrupt("break", 851);

        case 279:
          if (!(args.length == 0)) {
            _context13.next = 281;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "*_".concat(prefix, "tafsir <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahan dan tafsirnya dalam bahasa Indonesia. Contoh penggunaan : ").concat(prefix, "tafsir al-baqarah 1"), message.id));

        case 281:
          _context13.next = 283;
          return regeneratorRuntime.awrap(axios.get('https://raw.githubusercontent.com/bocilClientZ/grabbed-results/main/islam/surah.json'));

        case 283:
          responsh = _context13.sent;
          data = responsh.data.data;
          idx = data.findIndex(function (post, index) {
            if (post.name.transliteration.id.toLowerCase() == args[0].toLowerCase() || post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()) return true;
          });
          nmr = data[idx].number;

          if (isNaN(nmr)) {
            _context13.next = 297;
            break;
          }

          _context13.next = 290;
          return regeneratorRuntime.awrap(axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + args[1]));

        case 290:
          responsih = _context13.sent;
          data = responsih.data.data;
          pesan = "";
          pesan = pesan + "Tafsir Q.S. " + data.surah.name.transliteration.id + ":" + args[1] + "\n\n";
          pesan = pesan + data.text.arab + "\n\n";
          pesan = pesan + "_" + data.translation.id + "_" + "\n\n" + data.tafsir.id["long"];
          bocilClient.reply(from, pesan, message.id);

        case 297:
          return _context13.abrupt("break", 851);

        case 298:
          if (!(args.length == 0)) {
            _context13.next = 300;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "*_".concat(prefix, "ALaudio <nama surah>_*\nMenampilkan tautan dari audio surah tertentu. Contoh penggunaan : ").concat(prefix, "ALaudio al-fatihah\n\n*_").concat(prefix, "ALaudio <nama surah> <ayat>_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ").concat(prefix, "ALaudio al-fatihah 1\n\n*_").concat(prefix, "ALaudio <nama surah> <ayat> en_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Inggris. Contoh penggunaan : ").concat(prefix, "ALaudio al-fatihah 1 en"), message.id));

        case 300:
          ayat = "ayat";
          bhs = "";
          _context13.next = 304;
          return regeneratorRuntime.awrap(axios.get('https://raw.githubusercontent.com/bocilClientZ/grabbed-results/main/islam/surah.json'));

        case 304:
          responseh = _context13.sent;
          surah = responseh.data;
          idx = surah.data.findIndex(function (post, index) {
            if (post.name.transliteration.id.toLowerCase() == args[0].toLowerCase() || post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()) return true;
          });
          nmr = surah.data[idx].number;

          if (isNaN(nmr)) {
            _context13.next = 338;
            break;
          }

          if (args.length > 2) {
            ayat = args[1];
          }

          if (args.length == 2) {
            last = function last(array, n) {
              if (array == null) return void 0;
              if (n == null) return array[array.length - 1];
              return array.slice(Math.max(array.length - n, 0));
            };

            ayat = last(args);
          }

          pesan = "";

          if (!isNaN(ayat)) {
            _context13.next = 324;
            break;
          }

          _context13.next = 315;
          return regeneratorRuntime.awrap(axios.get('https://raw.githubusercontent.com/bocilClientZ/grabbed-results/main/islam/surah/' + nmr + '.json'));

        case 315:
          responsih2 = _context13.sent;
          _responsih2$data = responsih2.data, name = _responsih2$data.name, name_translations = _responsih2$data.name_translations, number_of_ayah = _responsih2$data.number_of_ayah, number_of_surah = _responsih2$data.number_of_surah, recitations = _responsih2$data.recitations;
          pesan = pesan + "Audio Quran Surah ke-" + number_of_surah + " " + name + " (" + name_translations.ar + ") " + "dengan jumlah " + number_of_ayah + " ayat\n";
          pesan = pesan + "Dilantunkan oleh " + recitations[0].name + " : " + recitations[0].audio_url + "\n";
          pesan = pesan + "Dilantunkan oleh " + recitations[1].name + " : " + recitations[1].audio_url + "\n";
          pesan = pesan + "Dilantunkan oleh " + recitations[2].name + " : " + recitations[2].audio_url + "\n";
          bocilClient.reply(from, pesan, message.id);
          _context13.next = 338;
          break;

        case 324:
          _context13.next = 326;
          return regeneratorRuntime.awrap(axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + ayat));

        case 326:
          responsih2 = _context13.sent;
          data = responsih2.data.data;

          last = function last(array, n) {
            if (array == null) return void 0;
            if (n == null) return array[array.length - 1];
            return array.slice(Math.max(array.length - n, 0));
          };

          bhs = last(args);
          pesan = "";
          pesan = pesan + data.text.arab + "\n\n";

          if (bhs == "en") {
            pesan = pesan + data.translation.en;
          } else {
            pesan = pesan + data.translation.id;
          }

          pesan = pesan + "\n\n(Q.S. " + data.surah.name.transliteration.id + ":" + args[1] + ")";
          _context13.next = 336;
          return regeneratorRuntime.awrap(bocilClient.sendFileFromUrl(from, data.audio.secondary[0]));

        case 336:
          _context13.next = 338;
          return regeneratorRuntime.awrap(bocilClient.reply(from, pesan, message.id));

        case 338:
          return _context13.abrupt("break", 851);

        case 339:
          if (!(args.length == 0)) {
            _context13.next = 341;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Untuk melihat jadwal solat dari setiap daerah yang ada\nketik: ".concat(prefix, "jsolat [daerah]\n\nuntuk list daerah yang ada\nketik: ").concat(prefix, "daerah"), id));

        case 341:
          solatx = body.slice(8);
          _context13.next = 344;
          return regeneratorRuntime.awrap(rugaapi.jadwaldaerah(solatx));

        case 344:
          solatj = _context13.sent;
          _context13.next = 347;
          return regeneratorRuntime.awrap(bocilClient.reply(from, solatj, id)["catch"](function () {
            bocilClient.reply(from, 'Sudah input daerah yang ada dilist?', id);
          }));

        case 347:
          return _context13.abrupt("break", 851);

        case 348:
          _context13.next = 350;
          return regeneratorRuntime.awrap(rugaapi.daerah());

        case 350:
          daerahq = _context13.sent;
          _context13.next = 353;
          return regeneratorRuntime.awrap(bocilClient.reply(from, daerahq, id)["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!', id);
          }));

        case 353:
          return _context13.abrupt("break", 851);

        case 354:
          if (!(args.length == 0)) {
            _context13.next = 356;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Untuk mendownload gambar atau video instagram\nketik: *".concat(prefix, "instagram [link_ig]*"), id));

        case 356:
          _context13.next = 358;
          return regeneratorRuntime.awrap(rugaapi.insta(args[0]));

        case 358:
          instag = _context13.sent;
          _context13.next = 361;
          return regeneratorRuntime.awrap(bocilClient.sendFileFromUrl(from, instag, '', '', id)["catch"](function () {
            bocilClient.reply(from, '✘ ✘ Ada yang Error!', id);
          }));

        case 361:
          return _context13.abrupt("break", 851);

        case 362:
          if (!(args.length == 0)) {
            _context13.next = 364;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Untuk mendownload lagu dari youtube\nketik: *".concat(prefix, "ytmp3 [link_yt]*"), id));

        case 364:
          rugaapi.ytmp3(args[0]).then(function _callee4(res) {
            return regeneratorRuntime.async(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(res.status == 'error')) {
                      _context4.next = 2;
                      break;
                    }

                    return _context4.abrupt("return", bocilClient.sendFileFromUrl(from, "".concat(res.link), '', "".concat(res.judul), id));

                  case 2:
                    if (!(res.status == 'filesize')) {
                      _context4.next = 4;
                      break;
                    }

                    return _context4.abrupt("return", bocilClient.sendFileFromUrl(from, "".concat(res.link), '', "".concat(res.judul), id));

                  case 4:
                    _context4.next = 6;
                    return regeneratorRuntime.awrap(bocilClient.sendFileFromUrl(from, "".concat(res.thumb), '', "\u2611 Data Youtube ditemukan :\n\nJudul: ".concat(res.judul, "\n\nUkuran: ").concat(res.size, "\n\n\u231B Audio sedang dikirim"), id));

                  case 6:
                    _context4.next = 8;
                    return regeneratorRuntime.awrap(bocilClient.sendFileFromUrl(from, "".concat(res.link), '', '', id));

                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }
            });
          });
          return _context13.abrupt("break", 851);

        case 366:
          if (!(args.length == 0)) {
            _context13.next = 368;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Untuk mendownload video dari youtube\nketik: *".concat(prefix, "ytmp4 [link_yt]*")));

        case 368:
          rugaapi.ytmp4(args[0]).then(function _callee5(res) {
            return regeneratorRuntime.async(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!(res.status == 'error')) {
                      _context5.next = 2;
                      break;
                    }

                    return _context5.abrupt("return", bocilClient.sendFileFromUrl(from, "".concat(res.link), '', "".concat(res.judul), id));

                  case 2:
                    if (!(res.status == 'filesize')) {
                      _context5.next = 4;
                      break;
                    }

                    return _context5.abrupt("return", bocilClient.sendFileFromUrl(from, "".concat(res.link), '', "".concat(res.judul), id));

                  case 4:
                    _context5.next = 6;
                    return regeneratorRuntime.awrap(bocilClient.sendFileFromUrl(from, "".concat(res.thumb), '', "\u2611 Data Youtube ditemukan\n\nJudul: ".concat(res.judul, "\n\nUkuran: ").concat(res.size, "\n\n\u231B Video sedang dikirim"), id));

                  case 6:
                    _context5.next = 8;
                    return regeneratorRuntime.awrap(bocilClient.sendFileFromUrl(from, "".concat(res.link), '', '', id));

                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }
            });
          });
          return _context13.abrupt("break", 851);

        case 370:
          if (!(args.length == 0)) {
            _context13.next = 372;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Untuk mengetahui arti nama seseorang\nketik ".concat(prefix, "artinama Namanya"), id));

        case 372:
          rugaapi.artinama(body.slice(10)).then(function _callee6(res) {
            return regeneratorRuntime.async(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return regeneratorRuntime.awrap(bocilClient.reply(from, "Arti : ".concat(res), id));

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            });
          });
          return _context13.abrupt("break", 851);

        case 374:
          if (!(args.length !== 2)) {
            _context13.next = 376;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Untuk mengecek jodoh melalui nama\nketik: ".concat(prefix, "cekjodoh nama pasangan\n\ncontoh: ").concat(prefix, "cekjodoh aku kamu\n\nhanya bisa pakai nama panggilan (satu kata)")));

        case 376:
          rugaapi.cekjodoh(args[0], args[1]).then(function _callee7(res) {
            return regeneratorRuntime.async(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return regeneratorRuntime.awrap(bocilClient.sendFileFromUrl(from, "".concat(res.link), '', "".concat(res.text), id));

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            });
          });
          return _context13.abrupt("break", 851);

        case 378:
          fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt').then(function (res) {
            return res.text();
          }).then(function (body) {
            var splitnix = body.split('\n');
            var randomnix = splitnix[Math.floor(Math.random() * splitnix.length)];
            bocilClient.reply(from, randomnix, id);
          })["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!', id);
          });
          return _context13.abrupt("break", 851);

        case 380:
          fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/katabijax.txt').then(function (res) {
            return res.text();
          }).then(function (body) {
            var splitbijak = body.split('\n');
            var randombijak = splitbijak[Math.floor(Math.random() * splitbijak.length)];
            bocilClient.reply(from, randombijak, id);
          })["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!', id);
          });
          return _context13.abrupt("break", 851);

        case 382:
          fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/pantun.txt').then(function (res) {
            return res.text();
          }).then(function (body) {
            var splitpantun = body.split('\n');
            var randompantun = splitpantun[Math.floor(Math.random() * splitpantun.length)];
            bocilClient.reply(from, randompantun.replace(/bocilClient-line/g, "\n"), id);
          })["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!', id);
          });
          return _context13.abrupt("break", 851);

        case 384:
          _context13.next = 386;
          return regeneratorRuntime.awrap(rugaapi.quote());

        case 386:
          quotex = _context13.sent;
          _context13.next = 389;
          return regeneratorRuntime.awrap(bocilClient.reply(from, quotex, id)["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!', id);
          }));

        case 389:
          return _context13.abrupt("break", 851);

        case 390:
          if (!(args.length == 0)) {
            _context13.next = 392;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Untuk menggunakan ".concat(prefix, "anime\nSilahkan ketik: ").concat(prefix, "anime [query]\nContoh: ").concat(prefix, "anime random\n\nquery yang tersedia:\nrandom, waifu, husbu, neko"), id));

        case 392:
          if (args[0] == 'random' || args[0] == 'waifu' || args[0] == 'husbu' || args[0] == 'neko') {
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/' + args[0] + '.txt').then(function (res) {
              return res.text();
            }).then(function (body) {
              var randomnime = body.split('\n');
              var randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)];
              bocilClient.sendFileFromUrl(from, randomnimex, '', 'Nee..', id);
            })["catch"](function () {
              bocilClient.reply(from, '✘ Ada yang Error!', id);
            });
          } else {
            bocilClient.reply(from, "Maaf query tidak tersedia. Silahkan ketik ".concat(prefix, "anime untuk melihat list query"));
          }

          return _context13.abrupt("break", 851);

        case 394:
          if (!(args.length == 0)) {
            _context13.next = 396;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Untuk menggunakan ".concat(prefix, "kpop\nSilahkan ketik: ").concat(prefix, "kpop [query]\nContoh: ").concat(prefix, "kpop bts\n\nquery yang tersedia:\nblackpink, exo, bts"), id));

        case 396:
          if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt').then(function (res) {
              return res.text();
            }).then(function (body) {
              var randomkpop = body.split('\n');
              var randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)];
              bocilClient.sendFileFromUrl(from, randomkpopx, '', 'Nee..', id);
            })["catch"](function () {
              bocilClient.reply(from, '✘ Ada yang Error!', id);
            });
          } else {
            bocilClient.reply(from, "Maaf query tidak tersedia. Silahkan ketik ".concat(prefix, "kpop untuk melihat list query"));
          }

          return _context13.abrupt("break", 851);

        case 398:
          _context13.next = 400;
          return regeneratorRuntime.awrap(meme.random());

        case 400:
          randmeme = _context13.sent;
          bocilClient.sendFileFromUrl(from, randmeme, '', '', id)["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!', id);
          });
          return _context13.abrupt("break", 851);

        case 403:
          if (!(args.length == 0)) {
            _context13.next = 405;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Untuk mencari gambar di pinterest\nketik: ".concat(prefix, "images [search]\ncontoh: ").concat(prefix, "images naruto"), id));

        case 405:
          cariwall = body.slice(8);
          _context13.next = 408;
          return regeneratorRuntime.awrap(images.fdci(cariwall));

        case 408:
          hasilwall = _context13.sent;
          _context13.next = 411;
          return regeneratorRuntime.awrap(bocilClient.sendFileFromUrl(from, hasilwall, '', '', id)["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!', id);
          }));

        case 411:
          return _context13.abrupt("break", 851);

        case 412:
          if (!(args.length == 0)) {
            _context13.next = 414;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Untuk mencari gambar di sub reddit\nketik: ".concat(prefix, "sreddit [search]\ncontoh: ").concat(prefix, "sreddit naruto"), id));

        case 414:
          carireddit = body.slice(9);
          _context13.next = 417;
          return regeneratorRuntime.awrap(images.sreddit(carireddit));

        case 417:
          hasilreddit = _context13.sent;
          _context13.next = 420;
          return regeneratorRuntime.awrap(bocilClient.sendFileFromUrl(from, hasilreddit, '', '', id)["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!', id);
          }));

        case 420:
          return _context13.abrupt("break", 851);

        case 421:
          if (!(args.length == 0)) {
            _context13.next = 423;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Untuk mencari resep makanan\nCaranya ketik: ".concat(prefix, "resep [search]\n\ncontoh: ").concat(prefix, "resep tahu"), id));

        case 423:
          cariresep = body.slice(7);
          _context13.next = 426;
          return regeneratorRuntime.awrap(resep.resep(cariresep));

        case 426:
          hasilresep = _context13.sent;
          _context13.next = 429;
          return regeneratorRuntime.awrap(bocilClient.reply(from, hasilresep + '\n\nIni kak resep makanannya..', id)["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!', id);
          }));

        case 429:
          return _context13.abrupt("break", 851);

        case 430:
          rugapoi.getLatest().then(function (result) {
            rugapoi.getVideo(result.link).then(function (res) {
              var heheq = '\n';

              for (var _i2 = 0; _i2 < res.links.length; _i2++) {
                heheq += "".concat(res.links[_i2], "\n");
              }

              bocilClient.reply(from, "Title: ".concat(res.title, "\n\nLink:\n").concat(heheq, "\nmasih tester bntr :v"));
            });
          })["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!', id);
          });
          return _context13.abrupt("break", 851);

        case 432:
          if (!(args.length == 0)) {
            _context13.next = 434;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Stalk akun instagram seseorang\nketik ".concat(prefix, "stalkig [username]\ncontoh: ").concat(prefix, "stalkig rizqy.pan"), id));

        case 434:
          _context13.next = 436;
          return regeneratorRuntime.awrap(rugaapi.stalkig(args[0]));

        case 436:
          igstalk = _context13.sent;
          _context13.next = 439;
          return regeneratorRuntime.awrap(rugaapi.stalkigpict(args[0]));

        case 439:
          igstalkpict = _context13.sent;
          _context13.next = 442;
          return regeneratorRuntime.awrap(bocilClient.sendFileFromUrl(from, igstalkpict, '', igstalk, id)["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!', id);
          }));

        case 442:
          return _context13.abrupt("break", 851);

        case 443:
          if (!(args.length == 0)) {
            _context13.next = 445;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Untuk mencari suatu kata dari wikipedia\nketik: ".concat(prefix, "wiki [kata]"), id));

        case 445:
          wikip = body.slice(6);
          _context13.next = 448;
          return regeneratorRuntime.awrap(rugaapi.wiki(wikip));

        case 448:
          wikis = _context13.sent;
          _context13.next = 451;
          return regeneratorRuntime.awrap(bocilClient.reply(from, wikis, id)["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!', id);
          }));

        case 451:
          return _context13.abrupt("break", 851);

        case 452:
          if (!(args.length == 0)) {
            _context13.next = 454;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Untuk melihat cuaca pada suatu daerah\nketik: ".concat(prefix, "cuaca [daerah]"), id));

        case 454:
          cuacaq = body.slice(7);
          _context13.next = 457;
          return regeneratorRuntime.awrap(rugaapi.cuaca(cuacaq));

        case 457:
          cuacap = _context13.sent;
          _context13.next = 460;
          return regeneratorRuntime.awrap(bocilClient.reply(from, cuacap, id)["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!', id);
          }));

        case 460:
          return _context13.abrupt("break", 851);

        case 461:
          if (!(args.length == 0)) {
            _context13.next = 463;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Untuk mencari lirik dari sebuah lagu\bketik: ".concat(prefix, "lirik [judul_lagu]"), id));

        case 463:
          rugaapi.lirik(body.slice(7)).then(function _callee8(res) {
            return regeneratorRuntime.async(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return regeneratorRuntime.awrap(bocilClient.reply(from, "Lirik Lagu: ".concat(body.slice(7), "\n\n").concat(res), id));

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            });
          });
          return _context13.abrupt("break", 851);

        case 465:
          if (!(args.length == 0)) {
            _context13.next = 467;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Untuk mencari lirik dan chord dari sebuah lagu\bketik: ".concat(prefix, "chord [judul_lagu]"), id));

        case 467:
          chordq = body.slice(7);
          _context13.next = 470;
          return regeneratorRuntime.awrap(rugaapi.chord(chordq));

        case 470:
          chordp = _context13.sent;
          _context13.next = 473;
          return regeneratorRuntime.awrap(bocilClient.reply(from, chordp, id)["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!', id);
          }));

        case 473:
          return _context13.abrupt("break", 851);

        case 474:
          if (!(args.length == 0)) {
            _context13.next = 476;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Membuat bot men-screenshot sebuah web\n\nPemakaian: ".concat(prefix, "ss [url]\n\ncontoh: ").concat(prefix, "ss http://google.com"), id));

        case 476:
          _context13.next = 478;
          return regeneratorRuntime.awrap(meme.ss(args[0]));

        case 478:
          scrinshit = _context13.sent;
          _context13.next = 481;
          return regeneratorRuntime.awrap(bocilClient.sendFile(from, scrinshit, 'ss.jpg', 'cekrek', id)["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!', id);
          }));

        case 481:
          return _context13.abrupt("break", 851);

        case 482:
          if (!(args.length == 0)) {
            _context13.next = 484;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Untuk mencari lagu dari youtube\n\nPenggunaan: ".concat(prefix, "play judul lagu"), id));

        case 484:
          axios.get("https://arugaytdl.herokuapp.com/search?q=".concat(body.slice(6))).then(function _callee10(res) {
            return regeneratorRuntime.async(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return regeneratorRuntime.awrap(bocilClient.sendFileFromUrl(from, "".concat(res.data[0].thumbnail), "", "Lagu ditemukan\n\nJudul: ".concat(res.data[0].title, "\nDurasi: ").concat(res.data[0].duration, "detik\nUploaded: ").concat(res.data[0].uploadDate, "\nView: ").concat(res.data[0].viewCount, "\n\nsedang dikirim"), id));

                  case 2:
                    axios.get("https://arugaz.herokuapp.com/api/yta?url=https://youtu.be/".concat(res.data[0].id)).then(function _callee9(rest) {
                      return regeneratorRuntime.async(function _callee9$(_context9) {
                        while (1) {
                          switch (_context9.prev = _context9.next) {
                            case 0:
                              if (!(Number(rest.data.filesize.split(' MB')[0]) >= 10.00)) {
                                _context9.next = 2;
                                break;
                              }

                              return _context9.abrupt("return", bocilClient.reply(from, '⚠ Maaf ukuran file terlalu besar!'));

                            case 2:
                              _context9.next = 4;
                              return regeneratorRuntime.awrap(bocilClient.sendPtt(from, "".concat(rest.data.result), id));

                            case 4:
                            case "end":
                              return _context9.stop();
                          }
                        }
                      });
                    })["catch"](function () {
                      bocilClient.reply(from, '✘ Ada yang Error!', id);
                    });

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }
            });
          })["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!', id);
          });
          return _context13.abrupt("break", 851);

        case 486:
          if (!(isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image')) {
            _context13.next = 502;
            break;
          }

          if (!isMedia) {
            _context13.next = 493;
            break;
          }

          _context13.next = 490;
          return regeneratorRuntime.awrap(decryptMedia(message, uaOverride));

        case 490:
          mediaData = _context13.sent;
          _context13.next = 496;
          break;

        case 493:
          _context13.next = 495;
          return regeneratorRuntime.awrap(decryptMedia(quotedMsg, uaOverride));

        case 495:
          mediaData = _context13.sent;

        case 496:
          _fetch = require('node-fetch');
          imgBS4 = "data:".concat(mimetype, ";base64,").concat(mediaData.toString('base64'));
          bocilClient.reply(from, 'Searching....', id);

          _fetch('https://trace.moe/api/search', {
            method: 'POST',
            body: JSON.stringify({
              image: imgBS4
            }),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(function (respon) {
            return respon.json();
          }).then(function (resolt) {
            if (resolt.docs && resolt.docs.length <= 0) {
              bocilClient.reply(from, 'Maaf, saya tidak tau ini anime apa, pastikan gambar yang akan di Search tidak Buram/Kepotong', id);
            }

            var _resolt$docs$ = resolt.docs[0],
                is_adult = _resolt$docs$.is_adult,
                title = _resolt$docs$.title,
                title_chinese = _resolt$docs$.title_chinese,
                title_romaji = _resolt$docs$.title_romaji,
                title_english = _resolt$docs$.title_english,
                episode = _resolt$docs$.episode,
                similarity = _resolt$docs$.similarity,
                filename = _resolt$docs$.filename,
                at = _resolt$docs$.at,
                tokenthumb = _resolt$docs$.tokenthumb,
                anilist_id = _resolt$docs$.anilist_id;
            teks = '';

            if (similarity < 0.92) {
              teks = '*Saya memiliki keyakinan rendah dalam hal ini* :\n\n';
            }

            teks += "\u27B8 *Title Japanese* : ".concat(title, "\n\u27B8 *Title chinese* : ").concat(title_chinese, "\n\u27B8 *Title Romaji* : ").concat(title_romaji, "\n\u27B8 *Title English* : ").concat(title_english, "\n");
            teks += "\u27B8 *R-18?* : ".concat(is_adult, "\n");
            teks += "\u27B8 *Eps* : ".concat(episode.toString(), "\n");
            teks += "\u27B8 *Kesamaan* : ".concat((similarity * 100).toFixed(1), "%\n");
            var video = "https://media.trace.moe/video/".concat(anilist_id, "/").concat(encodeURIComponent(filename), "?t=").concat(at, "&token=").concat(tokenthumb);
            bocilClient.sendFileFromUrl(from, video, 'anime.mp4', teks, id)["catch"](function () {
              bocilClient.reply(from, teks, id);
            });
          })["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!', id);
          });

          _context13.next = 503;
          break;

        case 502:
          bocilClient.reply(from, "Maaf format salah\n\nSilahkan kirim foto dengan caption ".concat(prefix, "whatanime\n\nAtau reply foto dengan caption ").concat(prefix, "whatanime"), id);

        case 503:
          return _context13.abrupt("break", 851);

        case 504:
          if (!(args.length !== 2)) {
            _context13.next = 506;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Maaf, format pesan salah.\nSilahkan ketik pesan dengan ".concat(prefix, "resi <kurir> <no_resi>\n\nKurir yang tersedia:\njne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex"), id));

        case 506:
          kurirs = ['jne', 'pos', 'tiki', 'wahana', 'jnt', 'rpx', 'sap', 'sicepat', 'pcp', 'jet', 'dse', 'first', 'ninja', 'lion', 'idl', 'rex'];

          if (kurirs.includes(args[0])) {
            _context13.next = 509;
            break;
          }

          return _context13.abrupt("return", bocilClient.sendText(from, "Maaf, jenis ekspedisi pengiriman tidak didukung layanan ini hanya mendukung ekspedisi pengiriman ".concat(kurirs.join(', '), " Tolong periksa kembali.")));

        case 509:
          console.log('Memeriksa No Resi', args[1], 'dengan ekspedisi', args[0]);
          cekResi(args[0], args[1]).then(function (result) {
            return bocilClient.sendText(from, result);
          });
          return _context13.abrupt("break", 851);

        case 512:
          if (!(args.length == 0)) {
            _context13.next = 514;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Mengubah teks menjadi sound (google voice)\nketik: ".concat(prefix, "tts <kode_bahasa> <teks>\ncontoh : ").concat(prefix, "tts id halo\nuntuk kode bahasa cek disini : https://anotepad.com/note/read/5xqahdy8")));

        case 514:
          ttsGB = require('node-gtts')(args[0]);
          dataText = body.slice(8);

          if (!(dataText === '')) {
            _context13.next = 518;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, 'apa teksnya syg..', id));

        case 518:
          try {
            ttsGB.save('./media/tts.mp3', dataText, function () {
              bocilClient.sendPtt(from, './media/tts.mp3', id);
            });
          } catch (err) {
            bocilClient.reply(from, err, id);
          }

          return _context13.abrupt("break", 851);

        case 520:
          if (!(args.length != 1)) {
            _context13.next = 522;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Maaf, format pesan salah.\nSilahkan reply sebuah pesan dengan caption ".concat(prefix, "translate <kode_bahasa>\ncontoh ").concat(prefix, "translate id"), id));

        case 522:
          if (quotedMsg) {
            _context13.next = 524;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Maaf, format pesan salah.\nSilahkan reply sebuah pesan dengan caption ".concat(prefix, "translate <kode_bahasa>\ncontoh ").concat(prefix, "translate id"), id));

        case 524:
          quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : '';
          translate(quoteText, args[0]).then(function (result) {
            return bocilClient.sendText(from, result);
          })["catch"](function () {
            return bocilClient.sendText(from, 'Error, Kode bahasa salah.');
          });
          return _context13.abrupt("break", 851);

        case 527:
          rugaapi.covidindo().then(function _callee11(res) {
            return regeneratorRuntime.async(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return regeneratorRuntime.awrap(bocilClient.reply(from, "".concat(res), id));

                  case 2:
                  case "end":
                    return _context11.stop();
                }
              }
            });
          });
          return _context13.abrupt("break", 851);

        case 529:
          if (!(quotedMsg.type !== 'location')) {
            _context13.next = 531;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Maaf, format pesan salah.\nKirimkan lokasi dan reply dengan caption ".concat(prefix, "ceklokasi"), id));

        case 531:
          console.log("Request Status Zona Penyebaran Covid-19 (".concat(quotedMsg.lat, ", ").concat(quotedMsg.lng, ")."));
          _context13.next = 534;
          return regeneratorRuntime.awrap(getLocationData(quotedMsg.lat, quotedMsg.lng));

        case 534:
          zoneStatus = _context13.sent;
          if (zoneStatus.kode !== 200) bocilClient.sendText(from, 'Maaf, Terjadi error ketika memeriksa lokasi yang anda kirim.');
          datax = '';

          for (_i3 = 0; _i3 < zoneStatus.data.length; _i3++) {
            _zoneStatus$data$_i = zoneStatus.data[_i3], zone = _zoneStatus$data$_i.zone, region = _zoneStatus$data$_i.region;
            _zone = zone == 'green' ? 'Hijau* (Aman) \n' : zone == 'yellow' ? 'Kuning* (Waspada) \n' : 'Merah* (Bahaya) \n';
            datax += "".concat(_i3 + 1, ". Kel. *").concat(region, "* Berstatus *Zona ").concat(_zone);
          }

          text = "*CEK LOKASI PENYEBARAN COVID-19*\nHasil pemeriksaan dari lokasi yang anda kirim adalah *".concat(zoneStatus.status, "* ").concat(zoneStatus.optional, "\n\nInformasi lokasi terdampak disekitar anda:\n").concat(datax);
          bocilClient.sendText(from, text);
          return _context13.abrupt("break", 851);

        case 541:
          if (!(args.length == 0)) {
            _context13.next = 543;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "ketik ".concat(prefix, "shortlink <url>"), id));

        case 543:
          if (isUrl(args[0])) {
            _context13.next = 545;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, 'Maaf, url yang kamu kirim tidak valid.', id));

        case 545:
          _context13.next = 547;
          return regeneratorRuntime.awrap(urlShortener(args[0]));

        case 547:
          shortlink = _context13.sent;
          _context13.next = 550;
          return regeneratorRuntime.awrap(bocilClient.sendText(from, shortlink)["catch"](function () {
            bocilClient.reply(from, '✘ Ada yang Error!', id);
          }));

        case 550:
          return _context13.abrupt("break", 851);

        case 551:
          if (!(args.length == 0)) {
            _context13.next = 553;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Mengubah kalimat menjadi alayyyyy\n\nketik ".concat(prefix, "bapakfont kalimat"), id));

        case 553:
          rugaapi.bapakfont(body.slice(11)).then(function _callee12(res) {
            return regeneratorRuntime.async(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return regeneratorRuntime.awrap(bocilClient.reply(from, "".concat(res), id));

                  case 2:
                  case "end":
                    return _context12.stop();
                }
              }
            });
          });
          return _context13.abrupt("break", 851);

        case 555:
          if (isGroupMsg) {
            _context13.next = 557;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n".concat(infoProblem), id));

        case 557:
          klasemen = db.get('group').filter({
            id: groupId
          }).map('members').value()[0];
          urut = Object.entries(klasemen).map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                val = _ref2[1];

            return _objectSpread({
              id: key
            }, val);
          }).sort(function (a, b) {
            return b.denda - a.denda;
          });
          textKlas = "*Klasemen Denda Sementara*\n";
          i = 1;
          urut.forEach(function (klsmn) {
            textKlas += i + ". @" + klsmn.id.replace('@c.us', '') + " ➤ Rp" + formatin(klsmn.denda) + "\n";
            i++;
          });
          _context13.next = 564;
          return regeneratorRuntime.awrap(bocilClient.sendTextWithMentions(from, textKlas));

        case 564:
          return _context13.abrupt("break", 851);

        case 565:
          if (isGroupMsg) {
            _context13.next = 567;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n".concat(infoProblem), id));

        case 567:
          if (isGroupAdmins) {
            _context13.next = 569;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id));

        case 569:
          if (isBotGroupAdmins) {
            _context13.next = 571;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, '[BOT] Silahkan tambahkan bot sebagai admin grup!', id));

        case 571:
          if (!(args.length !== 1)) {
            _context13.next = 573;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Untuk menggunakan ".concat(prefix, "add\nPenggunaan: ").concat(prefix, "add <nomor>\ncontoh: ").concat(prefix, "add 628xxx"), id));

        case 573:
          _context13.prev = 573;
          _context13.next = 576;
          return regeneratorRuntime.awrap(bocilClient.addParticipant(from, "".concat(args[0], "@c.us")));

        case 576:
          _context13.next = 581;
          break;

        case 578:
          _context13.prev = 578;
          _context13.t5 = _context13["catch"](573);
          bocilClient.reply(from, 'Tidak dapat menambahkan target', id);

        case 581:
          return _context13.abrupt("break", 851);

        case 582:
          if (isGroupMsg) {
            _context13.next = 584;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n".concat(infoProblem), id));

        case 584:
          if (isGroupAdmins) {
            _context13.next = 586;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id));

        case 586:
          if (isBotGroupAdmins) {
            _context13.next = 588;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, '[BOT] Silahkan tambahkan bot sebagai admin grup!', id));

        case 588:
          if (!(mentionedJidList.length === 0)) {
            _context13.next = 590;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, '✘ Format pesan salah.\nSilahkan tag satu atau lebih orang yang akan dikeluarkan', id));

        case 590:
          if (!(mentionedJidList[0] === botNumber)) {
            _context13.next = 594;
            break;
          }

          _context13.next = 593;
          return regeneratorRuntime.awrap(bocilClient.reply(from, "\u2718 Format pesan salah.\nTidak dapat mengeluarkan ".concat(botName), id));

        case 593:
          return _context13.abrupt("return", _context13.sent);

        case 594:
          _context13.next = 596;
          return regeneratorRuntime.awrap(bocilClient.sendTextWithMentions(from, "Da dahhh \uD83D\uDE18\n".concat(mentionedJidList.map(function (x) {
            return "@".concat(x.replace('@c.us', ''));
          }).join('\n'))));

        case 596:
          _i4 = 0;

        case 597:
          if (!(_i4 < mentionedJidList.length)) {
            _context13.next = 607;
            break;
          }

          if (!groupAdmins.includes(mentionedJidList[_i4])) {
            _context13.next = 602;
            break;
          }

          _context13.next = 601;
          return regeneratorRuntime.awrap(bocilClient.sendText(from, 'Dasar member nakal!! Tidak bisa kick Admin'));

        case 601:
          return _context13.abrupt("return", _context13.sent);

        case 602:
          _context13.next = 604;
          return regeneratorRuntime.awrap(bocilClient.removeParticipant(groupId, mentionedJidList[_i4]));

        case 604:
          _i4++;
          _context13.next = 597;
          break;

        case 607:
          return _context13.abrupt("break", 851);

        case 608:
          if (isGroupMsg) {
            _context13.next = 610;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n".concat(infoProblem), id));

        case 610:
          if (isGroupAdmins) {
            _context13.next = 612;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id));

        case 612:
          if (isBotGroupAdmins) {
            _context13.next = 614;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, '[BOT] Silahkan tambahkan bot sebagai admin grup!', id));

        case 614:
          if (!(mentionedJidList.length !== 1)) {
            _context13.next = 616;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, 'Lakukan promote per User', id));

        case 616:
          if (!groupAdmins.includes(mentionedJidList[0])) {
            _context13.next = 620;
            break;
          }

          _context13.next = 619;
          return regeneratorRuntime.awrap(bocilClient.reply(from, "".concat(mentionedJidList[0], " sudah menjadi Admin"), id));

        case 619:
          return _context13.abrupt("return", _context13.sent);

        case 620:
          if (!(mentionedJidList[0] === botNumber)) {
            _context13.next = 624;
            break;
          }

          _context13.next = 623;
          return regeneratorRuntime.awrap(bocilClient.reply(from, 'Maaf, format pesan salah.\nTidak dapat mempromote akun bot sendiri', id));

        case 623:
          return _context13.abrupt("return", _context13.sent);

        case 624:
          _context13.next = 626;
          return regeneratorRuntime.awrap(bocilClient.promoteParticipant(groupId, mentionedJidList[0]));

        case 626:
          _context13.next = 628;
          return regeneratorRuntime.awrap(bocilClient.sendTextWithMentions(from, "Selamat @".concat(mentionedJidList[0].replace('@c.us', ''), " diangkat sebagai admin.")));

        case 628:
          return _context13.abrupt("break", 851);

        case 629:
          if (isGroupMsg) {
            _context13.next = 631;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n".concat(infoProblem), id));

        case 631:
          if (isGroupAdmins) {
            _context13.next = 633;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id));

        case 633:
          if (isBotGroupAdmins) {
            _context13.next = 635;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, '[BOT] Silahkan tambahkan bot sebagai admin grup!', id));

        case 635:
          if (!(mentionedJidList.length !== 1)) {
            _context13.next = 637;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, 'Lakukan demote per User', id));

        case 637:
          if (groupAdmins.includes(mentionedJidList[0])) {
            _context13.next = 641;
            break;
          }

          _context13.next = 640;
          return regeneratorRuntime.awrap(bocilClient.reply(from, "".concat(mentionedJidList, ", kasihan kamu masih member :("), id));

        case 640:
          return _context13.abrupt("return", _context13.sent);

        case 641:
          if (!(mentionedJidList[0] === botNumber)) {
            _context13.next = 645;
            break;
          }

          _context13.next = 644;
          return regeneratorRuntime.awrap(bocilClient.reply(from, 'Maaf, format pesan salah.\nTidak dapat mendemote akun bot sendiri', id));

        case 644:
          return _context13.abrupt("return", _context13.sent);

        case 645:
          _context13.next = 647;
          return regeneratorRuntime.awrap(bocilClient.demoteParticipant(groupId, mentionedJidList[0]));

        case 647:
          _context13.next = 649;
          return regeneratorRuntime.awrap(bocilClient.sendTextWithMentions(from, "Selamat menjadi member lagi hahaha, Hapus jabatan @".concat(mentionedJidList[0].replace('@c.us', ''), ".")));

        case 649:
          return _context13.abrupt("break", 851);

        case 650:
          if (isGroupMsg) {
            _context13.next = 652;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n".concat(infoProblem), id));

        case 652:
          if (isGroupAdmins) {
            _context13.next = 654;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id));

        case 654:
          bocilClient.sendText(from, 'Selamat jalan, kalian jangan rindu ya :(').then(function () {
            return bocilClient.leaveGroup(groupId);
          });
          return _context13.abrupt("break", 851);

        case 656:
          if (isGroupAdmins) {
            _context13.next = 658;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id));

        case 658:
          if (quotedMsg) {
            _context13.next = 660;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Maaf, format pesan salah silahkan.\nReply pesan bot dengan caption ".concat(prefix, "del"), id));

        case 660:
          if (quotedMsgObj.fromMe) {
            _context13.next = 662;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Maaf, format pesan salah silahkan.\nReply pesan bot dengan caption ".concat(prefix, "del"), id));

        case 662:
          bocilClient.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false);
          return _context13.abrupt("break", 851);

        case 664:
          if (isGroupMsg) {
            _context13.next = 666;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n".concat(infoProblem), id));

        case 666:
          if (isGroupAdmins) {
            _context13.next = 668;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id));

        case 668:
          _context13.next = 670;
          return regeneratorRuntime.awrap(bocilClient.getGroupMembers(groupId));

        case 670:
          groupMem = _context13.sent;
          hehex = '╔══✪〘 Mention All 〙✪══\n';

          for (_i5 = 0; _i5 < groupMem.length; _i5++) {
            hehex += '╠➥';
            hehex += " @".concat(groupMem[_i5].id.replace(/@c.us/g, ''), "\n");
          }

          hehex += '╚═〘 *R - B O T* 〙';
          _context13.next = 676;
          return regeneratorRuntime.awrap(bocilClient.sendTextWithMentions(from, hehex));

        case 676:
          return _context13.abrupt("break", 851);

        case 677:
          if (isGroupMsg) {
            _context13.next = 679;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n".concat(infoProblem), id));

        case 679:
          bocilClient.reply(from, "Untuk mengaktifkan simi-simi pada Group Chat\n\nPenggunaan\n".concat(prefix, "simi on --mengaktifkan\n").concat(prefix, "simi off --nonaktifkan\n"), id);
          return _context13.abrupt("break", 851);

        case 681:
          if (isGroupMsg) {
            _context13.next = 683;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n".concat(infoProblem), id));

        case 683:
          if (isGroupAdmins) {
            _context13.next = 685;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id));

        case 685:
          if (!(args.length !== 1)) {
            _context13.next = 687;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Untuk mengaktifkan simi-simi pada Group Chat\n\nPenggunaan\n".concat(prefix, "simi on --mengaktifkan\n").concat(prefix, "simi off --nonaktifkan\n"), id));

        case 687:
          if (args[0] == 'on') {
            simi.push(chatId);
            fs.writeFileSync('./settings/simi.json', JSON.stringify(simi));
            bocilClient.reply(from, 'Mengaktifkan bot simi-simi!', id);
          } else if (args[0] == 'off') {
            inxx = simi.indexOf(chatId);
            simi.splice(inxx, 1);
            fs.writeFileSync('./settings/simi.json', JSON.stringify(simi));
            bocilClient.reply(from, 'Menonaktifkan bot simi-simi!', id);
          } else {
            bocilClient.reply(from, "Untuk mengaktifkan simi-simi pada Group Chat\n\nPenggunaan\n".concat(prefix, "simi on --mengaktifkan\n").concat(prefix, "simi off --nonaktifkan\n"), id);
          }

          return _context13.abrupt("break", 851);

        case 689:
          if (isGroupMsg) {
            _context13.next = 691;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n".concat(infoProblem), id));

        case 691:
          bocilClient.reply(from, "Untuk mengaktifkan Fitur Kata Kasar pada Group Chat\n\nApasih kegunaan Fitur Ini? Apabila seseorang mengucapkan kata kasar akan mendapatkan denda\n\nPenggunaan\n".concat(prefix, "kasar on --mengaktifkan\n").concat(prefix, "kasar off --nonaktifkan\n\n").concat(prefix, "reset --reset jumlah denda"), id);
          return _context13.abrupt("break", 851);

        case 693:
          if (isGroupMsg) {
            _context13.next = 695;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n".concat(infoProblem), id));

        case 695:
          if (isGroupAdmins) {
            _context13.next = 697;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id));

        case 697:
          if (!(args.length !== 1)) {
            _context13.next = 699;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Untuk mengaktifkan Fitur Kata Kasar pada Group Chat\n\nApasih kegunaan Fitur Ini? Apabila seseorang mengucapkan kata kasar akan mendapatkan denda\n\nPenggunaan\n".concat(prefix, "kasar on --mengaktifkan\n").concat(prefix, "kasar off --nonaktifkan\n\n").concat(prefix, "reset --reset jumlah denda"), id));

        case 699:
          if (args[0] == 'on') {
            ngegas.push(chatId);
            fs.writeFileSync('./settings/ngegas.json', JSON.stringify(ngegas));
            bocilClient.reply(from, 'Fitur Anti Kasar sudah di Aktifkan', id);
          } else if (args[0] == 'off') {
            nixx = ngegas.indexOf(chatId);
            ngegas.splice(nixx, 1);
            fs.writeFileSync('./settings/ngegas.json', JSON.stringify(ngegas));
            bocilClient.reply(from, 'Fitur Anti Kasar sudah di non-Aktifkan', id);
          } else {
            bocilClient.reply(from, "Untuk mengaktifkan Fitur Kata Kasar pada Group Chat\n\napasih itu? fitur apabila seseorang mengucapkan kata kasar akan mendapatkan denda\n\nPenggunaan\n".concat(prefix, "kasar on --mengaktifkan\n").concat(prefix, "kasar off --nonaktifkan\n\n").concat(prefix, "reset --reset jumlah denda"), id);
          }

          return _context13.abrupt("break", 851);

        case 701:
          if (isGroupMsg) {
            _context13.next = 703;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n".concat(infoProblem), id));

        case 703:
          if (isGroupAdmins) {
            _context13.next = 705;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id));

        case 705:
          reset = db.get('group').find({
            id: groupId
          }).assign({
            members: []
          }).write();

          if (!reset) {
            _context13.next = 709;
            break;
          }

          _context13.next = 709;
          return regeneratorRuntime.awrap(bocilClient.sendText(from, "Klasemen telah direset."));

        case 709:
          return _context13.abrupt("break", 851);

        case 710:
          if (isGroupMsg) {
            _context13.next = 712;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n".concat(infoProblem), id));

        case 712:
          isOwner = chat.groupMetadata.owner == pengirim;

          if (isOwner) {
            _context13.next = 715;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Perintah ini hanya dapat dipakai oleh R-Dev : @".concat(ownerNumber.replace('@c.us', '')), id));

        case 715:
          if (isBotGroupAdmins) {
            _context13.next = 717;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, '[BOT] Silahkan tambahkan bot sebagai admin grup!', id));

        case 717:
          _context13.next = 719;
          return regeneratorRuntime.awrap(bocilClient.getGroupMembers(groupId));

        case 719:
          allMem = _context13.sent;
          _i6 = 0;

        case 721:
          if (!(_i6 < allMem.length)) {
            _context13.next = 730;
            break;
          }

          if (!groupAdmins.includes(allMem[_i6].id)) {
            _context13.next = 725;
            break;
          }

          _context13.next = 727;
          break;

        case 725:
          _context13.next = 727;
          return regeneratorRuntime.awrap(bocilClient.removeParticipant(groupId, allMem[_i6].id));

        case 727:
          _i6++;
          _context13.next = 721;
          break;

        case 730:
          bocilClient.reply(from, 'Success kick all member', id);
          return _context13.abrupt("break", 851);

        case 732:
          if (isOwnerBot) {
            _context13.next = 734;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Perintah ini hanya dapat dipakai oleh R-Dev : @".concat(ownerNumber.replace('@c.us', '')), id));

        case 734:
          if (!(args.length == 0)) {
            _context13.next = 736;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, // `Untuk banned seseorang agar tidak bisa menggunakan commands\n\nCaranya ketik: \n${prefix}ban add 628xx --untuk mengaktifkan\n${prefix}ban del 628xx --untuk nonaktifkan\n\ncara cepat ban banyak digrup ketik:\n${prefix}ban @tag @tag @tag`
          "Error {Check Source", id));

        case 736:
          if (args[0] == 'add') {
            banned.push(args[1] + '@c.us');
            fs.writeFileSync('./settings/banned.json', JSON.stringify(banned));
            bocilClient.reply(from, 'Success banned target!');
          } else if (args[0] == 'del') {
            xnxx = banned.indexOf(args[1] + '@c.us');
            banned.splice(xnxx, 1);
            fs.writeFileSync('./settings/banned.json', JSON.stringify(banned));
            bocilClient.reply(from, 'Success unbanned target!');
          } else {
            for (_i7 = 0; _i7 < mentionedJidList.length; _i7++) {
              banned.push(mentionedJidList[_i7]);
              fs.writeFileSync('./settings/banned.json', JSON.stringify(banned));
              bocilClient.reply(from, 'Success ban target!', id);
            }
          }

          return _context13.abrupt("break", 851);

        case 738:
          if (isOwnerBot) {
            _context13.next = 740;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Perintah ini hanya dapat dipakai oleh R-Dev : @".concat(ownerNumber.replace('@c.us', '')), id));

        case 740:
          if (!(args.length == 0)) {
            _context13.next = 742;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, // `Untuk broadcast ke semua chat ketik:\n${prefix}bc [isi chat]`
          "Error {Check Source"));

        case 742:
          msg = body.slice(4);
          _context13.next = 745;
          return regeneratorRuntime.awrap(bocilClient.getAllChatIds());

        case 745:
          chatz = _context13.sent;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context13.prev = 749;
          _iterator = chatz[Symbol.iterator]();

        case 751:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context13.next = 761;
            break;
          }

          idk = _step.value;
          _context13.next = 755;
          return regeneratorRuntime.awrap(bocilClient.getChatById(idk));

        case 755:
          cvk = _context13.sent;
          if (!cvk.isReadOnly) bocilClient.sendText(idk, " \u273C *R - D E V* \u273C\n\n".concat(msg));
          if (cvk.isReadOnly) bocilClient.sendText(idk, " \u273C *R - D E V* \u273C\n\n".concat(msg));

        case 758:
          _iteratorNormalCompletion = true;
          _context13.next = 751;
          break;

        case 761:
          _context13.next = 767;
          break;

        case 763:
          _context13.prev = 763;
          _context13.t6 = _context13["catch"](749);
          _didIteratorError = true;
          _iteratorError = _context13.t6;

        case 767:
          _context13.prev = 767;
          _context13.prev = 768;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 770:
          _context13.prev = 770;

          if (!_didIteratorError) {
            _context13.next = 773;
            break;
          }

          throw _iteratorError;

        case 773:
          return _context13.finish(770);

        case 774:
          return _context13.finish(767);

        case 775:
          bocilClient.reply(from, "@".concat(ownerNumber.replace('@c.us', ''), " Broadcast Success! - ").concat(botName), id);
          return _context13.abrupt("break", 851);

        case 777:
          if (isOwnerBot) {
            _context13.next = 779;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Perintah ini hanya dapat dipakai oleh R-Dev : @".concat(ownerNumber.replace('@c.us', '')), id));

        case 779:
          _context13.next = 781;
          return regeneratorRuntime.awrap(bocilClient.getAllChatIds());

        case 781:
          allChatz = _context13.sent;
          _context13.next = 784;
          return regeneratorRuntime.awrap(bocilClient.getAllGroups());

        case 784:
          allGroupz = _context13.sent;
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context13.prev = 788;
          _iterator2 = allGroupz[Symbol.iterator]();

        case 790:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context13.next = 801;
            break;
          }

          gclist = _step2.value;
          _context13.next = 794;
          return regeneratorRuntime.awrap(bocilClient.sendText(gclist.contact.id, "Maaf bot sedang pembersihan, total chat aktif : ".concat(allChatz.length)));

        case 794:
          _context13.next = 796;
          return regeneratorRuntime.awrap(bocilClient.leaveGroup(gclist.contact.id));

        case 796:
          _context13.next = 798;
          return regeneratorRuntime.awrap(bocilClient.deleteChat(gclist.contact.id));

        case 798:
          _iteratorNormalCompletion2 = true;
          _context13.next = 790;
          break;

        case 801:
          _context13.next = 807;
          break;

        case 803:
          _context13.prev = 803;
          _context13.t7 = _context13["catch"](788);
          _didIteratorError2 = true;
          _iteratorError2 = _context13.t7;

        case 807:
          _context13.prev = 807;
          _context13.prev = 808;

          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }

        case 810:
          _context13.prev = 810;

          if (!_didIteratorError2) {
            _context13.next = 813;
            break;
          }

          throw _iteratorError2;

        case 813:
          return _context13.finish(810);

        case 814:
          return _context13.finish(807);

        case 815:
          bocilClient.reply(from, "@".concat(ownerNumber.replace('@c.us', ''), " Success leave all group! - ").concat(botName), id);
          return _context13.abrupt("break", 851);

        case 817:
          if (isOwnerBot) {
            _context13.next = 819;
            break;
          }

          return _context13.abrupt("return", bocilClient.reply(from, "Perintah ini hanya dapat dipakai oleh R-Dev : @".concat(ownerNumber.replace('@c.us', '')), id));

        case 819:
          _context13.next = 821;
          return regeneratorRuntime.awrap(bocilClient.getAllChats());

        case 821:
          allChatx = _context13.sent;
          _iteratorNormalCompletion3 = true;
          _didIteratorError3 = false;
          _iteratorError3 = undefined;
          _context13.prev = 825;
          _iterator3 = allChatx[Symbol.iterator]();

        case 827:
          if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
            _context13.next = 834;
            break;
          }

          dchat = _step3.value;
          _context13.next = 831;
          return regeneratorRuntime.awrap(bocilClient.deleteChat(dchat.id));

        case 831:
          _iteratorNormalCompletion3 = true;
          _context13.next = 827;
          break;

        case 834:
          _context13.next = 840;
          break;

        case 836:
          _context13.prev = 836;
          _context13.t8 = _context13["catch"](825);
          _didIteratorError3 = true;
          _iteratorError3 = _context13.t8;

        case 840:
          _context13.prev = 840;
          _context13.prev = 841;

          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }

        case 843:
          _context13.prev = 843;

          if (!_didIteratorError3) {
            _context13.next = 846;
            break;
          }

          throw _iteratorError3;

        case 846:
          return _context13.finish(843);

        case 847:
          return _context13.finish(840);

        case 848:
          bocilClient.reply(from, "@".concat(ownerNumber.replace('@c.us', ''), " Success clear all chat! - ").concat(botName), id);
          return _context13.abrupt("break", 851);

        case 850:
          return _context13.abrupt("break", 851);

        case 851:
          // Simi-simi function
          if (!isCmd && isGroupMsg && isSimi && message.type === 'chat') {
            axios.get("https://bocilClientz.herokuapp.com/api/simisimi?kata=".concat(encodeURIComponent(message.body), "&apikey=").concat(apiSimi)).then(function (res) {
              if (res.data.status == 403) return bocilClient.sendText(ownerNumber, "".concat(res.data.result, "\n\n").concat(res.data.pesan));
              bocilClient.reply(from, "Simi berkata: ".concat(res.data.result), id);
            })["catch"](function (err) {
              bocilClient.reply(from, "".concat(err), id);
            });
          } // Kata kasar function


          if (!(!isCmd && isGroupMsg && isNgegas)) {
            _context13.next = 888;
            break;
          }

          find = db.get('group').find({
            id: groupId
          }).value();

          if (!(find && find.id === groupId)) {
            _context13.next = 881;
            break;
          }

          cekuser = db.get('group').filter({
            id: groupId
          }).map('members').value()[0];
          isIn = inArray(pengirim, cekuser);

          if (!(cekuser && isIn !== false)) {
            _context13.next = 865;
            break;
          }

          if (!isKasar) {
            _context13.next = 863;
            break;
          }

          denda = db.get('group').filter({
            id: groupId
          }).map('members[' + isIn + ']').find({
            id: pengirim
          }).update('denda', function (n) {
            return n + 5000;
          }).write();

          if (!denda) {
            _context13.next = 863;
            break;
          }

          _context13.next = 863;
          return regeneratorRuntime.awrap(bocilClient.reply(from, "Jangan badword bodoh\nDenda +5.000\nTotal : Rp" + formatin(denda.denda), id));

        case 863:
          _context13.next = 879;
          break;

        case 865:
          cekMember = db.get('group').filter({
            id: groupId
          }).map('members').value()[0];

          if (!(cekMember.length === 0)) {
            _context13.next = 870;
            break;
          }

          if (isKasar) {
            db.get('group').find({
              id: groupId
            }).set('members', [{
              id: pengirim,
              denda: 5000
            }]).write();
          } else {
            db.get('group').find({
              id: groupId
            }).set('members', [{
              id: pengirim,
              denda: 0
            }]).write();
          }

          _context13.next = 879;
          break;

        case 870:
          _cekuser = db.get('group').filter({
            id: groupId
          }).map('members').value()[0];

          if (!isKasar) {
            _context13.next = 877;
            break;
          }

          _cekuser.push({
            id: pengirim,
            denda: 5000
          });

          _context13.next = 875;
          return regeneratorRuntime.awrap(bocilClient.reply(from, "Jangan badword bodoh\nDenda +5.000", id));

        case 875:
          _context13.next = 878;
          break;

        case 877:
          _cekuser.push({
            id: pengirim,
            denda: 0
          });

        case 878:
          db.get('group').find({
            id: groupId
          }).set('members', _cekuser).write();

        case 879:
          _context13.next = 888;
          break;

        case 881:
          if (!isKasar) {
            _context13.next = 887;
            break;
          }

          db.get('group').push({
            id: groupId,
            members: [{
              id: pengirim,
              denda: 5000
            }]
          }).write();
          _context13.next = 885;
          return regeneratorRuntime.awrap(bocilClient.reply(from, "Jangan badword bodoh\nDenda +5.000\nTotal : Rp5.000", id));

        case 885:
          _context13.next = 888;
          break;

        case 887:
          db.get('group').push({
            id: groupId,
            members: [{
              id: pengirim,
              denda: 0
            }]
          }).write();

        case 888:
          _context13.next = 893;
          break;

        case 890:
          _context13.prev = 890;
          _context13.t9 = _context13["catch"](0);
          console.log(style.err("".concat(_context13.t9)));

        case 893:
        case "end":
          return _context13.stop();
      }
    }
  }, null, null, [[0, 890], [122, 138], [222, 229], [573, 578], [749, 763, 767, 775], [768,, 770, 774], [788, 803, 807, 815], [808,, 810, 814], [825, 836, 840, 848], [841,, 843, 847]]);
};
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
var ngegas = JSON.parse(fs.readFileSync('./settings/ngegas.json')); //! Custom Grup

var groupList = JSON.parse(fs.readFileSync('./feature/groupList.json')); // ? BOT - Settings

var _require7 = require('./bot-setting.json'),
    botName = _require7.botName,
    ownerNumber = _require7.ownerNumber,
    memberLimit = _require7.memberLimit,
    groupLimit = _require7.groupLimit,
    prefix = _require7.prefix,
    waFeed = _require7.waFeed;

var style = require('./custom/console'); // const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))
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

module.exports = HandleMsg = function HandleMsg(RBot, message) {
  var type, id, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList, body, name, formattedTitle, pushname, verifiedName, formattedName, botNumber, groupId, groupAdmins, isGroupAdmins, chats, pengirim, isBotGroupAdmins, command, arg, args, argx, isCmd, uaOverride, url, isQuotedImage, isQuotedVideo, isOwnerBot, isBanned, isSimi, isNgegas, isKasar, isGroupList, groupName, formatTime, formatCommand, check, _check, linkgrup, islink, chekgrup, cgrup, loadedMsg, chatIds, groups, encryptMedia, _mimetype, _mediaData, _imageBase, mediaData, imageBase64, base64img, outFile, result, filename, isGiphy, isMediaGiphy, getGiphyCode, giphyCode, smallGifUrl, gifUrl, _smallGifUrl, top, bottom, _encryptMedia, _mediaData2, getUrl, ImageBase64, qmaker, quotes, author, theme, hasilqmaker, nulisq, nulisp, responseh, data, idx, pesan, responseh2, last, responsh, responsih, surah, responsih2, _responsih2$data, name_translations, number_of_ayah, number_of_surah, recitations, solatx, solatj, daerahq, instag, quotex, randmeme, cariwall, hasilwall, carireddit, hasilreddit, cariresep, hasilresep, igstalk, igstalkpict, wikip, wikis, cuacaq, cuacap, chordq, chordp, scrinshit, _fetch, imgBS4, kurirs, ttsGB, dataText, quoteText, zoneStatus, datax, _i3, _zoneStatus$data$_i, zone, region, _zone, text, shortlink, klasemen, urut, textKlas, i, _i4, groupMem, hehex, _i5, inxx, nixx, reset, isOwner, allMem, _i6, xnxx, _i7, msg, chatz, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, idk, cvk, allChatz, allGroupz, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, gclist, allChatx, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, dchat, find, cekuser, isIn, denda, cekMember, _cekuser;

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
          return regeneratorRuntime.awrap(RBot.getHostNumber());

        case 8:
          _context13.t0 = _context13.sent;
          botNumber = _context13.t0 + '@c.us';
          groupId = isGroupMsg ? chat.groupMetadata.id : '';

          if (!isGroupMsg) {
            _context13.next = 17;
            break;
          }

          _context13.next = 14;
          return regeneratorRuntime.awrap(RBot.getGroupAdmins(groupId));

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
          //! Custom Grup
          isGroupList = groupList.includes(groupId);
          groupName = name || formattedTitle;
          formatTime = moment(t * 1000).format('DD/MM/YY HH:mm:ss');
          formatCommand = "".concat(command, " [").concat(args.length, "]"); // ! Owner Adding Group

          if (command == 'addgrup' && isOwnerBot) {
            check = groupList.includes(groupId);

            if (check) {
              RBot.sendText(from, "[BOT] R-Bot sudah aktif");
              style.botAct('Activated in', groupName);
            } else {
              groupList.push(groupId);
              fs.writeFileSync('./feature/groupList.json', JSON.stringify(groupList));
              RBot.sendText(from, "[BOT] R-Bot berhasil di Aktifkan");
              style.botAct('Started in', groupName);
            }
          }

          if (command == 'delgrup' && isOwnerBot) {
            _check = groupList.includes(groupId);

            if (!_check) {
              RBot.sendText(from, "[BOT] R-Bot sudah tidak aktif");
              style.botNonAct('No Bot Active in', groupName);
            } else {
              groupList.splice(groupId);
              fs.writeFileSync('./feature/groupList.json', JSON.stringify(groupList));
              RBot.sendText(from, "[BOT] R-Bot berhasil di Non-Aktifkan");
              style.botNonAct('NonActive in', groupName);
            }
          } //! MSG from not Regist Group


          if (!(!isGroupList && isGroupMsg && isCmd)) {
            _context13.next = 48;
            break;
          }

          return _context13.abrupt("return", style.nonRegist(pushname, groupName, groupId));

        case 48:
          if (!(isCmd && msgFilter.isFiltered(from) && !isGroupMsg)) {
            _context13.next = 50;
            break;
          }

          return _context13.abrupt("return", style.spamChat(formatTime, formatCommand, 'from', pushname));

        case 50:
          if (!(isCmd && msgFilter.isFiltered(from) && isGroupMsg)) {
            _context13.next = 52;
            break;
          }

          return _context13.abrupt("return", style.spamGroup(formatTime, formatCommand, 'from', pushname, 'in', groupName));

        case 52:
          //! BadWord
          if (!isCmd && isKasar && isGroupMsg) {
            style.badWord(formatTime, formatCommand, 'from', pushname, 'in', groupName);
          } //! EXE


          if (isCmd && !isGroupMsg) {
            style.exeChat(formatTime, formatCommand, 'from', pushname);
          }

          if (isCmd && isGroupMsg) {
            style.exeGroup(formatTime, formatCommand, 'from', pushname, 'in', groupName);
          } // [BETA] Avoid Spam Message


          msgFilter.addFilter(from); //! Filter Banned People

          if (!isBanned) {
            _context13.next = 58;
            break;
          }

          return _context13.abrupt("return", style.banPerson(formatTime, formatCommand, 'from', pushname));

        case 58:
          _context13.t2 = command;
          _context13.next = _context13.t2 === 'speed' ? 61 : _context13.t2 === 'ping' ? 61 : _context13.t2 === 'tes' ? 61 : _context13.t2 === 'tnc' ? 64 : _context13.t2 === 'peraturan' ? 64 : _context13.t2 === 'aturan' ? 64 : _context13.t2 === 'menu' ? 67 : _context13.t2 === 'help' ? 67 : _context13.t2 === 'menuadmin' ? 70 : _context13.t2 === 'donate' ? 77 : _context13.t2 === 'donasi' ? 77 : _context13.t2 === 'botowner' ? 80 : _context13.t2 === 'ownerbot' ? 80 : _context13.t2 === 'join' ? 83 : _context13.t2 === 'botstat' ? 107 : _context13.t2 === 'sticker' ? 118 : _context13.t2 === 'stiker' ? 118 : _context13.t2 === 'stickergif' ? 163 : _context13.t2 === 'stikergif' ? 163 : _context13.t2 === 'stikergiphy' ? 181 : _context13.t2 === 'stickergiphy' ? 181 : _context13.t2 === 'meme' ? 205 : _context13.t2 === 'quotemaker' ? 224 : _context13.t2 === 'nulis' ? 244 : _context13.t2 === 'listsurah' ? 253 : _context13.t2 === 'infosurah' ? 255 : _context13.t2 === 'surah' ? 266 : _context13.t2 === 'tafsir' ? 287 : _context13.t2 === 'alaudio' ? 306 : _context13.t2 === 'jsolat' ? 347 : _context13.t2 === 'daerah' ? 356 : _context13.t2 === 'instagram' ? 362 : _context13.t2 === 'ytmp3' ? 370 : _context13.t2 === 'ytmp4' ? 374 : _context13.t2 === 'artinama' ? 378 : _context13.t2 === 'cekjodoh' ? 382 : _context13.t2 === 'fakta' ? 386 : _context13.t2 === 'katabijak' ? 388 : _context13.t2 === 'pantun' ? 390 : _context13.t2 === 'quote' ? 392 : _context13.t2 === 'anime' ? 398 : _context13.t2 === 'kpop' ? 402 : _context13.t2 === 'memes' ? 406 : _context13.t2 === 'images' ? 411 : _context13.t2 === 'sreddit' ? 420 : _context13.t2 === 'resep' ? 429 : _context13.t2 === 'nekopoi' ? 438 : _context13.t2 === 'stalkig' ? 440 : _context13.t2 === 'wiki' ? 451 : _context13.t2 === 'cuaca' ? 460 : _context13.t2 === 'lirik' ? 469 : _context13.t2 === 'chord' ? 473 : _context13.t2 === 'ss' ? 482 : _context13.t2 === 'play' ? 490 : _context13.t2 === 'whatanime' ? 494 : _context13.t2 === 'resi' ? 512 : _context13.t2 === 'tts' ? 520 : _context13.t2 === 'translate' ? 528 : _context13.t2 === 'covidindo' ? 535 : _context13.t2 === 'ceklokasi' ? 537 : _context13.t2 === 'shortlink' ? 549 : _context13.t2 === 'bapakfont' ? 559 : _context13.t2 === 'klasmen' ? 563 : _context13.t2 === 'add' ? 573 : _context13.t2 === 'kick' ? 590 : _context13.t2 === 'promote' ? 616 : _context13.t2 === 'demote' ? 637 : _context13.t2 === 'bye' ? 658 : _context13.t2 === 'del' ? 664 : _context13.t2 === 'tagall' ? 672 : _context13.t2 === 'everyone' ? 672 : _context13.t2 === 'simisimi' ? 685 : _context13.t2 === 'simi' ? 689 : _context13.t2 === 'katakasar' ? 697 : _context13.t2 === 'kasar' ? 701 : _context13.t2 === 'reset' ? 709 : _context13.t2 === 'kickall' ? 718 : _context13.t2 === 'ban' ? 740 : _context13.t2 === 'bc' ? 746 : _context13.t2 === 'leaveall' ? 785 : _context13.t2 === 'clearall' ? 825 : 858;
          break;

        case 61:
          _context13.next = 63;
          return regeneratorRuntime.awrap(RBot.sendText(from, "Respon ".concat(botName, ": ").concat(processTime(t, moment()), " Second")));

        case 63:
          return _context13.abrupt("break", 859);

        case 64:
          _context13.next = 66;
          return regeneratorRuntime.awrap(RBot.sendText(from, menuId.textTnC()));

        case 66:
          return _context13.abrupt("break", 859);

        case 67:
          _context13.next = 69;
          return regeneratorRuntime.awrap(RBot.sendText(from, menuId.textMenu(pushname)).then(function () {
            return isGroupMsg && isGroupAdmins ? RBot.sendText(from, "Menu Admin Grup: *".concat(prefix, "menuadmin*")) : null;
          }));

        case 69:
          return _context13.abrupt("break", 859);

        case 70:
          if (isGroupMsg) {
            _context13.next = 72;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, '✘ Perintah ini hanya dapat digunakan didalam grup!', id));

        case 72:
          if (isGroupAdmins) {
            _context13.next = 74;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, '✘ Perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 74:
          _context13.next = 76;
          return regeneratorRuntime.awrap(RBot.sendText(from, menuId.textAdmin()));

        case 76:
          return _context13.abrupt("break", 859);

        case 77:
          _context13.next = 79;
          return regeneratorRuntime.awrap(RBot.sendText(from, menuId.textDonasi()));

        case 79:
          return _context13.abrupt("break", 859);

        case 80:
          _context13.next = 82;
          return regeneratorRuntime.awrap(RBot.sendContact(from, ownerNumber));

        case 82:
          return _context13.abrupt("break", 859);

        case 83:
          if (!(args.length == 0)) {
            _context13.next = 85;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Jika ingin memasukkan ".concat(botName, " kedalam group, silahkan invite atau dengan\nketik ").concat(prefix, "join [link group]"), id));

        case 85:
          linkgrup = body.slice(6);
          islink = linkgrup.match(/(https:\/\/chat.whatsapp.com)/gi);
          _context13.next = 89;
          return regeneratorRuntime.awrap(RBot.inviteInfo(linkgrup));

        case 89:
          chekgrup = _context13.sent;

          if (islink) {
            _context13.next = 92;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, '✘ Format link salah', id));

        case 92:
          if (!isOwnerBot) {
            _context13.next = 97;
            break;
          }

          _context13.next = 95;
          return regeneratorRuntime.awrap(RBot.joinGroupViaLink(linkgrup).then(function _callee() {
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(RBot.sendText(from, "\u2611 Berhasil menambahkan ".concat(botName)));

                  case 2:
                    _context.next = 4;
                    return regeneratorRuntime.awrap(RBot.sendText(chekgrup.id, "Hai members ".concat(groupName, ", untuk menggunakan fitur ").concat(botName, " silahkan ketik ").concat(prefix, "menu")));

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            });
          }));

        case 95:
          _context13.next = 106;
          break;

        case 97:
          _context13.next = 99;
          return regeneratorRuntime.awrap(RBot.getAllGroups());

        case 99:
          cgrup = _context13.sent;

          if (!(cgrup.length > groupLimit)) {
            _context13.next = 102;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Saat ini ".concat(botName, " sudah melebihi kapasitas untuk masuk kedalam group. \nGroup Now : ").concat(groupLimit), id));

        case 102:
          if (!(cgrup.size < memberLimit)) {
            _context13.next = 104;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Minimal anggota group harus lebih dari ".concat(memberLimit, " anggota"), id));

        case 104:
          _context13.next = 106;
          return regeneratorRuntime.awrap(RBot.joinGroupViaLink(linkgrup).then(function _callee2() {
            return regeneratorRuntime.async(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return regeneratorRuntime.awrap(RBot.reply(from, "\u2611 Berhasil menambahkan ".concat(botName), id));

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          })["catch"](function () {
            RBot.reply(from, '✘ Gagal!', id);
          }));

        case 106:
          return _context13.abrupt("break", 859);

        case 107:
          _context13.next = 109;
          return regeneratorRuntime.awrap(RBot.getAmountOfLoadedMessages());

        case 109:
          loadedMsg = _context13.sent;
          _context13.next = 112;
          return regeneratorRuntime.awrap(RBot.getAllChatIds());

        case 112:
          chatIds = _context13.sent;
          _context13.next = 115;
          return regeneratorRuntime.awrap(RBot.getAllGroups());

        case 115:
          groups = _context13.sent;
          RBot.sendText(from, "Status :\n- *".concat(loadedMsg, "* Loaded Messages\n- *").concat(groups.length, "* Group Chats\n- *").concat(chatIds.length - groups.length, "* Personal Chats\n- *").concat(chatIds.length, "* Total Chats"));
          return _context13.abrupt("break", 859);

        case 118:
          if (!((isMedia || isQuotedImage) && args.length === 0)) {
            _context13.next = 128;
            break;
          }

          encryptMedia = isQuotedImage ? quotedMsg : message;
          _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype;
          _context13.next = 123;
          return regeneratorRuntime.awrap(decryptMedia(encryptMedia, uaOverride));

        case 123:
          _mediaData = _context13.sent;
          _imageBase = "data:".concat(_mimetype, ";base64,").concat(_mediaData.toString('base64'));
          RBot.sendImageAsSticker(from, _imageBase).then(function () {
            RBot.reply(from, '↳ Sukses dibuat', id);
            style.msg("Sticker Processed for ".concat(processTime(t, moment()), " Second"));
          });
          _context13.next = 162;
          break;

        case 128:
          if (!(args[0] === 'nobg')) {
            _context13.next = 153;
            break;
          }

          if (!(isMedia || isQuotedImage)) {
            _context13.next = 151;
            break;
          }

          _context13.prev = 130;
          _context13.next = 133;
          return regeneratorRuntime.awrap(decryptMedia(message, uaOverride));

        case 133:
          mediaData = _context13.sent;
          imageBase64 = "data:".concat(mimetype, ";base64,").concat(mediaData.toString('base64'));
          base64img = imageBase64;
          outFile = './media/noBg.png'; // kamu dapat mengambil api key dari website remove.bg dan ubahnya difolder settings/api.json
          //! Take API KEY at remove.bg

          _context13.next = 139;
          return regeneratorRuntime.awrap(removeBackgroundFromImageBase64({
            base64img: base64img,
            apiKey: apiNoBg,
            size: 'auto',
            type: 'auto',
            outFile: outFile
          }));

        case 139:
          result = _context13.sent;
          _context13.next = 142;
          return regeneratorRuntime.awrap(fs.writeFile(outFile, result.base64img));

        case 142:
          _context13.next = 144;
          return regeneratorRuntime.awrap(RBot.sendImageAsSticker(from, "data:".concat(mimetype, ";base64,").concat(result.base64img)));

        case 144:
          _context13.next = 151;
          break;

        case 146:
          _context13.prev = 146;
          _context13.t3 = _context13["catch"](130);
          console.log(_context13.t3);
          _context13.next = 151;
          return regeneratorRuntime.awrap(RBot.reply(from, "Penggunaan fitur ".concat(prefix, "nobg hari ini sudah habis"), id));

        case 151:
          _context13.next = 162;
          break;

        case 153:
          if (!(args.length === 1)) {
            _context13.next = 160;
            break;
          }

          if (isUrl(url)) {
            _context13.next = 157;
            break;
          }

          _context13.next = 157;
          return regeneratorRuntime.awrap(RBot.reply(from, '✘ link tidak valid', id));

        case 157:
          RBot.sendStickerfromUrl(from, url).then(function (r) {
            return !r && r !== undefined ? RBot.sendText(from, '✘ Link tersebut tidak memuat gambar.') : RBot.reply(from, '↳ Sukses dibuat');
          }).then(function () {
            return style.msg("\tSticker Processed for ".concat(processTime(t, moment()), " Second"));
          });
          _context13.next = 162;
          break;

        case 160:
          _context13.next = 162;
          return regeneratorRuntime.awrap(RBot.reply(from, "Untuk membuat sticker kamu harus mengirimkan gambar dengan caption ".concat(prefix, "sticker"), id));

        case 162:
          return _context13.abrupt("break", 859);

        case 163:
          if (!(isMedia || isQuotedVideo)) {
            _context13.next = 179;
            break;
          }

          if (!(mimetype === 'video/mp4' && message.duration < 10 || mimetype === 'image/gif' && message.duration < 10)) {
            _context13.next = 176;
            break;
          }

          _context13.next = 167;
          return regeneratorRuntime.awrap(decryptMedia(message, uaOverride));

        case 167:
          mediaData = _context13.sent;
          RBot.reply(from, '⏳ Sticker di proses', id);
          filename = "./media/stickergif.".concat(mimetype.split('/')[1]);
          _context13.next = 172;
          return regeneratorRuntime.awrap(fs.writeFileSync(filename, mediaData));

        case 172:
          _context13.next = 174;
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
                    return regeneratorRuntime.awrap(RBot.sendImageAsSticker(from, "data:image/gif;base64,".concat(gif.toString('base64')))["catch"](function () {
                      RBot.reply(from, 'Maaf filenya terlalu besar!', id);
                    }));

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          }));

        case 174:
          _context13.next = 177;
          break;

        case 176:
          RBot.reply(from, "[\u2718] Maksimal gif 10 detik!", id);

        case 177:
          _context13.next = 180;
          break;

        case 179:
          RBot.reply(from, "[\u2718] Kirim gif dengan caption *".concat(prefix, "stickergif*"), id);

        case 180:
          return _context13.abrupt("break", 859);

        case 181:
          if (!(args.length !== 1)) {
            _context13.next = 183;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "[\u2718] Format pesan salah.\nKetik".concat(prefix, "stickergiphy <link_giphy>"), id));

        case 183:
          isGiphy = url.match(new RegExp(/https?:\/\/(www\.)?giphy.com/, 'gi'));
          isMediaGiphy = url.match(new RegExp(/https?:\/\/media.giphy.com\/media/, 'gi'));

          if (!isGiphy) {
            _context13.next = 194;
            break;
          }

          getGiphyCode = url.match(new RegExp(/(\/|\-)(?:.(?!(\/|\-)))+$/, 'gi'));

          if (getGiphyCode) {
            _context13.next = 189;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, '[✘] Gagal mengambil kode giphy', id));

        case 189:
          giphyCode = getGiphyCode[0].replace(/[-\/]/gi, '');
          smallGifUrl = 'https://media.giphy.com/media/' + giphyCode + '/giphy-downsized.gif';
          RBot.sendGiphyAsSticker(from, smallGifUrl).then(function () {
            RBot.reply(from, '↳ Sukses dibuat');
            style.msg("\tSticker Processed for ".concat(processTime(t, moment()), " Second"));
          })["catch"](function (err) {
            return console.log(err);
          });
          _context13.next = 204;
          break;

        case 194:
          if (!isMediaGiphy) {
            _context13.next = 202;
            break;
          }

          gifUrl = url.match(new RegExp(/(giphy|source).(gif|mp4)/, 'gi'));

          if (gifUrl) {
            _context13.next = 198;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, '[✘] Gagal mengambil kode giphy', id));

        case 198:
          _smallGifUrl = url.replace(gifUrl[0], 'giphy-downsized.gif');
          RBot.sendGiphyAsSticker(from, _smallGifUrl).then(function () {
            RBot.reply(from, '↳ Sukses dibuat');
            style.msg("\tSticker Processed for ".concat(processTime(t, moment()), " Second"));
          })["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          });
          _context13.next = 204;
          break;

        case 202:
          _context13.next = 204;
          return regeneratorRuntime.awrap(RBot.reply(from, '[✘] Sticker harus dari link Giphy ', id));

        case 204:
          return _context13.abrupt("break", 859);

        case 205:
          if (!((isMedia || isQuotedImage) && args.length >= 2)) {
            _context13.next = 221;
            break;
          }

          top = arg.split('|')[0];
          bottom = arg.split('|')[1];
          _encryptMedia = isQuotedImage ? quotedMsg : message;
          _context13.next = 211;
          return regeneratorRuntime.awrap(decryptMedia(_encryptMedia, uaOverride));

        case 211:
          _mediaData2 = _context13.sent;
          _context13.next = 214;
          return regeneratorRuntime.awrap(uploadImages(_mediaData2, false));

        case 214:
          getUrl = _context13.sent;
          _context13.next = 217;
          return regeneratorRuntime.awrap(meme.custom(getUrl, top, bottom));

        case 217:
          ImageBase64 = _context13.sent;
          RBot.sendFile(from, ImageBase64, 'image.png', '', null, true).then(function () {
            RBot.reply(from, '↳ Sukses dibuat', id);
          })["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"));
          });
          _context13.next = 223;
          break;

        case 221:
          _context13.next = 223;
          return regeneratorRuntime.awrap(RBot.reply(from, "Cara penggunaan, kirim gambar dengan caption ".concat(prefix, "meme <teks_atas> | <teks_bawah>\ncontoh: ").concat(prefix, "meme teks atas | teks bawah"), id));

        case 223:
          return _context13.abrupt("break", 859);

        case 224:
          qmaker = body.trim().split('|');

          if (!(qmaker.length >= 3)) {
            _context13.next = 242;
            break;
          }

          quotes = qmaker[1];
          author = qmaker[2]; //! Turn Off Choosing Background

          theme = "random";
          RBot.reply(from, '[⏳] Sedang di proses', id);
          _context13.prev = 230;
          _context13.next = 233;
          return regeneratorRuntime.awrap(images.quote(quotes, author, theme));

        case 233:
          hasilqmaker = _context13.sent;
          RBot.sendFileFromUrl(from, "".concat(hasilqmaker), '', '↳ Sukses dibuat', id);
          _context13.next = 240;
          break;

        case 237:
          _context13.prev = 237;
          _context13.t4 = _context13["catch"](230);
          RBot.reply('[✘] Format pesan salah', id);

        case 240:
          _context13.next = 243;
          break;

        case 242:
          RBot.reply(from, "Ketik ".concat(prefix, "quotemaker |<isi_quote>|<author>|\n\ncontoh: ").concat(prefix, "quotemaker |aku sayang kamu|-R-Bot|"));

        case 243:
          return _context13.abrupt("break", 859);

        case 244:
          if (!(args.length == 0)) {
            _context13.next = 246;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Membuat bot menulis teks yang dikirim menjadi gambar\nPemakaian: ".concat(prefix, "nulis [teks]\n\ncontoh: ").concat(prefix, "nulis i love you 3000"), id));

        case 246:
          nulisq = body.slice(7);
          _context13.next = 249;
          return regeneratorRuntime.awrap(rugaapi.tulis(nulisq));

        case 249:
          nulisp = _context13.sent;
          _context13.next = 252;
          return regeneratorRuntime.awrap(RBot.sendImage(from, "".concat(nulisp), '', 'Nih...', id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 252:
          return _context13.abrupt("break", 859);

        case 253:
          try {
            axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json').then(function (response) {
              var hehex = '╔〘 List Surah 〙\n';

              for (var _i = 0; _i < response.data.data.length; _i++) {
                hehex += '╠ ';
                hehex += response.data.data[_i].name.transliteration.id.toLowerCase() + '\n';
              }

              hehex += '╚〘 Thanks to ARUGA 〙';
              RBot.reply(from, hehex, id);
            });
          } catch (err) {
            RBot.reply(from, err, id);
          }

          return _context13.abrupt("break", 859);

        case 255:
          if (!(args.length == 0)) {
            _context13.next = 257;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "*_".concat(prefix, "infosurah <nama surah>_*\nMenampilkan informasi lengkap mengenai surah tertentu. Contoh : ").concat(prefix, "infosurah al-baqarah"), message.id));

        case 257:
          _context13.next = 259;
          return regeneratorRuntime.awrap(axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json'));

        case 259:
          responseh = _context13.sent;
          data = responseh.data.data;
          idx = data.findIndex(function (post, index) {
            if (post.name.transliteration.id.toLowerCase() == args[0].toLowerCase() || post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()) return true;
          });
          pesan = "";
          pesan = pesan + "Nama : " + data[idx].name.transliteration.id + "\n" + "Asma : " + data[idx].name["short"] + "\n" + "Arti : " + data[idx].name.translation.id + "\n" + "Jumlah ayat : " + data[idx].numberOfVerses + "\n" + "Nomor surah : " + data[idx].number + "\n" + "Jenis : " + data[idx].revelation.id + "\n" + "Keterangan : " + data[idx].tafsir.id;
          RBot.reply(from, pesan, message.id);
          return _context13.abrupt("break", 859);

        case 266:
          if (!(args.length == 0)) {
            _context13.next = 268;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "*_".concat(prefix, "surah <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ").concat(prefix, "surah al-baqarah 1\n\n*_").concat(prefix, "surah <nama surah> <ayat> en/id_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Inggris / Indonesia. Contoh penggunaan : ").concat(prefix, "surah al-baqarah 1 id"), message.id));

        case 268:
          _context13.next = 270;
          return regeneratorRuntime.awrap(axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json'));

        case 270:
          responseh = _context13.sent;
          data = responseh.data.data;
          idx = data.findIndex(function (post, index) {
            if (post.name.transliteration.id.toLowerCase() == args[0].toLowerCase() || post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()) return true;
          });
          nmr = data[idx].number;

          if (isNaN(nmr)) {
            _context13.next = 286;
            break;
          }

          _context13.next = 277;
          return regeneratorRuntime.awrap(axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + args[1]));

        case 277:
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
          RBot.reply(from, pesan, message.id);

        case 286:
          return _context13.abrupt("break", 859);

        case 287:
          if (!(args.length == 0)) {
            _context13.next = 289;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "*_".concat(prefix, "tafsir <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahan dan tafsirnya dalam bahasa Indonesia. Contoh penggunaan : ").concat(prefix, "tafsir al-baqarah 1"), message.id));

        case 289:
          _context13.next = 291;
          return regeneratorRuntime.awrap(axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json'));

        case 291:
          responsh = _context13.sent;
          data = responsh.data.data;
          idx = data.findIndex(function (post, index) {
            if (post.name.transliteration.id.toLowerCase() == args[0].toLowerCase() || post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()) return true;
          });
          nmr = data[idx].number;

          if (isNaN(nmr)) {
            _context13.next = 305;
            break;
          }

          _context13.next = 298;
          return regeneratorRuntime.awrap(axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + args[1]));

        case 298:
          responsih = _context13.sent;
          data = responsih.data.data;
          pesan = "";
          pesan = pesan + "Tafsir Q.S. " + data.surah.name.transliteration.id + ":" + args[1] + "\n\n";
          pesan = pesan + data.text.arab + "\n\n";
          pesan = pesan + "_" + data.translation.id + "_" + "\n\n" + data.tafsir.id["long"];
          RBot.reply(from, pesan, message.id);

        case 305:
          return _context13.abrupt("break", 859);

        case 306:
          if (!(args.length == 0)) {
            _context13.next = 308;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "*_".concat(prefix, "ALaudio <nama surah>_*\nMenampilkan tautan dari audio surah tertentu. Contoh penggunaan : ").concat(prefix, "ALaudio al-fatihah\n\n*_").concat(prefix, "ALaudio <nama surah> <ayat>_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ").concat(prefix, "ALaudio al-fatihah 1\n\n*_").concat(prefix, "ALaudio <nama surah> <ayat> en_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Inggris. Contoh penggunaan : ").concat(prefix, "ALaudio al-fatihah 1 en"), message.id));

        case 308:
          ayat = "ayat";
          bhs = "";
          _context13.next = 312;
          return regeneratorRuntime.awrap(axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json'));

        case 312:
          responseh = _context13.sent;
          surah = responseh.data;
          idx = surah.data.findIndex(function (post, index) {
            if (post.name.transliteration.id.toLowerCase() == args[0].toLowerCase() || post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()) return true;
          });
          nmr = surah.data[idx].number;

          if (isNaN(nmr)) {
            _context13.next = 346;
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
            _context13.next = 332;
            break;
          }

          _context13.next = 323;
          return regeneratorRuntime.awrap(axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah/' + nmr + '.json'));

        case 323:
          responsih2 = _context13.sent;
          _responsih2$data = responsih2.data, name = _responsih2$data.name, name_translations = _responsih2$data.name_translations, number_of_ayah = _responsih2$data.number_of_ayah, number_of_surah = _responsih2$data.number_of_surah, recitations = _responsih2$data.recitations;
          pesan = pesan + "Audio Quran Surah ke-" + number_of_surah + " " + name + " (" + name_translations.ar + ") " + "dengan jumlah " + number_of_ayah + " ayat\n";
          pesan = pesan + "Dilantunkan oleh " + recitations[0].name + " : " + recitations[0].audio_url + "\n";
          pesan = pesan + "Dilantunkan oleh " + recitations[1].name + " : " + recitations[1].audio_url + "\n";
          pesan = pesan + "Dilantunkan oleh " + recitations[2].name + " : " + recitations[2].audio_url + "\n";
          RBot.reply(from, pesan, message.id);
          _context13.next = 346;
          break;

        case 332:
          _context13.next = 334;
          return regeneratorRuntime.awrap(axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + ayat));

        case 334:
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
          _context13.next = 344;
          return regeneratorRuntime.awrap(RBot.sendFileFromUrl(from, data.audio.secondary[0]));

        case 344:
          _context13.next = 346;
          return regeneratorRuntime.awrap(RBot.reply(from, pesan, message.id));

        case 346:
          return _context13.abrupt("break", 859);

        case 347:
          if (!(args.length == 0)) {
            _context13.next = 349;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Melihat jadwal solat di setiap daerah \nketik: ".concat(prefix, "jsolat [namadaerah]\n\nuntuk list daerah yang ada\nketik: ").concat(prefix, "daerah"), id));

        case 349:
          solatx = body.slice(8);
          _context13.next = 352;
          return regeneratorRuntime.awrap(rugaapi.jadwaldaerah(solatx));

        case 352:
          solatj = _context13.sent;
          _context13.next = 355;
          return regeneratorRuntime.awrap(RBot.reply(from, solatj, id)["catch"](function () {
            RBot.reply(from, "Masukkan nama daerah. contoh ".concat(prefix, "jsolat Kudus"), id);
          }));

        case 355:
          return _context13.abrupt("break", 859);

        case 356:
          _context13.next = 358;
          return regeneratorRuntime.awrap(rugaapi.daerah());

        case 358:
          daerahq = _context13.sent;
          _context13.next = 361;
          return regeneratorRuntime.awrap(RBot.reply(from, daerahq, id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 361:
          return _context13.abrupt("break", 859);

        case 362:
          if (!(args.length == 0)) {
            _context13.next = 364;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mendownload gambar atau video dari instagram\nketik: ".concat(prefix, "instagram [link_ig]"), id));

        case 364:
          _context13.next = 366;
          return regeneratorRuntime.awrap(rugaapi.insta(args[0]));

        case 366:
          instag = _context13.sent;
          _context13.next = 369;
          return regeneratorRuntime.awrap(RBot.sendFileFromUrl(from, instag, '', '', id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 369:
          return _context13.abrupt("break", 859);

        case 370:
          if (!(args.length == 0)) {
            _context13.next = 372;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mendownload lagu dari youtube\nketik: ".concat(prefix, "ytmp3 [link_yt]"), id));

        case 372:
          rugaapi.ytmp3(args[0]).then(function _callee4(res) {
            return regeneratorRuntime.async(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(res.status == 'error')) {
                      _context4.next = 2;
                      break;
                    }

                    return _context4.abrupt("return", RBot.sendFileFromUrl(from, "".concat(res.link), '', "".concat(res.judul), id));

                  case 2:
                    if (!(res.status == 'filesize')) {
                      _context4.next = 4;
                      break;
                    }

                    return _context4.abrupt("return", RBot.sendFileFromUrl(from, "".concat(res.link), '', "".concat(res.judul), id));

                  case 4:
                    _context4.next = 6;
                    return regeneratorRuntime.awrap(RBot.sendFileFromUrl(from, "".concat(res.thumb), '', "Youtube ditemukan\n\nJudul: ".concat(res.judul, "\n\nUkuran: ").concat(res.size, "\n\nAudio sedang dikirim"), id));

                  case 6:
                    _context4.next = 8;
                    return regeneratorRuntime.awrap(RBot.sendFileFromUrl(from, "".concat(res.link), '', '', id));

                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }
            });
          });
          return _context13.abrupt("break", 859);

        case 374:
          if (!(args.length == 0)) {
            _context13.next = 376;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mendownload video dari youtube\nketik: ".concat(prefix, "ytmp3 [link_yt]")));

        case 376:
          rugaapi.ytmp4(args[0]).then(function _callee5(res) {
            return regeneratorRuntime.async(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!(res.status == 'error')) {
                      _context5.next = 2;
                      break;
                    }

                    return _context5.abrupt("return", RBot.sendFileFromUrl(from, "".concat(res.link), '', "".concat(res.judul), id));

                  case 2:
                    if (!(res.status == 'filesize')) {
                      _context5.next = 4;
                      break;
                    }

                    return _context5.abrupt("return", RBot.sendFileFromUrl(from, "".concat(res.link), '', "".concat(res.judul), id));

                  case 4:
                    _context5.next = 6;
                    return regeneratorRuntime.awrap(RBot.sendFileFromUrl(from, "".concat(res.thumb), '', "Youtube ditemukan\n\nJudul: ".concat(res.judul, "\n\nUkuran: ").concat(res.size, "\n\nVideo sedang dikirim"), id));

                  case 6:
                    _context5.next = 8;
                    return regeneratorRuntime.awrap(RBot.sendFileFromUrl(from, "".concat(res.link), '', '', id));

                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }
            });
          });
          return _context13.abrupt("break", 859);

        case 378:
          if (!(args.length == 0)) {
            _context13.next = 380;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mengetahui arti nama seseorang\nketik ".concat(prefix, "artinama Namanya"), id));

        case 380:
          rugaapi.artinama(body.slice(10)).then(function _callee6(res) {
            return regeneratorRuntime.async(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return regeneratorRuntime.awrap(RBot.reply(from, "Arti : ".concat(res), id));

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            });
          });
          return _context13.abrupt("break", 859);

        case 382:
          if (!(args.length !== 2)) {
            _context13.next = 384;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mengecek jodoh melalui nama\nketik: ".concat(prefix, "cekjodoh nama pasangan\n\ncontoh: ").concat(prefix, "cekjodoh aku kamu\n\nhanya bisa pakai nama panggilan (satu kata)")));

        case 384:
          rugaapi.cekjodoh(args[0], args[1]).then(function _callee7(res) {
            return regeneratorRuntime.async(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return regeneratorRuntime.awrap(RBot.sendFileFromUrl(from, "".concat(res.link), '', "".concat(res.text), id));

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            });
          });
          return _context13.abrupt("break", 859);

        case 386:
          fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt').then(function (res) {
            return res.text();
          }).then(function (body) {
            var splitnix = body.split('\n');
            var randomnix = splitnix[Math.floor(Math.random() * splitnix.length)];
            RBot.reply(from, randomnix, id);
          })["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          });
          return _context13.abrupt("break", 859);

        case 388:
          fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/katabijax.txt').then(function (res) {
            return res.text();
          }).then(function (body) {
            var splitbijak = body.split('\n');
            var randombijak = splitbijak[Math.floor(Math.random() * splitbijak.length)];
            RBot.reply(from, randombijak, id);
          })["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          });
          return _context13.abrupt("break", 859);

        case 390:
          fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/pantun.txt').then(function (res) {
            return res.text();
          }).then(function (body) {
            var splitpantun = body.split('\n');
            var randompantun = splitpantun[Math.floor(Math.random() * splitpantun.length)];
            RBot.reply(from, randompantun.replace(/aruga-line/g, "\n"), id);
          })["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          });
          return _context13.abrupt("break", 859);

        case 392:
          _context13.next = 394;
          return regeneratorRuntime.awrap(rugaapi.quote());

        case 394:
          quotex = _context13.sent;
          _context13.next = 397;
          return regeneratorRuntime.awrap(RBot.reply(from, quotex, id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 397:
          return _context13.abrupt("break", 859);

        case 398:
          if (!(args.length == 0)) {
            _context13.next = 400;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk menggunakan ".concat(prefix, "anime\nSilahkan ketik: ").concat(prefix, "anime [query]\nContoh: ").concat(prefix, "anime random\n\nquery yang tersedia:\nrandom, waifu, husbu, neko"), id));

        case 400:
          if (args[0] == 'random' || args[0] == 'waifu' || args[0] == 'husbu' || args[0] == 'neko') {
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/' + args[0] + '.txt').then(function (res) {
              return res.text();
            }).then(function (body) {
              var randomnime = body.split('\n');
              var randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)];
              RBot.sendFileFromUrl(from, randomnimex, '', 'Nee..', id);
            })["catch"](function () {
              RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
            });
          } else {
            RBot.reply(from, "Maaf query tidak tersedia. Silahkan ketik ".concat(prefix, "anime untuk melihat list query"));
          }

          return _context13.abrupt("break", 859);

        case 402:
          if (!(args.length == 0)) {
            _context13.next = 404;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk menggunakan ".concat(prefix, "kpop\nSilahkan ketik: ").concat(prefix, "kpop [query]\nContoh: ").concat(prefix, "kpop bts\n\nquery yang tersedia:\nblackpink, exo, bts"), id));

        case 404:
          if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt').then(function (res) {
              return res.text();
            }).then(function (body) {
              var randomkpop = body.split('\n');
              var randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)];
              RBot.sendFileFromUrl(from, randomkpopx, '', 'Nee..', id);
            })["catch"](function () {
              RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
            });
          } else {
            RBot.reply(from, "Maaf query tidak tersedia. Silahkan ketik ".concat(prefix, "kpop untuk melihat list query"));
          }

          return _context13.abrupt("break", 859);

        case 406:
          _context13.next = 408;
          return regeneratorRuntime.awrap(meme.random());

        case 408:
          randmeme = _context13.sent;
          RBot.sendFileFromUrl(from, randmeme, '', '', id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          });
          return _context13.abrupt("break", 859);

        case 411:
          if (!(args.length == 0)) {
            _context13.next = 413;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mencari gambar di pinterest\nketik: ".concat(prefix, "images [search]\ncontoh: ").concat(prefix, "images naruto"), id));

        case 413:
          cariwall = body.slice(8);
          _context13.next = 416;
          return regeneratorRuntime.awrap(images.fdci(cariwall));

        case 416:
          hasilwall = _context13.sent;
          _context13.next = 419;
          return regeneratorRuntime.awrap(RBot.sendFileFromUrl(from, hasilwall, '', '', id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 419:
          return _context13.abrupt("break", 859);

        case 420:
          if (!(args.length == 0)) {
            _context13.next = 422;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mencari gambar di sub reddit\nketik: ".concat(prefix, "sreddit [search]\ncontoh: ").concat(prefix, "sreddit naruto"), id));

        case 422:
          carireddit = body.slice(9);
          _context13.next = 425;
          return regeneratorRuntime.awrap(images.sreddit(carireddit));

        case 425:
          hasilreddit = _context13.sent;
          _context13.next = 428;
          return regeneratorRuntime.awrap(RBot.sendFileFromUrl(from, hasilreddit, '', '', id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 428:
          return _context13.abrupt("break", 859);

        case 429:
          if (!(args.length == 0)) {
            _context13.next = 431;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mencari resep makanan\nCaranya ketik: ".concat(prefix, "resep [search]\n\ncontoh: ").concat(prefix, "resep tahu"), id));

        case 431:
          cariresep = body.slice(7);
          _context13.next = 434;
          return regeneratorRuntime.awrap(resep.resep(cariresep));

        case 434:
          hasilresep = _context13.sent;
          _context13.next = 437;
          return regeneratorRuntime.awrap(RBot.reply(from, hasilresep + '\n\nIni kak resep makanannya..', id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 437:
          return _context13.abrupt("break", 859);

        case 438:
          rugapoi.getLatest().then(function (result) {
            rugapoi.getVideo(result.link).then(function (res) {
              var heheq = '\n';

              for (var _i2 = 0; _i2 < res.links.length; _i2++) {
                heheq += "".concat(res.links[_i2], "\n");
              }

              RBot.reply(from, "Title: ".concat(res.title, "\n\nLink:\n").concat(heheq, "\nmasih tester bntr :v"));
            });
          })["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          });
          return _context13.abrupt("break", 859);

        case 440:
          if (!(args.length == 0)) {
            _context13.next = 442;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk men-stalk akun instagram seseorang\nketik ".concat(prefix, "stalkig [username]\ncontoh: ").concat(prefix, "stalkig ini.arga"), id));

        case 442:
          _context13.next = 444;
          return regeneratorRuntime.awrap(rugaapi.stalkig(args[0]));

        case 444:
          igstalk = _context13.sent;
          _context13.next = 447;
          return regeneratorRuntime.awrap(rugaapi.stalkigpict(args[0]));

        case 447:
          igstalkpict = _context13.sent;
          _context13.next = 450;
          return regeneratorRuntime.awrap(RBot.sendFileFromUrl(from, igstalkpict, '', igstalk, id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 450:
          return _context13.abrupt("break", 859);

        case 451:
          if (!(args.length == 0)) {
            _context13.next = 453;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mencari suatu kata dari wikipedia\nketik: ".concat(prefix, "wiki [kata]"), id));

        case 453:
          wikip = body.slice(6);
          _context13.next = 456;
          return regeneratorRuntime.awrap(rugaapi.wiki(wikip));

        case 456:
          wikis = _context13.sent;
          _context13.next = 459;
          return regeneratorRuntime.awrap(RBot.reply(from, wikis, id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 459:
          return _context13.abrupt("break", 859);

        case 460:
          if (!(args.length == 0)) {
            _context13.next = 462;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk melihat cuaca pada suatu daerah\nketik: ".concat(prefix, "cuaca [daerah]"), id));

        case 462:
          cuacaq = body.slice(7);
          _context13.next = 465;
          return regeneratorRuntime.awrap(rugaapi.cuaca(cuacaq));

        case 465:
          cuacap = _context13.sent;
          _context13.next = 468;
          return regeneratorRuntime.awrap(RBot.reply(from, cuacap, id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 468:
          return _context13.abrupt("break", 859);

        case 469:
          if (!(args.length == 0)) {
            _context13.next = 471;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mencari lirik dari sebuah lagu\bketik: ".concat(prefix, "lirik [judul_lagu]"), id));

        case 471:
          rugaapi.lirik(body.slice(7)).then(function _callee8(res) {
            return regeneratorRuntime.async(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return regeneratorRuntime.awrap(RBot.reply(from, "Lirik Lagu: ".concat(body.slice(7), "\n\n").concat(res), id));

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            });
          });
          return _context13.abrupt("break", 859);

        case 473:
          if (!(args.length == 0)) {
            _context13.next = 475;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mencari lirik dan chord dari sebuah lagu\bketik: ".concat(prefix, "chord [judul_lagu]"), id));

        case 475:
          chordq = body.slice(7);
          _context13.next = 478;
          return regeneratorRuntime.awrap(rugaapi.chord(chordq));

        case 478:
          chordp = _context13.sent;
          _context13.next = 481;
          return regeneratorRuntime.awrap(RBot.reply(from, chordp, id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 481:
          return _context13.abrupt("break", 859);

        case 482:
          if (!(args.length == 0)) {
            _context13.next = 484;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Membuat bot men-screenshot sebuah web\n\nPemakaian: ".concat(prefix, "ss [url]\n\ncontoh: ").concat(prefix, "ss http://google.com"), id));

        case 484:
          _context13.next = 486;
          return regeneratorRuntime.awrap(meme.ss(args[0]));

        case 486:
          scrinshit = _context13.sent;
          _context13.next = 489;
          return regeneratorRuntime.awrap(RBot.sendFile(from, scrinshit, 'ss.jpg', 'cekrek', id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 489:
          return _context13.abrupt("break", 859);

        case 490:
          if (!(args.length == 0)) {
            _context13.next = 492;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mencari lagu dari youtube\n\nPenggunaan: ".concat(prefix, "play judul lagu"), id));

        case 492:
          axios.get("https://arugaytdl.herokuapp.com/search?q=".concat(body.slice(6))).then(function _callee10(res) {
            return regeneratorRuntime.async(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return regeneratorRuntime.awrap(RBot.sendFileFromUrl(from, "".concat(res.data[0].thumbnail), "", "Lagu ditemukan\n\nJudul: ".concat(res.data[0].title, "\nDurasi: ").concat(res.data[0].duration, "detik\nUploaded: ").concat(res.data[0].uploadDate, "\nView: ").concat(res.data[0].viewCount, "\n\nsedang dikirim"), id));

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

                              return _context9.abrupt("return", RBot.reply(from, 'Maaf ukuran file terlalu besar!'));

                            case 2:
                              _context9.next = 4;
                              return regeneratorRuntime.awrap(RBot.sendPtt(from, "".concat(rest.data.result), id));

                            case 4:
                            case "end":
                              return _context9.stop();
                          }
                        }
                      });
                    })["catch"](function () {
                      RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
                    });

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }
            });
          })["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          });
          return _context13.abrupt("break", 859);

        case 494:
          if (!(isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image')) {
            _context13.next = 510;
            break;
          }

          if (!isMedia) {
            _context13.next = 501;
            break;
          }

          _context13.next = 498;
          return regeneratorRuntime.awrap(decryptMedia(message, uaOverride));

        case 498:
          mediaData = _context13.sent;
          _context13.next = 504;
          break;

        case 501:
          _context13.next = 503;
          return regeneratorRuntime.awrap(decryptMedia(quotedMsg, uaOverride));

        case 503:
          mediaData = _context13.sent;

        case 504:
          _fetch = require('node-fetch');
          imgBS4 = "data:".concat(mimetype, ";base64,").concat(mediaData.toString('base64'));
          RBot.reply(from, 'Searching....', id);

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
              RBot.reply(from, 'Maaf, saya tidak tau ini anime apa, pastikan gambar yang akan di Search tidak Buram/Kepotong', id);
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
            RBot.sendFileFromUrl(from, video, 'anime.mp4', teks, id)["catch"](function () {
              RBot.reply(from, teks, id);
            });
          })["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          });

          _context13.next = 511;
          break;

        case 510:
          RBot.reply(from, "Maaf format salah\n\nSilahkan kirim foto dengan caption ".concat(prefix, "whatanime\n\nAtau reply foto dengan caption ").concat(prefix, "whatanime"), id);

        case 511:
          return _context13.abrupt("break", 859);

        case 512:
          if (!(args.length !== 2)) {
            _context13.next = 514;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Maaf, format pesan salah.\nSilahkan ketik pesan dengan ".concat(prefix, "resi <kurir> <no_resi>\n\nKurir yang tersedia:\njne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex"), id));

        case 514:
          kurirs = ['jne', 'pos', 'tiki', 'wahana', 'jnt', 'rpx', 'sap', 'sicepat', 'pcp', 'jet', 'dse', 'first', 'ninja', 'lion', 'idl', 'rex'];

          if (kurirs.includes(args[0])) {
            _context13.next = 517;
            break;
          }

          return _context13.abrupt("return", RBot.sendText(from, "Maaf, jenis ekspedisi pengiriman tidak didukung layanan ini hanya mendukung ekspedisi pengiriman ".concat(kurirs.join(', '), " Tolong periksa kembali.")));

        case 517:
          console.log('Memeriksa No Resi', args[1], 'dengan ekspedisi', args[0]);
          cekResi(args[0], args[1]).then(function (result) {
            return RBot.sendText(from, result);
          });
          return _context13.abrupt("break", 859);

        case 520:
          if (!(args.length == 0)) {
            _context13.next = 522;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Mengubah teks menjadi sound (google voice)\nketik: ".concat(prefix, "tts <kode_bahasa> <teks>\ncontoh : ").concat(prefix, "tts id halo\nuntuk kode bahasa cek disini : https://anotepad.com/note/read/5xqahdy8")));

        case 522:
          ttsGB = require('node-gtts')(args[0]);
          dataText = body.slice(8);

          if (!(dataText === '')) {
            _context13.next = 526;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'apa teksnya syg..', id));

        case 526:
          try {
            ttsGB.save('./media/tts.mp3', dataText, function () {
              RBot.sendPtt(from, './media/tts.mp3', id);
            });
          } catch (err) {
            RBot.reply(from, err, id);
          }

          return _context13.abrupt("break", 859);

        case 528:
          if (!(args.length != 1)) {
            _context13.next = 530;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Maaf, format pesan salah.\nSilahkan reply sebuah pesan dengan caption ".concat(prefix, "translate <kode_bahasa>\ncontoh ").concat(prefix, "translate id"), id));

        case 530:
          if (quotedMsg) {
            _context13.next = 532;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Maaf, format pesan salah.\nSilahkan reply sebuah pesan dengan caption ".concat(prefix, "translate <kode_bahasa>\ncontoh ").concat(prefix, "translate id"), id));

        case 532:
          quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : '';
          translate(quoteText, args[0]).then(function (result) {
            return RBot.sendText(from, result);
          })["catch"](function () {
            return RBot.sendText(from, 'Error, Kode bahasa salah.');
          });
          return _context13.abrupt("break", 859);

        case 535:
          rugaapi.covidindo().then(function _callee11(res) {
            return regeneratorRuntime.async(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return regeneratorRuntime.awrap(RBot.reply(from, "".concat(res), id));

                  case 2:
                  case "end":
                    return _context11.stop();
                }
              }
            });
          });
          return _context13.abrupt("break", 859);

        case 537:
          if (!(quotedMsg.type !== 'location')) {
            _context13.next = 539;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Maaf, format pesan salah.\nKirimkan lokasi dan reply dengan caption ".concat(prefix, "ceklokasi"), id));

        case 539:
          console.log("Request Status Zona Penyebaran Covid-19 (".concat(quotedMsg.lat, ", ").concat(quotedMsg.lng, ")."));
          _context13.next = 542;
          return regeneratorRuntime.awrap(getLocationData(quotedMsg.lat, quotedMsg.lng));

        case 542:
          zoneStatus = _context13.sent;
          if (zoneStatus.kode !== 200) RBot.sendText(from, 'Maaf, Terjadi error ketika memeriksa lokasi yang anda kirim.');
          datax = '';

          for (_i3 = 0; _i3 < zoneStatus.data.length; _i3++) {
            _zoneStatus$data$_i = zoneStatus.data[_i3], zone = _zoneStatus$data$_i.zone, region = _zoneStatus$data$_i.region;
            _zone = zone == 'green' ? 'Hijau* (Aman) \n' : zone == 'yellow' ? 'Kuning* (Waspada) \n' : 'Merah* (Bahaya) \n';
            datax += "".concat(_i3 + 1, ". Kel. *").concat(region, "* Berstatus *Zona ").concat(_zone);
          }

          text = "*CEK LOKASI PENYEBARAN COVID-19*\nHasil pemeriksaan dari lokasi yang anda kirim adalah *".concat(zoneStatus.status, "* ").concat(zoneStatus.optional, "\n\nInformasi lokasi terdampak disekitar anda:\n").concat(datax);
          RBot.sendText(from, text);
          return _context13.abrupt("break", 859);

        case 549:
          if (!(args.length == 0)) {
            _context13.next = 551;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "ketik ".concat(prefix, "shortlink <url>"), id));

        case 551:
          if (isUrl(args[0])) {
            _context13.next = 553;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, url yang kamu kirim tidak valid.', id));

        case 553:
          _context13.next = 555;
          return regeneratorRuntime.awrap(urlShortener(args[0]));

        case 555:
          shortlink = _context13.sent;
          _context13.next = 558;
          return regeneratorRuntime.awrap(RBot.sendText(from, shortlink)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 558:
          return _context13.abrupt("break", 859);

        case 559:
          if (!(args.length == 0)) {
            _context13.next = 561;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Mengubah kalimat menjadi alayyyyy\n\nketik ".concat(prefix, "bapakfont kalimat"), id));

        case 561:
          rugaapi.bapakfont(body.slice(11)).then(function _callee12(res) {
            return regeneratorRuntime.async(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return regeneratorRuntime.awrap(RBot.reply(from, "".concat(res), id));

                  case 2:
                  case "end":
                    return _context12.stop();
                }
              }
            });
          });
          return _context13.abrupt("break", 859);

        case 563:
          if (isGroupMsg) {
            _context13.next = 565;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 565:
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
          _context13.next = 572;
          return regeneratorRuntime.awrap(RBot.sendTextWithMentions(from, textKlas));

        case 572:
          return _context13.abrupt("break", 859);

        case 573:
          if (isGroupMsg) {
            _context13.next = 575;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 575:
          if (isGroupAdmins) {
            _context13.next = 577;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 577:
          if (isBotGroupAdmins) {
            _context13.next = 579;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id));

        case 579:
          if (!(args.length !== 1)) {
            _context13.next = 581;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk menggunakan ".concat(prefix, "add\nPenggunaan: ").concat(prefix, "add <nomor>\ncontoh: ").concat(prefix, "add 628xxx"), id));

        case 581:
          _context13.prev = 581;
          _context13.next = 584;
          return regeneratorRuntime.awrap(RBot.addParticipant(from, "".concat(args[0], "@c.us")));

        case 584:
          _context13.next = 589;
          break;

        case 586:
          _context13.prev = 586;
          _context13.t5 = _context13["catch"](581);
          RBot.reply(from, 'Tidak dapat menambahkan target', id);

        case 589:
          return _context13.abrupt("break", 859);

        case 590:
          if (isGroupMsg) {
            _context13.next = 592;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 592:
          if (isGroupAdmins) {
            _context13.next = 594;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 594:
          if (isBotGroupAdmins) {
            _context13.next = 596;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id));

        case 596:
          if (!(mentionedJidList.length === 0)) {
            _context13.next = 598;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, format pesan salah.\nSilahkan tag satu atau lebih orang yang akan dikeluarkan', id));

        case 598:
          if (!(mentionedJidList[0] === botNumber)) {
            _context13.next = 602;
            break;
          }

          _context13.next = 601;
          return regeneratorRuntime.awrap(RBot.reply(from, 'Maaf, format pesan salah.\nTidak dapat mengeluarkan akun bot sendiri', id));

        case 601:
          return _context13.abrupt("return", _context13.sent);

        case 602:
          _context13.next = 604;
          return regeneratorRuntime.awrap(RBot.sendTextWithMentions(from, "Request diterima, mengeluarkan:\n".concat(mentionedJidList.map(function (x) {
            return "@".concat(x.replace('@c.us', ''));
          }).join('\n'))));

        case 604:
          _i4 = 0;

        case 605:
          if (!(_i4 < mentionedJidList.length)) {
            _context13.next = 615;
            break;
          }

          if (!groupAdmins.includes(mentionedJidList[_i4])) {
            _context13.next = 610;
            break;
          }

          _context13.next = 609;
          return regeneratorRuntime.awrap(RBot.sendText(from, 'Gagal, kamu tidak bisa mengeluarkan admin grup.'));

        case 609:
          return _context13.abrupt("return", _context13.sent);

        case 610:
          _context13.next = 612;
          return regeneratorRuntime.awrap(RBot.removeParticipant(groupId, mentionedJidList[_i4]));

        case 612:
          _i4++;
          _context13.next = 605;
          break;

        case 615:
          return _context13.abrupt("break", 859);

        case 616:
          if (isGroupMsg) {
            _context13.next = 618;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 618:
          if (isGroupAdmins) {
            _context13.next = 620;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 620:
          if (isBotGroupAdmins) {
            _context13.next = 622;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id));

        case 622:
          if (!(mentionedJidList.length !== 1)) {
            _context13.next = 624;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, hanya bisa mempromote 1 user', id));

        case 624:
          if (!groupAdmins.includes(mentionedJidList[0])) {
            _context13.next = 628;
            break;
          }

          _context13.next = 627;
          return regeneratorRuntime.awrap(RBot.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id));

        case 627:
          return _context13.abrupt("return", _context13.sent);

        case 628:
          if (!(mentionedJidList[0] === botNumber)) {
            _context13.next = 632;
            break;
          }

          _context13.next = 631;
          return regeneratorRuntime.awrap(RBot.reply(from, 'Maaf, format pesan salah.\nTidak dapat mempromote akun bot sendiri', id));

        case 631:
          return _context13.abrupt("return", _context13.sent);

        case 632:
          _context13.next = 634;
          return regeneratorRuntime.awrap(RBot.promoteParticipant(groupId, mentionedJidList[0]));

        case 634:
          _context13.next = 636;
          return regeneratorRuntime.awrap(RBot.sendTextWithMentions(from, "Request diterima, menambahkan @".concat(mentionedJidList[0].replace('@c.us', ''), " sebagai admin.")));

        case 636:
          return _context13.abrupt("break", 859);

        case 637:
          if (isGroupMsg) {
            _context13.next = 639;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 639:
          if (isGroupAdmins) {
            _context13.next = 641;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 641:
          if (isBotGroupAdmins) {
            _context13.next = 643;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id));

        case 643:
          if (!(mentionedJidList.length !== 1)) {
            _context13.next = 645;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, hanya bisa mendemote 1 user', id));

        case 645:
          if (groupAdmins.includes(mentionedJidList[0])) {
            _context13.next = 649;
            break;
          }

          _context13.next = 648;
          return regeneratorRuntime.awrap(RBot.reply(from, 'Maaf, user tersebut belum menjadi admin.', id));

        case 648:
          return _context13.abrupt("return", _context13.sent);

        case 649:
          if (!(mentionedJidList[0] === botNumber)) {
            _context13.next = 653;
            break;
          }

          _context13.next = 652;
          return regeneratorRuntime.awrap(RBot.reply(from, 'Maaf, format pesan salah.\nTidak dapat mendemote akun bot sendiri', id));

        case 652:
          return _context13.abrupt("return", _context13.sent);

        case 653:
          _context13.next = 655;
          return regeneratorRuntime.awrap(RBot.demoteParticipant(groupId, mentionedJidList[0]));

        case 655:
          _context13.next = 657;
          return regeneratorRuntime.awrap(RBot.sendTextWithMentions(from, "Request diterima, menghapus jabatan @".concat(mentionedJidList[0].replace('@c.us', ''), ".")));

        case 657:
          return _context13.abrupt("break", 859);

        case 658:
          if (isGroupMsg) {
            _context13.next = 660;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 660:
          if (isGroupAdmins) {
            _context13.next = 662;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 662:
          RBot.sendText(from, 'Good bye... ( ⇀‸↼‶ )').then(function () {
            return RBot.leaveGroup(groupId);
          });
          return _context13.abrupt("break", 859);

        case 664:
          if (isGroupAdmins) {
            _context13.next = 666;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 666:
          if (quotedMsg) {
            _context13.next = 668;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Maaf, format pesan salah silahkan.\nReply pesan bot dengan caption ".concat(prefix, "del"), id));

        case 668:
          if (quotedMsgObj.fromMe) {
            _context13.next = 670;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Maaf, format pesan salah silahkan.\nReply pesan bot dengan caption ".concat(prefix, "del"), id));

        case 670:
          RBot.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false);
          return _context13.abrupt("break", 859);

        case 672:
          if (isGroupMsg) {
            _context13.next = 674;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 674:
          if (isGroupAdmins) {
            _context13.next = 676;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 676:
          _context13.next = 678;
          return regeneratorRuntime.awrap(RBot.getGroupMembers(groupId));

        case 678:
          groupMem = _context13.sent;
          hehex = '╔══✪〘 Mention All 〙✪══\n';

          for (_i5 = 0; _i5 < groupMem.length; _i5++) {
            hehex += '╠➥';
            hehex += " @".concat(groupMem[_i5].id.replace(/@c.us/g, ''), "\n");
          }

          hehex += '╚═〘 *A R U G A  B O T* 〙';
          _context13.next = 684;
          return regeneratorRuntime.awrap(RBot.sendTextWithMentions(from, hehex));

        case 684:
          return _context13.abrupt("break", 859);

        case 685:
          if (isGroupMsg) {
            _context13.next = 687;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 687:
          RBot.reply(from, "Untuk mengaktifkan simi-simi pada Group Chat\n\nPenggunaan\n".concat(prefix, "simi on --mengaktifkan\n").concat(prefix, "simi off --nonaktifkan\n"), id);
          return _context13.abrupt("break", 859);

        case 689:
          if (isGroupMsg) {
            _context13.next = 691;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 691:
          if (isGroupAdmins) {
            _context13.next = 693;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 693:
          if (!(args.length !== 1)) {
            _context13.next = 695;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mengaktifkan simi-simi pada Group Chat\n\nPenggunaan\n".concat(prefix, "simi on --mengaktifkan\n").concat(prefix, "simi off --nonaktifkan\n"), id));

        case 695:
          if (args[0] == 'on') {
            simi.push(chatId);
            fs.writeFileSync('./settings/simi.json', JSON.stringify(simi));
            RBot.reply(from, 'Mengaktifkan bot simi-simi!', id);
          } else if (args[0] == 'off') {
            inxx = simi.indexOf(chatId);
            simi.splice(inxx, 1);
            fs.writeFileSync('./settings/simi.json', JSON.stringify(simi));
            RBot.reply(from, 'Menonaktifkan bot simi-simi!', id);
          } else {
            RBot.reply(from, "Untuk mengaktifkan simi-simi pada Group Chat\n\nPenggunaan\n".concat(prefix, "simi on --mengaktifkan\n").concat(prefix, "simi off --nonaktifkan\n"), id);
          }

          return _context13.abrupt("break", 859);

        case 697:
          if (isGroupMsg) {
            _context13.next = 699;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 699:
          RBot.reply(from, "Untuk mengaktifkan Fitur Kata Kasar pada Group Chat\n\nApasih kegunaan Fitur Ini? Apabila seseorang mengucapkan kata kasar akan mendapatkan denda\n\nPenggunaan\n".concat(prefix, "kasar on --mengaktifkan\n").concat(prefix, "kasar off --nonaktifkan\n\n").concat(prefix, "reset --reset jumlah denda"), id);
          return _context13.abrupt("break", 859);

        case 701:
          if (isGroupMsg) {
            _context13.next = 703;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 703:
          if (isGroupAdmins) {
            _context13.next = 705;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 705:
          if (!(args.length !== 1)) {
            _context13.next = 707;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mengaktifkan Fitur Kata Kasar pada Group Chat\n\nApasih kegunaan Fitur Ini? Apabila seseorang mengucapkan kata kasar akan mendapatkan denda\n\nPenggunaan\n".concat(prefix, "kasar on --mengaktifkan\n").concat(prefix, "kasar off --nonaktifkan\n\n").concat(prefix, "reset --reset jumlah denda"), id));

        case 707:
          if (args[0] == 'on') {
            ngegas.push(chatId);
            fs.writeFileSync('./settings/ngegas.json', JSON.stringify(ngegas));
            RBot.reply(from, 'Fitur Anti Kasar sudah di Aktifkan', id);
          } else if (args[0] == 'off') {
            nixx = ngegas.indexOf(chatId);
            ngegas.splice(nixx, 1);
            fs.writeFileSync('./settings/ngegas.json', JSON.stringify(ngegas));
            RBot.reply(from, 'Fitur Anti Kasar sudah di non-Aktifkan', id);
          } else {
            RBot.reply(from, "Untuk mengaktifkan Fitur Kata Kasar pada Group Chat\n\napasih itu? fitur apabila seseorang mengucapkan kata kasar akan mendapatkan denda\n\nPenggunaan\n".concat(prefix, "kasar on --mengaktifkan\n").concat(prefix, "kasar off --nonaktifkan\n\n").concat(prefix, "reset --reset jumlah denda"), id);
          }

          return _context13.abrupt("break", 859);

        case 709:
          if (isGroupMsg) {
            _context13.next = 711;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 711:
          if (isGroupAdmins) {
            _context13.next = 713;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 713:
          reset = db.get('group').find({
            id: groupId
          }).assign({
            members: []
          }).write();

          if (!reset) {
            _context13.next = 717;
            break;
          }

          _context13.next = 717;
          return regeneratorRuntime.awrap(RBot.sendText(from, "Klasemen telah direset."));

        case 717:
          return _context13.abrupt("break", 859);

        case 718:
          if (isGroupMsg) {
            _context13.next = 720;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 720:
          isOwner = chat.groupMetadata.owner == pengirim;

          if (isOwner) {
            _context13.next = 723;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai oleh owner grup!', id));

        case 723:
          if (isBotGroupAdmins) {
            _context13.next = 725;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id));

        case 725:
          _context13.next = 727;
          return regeneratorRuntime.awrap(RBot.getGroupMembers(groupId));

        case 727:
          allMem = _context13.sent;
          _i6 = 0;

        case 729:
          if (!(_i6 < allMem.length)) {
            _context13.next = 738;
            break;
          }

          if (!groupAdmins.includes(allMem[_i6].id)) {
            _context13.next = 733;
            break;
          }

          _context13.next = 735;
          break;

        case 733:
          _context13.next = 735;
          return regeneratorRuntime.awrap(RBot.removeParticipant(groupId, allMem[_i6].id));

        case 735:
          _i6++;
          _context13.next = 729;
          break;

        case 738:
          RBot.reply(from, 'Success kick all member', id);
          return _context13.abrupt("break", 859);

        case 740:
          if (isOwnerBot) {
            _context13.next = 742;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, '[✘] Perintah untuk R-Dev', id));

        case 742:
          if (!(args.length == 0)) {
            _context13.next = 744;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Format : ban @tag +1 (GROUP), ban numTarget (Personal)", id));

        case 744:
          if (args[0] == 'add') {
            banned.push(args[1] + '@c.us');
            fs.writeFileSync('./settings/banned.json', JSON.stringify(banned));
            RBot.reply(from, '✅ Success banned target!');
          } else if (args[0] == 'del') {
            xnxx = banned.indexOf(args[1] + '@c.us');
            banned.splice(xnxx, 1);
            fs.writeFileSync('./settings/banned.json', JSON.stringify(banned));
            RBot.reply(from, '✅ Success unbanned target!');
          } else {
            for (_i7 = 0; _i7 < mentionedJidList.length; _i7++) {
              banned.push(mentionedJidList[_i7]);
              fs.writeFileSync('./settings/banned.json', JSON.stringify(banned));
              RBot.reply(from, '✅ Success ban target!', id);
            }
          }

          return _context13.abrupt("break", 859);

        case 746:
          if (isOwnerBot) {
            _context13.next = 748;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, '[✘] Perintah untuk R-Dev!', id));

        case 748:
          if (!(args.length == 0)) {
            _context13.next = 750;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk broadcast ke semua chat ketik:\n".concat(prefix, "bc [isi chat]")));

        case 750:
          msg = body.slice(4);
          _context13.next = 753;
          return regeneratorRuntime.awrap(RBot.getAllChatIds());

        case 753:
          chatz = _context13.sent;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context13.prev = 757;
          _iterator = chatz[Symbol.iterator]();

        case 759:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context13.next = 769;
            break;
          }

          idk = _step.value;
          _context13.next = 763;
          return regeneratorRuntime.awrap(RBot.getChatById(idk));

        case 763:
          cvk = _context13.sent;
          if (!cvk.isReadOnly) RBot.sendText(idk, "[ *R - BOT* ]\n\n".concat(msg));
          if (cvk.isReadOnly) RBot.sendText(idk, "\u3018 *R - DEV \u3019\n\n".concat(msg));

        case 766:
          _iteratorNormalCompletion = true;
          _context13.next = 759;
          break;

        case 769:
          _context13.next = 775;
          break;

        case 771:
          _context13.prev = 771;
          _context13.t6 = _context13["catch"](757);
          _didIteratorError = true;
          _iteratorError = _context13.t6;

        case 775:
          _context13.prev = 775;
          _context13.prev = 776;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 778:
          _context13.prev = 778;

          if (!_didIteratorError) {
            _context13.next = 781;
            break;
          }

          throw _iteratorError;

        case 781:
          return _context13.finish(778);

        case 782:
          return _context13.finish(775);

        case 783:
          RBot.reply(from, '✅ Broadcast Success!', id);
          return _context13.abrupt("break", 859);

        case 785:
          if (isOwnerBot) {
            _context13.next = 787;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, '[✘] Perintah untuk R-Dev', id));

        case 787:
          _context13.next = 789;
          return regeneratorRuntime.awrap(RBot.getAllChatIds());

        case 789:
          allChatz = _context13.sent;
          _context13.next = 792;
          return regeneratorRuntime.awrap(RBot.getAllGroups());

        case 792:
          allGroupz = _context13.sent;
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context13.prev = 796;
          _iterator2 = allGroupz[Symbol.iterator]();

        case 798:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context13.next = 809;
            break;
          }

          gclist = _step2.value;
          _context13.next = 802;
          return regeneratorRuntime.awrap(RBot.sendText(gclist.contact.id, "Maaf bot sedang pembersihan, total chat aktif : ".concat(allChatz.length)));

        case 802:
          _context13.next = 804;
          return regeneratorRuntime.awrap(RBot.leaveGroup(gclist.contact.id));

        case 804:
          _context13.next = 806;
          return regeneratorRuntime.awrap(RBot.deleteChat(gclist.contact.id));

        case 806:
          _iteratorNormalCompletion2 = true;
          _context13.next = 798;
          break;

        case 809:
          _context13.next = 815;
          break;

        case 811:
          _context13.prev = 811;
          _context13.t7 = _context13["catch"](796);
          _didIteratorError2 = true;
          _iteratorError2 = _context13.t7;

        case 815:
          _context13.prev = 815;
          _context13.prev = 816;

          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }

        case 818:
          _context13.prev = 818;

          if (!_didIteratorError2) {
            _context13.next = 821;
            break;
          }

          throw _iteratorError2;

        case 821:
          return _context13.finish(818);

        case 822:
          return _context13.finish(815);

        case 823:
          RBot.reply(from, '✅ Leave all group, Success!', id);
          return _context13.abrupt("break", 859);

        case 825:
          if (isOwnerBot) {
            _context13.next = 827;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, '[✘] Perintah untuk R-Dev', id));

        case 827:
          _context13.next = 829;
          return regeneratorRuntime.awrap(RBot.getAllChats());

        case 829:
          allChatx = _context13.sent;
          _iteratorNormalCompletion3 = true;
          _didIteratorError3 = false;
          _iteratorError3 = undefined;
          _context13.prev = 833;
          _iterator3 = allChatx[Symbol.iterator]();

        case 835:
          if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
            _context13.next = 842;
            break;
          }

          dchat = _step3.value;
          _context13.next = 839;
          return regeneratorRuntime.awrap(RBot.deleteChat(dchat.id));

        case 839:
          _iteratorNormalCompletion3 = true;
          _context13.next = 835;
          break;

        case 842:
          _context13.next = 848;
          break;

        case 844:
          _context13.prev = 844;
          _context13.t8 = _context13["catch"](833);
          _didIteratorError3 = true;
          _iteratorError3 = _context13.t8;

        case 848:
          _context13.prev = 848;
          _context13.prev = 849;

          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }

        case 851:
          _context13.prev = 851;

          if (!_didIteratorError3) {
            _context13.next = 854;
            break;
          }

          throw _iteratorError3;

        case 854:
          return _context13.finish(851);

        case 855:
          return _context13.finish(848);

        case 856:
          RBot.reply(from, '✅ Clear all chat, Success!', id);
          return _context13.abrupt("break", 859);

        case 858:
          return _context13.abrupt("break", 859);

        case 859:
          // Simi-simi function
          if (!isCmd && isGroupMsg && isSimi && message.type === 'chat') {
            axios.get("https://arugaz.herokuapp.com/api/simisimi?kata=".concat(encodeURIComponent(message.body), "&apikey=").concat(apiSimi)).then(function (res) {
              if (res.data.status == 403) return RBot.sendText(ownerNumber, "".concat(res.data.result, "\n\n").concat(res.data.pesan));
              RBot.reply(from, "Simi berkata: ".concat(res.data.result), id);
            })["catch"](function (err) {
              RBot.reply(from, "".concat(err), id);
            });
          } // Kata kasar function


          if (!(!isCmd && isGroupMsg && isNgegas)) {
            _context13.next = 896;
            break;
          }

          find = db.get('group').find({
            id: groupId
          }).value();

          if (!(find && find.id === groupId)) {
            _context13.next = 889;
            break;
          }

          cekuser = db.get('group').filter({
            id: groupId
          }).map('members').value()[0];
          isIn = inArray(pengirim, cekuser);

          if (!(cekuser && isIn !== false)) {
            _context13.next = 873;
            break;
          }

          if (!isKasar) {
            _context13.next = 871;
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
            _context13.next = 871;
            break;
          }

          _context13.next = 871;
          return regeneratorRuntime.awrap(RBot.reply(from, "Jangan badword bodoh\nDenda +5.000\nTotal : Rp" + formatin(denda.denda), id));

        case 871:
          _context13.next = 887;
          break;

        case 873:
          cekMember = db.get('group').filter({
            id: groupId
          }).map('members').value()[0];

          if (!(cekMember.length === 0)) {
            _context13.next = 878;
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

          _context13.next = 887;
          break;

        case 878:
          _cekuser = db.get('group').filter({
            id: groupId
          }).map('members').value()[0];

          if (!isKasar) {
            _context13.next = 885;
            break;
          }

          _cekuser.push({
            id: pengirim,
            denda: 5000
          });

          _context13.next = 883;
          return regeneratorRuntime.awrap(RBot.reply(from, "Jangan badword bodoh\nDenda +5.000", id));

        case 883:
          _context13.next = 886;
          break;

        case 885:
          _cekuser.push({
            id: pengirim,
            denda: 0
          });

        case 886:
          db.get('group').find({
            id: groupId
          }).set('members', _cekuser).write();

        case 887:
          _context13.next = 896;
          break;

        case 889:
          if (!isKasar) {
            _context13.next = 895;
            break;
          }

          db.get('group').push({
            id: groupId,
            members: [{
              id: pengirim,
              denda: 5000
            }]
          }).write();
          _context13.next = 893;
          return regeneratorRuntime.awrap(RBot.reply(from, "Jangan badword bodoh\nDenda +5.000\nTotal : Rp5.000", id));

        case 893:
          _context13.next = 896;
          break;

        case 895:
          db.get('group').push({
            id: groupId,
            members: [{
              id: pengirim,
              denda: 0
            }]
          }).write();

        case 896:
          _context13.next = 901;
          break;

        case 898:
          _context13.prev = 898;
          _context13.t9 = _context13["catch"](0);
          console.log(color('[EROR]', 'red'), _context13.t9);

        case 901:
        case "end":
          return _context13.stop();
      }
    }
  }, null, null, [[0, 898], [130, 146], [230, 237], [581, 586], [757, 771, 775, 783], [776,, 778, 782], [796, 811, 815, 823], [816,, 818, 822], [833, 844, 848, 856], [849,, 851, 855]]);
};
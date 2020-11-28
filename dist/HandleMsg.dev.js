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

var style = require('./custom/console');

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
          formatCommand = "".concat(command, " [").concat(args.length, "]"); //! Group Admin Request Activation Bot

          if (!(command == 'reqbot' && isGroupAdmins)) {
            _context13.next = 49;
            break;
          }

          RBot.reply(from, "Permintaan akan di Acc 1 x 24 jam.", id);
          _context13.next = 48;
          return regeneratorRuntime.awrap(RBot.sendText(ownerNumber, groupId));

        case 48:
          return _context13.abrupt("return", style.bot("REQ : ".concat(groupId)));

        case 49:
          // ! Owner Adding Group
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
            _context13.next = 53;
            break;
          }

          return _context13.abrupt("return", style.nonRegist(pushname, groupName, groupId));

        case 53:
          if (!(isCmd && msgFilter.isFiltered(from) && !isGroupMsg)) {
            _context13.next = 55;
            break;
          }

          return _context13.abrupt("return", style.spamChat(formatTime, formatCommand, 'from', pushname));

        case 55:
          if (!(isCmd && msgFilter.isFiltered(from) && isGroupMsg)) {
            _context13.next = 57;
            break;
          }

          return _context13.abrupt("return", style.spamGroup(formatTime, formatCommand, 'from', pushname, 'in', groupName));

        case 57:
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
            _context13.next = 63;
            break;
          }

          return _context13.abrupt("return", style.banPerson(formatTime, formatCommand, 'from', pushname));

        case 63:
          _context13.t2 = command;
          _context13.next = _context13.t2 === 'speed' ? 66 : _context13.t2 === 'ping' ? 66 : _context13.t2 === 'tes' ? 66 : _context13.t2 === 'tnc' ? 69 : _context13.t2 === 'peraturan' ? 69 : _context13.t2 === 'aturan' ? 69 : _context13.t2 === 'menu' ? 72 : _context13.t2 === 'help' ? 72 : _context13.t2 === 'menuadmin' ? 75 : _context13.t2 === 'donate' ? 82 : _context13.t2 === 'donasi' ? 82 : _context13.t2 === 'botowner' ? 85 : _context13.t2 === 'ownerbot' ? 85 : _context13.t2 === 'join' ? 88 : _context13.t2 === 'botstat' ? 112 : _context13.t2 === 'sticker' ? 123 : _context13.t2 === 'stiker' ? 123 : _context13.t2 === 'stickergif' ? 168 : _context13.t2 === 'stikergif' ? 168 : _context13.t2 === 'stikergiphy' ? 186 : _context13.t2 === 'stickergiphy' ? 186 : _context13.t2 === 'meme' ? 210 : _context13.t2 === 'quotemaker' ? 229 : _context13.t2 === 'nulis' ? 249 : _context13.t2 === 'listsurah' ? 258 : _context13.t2 === 'infosurah' ? 260 : _context13.t2 === 'surah' ? 271 : _context13.t2 === 'tafsir' ? 292 : _context13.t2 === 'alaudio' ? 311 : _context13.t2 === 'jsolat' ? 352 : _context13.t2 === 'daerah' ? 361 : _context13.t2 === 'instagram' ? 367 : _context13.t2 === 'ytmp3' ? 375 : _context13.t2 === 'ytmp4' ? 379 : _context13.t2 === 'artinama' ? 383 : _context13.t2 === 'cekjodoh' ? 387 : _context13.t2 === 'fakta' ? 391 : _context13.t2 === 'katabijak' ? 393 : _context13.t2 === 'pantun' ? 395 : _context13.t2 === 'quote' ? 397 : _context13.t2 === 'anime' ? 403 : _context13.t2 === 'kpop' ? 407 : _context13.t2 === 'memes' ? 411 : _context13.t2 === 'images' ? 416 : _context13.t2 === 'sreddit' ? 425 : _context13.t2 === 'resep' ? 434 : _context13.t2 === 'nekopoi' ? 443 : _context13.t2 === 'stalkig' ? 445 : _context13.t2 === 'wiki' ? 456 : _context13.t2 === 'cuaca' ? 465 : _context13.t2 === 'lirik' ? 474 : _context13.t2 === 'chord' ? 478 : _context13.t2 === 'ss' ? 487 : _context13.t2 === 'play' ? 495 : _context13.t2 === 'whatanime' ? 499 : _context13.t2 === 'resi' ? 517 : _context13.t2 === 'tts' ? 525 : _context13.t2 === 'translate' ? 533 : _context13.t2 === 'covidindo' ? 540 : _context13.t2 === 'ceklokasi' ? 542 : _context13.t2 === 'shortlink' ? 554 : _context13.t2 === 'bapakfont' ? 564 : _context13.t2 === 'klasmen' ? 568 : _context13.t2 === 'add' ? 578 : _context13.t2 === 'kick' ? 595 : _context13.t2 === 'promote' ? 621 : _context13.t2 === 'demote' ? 642 : _context13.t2 === 'bye' ? 663 : _context13.t2 === 'del' ? 669 : _context13.t2 === 'tagall' ? 677 : _context13.t2 === 'everyone' ? 677 : _context13.t2 === 'simisimi' ? 690 : _context13.t2 === 'simi' ? 694 : _context13.t2 === 'katakasar' ? 702 : _context13.t2 === 'kasar' ? 706 : _context13.t2 === 'reset' ? 714 : _context13.t2 === 'kickall' ? 723 : _context13.t2 === 'ban' ? 745 : _context13.t2 === 'bc' ? 751 : _context13.t2 === 'leaveall' ? 790 : _context13.t2 === 'clearall' ? 830 : 863;
          break;

        case 66:
          _context13.next = 68;
          return regeneratorRuntime.awrap(RBot.sendText(from, "Respon ".concat(botName, ": ").concat(processTime(t, moment()), " Second")));

        case 68:
          return _context13.abrupt("break", 864);

        case 69:
          _context13.next = 71;
          return regeneratorRuntime.awrap(RBot.sendText(from, menuId.textTnC()));

        case 71:
          return _context13.abrupt("break", 864);

        case 72:
          _context13.next = 74;
          return regeneratorRuntime.awrap(RBot.sendText(from, menuId.textMenu(pushname)).then(function () {
            return isGroupMsg && isGroupAdmins ? RBot.sendText(from, "Menu Admin Grup: *".concat(prefix, "menuadmin*")) : null;
          }));

        case 74:
          return _context13.abrupt("break", 864);

        case 75:
          if (isGroupMsg) {
            _context13.next = 77;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, '✘ Perintah ini hanya dapat digunakan didalam grup!', id));

        case 77:
          if (isGroupAdmins) {
            _context13.next = 79;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, '✘ Perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 79:
          _context13.next = 81;
          return regeneratorRuntime.awrap(RBot.sendText(from, menuId.textAdmin()));

        case 81:
          return _context13.abrupt("break", 864);

        case 82:
          _context13.next = 84;
          return regeneratorRuntime.awrap(RBot.sendText(from, menuId.textDonasi()));

        case 84:
          return _context13.abrupt("break", 864);

        case 85:
          _context13.next = 87;
          return regeneratorRuntime.awrap(RBot.sendContact(from, ownerNumber));

        case 87:
          return _context13.abrupt("break", 864);

        case 88:
          if (!(args.length == 0)) {
            _context13.next = 90;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Jika ingin memasukkan ".concat(botName, " kedalam group, silahkan invite atau dengan\nketik ").concat(prefix, "join [link group]"), id));

        case 90:
          linkgrup = body.slice(6);
          islink = linkgrup.match(/(https:\/\/chat.whatsapp.com)/gi);
          _context13.next = 94;
          return regeneratorRuntime.awrap(RBot.inviteInfo(linkgrup));

        case 94:
          chekgrup = _context13.sent;

          if (islink) {
            _context13.next = 97;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, '✘ Format link salah', id));

        case 97:
          if (!isOwnerBot) {
            _context13.next = 102;
            break;
          }

          _context13.next = 100;
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

        case 100:
          _context13.next = 111;
          break;

        case 102:
          _context13.next = 104;
          return regeneratorRuntime.awrap(RBot.getAllGroups());

        case 104:
          cgrup = _context13.sent;

          if (!(cgrup.length > groupLimit)) {
            _context13.next = 107;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Saat ini ".concat(botName, " sudah melebihi kapasitas untuk masuk kedalam group. \nGroup Now : ").concat(groupLimit), id));

        case 107:
          if (!(cgrup.size < memberLimit)) {
            _context13.next = 109;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Minimal anggota group harus lebih dari ".concat(memberLimit, " anggota"), id));

        case 109:
          _context13.next = 111;
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

        case 111:
          return _context13.abrupt("break", 864);

        case 112:
          _context13.next = 114;
          return regeneratorRuntime.awrap(RBot.getAmountOfLoadedMessages());

        case 114:
          loadedMsg = _context13.sent;
          _context13.next = 117;
          return regeneratorRuntime.awrap(RBot.getAllChatIds());

        case 117:
          chatIds = _context13.sent;
          _context13.next = 120;
          return regeneratorRuntime.awrap(RBot.getAllGroups());

        case 120:
          groups = _context13.sent;
          RBot.sendText(from, "Status :\n- *".concat(loadedMsg, "* Loaded Messages\n- *").concat(groups.length, "* Group Chats\n- *").concat(chatIds.length - groups.length, "* Personal Chats\n- *").concat(chatIds.length, "* Total Chats"));
          return _context13.abrupt("break", 864);

        case 123:
          if (!((isMedia || isQuotedImage) && args.length === 0)) {
            _context13.next = 133;
            break;
          }

          encryptMedia = isQuotedImage ? quotedMsg : message;
          _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype;
          _context13.next = 128;
          return regeneratorRuntime.awrap(decryptMedia(encryptMedia, uaOverride));

        case 128:
          _mediaData = _context13.sent;
          _imageBase = "data:".concat(_mimetype, ";base64,").concat(_mediaData.toString('base64'));
          RBot.sendImageAsSticker(from, _imageBase).then(function () {
            RBot.reply(from, '↳ Sukses dibuat', id);
            style.msg("Sticker Processed for ".concat(processTime(t, moment()), " Second"));
          });
          _context13.next = 167;
          break;

        case 133:
          if (!(args[0] === 'nobg')) {
            _context13.next = 158;
            break;
          }

          if (!(isMedia || isQuotedImage)) {
            _context13.next = 156;
            break;
          }

          _context13.prev = 135;
          _context13.next = 138;
          return regeneratorRuntime.awrap(decryptMedia(message, uaOverride));

        case 138:
          mediaData = _context13.sent;
          imageBase64 = "data:".concat(mimetype, ";base64,").concat(mediaData.toString('base64'));
          base64img = imageBase64;
          outFile = './media/noBg.png'; // kamu dapat mengambil api key dari website remove.bg dan ubahnya difolder settings/api.json
          //! Take API KEY at remove.bg

          _context13.next = 144;
          return regeneratorRuntime.awrap(removeBackgroundFromImageBase64({
            base64img: base64img,
            apiKey: apiNoBg,
            size: 'auto',
            type: 'auto',
            outFile: outFile
          }));

        case 144:
          result = _context13.sent;
          _context13.next = 147;
          return regeneratorRuntime.awrap(fs.writeFile(outFile, result.base64img));

        case 147:
          _context13.next = 149;
          return regeneratorRuntime.awrap(RBot.sendImageAsSticker(from, "data:".concat(mimetype, ";base64,").concat(result.base64img)));

        case 149:
          _context13.next = 156;
          break;

        case 151:
          _context13.prev = 151;
          _context13.t3 = _context13["catch"](135);
          console.log(_context13.t3);
          _context13.next = 156;
          return regeneratorRuntime.awrap(RBot.reply(from, "Penggunaan fitur ".concat(prefix, "nobg hari ini sudah habis"), id));

        case 156:
          _context13.next = 167;
          break;

        case 158:
          if (!(args.length === 1)) {
            _context13.next = 165;
            break;
          }

          if (isUrl(url)) {
            _context13.next = 162;
            break;
          }

          _context13.next = 162;
          return regeneratorRuntime.awrap(RBot.reply(from, '✘ link tidak valid', id));

        case 162:
          RBot.sendStickerfromUrl(from, url).then(function (r) {
            return !r && r !== undefined ? RBot.sendText(from, '✘ Link tersebut tidak memuat gambar.') : RBot.reply(from, '↳ Sukses dibuat');
          }).then(function () {
            return style.msg("\tSticker Processed for ".concat(processTime(t, moment()), " Second"));
          });
          _context13.next = 167;
          break;

        case 165:
          _context13.next = 167;
          return regeneratorRuntime.awrap(RBot.reply(from, "Untuk membuat sticker kamu harus mengirimkan gambar dengan caption ".concat(prefix, "sticker"), id));

        case 167:
          return _context13.abrupt("break", 864);

        case 168:
          if (!(isMedia || isQuotedVideo)) {
            _context13.next = 184;
            break;
          }

          if (!(mimetype === 'video/mp4' && message.duration < 10 || mimetype === 'image/gif' && message.duration < 10)) {
            _context13.next = 181;
            break;
          }

          _context13.next = 172;
          return regeneratorRuntime.awrap(decryptMedia(message, uaOverride));

        case 172:
          mediaData = _context13.sent;
          RBot.reply(from, '⏳ Sticker di proses', id);
          filename = "./media/stickergif.".concat(mimetype.split('/')[1]);
          _context13.next = 177;
          return regeneratorRuntime.awrap(fs.writeFileSync(filename, mediaData));

        case 177:
          _context13.next = 179;
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

        case 179:
          _context13.next = 182;
          break;

        case 181:
          RBot.reply(from, "[\u2718] Maksimal gif 10 detik!", id);

        case 182:
          _context13.next = 185;
          break;

        case 184:
          RBot.reply(from, "[\u2718] Kirim gif dengan caption *".concat(prefix, "stickergif*"), id);

        case 185:
          return _context13.abrupt("break", 864);

        case 186:
          if (!(args.length !== 1)) {
            _context13.next = 188;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "[\u2718] Format pesan salah.\nKetik".concat(prefix, "stickergiphy <link_giphy>"), id));

        case 188:
          isGiphy = url.match(new RegExp(/https?:\/\/(www\.)?giphy.com/, 'gi'));
          isMediaGiphy = url.match(new RegExp(/https?:\/\/media.giphy.com\/media/, 'gi'));

          if (!isGiphy) {
            _context13.next = 199;
            break;
          }

          getGiphyCode = url.match(new RegExp(/(\/|\-)(?:.(?!(\/|\-)))+$/, 'gi'));

          if (getGiphyCode) {
            _context13.next = 194;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, '[✘] Gagal mengambil kode giphy', id));

        case 194:
          giphyCode = getGiphyCode[0].replace(/[-\/]/gi, '');
          smallGifUrl = 'https://media.giphy.com/media/' + giphyCode + '/giphy-downsized.gif';
          RBot.sendGiphyAsSticker(from, smallGifUrl).then(function () {
            RBot.reply(from, '↳ Sukses dibuat');
            style.msg("\tSticker Processed for ".concat(processTime(t, moment()), " Second"));
          })["catch"](function (err) {
            return console.log(err);
          });
          _context13.next = 209;
          break;

        case 199:
          if (!isMediaGiphy) {
            _context13.next = 207;
            break;
          }

          gifUrl = url.match(new RegExp(/(giphy|source).(gif|mp4)/, 'gi'));

          if (gifUrl) {
            _context13.next = 203;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, '[✘] Gagal mengambil kode giphy', id));

        case 203:
          _smallGifUrl = url.replace(gifUrl[0], 'giphy-downsized.gif');
          RBot.sendGiphyAsSticker(from, _smallGifUrl).then(function () {
            RBot.reply(from, '↳ Sukses dibuat');
            style.msg("\tSticker Processed for ".concat(processTime(t, moment()), " Second"));
          })["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          });
          _context13.next = 209;
          break;

        case 207:
          _context13.next = 209;
          return regeneratorRuntime.awrap(RBot.reply(from, '[✘] Sticker harus dari link Giphy ', id));

        case 209:
          return _context13.abrupt("break", 864);

        case 210:
          if (!((isMedia || isQuotedImage) && args.length >= 2)) {
            _context13.next = 226;
            break;
          }

          top = arg.split('|')[0];
          bottom = arg.split('|')[1];
          _encryptMedia = isQuotedImage ? quotedMsg : message;
          _context13.next = 216;
          return regeneratorRuntime.awrap(decryptMedia(_encryptMedia, uaOverride));

        case 216:
          _mediaData2 = _context13.sent;
          _context13.next = 219;
          return regeneratorRuntime.awrap(uploadImages(_mediaData2, false));

        case 219:
          getUrl = _context13.sent;
          _context13.next = 222;
          return regeneratorRuntime.awrap(meme.custom(getUrl, top, bottom));

        case 222:
          ImageBase64 = _context13.sent;
          RBot.sendFile(from, ImageBase64, 'image.png', '', null, true).then(function () {
            RBot.reply(from, '↳ Sukses dibuat', id);
          })["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"));
          });
          _context13.next = 228;
          break;

        case 226:
          _context13.next = 228;
          return regeneratorRuntime.awrap(RBot.reply(from, "Cara penggunaan, kirim gambar dengan caption ".concat(prefix, "meme <teks_atas> | <teks_bawah>\ncontoh: ").concat(prefix, "meme teks atas | teks bawah"), id));

        case 228:
          return _context13.abrupt("break", 864);

        case 229:
          qmaker = body.trim().split('|');

          if (!(qmaker.length >= 3)) {
            _context13.next = 247;
            break;
          }

          quotes = qmaker[1];
          author = qmaker[2]; //! Turn Off Choosing Background

          theme = "random";
          RBot.reply(from, '[⏳] Sedang di proses', id);
          _context13.prev = 235;
          _context13.next = 238;
          return regeneratorRuntime.awrap(images.quote(quotes, author, theme));

        case 238:
          hasilqmaker = _context13.sent;
          RBot.sendFileFromUrl(from, "".concat(hasilqmaker), '', '↳ Sukses dibuat', id);
          _context13.next = 245;
          break;

        case 242:
          _context13.prev = 242;
          _context13.t4 = _context13["catch"](235);
          RBot.reply('[✘] Format pesan salah', id);

        case 245:
          _context13.next = 248;
          break;

        case 247:
          RBot.reply(from, "Ketik ".concat(prefix, "quotemaker |<isi_quote>|<author>|\n\ncontoh: ").concat(prefix, "quotemaker |aku sayang kamu|-R-Bot|"));

        case 248:
          return _context13.abrupt("break", 864);

        case 249:
          if (!(args.length == 0)) {
            _context13.next = 251;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Membuat bot menulis teks yang dikirim menjadi gambar\nPemakaian: ".concat(prefix, "nulis [teks]\n\ncontoh: ").concat(prefix, "nulis i love you 3000"), id));

        case 251:
          nulisq = body.slice(7);
          _context13.next = 254;
          return regeneratorRuntime.awrap(rugaapi.tulis(nulisq));

        case 254:
          nulisp = _context13.sent;
          _context13.next = 257;
          return regeneratorRuntime.awrap(RBot.sendImage(from, "".concat(nulisp), '', 'Nih...', id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 257:
          return _context13.abrupt("break", 864);

        case 258:
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

          return _context13.abrupt("break", 864);

        case 260:
          if (!(args.length == 0)) {
            _context13.next = 262;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "*_".concat(prefix, "infosurah <nama surah>_*\nMenampilkan informasi lengkap mengenai surah tertentu. Contoh : ").concat(prefix, "infosurah al-baqarah"), message.id));

        case 262:
          _context13.next = 264;
          return regeneratorRuntime.awrap(axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json'));

        case 264:
          responseh = _context13.sent;
          data = responseh.data.data;
          idx = data.findIndex(function (post, index) {
            if (post.name.transliteration.id.toLowerCase() == args[0].toLowerCase() || post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()) return true;
          });
          pesan = "";
          pesan = pesan + "Nama : " + data[idx].name.transliteration.id + "\n" + "Asma : " + data[idx].name["short"] + "\n" + "Arti : " + data[idx].name.translation.id + "\n" + "Jumlah ayat : " + data[idx].numberOfVerses + "\n" + "Nomor surah : " + data[idx].number + "\n" + "Jenis : " + data[idx].revelation.id + "\n" + "Keterangan : " + data[idx].tafsir.id;
          RBot.reply(from, pesan, message.id);
          return _context13.abrupt("break", 864);

        case 271:
          if (!(args.length == 0)) {
            _context13.next = 273;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "*_".concat(prefix, "surah <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ").concat(prefix, "surah al-baqarah 1\n\n*_").concat(prefix, "surah <nama surah> <ayat> en/id_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Inggris / Indonesia. Contoh penggunaan : ").concat(prefix, "surah al-baqarah 1 id"), message.id));

        case 273:
          _context13.next = 275;
          return regeneratorRuntime.awrap(axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json'));

        case 275:
          responseh = _context13.sent;
          data = responseh.data.data;
          idx = data.findIndex(function (post, index) {
            if (post.name.transliteration.id.toLowerCase() == args[0].toLowerCase() || post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()) return true;
          });
          nmr = data[idx].number;

          if (isNaN(nmr)) {
            _context13.next = 291;
            break;
          }

          _context13.next = 282;
          return regeneratorRuntime.awrap(axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + args[1]));

        case 282:
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

        case 291:
          return _context13.abrupt("break", 864);

        case 292:
          if (!(args.length == 0)) {
            _context13.next = 294;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "*_".concat(prefix, "tafsir <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahan dan tafsirnya dalam bahasa Indonesia. Contoh penggunaan : ").concat(prefix, "tafsir al-baqarah 1"), message.id));

        case 294:
          _context13.next = 296;
          return regeneratorRuntime.awrap(axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json'));

        case 296:
          responsh = _context13.sent;
          data = responsh.data.data;
          idx = data.findIndex(function (post, index) {
            if (post.name.transliteration.id.toLowerCase() == args[0].toLowerCase() || post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()) return true;
          });
          nmr = data[idx].number;

          if (isNaN(nmr)) {
            _context13.next = 310;
            break;
          }

          _context13.next = 303;
          return regeneratorRuntime.awrap(axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + args[1]));

        case 303:
          responsih = _context13.sent;
          data = responsih.data.data;
          pesan = "";
          pesan = pesan + "Tafsir Q.S. " + data.surah.name.transliteration.id + ":" + args[1] + "\n\n";
          pesan = pesan + data.text.arab + "\n\n";
          pesan = pesan + "_" + data.translation.id + "_" + "\n\n" + data.tafsir.id["long"];
          RBot.reply(from, pesan, message.id);

        case 310:
          return _context13.abrupt("break", 864);

        case 311:
          if (!(args.length == 0)) {
            _context13.next = 313;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "*_".concat(prefix, "ALaudio <nama surah>_*\nMenampilkan tautan dari audio surah tertentu. Contoh penggunaan : ").concat(prefix, "ALaudio al-fatihah\n\n*_").concat(prefix, "ALaudio <nama surah> <ayat>_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ").concat(prefix, "ALaudio al-fatihah 1\n\n*_").concat(prefix, "ALaudio <nama surah> <ayat> en_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Inggris. Contoh penggunaan : ").concat(prefix, "ALaudio al-fatihah 1 en"), message.id));

        case 313:
          ayat = "ayat";
          bhs = "";
          _context13.next = 317;
          return regeneratorRuntime.awrap(axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json'));

        case 317:
          responseh = _context13.sent;
          surah = responseh.data;
          idx = surah.data.findIndex(function (post, index) {
            if (post.name.transliteration.id.toLowerCase() == args[0].toLowerCase() || post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()) return true;
          });
          nmr = surah.data[idx].number;

          if (isNaN(nmr)) {
            _context13.next = 351;
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
            _context13.next = 337;
            break;
          }

          _context13.next = 328;
          return regeneratorRuntime.awrap(axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah/' + nmr + '.json'));

        case 328:
          responsih2 = _context13.sent;
          _responsih2$data = responsih2.data, name = _responsih2$data.name, name_translations = _responsih2$data.name_translations, number_of_ayah = _responsih2$data.number_of_ayah, number_of_surah = _responsih2$data.number_of_surah, recitations = _responsih2$data.recitations;
          pesan = pesan + "Audio Quran Surah ke-" + number_of_surah + " " + name + " (" + name_translations.ar + ") " + "dengan jumlah " + number_of_ayah + " ayat\n";
          pesan = pesan + "Dilantunkan oleh " + recitations[0].name + " : " + recitations[0].audio_url + "\n";
          pesan = pesan + "Dilantunkan oleh " + recitations[1].name + " : " + recitations[1].audio_url + "\n";
          pesan = pesan + "Dilantunkan oleh " + recitations[2].name + " : " + recitations[2].audio_url + "\n";
          RBot.reply(from, pesan, message.id);
          _context13.next = 351;
          break;

        case 337:
          _context13.next = 339;
          return regeneratorRuntime.awrap(axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + ayat));

        case 339:
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
          _context13.next = 349;
          return regeneratorRuntime.awrap(RBot.sendFileFromUrl(from, data.audio.secondary[0]));

        case 349:
          _context13.next = 351;
          return regeneratorRuntime.awrap(RBot.reply(from, pesan, message.id));

        case 351:
          return _context13.abrupt("break", 864);

        case 352:
          if (!(args.length == 0)) {
            _context13.next = 354;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Melihat jadwal solat di setiap daerah \nketik: ".concat(prefix, "jsolat [namadaerah]\n\nuntuk list daerah yang ada\nketik: ").concat(prefix, "daerah"), id));

        case 354:
          solatx = body.slice(8);
          _context13.next = 357;
          return regeneratorRuntime.awrap(rugaapi.jadwaldaerah(solatx));

        case 357:
          solatj = _context13.sent;
          _context13.next = 360;
          return regeneratorRuntime.awrap(RBot.reply(from, solatj, id)["catch"](function () {
            RBot.reply(from, "Masukkan nama daerah. contoh ".concat(prefix, "jsolat Kudus"), id);
          }));

        case 360:
          return _context13.abrupt("break", 864);

        case 361:
          _context13.next = 363;
          return regeneratorRuntime.awrap(rugaapi.daerah());

        case 363:
          daerahq = _context13.sent;
          _context13.next = 366;
          return regeneratorRuntime.awrap(RBot.reply(from, daerahq, id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 366:
          return _context13.abrupt("break", 864);

        case 367:
          if (!(args.length == 0)) {
            _context13.next = 369;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mendownload gambar atau video dari instagram\nketik: ".concat(prefix, "instagram [link_ig]"), id));

        case 369:
          _context13.next = 371;
          return regeneratorRuntime.awrap(rugaapi.insta(args[0]));

        case 371:
          instag = _context13.sent;
          _context13.next = 374;
          return regeneratorRuntime.awrap(RBot.sendFileFromUrl(from, instag, '', '', id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 374:
          return _context13.abrupt("break", 864);

        case 375:
          if (!(args.length == 0)) {
            _context13.next = 377;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mendownload lagu dari youtube\nketik: ".concat(prefix, "ytmp3 [link_yt]"), id));

        case 377:
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
          return _context13.abrupt("break", 864);

        case 379:
          if (!(args.length == 0)) {
            _context13.next = 381;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mendownload video dari youtube\nketik: ".concat(prefix, "ytmp3 [link_yt]")));

        case 381:
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
          return _context13.abrupt("break", 864);

        case 383:
          if (!(args.length == 0)) {
            _context13.next = 385;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mengetahui arti nama seseorang\nketik ".concat(prefix, "artinama Namanya"), id));

        case 385:
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
          return _context13.abrupt("break", 864);

        case 387:
          if (!(args.length !== 2)) {
            _context13.next = 389;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mengecek jodoh melalui nama\nketik: ".concat(prefix, "cekjodoh nama pasangan\n\ncontoh: ").concat(prefix, "cekjodoh aku kamu\n\nhanya bisa pakai nama panggilan (satu kata)")));

        case 389:
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
          return _context13.abrupt("break", 864);

        case 391:
          fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt').then(function (res) {
            return res.text();
          }).then(function (body) {
            var splitnix = body.split('\n');
            var randomnix = splitnix[Math.floor(Math.random() * splitnix.length)];
            RBot.reply(from, randomnix, id);
          })["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          });
          return _context13.abrupt("break", 864);

        case 393:
          fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/katabijax.txt').then(function (res) {
            return res.text();
          }).then(function (body) {
            var splitbijak = body.split('\n');
            var randombijak = splitbijak[Math.floor(Math.random() * splitbijak.length)];
            RBot.reply(from, randombijak, id);
          })["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          });
          return _context13.abrupt("break", 864);

        case 395:
          fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/pantun.txt').then(function (res) {
            return res.text();
          }).then(function (body) {
            var splitpantun = body.split('\n');
            var randompantun = splitpantun[Math.floor(Math.random() * splitpantun.length)];
            RBot.reply(from, randompantun.replace(/aruga-line/g, "\n"), id);
          })["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          });
          return _context13.abrupt("break", 864);

        case 397:
          _context13.next = 399;
          return regeneratorRuntime.awrap(rugaapi.quote());

        case 399:
          quotex = _context13.sent;
          _context13.next = 402;
          return regeneratorRuntime.awrap(RBot.reply(from, quotex, id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 402:
          return _context13.abrupt("break", 864);

        case 403:
          if (!(args.length == 0)) {
            _context13.next = 405;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk menggunakan ".concat(prefix, "anime\nSilahkan ketik: ").concat(prefix, "anime [query]\nContoh: ").concat(prefix, "anime random\n\nquery yang tersedia:\nrandom, waifu, husbu, neko"), id));

        case 405:
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

          return _context13.abrupt("break", 864);

        case 407:
          if (!(args.length == 0)) {
            _context13.next = 409;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk menggunakan ".concat(prefix, "kpop\nSilahkan ketik: ").concat(prefix, "kpop [query]\nContoh: ").concat(prefix, "kpop bts\n\nquery yang tersedia:\nblackpink, exo, bts"), id));

        case 409:
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

          return _context13.abrupt("break", 864);

        case 411:
          _context13.next = 413;
          return regeneratorRuntime.awrap(meme.random());

        case 413:
          randmeme = _context13.sent;
          RBot.sendFileFromUrl(from, randmeme, '', '', id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          });
          return _context13.abrupt("break", 864);

        case 416:
          if (!(args.length == 0)) {
            _context13.next = 418;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mencari gambar di pinterest\nketik: ".concat(prefix, "images [search]\ncontoh: ").concat(prefix, "images naruto"), id));

        case 418:
          cariwall = body.slice(8);
          _context13.next = 421;
          return regeneratorRuntime.awrap(images.fdci(cariwall));

        case 421:
          hasilwall = _context13.sent;
          _context13.next = 424;
          return regeneratorRuntime.awrap(RBot.sendFileFromUrl(from, hasilwall, '', '', id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 424:
          return _context13.abrupt("break", 864);

        case 425:
          if (!(args.length == 0)) {
            _context13.next = 427;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mencari gambar di sub reddit\nketik: ".concat(prefix, "sreddit [search]\ncontoh: ").concat(prefix, "sreddit naruto"), id));

        case 427:
          carireddit = body.slice(9);
          _context13.next = 430;
          return regeneratorRuntime.awrap(images.sreddit(carireddit));

        case 430:
          hasilreddit = _context13.sent;
          _context13.next = 433;
          return regeneratorRuntime.awrap(RBot.sendFileFromUrl(from, hasilreddit, '', '', id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 433:
          return _context13.abrupt("break", 864);

        case 434:
          if (!(args.length == 0)) {
            _context13.next = 436;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mencari resep makanan\nCaranya ketik: ".concat(prefix, "resep [search]\n\ncontoh: ").concat(prefix, "resep tahu"), id));

        case 436:
          cariresep = body.slice(7);
          _context13.next = 439;
          return regeneratorRuntime.awrap(resep.resep(cariresep));

        case 439:
          hasilresep = _context13.sent;
          _context13.next = 442;
          return regeneratorRuntime.awrap(RBot.reply(from, hasilresep + '\n\nIni kak resep makanannya..', id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 442:
          return _context13.abrupt("break", 864);

        case 443:
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
          return _context13.abrupt("break", 864);

        case 445:
          if (!(args.length == 0)) {
            _context13.next = 447;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk men-stalk akun instagram seseorang\nketik ".concat(prefix, "stalkig [username]\ncontoh: ").concat(prefix, "stalkig ini.arga"), id));

        case 447:
          _context13.next = 449;
          return regeneratorRuntime.awrap(rugaapi.stalkig(args[0]));

        case 449:
          igstalk = _context13.sent;
          _context13.next = 452;
          return regeneratorRuntime.awrap(rugaapi.stalkigpict(args[0]));

        case 452:
          igstalkpict = _context13.sent;
          _context13.next = 455;
          return regeneratorRuntime.awrap(RBot.sendFileFromUrl(from, igstalkpict, '', igstalk, id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 455:
          return _context13.abrupt("break", 864);

        case 456:
          if (!(args.length == 0)) {
            _context13.next = 458;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mencari suatu kata dari wikipedia\nketik: ".concat(prefix, "wiki [kata]"), id));

        case 458:
          wikip = body.slice(6);
          _context13.next = 461;
          return regeneratorRuntime.awrap(rugaapi.wiki(wikip));

        case 461:
          wikis = _context13.sent;
          _context13.next = 464;
          return regeneratorRuntime.awrap(RBot.reply(from, wikis, id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 464:
          return _context13.abrupt("break", 864);

        case 465:
          if (!(args.length == 0)) {
            _context13.next = 467;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk melihat cuaca pada suatu daerah\nketik: ".concat(prefix, "cuaca [daerah]"), id));

        case 467:
          cuacaq = body.slice(7);
          _context13.next = 470;
          return regeneratorRuntime.awrap(rugaapi.cuaca(cuacaq));

        case 470:
          cuacap = _context13.sent;
          _context13.next = 473;
          return regeneratorRuntime.awrap(RBot.reply(from, cuacap, id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 473:
          return _context13.abrupt("break", 864);

        case 474:
          if (!(args.length == 0)) {
            _context13.next = 476;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mencari lirik dari sebuah lagu\bketik: ".concat(prefix, "lirik [judul_lagu]"), id));

        case 476:
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
          return _context13.abrupt("break", 864);

        case 478:
          if (!(args.length == 0)) {
            _context13.next = 480;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mencari lirik dan chord dari sebuah lagu\bketik: ".concat(prefix, "chord [judul_lagu]"), id));

        case 480:
          chordq = body.slice(7);
          _context13.next = 483;
          return regeneratorRuntime.awrap(rugaapi.chord(chordq));

        case 483:
          chordp = _context13.sent;
          _context13.next = 486;
          return regeneratorRuntime.awrap(RBot.reply(from, chordp, id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 486:
          return _context13.abrupt("break", 864);

        case 487:
          if (!(args.length == 0)) {
            _context13.next = 489;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Membuat bot men-screenshot sebuah web\n\nPemakaian: ".concat(prefix, "ss [url]\n\ncontoh: ").concat(prefix, "ss http://google.com"), id));

        case 489:
          _context13.next = 491;
          return regeneratorRuntime.awrap(meme.ss(args[0]));

        case 491:
          scrinshit = _context13.sent;
          _context13.next = 494;
          return regeneratorRuntime.awrap(RBot.sendFile(from, scrinshit, 'ss.jpg', 'cekrek', id)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 494:
          return _context13.abrupt("break", 864);

        case 495:
          if (!(args.length == 0)) {
            _context13.next = 497;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mencari lagu dari youtube\n\nPenggunaan: ".concat(prefix, "play judul lagu"), id));

        case 497:
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
          return _context13.abrupt("break", 864);

        case 499:
          if (!(isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image')) {
            _context13.next = 515;
            break;
          }

          if (!isMedia) {
            _context13.next = 506;
            break;
          }

          _context13.next = 503;
          return regeneratorRuntime.awrap(decryptMedia(message, uaOverride));

        case 503:
          mediaData = _context13.sent;
          _context13.next = 509;
          break;

        case 506:
          _context13.next = 508;
          return regeneratorRuntime.awrap(decryptMedia(quotedMsg, uaOverride));

        case 508:
          mediaData = _context13.sent;

        case 509:
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

          _context13.next = 516;
          break;

        case 515:
          RBot.reply(from, "Maaf format salah\n\nSilahkan kirim foto dengan caption ".concat(prefix, "whatanime\n\nAtau reply foto dengan caption ").concat(prefix, "whatanime"), id);

        case 516:
          return _context13.abrupt("break", 864);

        case 517:
          if (!(args.length !== 2)) {
            _context13.next = 519;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Maaf, format pesan salah.\nSilahkan ketik pesan dengan ".concat(prefix, "resi <kurir> <no_resi>\n\nKurir yang tersedia:\njne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex"), id));

        case 519:
          kurirs = ['jne', 'pos', 'tiki', 'wahana', 'jnt', 'rpx', 'sap', 'sicepat', 'pcp', 'jet', 'dse', 'first', 'ninja', 'lion', 'idl', 'rex'];

          if (kurirs.includes(args[0])) {
            _context13.next = 522;
            break;
          }

          return _context13.abrupt("return", RBot.sendText(from, "Maaf, jenis ekspedisi pengiriman tidak didukung layanan ini hanya mendukung ekspedisi pengiriman ".concat(kurirs.join(', '), " Tolong periksa kembali.")));

        case 522:
          console.log('Memeriksa No Resi', args[1], 'dengan ekspedisi', args[0]);
          cekResi(args[0], args[1]).then(function (result) {
            return RBot.sendText(from, result);
          });
          return _context13.abrupt("break", 864);

        case 525:
          if (!(args.length == 0)) {
            _context13.next = 527;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Mengubah teks menjadi sound (google voice)\nketik: ".concat(prefix, "tts <kode_bahasa> <teks>\ncontoh : ").concat(prefix, "tts id halo\nuntuk kode bahasa cek disini : https://anotepad.com/note/read/5xqahdy8")));

        case 527:
          ttsGB = require('node-gtts')(args[0]);
          dataText = body.slice(8);

          if (!(dataText === '')) {
            _context13.next = 531;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'apa teksnya syg..', id));

        case 531:
          try {
            ttsGB.save('./media/tts.mp3', dataText, function () {
              RBot.sendPtt(from, './media/tts.mp3', id);
            });
          } catch (err) {
            RBot.reply(from, err, id);
          }

          return _context13.abrupt("break", 864);

        case 533:
          if (!(args.length != 1)) {
            _context13.next = 535;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Maaf, format pesan salah.\nSilahkan reply sebuah pesan dengan caption ".concat(prefix, "translate <kode_bahasa>\ncontoh ").concat(prefix, "translate id"), id));

        case 535:
          if (quotedMsg) {
            _context13.next = 537;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Maaf, format pesan salah.\nSilahkan reply sebuah pesan dengan caption ".concat(prefix, "translate <kode_bahasa>\ncontoh ").concat(prefix, "translate id"), id));

        case 537:
          quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : '';
          translate(quoteText, args[0]).then(function (result) {
            return RBot.sendText(from, result);
          })["catch"](function () {
            return RBot.sendText(from, 'Error, Kode bahasa salah.');
          });
          return _context13.abrupt("break", 864);

        case 540:
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
          return _context13.abrupt("break", 864);

        case 542:
          if (!(quotedMsg.type !== 'location')) {
            _context13.next = 544;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Maaf, format pesan salah.\nKirimkan lokasi dan reply dengan caption ".concat(prefix, "ceklokasi"), id));

        case 544:
          console.log("Request Status Zona Penyebaran Covid-19 (".concat(quotedMsg.lat, ", ").concat(quotedMsg.lng, ")."));
          _context13.next = 547;
          return regeneratorRuntime.awrap(getLocationData(quotedMsg.lat, quotedMsg.lng));

        case 547:
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
          return _context13.abrupt("break", 864);

        case 554:
          if (!(args.length == 0)) {
            _context13.next = 556;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "ketik ".concat(prefix, "shortlink <url>"), id));

        case 556:
          if (isUrl(args[0])) {
            _context13.next = 558;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, url yang kamu kirim tidak valid.', id));

        case 558:
          _context13.next = 560;
          return regeneratorRuntime.awrap(urlShortener(args[0]));

        case 560:
          shortlink = _context13.sent;
          _context13.next = 563;
          return regeneratorRuntime.awrap(RBot.sendText(from, shortlink)["catch"](function () {
            RBot.reply(from, "[\u2718] Maaf, ada yang error! Silahkan hubungi owner ".concat(prefix, "botowner"), id);
          }));

        case 563:
          return _context13.abrupt("break", 864);

        case 564:
          if (!(args.length == 0)) {
            _context13.next = 566;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Mengubah kalimat menjadi alayyyyy\n\nketik ".concat(prefix, "bapakfont kalimat"), id));

        case 566:
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
          return _context13.abrupt("break", 864);

        case 568:
          if (isGroupMsg) {
            _context13.next = 570;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 570:
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
          _context13.next = 577;
          return regeneratorRuntime.awrap(RBot.sendTextWithMentions(from, textKlas));

        case 577:
          return _context13.abrupt("break", 864);

        case 578:
          if (isGroupMsg) {
            _context13.next = 580;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 580:
          if (isGroupAdmins) {
            _context13.next = 582;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 582:
          if (isBotGroupAdmins) {
            _context13.next = 584;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id));

        case 584:
          if (!(args.length !== 1)) {
            _context13.next = 586;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk menggunakan ".concat(prefix, "add\nPenggunaan: ").concat(prefix, "add <nomor>\ncontoh: ").concat(prefix, "add 628xxx"), id));

        case 586:
          _context13.prev = 586;
          _context13.next = 589;
          return regeneratorRuntime.awrap(RBot.addParticipant(from, "".concat(args[0], "@c.us")));

        case 589:
          _context13.next = 594;
          break;

        case 591:
          _context13.prev = 591;
          _context13.t5 = _context13["catch"](586);
          RBot.reply(from, 'Tidak dapat menambahkan target', id);

        case 594:
          return _context13.abrupt("break", 864);

        case 595:
          if (isGroupMsg) {
            _context13.next = 597;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 597:
          if (isGroupAdmins) {
            _context13.next = 599;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 599:
          if (isBotGroupAdmins) {
            _context13.next = 601;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id));

        case 601:
          if (!(mentionedJidList.length === 0)) {
            _context13.next = 603;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, format pesan salah.\nSilahkan tag satu atau lebih orang yang akan dikeluarkan', id));

        case 603:
          if (!(mentionedJidList[0] === botNumber)) {
            _context13.next = 607;
            break;
          }

          _context13.next = 606;
          return regeneratorRuntime.awrap(RBot.reply(from, 'Maaf, format pesan salah.\nTidak dapat mengeluarkan akun bot sendiri', id));

        case 606:
          return _context13.abrupt("return", _context13.sent);

        case 607:
          _context13.next = 609;
          return regeneratorRuntime.awrap(RBot.sendTextWithMentions(from, "Request diterima, mengeluarkan:\n".concat(mentionedJidList.map(function (x) {
            return "@".concat(x.replace('@c.us', ''));
          }).join('\n'))));

        case 609:
          _i4 = 0;

        case 610:
          if (!(_i4 < mentionedJidList.length)) {
            _context13.next = 620;
            break;
          }

          if (!groupAdmins.includes(mentionedJidList[_i4])) {
            _context13.next = 615;
            break;
          }

          _context13.next = 614;
          return regeneratorRuntime.awrap(RBot.sendText(from, 'Gagal, kamu tidak bisa mengeluarkan admin grup.'));

        case 614:
          return _context13.abrupt("return", _context13.sent);

        case 615:
          _context13.next = 617;
          return regeneratorRuntime.awrap(RBot.removeParticipant(groupId, mentionedJidList[_i4]));

        case 617:
          _i4++;
          _context13.next = 610;
          break;

        case 620:
          return _context13.abrupt("break", 864);

        case 621:
          if (isGroupMsg) {
            _context13.next = 623;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 623:
          if (isGroupAdmins) {
            _context13.next = 625;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 625:
          if (isBotGroupAdmins) {
            _context13.next = 627;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id));

        case 627:
          if (!(mentionedJidList.length !== 1)) {
            _context13.next = 629;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, hanya bisa mempromote 1 user', id));

        case 629:
          if (!groupAdmins.includes(mentionedJidList[0])) {
            _context13.next = 633;
            break;
          }

          _context13.next = 632;
          return regeneratorRuntime.awrap(RBot.reply(from, 'Maaf, user tersebut sudah menjadi admin.', id));

        case 632:
          return _context13.abrupt("return", _context13.sent);

        case 633:
          if (!(mentionedJidList[0] === botNumber)) {
            _context13.next = 637;
            break;
          }

          _context13.next = 636;
          return regeneratorRuntime.awrap(RBot.reply(from, 'Maaf, format pesan salah.\nTidak dapat mempromote akun bot sendiri', id));

        case 636:
          return _context13.abrupt("return", _context13.sent);

        case 637:
          _context13.next = 639;
          return regeneratorRuntime.awrap(RBot.promoteParticipant(groupId, mentionedJidList[0]));

        case 639:
          _context13.next = 641;
          return regeneratorRuntime.awrap(RBot.sendTextWithMentions(from, "Request diterima, menambahkan @".concat(mentionedJidList[0].replace('@c.us', ''), " sebagai admin.")));

        case 641:
          return _context13.abrupt("break", 864);

        case 642:
          if (isGroupMsg) {
            _context13.next = 644;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 644:
          if (isGroupAdmins) {
            _context13.next = 646;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 646:
          if (isBotGroupAdmins) {
            _context13.next = 648;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id));

        case 648:
          if (!(mentionedJidList.length !== 1)) {
            _context13.next = 650;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, hanya bisa mendemote 1 user', id));

        case 650:
          if (groupAdmins.includes(mentionedJidList[0])) {
            _context13.next = 654;
            break;
          }

          _context13.next = 653;
          return regeneratorRuntime.awrap(RBot.reply(from, 'Maaf, user tersebut belum menjadi admin.', id));

        case 653:
          return _context13.abrupt("return", _context13.sent);

        case 654:
          if (!(mentionedJidList[0] === botNumber)) {
            _context13.next = 658;
            break;
          }

          _context13.next = 657;
          return regeneratorRuntime.awrap(RBot.reply(from, 'Maaf, format pesan salah.\nTidak dapat mendemote akun bot sendiri', id));

        case 657:
          return _context13.abrupt("return", _context13.sent);

        case 658:
          _context13.next = 660;
          return regeneratorRuntime.awrap(RBot.demoteParticipant(groupId, mentionedJidList[0]));

        case 660:
          _context13.next = 662;
          return regeneratorRuntime.awrap(RBot.sendTextWithMentions(from, "Request diterima, menghapus jabatan @".concat(mentionedJidList[0].replace('@c.us', ''), ".")));

        case 662:
          return _context13.abrupt("break", 864);

        case 663:
          if (isGroupMsg) {
            _context13.next = 665;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 665:
          if (isGroupAdmins) {
            _context13.next = 667;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 667:
          RBot.sendText(from, 'Good bye... ( ⇀‸↼‶ )').then(function () {
            return RBot.leaveGroup(groupId);
          });
          return _context13.abrupt("break", 864);

        case 669:
          if (isGroupAdmins) {
            _context13.next = 671;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 671:
          if (quotedMsg) {
            _context13.next = 673;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Maaf, format pesan salah silahkan.\nReply pesan bot dengan caption ".concat(prefix, "del"), id));

        case 673:
          if (quotedMsgObj.fromMe) {
            _context13.next = 675;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Maaf, format pesan salah silahkan.\nReply pesan bot dengan caption ".concat(prefix, "del"), id));

        case 675:
          RBot.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false);
          return _context13.abrupt("break", 864);

        case 677:
          if (isGroupMsg) {
            _context13.next = 679;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 679:
          if (isGroupAdmins) {
            _context13.next = 681;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 681:
          _context13.next = 683;
          return regeneratorRuntime.awrap(RBot.getGroupMembers(groupId));

        case 683:
          groupMem = _context13.sent;
          hehex = '╔══✪〘 Mention All 〙✪══\n';

          for (_i5 = 0; _i5 < groupMem.length; _i5++) {
            hehex += '╠➥';
            hehex += " @".concat(groupMem[_i5].id.replace(/@c.us/g, ''), "\n");
          }

          hehex += '╚═〘 *A R U G A  B O T* 〙';
          _context13.next = 689;
          return regeneratorRuntime.awrap(RBot.sendTextWithMentions(from, hehex));

        case 689:
          return _context13.abrupt("break", 864);

        case 690:
          if (isGroupMsg) {
            _context13.next = 692;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 692:
          RBot.reply(from, "Untuk mengaktifkan simi-simi pada Group Chat\n\nPenggunaan\n".concat(prefix, "simi on --mengaktifkan\n").concat(prefix, "simi off --nonaktifkan\n"), id);
          return _context13.abrupt("break", 864);

        case 694:
          if (isGroupMsg) {
            _context13.next = 696;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 696:
          if (isGroupAdmins) {
            _context13.next = 698;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 698:
          if (!(args.length !== 1)) {
            _context13.next = 700;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mengaktifkan simi-simi pada Group Chat\n\nPenggunaan\n".concat(prefix, "simi on --mengaktifkan\n").concat(prefix, "simi off --nonaktifkan\n"), id));

        case 700:
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

          return _context13.abrupt("break", 864);

        case 702:
          if (isGroupMsg) {
            _context13.next = 704;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 704:
          RBot.reply(from, "Untuk mengaktifkan Fitur Kata Kasar pada Group Chat\n\nApasih kegunaan Fitur Ini? Apabila seseorang mengucapkan kata kasar akan mendapatkan denda\n\nPenggunaan\n".concat(prefix, "kasar on --mengaktifkan\n").concat(prefix, "kasar off --nonaktifkan\n\n").concat(prefix, "reset --reset jumlah denda"), id);
          return _context13.abrupt("break", 864);

        case 706:
          if (isGroupMsg) {
            _context13.next = 708;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 708:
          if (isGroupAdmins) {
            _context13.next = 710;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 710:
          if (!(args.length !== 1)) {
            _context13.next = 712;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk mengaktifkan Fitur Kata Kasar pada Group Chat\n\nApasih kegunaan Fitur Ini? Apabila seseorang mengucapkan kata kasar akan mendapatkan denda\n\nPenggunaan\n".concat(prefix, "kasar on --mengaktifkan\n").concat(prefix, "kasar off --nonaktifkan\n\n").concat(prefix, "reset --reset jumlah denda"), id));

        case 712:
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

          return _context13.abrupt("break", 864);

        case 714:
          if (isGroupMsg) {
            _context13.next = 716;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 716:
          if (isGroupAdmins) {
            _context13.next = 718;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, perintah ini hanya dapat digunakan oleh admin grup!', id));

        case 718:
          reset = db.get('group').find({
            id: groupId
          }).assign({
            members: []
          }).write();

          if (!reset) {
            _context13.next = 722;
            break;
          }

          _context13.next = 722;
          return regeneratorRuntime.awrap(RBot.sendText(from, "Klasemen telah direset."));

        case 722:
          return _context13.abrupt("break", 864);

        case 723:
          if (isGroupMsg) {
            _context13.next = 725;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id));

        case 725:
          isOwner = chat.groupMetadata.owner == pengirim;

          if (isOwner) {
            _context13.next = 728;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Maaf, perintah ini hanya dapat dipakai oleh owner grup!', id));

        case 728:
          if (isBotGroupAdmins) {
            _context13.next = 730;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, 'Gagal, silahkan tambahkan bot sebagai admin grup!', id));

        case 730:
          _context13.next = 732;
          return regeneratorRuntime.awrap(RBot.getGroupMembers(groupId));

        case 732:
          allMem = _context13.sent;
          _i6 = 0;

        case 734:
          if (!(_i6 < allMem.length)) {
            _context13.next = 743;
            break;
          }

          if (!groupAdmins.includes(allMem[_i6].id)) {
            _context13.next = 738;
            break;
          }

          _context13.next = 740;
          break;

        case 738:
          _context13.next = 740;
          return regeneratorRuntime.awrap(RBot.removeParticipant(groupId, allMem[_i6].id));

        case 740:
          _i6++;
          _context13.next = 734;
          break;

        case 743:
          RBot.reply(from, 'Success kick all member', id);
          return _context13.abrupt("break", 864);

        case 745:
          if (isOwnerBot) {
            _context13.next = 747;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, '[✘] Perintah untuk R-Dev', id));

        case 747:
          if (!(args.length == 0)) {
            _context13.next = 749;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Format : ban @tag +1 (GROUP), ban numTarget (Personal)", id));

        case 749:
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

          return _context13.abrupt("break", 864);

        case 751:
          if (isOwnerBot) {
            _context13.next = 753;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, '[✘] Perintah untuk R-Dev!', id));

        case 753:
          if (!(args.length == 0)) {
            _context13.next = 755;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, "Untuk broadcast ke semua chat ketik:\n".concat(prefix, "bc [isi chat]")));

        case 755:
          msg = body.slice(4);
          _context13.next = 758;
          return regeneratorRuntime.awrap(RBot.getAllChatIds());

        case 758:
          chatz = _context13.sent;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context13.prev = 762;
          _iterator = chatz[Symbol.iterator]();

        case 764:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context13.next = 774;
            break;
          }

          idk = _step.value;
          _context13.next = 768;
          return regeneratorRuntime.awrap(RBot.getChatById(idk));

        case 768:
          cvk = _context13.sent;
          if (!cvk.isReadOnly) RBot.sendText(idk, "[ *R - BOT* ]\n\n".concat(msg));
          if (cvk.isReadOnly) RBot.sendText(idk, "\u3018 *R - DEV \u3019\n\n".concat(msg));

        case 771:
          _iteratorNormalCompletion = true;
          _context13.next = 764;
          break;

        case 774:
          _context13.next = 780;
          break;

        case 776:
          _context13.prev = 776;
          _context13.t6 = _context13["catch"](762);
          _didIteratorError = true;
          _iteratorError = _context13.t6;

        case 780:
          _context13.prev = 780;
          _context13.prev = 781;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 783:
          _context13.prev = 783;

          if (!_didIteratorError) {
            _context13.next = 786;
            break;
          }

          throw _iteratorError;

        case 786:
          return _context13.finish(783);

        case 787:
          return _context13.finish(780);

        case 788:
          RBot.reply(from, '✅ Broadcast Success!', id);
          return _context13.abrupt("break", 864);

        case 790:
          if (isOwnerBot) {
            _context13.next = 792;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, '[✘] Perintah untuk R-Dev', id));

        case 792:
          _context13.next = 794;
          return regeneratorRuntime.awrap(RBot.getAllChatIds());

        case 794:
          allChatz = _context13.sent;
          _context13.next = 797;
          return regeneratorRuntime.awrap(RBot.getAllGroups());

        case 797:
          allGroupz = _context13.sent;
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context13.prev = 801;
          _iterator2 = allGroupz[Symbol.iterator]();

        case 803:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context13.next = 814;
            break;
          }

          gclist = _step2.value;
          _context13.next = 807;
          return regeneratorRuntime.awrap(RBot.sendText(gclist.contact.id, "Maaf bot sedang pembersihan, total chat aktif : ".concat(allChatz.length)));

        case 807:
          _context13.next = 809;
          return regeneratorRuntime.awrap(RBot.leaveGroup(gclist.contact.id));

        case 809:
          _context13.next = 811;
          return regeneratorRuntime.awrap(RBot.deleteChat(gclist.contact.id));

        case 811:
          _iteratorNormalCompletion2 = true;
          _context13.next = 803;
          break;

        case 814:
          _context13.next = 820;
          break;

        case 816:
          _context13.prev = 816;
          _context13.t7 = _context13["catch"](801);
          _didIteratorError2 = true;
          _iteratorError2 = _context13.t7;

        case 820:
          _context13.prev = 820;
          _context13.prev = 821;

          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }

        case 823:
          _context13.prev = 823;

          if (!_didIteratorError2) {
            _context13.next = 826;
            break;
          }

          throw _iteratorError2;

        case 826:
          return _context13.finish(823);

        case 827:
          return _context13.finish(820);

        case 828:
          RBot.reply(from, '✅ Leave all group, Success!', id);
          return _context13.abrupt("break", 864);

        case 830:
          if (isOwnerBot) {
            _context13.next = 832;
            break;
          }

          return _context13.abrupt("return", RBot.reply(from, '[✘] Perintah untuk R-Dev', id));

        case 832:
          _context13.next = 834;
          return regeneratorRuntime.awrap(RBot.getAllChats());

        case 834:
          allChatx = _context13.sent;
          _iteratorNormalCompletion3 = true;
          _didIteratorError3 = false;
          _iteratorError3 = undefined;
          _context13.prev = 838;
          _iterator3 = allChatx[Symbol.iterator]();

        case 840:
          if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
            _context13.next = 847;
            break;
          }

          dchat = _step3.value;
          _context13.next = 844;
          return regeneratorRuntime.awrap(RBot.deleteChat(dchat.id));

        case 844:
          _iteratorNormalCompletion3 = true;
          _context13.next = 840;
          break;

        case 847:
          _context13.next = 853;
          break;

        case 849:
          _context13.prev = 849;
          _context13.t8 = _context13["catch"](838);
          _didIteratorError3 = true;
          _iteratorError3 = _context13.t8;

        case 853:
          _context13.prev = 853;
          _context13.prev = 854;

          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }

        case 856:
          _context13.prev = 856;

          if (!_didIteratorError3) {
            _context13.next = 859;
            break;
          }

          throw _iteratorError3;

        case 859:
          return _context13.finish(856);

        case 860:
          return _context13.finish(853);

        case 861:
          RBot.reply(from, '✅ Clear all chat, Success!', id);
          return _context13.abrupt("break", 864);

        case 863:
          return _context13.abrupt("break", 864);

        case 864:
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
            _context13.next = 901;
            break;
          }

          find = db.get('group').find({
            id: groupId
          }).value();

          if (!(find && find.id === groupId)) {
            _context13.next = 894;
            break;
          }

          cekuser = db.get('group').filter({
            id: groupId
          }).map('members').value()[0];
          isIn = inArray(pengirim, cekuser);

          if (!(cekuser && isIn !== false)) {
            _context13.next = 878;
            break;
          }

          if (!isKasar) {
            _context13.next = 876;
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
            _context13.next = 876;
            break;
          }

          _context13.next = 876;
          return regeneratorRuntime.awrap(RBot.reply(from, "Jangan badword bodoh\nDenda +5.000\nTotal : Rp" + formatin(denda.denda), id));

        case 876:
          _context13.next = 892;
          break;

        case 878:
          cekMember = db.get('group').filter({
            id: groupId
          }).map('members').value()[0];

          if (!(cekMember.length === 0)) {
            _context13.next = 883;
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

          _context13.next = 892;
          break;

        case 883:
          _cekuser = db.get('group').filter({
            id: groupId
          }).map('members').value()[0];

          if (!isKasar) {
            _context13.next = 890;
            break;
          }

          _cekuser.push({
            id: pengirim,
            denda: 5000
          });

          _context13.next = 888;
          return regeneratorRuntime.awrap(RBot.reply(from, "Jangan badword bodoh\nDenda +5.000", id));

        case 888:
          _context13.next = 891;
          break;

        case 890:
          _cekuser.push({
            id: pengirim,
            denda: 0
          });

        case 891:
          db.get('group').find({
            id: groupId
          }).set('members', _cekuser).write();

        case 892:
          _context13.next = 901;
          break;

        case 894:
          if (!isKasar) {
            _context13.next = 900;
            break;
          }

          db.get('group').push({
            id: groupId,
            members: [{
              id: pengirim,
              denda: 5000
            }]
          }).write();
          _context13.next = 898;
          return regeneratorRuntime.awrap(RBot.reply(from, "Jangan badword bodoh\nDenda +5.000\nTotal : Rp5.000", id));

        case 898:
          _context13.next = 901;
          break;

        case 900:
          db.get('group').push({
            id: groupId,
            members: [{
              id: pengirim,
              denda: 0
            }]
          }).write();

        case 901:
          _context13.next = 906;
          break;

        case 903:
          _context13.prev = 903;
          _context13.t9 = _context13["catch"](0);
          console.log(color('[EROR]', 'red'), _context13.t9);

        case 906:
        case "end":
          return _context13.stop();
      }
    }
  }, null, null, [[0, 903], [135, 151], [235, 242], [586, 591], [762, 776, 780, 788], [781,, 783, 787], [801, 816, 820, 828], [821,, 823, 827], [838, 849, 853, 861], [854,, 856, 860]]);
};
"use strict";

var _require = require("@open-wa/wa-automate"),
    create = _require.create,
    Client = _require.Client;

var figlet = require("figlet");

var gradient = require("gradient-string");

var style = require("./custom/console");

var options = require("./utils/options");

var _require2 = require("./utils"),
    color = _require2.color,
    messageLog = _require2.messageLog;

var HandleMsg = require("./message/HandleMsg");

var _require3 = require("./bot-setting.json"),
    cacheMessage = _require3.cacheMessage,
    groupLimit = _require3.groupLimit,
    botName = _require3.botName,
    memberLimit = _require3.memberLimit; //! Bot Setting


var _require4 = require('./msg/msg-temp'),
    infoFeedback = _require4.infoFeedback,
    infoProblem = _require4.infoProblem; //! Massage Template


var fs = require('fs-extra'); //! ACCESS TO FILE SYSTEM


var groupList = JSON.parse(fs.readFileSync('./feature/groupList.json')); //! groupList : REGIST

var start = function start() {
  var RBot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Client();
  console.log(gradient.instagram(figlet.textSync("RIZQY\nSTUDIO", {
    font: "Epic",
    horizontalLayout: "default"
  })));
  console.log(style.dev("Made by R-Dev Studio"));
  console.log(style.bot("Have a nice day Rizqy :)"));
  console.log(style.bot("I'm ready for my Jobs")); //!Mempertahankan sesi agar tetap nyala

  RBot.onStateChanged(function (state) {
    console.log(style.warn(state));
    if (state === "CONFLICT" || state === "UNLAUNCHED") RBot.forceRefocus();
  }); //! Invited RBot in Group

  RBot.onAddedToGroup(function _callee2(chat) {
    var groups, groupName;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(RBot.getAllGroups());

          case 2:
            groups = _context2.sent;
            groupName = chat.contact.name; //! Get Group ID
            //! Group Limit Setting

            if (!(groups.length > groupLimit)) {
              _context2.next = 9;
              break;
            }

            _context2.next = 7;
            return regeneratorRuntime.awrap(RBot.sendText(chat.id, "Maaf, saat ini ".concat(botName, " mencapai batas maksimum.\nMaksimal grup : ").concat(groupLimit, " ") + infoProblem).then(function () {
              RBot.leaveGroup(chat.id);
              RBot.deleteChat(chat.id);
            }));

          case 7:
            _context2.next = 16;
            break;

          case 9:
            if (!(chat.groupMetadata.participants.length < memberLimit)) {
              _context2.next = 14;
              break;
            }

            _context2.next = 12;
            return regeneratorRuntime.awrap(RBot.sendText(chat.id, "Maaf, ".concat(botName, " hanya bisa masuk grup yang mempunyai anggota lebih dari ").concat(memberLimit, " anggota") + infoProblem).then(function () {
              RBot.leaveGroup(chat.id);
              RBot.deleteChat(chat.id);
            }));

          case 12:
            _context2.next = 16;
            break;

          case 14:
            _context2.next = 16;
            return regeneratorRuntime.awrap(RBot.simulateTyping(chat.id, true).then(function _callee() {
              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return regeneratorRuntime.awrap(RBot.sendText(chat.id, "Hai member ".concat(groupName, ",  perkenalkan aku *").concat(botName, "*\nUntuk mengaktifkan ").concat(botName, " silahkan Admin Grup ketik\n\n\t#daftar <nama_grup>|<nama_perwakilan>\n\nGrup akan di Acc 1x24jam.")));

                    case 2:
                      style.bot("Invited to ".concat(groupName));

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            }));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    });
  }); //! Group Event (Members Kicked / Invited)

  RBot.onGlobalParicipantsChanged(function _callee3(event) {
    var host, groupName, check;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(RBot.getHostNumber());

          case 2:
            _context3.t0 = _context3.sent;
            host = _context3.t0 + "@c.us";
            //! Bot NOT REGIST == Turn OFF command
            groupName = event.chat; //! Get Group ID

            check = groupList.includes(groupName);

            if (check) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", null);

          case 8:
            if (!(event.action === "add" && event.who !== host)) {
              _context3.next = 11;
              break;
            }

            _context3.next = 11;
            return regeneratorRuntime.awrap(RBot.sendTextWithMentions(event.chat, "Hai ".concat(event.who.replace("@c.us", ""), ", Selamat datang digrup.\n Semoga nyaman \uD83E\uDD70 \n*-").concat(botName, "*")));

          case 11:
            if (!(event.action === "remove" && event.who !== host)) {
              _context3.next = 14;
              break;
            }

            _context3.next = 14;
            return regeneratorRuntime.awrap(RBot.sendTextWithMentions(event.chat, "Jangan rindu @".concat(event.who.replace("@c.us", ""), ", Semoga tenang")));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
  RBot.onIncomingCall(function _callee5(callData) {
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(RBot.sendText(callData.peerJid, "Dilarang Keras Menelepon hukuman block." + infoProblem).then(function _callee4() {
              return regeneratorRuntime.async(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return regeneratorRuntime.awrap(RBot.contactBlock(callData.peerJid));

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              });
            }));

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    });
  }); //! Message Handler

  RBot.onMessage(function _callee6(message) {
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            RBot //! DELETING MESSAGE CACHE
            .getAmountOfLoadedMessages().then(function (msg) {
              if (msg >= cacheMessage) {
                console.log(style.bot("Loaded Message reach ".concat(msg, ", deleting message cache...")));
                RBot.cutMsgCache();
              }
            });
            HandleMsg(RBot, message);

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    });
  }); // Message log for analytic

  RBot.onAnyMessage(function (anal) {
    messageLog(anal.fromMe, anal.type);
  });
}; //! Stat Session


create(options(true, start)).then(function (RBot) {
  return start(RBot);
})["catch"](function (err) {
  return new Error(err);
});
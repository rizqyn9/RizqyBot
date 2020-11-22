"use strict";

var _require = require("@open-wa/wa-automate"),
    create = _require.create,
    Client = _require.Client;

var figlet = require("figlet");

var style = require("./custom/console");

var options = require("./utils/options");

var _require2 = require("./utils"),
    color = _require2.color,
    messageLog = _require2.messageLog;

var HandleMsg = require("./HandleMsg");

var _require3 = require("./bot-setting.json"),
    cacheMessage = _require3.cacheMessage,
    groupLimit = _require3.groupLimit,
    botName = _require3.botName; //! Bot Setting


var _require4 = require('./msg/msg-temp'),
    infoFeedback = _require4.infoFeedback,
    infoProblem = _require4.infoProblem; //! Massage Template


var start = function start() {
  var aruga = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Client();
  console.log(figlet.textSync("RIZQY\nSTUDIO", {
    font: "Epic",
    horizontalLayout: "default"
  }));
  console.log(style.dev("Made by R-Dev Studio"));
  console.log(style.bot("Have a nice day Rizqy :)"));
  console.log(style.bot("I'm ready for my Jobs")); //!Mempertahankan sesi agar tetap nyala

  aruga.onStateChanged(function (state) {
    console.log(style.warn(state));
    if (state === "CONFLICT" || state === "UNLAUNCHED") aruga.forceRefocus();
  }); // ketika bot diinvite ke dalam group

  aruga.onAddedToGroup(function _callee2(chat) {
    var groups;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(aruga.getAllGroups());

          case 2:
            groups = _context2.sent;

            if (!(groups.length > groupLimit)) {
              _context2.next = 8;
              break;
            }

            _context2.next = 6;
            return regeneratorRuntime.awrap(aruga.sendText(chat.id, "Maaf, saat ini ".concat(botName, " mencapai batas maksimum.\nMaksimal grup : ").concat(groupLimit, " ") + infoProblem).then(function () {
              aruga.leaveGroup(chat.id);
              aruga.deleteChat(chat.id);
            }));

          case 6:
            _context2.next = 15;
            break;

          case 8:
            if (!(chat.groupMetadata.participants.length < memberLimit)) {
              _context2.next = 13;
              break;
            }

            _context2.next = 11;
            return regeneratorRuntime.awrap(aruga.sendText(chat.id, "Maaf, ".concat(botName, " hanya bisa masuk grup yang mempunyai anggota lebih dari ").concat(memberLimit, " anggota") + infoProblem).then(function () {
              aruga.leaveGroup(chat.id);
              aruga.deleteChat(chat.id);
            }));

          case 11:
            _context2.next = 15;
            break;

          case 13:
            _context2.next = 15;
            return regeneratorRuntime.awrap(aruga.simulateTyping(chat.id, true).then(function _callee() {
              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return regeneratorRuntime.awrap(aruga.sendText(chat.id, "Hai member ".concat(groupName, ",  perkenalkan aku *").concat(botName, "*\nUntuk melihat perintah pada ketik ").concat(prefix, "menu \uD83D\uDE18")));

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    });
  }); // ketika seseorang masuk/keluar dari group

  aruga.onGlobalParicipantsChanged(function _callee3(event) {
    var host;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(aruga.getHostNumber());

          case 2:
            _context3.t0 = _context3.sent;
            host = _context3.t0 + "@c.us";

            if (!(event.action === "add" && event.who !== host)) {
              _context3.next = 7;
              break;
            }

            _context3.next = 7;
            return regeneratorRuntime.awrap(aruga.sendTextWithMentions(event.chat, "Hai ".concat(event.who.replace("@c.us", ""), ", Selamat datang digrup.\n Semoga nyaman \uD83E\uDD70 \n*-").concat(botName, "*")));

          case 7:
            if (!(event.action === "remove" && event.who !== host)) {
              _context3.next = 10;
              break;
            }

            _context3.next = 10;
            return regeneratorRuntime.awrap(aruga.sendTextWithMentions(event.chat, "Jangan rindu @".concat(event.who.replace("@c.us", ""), ", Semoga tenang")));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
  aruga.onIncomingCall(function _callee5(callData) {
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(aruga.sendText(callData.peerJid, "Dilarang Keras Menelepon hukuman block." + infoProblem).then(function _callee4() {
              return regeneratorRuntime.async(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return regeneratorRuntime.awrap(aruga.contactBlock(callData.peerJid));

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
  }); // ketika seseorang mengirim pesan

  aruga.onMessage(function _callee6(message) {
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            aruga.getAmountOfLoadedMessages() // menghapus pesan cache jika sudah 3000 pesan.
            .then(function (msg) {
              if (msg >= cacheMessage) {
                console.log(style.bot("Loaded Message reach ".concat(msg, ", deleting message cache...")));
                aruga.cutMsgCache();
              }
            });
            HandleMsg(aruga, message);

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    });
  }); // Message log for analytic

  aruga.onAnyMessage(function (anal) {
    messageLog(anal.fromMe, anal.type);
  });
}; //create session


create(options(true, start)).then(function (aruga) {
  return start(aruga);
})["catch"](function (err) {
  return new Error(err);
});
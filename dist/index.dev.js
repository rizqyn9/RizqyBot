"use strict";

var _require = require('@open-wa/wa-automate'),
    create = _require.create,
    Client = _require.Client;

var figlet = require('figlet');

var options = require('./utils/options');

var _require2 = require('./utils'),
    color = _require2.color,
    messageLog = _require2.messageLog;

var HandleMsg = require('./HandleMsg');

var start = function start() {
  var RClient = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Client();
  console.log(color('[DEV]'), color('RClientZ', 'yellow'));
  console.log(color('[~>>]'), color('BOT Started!', 'green')); // Mempertahankan sesi agar tetap nyala

  RClient.onStateChanged(function (state) {
    console.log(color('[~>>]', 'red'), state);
    if (state === 'CONFLICT' || state === 'UNLAUNCHED') RClient.forceRefocus();
  }); // ketika bot diinvite ke dalam group

  RClient.onAddedToGroup(function _callee2(chat) {
    var groups;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(RClient.getAllGroups());

          case 2:
            groups = _context2.sent;

            if (!(groups.length > groupLimit)) {
              _context2.next = 8;
              break;
            }

            _context2.next = 6;
            return regeneratorRuntime.awrap(RClient.sendText(chat.id, "Sorry, the group on this bot is full\nMax Group is: ".concat(groupLimit)).then(function () {
              RClient.leaveGroup(chat.id);
              RClient.deleteChat(chat.id);
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
            return regeneratorRuntime.awrap(RClient.sendText(chat.id, "Sorry, BOT comes out if the group members do not exceed ".concat(memberLimit, " people")).then(function () {
              RClient.leaveGroup(chat.id);
              RClient.deleteChat(chat.id);
            }));

          case 11:
            _context2.next = 15;
            break;

          case 13:
            _context2.next = 15;
            return regeneratorRuntime.awrap(RClient.simulateTyping(chat.id, true).then(function _callee() {
              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return regeneratorRuntime.awrap(RClient.sendText(chat.id, "Hai minna~, Im RClient BOT. To find out the commands on this bot type ".concat(prefix, "menu")));

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

  RClient.onGlobalParicipantsChanged(function _callee3(event) {
    var host;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(RClient.getHostNumber());

          case 2:
            _context3.t0 = _context3.sent;
            host = _context3.t0 + '@c.us';

            if (!(event.action === 'add' && event.who !== host)) {
              _context3.next = 7;
              break;
            }

            _context3.next = 7;
            return regeneratorRuntime.awrap(RClient.sendTextWithMentions(event.chat, "Hello, Welcome to the group @".concat(event.who.replace('@c.us', ''), " \n\nHave fun with us\u2728")));

          case 7:
            if (!(event.action === 'remove' && event.who !== host)) {
              _context3.next = 10;
              break;
            }

            _context3.next = 10;
            return regeneratorRuntime.awrap(RClient.sendTextWithMentions(event.chat, "Good bye @".concat(event.who.replace('@c.us', ''), ", We'll miss you\u2728")));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
  RClient.onIncomingCall(function _callee5(callData) {
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(RClient.sendText(callData.peerJid, 'Maaf sedang tidak bisa menerima panggilan.\n\n-bot').then(function _callee4() {
              return regeneratorRuntime.async(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return regeneratorRuntime.awrap(RClient.contactBlock(callData.peerJid));

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

  RClient.onMessage(function _callee6(message) {
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            RClient.getAmountOfLoadedMessages() // menghapus pesan cache jika sudah 3000 pesan.
            .then(function (msg) {
              if (msg >= 3000) {
                console.log('[RClient]', color("Loaded Message Reach ".concat(msg, ", cuting message cache..."), 'yellow'));
                RClient.cutMsgCache();
              }
            });
            HandleMsg(RClient, message);

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    });
  }); // Message log for analytic

  RClient.onAnyMessage(function (anal) {
    messageLog(anal.fromMe, anal.type);
  });
}; //create session


create(options(true, start)).then(function (RClient) {
  return start(RClient);
})["catch"](function (err) {
  return new Error(err);
});
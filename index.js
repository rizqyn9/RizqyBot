const { create, Client } = require("@open-wa/wa-automate");
const figlet = require("figlet");
const gradient = require("gradient-string");
const style = require("./custom/console");
const options = require("./utils/options");
const { color, messageLog } = require("./utils");
const HandleMsg = require("./HandleMsg"); 
const { cacheMessage, groupLimit, botName,memberLimit} = require("./bot-setting.json"); //! Bot Setting
const {infoFeedback,infoProblem} = require('./msg/msg-temp') //! Massage Template
const fs = require('fs-extra')
const groupList = JSON.parse(fs.readFileSync('./feature/groupList.json'))

const start = (RBot = new Client()) => {
  console.log(
    gradient.instagram(
      figlet.textSync("RIZQY\nSTUDIO", {
        font: "Epic",
        horizontalLayout: "default",
      })
    )
  );
  console.log(style.dev("Made by R-Dev Studio"));
  console.log(style.bot("Have a nice day Rizqy :)"));
  console.log(style.bot("I'm ready for my Jobs"));

  //!Mempertahankan sesi agar tetap nyala
  RBot.onStateChanged((state) => {
    console.log(style.warn(state));
    if (state === "CONFLICT" || state === "UNLAUNCHED")
      RBot.forceRefocus();
  });

  // ketika bot diinvite ke dalam group
  RBot.onAddedToGroup(async (chat) => {
    const groups = await RBot.getAllGroups();
    const groupName = chat.contact.id //! Get Group Name

    // kondisi ketika batas group bot telah tercapai,ubah di file settings/setting.json
    if (groups.length > groupLimit) {
      await RBot
        .sendText(
          chat.id,
          `Maaf, saat ini ${botName} mencapai batas maksimum.\nMaksimal grup : ${groupLimit} ` + infoProblem
        )
        .then(() => {
          RBot.leaveGroup(chat.id);
          RBot.deleteChat(chat.id);
        });
    } else {
      // kondisi ketika batas member group belum tercapai, ubah di file settings/setting.json
      if (chat.groupMetadata.participants.length < memberLimit) {
        await RBot
          .sendText(
            chat.id,
            `Maaf, ${botName} hanya bisa masuk grup yang mempunyai anggota lebih dari ${memberLimit} anggota` + infoProblem
          )
          .then(() => {
            RBot.leaveGroup(chat.id);
            RBot.deleteChat(chat.id);
          });
      } else {
        await RBot.simulateTyping(chat.id, true).then(async () => {
          await RBot.sendText(
            chat.id,
            `Hai member ${groupName},  perkenalkan aku *${botName}*\nUntuk melihat perintah pada ketik ${prefix}menu 😘`
          );
        });
      }
    }
  });


  // ketika seseorang masuk/keluar dari group
  RBot.onGlobalParicipantsChanged(async (event) => {
    const host = (await RBot.getHostNumber()) + "@c.us";
    // kondisi ketika seseorang diinvite/join group lewat link
    if (event.action === "add" && event.who !== host) {
      await RBot.sendTextWithMentions(
        event.chat,
        `Hai ${event.who.replace(
          "@c.us",
          ""
        )}, Selamat datang digrup.\n Semoga nyaman 🥰 \n*-${botName}*`
      );
    }
    // kondisi ketika seseorang dikick/keluar dari group
    if (event.action === "remove" && event.who !== host) {
      await RBot.sendTextWithMentions(
        event.chat,
        `Jangan rindu @${event.who.replace("@c.us", "")}, Semoga tenang`
      );
    }
  });

  RBot.onIncomingCall(async (callData) => {
    // ketika seseorang menelpon nomor bot akan mengirim pesan
    await RBot
      .sendText(
        callData.peerJid,
        `Dilarang Keras Menelepon hukuman block.` + infoProblem
      )
      .then(async () => {
        // bot akan memblock nomor itu
        await RBot.contactBlock(callData.peerJid);
      });
  });

  // ketika seseorang mengirim pesan
  RBot.onMessage(async (message) => {
    RBot
      .getAmountOfLoadedMessages() // menghapus pesan cache jika sudah 3000 pesan.
      .then((msg) => {
        if (msg >= cacheMessage) {
          console.log(
            style.bot(`Loaded Message reach ${msg}, deleting message cache...`),
          );
          RBot.cutMsgCache();
        }
      });
    HandleMsg(RBot, message);
  });

  // Message log for analytic
  RBot.onAnyMessage((anal) => {
    messageLog(anal.fromMe, anal.type);
  });
};

//create session
create(options(true, start))
  .then((RBot) => start(RBot))
  .catch((err) => new Error(err));

const { create, Client } = require("@open-wa/wa-automate");
const figlet = require("figlet");
const style = require("./custom/console");
const options = require("./utils/options");
const { color, messageLog } = require("./utils");
const HandleMsg = require("./HandleMsg"); 
const { cacheMessage, groupLimit, botName} = require("./bot-setting.json"); //! Bot Setting
const {infoFeedback,infoProblem} = require('./msg/msg-temp') //! Massage Template

const start = (aruga = new Client()) => {

  console.log(

      figlet.textSync("RIZQY\nSTUDIO", {
        font: "Epic",
        horizontalLayout: "default",
      })
    
  );
  console.log(style.dev("Made by R-Dev Studio"));
  console.log(style.bot("Have a nice day Rizqy :)"));
  console.log(style.bot("I'm ready for my Jobs"));

  //!Mempertahankan sesi agar tetap nyala
  aruga.onStateChanged((state) => {
    console.log(style.warn(state));
    if (state === "CONFLICT" || state === "UNLAUNCHED")
      aruga.forceRefocus();
  });

  // ketika bot diinvite ke dalam group
  aruga.onAddedToGroup(async (chat) => {
    const groups = await aruga.getAllGroups();
    // kondisi ketika batas group bot telah tercapai,ubah di file settings/setting.json
    if (groups.length > groupLimit) {
      await aruga
        .sendText(
          chat.id,
          `Maaf, saat ini ${botName} mencapai batas maksimum.\nMaksimal grup : ${groupLimit} ` + infoProblem
        )
        .then(() => {
          aruga.leaveGroup(chat.id);
          aruga.deleteChat(chat.id);
        });
    } else {
      // kondisi ketika batas member group belum tercapai, ubah di file settings/setting.json
      if (chat.groupMetadata.participants.length < memberLimit) {
        await aruga
          .sendText(
            chat.id,
            `Maaf, ${botName} hanya bisa masuk grup yang mempunyai anggota lebih dari ${memberLimit} anggota` + infoProblem
          )
          .then(() => {
            aruga.leaveGroup(chat.id);
            aruga.deleteChat(chat.id);
          });
      } else {
        await aruga.simulateTyping(chat.id, true).then(async () => {
          await aruga.sendText(
            chat.id,
            `Hai member ${groupName},  perkenalkan aku *${botName}*\nUntuk melihat perintah pada ketik ${prefix}menu 😘`
          );
        });
      }
    }
  });

  // ketika seseorang masuk/keluar dari group
  aruga.onGlobalParicipantsChanged(async (event) => {
    const host = (await aruga.getHostNumber()) + "@c.us";
    // kondisi ketika seseorang diinvite/join group lewat link
    if (event.action === "add" && event.who !== host) {
      await aruga.sendTextWithMentions(
        event.chat,
        `Hai ${event.who.replace(
          "@c.us",
          ""
        )}, Selamat datang digrup.\n Semoga nyaman 🥰 \n*-${botName}*`
      );
    }
    // kondisi ketika seseorang dikick/keluar dari group
    if (event.action === "remove" && event.who !== host) {
      await aruga.sendTextWithMentions(
        event.chat,
        `Jangan rindu @${event.who.replace("@c.us", "")}, Semoga tenang`
      );
    }
  });

  aruga.onIncomingCall(async (callData) => {
    // ketika seseorang menelpon nomor bot akan mengirim pesan
    await aruga
      .sendText(
        callData.peerJid,
        `Dilarang Keras Menelepon hukuman block.` + infoProblem
      )
      .then(async () => {
        // bot akan memblock nomor itu
        await aruga.contactBlock(callData.peerJid);
      });
  });

  // ketika seseorang mengirim pesan
  aruga.onMessage(async (message) => {
    aruga
      .getAmountOfLoadedMessages() // menghapus pesan cache jika sudah 3000 pesan.
      .then((msg) => {
        if (msg >= cacheMessage) {
          console.log(
            style.bot(`Loaded Message reach ${msg}, deleting message cache...`),
          );
          aruga.cutMsgCache();
        }
      });
    HandleMsg(aruga, message);
  });

  // Message log for analytic
  aruga.onAnyMessage((anal) => {
    messageLog(anal.fromMe, anal.type);
  });
};

//create session
create(options(true, start))
  .then((aruga) => start(aruga))
  .catch((err) => new Error(err));

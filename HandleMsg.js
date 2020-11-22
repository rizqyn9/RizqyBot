require('dotenv').config()
const { decryptMedia } = require('@open-wa/wa-automate')

const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')
const axios = require('axios')
const fetch = require('node-fetch')

const appRoot = require('app-root-path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const db_group = new FileSync(appRoot+'/lib/data/group.json')
const db = low(db_group)
db.defaults({ group: []}).write()

const { 
    removeBackgroundFromImageBase64
} = require('remove.bg')

const {
    exec
} = require('child_process')

const { 
    menuId, 
    cekResi, 
    urlShortener, 
    meme, 
    translate, 
    getLocationData,
    images,
    resep,
    rugapoi,
    rugaapi,
    cariKasar
} = require('./lib')

const { 
    msgFilter, 
    color, 
    processTime, 
    isUrl
} = require('./utils')

const { uploadImages } = require('./utils/fetcher')

const fs = require('fs-extra')
const banned = JSON.parse(fs.readFileSync('./settings/banned.json'))
const simi = JSON.parse(fs.readFileSync('./settings/simi.json'))
const ngegas = JSON.parse(fs.readFileSync('./settings/ngegas.json'))
// ? BOT - Settings
const {botName,
    ownerNumber,
    memberLimit,
    groupLimit,
    prefix,
    waFeed,} = require('./bot-setting.json')

// ? Style console
const style = require('./custom/console')
const { infoProblem } = require('./msg/msg-temp')
    
// const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))
// let { 
//     ownerNumber, 
//     groupLimit, 
//     memberLimit,
//     prefix
// } = setting

const {
    apiNoBg,
	apiSimi
} = JSON.parse(fs.readFileSync('./settings/api.json'))

function formatin(duit){
    let	reverse = duit.toString().split('').reverse().join('');
    let ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return ribuan;
}

const inArray = (needle, haystack) => {
    let length = haystack.length;
    for(let i = 0; i < length; i++) {
        if(haystack[i].id == needle) return i;
    }
    return false;
}

module.exports = HandleMsg = async (bocilClient, message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } = message
        let { body } = message
        var { name, formattedTitle } = chat
        let { pushname, verifiedName, formattedName } = sender
        pushname = pushname || verifiedName || formattedName // verifiedName is the name of someone who uses a business account
        const botNumber = await bocilClient.getHostNumber() + '@c.us'
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await bocilClient.getGroupAdmins(groupId) : ''
        const isGroupAdmins = groupAdmins.includes(sender.id) || false
		const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
		const pengirim = sender.id
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

        // Bot Prefix
        body = (type === 'chat' && body.startsWith(prefix)) ? body : ((type === 'image' && caption || type === 'video' && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const arg = body.trim().substring(body.indexOf(' ') + 1)
        const args = body.trim().split(/ +/).slice(1)
		const argx = chats.slice(0).trim().split(/ +/).shift().toLowerCase()
        const isCmd = body.startsWith(prefix)
        const uaOverride = process.env.UserAgent
        const url = args.length !== 0 ? args[0] : ''
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
	    const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
		
		// [IDENTIFY]
		const isOwnerBot = ownerNumber.includes(pengirim)
        const isBanned = banned.includes(pengirim)
		const isSimi = simi.includes(chatId)
		const isNgegas = ngegas.includes(chatId)
		const isKasar = await cariKasar(chats)

        // ? Console View
        const timeFormat = moment(t*1000).format('DD/MM/YY HH:mm:ss')
        //! SPAM RULES CONSOLE
        if (isCmd && msgFilter.isFiltered(from) && !isGroupMsg) {
            return style.spamChat(timeFormat,`${command} [${args.length}]`,'from',pushname)
        }
        if (isCmd && msgFilter.isFiltered(from) && isGroupMsg) { 
            return style.spamGroup(timeFormat,`${command} [${args.length}]`,'from',pushname,'in',(name || formattedTitle))
        }
        
        //!BADWORDS CONSOLE
        if(!isCmd && isKasar && isGroupMsg) { 
            style.exeGroup(timeFormat,`${command} [${args.length}]`,'from',pushname,'in',(name || formattedTitle)) 
        }

        //!EXECUTION CONSOLE
        if (isCmd && !isGroupMsg) { 
            style.exeChat(timeFormat,`${command} [${args.length}]`,'from',pushname)
        }
        if (isCmd && isGroupMsg) { 
            style.exeGroup(timeFormat,`${command} [${args.length}]`,'from',pushname,'in',(name || formattedTitle)) 
        }

        // [BETA] Avoid Spam Message
        msgFilter.addFilter(from)

	    //! Filter Banned People
        if (isBanned) {
            style.banPerson(timeFormat,`${command} [${args.length}]`,'from',pushname)
        }
        
        //! COMMAND
        switch (command) {
        
//? Menu and TnC
        case 'speed':
        case 'ping':
            await bocilClient.sendText(from, `Hai,\n respon bot : ${processTime(t, moment())} _Second_`)
            break
        case 'tnc':
            await bocilClient.sendText(from, menuId.textTnC())
            break
        case 'menu':
        case 'help':
            await bocilClient.sendText(from, menuId.textMenu(pushname))
            .then(() => ((isGroupMsg) && (isGroupAdmins)) ? bocilClient.sendText(from, `Admin Grup : *${prefix}menuadmin*`) : null)
            break
        case 'menuadmin':
            if (!isGroupMsg) return bocilClient.reply(from,`Perintah ini hanya dapat digunakan didalam grup. ${infoProblem}`, id)
            if (!isGroupAdmins) return bocilClient.reply(from, '*Gagal*, perintah ini hanya dapat digunakan oleh admin grup', id)
            await bocilClient.sendText(from, menuId.textAdmin())
            break
        case 'donate':
        case 'donasi':
            await bocilClient.sendText(from, menuId.textDonasi())
            break
        case 'ownerbot':
            await bocilClient.sendContact(from, ownerNumber)
            .then(() => bocilClient.sendText(from, 'Jika kalian ingin request fitur silahkan chat nomor owner!'))
            break
        case 'join':
            if (args.length == 0) return bocilClient.reply(from, `Jika kalian ingin mengundang bot kegroup silahkan invite atau dengan\nketik ${prefix}join [link group]`, id)
            let linkgrup = body.slice(6)
            let islink = linkgrup.match(/(https:\/\/chat.whatsapp.com)/gi)
            let chekgrup = await bocilClient.inviteInfo(linkgrup)
            if (!islink) return bocilClient.reply(from, 'Maaf link group-nya salah! silahkan kirim link yang benar', id)
            if (isOwnerBot) {
                await bocilClient.joinGroupViaLink(linkgrup)
                      .then(async () => {
                          await bocilClient.sendText(from, 'Berhasil join grup via link!')
                          await bocilClient.sendText(chekgrup.id, `Hai minna~, Im bocilClient BOT. To find out the commands on this bot type ${prefix}menu`)
                      })
            } else {
                let cgrup = await bocilClient.getAllGroups()
                if (cgrup.length > groupLimit) return bocilClient.reply(from, `Sorry, the group on this bot is full\nMax Group is: ${groupLimit}`, id)
                if (cgrup.size < memberLimit) return bocilClient.reply(from, `Sorry, BOT wil not join if the group members do not exceed ${memberLimit} people`, id)
                await bocilClient.joinGroupViaLink(linkgrup)
                      .then(async () =>{
                          await bocilClient.reply(from, 'Berhasil join grup via link!', id)
                      })
                      .catch(() => {
                          bocilClient.reply(from, 'Gagal!', id)
                      })
            }
            break
        case 'botstat': {
            const loadedMsg = await bocilClient.getAmountOfLoadedMessages()
            const chatIds = await bocilClient.getAllChatIds()
            const groups = await bocilClient.getAllGroups()
            bocilClient.sendText(from, `Status :\n- *${loadedMsg}* Loaded Messages\n- *${groups.length}* Group Chats\n- *${chatIds.length - groups.length}* Personal Chats\n- *${chatIds.length}* Total Chats`)
            break
        }

        // Sticker Creator
        case 'sticker':
        case 'stiker':
            if ((isMedia || isQuotedImage) && args.length === 0) {
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                bocilClient.sendImageAsSticker(from, imageBase64)
                .then(() => {
                    bocilClient.reply(from, `☑ Sukses dibuat ${botName}`)
                    console.log(style.msg(style.msg(`Sticker Processed for ${processTime(t, moment())} Second`)))
                })
            } else if (args[0] === 'nobg') {
                if (isMedia || isQuotedImage) {
                    try {
                    var mediaData = await decryptMedia(message, uaOverride)
                    var imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                    var base64img = imageBase64
                    var outFile = './media/noBg.png'
		            // kamu dapat mengambil api key dari website remove.bg dan ubahnya difolder settings/api.json
                    var result = await removeBackgroundFromImageBase64({ base64img, apiKey: apiNoBg, size: 'auto', type: 'auto', outFile })
                    await fs.writeFile(outFile, result.base64img)
                    await bocilClient.sendImageAsSticker(from, `data:${mimetype};base64,${result.base64img}`)
                    } catch(err) {
                    console.log(err)
	   	            await bocilClient.reply(from, 'Maaf batas penggunaan hari ini sudah mencapai maksimal', id)
                    }
                }
            } else if (args.length === 1) {
                if (!isUrl(url)) { await bocilClient.reply(from, 'Maaf, link yang kamu kirim tidak valid.', id) }
                bocilClient.sendStickerfromUrl(from, url).then((r) => (!r && r !== undefined)
                    ? bocilClient.sendText(from, 'Maaf, link yang kamu kirim tidak memuat gambar.')
                    : bocilClient.reply(from, `☑ Sukses dibuat ${botName}`)).then(() => console.log(style.msg(`Sticker Processed for ${processTime(t, moment())} Second`)))
            } else {
                await bocilClient.reply(from, `Tidak ada gambar! Untuk menggunakan ${prefix}sticker\n\n\nKirim gambar dengan caption\n${prefix}sticker <biasa>\n${prefix}sticker nobg <tanpa background>\n\natau Kirim pesan dengan\n${prefix}sticker <link_gambar>`, id)
            }
            break
        case 'stickergif':
        case 'stikergif':
            if (isMedia || isQuotedVideo) {
                if (mimetype === 'video/mp4' && message.duration < 10 || mimetype === 'image/gif' && message.duration < 10) {
                    var mediaData = await decryptMedia(message, uaOverride)
                    bocilClient.reply(from, '⌛ Sedang di proses silahkan tunggu ± 1 min!', id)
                    var filename = `./media/stickergif.${mimetype.split('/')[1]}`
                    await fs.writeFileSync(filename, mediaData)
                    await exec(`gify ${filename} ./media/stickergf.gif --fps=30 --scale=240:240`, async function (error, stdout, stderr) {
                        var gif = await fs.readFileSync('./media/stickergf.gif', { encoding: "base64" })
                        await bocilClient.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
                        .catch(() => {
                            bocilClient.reply(from, '↳ Maaf filenya terlalu besar!', id)
                        })
                    })
                  } else {
                    bocilClient.reply(from, `↳ Kirim gif dengan *${prefix}stickergif* max video 10 sec!`, id)
                   }
                } else {
		    bocilClient.reply(from, `↳ Kirim gif dengan caption *${prefix}stickergif*`, id)
	        }
            break
        case 'stikergiphy':
        case 'stickergiphy':
            if (args.length !== 1) return bocilClient.reply(from, `✘ Format pesan salah.\nKetik pesan dengan *${prefix}stickergiphy* <link_giphy>`, id)
            const isGiphy = url.match(new RegExp(/https?:\/\/(www\.)?giphy.com/, 'gi'))
            const isMediaGiphy = url.match(new RegExp(/https?:\/\/media.giphy.com\/media/, 'gi'))
            if (isGiphy) {
                const getGiphyCode = url.match(new RegExp(/(\/|\-)(?:.(?!(\/|\-)))+$/, 'gi'))
                if (!getGiphyCode) { return bocilClient.reply(from, '✘ Gagal mengambil kode giphy', id) }
                const giphyCode = getGiphyCode[0].replace(/[-\/]/gi, '')
                const smallGifUrl = 'https://media.giphy.com/media/' + giphyCode + '/giphy-downsized.gif'
                bocilClient.sendGiphyAsSticker(from, smallGifUrl).then(() => {
                    bocilClient.reply(from, `☑ Sukses dibuat ${botName}`)
                    console.log(style.msg(`Sticker Processed for ${processTime(t, moment())} Second`))
                }).catch((err) => console.log(err))
            } else if (isMediaGiphy) {
                const gifUrl = url.match(new RegExp(/(giphy|source).(gif|mp4)/, 'gi'))
                if (!gifUrl) { return bocilClient.reply(from, '✘ Gagal mengambil kode giphy', id) }
                const smallGifUrl = url.replace(gifUrl[0], 'giphy-downsized.gif')
                bocilClient.sendGiphyAsSticker(from, smallGifUrl)
                .then(() => {
                    bocilClient.reply(from, `☑ Sukses dibuat ${botName}`)
                    console.log(style.msg(`Sticker Processed for ${processTime(t, moment())} Second`))
                })
                .catch(() => {
                    bocilClient.reply(from, `✘ Ada yang Error!`, id)
                })
            } else {
                await bocilClient.reply(from, '✘ Hanya bisa menggunakan link dari Giphy', id)
            }
            break
        case 'meme':
            if ((isMedia || isQuotedImage) && args.length >= 2) {
                const top = arg.split('|')[0]
                const bottom = arg.split('|')[1]
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const getUrl = await uploadImages(mediaData, false)
                const ImageBase64 = await meme.custom(getUrl, top, bottom)
                bocilClient.sendFile(from, ImageBase64, 'image.png', '', null, true)
                    .then(() => {
                        bocilClient.reply(from, 'Ini makasih!',id)
                    })
                    .catch(() => {
                        bocilClient.reply(from, '✘ Ada yang Error!')
                    })
            } else {
                await bocilClient.reply(from, `Tidak ada gambar! Silahkan kirim gambar dengan caption ${prefix}meme <teks_atas> | <teks_bawah>\ncontoh: ${prefix}meme teks atas | teks bawah`, id)
            }
            break
        case 'quotemaker':
            const qmaker = body.trim().split('|')
            if (qmaker.length >= 3) {
                const quotes = qmaker[1]
                const author = qmaker[2]
                const theme = qmaker[3]
                bocilClient.reply(from, 'Proses kak..', id)
                try {
                    const hasilqmaker = await images.quote(quotes, author, theme)
                    bocilClient.sendFileFromUrl(from, `${hasilqmaker}`, '', 'Ini kak..', id)
                } catch {
                    bocilClient.reply('Yahh proses gagal, kakak isinya sudah benar belum?..', id)
                }
            } else {
                bocilClient.reply(from, `Pemakaian ${prefix}quotemaker |isi quote|author|theme\n\ncontoh: ${prefix}quotemaker |aku sayang kamu|-bocilClient|random\n\nuntuk theme nya pakai random ya kak..`)
            }
            break
        case 'nulis':
            if (args.length == 0) return bocilClient.reply(from, `Membuat bot menulis teks yang dikirim menjadi gambar\nPemakaian: ${prefix}nulis [teks]\n\ncontoh: ${prefix}nulis i love you 3000`, id)
            const nulisq = body.slice(7)
            const nulisp = await rugaapi.tulis(nulisq)
            await bocilClient.sendImage(from, `${nulisp}`, '', 'Nih...', id)
            .catch(() => {
                bocilClient.reply(from, '✘ Ada yang Error!', id)
            })
            break

        //Islam Command
        case 'listsurah':
            try {
                axios.get('https://raw.githubusercontent.com/bocilClientZ/grabbed-results/main/islam/surah.json')
                .then((response) => {
                    let hehex = '╔══✪〘 List Surah 〙✪══\n'
                    for (let i = 0; i < response.data.data.length; i++) {
                        hehex += '╠➥ '
                        hehex += response.data.data[i].name.transliteration.id.toLowerCase() + '\n'
                            }
                        hehex += '╚═〘 *A R U G A  B O T* 〙'
                    bocilClient.reply(from, hehex, id)
                })
            } catch(err) {
                bocilClient.reply(from, err, id)
            }
            break
        case 'infosurah':
            if (args.length == 0) return bocilClient.reply(from, `*_${prefix}infosurah <nama surah>_*\nMenampilkan informasi lengkap mengenai surah tertentu. Contoh penggunan: ${prefix}infosurah al-baqarah`, message.id)
                var responseh = await axios.get('https://raw.githubusercontent.com/bocilClientZ/grabbed-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                var pesan = ""
                pesan = pesan + "Nama : "+ data[idx].name.transliteration.id + "\n" + "Asma : " +data[idx].name.short+"\n"+"Arti : "+data[idx].name.translation.id+"\n"+"Jumlah ayat : "+data[idx].numberOfVerses+"\n"+"Nomor surah : "+data[idx].number+"\n"+"Jenis : "+data[idx].revelation.id+"\n"+"Keterangan : "+data[idx].tafsir.id
                bocilClient.reply(from, pesan, message.id)
              break
        case 'surah':
            if (args.length == 0) return bocilClient.reply(from, `*_${prefix}surah <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}surah al-baqarah 1\n\n*_${prefix}surah <nama surah> <ayat> en/id_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Inggris / Indonesia. Contoh penggunaan : ${prefix}surah al-baqarah 1 id`, message.id)
                var responseh = await axios.get('https://raw.githubusercontent.com/bocilClientZ/grabbed-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = data[idx].number
                if(!isNaN(nmr)) {
                  var responseh2 = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[1])
                  var {data} = responseh2.data
                  var last = function last(array, n) {
                    if (array == null) return void 0;
                    if (n == null) return array[array.length - 1];
                    return array.slice(Math.max(array.length - n, 0));
                  };
                  bhs = last(args)
                  pesan = ""
                  pesan = pesan + data.text.arab + "\n\n"
                  if(bhs == "en") {
                    pesan = pesan + data.translation.en
                  } else {
                    pesan = pesan + data.translation.id
                  }
                  pesan = pesan + "\n\n(Q.S. "+data.surah.name.transliteration.id+":"+args[1]+")"
                  bocilClient.reply(from, pesan, message.id)
                }
              break
        case 'tafsir':
            if (args.length == 0) return bocilClient.reply(from, `*_${prefix}tafsir <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahan dan tafsirnya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}tafsir al-baqarah 1`, message.id)
                var responsh = await axios.get('https://raw.githubusercontent.com/bocilClientZ/grabbed-results/main/islam/surah.json')
                var {data} = responsh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = data[idx].number
                if(!isNaN(nmr)) {
                  var responsih = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[1])
                  var {data} = responsih.data
                  pesan = ""
                  pesan = pesan + "Tafsir Q.S. "+data.surah.name.transliteration.id+":"+args[1]+"\n\n"
                  pesan = pesan + data.text.arab + "\n\n"
                  pesan = pesan + "_" + data.translation.id + "_" + "\n\n" +data.tafsir.id.long
                  bocilClient.reply(from, pesan, message.id)
              }
              break
        case 'alaudio':
            if (args.length == 0) return bocilClient.reply(from, `*_${prefix}ALaudio <nama surah>_*\nMenampilkan tautan dari audio surah tertentu. Contoh penggunaan : ${prefix}ALaudio al-fatihah\n\n*_${prefix}ALaudio <nama surah> <ayat>_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}ALaudio al-fatihah 1\n\n*_${prefix}ALaudio <nama surah> <ayat> en_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Inggris. Contoh penggunaan : ${prefix}ALaudio al-fatihah 1 en`, message.id)
              ayat = "ayat"
              bhs = ""
                var responseh = await axios.get('https://raw.githubusercontent.com/bocilClientZ/grabbed-results/main/islam/surah.json')
                var surah = responseh.data
                var idx = surah.data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = surah.data[idx].number
                if(!isNaN(nmr)) {
                  if(args.length > 2) {
                    ayat = args[1]
                  }
                  if (args.length == 2) {
                    var last = function last(array, n) {
                      if (array == null) return void 0;
                      if (n == null) return array[array.length - 1];
                      return array.slice(Math.max(array.length - n, 0));
                    };
                    ayat = last(args)
                  } 
                  pesan = ""
                  if(isNaN(ayat)) {
                    var responsih2 = await axios.get('https://raw.githubusercontent.com/bocilClientZ/grabbed-results/main/islam/surah/'+nmr+'.json')
                    var {name, name_translations, number_of_ayah, number_of_surah,  recitations} = responsih2.data
                    pesan = pesan + "Audio Quran Surah ke-"+number_of_surah+" "+name+" ("+name_translations.ar+") "+ "dengan jumlah "+ number_of_ayah+" ayat\n"
                    pesan = pesan + "Dilantunkan oleh "+recitations[0].name+" : "+recitations[0].audio_url+"\n"
                    pesan = pesan + "Dilantunkan oleh "+recitations[1].name+" : "+recitations[1].audio_url+"\n"
                    pesan = pesan + "Dilantunkan oleh "+recitations[2].name+" : "+recitations[2].audio_url+"\n"
                    bocilClient.reply(from, pesan, message.id)
                  } else {
                    var responsih2 = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+ayat)
                    var {data} = responsih2.data
                    var last = function last(array, n) {
                      if (array == null) return void 0;
                      if (n == null) return array[array.length - 1];
                      return array.slice(Math.max(array.length - n, 0));
                    };
                    bhs = last(args)
                    pesan = ""
                    pesan = pesan + data.text.arab + "\n\n"
                    if(bhs == "en") {
                      pesan = pesan + data.translation.en
                    } else {
                      pesan = pesan + data.translation.id
                    }
                    pesan = pesan + "\n\n(Q.S. "+data.surah.name.transliteration.id+":"+args[1]+")"
                    await bocilClient.sendFileFromUrl(from, data.audio.secondary[0])
                    await bocilClient.reply(from, pesan, message.id)
                  }
              }
              break
        case 'jsolat':
            if (args.length == 0) return bocilClient.reply(from, `Untuk melihat jadwal solat dari setiap daerah yang ada\nketik: ${prefix}jsolat [daerah]\n\nuntuk list daerah yang ada\nketik: ${prefix}daerah`, id)
            const solatx = body.slice(8)
            const solatj = await rugaapi.jadwaldaerah(solatx)
            await bocilClient.reply(from, solatj, id)
            .catch(() => {
                bocilClient.reply(from, 'Sudah input daerah yang ada dilist?', id)
            })
            break
        case 'daerah':
            const daerahq = await rugaapi.daerah()
            await bocilClient.reply(from, daerahq, id)
            .catch(() => {
                bocilClient.reply(from, '✘ Ada yang Error!', id)
            })
            break
        //Media
        case 'instagram':
            if (args.length == 0) return bocilClient.reply(from, `Untuk mendownload gambar atau video instagram\nketik: *${prefix}instagram [link_ig]*`, id)
            const instag = await rugaapi.insta(args[0])
            await bocilClient.sendFileFromUrl(from, instag, '', '', id)
            .catch(() => {
                bocilClient.reply(from, '✘ ✘ Ada yang Error!', id)
            })
            break
        case 'ytmp3':
            if (args.length == 0) return bocilClient.reply(from, `Untuk mendownload lagu dari youtube\nketik: *${prefix}ytmp3 [link_yt]*`, id)
            rugaapi.ytmp3(args[0])
            .then(async(res) => {
				if (res.status == 'error') return bocilClient.sendFileFromUrl(from, `${res.link}`, '', `${res.judul}`, id)
				if (res.status == 'filesize') return bocilClient.sendFileFromUrl(from, `${res.link}`, '', `${res.judul}`, id)
				await bocilClient.sendFileFromUrl(from, `${res.thumb}`, '', `☑ Data Youtube ditemukan :\n\nJudul: ${res.judul}\n\nUkuran: ${res.size}\n\n⌛ Audio sedang dikirim`, id)
				await bocilClient.sendFileFromUrl(from, `${res.link}`, '', '', id)
			})
            break
        case 'ytmp4':
            if (args.length == 0) return bocilClient.reply(from, `Untuk mendownload video dari youtube\nketik: *${prefix}ytmp4 [link_yt]*`)
            rugaapi.ytmp4(args[0])
            .then(async(res) => {
				if (res.status == 'error') return bocilClient.sendFileFromUrl(from, `${res.link}`, '', `${res.judul}`, id)
				if (res.status == 'filesize') return bocilClient.sendFileFromUrl(from, `${res.link}`, '', `${res.judul}`, id)
				await bocilClient.sendFileFromUrl(from, `${res.thumb}`, '', `☑ Data Youtube ditemukan\n\nJudul: ${res.judul}\n\nUkuran: ${res.size}\n\n⌛ Video sedang dikirim`, id)
				await bocilClient.sendFileFromUrl(from, `${res.link}`, '', '', id)
			})
            break
			
		//Primbon Menu
		case 'artinama':
			if (args.length == 0) return bocilClient.reply(from, `Untuk mengetahui arti nama seseorang\nketik ${prefix}artinama Namanya`, id)
            rugaapi.artinama(body.slice(10))
			.then(async(res) => {
				await bocilClient.reply(from, `Arti : ${res}`, id)
			})
			break
		case 'cekjodoh':
			if (args.length !== 2) return bocilClient.reply(from, `Untuk mengecek jodoh melalui nama\nketik: ${prefix}cekjodoh nama pasangan\n\ncontoh: ${prefix}cekjodoh aku kamu\n\nhanya bisa pakai nama panggilan (satu kata)`)
			rugaapi.cekjodoh(args[0],args[1])
			.then(async(res) => {
				await bocilClient.sendFileFromUrl(from, `${res.link}`, '', `${res.text}`, id)
			})
			break
			
        // Random Kata
        case 'fakta':
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt')
            .then(res => res.text())
            .then(body => {
                let splitnix = body.split('\n')
                let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                bocilClient.reply(from, randomnix, id)
            })
            .catch(() => {
                bocilClient.reply(from, '✘ Ada yang Error!', id)
            })
            break
        case 'katabijak':
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/katabijax.txt')
            .then(res => res.text())
            .then(body => {
                let splitbijak = body.split('\n')
                let randombijak = splitbijak[Math.floor(Math.random() * splitbijak.length)]
                bocilClient.reply(from, randombijak, id)
            })
            .catch(() => {
                bocilClient.reply(from, '✘ Ada yang Error!', id)
            })
            break
        case 'pantun':
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/pantun.txt')
            .then(res => res.text())
            .then(body => {
                let splitpantun = body.split('\n')
                let randompantun = splitpantun[Math.floor(Math.random() * splitpantun.length)]
                bocilClient.reply(from, randompantun.replace(/bocilClient-line/g,"\n"), id)
            })
            .catch(() => {
                bocilClient.reply(from, '✘ Ada yang Error!', id)
            })
            break
        case 'quote':
            const quotex = await rugaapi.quote()
            await bocilClient.reply(from, quotex, id)
            .catch(() => {
                bocilClient.reply(from, '✘ Ada yang Error!', id)
            })
            break

        //Random Images
        case 'anime':
            if (args.length == 0) return bocilClient.reply(from, `Untuk menggunakan ${prefix}anime\nSilahkan ketik: ${prefix}anime [query]\nContoh: ${prefix}anime random\n\nquery yang tersedia:\nrandom, waifu, husbu, neko`, id)
            if (args[0] == 'random' || args[0] == 'waifu' || args[0] == 'husbu' || args[0] == 'neko') {
                fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/' + args[0] + '.txt')
                .then(res => res.text())
                .then(body => {
                    let randomnime = body.split('\n')
                    let randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)]
                    bocilClient.sendFileFromUrl(from, randomnimex, '', 'Nee..', id)
                })
                .catch(() => {
                    bocilClient.reply(from, '✘ Ada yang Error!', id)
                })
            } else {
                bocilClient.reply(from, `Maaf query tidak tersedia. Silahkan ketik ${prefix}anime untuk melihat list query`)
            }
            break
        case 'kpop':
            if (args.length == 0) return bocilClient.reply(from, `Untuk menggunakan ${prefix}kpop\nSilahkan ketik: ${prefix}kpop [query]\nContoh: ${prefix}kpop bts\n\nquery yang tersedia:\nblackpink, exo, bts`, id)
            if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {
                fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
                .then(res => res.text())
                .then(body => {
                    let randomkpop = body.split('\n')
                    let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
                    bocilClient.sendFileFromUrl(from, randomkpopx, '', 'Nee..', id)
                })
                .catch(() => {
                    bocilClient.reply(from, '✘ Ada yang Error!', id)
                })
            } else {
                bocilClient.reply(from, `Maaf query tidak tersedia. Silahkan ketik ${prefix}kpop untuk melihat list query`)
            }
            break
        case 'memes':
            const randmeme = await meme.random()
            bocilClient.sendFileFromUrl(from, randmeme, '', '', id)
            .catch(() => {
                bocilClient.reply(from, '✘ Ada yang Error!', id)
            })
            break
        
        // Search Any
        case 'images':
            if (args.length == 0) return bocilClient.reply(from, `Untuk mencari gambar di pinterest\nketik: ${prefix}images [search]\ncontoh: ${prefix}images naruto`, id)
            const cariwall = body.slice(8)
            const hasilwall = await images.fdci(cariwall)
            await bocilClient.sendFileFromUrl(from, hasilwall, '', '', id)
            .catch(() => {
                bocilClient.reply(from, '✘ Ada yang Error!', id)
            })
            break
        case 'sreddit':
            if (args.length == 0) return bocilClient.reply(from, `Untuk mencari gambar di sub reddit\nketik: ${prefix}sreddit [search]\ncontoh: ${prefix}sreddit naruto`, id)
            const carireddit = body.slice(9)
            const hasilreddit = await images.sreddit(carireddit)
            await bocilClient.sendFileFromUrl(from, hasilreddit, '', '', id)
            .catch(() => {
                bocilClient.reply(from, '✘ Ada yang Error!', id)
            })
	    break
        case 'resep':
            if (args.length == 0) return bocilClient.reply(from, `Untuk mencari resep makanan\nCaranya ketik: ${prefix}resep [search]\n\ncontoh: ${prefix}resep tahu`, id)
            const cariresep = body.slice(7)
            const hasilresep = await resep.resep(cariresep)
            await bocilClient.reply(from, hasilresep + '\n\nIni kak resep makanannya..', id)
            .catch(() => {
                bocilClient.reply(from, '✘ Ada yang Error!', id)
            })
            break
        case 'nekopoi':
             rugapoi.getLatest()
            .then((result) => {
                rugapoi.getVideo(result.link)
                .then((res) => {
                    let heheq = '\n'
                    for (let i = 0; i < res.links.length; i++) {
                        heheq += `${res.links[i]}\n`
                    }
                    bocilClient.reply(from, `Title: ${res.title}\n\nLink:\n${heheq}\nmasih tester bntr :v`)
                })
            })
            .catch(() => {
                bocilClient.reply(from, '✘ Ada yang Error!', id)
            })
            break
        case 'stalkig':
            if (args.length == 0) return bocilClient.reply(from, `Stalk akun instagram seseorang\nketik ${prefix}stalkig [username]\ncontoh: ${prefix}stalkig rizqy.pan`, id)
            const igstalk = await rugaapi.stalkig(args[0])
            const igstalkpict = await rugaapi.stalkigpict(args[0])
            await bocilClient.sendFileFromUrl(from, igstalkpict, '', igstalk, id)
            .catch(() => {
                bocilClient.reply(from, '✘ Ada yang Error!', id)
            })
            break
        case 'wiki':
            if (args.length == 0) return bocilClient.reply(from, `Untuk mencari suatu kata dari wikipedia\nketik: ${prefix}wiki [kata]`, id)
            const wikip = body.slice(6)
            const wikis = await rugaapi.wiki(wikip)
            await bocilClient.reply(from, wikis, id)
            .catch(() => {
                bocilClient.reply(from, '✘ Ada yang Error!', id)
            })
            break
        case 'cuaca':
            if (args.length == 0) return bocilClient.reply(from, `Untuk melihat cuaca pada suatu daerah\nketik: ${prefix}cuaca [daerah]`, id)
            const cuacaq = body.slice(7)
            const cuacap = await rugaapi.cuaca(cuacaq)
            await bocilClient.reply(from, cuacap, id)
            .catch(() => {
                bocilClient.reply(from, '✘ Ada yang Error!', id)
            })
            break
	case 'lirik':
		if (args.length == 0) return bocilClient.reply(from, `Untuk mencari lirik dari sebuah lagu\bketik: ${prefix}lirik [judul_lagu]`, id)
		rugaapi.lirik(body.slice(7))
		.then(async (res) => {
			await bocilClient.reply(from, `Lirik Lagu: ${body.slice(7)}\n\n${res}`, id)
		})
		break
        case 'chord':
            if (args.length == 0) return bocilClient.reply(from, `Untuk mencari lirik dan chord dari sebuah lagu\bketik: ${prefix}chord [judul_lagu]`, id)
            const chordq = body.slice(7)
            const chordp = await rugaapi.chord(chordq)
            await bocilClient.reply(from, chordp, id)
            .catch(() => {
                bocilClient.reply(from, '✘ Ada yang Error!', id)
            })
            break
        case 'ss': //jika error silahkan buka file di folder settings/api.json dan ubah apiSS 'API-KEY' yang kalian dapat dari website https://apiflash.com/
            if (args.length == 0) return bocilClient.reply(from, `Membuat bot men-screenshot sebuah web\n\nPemakaian: ${prefix}ss [url]\n\ncontoh: ${prefix}ss http://google.com`, id)
            const scrinshit = await meme.ss(args[0])
            await bocilClient.sendFile(from, scrinshit, 'ss.jpg', 'cekrek', id)
            .catch(() => {
                bocilClient.reply(from, '✘ Ada yang Error!', id)
            })
            break
        case 'play'://silahkan kalian custom sendiri jika ada yang ingin diubah
            if (args.length == 0) return bocilClient.reply(from, `Untuk mencari lagu dari youtube\n\nPenggunaan: ${prefix}play judul lagu`, id)
            axios.get(`https://arugaytdl.herokuapp.com/search?q=${body.slice(6)}`)
            .then(async (res) => {
                await bocilClient.sendFileFromUrl(from, `${res.data[0].thumbnail}`, ``, `Lagu ditemukan\n\nJudul: ${res.data[0].title}\nDurasi: ${res.data[0].duration}detik\nUploaded: ${res.data[0].uploadDate}\nView: ${res.data[0].viewCount}\n\nsedang dikirim`, id)
                axios.get(`https://arugaz.herokuapp.com/api/yta?url=https://youtu.be/${res.data[0].id}`)
                .then(async(rest) => {
					if (Number(rest.data.filesize.split(' MB')[0]) >= 10.00) return bocilClient.reply(from, '⚠ Maaf ukuran file terlalu besar!')
                    await bocilClient.sendPtt(from, `${rest.data.result}`, id)
                })
                .catch(() => {
                    bocilClient.reply(from, '✘ Ada yang Error!', id)
                })
            })
            .catch(() => {
                bocilClient.reply(from, '✘ Ada yang Error!', id)
            })
            break
        case 'whatanime':
            if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                if (isMedia) {
                    var mediaData = await decryptMedia(message, uaOverride)
                } else {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                }
                const fetch = require('node-fetch')
                const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                bocilClient.reply(from, 'Searching....', id)
                fetch('https://trace.moe/api/search', {
                    method: 'POST',
                    body: JSON.stringify({ image: imgBS4 }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(respon => respon.json())
                .then(resolt => {
                	if (resolt.docs && resolt.docs.length <= 0) {
                		bocilClient.reply(from, 'Maaf, saya tidak tau ini anime apa, pastikan gambar yang akan di Search tidak Buram/Kepotong', id)
                	}
                    const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                    teks = ''
                    if (similarity < 0.92) {
                    	teks = '*Saya memiliki keyakinan rendah dalam hal ini* :\n\n'
                    }
                    teks += `➸ *Title Japanese* : ${title}\n➸ *Title chinese* : ${title_chinese}\n➸ *Title Romaji* : ${title_romaji}\n➸ *Title English* : ${title_english}\n`
                    teks += `➸ *R-18?* : ${is_adult}\n`
                    teks += `➸ *Eps* : ${episode.toString()}\n`
                    teks += `➸ *Kesamaan* : ${(similarity * 100).toFixed(1)}%\n`
                    var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                    bocilClient.sendFileFromUrl(from, video, 'anime.mp4', teks, id).catch(() => {
                        bocilClient.reply(from, teks, id)
                    })
                })
                .catch(() => {
                    bocilClient.reply(from, '✘ Ada yang Error!', id)
                })
            } else {
				bocilClient.reply(from, `Maaf format salah\n\nSilahkan kirim foto dengan caption ${prefix}whatanime\n\nAtau reply foto dengan caption ${prefix}whatanime`, id)
			}
            break
            
        // Other Command
        case 'resi':
            if (args.length !== 2) return bocilClient.reply(from, `Maaf, format pesan salah.\nSilahkan ketik pesan dengan ${prefix}resi <kurir> <no_resi>\n\nKurir yang tersedia:\njne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex`, id)
            const kurirs = ['jne', 'pos', 'tiki', 'wahana', 'jnt', 'rpx', 'sap', 'sicepat', 'pcp', 'jet', 'dse', 'first', 'ninja', 'lion', 'idl', 'rex']
            if (!kurirs.includes(args[0])) return bocilClient.sendText(from, `Maaf, jenis ekspedisi pengiriman tidak didukung layanan ini hanya mendukung ekspedisi pengiriman ${kurirs.join(', ')} Tolong periksa kembali.`)
            console.log('Memeriksa No Resi', args[1], 'dengan ekspedisi', args[0])
            cekResi(args[0], args[1]).then((result) => bocilClient.sendText(from, result))
            break
        case 'tts':
            if (args.length == 0) return bocilClient.reply(from, `Mengubah teks menjadi sound (google voice)\nketik: ${prefix}tts <kode_bahasa> <teks>\ncontoh : ${prefix}tts id halo\nuntuk kode bahasa cek disini : https://anotepad.com/note/read/5xqahdy8`)
            const ttsGB = require('node-gtts')(args[0])
            const dataText = body.slice(8)
                if (dataText === '') return bocilClient.reply(from, 'apa teksnya syg..', id)
                try {
                    ttsGB.save('./media/tts.mp3', dataText, function () {
                    bocilClient.sendPtt(from, './media/tts.mp3', id)
                    })
                } catch (err) {
                    bocilClient.reply(from, err, id)
                }
            break
        case 'translate':
            if (args.length != 1) return bocilClient.reply(from, `Maaf, format pesan salah.\nSilahkan reply sebuah pesan dengan caption ${prefix}translate <kode_bahasa>\ncontoh ${prefix}translate id`, id)
            if (!quotedMsg) return bocilClient.reply(from, `Maaf, format pesan salah.\nSilahkan reply sebuah pesan dengan caption ${prefix}translate <kode_bahasa>\ncontoh ${prefix}translate id`, id)
            const quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
            translate(quoteText, args[0])
                .then((result) => bocilClient.sendText(from, result))
                .catch(() => bocilClient.sendText(from, 'Error, Kode bahasa salah.'))
            break
		case 'covidindo':
			rugaapi.covidindo()
			.then(async (res) => {
				await bocilClient.reply(from, `${res}`, id)
			})
			break
        case 'ceklokasi':
            if (quotedMsg.type !== 'location') return bocilClient.reply(from, `Maaf, format pesan salah.\nKirimkan lokasi dan reply dengan caption ${prefix}ceklokasi`, id)
            console.log(`Request Status Zona Penyebaran Covid-19 (${quotedMsg.lat}, ${quotedMsg.lng}).`)
            const zoneStatus = await getLocationData(quotedMsg.lat, quotedMsg.lng)
            if (zoneStatus.kode !== 200) bocilClient.sendText(from, 'Maaf, Terjadi error ketika memeriksa lokasi yang anda kirim.')
            let datax = ''
            for (let i = 0; i < zoneStatus.data.length; i++) {
                const { zone, region } = zoneStatus.data[i]
                const _zone = zone == 'green' ? 'Hijau* (Aman) \n' : zone == 'yellow' ? 'Kuning* (Waspada) \n' : 'Merah* (Bahaya) \n'
                datax += `${i + 1}. Kel. *${region}* Berstatus *Zona ${_zone}`
            }
            const text = `*CEK LOKASI PENYEBARAN COVID-19*\nHasil pemeriksaan dari lokasi yang anda kirim adalah *${zoneStatus.status}* ${zoneStatus.optional}\n\nInformasi lokasi terdampak disekitar anda:\n${datax}`
            bocilClient.sendText(from, text)
            break
        case 'shortlink':
            if (args.length == 0) return bocilClient.reply(from, `ketik ${prefix}shortlink <url>`, id)
            if (!isUrl(args[0])) return bocilClient.reply(from, 'Maaf, url yang kamu kirim tidak valid.', id)
            const shortlink = await urlShortener(args[0])
            await bocilClient.sendText(from, shortlink)
            .catch(() => {
                bocilClient.reply(from, '✘ Ada yang Error!', id)
            })
            break
		case 'bapakfont':
			if (args.length == 0) return bocilClient.reply(from, `Mengubah kalimat menjadi alayyyyy\n\nketik ${prefix}bapakfont kalimat`, id)
			rugaapi.bapakfont(body.slice(11))
			.then(async(res) => {
				await bocilClient.reply(from, `${res}`, id)
			})
			break
		
		//Fun Menu
		case 'klasmen':
			if (!isGroupMsg) return bocilClient.reply(from, `[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n${infoProblem}`, id)
			const klasemen = db.get('group').filter({id: groupId}).map('members').value()[0]
            let urut = Object.entries(klasemen).map(([key, val]) => ({id: key, ...val})).sort((a, b) => b.denda - a.denda);
            let textKlas = "*Klasemen Denda Sementara*\n"
            let i = 1;
            urut.forEach((klsmn) => {
            textKlas += i+". @"+klsmn.id.replace('@c.us', '')+" ➤ Rp"+formatin(klsmn.denda)+"\n"
            i++
            });
            await bocilClient.sendTextWithMentions(from, textKlas)
			break

        // Group Commands (group admin only)
	    case 'add':
            if (!isGroupMsg) return bocilClient.reply(from, `[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n${infoProblem}`, id)
            if (!isGroupAdmins) return bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id)
            if (!isBotGroupAdmins) return bocilClient.reply(from, '[BOT] Silahkan tambahkan bot sebagai admin grup!', id)
	        if (args.length !== 1) return bocilClient.reply(from, `Untuk menggunakan ${prefix}add\nPenggunaan: ${prefix}add <nomor>\ncontoh: ${prefix}add 628xxx`, id)
                try {
                    await bocilClient.addParticipant(from,`${args[0]}@c.us`)
                } catch {
                    bocilClient.reply(from, 'Tidak dapat menambahkan target', id)
                }
            break
        case 'kick':
            if (!isGroupMsg) return bocilClient.reply(from, `[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n${infoProblem}`, id)
            if (!isGroupAdmins) return bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id)
            if (!isBotGroupAdmins) return bocilClient.reply(from, '[BOT] Silahkan tambahkan bot sebagai admin grup!', id)
            if (mentionedJidList.length === 0) return bocilClient.reply(from, '✘ Format pesan salah.\nSilahkan tag satu atau lebih orang yang akan dikeluarkan', id)
            if (mentionedJidList[0] === botNumber) return await bocilClient.reply(from, `✘ Format pesan salah.\nTidak dapat mengeluarkan ${botName}`, id)
            await bocilClient.sendTextWithMentions(from, `Da dahhh 😘\n${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if (groupAdmins.includes(mentionedJidList[i])) return await bocilClient.sendText(from, 'Dasar member nakal!! Tidak bisa kick Admin')
                await bocilClient.removeParticipant(groupId, mentionedJidList[i])
            }
            break
        case 'promote':
            if (!isGroupMsg) return bocilClient.reply(from, `[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n${infoProblem}`, id)
            if (!isGroupAdmins) return bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id)
            if (!isBotGroupAdmins) return bocilClient.reply(from, '[BOT] Silahkan tambahkan bot sebagai admin grup!', id)
            if (mentionedJidList.length !== 1) return bocilClient.reply(from, 'Lakukan promote per User', id)
            if (groupAdmins.includes(mentionedJidList[0])) return await bocilClient.reply(from, `${mentionedJidList[0]} sudah menjadi Admin`, id)
            if (mentionedJidList[0] === botNumber) return await bocilClient.reply(from, 'Maaf, format pesan salah.\nTidak dapat mempromote akun bot sendiri', id)
            await bocilClient.promoteParticipant(groupId, mentionedJidList[0])
            await bocilClient.sendTextWithMentions(from, `Selamat @${mentionedJidList[0].replace('@c.us', '')} diangkat sebagai admin.`)
            break
        case 'demote':
            if (!isGroupMsg) return bocilClient.reply(from, `[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n${infoProblem}`, id)
            if (!isGroupAdmins) return bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id)
            if (!isBotGroupAdmins) return bocilClient.reply(from, '[BOT] Silahkan tambahkan bot sebagai admin grup!', id)
            if (mentionedJidList.length !== 1) return bocilClient.reply(from, 'Lakukan demote per User', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return await bocilClient.reply(from, `${mentionedJidList}, kasihan kamu masih member :(`, id)
            if (mentionedJidList[0] === botNumber) return await bocilClient.reply(from, 'Maaf, format pesan salah.\nTidak dapat mendemote akun bot sendiri', id)
            await bocilClient.demoteParticipant(groupId, mentionedJidList[0])
            await bocilClient.sendTextWithMentions(from, `Selamat menjadi member lagi hahaha, Hapus jabatan @${mentionedJidList[0].replace('@c.us', '')}.`)
            break
        case 'bye':
            if (!isGroupMsg) return bocilClient.reply(from, `[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n${infoProblem}`, id)
            if (!isGroupAdmins) return bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id)
            bocilClient.sendText(from, 'Selamat jalan, kalian jangan rindu ya :(').then(() => bocilClient.leaveGroup(groupId))
            break
        case 'del':
            if (!isGroupAdmins) return bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id)
            if (!quotedMsg) return bocilClient.reply(from, `Maaf, format pesan salah silahkan.\nReply pesan bot dengan caption ${prefix}del`, id)
            if (!quotedMsgObj.fromMe) return bocilClient.reply(from, `Maaf, format pesan salah silahkan.\nReply pesan bot dengan caption ${prefix}del`, id)
            bocilClient.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case 'tagall':
        case 'everyone':
            if (!isGroupMsg) return bocilClient.reply(from, `[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n${infoProblem}`, id)
            if (!isGroupAdmins) return bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id)
            const groupMem = await bocilClient.getGroupMembers(groupId)
            let hehex = '╔══✪〘 Mention All 〙✪══\n'
            for (let i = 0; i < groupMem.length; i++) {
                hehex += '╠➥'
                hehex += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehex += '╚═〘 *R - B O T* 〙'
            await bocilClient.sendTextWithMentions(from, hehex)
            break
		case 'simisimi':
			if (!isGroupMsg) return bocilClient.reply(from, `[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n${infoProblem}`, id)
			bocilClient.reply(from, `Untuk mengaktifkan simi-simi pada Group Chat\n\nPenggunaan\n${prefix}simi on --mengaktifkan\n${prefix}simi off --nonaktifkan\n`, id)
			break
		case 'simi':
			if (!isGroupMsg) return bocilClient.reply(from, `[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n${infoProblem}`, id)
            if (!isGroupAdmins) return bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id)
			if (args.length !== 1) return bocilClient.reply(from, `Untuk mengaktifkan simi-simi pada Group Chat\n\nPenggunaan\n${prefix}simi on --mengaktifkan\n${prefix}simi off --nonaktifkan\n`, id)
			if (args[0] == 'on') {
				simi.push(chatId)
				fs.writeFileSync('./settings/simi.json', JSON.stringify(simi))
                bocilClient.reply(from, 'Mengaktifkan bot simi-simi!', id)
			} else if (args[0] == 'off') {
				let inxx = simi.indexOf(chatId)
				simi.splice(inxx, 1)
				fs.writeFileSync('./settings/simi.json', JSON.stringify(simi))
				bocilClient.reply(from, 'Menonaktifkan bot simi-simi!', id)
			} else {
				bocilClient.reply(from, `Untuk mengaktifkan simi-simi pada Group Chat\n\nPenggunaan\n${prefix}simi on --mengaktifkan\n${prefix}simi off --nonaktifkan\n`, id)
			}
			break
		case 'katakasar':
			if (!isGroupMsg) return bocilClient.reply(from, `[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n${infoProblem}`, id)
			bocilClient.reply(from, `Untuk mengaktifkan Fitur Kata Kasar pada Group Chat\n\nApasih kegunaan Fitur Ini? Apabila seseorang mengucapkan kata kasar akan mendapatkan denda\n\nPenggunaan\n${prefix}kasar on --mengaktifkan\n${prefix}kasar off --nonaktifkan\n\n${prefix}reset --reset jumlah denda`, id)
			break
		case 'kasar':
			if (!isGroupMsg) return bocilClient.reply(from, `[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n${infoProblem}`, id)
            if (!isGroupAdmins) return bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id)
			if (args.length !== 1) return bocilClient.reply(from, `Untuk mengaktifkan Fitur Kata Kasar pada Group Chat\n\nApasih kegunaan Fitur Ini? Apabila seseorang mengucapkan kata kasar akan mendapatkan denda\n\nPenggunaan\n${prefix}kasar on --mengaktifkan\n${prefix}kasar off --nonaktifkan\n\n${prefix}reset --reset jumlah denda`, id)
			if (args[0] == 'on') {
				ngegas.push(chatId)
				fs.writeFileSync('./settings/ngegas.json', JSON.stringify(ngegas))
				bocilClient.reply(from, 'Fitur Anti Kasar sudah di Aktifkan', id)
			} else if (args[0] == 'off') {
				let nixx = ngegas.indexOf(chatId)
				ngegas.splice(nixx, 1)
				fs.writeFileSync('./settings/ngegas.json', JSON.stringify(ngegas))
				bocilClient.reply(from, 'Fitur Anti Kasar sudah di non-Aktifkan', id)
			} else {
				bocilClient.reply(from, `Untuk mengaktifkan Fitur Kata Kasar pada Group Chat\n\napasih itu? fitur apabila seseorang mengucapkan kata kasar akan mendapatkan denda\n\nPenggunaan\n${prefix}kasar on --mengaktifkan\n${prefix}kasar off --nonaktifkan\n\n${prefix}reset --reset jumlah denda`, id)
			}
			break
		case 'reset':
			if (!isGroupMsg) return bocilClient.reply(from, `[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n${infoProblem}`, id)
            if (!isGroupAdmins) return bocilClient.reply(from, '[Group Admin] Perintah ini hanya digunakan oleh admin grup!', id)
			const reset = db.get('group').find({ id: groupId }).assign({ members: []}).write()
            if(reset){
				await bocilClient.sendText(from, "Klasemen telah direset.")
            }
			break
			
        //Owner Group
        case 'kickall': //mengeluarkan semua member
        if (!isGroupMsg) return bocilClient.reply(from, `[GROUP] Perintah ini hanya dapat digunakan didalam grup!\n${infoProblem}`, id)
        let isOwner = chat.groupMetadata.owner == pengirim
        if (!isOwner) return bocilClient.reply(from, `Perintah ini hanya dapat dipakai oleh R-Dev : @${ownerNumber.replace('@c.us', '')}`  , id)
        if (!isBotGroupAdmins) return bocilClient.reply(from, '[BOT] Silahkan tambahkan bot sebagai admin grup!', id)
            const allMem = await bocilClient.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                if (groupAdmins.includes(allMem[i].id)) {

                } else {
                    await bocilClient.removeParticipant(groupId, allMem[i].id)
                }
            }
            bocilClient.reply(from, 'Success kick all member', id)
        break

        //Owner Bot
        case 'ban':
            if (!isOwnerBot) return bocilClient.reply(from, `Perintah ini hanya dapat dipakai oleh R-Dev : @${ownerNumber.replace('@c.us', '')}` , id)
            if (args.length == 0) return bocilClient.reply(from, 
                // `Untuk banned seseorang agar tidak bisa menggunakan commands\n\nCaranya ketik: \n${prefix}ban add 628xx --untuk mengaktifkan\n${prefix}ban del 628xx --untuk nonaktifkan\n\ncara cepat ban banyak digrup ketik:\n${prefix}ban @tag @tag @tag`
                "Error {Check Source", id)
            if (args[0] == 'add') {
                banned.push(args[1]+'@c.us')
                fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
                bocilClient.reply(from, 'Success banned target!')
            } else
            if (args[0] == 'del') {
                let xnxx = banned.indexOf(args[1]+'@c.us')
                banned.splice(xnxx,1)
                fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
                bocilClient.reply(from, 'Success unbanned target!')
            } else {
             for (let i = 0; i < mentionedJidList.length; i++) {
                banned.push(mentionedJidList[i])
                fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
                bocilClient.reply(from, 'Success ban target!', id)
                }
            }
            break
        case 'bc': //untuk broadcast atau promosi
            if (!isOwnerBot) return bocilClient.reply(from, `Perintah ini hanya dapat dipakai oleh R-Dev : @${ownerNumber.replace('@c.us', '')}`, id)
            if (args.length == 0) return bocilClient.reply(from, 
                // `Untuk broadcast ke semua chat ketik:\n${prefix}bc [isi chat]`
                "Error {Check Source")
            let msg = body.slice(4)
            const chatz = await bocilClient.getAllChatIds()
            for (let idk of chatz) {
                var cvk = await bocilClient.getChatById(idk)
                if (!cvk.isReadOnly) bocilClient.sendText(idk, ` ✼ *R - D E V* ✼\n\n${msg}`)
                if (cvk.isReadOnly) bocilClient.sendText(idk, ` ✼ *R - D E V* ✼\n\n${msg}`)
            }
            bocilClient.reply(from, `@${ownerNumber.replace('@c.us', '')} Broadcast Success! - ${botName}`, id)
            break
        case 'leaveall': //mengeluarkan bot dari semua group serta menghapus chatnya
            if (!isOwnerBot) return bocilClient.reply(from, `Perintah ini hanya dapat dipakai oleh R-Dev : @${ownerNumber.replace('@c.us', '')}`, id)
            const allChatz = await bocilClient.getAllChatIds()
            const allGroupz = await bocilClient.getAllGroups()
            for (let gclist of allGroupz) {
                await bocilClient.sendText(gclist.contact.id, `Maaf bot sedang pembersihan, total chat aktif : ${allChatz.length}`)
                await bocilClient.leaveGroup(gclist.contact.id)
                await bocilClient.deleteChat(gclist.contact.id)
            }
            bocilClient.reply(from, `@${ownerNumber.replace('@c.us', '')} Success leave all group! - ${botName}`, id)
            break
        case 'clearall': //menghapus seluruh pesan diakun bot
            if (!isOwnerBot) return bocilClient.reply(from, `Perintah ini hanya dapat dipakai oleh R-Dev : @${ownerNumber.replace('@c.us', '')}`, id)
            const allChatx = await bocilClient.getAllChats()
            for (let dchat of allChatx) {
                await bocilClient.deleteChat(dchat.id)
            }
            bocilClient.reply(from, `@${ownerNumber.replace('@c.us', '')} Success clear all chat! - ${botName}`, id)
            break
        default:
            break
        }
		
		// Simi-simi function
		if ((!isCmd && isGroupMsg && isSimi) && message.type === 'chat') {
			axios.get(`https://bocilClientz.herokuapp.com/api/simisimi?kata=${encodeURIComponent(message.body)}&apikey=${apiSimi}`)
			.then((res) => {
				if (res.data.status == 403) return bocilClient.sendText(ownerNumber, `${res.data.result}\n\n${res.data.pesan}`)
				bocilClient.reply(from, `Simi berkata: ${res.data.result}`, id)
			})
			.catch((err) => {
				bocilClient.reply(from, `${err}`, id)
			})
		}
		
		// Kata kasar function
		if(!isCmd && isGroupMsg && isNgegas) {
            const find = db.get('group').find({ id: groupId }).value()
            if(find && find.id === groupId){
                const cekuser = db.get('group').filter({id: groupId}).map('members').value()[0]
                const isIn = inArray(pengirim, cekuser)
                if(cekuser && isIn !== false){
                    if(isKasar){
                        const denda = db.get('group').filter({id: groupId}).map('members['+isIn+']').find({ id: pengirim }).update('denda', n => n + 5000).write()
                        if(denda){
                            await bocilClient.reply(from, "Jangan badword bodoh\nDenda +5.000\nTotal : Rp"+formatin(denda.denda), id)
                        }
                    }
                } else {
                    const cekMember = db.get('group').filter({id: groupId}).map('members').value()[0]
                    if(cekMember.length === 0){
                        if(isKasar){
                            db.get('group').find({ id: groupId }).set('members', [{id: pengirim, denda: 5000}]).write()
                        } else {
                            db.get('group').find({ id: groupId }).set('members', [{id: pengirim, denda: 0}]).write()
                        }
                    } else {
                        const cekuser = db.get('group').filter({id: groupId}).map('members').value()[0]
                        if(isKasar){
                            cekuser.push({id: pengirim, denda: 5000})
                            await bocilClient.reply(from, "Jangan badword bodoh\nDenda +5.000", id)
                        } else {
                            cekuser.push({id: pengirim, denda: 0})
                        }
                        db.get('group').find({ id: groupId }).set('members', cekuser).write()
                    }
                }
            } else {
                if(isKasar){
                    db.get('group').push({ id: groupId, members: [{id: pengirim, denda: 5000}] }).write()
                    await bocilClient.reply(from, "Jangan badword bodoh\nDenda +5.000\nTotal : Rp5.000", id)
                } else {
                    db.get('group').push({ id: groupId, members: [{id: pengirim, denda: 0}] }).write()
                }
            }
        }
    } catch (err) {
        console.log(style.err(`${err}`))
    }
}

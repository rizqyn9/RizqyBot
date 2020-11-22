const fs = require('fs-extra')
// const { 
//     prefix
// } = JSON.parse(fs.readFileSync('./settings/setting.json'))
const {botName,
    ownerNumber,
    memberLimit,
    groupLimit,
    prefix,
    waFeed,
    waProblem,
    cacheMessage,
    botVersion} = require('./../bot-setting.json')


exports.textTnC = () => {
    return`
Syarat dan ketentuan penggunaan *${botName}* :

- Dilarang melakukan spam pada ${botName}, terutama menggunakan fitur download.
- Dilarang telepon ke nomor ${botName}, langsung *BLOCK OTOMATIS*.
- Jangan lupa donasi agar ${botName} tetap berjalan (*${prefix}donasi*).
- Semua privasi pengguna akan tetap aman, karena ${botName} ini sepenuhnya dijalankan pada sistem.

Bila terjadi kerusakan atau masalah pada ${botName} bisa hubungi : ${waProblem}`
}



exports.textMenu = (pushname) => {
    return `
    Hai ${pushname}  🥰 ! 
Selamat menggunakan *${botName}* v${botVersion} dari *R - Dev* 🥳

Donasi jika RDP mati
Open jasa pembuatan Bot WA : ${waFeed}
*_JASA_* = [*NOT FREE*]

Kirim perintah dibawah ini untuk menggunakan bot ini

Sticker creator :
➵ *${prefix}sticker*
➵ *${prefix}stickergif*

Tentang Bot:
➵ *${prefix}tnc*
➵ *${prefix}donasi*
➵ *${prefix}ownerbot*

Menu buat bos R-Dev :
➵ *${prefix}ban* 
➵ *${prefix}bc* 
➵ *${prefix}leaveall* 
➵ *${prefix}clearall* 

Jangan lupa react dan donasi ya sob,
*${prefix}donasi*

Terimakasih 😀`
}


exports.textAdmin = () => {
    return `
    [ *Hanya untuk Admin Grup* ]  
    
    ➵ *${prefix}add*
    ➵ *${prefix}kick* @tagUser
    ➵ *${prefix}promote* @tagUser
    ➵ *${prefix}demote* @tagUser
    ➵ *${prefix}tagall*
    ➵ *${prefix}del*
    
    
    Menu buat bos R-Dev
    ➵ *${prefix}kickall*
    `
}


exports.textDonasi = () => {
    return `
    Terimakasih telah menggunakan bot ini, jika RDP mati maka bot tidak dapat digunakan, support developer sewa RDP mahal sob :(
    
    Direct Donasi :
    OVO \t08985665498
    Dana \t08985665498
    GoPay \t08985665498
    Link Aja \t08985665498
    
    Donasi yang masuk akan digunakan untuk pengembangan dan pengoperasian bot R-Bot.
    Terimakasih - Rizqy as DEV`
}

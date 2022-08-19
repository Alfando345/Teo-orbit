/** 
Base: Hisoka
recode: Shizuka Botz BY Alfando

Note: Ubah yang penting saja
INI ASLI YA DEK, GAK USAH BACOD, FREE KALAU MAU MAKE TINGGAL EDIT AJA, GAK USAH EDIT CASE NYA, NANTI ERROR NYALAHIN SCRIPT JELEK
**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// FREE API
global.APIKeys = {
	'https://zenzapis.xyz': '087b253e44',
}

// Other
global.botname = 'AMBATUKAM BOTTTTTTT'                 //ubah jadi nama bot loe
global.instagram = 'https://instagram.com/alfando_3398'   //ubah jadi link instagram kamu(kalau gak punya, gausah di ubah, anggep aia sedekah)
global.groupowner = 'https://chat.whatsapp.com/BdCuLyKLlFOB5F3C7YXGtn' //Ubah jadi link gc kamu, kalau sepi gausah di ubah
global.nomorowner = '6282181552813' //nomor lu
global.ownername = 'Alfn' //your name
global.owner = ['6282181552813'] //isi sama nomor lu, kalau cuma punya 1, salah satu nya di ganti jadi 0 aja
global.premium = ['6282181552813'] //premium
global.packname = 'dibuat oleh bocah yg bernama:'
global.author = 'orang bogor'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Ok.bogor',
    admin: 'Luwh bukan admin Dekk ',
    botAdmin: 'Bot belum admin yh deck',
    owner: 'Lu siapa? Bukan owner gw!!',
    group: '𝚃𝚒𝚍𝚊𝚔 𝚋𝚒𝚜𝚊 𝚍𝚒𝚐𝚞𝚗𝚊𝚔𝚊𝚗 𝚞𝚗𝚝𝚞𝚔 𝚙𝚛𝚒𝚟𝚊𝚝𝚎 𝚌𝚑𝚊𝚝!!!!',
    private: '𝙷𝚊𝚗𝚢𝚊 𝚋𝚒𝚜𝚊 𝚍𝚒𝚐𝚞𝚗𝚊𝚔𝚊𝚗 𝚍𝚒 𝙲𝚑𝚊𝚝 𝚙𝚛𝚒𝚋𝚊𝚍𝚒',
    bot: '𝙺𝚑𝚞𝚜𝚞𝚜 𝚙𝚎𝚗𝚐𝚐𝚞𝚗𝚊 𝚗𝚘𝚖𝚘𝚛 𝚋𝚘𝚝',
    wait: 'Tunggu, orang sabar di sayang aku',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.qris = 'telegra.ph/file/651ab2766e5e695730290.jpg'
global.watermark = 'sync not defineedddd'
global.shizuka = fs.readFileSync('./animeimage/haiyeuoeduhwaj.jpg')
global.thumb = fs.readFileSync('./animeimage/kotnol.jpg')
global.visoka = fs.readFileSync('./video/shiroko.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

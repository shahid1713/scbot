require("./global")

const mess = {
   wait: "`Tunggu Lagi Proses Kak`",
   success: "`Sukses Full Veri-veri good`",
   on: "*`[ On Feature ]` - Sudah Aktif*", 
   off: "*`[ Off Feature ]` - Sudah Off*",
   query: {
       text: "`Teks Nya Mana Kak?`",
       link: "`Link Nya Mana Kak?`",
   },
   error: {
       fitur: "`Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki`",
   },
   only: {
       group: "`Fitur Ini Cuma Bisa Di Akses Di Dalam Group`",
       private: "`Fitur Ini Cuma Bisa Di Akses Di Privat Chat`",
       owner: "`Sok Asik Ngentod`",
       admin: "`Fitur Ini Cuma Bisa Di Akses Oleh Aetmin`",
       badmin: "`Gabisa, Mangkanya Bot Lyzvip Jadiin Aetmin`",
       premium: "Fitur Ini Cuma Bisa Di Akses Oleh Member Prem Lyzvip`",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
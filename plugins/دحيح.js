const uploadImage = require("../lib/uploadFile")
let handler = async (m, {
	conn,
	args,
	usedPrefix,
	command
}) => {
	let text
	if (args.length >= 1) {
		text = args.slice(0).join(" ")
	} else if (m.quoted && m.quoted.text) {
		text = m.quoted.text
	} else return m.reply("• *Example:* .gemini cara menikmati kelamin")
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ""
	let salsa = await conn.reply(m.chat, '```Sedang mencari jawaban...🔍```', m)
	if (!mime) {
			let res = await itz.gemini(text)
			await await conn.sendMessage(m.chat, { text: `${res.result}`, edit: salsa })
			
	} else {
		let media = await q.download()
		let isTele = /image\/(png|jpe?g)/.test(mime)
		let link = await uploadImage(media)
		let res = await itz.geminiimage(text, link)
		await await conn.sendMessage(m.chat, { text: `${res.result}`, edit: salsa })
}
  }
handler.help = ["gemini"].map(a => a + " *<text>*")
handler.tags = ["ai"]
handler.command = /^(gemini)$/i
handler.premium = false
handler.register = true
module.exports = handler

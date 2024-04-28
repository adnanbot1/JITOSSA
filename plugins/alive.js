let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
const pp = '../Menu2.jpg'

let love = `
لوسيفار 

البوت يعمل جيدا %100 𖣐

التواصل مع المطور على واتساب 𖣐

https://wa.me/+967735339177 𖣐
`

conn.sendMessage(m.chat, {text: love, mentions: [m.sender]}, {quoted: m})

//conn.reply(m.chat, `*🚩 Ocurrió un fallo*`, m, fake, )

}
handler.help = ['رست_يحدث البوت']
handler.tags = ['owner']
handler.command = /^(رست)$/i

handler.register = false

export default handler

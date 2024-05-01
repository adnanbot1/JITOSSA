let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let too = `[❗] اعمل لوجو ناروتو\n\n *مـثــال* :\n*${usedPrefix + command}* ZORO`

  if (!text) throw too
  let lr = (`https://shizoapi.onrender.com/api/photooxy/naruto?text=${encodeURIComponent(text)}&apikey=shizo`)
  conn.sendFile(m.chat, lr, 'Bot.png', `تم بواسطه ✅
  BOT⚡AL SOLTAN`, m)
}
handler.help = ['Bot']
handler.tags = ['Bot']
handler.command = ['نارو','لوجو-ناروتو']

export default handler

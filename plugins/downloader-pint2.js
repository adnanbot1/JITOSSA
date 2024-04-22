import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `مالذي تريد البحث عنه في بنترست مثال ?\n\n📌 Example: ${usedPrefix + command} Lil Peep`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `instagram.com/ovmar_1`.trim(), m)
}
handler.help = ['بنترست']
handler.tags = ['downloader']
handler.command = ['بنترست'] 

export default handler

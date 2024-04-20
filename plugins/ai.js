import fetch from "node-fetch";

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw 'تحدث مع الذكاء الإصطناعي بواصطة هاذا الأمر \n\n .تحدث ماهي عاصمه اليمن'
  let anu = await fetch(`https://aemt.me/openai?text=${text}`)
  let data = await anu.json()
  m.reply(data.result)
  }
handler.help = ['تحدث']
handler.tags = ['تحدث']
handler.command = /^(تحدث|openai|gpt)$/i
handler.limit = false

export default handler

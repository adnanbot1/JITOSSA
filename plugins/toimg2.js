let handler = async (m, { conn, usedPrefix, command }) => {
  const notStickerMessage = `✳️ المرجو الاشارة للملصق الذي تريد تحويله لصورة ثم اكتب :\n\n *${usedPrefix + command}*`
  if (!m.quoted) throw notStickerMessage
  const q = m.quoted || m
  let mime = q.mediaType || ''
  if (/webp/.test(mime)) throw notStickerMessage
  let media = await q.download()
  await conn.sendMessage(m.chat, {image: media, caption: '*🍭* \n *_تم تنفيد طلبك_*'}, {quoted: m})
}
handler.help = ['لصوره']
handler.tags = ['sticker']
handler.command = /^(لصوره)$/i
export default handler

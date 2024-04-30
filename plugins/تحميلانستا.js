let fetch = require('node-fetch')

let handler = async (m, { conn, text, command }) => {
  if (!text) return conn.reply(m.chat, `*Example*: ${command} https://www.instagram.com/p/ABC123/`, m)
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let res = await lol.igdl(text)

  if (!res.result || res.result.length === 0) throw 'Tidak dapat menemukan media di link tersebut';
  
  return conn.sendFile(m.chat, res.result[0], '', '', m);

  for (let imgs of res.result) {
    conn.sendFile(m.chat, imgs, '', '', m)
  }
}
handler.help = ['ig', 'igdl', 'instagram'].map(v => v + ' *<url>*')
handler.tags = ['downloader'];
handler.command = /^(ig|igdl|instagram)$/i;

module.exports = handler;

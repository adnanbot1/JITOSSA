import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
await conn.reply(m.chat, global.wait, m)

let type = (command).toLowerCase()

switch (type) {
case 'waifu':
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
   conn.sendFile(m.chat, json.url, null, '*تابع صانع البوت فى وتساب ❤️* \n *https://wa.me/+967735339177*', '', m)
break

case 'neko':
  let _neko = await fetch('https://api.waifu.pics/sfw/neko')
  if (!_neko.ok) throw await _neko.text()
  let neko = await _neko.json()
  if (!neko.url) throw global.error
  conn.sendFile(m.chat, neko.url, null, '*تابع صانع البوت فى وتساب ❤️* \n *https://wa.me/+967735339177*', '', m)
break 

case 'megumin':
  let _megumin = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!_megumin.ok) throw await _megumin.text()
  let megumin = await _megumin.json()
  if (!megumin.url) throw global.error
  conn.sendFile(m.chat, megumin.url, null, '*تابع صانع البوت فى في رقمي ❤️* \n *https://wa.me/+967735339177*', '', m)
break

default:
 }
}

handler.help = ['انمي', 'neko', 'megumin']
handler.tags = ['anime']
handler.command = /^(انمي|neko|megumin)$/i

export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let cristiano = (await axios.get(`https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/CristianoRonaldo.json`)).data  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
conn.sendFile(m.chat, ronaldo, 'error.jpg', `*كريس عمك*\n تم تنفيد طلبك`, m)}
//conn.sendButton(m.chat, "*Siiiuuuuuu*", author, ronaldo, [['⚽ NEXT ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['رونالدو', 'cr7']
handler.tags = ['image-edit']
handler.command = /^(رونالد|cr7)$/i
export default handler

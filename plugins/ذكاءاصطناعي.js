import fetch from   node-fetch 
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `اصبحت تدعم ميزة الذكاء الاصطناعي: يمكنك الان البحث عن البحوث والعروض والترجمة والاجابة عن التمارين والأسئلة كيف ما كان نوعها و بكل اللغات \n شاهد هذا الفيديو لتعرف كيف تشغل هذه الميزة \n https://whatsapp.com/channel/0029VaUTbPnBKfhygQtsJh35 `
try {
let IA2 = await fetch(`https://api.amosayomide05.cf/gpt/?question=${text}&string_id=${m.sender}`)  
let IAR2 = await IA2.json()
m.reply(`${IAR2.response}`.trim())    
} catch {
try {   
let rrEes = await fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let jjJson = await rrEes.json()
m.reply(jjJson.data.data.trim())    
} catch {      
try {    
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=BrunoSobrino&text=${text}&user=${m.sender}`)
let hasill = await tioress.json()
m.reply(`${hasill.result}`.trim())   
} catch {        
throw `*[❗] خطأ*`
}}}}
handler.command = [  openaii  ,   chatgpti  ,   nour   , بوت ,   robot  ]
export default handler

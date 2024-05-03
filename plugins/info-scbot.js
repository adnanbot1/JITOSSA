import { promises } from  fs 
import { join } from  path 

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname,  ../package.json )).catch(_ => ({}))) || {}
  
m.reply(`  
*≡ السكريبت: بوت لوسيفار*  
*بوت لوسيفار هو بوت وسكريبت API يتخصص في إرسال التطبيقات والأغاني ومقاطع الفيديو وغيرها من المحتويات المتعلقة بالهاتف وتطبيقاته.*  

*▢ يمكنك الحصول على السكريبت من هنا:* 

*[ليس هناك سكربت تحت التعديل يمكنك مراسله رقم المطور]*
https://wa.me/+967775317680

`.trim())
    
}

handler.help = [ المطور ]
handler.tags = [ tools ]
handler.command = [ الدعم ,  المطور ,  المطور ] 

export default handler

import fetch from 'node-fetch'
import axios from "axios"

let handler = async (m, { conn, args }) => {
    let spaces = "                "
    if (!args[0]) throw 'أوه... أين الرابط؟'
    try {
        let url = `https://api.lolhuman.xyz/api/tiktokwm?apikey=${global.lolkey}&url=${args[0]}`
        let txt = `🚀 *الرابط:* ${await (await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}`
        await conn.sendFile(m.chat, url, 'tiktokaudio.mp3', `
┏┉━━━━━━━━━━━❏
┆ *يوتيوب MP3*
├┈┈┈┈┈┈┈┈┈┈┈
┆• *العنوان:* 
│• *النوع:* MP3
┆• *📥 حجم الملف:* 
└❏
`.trim(), m, null, {
            document: {
                url: url
            },
            mimetype: 'audio/mpeg',
            fileName: 'tiktok.mp3',
            contextInfo: {
                externalAdReply: {
                    title: '▶︎ ━━━━━━━•────────────────── ',
                    body: 'جاري التشغيل...',
                    description: 'جاري التشغيل...',
                    mediaType: 2,
                    thumbnail: await (await fetch('https://telegra.ph/file/9e323ad1f4b2d52579416.jpg')).arrayBuffer(),
                    mediaUrl: sig
                }
            }
        })
    } catch (e) {
        let ler = await (await fetch("https://api.tikdl.caliphdev.codes/video?url=" + args[0])).json()
        let cer = ler.result
        let cap = `${spaces}*[ T I K T O K ]*

*ID:* ${cer.id}
*العنوان:* ${cer.title}
*تاريخ الإنشاء:* ${cer.created_at}

${spaces}*[ الإحصائيات ]*
*الإعجابات:* ${cer.stats.likeCount}
*التعليقات:* ${cer.stats.commentCount}
*المشاركات:* ${cer.stats.shareCount}
*المشاهدات:* ${cer.stats.playCount}
*الحفظ:* ${cer.stats.saveCount}

${spaces}*[ الصوت ]*
*ID:* ${cer.music.id}
*العنوان:* ${cer.music.title}
*المؤلف:* ${cer.music.author}
*المدة:* ${cer.music.durationFormatted}
`
        await conn.sendFile(m.chat, cer.music.play_url, 'tiktokaudio.mp3', cap, m, null, {
            document: {
                url: cer.music.play_url
            },
            mimetype: 'audio/mpeg',
            fileName: 'tiktok.mp3',
            contextInfo: {
                externalAdReply: {
                    title: '▶︎ ━━━━━━━•────────────────── ',
                    body: 'جاري التشغيل...',
                    description: 'جاري التشغيل...',
                    mediaType: 2,
                    thumbnail: await (await fetch('https://telegra.ph/file/9e323ad1f4b2d52579416.jpg')).arrayBuffer(),
                    mediaUrl: sig
                }
            }
        })
    }
}

handler.tags = ['downloader']
handler.command = /^(تيكتوك)$/i
handler.limit = true

export default handler

import fetch from 'node-fetch';
import cheerio from 'cheerio';

let handler = async (m, { conn, text }) => {
    if (!text) throw 'قدم نصا للبحث عن صورة تشبهه \n\n مثال للإستخدام \n .بحث انمي ون بيس';
    m.react('⌛');
    let msg = encodeURIComponent(text);
    let res = await fetch(`https://www.bing.com/images/create?q=${msg}`);
    let body = await res.text();
    let $ = cheerio.load(body);
    let imageUrl = $('.img_cont').first().find('img').attr('src');
    if (!imageUrl) throw 'No results found for the given query';
    let imageRes = await fetch(imageUrl);
    let buffer = await imageRes.buffer();
    conn.sendFile(m.chat, buffer, 'image.png', `_تم تنفيذ طلبك!_`, m);
    m.react('✅');
}

handler.help = [' بحث<صور عشوائي>'];
handler.tags = ['drawing'];
handler.command = /^بحث/i;

export default handler;

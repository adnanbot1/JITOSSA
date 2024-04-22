import fetch from 'node-fetch';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    if (!text || !args[0]) throw `> حاول أن تقوم بإرسال المستويات او v2 في كل طلب مع كتابة مايدور في مخيلتك \n: ${usedPrefix + command} <aversion> <text>\n\nAvailable verions:\nai\nv1\nv2\nv3\nv4\nv5\nv6\n\nExample: ${usedPrefix + command} v4 cute girl in pink dress`;

    const apiVersion = args[0].toLowerCase();
    const validVersions = ['ai', 'v1', 'v2', 'v3', 'v4', 'v5', 'v6'];

    if (!validVersions.includes(apiVersion)) {
        throw `لايقبل بهاذا المستوى حاول بأحد المستويات المتوفرة: ${validVersions.join(', ')}`;
        m.react('🤐');
    }

    const promptText = args.slice(1).join(' ');

    try {
        let mess = await m.reply(waittt);
        m.react('🖌');

        const endpoint = `https://aemt.me/${apiVersion}/text2img?text=${encodeURIComponent(promptText)}`;
        const response = await fetch(endpoint);

        if (response.ok) {
            const imageBuffer = await response.arrayBuffer();

            //await m.reply({ key: mess.key, text: '> Here generated image...' });
            await conn.sendFile(m.chat, Buffer.from(imageBuffer), 'toon_image.png', `تابعني ياصديقي 😆\n _*https://wa.me/+967735339177*_`, m);
            await m.react('😊');
        } else {
            throw '> خطأ في توليد الصورة حاول لاحقا 🙁';
            m.react('😕');
        }
    } catch {
        throw 'حدث حطأ جاول لاحقا 🙁';
        m.react('😕');
    }
};

handler.help = ['toonai <version> <text>'];
handler.tags = ['drawing'];
handler.command = ['toonai', 'toonimage', 'مستوى'];

export default handler;

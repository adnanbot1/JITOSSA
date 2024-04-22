let handler = async (m, { conn, usedPrefix, command }) => {
    if (!m.mentionedJid[0] && !m.quoted) return m.reply(`✳️ يرجى استخدام الأمر بشكل صحيح\n\n*${usedPrefix + command}* @tag`) 
    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    if (conn.user.jid.includes(user)) return m.reply(`✳️ لا يمكنني طرد البوت تلقائيًا`)

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
    m.reply(`✅ تم طرد العضو بنجاح`) 
}

handler.help = ['طرد']
handler.tags = ['group']
handler.command = ['طرد', 'expulsar'] 
handler.admin = true
handler.group = true
handler.botAdmin = true
handler.premium = true
export default handler

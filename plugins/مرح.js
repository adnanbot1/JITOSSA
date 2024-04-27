function handler(m, { text }) {
  if (!/^[a-zA-Z\s]*$/.test(text)) {
      return m.reply('يرجى إدخال نص باللغة الإنجليزية فقط.');
  }
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  m.reply(teks.replace(/[a-z]/gi, v => {
      return {
          'a': 'كا',
          'b': 'تو',
          'c': 'مي',
          'd': 'تي',
          'e': 'كو',
          'f': 'لو',
          'g': 'جي',
          'h': 'ري',
          'i': 'كي',
          'j': 'زو',
          'k': 'مي',
          'l': 'تا',
          'm': 'رين',
          'n': 'تو',
          'o': 'مو',
          'p': 'نو',
          'q': 'كي',
          'r': 'شي',
          's': 'اري',
          't': 'سي',
          'u': 'دو',
          'v': 'رو',
          'w': 'مي',
          'x': 'نا',
          'y': 'فو',
          'z': 'زي'
      }[v.toLowerCase()] || v
  }))
}
handler.help = ['namaninja'].map(v => v + ' <النص>')
handler.tags = ['مرح']
handler.command = /^(namaninja|namae|اسمنينجا)$/i

export default handler

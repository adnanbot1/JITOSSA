function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}

handler.help = ['المطور']
handler.tags = ['المطور']
handler.command = ['owner', 'creator', 'creador', 'dueño', 'Gowner'] 

export default handler

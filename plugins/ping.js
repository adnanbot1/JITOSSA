import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn }) => {

  let pingMsg = await conn.sendMessage(m.chat, {text: 'جارى حساب سرعة عاصمتك...'})

  let timestamp = speed()

  await exec('neofetch --stdout', async (error, stdout) => {

    let latency = (speed() - timestamp).toFixed(4)

    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `*_نسبه عاصمت قلبك لعدنان 
 ${latency} !_*` 
        }
      }
    }, {})

  })

}

handler.help = ['عاصمة']
handler.tags = ['tools']
handler.command = ['عاصمه', 'speed'] 

export default handler

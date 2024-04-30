let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*🎗️ قـائـمـة الـاوامــر🎗️*'
            },
            body: {
              text: '🧿 افتح القائمة بواسطة الزر\n🍒 لا تلعب كثير في القائمة'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس عليا ',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'عمك لوسيفار',
                        rows: [
                          {
                            header: 'لعرض قائمة البوت',
                            title: '.الاوامر',
                            description: '',
                            id: ''
                          },
                          {
                            header: '👑 قـسـم الـمـطـور',
                            title: '.مطور البوت',
                            description: 'لوسيفار',
                            id: 'لوسيفار'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['القائمة']

export default handler


let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title:  *🎗️ قـائـمـة الـاوامــر🎗️* 
            },
            body: {
              text:  🧿 افتح القائمة بواسطة الزر\n🍒 لا تلعب كثير في القائمة 
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name:  single_select ,
                  buttonParamsJson: JSON.stringify({
                    title:  دوس عليا  ,
                    sections: [
                      {
                        title:  List ,
                        highlight_label:  ON ,
                        rows: [
                          {
                            header:  ☘️ قـسـم الـنـظـام ,
                            title:  .النظام_كود ,
                            description:   ,
                            id:  .الاوامر 
                          },
                          {
                            header:  👑 قـسـم الـمـطـور ,
                            title:  .المطور_كود ,
                            description:   ,
                            id:  967735339177 
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson:   
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = [ info ]
handler.tags = [ main ]
handler.command = [ القائمة ]

export default handler

//تم تطوير هذا الملف بواسطه الجزار وايتاتشي

const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib')
const { download} = require('aptoide-scraper')
cmd({
    pattern: "apk",
    alias: ["تطبيق","downapk","playstore"],
    desc: "download playstore app",
    react: "📥",
    category: "downloader",
    filename: __filename,
},
async (Void, citel, text) => {
if (!text) return
try {
let result = await download(text)
 const applink = result.dllink
    const getname = result.name
    const icon = result.icon
    const lastupdate = result.lastup
    const packagename = result.package
    const size = result.size
      await Void.sendMessage(citel.chat, {
        image: {
            url: icon,
        },
        caption: `
        \n *〖📲┇تـحـمـيـل الـتـطـبـيـقـات┇📲〗*
        \n*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
        
        \n *֎╎اسـم الـتـطبـيـق📚┇* ${getname}
        
        \n *֎╎تـاريـخ الـنـشـر⬆️┇* ${lastupdate}
        
        \n *֎╎اسـم الـحـزمـه💻┇* ${packagename}
        
        \n *֎╎حـجـم الـمـلـف📊┇* ${size}
        
        \n *❬ بوت‌لوسيفَار ❭*`,
    })
    return Void.sendMessage(citel.chat, {
        document: {
            url: applink,
        },
        mimetype: "application/vnd.android.package-archive",
        fileName: getname,
        caption: `👑 *بوت‌عَمك*
👩‍💻 *بوت‌لوسيفَار*`,
    }, {
        quoted: citel,
    });
  } catch (err) {
    console.error(err);
    citel.reply(`*֎╎حـدث خـطـأ حـاول مـره اخـري❌* ${err}`);
  }
})
  //---------------------------------------------------------------------------

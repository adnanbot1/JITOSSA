import fetch from "node-fetch";
import cheerio from "cheerio";

let handler = async (m, { conn, args, text }) => {
    await m.reply(wait)
    if (!text) return m.reply("يرجى إرسال اسم التطبيق الذي تريد البحث عنه")
    try {
        let res = await SearchApk(text)
        let list = res.map((item, index) => `
*العنوان:* ${item.titles}
*الرابط:* ${item.value}`).join("\n")
        let tops = `*📺 بحث عن التطبيقات APK*`
        await m.reply(tops + list)
    } catch (e) {
        await m.reply("حدث خطأ أثناء البحث عن التطبيقات")
    }
}
handler.help = ["بحت تطبيق"]
handler.tags = ["applications"]
handler.command = /^(بحث تطبيق)$/i
export default handler

async function SearchApk(query) {
    // JSON array to store extraction results
    const result = []

    // Fetch the web page
    return await fetch("https://www.apkmirror.com/?s=" + query)
        .then(response => response.text())
        .then(data => {
            // Load HTML using Cheerio
            const $ = cheerio.load(data)

            // Find all span elements with class "appRow"
            $(".appRow").each((index, element) => {
                // Get link from a href inside the current span element
                const link = $(element).find("a").attr("href")
                const titles = $(element).find("a").text()

                // Add data to JSON array
                if (link.startsWith("/apk")) {
                    result.push({
                        titles: titles.split("\n")[0],
                        value: "https://www.apkmirror.com" + link.split("#")[0]
                    })
                }
            })

            // Return the result array
            return result
        })
}

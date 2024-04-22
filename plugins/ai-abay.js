/*iBeng*/
/*لا تحذف علامة الحقوق*/

import fetch from 'node-fetch';

const getyoubotResponse = async (q, u) => {
  try {
    const response = await fetch(`https://api.ibeng.tech/api/others/cai?q=${q}&text=gw abay jomok&apikey=6sPZmDZKLH`);
    const data = await response.json();
    return data.data.output;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const handler = async (m, { text }) => {
  if (!text) throw 'مثال: .abay الرسالة التي ترغب في إيصالها إلى مساعد الذكاء الصناعي';

  m.reply(wait);
  
  try {
    
    const response = await getyoubotResponse(text, m.name);

    m.reply(response);
  } catch (error) {
    console.error('خطأ:', error);
    m.reply(error);
  }
};

handler.help = ['مساعده *النص*'];
handler.tags = ['ai'];
handler.command = /^(مساعده)$/i;

export default handler;

import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
  try {
    let res = await fetch('https://eduscout.vercel.app/api/courses');
    if (!res.ok) throw await res.text();
    let json = await res.json();

    if (!json.courses || json.courses.length < 5) throw 'لم يتم العثور على عدد كافٍ من الدورات';

    let courseData = '•───── ୨❀୧ ─────•\n';

    for(let i = 0; i < 5; i++) {
      let randomIndex = Math.floor(Math.random() * json.courses.length);
      let course = json.courses[randomIndex];
      // إزالة الدورة المختارة من القائمة حتى لا تُختار مرة أخرى
      json.courses.splice(randomIndex, 1);

      courseData += `❖ الدورة: ${course.name}\n❖ الرابط: ${course.udemyLink}\n\n`;
    }

    courseData += '•───── ୨❀୧ ─────•';

    // إرسال بيانات الدورات
    conn.reply(m.chat, courseData, m);
    
  } catch (e) {
    console.error(e);
  } 
}

handler.help = ['دروات'];
handler.tags = ['search'];
handler.command = ['دروات'];

export default handler;

import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, phone, type, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SEND_MAIL_USER,  // .env.local에 저장된 값 사용
      pass: process.env.SEND_MAIL_PW,    // .env.local에 저장된 값 사용
    },
  });

  const mailOptions = {
    from: process.env.SEND_MAIL_USER,
    to: `${process.env.SEND_MAIL_USER}, ${email}`,
    subject: '새로운 문의가 도착했습니다.',
    text: `
      이름: ${name}
      이메일: ${email}
      전화번호: ${phone ? phone : '없음'}
      유형: ${type === 'personal' ? '개인' : '매장'}
      문의 내용: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('메일 전송 실패:', error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}

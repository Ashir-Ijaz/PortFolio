// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { name, email, message } = await req.json();

//     // Use explicit Gmail SMTP to avoid PLAIN auth errors
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//    await transporter.sendMail({
//   from: `"${name}" <${process.env.EMAIL_USER}>`, // visitor's name appears in Gmail
//   to: process.env.EMAIL_USER, // your inbox
//   cc: email,                  // optional: send a copy to the visitor
//   subject: `New message from ${name}`,
//   text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
//   html: `
//     <p><strong>Name:</strong> ${name}</p>
//     <p><strong>Email:</strong> ${email}</p>
//     <p><strong>Message:</strong><br/>${message}</p>
//   `,
// });




//     return NextResponse.json({ success: true });
//   } catch (err: any) {
//     console.error("Email sending error:", err);
//     return NextResponse.json({ success: false, error: err.message }, { status: 500 });
//   }
// }
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Name of visitor shown in From line
      to: process.env.EMAIL_USER, // your inbox
      replyTo: email, // Reply goes to visitor
      subject: `Message from ${name}`, // Subject line
      text: message, // Only the visitor's message
      html: `<p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Email sending error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}


// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { name, email, message } = await req.json();

//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { success: false, error: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS, // Gmail App Password
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       replyTo: email,
//       subject: `New message from ${name}`,
//       text: message,
//       html: `<p><strong>Name:</strong> ${name}</p>
//              <p><strong>Email:</strong> ${email}</p>
//              <p><strong>Message:</strong><br/>${message}</p>`,
//     });

//     return NextResponse.json({ success: true }, { status: 200 });
//   } catch (err) {
//     console.error("Email sending error:", err);
//     return NextResponse.json(
//       { success: false, error: "Failed to send email" },
//       { status: 500 }
//     );
    
//   }
// }

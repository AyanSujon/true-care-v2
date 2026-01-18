
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   try {
//     const data = await req.json();
//     const { name, email, serviceTitle, date, time, duration, totalPrice } = data;

//     if (!email) {
//       return new Response(
//         JSON.stringify({ error: "Email is required" }),
//         { status: 400 }
//       );
//     }

//     // SMTP Transporter
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: process.env.SMTP_SECURE === "true", // true = 465
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     // Email Template
//     const mailOptions = {
//       from: `"True Care" <${process.env.SMTP_USER}>`,
//       to: email,
//       subject: `Booking Invoice for ${serviceTitle}`,
//       html: `
//         <h2>Hi ${name},</h2>
//         <p>Thank you for booking with us! Here are your booking details:</p>
//         <ul>
//           <li><strong>Service:</strong> ${serviceTitle}</li>
//           <li><strong>Date:</strong> ${date}</li>
//           <li><strong>Time:</strong> ${time}</li>
//           <li><strong>Duration:</strong> ${duration} hour(s)</li>
//           <li><strong>Total:</strong> $${Number(totalPrice).toFixed(2)}</li>
//         </ul>
//         <p>We look forward to serving you!</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return new Response(
//       JSON.stringify({ success: true }),
//       { status: 200 }
//     );

//   } catch (error: unknown) {
//     console.error("Email sending error:", error);

//     if (error instanceof Error) {
//       return new Response(
//         JSON.stringify({ error: error.message }),
//         { status: 500 }
//       );
//     }

//     return new Response(
//       JSON.stringify({ error: "Unknown error occurred" }),
//       { status: 500 }
//     );
//   }
// }





















import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, serviceTitle, date, time, duration, totalPrice } = data;

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400 }
      );
    }

    // SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true = 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

// Email Template
const mailOptions = {
  from: `"True Care" <${process.env.SMTP_USER}>`,
  to: email,
  subject: `Booking Invoice for ${serviceTitle}`,
  html: `
  <div style="
      font-family: Arial, sans-serif; 
      background-color: #f4f6f9; 
      padding: 20px;
      color: #333;
    ">
    
    <div style="
        max-width: 600px; 
        margin: auto; 
        background: #ffffff; 
        border-radius: 10px; 
        overflow: hidden; 
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      ">
      
      <!-- Header -->
      <div style="
          background-color: #1E3A8A; 
          padding: 20px; 
          text-align: center; 
          color: white;
        ">
        <h1 style="margin: 0; font-size: 24px;">True Care</h1>
        <p style="margin: 0; font-size: 14px;">Booking Confirmation & Invoice</p>
      </div>

      <!-- Body -->
      <div style="padding: 25px;">
        <h2 style="color: #1E3A8A; margin-top: 0;">Hi ${name},</h2>
        <p style="font-size: 15px; line-height: 1.6;">
          Thank you for choosing <strong>True Care</strong>.  
          Here are your booking details:
        </p>

        <div style="
            background: #f0f4ff; 
            border-left: 4px solid #1E3A8A;
            padding: 15px 20px; 
            margin: 20px 0; 
            border-radius: 6px;
          ">
          <p style="margin: 6px 0; font-size: 15px;"><strong>Service:</strong> ${serviceTitle}</p>
          <p style="margin: 6px 0; font-size: 15px;"><strong>Date:</strong> ${date}</p>
          <p style="margin: 6px 0; font-size: 15px;"><strong>Time:</strong> ${time}</p>
          <p style="margin: 6px 0; font-size: 15px;"><strong>Duration:</strong> ${duration} hour(s)</p>
          <p style="margin: 6px 0; font-size: 15px;"><strong>Total Price:</strong> $${Number(totalPrice).toFixed(2)}</p>
        </div>

        <p style="font-size: 15px; line-height: 1.6;">
          If you have any questions, feel free to reply to this email.  
          We’re always here to help!
        </p>

        <p style="margin-top: 25px; font-size: 15px; color: #1E3A8A; font-weight: bold;">
          — The True Care Team
        </p>
      </div>

      <!-- Footer -->
      <div style="
          text-align: center; 
          padding: 15px; 
          background: #f0f4ff; 
          font-size: 12px; 
          color: #555;
        ">
        © ${new Date().getFullYear()} True Care — All Rights Reserved.
      </div>
    </div>
  </div>
  `,
};


    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (error: unknown) {
    console.error("Email sending error:", error);

    if (error instanceof Error) {
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ error: "Unknown error occurred" }),
      { status: 500 }
    );
  }
}

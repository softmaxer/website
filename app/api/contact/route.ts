import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function isEmpty(inputString?: string) {
  return !inputString || inputString.trim().length === 0;
}

export async function POST(req: Request) {
  const reqBody = await req.json();
  await sendMail(reqBody);
  //res.status(200).send({ message: "Message successfully sent." });
  return NextResponse.json({ status: 200 });
}

async function sendMail(data: {
  username: string;
  email: string;
  message: string;
}) {
  const { username, email, message } = data;
  console.log("From the route function: ", username, email, data);

  await new Promise((resolve, reject) => {
    if (!isEmpty(username) && !isEmpty(message) && !isEmpty(email)) {
      if (email && EMAIL_REGEX.test(email)) {
        // Setup email.
        const mailOptions = {
          from: process.env.OUTBOX_EMAIL,
          to: process.env.INBOX_EMAIL,
          subject: `Message From ${username} - ${email}`,
          text: message + " | Reply to: " + email,
          html: `<div>${message}</div>`,
        };

        // Setup service.
        const transporter = nodemailer.createTransport({
          host: "smtp.zoho.eu",
          secure: true,
          port: 465,
          auth: {
            user: process.env.OUTBOX_EMAIL,
            pass: process.env.OUTBOX_EMAIL_PASSWORD,
          },
        });

        // Send email.
        transporter.sendMail(mailOptions, (err, response) => {
          console.log(response);
          if (err) {
            console.log(err);
            reject(err);
          } else {
            console.log("Email sent", response);
            resolve(response);
          }
        });
      } else {
        reject("Please provide a valid email address.");
      }
    } else {
      reject("The error is not from the form data anymore");
    }
  });
}

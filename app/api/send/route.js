import EmailTemplate from "@/app/_components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  // body of our request - to be sent from the Client-side in our form above
  const { message, email, name } = body;

  // Check if the required fields are present
  if (!message || !email) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // resend declaration with API key as parameter
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // resend function handler for executing email sending
    // returning data and error state to indicate success and failure respecfully
    const { data, error } = await resend.emails.send({
      from: `${email} <onboarding@resend.dev>`,
      to: process.env.RESEND_RECEIVER_EMAIL, //email receiver
      subject: "Message from Portfolio",
      react: EmailTemplate({ email, message }), //using our custom react component to render email content/body
    });

    if (error) {
      return NextResponse.json(
        { message: "Email sending failed", error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}

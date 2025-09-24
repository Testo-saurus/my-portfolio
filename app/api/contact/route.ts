import { Resend } from "resend";
import { EmailTemplate } from "../../../components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(Request) {
  try {
    const requestData = await Request.json();
    const { name, email, message } = requestData;

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["jannikstrohbeck@gmail.com"],
      subject: "Message from Portfolio Page ",
      react: EmailTemplate({ name: name, email: email, message: message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

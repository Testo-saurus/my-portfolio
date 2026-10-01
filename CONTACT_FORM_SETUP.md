# Reusable Contact Form Setup

Use this pattern to send portfolio contact form submissions with **Resend**.

## What it does
- Accepts `name`, `email`, and `message` from a form submission
- Sends the data as an email using Resend
- Renders the email body with a reusable React email template

## Files

### `app/api/contact/route.ts`
```ts
import { Resend } from "resend";
import { EmailTemplate } from "../../../components/email-template";
import type { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const requestData = await request.json();
    const { name, email, message } = requestData;

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["jannikstrohbeck@gmail.com"],
      subject: "Message from Portfolio Page",
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
```

### `components/email-template.tsx`
```tsx
type EmailTemplateProps = {
  name: string;
  email: string;
  message: string;
};

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>Hi, {name} have send you a message!</h1>
      <p>
        Message: <br /> {message}
      </p>

      <p>You can write him back via {email}</p>
    </div>
  );
}
```

## Install dependencies
```bash
npm install resend @react-email/render
```

## Environment variables
```env
RESEND_API_KEY=your_resend_api_key
```

## Notes
- Make sure your `from` address is verified in Resend for production use.
- You can change the `to` address to whichever inbox should receive contact form messages.
- The template text can be adjusted to fit your tone.

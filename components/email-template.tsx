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

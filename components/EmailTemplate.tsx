interface EmailTemplateProps {
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  email,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Message:</strong> {message}
    </p>
  </div>
);

export default EmailTemplate;

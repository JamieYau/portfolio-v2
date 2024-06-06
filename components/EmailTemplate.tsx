import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface EmailTemplateProps {
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ email, message }) => (
  <Html>
    <Head>
      <Preview>New message from Portfolio Site</Preview>
    </Head>
    <Tailwind>
      <Body className="bg-gray-100 font-sans text-black">
        <Container className="borderBlack my-10 rounded-md bg-white">
          <Heading className="mb-0 mt-0 rounded-t-md bg-blue-900 px-10 py-4 text-white">
            New Contact Form Submission
          </Heading>
          <Section className="px-10 py-4">
            <strong>Email from:</strong>
            <Text className="my-1">{email}</Text>
            <Hr className="mb-4" />
            <strong>Message:</strong>
            <Text>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailTemplate;

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
import * as React from "react";

export default function Email() {
  return (
    <Html>
      <Head>
        <Preview>New message from Portfolio Site</Preview>
      </Head>
      <Tailwind>
        <Body className="bg-gray-100 font-sans text-black">
          <Container className="borderBlack my-10 rounded-md bg-white">
            <Heading className="mt-0 rounded-t-md bg-blue-900 px-10 py-4 text-white mb-0">
              New Contact Form Submission
            </Heading>
            <Section className="px-10 py-4">
              <strong>Email from:</strong>
              <Text className="my-1">exampleEmail@me.com</Text>
              <Hr className="mb-4"/>
              <strong>Message:</strong>
              <Text>This is an example message</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

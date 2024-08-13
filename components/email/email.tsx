import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";


import * as React from "react";


const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const TrendEmail = () => (
  <Html>
    <Head />
    <Preview>
      Discover the Latest SaaS Trends with Our Free Starter Kit
    </Preview>
    <Body style={main}>
      <Container style={container}>
        
        <Text style={paragraph}>Hello!</Text>
        <Text style={paragraph}>
          Stay ahead of the curve with our Nizzy Starter Kit, designed to help you leverage the latest SaaS trends and innovations.
        </Text>
        <Text style={paragraph}>
          We’re excited to share our free SaaS Starter Kit with you. This kit includes tools and insights to help you validate and refine your SaaS ideas faster than ever.
        </Text>
        <Text style={paragraph}>
          Check out the GitHub repository to get started and see how you can use these trends to your advantage in your next project!
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://github.com/NizarAbiZaher/nizzy-starter">
            Explore the Starter Kit
          </Button>
        </Section>
        <Text style={paragraph}>
          Best regards,
          <br />
          The Nizzy Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, Ottawa, Canada 94080
        </Text>
      </Container>
    </Body>
  </Html>
);

export default TrendEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
      'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: 'black'
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#1F8EEF",
  borderRadius: "6px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

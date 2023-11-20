import React from "react";
import { Container, Title, Accordion, createStyles } from "@mantine/core";
import { FaqItem } from "@/types";

// Define the styles
const useStyles = createStyles((theme) => ({
  wrapper: {
    margin: "25px auto",
  },
  title: {
    marginBottom: "20px",
  },
  question: {
    
  },
  item: {
    // item styles
  },
}));

const faqItems: FaqItem[] = [
  {
    question: "How do I book a cleaning service through the ICC Realm app?",
    answer:
      "Booking a cleaning service is easy! Simply log into the app, choose the type of cleaning you need, select your preferred date and time, and confirm your booking. You can also view the estimated cost before confirming.",
    key: "book-cleaning",
  },
  {
    question: "Can I reschedule or cancel a booked cleaning service?",
    answer:
      "Yes, you can reschedule or cancel your booking through the app. Please do so at least 24 hours before the scheduled time to avoid any cancellation fees.",
    key: "reschedule-cancel",
  },
  {
    question: "Are cleaning supplies included in the service?",
    answer:
      "Absolutely! Our professional cleaning team comes equipped with all necessary cleaning supplies. If you have specific preferences or requirements, you can specify them in the app while booking.",
    key: "cleaning-supplies",
  },
  {
    question: "What payment methods are accepted in the app?",
    answer:
      "We accept various payment methods, including credit/debit cards, PayPal, and direct bank transfers. All payments are securely processed through our encrypted payment system.",
    key: "payment-methods",
  },
  {
    question: "How can I contact customer support if I have an issue?",
    answer:
      "Our customer support team is available 24/7. You can reach out to us through the app's help section, via email, or directly call us for immediate assistance.",
    key: "customer-support",
  },
];

export default function FAQ() {
  const { classes } = useStyles();

  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        {faqItems.map((item) => (
          <Accordion.Item
            className={classes.item}
            value={item.key}
            key={item.key}
          >
            <Accordion.Control className={classes.question}>
              {item.question}
            </Accordion.Control>
            <Accordion.Panel>{item.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}

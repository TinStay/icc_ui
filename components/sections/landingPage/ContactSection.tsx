import React from "react";
import {
  TextInput,
  Textarea,
  Button,
  Group,
  Box,
  Title,
  createStyles,
  Grid,
  Text,
} from "@mantine/core";

// Define the styles
const useStyles = createStyles((theme) => ({
  wrapper: {
    maxWidth: 1000,
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: theme.radius.xl,
    overflow: "hidden",
    margin: theme.spacing.xs,
    "@media (min-width: 768px)": {
      margin: "0 auto",
    },
  },
  contactInfo: {
    background: theme.colors.blue[5],
    color: "white",
    padding: "50px",
    borderRadius: theme.radius.xl,
    "@media (min-width: 768px)": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  formWrapper: {
    padding: theme.spacing.xl,
    "@media (min-width: 768px)": {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },
  title: {
    marginBottom: theme.spacing.md,
  },
}));

// Define the component
const ContactSection: React.FC = () => {
  const { classes } = useStyles();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Box >
      <Grid className={classes.wrapper}>
        <Grid.Col span={12} md={5} className={classes.contactInfo}>
          <Title order={2}>Contact us</Title>
          <Text size="sm" mt="sm">
            You can reach out to us via email or phone call.  
          </Text>

          <Text mt="xl" weight={600}>
            Email
          </Text>
          <Text size="sm">help.icc@yahoo.com</Text>

          <Text mt="md" weight={600}>
            Phone
          </Text>
          <Text size="sm">+31 6 44244032</Text>

          <Text mt="md" weight={600}>
            Working hours
          </Text>
          <Text size="sm">8 a.m. – 11 p.m.</Text>
        </Grid.Col>

        <Grid.Col span={12} md={7}>
          <Box className={classes.formWrapper}>
            <Title className={classes.title}>Send us a message</Title>
            <form onSubmit={handleSubmit}>
              <TextInput label="Name" placeholder="Your name" required />
              <TextInput
                label="Email"
                placeholder="Your email"
                required
                type="email"
                mt="md"
              />
              <Textarea
                label="Message"
                placeholder="Your message"
                required
                minRows={4}
                mt="md"
              />
              <Group position="right" mt="md">
                <Button type="submit">Send message</Button>
              </Group>
            </form>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default ContactSection;

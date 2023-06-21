import React, { useState } from "react";
import FirebaseAuth from "@/elements/general/auth/FirebaseAuth";
import { AuthAction, withAuthUser } from "next-firebase-auth";
import { useForm } from "@mantine/form";

// Mantine
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Box,
  Button,
  Title,
  Text,
  Anchor,
  Loader,
  Divider,
} from "@mantine/core";
import { createAccountWithEmailAndPassword, loginWithEmailAndPassword } from "@/firebase/auth/helpers";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundImage: 'url("/window_cleaning.jpg")',
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: "100vh",
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const AuthenticationImage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const { classes } = useStyles();


  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const toggleSignUpForm = (e) => {
    e.preventDefault();
    // Reset form values
    form.onReset(e);
    // Change form UI
    setIsSignUp(!isSignUp);
  };

  const onCreateAccountWithEmailAndPassword = async () => {
    setLoading(true);

    // Validate
    form.validate();

    // Register in Firebase Authentication and save user data to Firestore
    await createAccountWithEmailAndPassword(form.values);

    setLoading(false);
  };

  const onLoginWithEmailAndPassword = async () => {
    setLoading(true);

    // Validate
    form.validate();

    // Login to Firebase Authentication
    await loginWithEmailAndPassword(form.values.email, form.values.password);

    setLoading(false);
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          {isSignUp ? "Welcome to ICC Realm" : "Welcome back to ICC Realm"}
        </Title>

        {/* Social media loin */}
        <FirebaseAuth />

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form onReset={form.onReset}>
          {isSignUp ? (
            //  Sign up
            <Box>
              {" "}
              <TextInput
                label="First name"
                placeholder="John"
                size="md"
                {...form.getInputProps("firstName")}
              />
              <TextInput
                label="Last name"
                placeholder="Daniels"
                mt="md"
                size="md"
                {...form.getInputProps("lastName")}
              />
              <TextInput
                label="Email address"
                placeholder="hello@gmail.com"
                mt="md"
                size="md"
                {...form.getInputProps("email")}
              />
              <TextInput
                label="Phone number"
                placeholder="123456789"
                mt="md"
                size="md"
                {...form.getInputProps("phoneNumber")}
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                mt="md"
                size="md"
                {...form.getInputProps("password")}
              />
            </Box>
          ) : (
            //  Login
            <Box>
              <TextInput
                label="Email address"
                placeholder="hello@gmail.com"
                size="md"
                {...form.getInputProps("email")}
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                mt="md"
                size="md"
                {...form.getInputProps("password")}
              />
            </Box>
          )}

          {/* <Checkbox label="Keep me logged in" mt="xl" size="md" /> */}
          <Button
            fullWidth
            mt="xl"
            size="md"
            disabled={loading}
            onClick={() =>
              isSignUp
                ? onCreateAccountWithEmailAndPassword()
                : onLoginWithEmailAndPassword()
            }
          >
            {loading ? <Loader/> : isSignUp ? "Sign up" : "Log in"}
          </Button>
        </form>

        <Text align="center" mt="md">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <Anchor<"a">
            href="#"
            weight={700}
            onClick={(e) => toggleSignUpForm(e)}
          >
            {isSignUp ? "Log in" : "Register"}
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
};

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})(AuthenticationImage);

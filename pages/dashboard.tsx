import React from "react";
import { useAuthUser, withAuthUser, AuthAction } from "next-firebase-auth";
import Loader from "../components/elements/general/Loader";
import { NextPage } from "next";
import Navbar from "@/sections/navbar/Navbar";
import { MenuLinks } from "@/constants";

// Mantine
import { Button } from "@mantine/core";

interface Props {}

const dashboard: NextPage<Props> = () => {
  //auth user object
  const AuthUser = useAuthUser();

  //signout user
  const handleLogout = () => AuthUser.signOut();

  return (
    <div>
      <Navbar links={MenuLinks} />

      <div className="container mx-auto my-10 p-5">
        <h1 className="text-6xl text-center font-extrabold">Dashboard</h1>
        <hr className="my-10 text-gray" />
        <article className="text-center">
          <h2 className="text-navy font-bold text-3xl">
            Your E-Mail is{" "}
            <span className="text-blue hover:underline ">
              {AuthUser.email ? AuthUser.email : "Anonymous"}.
            </span>
            <br />
            <span className="text-coral">You are a Authenticated!</span>
          </h2>

          <button
            className="bg-blue rounded shadow-md p-2 text-white text-lg my-10 font-extrabold"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        </article>
      </div>
    </div>
  );
};

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  LoaderComponent: Loader,
  authPageURL: "/login",
})(dashboard);

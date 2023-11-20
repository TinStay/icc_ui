import React from "react";

// Components
import NavbarLandingPage from "@/sections/navbar/NavbarLandingPage";
import LandingJumbotron from "@/sections/landingPage/LandingJumbotron";
import ContactSection from "@/sections/landingPage/ContactSection";
import BookingForm from "@/sections/bookingForm/BookingForm";
import FAQ from "@/sections/landingPage/FAQ";

// Mantine
import { Space } from "@mantine/core";

function Home({ data }) {
  //{data} is from getStaticProps() exported below.
  return (
    <div>
      <NavbarLandingPage />

      {/* HeroSection */}
      <LandingJumbotron />

      <Space h="4rem" />

      {/* Booking Form */}
      <BookingForm />
      

      <Space h="4rem" />
      {/* FAQ */}
      <FAQ />

      <Space h="4rem" />

      {/* Contact */}
      <ContactSection />

      <Space h="4rem" />
    </div>
  );
}
export default Home
// export async function getStaticProps(context) {
//   //Note: Do not use client functions here!

//   //getDoc function is from Admin SDK.
//   const data = await import("@/FS-admin-functions").then(({ getDoc }) =>
//     getDoc()
//   );

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }

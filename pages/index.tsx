import React from "react" 
import LandingJumbotron from "@/sections/landingPage/LandingJumbotron";
 
export default function Home({ data }) {
  //{data} is from getStaticProps() exported below.
  return (
    <div>
      <LandingJumbotron />
    </div>
  );
}

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

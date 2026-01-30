import Image from "next/image";
// pages/index.js

// import { gql } from "@apollo/client";
// import createApolloClient from "./apollo-client";

export default function Home() {
  return (
    <div className="flex z-0 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          {/*<div className="h-5">A tribute to two wonderful children lost way too soon.</div>*/}
        <video controls width="100%" className="flex z-0">
          <source className="relative z-0" src="https://storage.googleapis.com/evemedia/For%20the%20Children.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

          <video controls width="100%" className="flex z-0">
              <source className="relative z-0" src="https://storage.googleapis.com/evemedia/TopDollar.mov" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
      </main>
    </div>
  );
}

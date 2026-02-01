'use client'
import Image from "next/image";
// pages/index.js

// import { gql } from "@apollo/client";
// import createApolloClient from "./apollo-client";
import Feed from "@/app/components/Feed/Feed";

export default function Home() {
  return (<>
          <button className="flex-col justify-start bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-150 min-w-full mb-2.5">
              To two wonderful kids may they rest in peace.
          </button>
          {/*<div className="h-5">A tribute to two wonderful children lost way too soon.</div>*/}
          <video controls width="100%" className="flex z-0 mb-3">
              <source className="relative z-0" src="https://storage.googleapis.com/evemedia/For%20the%20Children.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          <Feed />
          <video controls width="100%" className="flex z-0">
              <source className="relative z-0" src="https://storage.googleapis.com/evemedia/TopDollar.mov" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
      </>

  );
}

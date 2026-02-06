'use client'
import Image from "next/image";
// pages/index.js

// import { gql } from "@apollo/client";
// import createApolloClient from "./apollo-client";
import Feed from "@/app/components/Feed/Feed";

export default function Home() {
  return (<>
          <Feed />
      </>

  );
}

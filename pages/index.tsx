import Head from "next/head";
// import { TaskContext, TaskProvider } from './taskContext';
import SignIn from "./signIn";
import Tasks from "./tasks";
import { useContext, useState } from "react";
import { Button } from "@mantine/core";

export default function Home(this: any) {
  const [signedIn, setSignedIn] = useState(false)

  return (
    <>
      <Head>
        <title>When Can We Do</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {signedIn ? (
        <Tasks/>
      ) : (
        <SignIn/>
      )}
    </>
  );
}

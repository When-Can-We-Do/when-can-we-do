import Head from "next/head";
import { TaskProvider } from './taskContext';
import SignIn from "./signIn";
import Tasks from "./tasks";
import { useState } from "react";

export default function Home() {
  const [signedIn, setSignedIn] = useState(false)

  return (
    <TaskProvider>
      <Head>
        <title>When Can We Do</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {signedIn ? (
        <Tasks/>
      ) : (
        <SignIn/>
      )}
    </TaskProvider>
  );
}

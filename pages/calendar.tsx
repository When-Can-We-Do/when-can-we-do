import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "@mantine/core";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Calendar() {
  return (
    <>
      <Head>
        <title>When Can We Do</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="grid grid-cols-12 w-full align-text-middle align-middle">
          <div className="col-span-2 text-center">
            <Link href="/addTask">
              <Button
                variant="gradient"
                gradient={{ from: "#045DE9", to: "#09C6F9", deg: 35 }}
                className="color"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 align-middle"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>

                <p className="text-xl align-middle pl-1">Add Task</p>
              </Button>
            </Link>
          </div>
          <div className="col-span-2"></div>
          <div className="col-span-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 float-right align-middle"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </div>
          <div className="col-span-2 text-3xl text-center align-text-middle">
            March
          </div>
          <div className="col-span-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 float-left align-middle"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </div>
          <div className="col-span-2">
            <p className="text-2xl text-center align-text-middle">
              When Can We Do?
            </p>
          </div>
          <div className="col-span-2 text-center">
            <img
              src="Asset 1.png"
              className="w-[35px] align-middle mr-[10px]"
            ></img>
            <Link href="/">
              <Button color={"red"}>Sign out</Button>
            </Link>
          </div>
          <div className="border-b border-black w-full col-span-12 p-5">
            <hr></hr>
          </div>
          <div className=" col-span-12 content-center items-stretch">
            <img
              src="Asset-2.png"
              className="h-[775px] block align-middle m-auto"
            ></img>
          </div>
        </div>
      </main>
    </>
  );
}

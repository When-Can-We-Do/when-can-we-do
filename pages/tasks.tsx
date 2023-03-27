import { Button } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Calendar from "./calendar";
import List from "./list";
import AddTask from "./addTask";

export default function Tasks() {
  const [view, setView] = useState("Calender")
  const [showAddTask, setShowAddTask] = useState(false)

  const changeView = () => {
    if (view === "Calender") {
      setView("List")
    } else {
      setView("Calender")
    }
  }

  const handleAddTask = () => {
    setShowAddTask(true)
  }

  return (
    <>
      <Head>
        <title>When Can We Do</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button onClick={changeView}>{view}</Button>
      <div className="grid grid-cols-12 w-full align-text-middle align-middle">
        <div className="col-span-2 text-center">
          <Button
            variant="gradient"
            gradient={{ from: "#045DE9", to: "#09C6F9", deg: 35 }}
            className="color"
            onClick={handleAddTask}
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
        </div>
        <div className="col-span-2"></div>
        
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
      </div>
      {showAddTask === true ? (
        <AddTask setShowAddTask={setShowAddTask}/>
      ) : (
        view === "Calender" ? (
          <Calendar/>
        ) : (
          <List/>
        )
      )}
    </>
  );
}

import styles from "@/styles/Home.module.css";
import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export default function Calendar(props: any) {
  return (
    <>
      <main className={styles.main}>
        <div className="h-5/6 w-[1200px]">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            height={"750px"}
            events={props.tasks.map((task: any, index: number) => {
              return {
                title: task.title,
                date: task.date?.toISOString().split("T")[0],
              };
            })}
          />
        </div>
        // below is the image example code for the initial design idea
        {/* <div className=" col-span-12 content-center items-stretch">
          <img
            src="Asset-2.png"
            className="h-[775px] block align-middle m-auto"
          ></img>
        </div> */}
      </main>
    </>
  );
}

import styles from "@/styles/Home.module.css";
import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Calendar() {
  return (
    <>
      <main className={styles.main}>
        <div className="h-5/6 w-full">
          <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          height={"750px"}
          events={[
            { title: 'This is a task you have to do', date: '2023-03-01' },
            { title: 'This task as well', date: '2023-03-02' }
          ]}
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

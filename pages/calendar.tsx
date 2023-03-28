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
          // dayMinWidth={"100px"}
          />
        </div>
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

import {
  Text,
  Box,
  Button,
  Card,
  Grid,
  Group,
  Stack,
  Textarea,
  TextInput, Accordion, CloseButton, Checkbox
} from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { DatePicker } from "@mantine/dates";
import styles from "@/styles/Home.module.css";
import { AccordionItem } from "@mantine/core/lib/Accordion/AccordionItem/AccordionItem";
import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { ActionIcon, Tooltip } from "@mantine/core";
import { IconX } from "@tabler/icons";
import { useHover } from "@mantine/hooks";

interface Task {
  title: string;
  date: Date | null;
  completed: boolean;
  description: string;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [description, setDescription] = useState("");
  const [view, setView] = useState("Calendar");
  const [showAddTask, setShowAddTask] = useState(false);
  const [checked, setChecked] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };


  const handleDateChange = (newDate: Date | null) => {
    setDate(newDate);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (taskTitle: string) => {
    setTasks(tasks.filter((task) => task.title !== taskTitle));
  };

  const updateTask = (taskTitle: string, updatedTask: Task) => {
    setTasks(
      tasks.map((task) => (task.title === taskTitle ? updatedTask : task))
    );
  };

  const changeView = () => {
    if (view === "Calendar") {
      setView("List");
    } else {
      setView("Calendar");
    }
  };
  const markComplete = () => {
    if (clicked == true) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }
  const viewAddTask = () => {
    setShowAddTask(true);
  };

  const delTask = () => {};

  return (
    <>
      <Head>
        <title>When Can We Do</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Button className="absolute left-1 top-1" onClick={changeView}>
          {view}
        </Button>
        <div className="grid grid-cols-12 w-full align-text-middle align-middle">
          <div className="col-span-1"></div>
          <div className="col-span-2 text-left">
            <Button
              variant="gradient"
              gradient={{ from: "#045DE9", to: "#09C6F9", deg: 35 }}
              className="color"
              onClick={viewAddTask}
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
          <div className="col-span-1"></div>

          <div className="col-span-4">
            <p className="text-2xl text-center align-text-middle">
              When Can We Do?
            </p>
          </div>
          <div className="col-span-3 text-right">
            <img
              src="Asset 1.png"
              className="w-[35px] align-middle mr-[10px]"
            ></img>
            <Link href="/">
              <Button color={"red"}>Sign out</Button>
            </Link>
          </div>
          <div className="col-span-1"></div>
          <div className="border-b border-black w-full col-span-12 p-5">
            <hr></hr>
          </div>
        </div>
        {showAddTask === true ? (
          <Box className="h-screen bg-white">
            <Box className="w-full h-full flex justify-center content-center flex-wrap">
              <Card
                shadow="sm"
                p="lg"
                radius="md"
                withBorder
                className="w-96 min-h-96 pt-[14px]"
              >
                <Grid columns={7} gutter={0}>
                  <Grid.Col span={7} className="text-3xl">
                    Add Task
                  </Grid.Col>
                  <Stack className="mt-2 w-full">
                    <TextInput
                      label="Task Name"
                      placeholder='e.g. "Do homework"'
                      value={title}
                      onChange={handleTitleChange}
                      required
                    />
                    <Textarea
                      label="Task Description"
                      placeholder='e.g. "Complete HCI homework assignment and then start networking HW"'
                      value={description}
                      onChange={handleDescriptionChange}
                      minRows={4}
                    />
                    <DatePicker
                      allowFreeInput
                      placeholder="Pick date"
                      label="Task Date"
                      onChange={handleDateChange}
                      withAsterisk
                    />
                  </Stack>
                  <Grid.Col span={7}>
                    <Group mt="md" position="apart">
                      <Button
                        onClick={() => {
                          setShowAddTask(false);
                        }}
                        color="red"
                      >
                        Cancel
                      </Button>
                      <SaveButton />
                    </Group>
                  </Grid.Col>
                </Grid>
              </Card>
            </Box>
          </Box>
        ) : view === "Calendar" ? (
          <Calendar />
        ) : (
          <div className="listBox h-full w-full">
            <List />
          </div>
        )}
      </main>
    </>
  );

  function List() {
    const taskGroups: { [date: string]: Task[] } = tasks.reduce(
      (groups, task) => {
        const date = task.date?.toLocaleDateString() ?? "no date";
        if (!groups[date]) {
          groups[date] = [];
        }
        
        groups[date].push(task);
        return groups;
      },
      {} as { [date: string]: Task[] }
    );
    const { hovered, ref } = useHover();
    
    return (
      <Accordion
        chevronPosition="left"
        className="h-[1000px] w-full content-top rounded "
      >
        {Object.keys(taskGroups).map((date) => (
          <Accordion.Item
            value={date}
            key={date}
            className=" w-full text-left bg-gray-100 rounded mb-2"
          >
            <Accordion.Control>{date} </Accordion.Control>
            {taskGroups[date].map((task) => (
              <Accordion.Panel key={task.title}>
                <Accordion chevronPosition="left">
                  <Accordion.Item value={task.title}>
                    <Accordion.Control>        

                        <Group position="apart">
                          <div className="w-full grid grid-cols-12">
                        <Checkbox checked={checked}  onChange={(event) => setChecked(event.currentTarget.checked)} className="m-2 col-span-1"></Checkbox>
                        {checked === false ? (
                        <Box className="m-2 col-span-10">
                          {task.title}
                          </Box>) : (<Box className="m-2 col-span-10 line-through color-gray-100">{task.title}</Box>) }
                          <ActionIcon
                          className="m-2 col-span-1 "
                            variant="filled"
                            size={18}
                            color="red"
                            onClick={() => {
                            removeTask(task.title);
                            }}
                            >
                            <IconX size={16} />
                          </ActionIcon></div>
                        </Group>
                      </Accordion.Control>
                      {checked === false ? (
                    <Accordion.Panel> 
                    
                      {task.description}
                    </Accordion.Panel> ) : 
                    (<Accordion.Panel className="line-through color-gray-100">
                      {task.description}
                    </Accordion.Panel>)}
                  </Accordion.Item>
                </Accordion>
              </Accordion.Panel>
            ))}
          </Accordion.Item>
        ))}
      </Accordion>
    );
  }

  function SaveButton() {
    const saveTask = () => {
      const task = {
        title: title,
        date: date,
        completed: false,
        description: description,
      };

      addTask(task);
      setShowAddTask(false);
    };

    return <Button onClick={saveTask}>Save</Button>;
  }

  function Calendar() {
    // const showDeleteButton = (data: any) => {
    //   console.log(data);
    // };

    // const hideDeleteButton = (data: any) => {
    //   console.log(data);
    // };

    const renderEventContent = (data: any) => {
      return <EventContent data={data}></EventContent>;
    };

    return (
      <>
        <main className={styles.main}>
          <div className="h-5/6 w-[1200px]">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              height={"750px"}
              events={tasks.map((task: any, index: number) => {
                return {
                  title: task.title,
                  date: task.date?.toISOString().split("T")[0],
                  description: task.description,
                };
              })}
              eventContent={renderEventContent}
            />
          </div>
          {/* // below is the image example code for the initial design idea */}
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

  function EventContent(props: any) {
    const event = props.data.event;
    const { hovered, ref } = useHover();
    console.log("Calendar event: ");
    console.log(event);
    return (
      <Tooltip
        multiline
        withArrow
        label={event.extendedProps.description}
        position="right"
      >
        <div ref={ref}>
          {hovered ? (
            <Group position="apart">
              
                {clicked ? (<Box onClick={() => (markComplete())}> {event.title}</Box>) : (<Box onClick={() => (markComplete())} className="line-through">{event.title}</Box>)  }
              <ActionIcon
                variant="filled"
                size={18}
                color="red"
                onClick={() => {
                  removeTask(event.title);
                }}
              >
                <IconX size={16} />
              </ActionIcon>
            </Group>
          ) : (<div>
            {clicked ? (<Box onClick={() => (markComplete())}> {event.title}</Box>) : (<Box onClick={() => (markComplete())} className="line-through">{event.title}</Box>)  }
            </div>
          )}
        </div>
      </Tooltip>
    );
  }
}

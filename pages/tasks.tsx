import { Text, Box, Button, Card, Grid, Group, Stack, Textarea, TextInput } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Calendar from "./calendar";
import { DatePicker } from "@mantine/dates";
import styles from "@/styles/Home.module.css";
import { Accordion } from '@mantine/core';
import { AccordionItem } from "@mantine/core/lib/Accordion/AccordionItem/AccordionItem";


interface Task {
  title: string;
  date: Date | null;
  completed: boolean;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("")
  const [date, setDate] = useState<Date | null>(null)
  const [view, setView] = useState("Calender")
  const [showAddTask, setShowAddTask] = useState(false)
  
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (newDate: Date | null) => {
    setDate(newDate);
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
    if (view === "Calender") {
      setView("List")
    } else {
      setView("Calender")
    }
  }

  const viewAddTask = () => {
    setShowAddTask(true)
  }

  const delTask = () => {

  }

  return (
    <>
      <Head>
        <title>When Can We Do</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Button className="absolute left-1 top-1" onClick={changeView}>{view}</Button>
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
                      <Button onClick={() => {setShowAddTask(false)}} color="red">Cancel</Button>
                    <SaveButton/>
                  </Group>
                </Grid.Col>
              </Grid>
            </Card>
          </Box>
        </Box>
      ) : (
        view === "Calender" ? (
          <Calendar/>
        ) : (
          <div className="listBox h-full w-full">
            <List/>
          </div>
        )
      )}
      </main>
    </>
  );

  function List() {
    const taskGroups: { [date: string]: Task[] } = tasks.reduce((groups, task) => {
      const date = task.date?.toLocaleDateString() ?? 'no date';
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(task);
      return groups;
    }, {} as { [date: string]: Task[] });
  
    return (
      <Accordion className="h-[750px] w-full content-top ">
        {Object.keys(taskGroups).map((date) => (
          <Accordion.Item value={date} key={date} className=" w-full text-left bg-gray-100 p-1 m-2">
             <Accordion.Control>{date} </Accordion.Control>
            {taskGroups[date].map((task) => (
              <Accordion.Panel key={task.title}>
                <Accordion>
                  <Accordion.Item value = {task.title}>
                    <Accordion.Control>
                      {task.title}
                    </Accordion.Control>
                    <Accordion.Panel>
                      // task Description will go here
                    </Accordion.Panel>
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
        completed: false
      };
  
      addTask(task)
      setShowAddTask(false)
    }

    return <Button onClick={saveTask}>Save</Button>;
  }
}

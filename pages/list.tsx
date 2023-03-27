import { Text } from "@mantine/core";
import { useContext } from "react";
import { TaskContext } from './taskContext';

export default function List() {
  const { tasks } = useContext(TaskContext);

  return (
    <>
        <div className="listBox">
        {tasks.map((task, key) => (
            <div key={key}>
                <Text key={key}>{task.title}</Text>
                {/* {date.tasks.map((task, key) => (
                    <text key={key}>{task}</text>
                ))} */}
            </div>
        ))}

        {/* {taskList.dates.map((date, key) => (
            <div key={key}>
                <Text key={key}>{date.date}</Text>
                {date.tasks.map((task, key) => (
                    <text key={key}>{task}</text>
                ))}
            </div>
        ))} */}
        </div>
    </>
  );
}

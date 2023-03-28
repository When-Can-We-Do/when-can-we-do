import { Text } from "@mantine/core";

interface Task {
    title: string;
    date: Date | null;
    completed: boolean;
  }

export default function List(tasks: Task[]) {

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

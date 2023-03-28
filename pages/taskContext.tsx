import React, { createContext, useState } from "react";

interface Task {
  title: string;
  date: Date | null;
  completed: boolean;
}

interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (taskTitle: string) => void;
  updateTask: (taskTitle: string, updatedTask: Task) => void;
}

const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  updateTask: () => {},
});

type TaskProviderProps = {
  children: React.ReactNode;
};

const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
    console.log("hello");
  };

  const removeTask = (taskTitle: string) => {
    setTasks(tasks.filter((task) => task.title !== taskTitle));
  };

  const updateTask = (taskTitle: string, updatedTask: Task) => {
    setTasks(
      tasks.map((task) => (task.title === taskTitle ? updatedTask : task))
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
export type { Task };

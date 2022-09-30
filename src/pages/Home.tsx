import { useState } from 'react'
import { toast } from 'react-toastify'

import { Header } from "../components/Header"
import { TaskCreator } from "../components/TaskCreator"
import { EmptyTasks } from "../components/EmptyTasks"
import { Task } from "../components/Task"

import { Tasks } from '../components/Task/Task'

import styles from './Home.module.css'

export const Home = () => {
  const { home, h__counters, hc__created, hc__completed, hcc__number } = styles
  
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const completedTasksCount = tasks.filter(task => task.isCompleted !== false).length

  const createNewTask = (content: string) => {
    const taskAlreadyExists = tasks.find(task => task.content === content)

    taskAlreadyExists
      ? toast.info("Can't create a task that exists", { theme: 'dark' })
      : setTasks([
        { id: tasks.length + 1, isCompleted: false, content },
        ...tasks
      ])
  }

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task => task.id === id
      ? {...task, isCompleted: !task.isCompleted}
      : {...task}
    ));
  }

  const deleteExistingTask = (id: number) => {
    const filteredTaskList = tasks.filter(task => task.id !== id)
    setTasks(filteredTaskList)
  }

  return (
    <>
      <Header />

      <section className={home}>
        <TaskCreator onCreateTask={createNewTask} />

        <div className={h__counters}>
          <strong className={hc__created}>
            <span>Tasks created</span>
            <span className={hcc__number}>{tasks.length}</span>
          </strong>

          <strong className={hc__completed}>
            <span>Completed</span>
            <span className={hcc__number}>{completedTasksCount} de {tasks.length}</span>
          </strong>
        </div>

        { tasks.length === 0
          ? <EmptyTasks />
          : tasks.map(task => (
            <Task
              task={task}
              key={task.id}
              onDeleteTask={deleteExistingTask}
              onToggleTaskCompletion={toggleTaskCompletion}
            />
          ))
        }
      </section>
    </>
  )
}
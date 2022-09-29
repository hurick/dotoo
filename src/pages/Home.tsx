import { useState } from 'react'

import { Header } from "../components/Header"
import { TaskCreator } from "../components/TaskCreator"
import { EmptyTasks } from "../components/EmptyTasks"
import { Task } from "../components/Task"

import { Tasks } from '../components/Task/Task'

import styles from './Home.module.css'

export const Home = () => {
  const {
    home, h__counters,
    hc__created, hc__completed,
    hcc__number
  } = styles
  
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const createNewTask = (content: string) => {
    setTasks([
      { id: tasks.length + 1, isCompleted: false, content },
      ...tasks
    ])
  }

  const deleteExistingTask = (id: number) => {
    const filtedTaskList = tasks.filter(task => task.id !== id)
    setTasks(filtedTaskList)
  }

  return (
    <>
      <Header />

      <section className={home}>
        <TaskCreator
          onCreateTask={createNewTask}
        />

        <div className={h__counters}>
          <strong className={hc__created}>
            <span>Tasks created</span>
            <span className={hcc__number}>{tasks.length}</span>
          </strong>

          <strong className={hc__completed}>
            <span>Completed</span>
            <span className={hcc__number}>0 de 0</span>
          </strong>
        </div>

        { tasks.length === 0
            ? <EmptyTasks />
            : tasks.map(task => (
              <Task
                key={task.id}
                task={task}
                onDeleteTask={deleteExistingTask}
              />
            ))
        }
      </section>
    </>
  )
}
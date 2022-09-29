import { Header } from "../components/Header"
import { TaskCreator } from "../components/TaskCreator"
import { EmptyTasks } from "../components/EmptyTasks"

import styles from './Home.module.css'

export const Home = () => {
  const {
    home, h__counters,
    hc__created, hc__completed,
    hcc__number
  } = styles

  return (
    <>
      <Header />

      <section className={home}>
        <TaskCreator />

        <div className={h__counters}>
          <strong className={hc__created}>
            <span>Tasks created</span>
            <span className={hcc__number}>0</span>
          </strong>

          <strong className={hc__completed}>
            <span>Completed</span>
            <span className={hcc__number}>0</span>
          </strong>
        </div>

        <EmptyTasks />
      </section>
    </>
  )
}
import { Header } from "../components/Header"
import { TaskCreator } from "../components/TaskCreator";

import styles from './Home.module.css'

export const Home = () => {
  const { home } = styles;

  return (
    <>
      <Header />

      <section className={home}>
        <TaskCreator />
      </section>
    </>
  )
}
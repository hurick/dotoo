import { PlusCircle } from 'phosphor-react'

import styles from './TaskCreator.module.css'

export const TaskCreator = () => {
  const { taskForm, t__input, t__create } = styles;

  const handleNewTask = () => {}

  return (
    <form onSubmit={handleNewTask} className={taskForm}>
      <input
        className={t__input}
        name="task"
        type="text"
        placeholder="Need to trim the grass before late afternoon..." 
      />
      
      <button className={t__create} type="submit">
        <span>Create</span>
        <PlusCircle size={18} />
      </button>
    </form>
  )
}
import { FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import styles from './TaskCreator.module.css'

interface TaskCreatorProps {
  onCreateTask: (content: string) => void
}

export const TaskCreator = ({ onCreateTask }: TaskCreatorProps) => {
  const { taskForm, t__input, t__create } = styles

  const [taskText, setTaskText] = useState<string>("")

  const handleNewTask = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    onCreateTask(taskText)
    setTaskText('')
  }

  return (
    <form onSubmit={data => handleNewTask(data)} className={taskForm}>
      <input
        name="task"
        type="text"
        value={taskText}
        className={t__input}
        onChange={ev => setTaskText(ev.target.value)}
        placeholder="Need to trim the grass before late afternoon..."
      />
      
      <button
        type="submit"
        className={t__create}
        disabled={taskText === ''}
      >
        <span>Create</span>
        <PlusCircle size={18} />
      </button>
    </form>
  )
}
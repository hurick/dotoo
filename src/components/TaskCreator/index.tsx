import { FormEvent, useState } from 'react'

import { PlusCircle } from 'phosphor-react'

import styles from './TaskCreator.module.css'

interface TaskCreatorProps {
  onCreateTask: (content: string) => void
  isExistingTask: boolean
}

export const TaskCreator = ({ onCreateTask, isExistingTask }: TaskCreatorProps) => {
  const { taskForm, t__input, t__create } = styles

  const [taskText, setTaskText] = useState<string>("")

  const handleNewTask = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    onCreateTask(taskText)

    !isExistingTask && setTaskText('')
  }

  return (
    <form onSubmit={data => handleNewTask(data)} className={taskForm}>
      <input
        required
        className={t__input}
        name="task"
        type="text"
        placeholder="Need to trim the grass before late afternoon..."
        onChange={ev => setTaskText(ev.target.value)}
        value={taskText}
      />
      
      <button
        className={t__create}
        type="submit"
        disabled={taskText === ''}
      >
        <span>Create</span>
        <PlusCircle size={18} />
      </button>
    </form>
  )
}
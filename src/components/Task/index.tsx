import { ChangeEvent, useState } from 'react'
import { Trash, Check } from 'phosphor-react'

import { Tasks } from './Task'

import styles from './Task.module.css'

interface TaskProps {
  task: Tasks
  onDeleteTask: (id: number) => void
  onToggleTaskCompletion: (id: number) => void
}

export const Task = ({ task, onDeleteTask, onToggleTaskCompletion }: TaskProps) => {
  const {
    taskItem, ti__hiddenCheckbox, ti__checkbox,
    ti__content, ti__delete, tic__check, is__checked
  } = styles

  const [isChecked, setIsChecked] = useState<boolean>(false)
  const TASK_STYLES = !isChecked ? taskItem : `${taskItem} ${is__checked}`

  const handleTaskChecked = (ev: ChangeEvent<HTMLInputElement>, id: number) => {
    setIsChecked(ev.target.checked)
    onToggleTaskCompletion(id)
  }

  const handleDeleteTask = (id: number) => onDeleteTask(id)

  return (
    <div className={TASK_STYLES}>
      <input
        type="checkbox"
        name="isComplete"
        id={task.id.toString()}
        className={ti__hiddenCheckbox}
        onChange={ev => handleTaskChecked(ev, task.id)}
      />

      <label
        className={ti__checkbox}
        htmlFor={task.id.toString()}
      >
        <Check className={tic__check} />
      </label>

      <p className={ti__content}>
        { task.content }
      </p>

      <button
        type="button"
        className={ti__delete}
        title="Delete this task"
        onClick={() => handleDeleteTask(task.id)}
      >
        <Trash size={24} />
      </button>
    </div>
  )
}
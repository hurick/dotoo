import { ClipboardText } from 'phosphor-react'

import styles from './EmptyTasks.module.css'

export const EmptyTasks = () => {
  const { emptyTasks, e__content, ec__title, ec__subtitle } = styles

  return (
    <div className={emptyTasks}>
      <ClipboardText size={56} color="#333" />

      <div className={e__content}>
        <strong className={ec__title}>
          You don't have any created tasks
        </strong>

        <span className={ec__subtitle}>
          Create and organize your items
        </span>
      </div>
    </div>
  )
}
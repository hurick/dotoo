import iconRocket from '../../assets/rocket.svg'

import styles from './Header.module.css'

export const Header = () => {
  const { header, h__logo, hl__title, hlt__detail } = styles

  return (
    <header className={header}>
      <div className={h__logo}>
        <img src={iconRocket} alt="Rocket" />

        <h1 className={hl__title}>
          do<span className={hlt__detail}>too</span>
        </h1>
      </div>
    </header>
  )
}
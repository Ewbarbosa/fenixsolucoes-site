import style from './style.module.scss'

import { FaSpinner } from 'react-icons/fa'

export function Loading() {
  return (
    <>
      <div className={style.loading}>
        <FaSpinner color='#fff' size={50} />
      </div>
    </>
  )
}
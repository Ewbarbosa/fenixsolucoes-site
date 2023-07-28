import { ReactNode, ButtonHTMLAttributes } from 'react'

import style from './style.module.scss'

import { FaSpinner } from 'react-icons/fa'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean,
  children: ReactNode
}

export function Button({loading, children, ...rest }: ButtonProps) {
  return (
    <button
      className={style.button}
      disabled={loading}
      {...rest}
    >
      {loading ? (
        <FaSpinner color='#fff' size={16} />
      ) : (
        <a className={style.buttonText}>
          {children}
        </a>
      )}      
    </button>
  )
}
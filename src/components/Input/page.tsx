import style from './style.module.scss'

// tipagem dos inputs
import { HtmlHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

// interface inputProps extendendo o InputHTMLAttributes
//utilizado para pegar os atributos/propriedades dos componentes e torná-los dinamicos
interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

export function Input({ ...rest }: InputProps) {

  return (
    <input className={style.input} {...rest}>

    </input>
  )
}

export function TextArea({ ...rest }: TextAreaProps) {
  return (
    <textarea className={style.input} {...rest}>

    </textarea>
  )
}
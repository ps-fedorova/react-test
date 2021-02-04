import React from "react"
import s from "./Input.module.css"

const MultipleInput = () => {

  const arr = [
    'Большие города',
    'Пустые поезда',
    'Ни берега, ни дна',
    'Все начинать сначала',
    'Холодная война',
    'И время как вода',
    'Он не сошел с ума',
    'Ты ничего не знала',
  ]

  return (
    <form className={s.form}>
      <ul className={s.form__ul}>
        {arr.map((item, index) => {
          return (
            <li key={index}>
              <label className={s.form__label} htmlFor={index} >{item}</label>
              <input className={s.form__input} id={index} type="text"/>
            </li>
          )
        })
        }
      </ul>

    </form>
  )
}

export default MultipleInput

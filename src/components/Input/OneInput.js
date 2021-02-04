import React from "react"
import "./Input.module.css"
import s from "./Input.module.css";

const OneInput = () => {
  return (
    <form className={s.form}>
      <label>
        <input type="text"/>
      </label>
    </form>
  )
}

export default OneInput

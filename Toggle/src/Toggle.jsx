import { useEffect, useState } from 'react'
import styles from './Toggle.module.css'

export default function Toggle() {

  const [currentstate, setCurrentState] = useState("false")

  // useEffect=()=>{{currentstate ? setCurrentState("false") : setCurrentState("true")}}

  // HandleState=()=>

  return (
    <button onClick={currentstate ? setCurrentState((currentstate) => {!currentstate}) : setCurrentState("true")}>{currentstate}</button>
  )
}

//
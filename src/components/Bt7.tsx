import React, { useState } from 'react'

export default function Bt7() {
    const [state,setState] = useState<number[]>([])
    const newState:number[] = [...state]
    const addNumber = () =>{
        newState.push(Math.floor(Math.random() * 9) + 1)
        setState(newState)
    }
  return (
    <div>Bài tập 7
        <div>Mảng số: [{state.join(",")}]</div>
        <button onClick={addNumber}>Add element</button>
    </div>
  )
}

import React, { useState } from 'react'

export default function Bt8() {
    const[cout,setCout] = useState<number>(0)
    const ChangCout = () => {
        setCout(cout + 1)
    }
  return (
    <div>Bài tập 8 <br />
        <button onClick={ChangCout}>Click {cout} lần</button>
    </div>
  )
}

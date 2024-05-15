import React, { useState } from 'react'

export default function Bt1(){
    const [fun,setState] = useState<string>("click me")
    const clickChange = ()=>{
        if(fun === "click me"){
            setState("clicked")
        }else{
            setState("click me")
        }
    }
  return (
    <div>Bài tập 1 <br />
        <button onClick={clickChange}>{fun}</button>
    </div>
  )
}

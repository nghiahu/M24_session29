import React, { useState } from 'react'

export default function Function() {
    const [name,setName] = useState<string>("hoa")
    /*
    
    Event: sự kiện 
    onclick
    onchange
    oninput
    onkeydow
    onkeyup
    */
   const handleChange =()=> {
      if(name === "hoa"){
        setName("Cường")
      }else{
        setName("hoa")
      }
   }
  return (
    <div>Function
        <p>{name}</p>
        <button onClick={handleChange}>ChangeName</button>
    </div>
  )
}

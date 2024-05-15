import React, { useState } from 'react'

export default function Bt10(){
    const [gender,setGender] = useState<string>("Nam")
    const genders = ['Nam', 'Nữ'];
    const randomGender = () =>{
        const random = Math.floor(Math.random() * genders.length);
        setGender(genders[random])
    }
  return (
    <div>Bài tập 10
        <h3>Gender: {gender}</h3>
        <br />
        <button onClick={randomGender}>Random gender</button>
    </div>
  )
}

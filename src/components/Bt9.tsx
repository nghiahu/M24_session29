import React, { useState } from 'react'

export default function Bt9() {
    const [email,setEmail] = useState<string>("")
    const [pass,setPass] = useState<string>("")

    const emailElement = document.getElementById('email') as HTMLInputElement
    const passElement = document.getElementById('pass') as HTMLInputElement

    const getFrom = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setEmail(emailElement.value)
        setPass(passElement.value)
    }

  return (
    <div>Bài tập 9 <br/>
    <form>
        Form <br/>
        <input id='email' type="text"placeholder='Nhập email'/> <br/>
        <input id='pass' type="text"placeholder='Nhập mật khẩu' />
        <br />
        <button onClick={getFrom}>Submit</button>
    </form>
    
    <div>
    <h3>Email: {email}</h3>
    <h3>Mật khẩu: {pass}</h3>
    </div>
    </div>
  )
}

import React,{useState} from 'react'

export default function Bt5() {
    const [state, setState] = useState<boolean>(true)
    const [a, setA] = useState<string>("true")
    const [but, setBut] = useState<string>("Hiện")
    const changeBnt = () =>{
        if(state === true){
            setState(false)
            setBut("Ẩn")
            setA("false")
        }else{
            setState(true)
            setBut("Hiện")
            setA("true")
        }
    }
  return (
    <div> Bài tập 5
        <h3>Nếu giá trị là {a}:</h3>
        <button onClick={changeBnt}>{but}</button>
    </div>
  )
}

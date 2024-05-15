import React,{useState} from 'react'

export default function Bt5() {
    const [state, setState] = useState<boolean>(true)
    const [a, setA] = useState<string>("true")
    const [but, setBut] = useState<string>("Hiện")
    const changeBnt = () =>{
        if(state === true){
            setState(false)
            setBut("Ẩn")
            setA("Sau")
        }else{
            setState(true)
            setBut("Hiện")
            setA("Trước")
        }
    }
  return (
    <div> Bài tập 6
        <h3>{a} khi bấm: </h3>
        <button onClick={changeBnt}>{but}</button>
    </div>
  )
}

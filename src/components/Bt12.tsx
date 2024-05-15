import React, {useState} from 'react'

export default function Bt12() {
    const [seconds, setSeconds] = useState<number>(0);
            
    const showNotification = () => {
        const notification = document.getElementById('noti') as HTMLElement
        notification.style.display = "block"
    }
    const hiddenNotification = () => {
        const notification = document.getElementById('noti') as HTMLElement
        notification.style.display = "none" 
    }
  return (
    <div>Bài tập 12 <br />
        <button onClick={showNotification} style={{backgroundColor:"blue",color:"white",padding:5}}>Show notification</button>
        <div id="noti" style={{display:"none"}}><div style={{display:"flex",gap:20,alignItems:"end",width:200}}>
            Hiển thị thông báo <div onClick={hiddenNotification}>x</div></div></div>
    </div>
  )
}

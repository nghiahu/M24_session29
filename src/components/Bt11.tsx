import React, { HtmlHTMLAttributes } from 'react'

export default function Bt11() {
    const handleMouse = () =>{
        const toolTip = document.getElementById('list') as HTMLElement
        toolTip.style.display = "block"
    }
    const handleMouseleave = () =>{
        const toolTip = document.getElementById('list') as HTMLElement
        toolTip.style.display = "none"
    }
  return (
    <div>Bài tập 11
        <br />
        <div onMouseEnter={handleMouse} onMouseLeave={handleMouseleave} style={{width:100}}>
        <button>Hover me</button>
        <div id="list" style={{backgroundColor:'gray',width:50,display:'none'}}>button</div>
        </div>
    </div>
  )
}

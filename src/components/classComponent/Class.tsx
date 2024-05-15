import React, { Component } from 'react'
interface State{
    name:string
}
interface Props{

}
export default class Class extends Component<Props,State>{
    constructor(props:Props){
        super(props)
        this.state = {
            name:"Duy Bùi"
        }
    }
    handlChange = () =>{
        if(this.state.name === "Duy Bùi"){
            this.setState({
                name:"Duy Anh"
            })
        }else{
            this.setState({
                name:"Duy Bùi"
            })
        }
    }
  render() {
    return (
      <div>
        <p>Xin chào {this.state.name}</p>
        <button onClick={this.handlChange}>Change</button>
      </div>
    )
  }
}

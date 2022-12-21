import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    return(
      <div>
      <h1>Kalvium Gallery</h1>

      <div className='images'>
        <img src={this.imageData()[0].img} alt="" />
        <img src={this.imageData()[1].img} alt="" />
        <img src={this.imageData()[2].img} alt="" />
        <img src={this.imageData()[3].img} alt="" />
      </div>
    </div>
    )
  }
}

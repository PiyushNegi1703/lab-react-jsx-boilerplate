// import { render } from '@testing-library/react';
import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

const image = imageData();

function App() {
  return(
    <div>
      <h1>Kalvium Gallery</h1>

      <div className='images'>
        <img src={image[0].img} alt="" />
        <img src={image[1].img} alt="" />
        <img src={image[2].img} alt="" />
        <img src={image[3].img} alt="" />
      </div>
    </div>
  )
}

export default App;

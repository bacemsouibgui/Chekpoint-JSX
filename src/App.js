import logo from './logo.svg';
import './App.css';
import Image from './image2.jpg'
import './style.css'


function App() {
  return (
    <div className="App">
      <>
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className='titlered'>Your name here</h1>
    <br />
    <img className='imge' src={Image} alt="" />
    <br />
    <img className='imge' src="./pic.jpeg" alt=""/>
  </div>
  <video width={320} height={240} controls="">
    <source src="myVideo.mp4" type="video/mp4" /> 
  </video>
</>
    </div>
  );
}

export default App;

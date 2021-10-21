import React, {useState, useEffect} from 'react';
import './App.css';
import About from './componets/about/About';
import Cover from './componets/cover/Cover';
import NavBar from './componets/navegation/NavBar';
import Slider from './componets/slider/Slider';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () =>{
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);  
  }, [scrollHeight])

  return (
    <div className="App">
      <NavBar scrollValue={scrollHeight}/>
      <Cover/>
      <About/>
      <Slider/>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import './App.css';
import Cover from './componets/cover/Cover';
import NavBar from './componets/navegation/NavBar';

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
    </div>
  );
}

export default App;

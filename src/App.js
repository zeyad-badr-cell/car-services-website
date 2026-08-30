import React, { useState } from 'react';
import './App.css';
import Background from './components/Background/background';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/hero';
function App() {
  let heroData =[
    {text1:"Dive into", text2:"What you like"},
    {text1:"indulge", text2:" your passion"},
    {text1:"Give in to", text2:"your curiosity"},
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playState,setPlayState] = useState(false);
  return (
    <div className="App">
      <Background playState={playState} heroCount={heroCount}/>
      <Nav/>
      <Hero 
      setPlayState={setPlayState}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playState={playState}
      />
    </div>
  );
}

export default App;

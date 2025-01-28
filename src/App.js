import React from 'react';
import Header from './components/Header';
import "./App.css";

function App() {
  return (
    <>
    <Header />
      <div className='bg-image'>
        <img className='center' src="https://inteles.ro/wp-content/uploads/2024/03/Ce-inseamna-cand-visezi-poze.jpg" alt='poza'></img>
      </div>
      <div className="bg-text">
        <h2>Deian Photography & Videography</h2>
        <h1>I am Deian</h1>
        <p>And I'm a Photographer and a Videographer</p>
      </div>
    </>
  );
};

export default App;
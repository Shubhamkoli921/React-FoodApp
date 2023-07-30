import React from 'react';
import Navbar from './components/navbar'
import Hero from './components/hero';
import HeadLineCards from './components/headlinescrd';
import Food from './components/food';
import Category from './components/category';

function App() {
  return (
    <div >
     <Navbar />
     <Hero />
     <HeadLineCards/>
     <Food/>
     <Category />
    </div>
  );
}

export default App;

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Location from './Components/Location';

function App() {

  const [ locations, setLocations ] = useState({});

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res => setLocations(res.data))
  },[]);

  console.log(locations)


  return (
    <>
      <Header />
      <div className='logo'></div>
      <Location name={locations.name} type={locations.type} dimention={locations.dimension} population={locations.residents?.length}/>
    </>
  )
}

export default App

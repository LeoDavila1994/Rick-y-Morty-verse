import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Location from './Components/Location';
import Logo from './Logo';
import Residents from "./Components/Residents"


function App() {

  const [locations, setLocations] = useState({});

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res => setLocations(res.data))
      .finally(setIsLoading(false));

  }, []);

  const [onInput, setOnInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const searchDim = () => {

    axios.get(`https://rickandmortyapi.com/api/location/${onInput}`)
      .then(res => setLocations(res.data))
  }

  return (
    <>
      {isLoading ?
        <div className='loading-cont'>
          <div className='load-screen'>
            <p>Loading...</p>
            <div  className='morty-reload'></div>
          </div>
        </div> : (
        <>
          <Header onInput={onInput} functimp={setOnInput} searcher={searchDim} />
          <Logo />
          <Location name={locations.name} type={locations.type} dimention={locations.dimension} population={locations.residents?.length} />
          <Residents locations={locations.residents} />
        </>
      )}
    </>
  )
}

export default App

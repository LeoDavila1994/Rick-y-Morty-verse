import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Location from './Components/Location';
import Logo from './Logo';
import Residents from "./Components/Residents"


function App() {

  const [ locations, setLocations ] = useState({});

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res => setLocations(res.data))

  },[]);

  const [ onInput, setOnInput ] = useState("Type between 1 - 126");

    const searchDim = () => {



        axios.get(`https://rickandmortyapi.com/api/location/${onInput}`)
            .then(res => setLocations(res.data))
    }

  return (
    <>
      <Header onInput={onInput} functimp={setOnInput} searcher={searchDim}/>
      <Logo />
      <Location name={locations.name} type={locations.type} dimention={locations.dimension} population={locations.residents?.length}/>
      <Residents locations={locations.residents}/>
    </>
  )
}

export default App

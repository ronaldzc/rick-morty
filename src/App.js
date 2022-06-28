import React, { useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import PrintDatos from './components/PrintDatos'

const App = () => {

  const [personaje, setPersonaje] = useState('')

  useEffect(() => {
   
    if(localStorage.getItem('nameApi')){
      setPersonaje(JSON.parse(localStorage.getItem('nameApi')))
    }
  },[])

  useEffect(() =>{
    localStorage.setItem('nameApi', JSON.stringify(personaje))
  }, [personaje])


  return (
    <div className='container'>
      <h1 className='card-title'>App Rick and Morty</h1>


      <Formulario
        setPersonaje={setPersonaje}
      />


      <PrintDatos 
      personaje={personaje}
      />

    </div>
  )
}

export default App
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from "./Loading";
import Personaje from "./Personaje";

const PrintDatos = ({ personaje }) => {

  const [personajes, setPersonajes] = useState([])

  const [loading, setLoading] = useState(false)

  const getPersonaje = async (nombre) => {

    setLoading(true)
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`
      );

      if(!res.ok){
        return Swal.fire({
          title: 'Error!!',
          text: 'Personaje no Encontrado',
          icon: 'error'
        })
      }

      const datos = await res.json()
      setPersonajes([...datos.results])
      
     
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }

  };
 


  useEffect(() => {
    // localStorage.setItem('nameApi', JSON.stringify(personaje))
    getPersonaje(personaje);
  }, [personaje]);


  if(loading){
    return <Loading />
  }

  return (

  <div className="row">
    {
      personajes.map(item => (
        <Personaje 
        key={item.id}
        personaje={item}
      />
      ))
       
      
    }

  </div>
  )
};

export default PrintDatos;

import React from "react";

import Swal from 'sweetalert2'

import { useFormulario } from "../hooks/useFormulario";

const Formulario = ({setPersonaje}) => {
  const [inputs, handleChange, reset] = useFormulario({
    nombre: "",
  });

  const { nombre } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
   

    if(!nombre.trim()){
      return Swal.fire({
        title:'Error!',
        text:'Ingrese personaje',
        icon:'error',
       
      })
    }
    setPersonaje(nombre.trim().toLowerCase())
    reset();
  };

  return (
    <form className="card-body" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese personaje"
        className="form-control mb-2"
        value={nombre}
        onChange={handleChange}
        name="nombre"
       
      />

      <button type="submit" className="btn btn-dark">
        Buscar
      </button>
    </form>
  );
};

export default Formulario;

import React from 'react'

const Personaje = ({personaje}) => {

    //destructuring
    const {name, species, image} = personaje

  return (
    <div className='col-md-4 mb-2'>
        <div className='card'>
            <img className='card-img-top'src={image} alt={`${name}`}/>
            <div className='card-body'>
                <h5>{name}</h5>
                <p>{species}</p>
            </div>
        </div>
        
    </div>
  )
}

export default Personaje
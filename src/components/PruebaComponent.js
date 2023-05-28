import React, { useEffect, useState } from 'react'
import { OtroComponente } from './OtroComponente';

export const PruebaComponent = () => {

    const [usuario, setUsuario] = useState("Fernando");
    const [fecha, setFecha] = useState(new Date());
    const [contador, setContador] = useState(0);

    const cambiarNombre = (value) => {
        setUsuario(value);
    }

    const cambiarFecha = (e) => {
        e.preventDefault();
        setFecha(new Date(2024,10,5));
    }


    useEffect(() => {
        // normalmente se dispara en cada cambio que detecta en el componente
        // si se le agrega el parametro , [] se le indica que se lanza una sola vez 
        // al cargar el componente
        console.log('cambio en el componente...')
    }, [])

    useEffect(() => {
        // en otra variante se le puede pedir que se dispare cuando 
        // ocurre un cambio en alguna propiedad especifica como por ejemplo en usuario       
        setContador(contador + 1);
        console.log('Usuario modificado: ' + contador);
    }, [usuario])


  return (
    <div>
        <h1>El efecto - Hook useEffect</h1>
        <br />
        <strong id='usu' className={contador < 10 ? 'label' : 'label-green'}>{ usuario }</strong>
        <br />
        <strong id="fe" className='label'>{ fecha.toISOString() }</strong>
        <br />
        <form>
            <input type="text" onChange={ e => cambiarNombre(e.target.value) } placeholder='Cambiar nombre' />
            <br />
            <button onClick={ cambiarFecha }>Cambiar fecha</button>
        </form>

        <br />
        {
            // esta instruccion le indica que cuando contador sea 20 o mas se renderizara otro componente
            //contador >=20 && <OtroComponente />

            // esta en cambio le dice que cuando el usuario sea LUCAS aparezca
            usuario === 'LUCAS' && <OtroComponente />
        }
            
        
    </div>
  )
}

import React, { useEffect } from 'react'

export const OtroComponente = () => {
    useEffect(() => {

        // Detecta cuando se MONTA el componente
        console.log('OtroComponente montado...');

        // Detecta cuando se DESMONTA el componente
        return () => {
            console.log('OtroComponente desmontado...');

        }

    }, [])



  return (
    <div>
        
        <h3>Hemos superado los 20 cambios</h3>

    </div>
  )
}

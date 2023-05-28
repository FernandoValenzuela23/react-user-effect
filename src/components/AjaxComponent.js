import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState('');

    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                "id": 1,
                "email": "lucas@hermanos.com",
                "first_name": "Lucas",
                "last_name": "Valenzuela",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 2,
                "email": "luna@hermanos.com",
                "first_name": "Luna",
                "last_name": "Valenzuela",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 3,
                "email": "tobias@hermanos.com",
                "first_name": "Tobias",
                "last_name": "Valenzuela",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            }
        ]);
        setCargando(false);
    }

    const cargarUsuarioApiPromise = async () => {
        fetch('https://reqres.in/api/users?page=2')
            .then(res => res.json())
            .then(({ data }) => {
                setUsuarios(data);
                setCargando(false);
            })
            .catch(err => {
                setError(err.message);
            });
    }

    const cargarUsuarioApiAsync = async () => {
        try {
            const peticion = await fetch('https://reqres.in/api/users?page=2');
            const { data } = await peticion.json();
            setUsuarios(data);
            setCargando(false);
        } catch(err) {
            setError(err.message);
        }
        
    }

    useEffect(() => {
        getUsuariosEstaticos();
    }, [])

    // plantilla cuando cargan datos
    return (
        <div>
            <h2>Listado de usuario via ajax</h2>
            <br />
            <button onClick={cargarUsuarioApiPromise} >Get Usuarios desde API (Promesa)</button>
            <br />
            <button onClick={cargarUsuarioApiAsync} >Get Usuarios desde API (Async Await)</button>
            <br />

            {(cargando === true) ?
                //plantilla con el loading
                <div className='cargando'>Cargando...</div>
            :
                <ul>
                    {
                        usuarios.map((u, i) => {
                            return (<li key={i}>
                                    <img src={u.avatar} width="30px" height="30px" />
                                    {u.first_name} {u.last_name}
                                </li>)
                        })
                    }
                </ul>

            }
            
            <br />
            <br />

            {
                (error.length > 0)  ?
                
                    <div className='error' >{error}</div>
                : 
                <div></div>
            }
        </div>
    );




    
    

    
}

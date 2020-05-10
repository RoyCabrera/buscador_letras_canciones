import React,{useState} from 'react';

const Formulario = ({setBusquedaLetra}) => {

    const [busqueda, setBusqueda] = useState({
        cancion:'',
        artista:'',
    });

    const [error,setError] = useState(false);

    const {artista,cancion} = busqueda;

    const actualizarState = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }

    const buscarInformacion = (e) => {
        e.preventDefault();
        if(artista.trim() === '' || cancion.trim() === ''){
            setError(true);
            return;
        }

        setError(false);
        setBusquedaLetra(busqueda);
    }

    return(
        <div className='bg-info ' >
            {
                error ? <p className='alert alert-danger p-2 text-center'>Todos los campos son obligatorios</p> : null
            }
            <div className='container' >
                <div className='row'>
                    <form className='col card text-white bg-transparent mb-5 pt-5 pb-2' onSubmit={buscarInformacion} >
                        <fieldset>
                            <h1 className='text-center text-white mb-5' >Buscar letras de canciones</h1>
                            <div className='row' >
                                <div className='col-md-6' >
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input type="search" className='form-control' name='artista' placeholder='Nombre del artista' onChange={actualizarState} value={artista} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input type="search" className='form-control' name='cancion' placeholder='Nombre de la canción' onChange={actualizarState} value={cancion}/>
                                    </div>
                                </div>
                            </div>
                            <button className='btn btn-primary float-right' type='submit'>
                                Buscar
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Formulario;
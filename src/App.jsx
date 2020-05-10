import React, { Fragment, useState,useEffect } from 'react';
import Formulario from './Components/Formulario';
import Cancion from './Components/Cancion';
import axios from 'axios';
import Biografia from './Components/Biografia';
import PageLoader from './Components/PageLoader';

function App() {

  const [busquedaLetra,setBusquedaLetra] = useState({});
  const [letra,setLetra] = useState('');
  const [bio,setBio] = useState('');
  const [loader,setLoader] = useState(false);

  useEffect(() => {
    if(Object.keys(busquedaLetra).length === 0 ) return;
    
    const consultarApiLetra = async () => {
      
      const {artista,cancion} = busquedaLetra;
      const URL = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const URL2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      setLoader(true);
      
      const [letra,bio] = await Promise.all([
        axios.get(URL),
        axios.get(URL2)
      ])
      setLoader(false);

      setLetra(letra.data.lyrics);
      setBio(bio.data.artists);
      
      console.log(bio.data);
      
      
    }
    
    
    consultarApiLetra();
    
  }, [busquedaLetra]);

  return (
    <Fragment>
      <Formulario 
      setBusquedaLetra={setBusquedaLetra}
      />

      {
        loader ? <PageLoader/>:<div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Biografia bio={bio} />
          </div>
          <div className="col-md-6">
            <Cancion letra={letra}  />
          </div>
        </div>  
      </div>
      }

      
      
    </Fragment>
  );
}

export default App;

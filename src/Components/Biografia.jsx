import React, { Fragment } from 'react';

const Biografia = ({bio}) => {

    
    if(bio === null) return null;
    
    // validar que el prop no llegue vacio 
    if(Object.keys(bio).length === 0){
        return null;
    }

    const {strArtistThumb,strGenre,strBiographyES,strBiographyEN,strArtist} = bio[0];
    
    return(
        
        
        <Fragment>
            <div className="card mb-3">
                <h3 className="card-header bg-primary  font-weight text-white text-uppercase">
                    {strArtist}
                </h3>
                <img src={strArtistThumb} alt="Logo del artista"  className='img-letras'  />
                <div className="card-body">
                    
                    <p className="card-text">Género: {strGenre}</p>
                    <h2 className="card-text">Biografía: </h2>
                    {
                    
                        strBiographyES ? <p className="card-text">{strBiographyES}</p>:
                        <p className="card-text">{strBiographyEN}</p>
                    
                    }
                </div>
                <div className="card-footer">
                    <p className="card-text iconos">
                        <a href={`https://${bio.strFacebook}`} className='m-3'  target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href={`https://${bio.strTwitter}`} className='m-3' target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href={`${bio.strLastFMChart}`} className='m-3' target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-lastfm"></i>
                        </a>
                    </p>
                </div>
            </div>
        </Fragment>
    );
}

export default Biografia;
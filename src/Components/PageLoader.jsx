import React from "react";
import loaderImg from "../assets/img/loader.gif";
import styled from 'styled-components';

const Imagen = styled.img`
    max-width:100%;
    margin-top: 5rem;
  `;

const PageLoader = ()=> {
 

    return (
      <div className="loader-container">
        <div className="loader">
        <Imagen src={loaderImg} alt='loading...' />
        </div>
      </div>
    );
  }


export default PageLoader;
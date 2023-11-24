import React, {useContext, useEffect} from 'react';
import {Context} from '../store/appContext'

const Color1 = () => {
    const {store, actions} = useContext(Context);
    useEffect(()=>{
        actions.fetchCharactersStarWars();
    }, [])
    
  return (
    <div>
        <h4>Hola desde componente Color</h4>
        <h1>{store.color}</h1>
    </div>

  )
}

export default Color1
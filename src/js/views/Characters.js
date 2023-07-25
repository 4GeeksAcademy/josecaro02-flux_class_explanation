import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Characters = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div>Characters</div>
      <ul className="list-group">
        {store.charactersStarWars.map((value, index) => {
          return <li className="list-group-item">
            <p>{value.name}</p>
            <Link to={"/single/" + index}>
              <button className='btn btn-warning'>Ver Personaje</button>
            </Link>
          </li>
        })}
      </ul>
    </>
  )
}

export default Characters
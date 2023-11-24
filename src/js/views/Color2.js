import React, {useContext} from 'react';
import { Context } from '../store/appContext';

const Color2 = () => {
    const {store, actions} = useContext(Context);
  return (
    <div>
        <h4>Color 2 component</h4>
        <button className='btn btn-success' onClick={()=>{
            actions.changeRedColor();
        }}>Change color</button>
    </div>
  )
}

export default Color2
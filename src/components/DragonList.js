import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteDragon, inversionDragon, logDelete } from '../actions/actions-types';

const DragonList = () => {

    const { dragons } = useSelector(state => state.dragon);
    const dispatch = useDispatch()

    const handleDelete = (dragon) => {
        dispatch(deleteDragon(dragon))
        dispatch(logDelete(dragon))
    }

    return (
        <>
            {dragons.length > 0 &&
                <ul className="list-group">
                    {dragons.map((dragon, i) => { return <li className="list-group-item" key={i}>{dragon} <button className="btn btn-secondary" onClick={() => handleDelete(dragon)}>Supprimer</button></li> })}
                    <button className="btn btn-secondary" onClick={() => dispatch(inversionDragon())}>Inverser l'ordre</button>
                </ul>
            }
        </>
    );
}

export default DragonList;

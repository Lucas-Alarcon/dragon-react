import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteChevalier, inversionChevalier, logDelete } from '../actions/actions-types';

const ChevalierList = () => {

    const { chevaliers } = useSelector(state => state.chevalier);
    const dispatch = useDispatch()

    const handleDelete = (chevalier) => {
        dispatch(deleteChevalier(chevalier))
        dispatch(logDelete(chevalier))
    }

    return (
        <>
            {chevaliers.length > 0 &&
                <ul className="list-group">
                    {chevaliers.map((chevalier, i) => { return <li className="list-group-item" key={i}>{chevalier} <button className="btn btn-secondary" onClick={() => handleDelete(chevalier)}>Supprimer</button></li> })}
                    <button className="btn btn-secondary" onClick={() => dispatch(inversionChevalier())}>Inverser l'ordre</button>
                </ul>
            }
        </>
    );
}

export default ChevalierList;

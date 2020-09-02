import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { chevalierName, addChevalier, logAdd } from '../actions/actions-types';

const ChevalierForm = () => {

  const { chevaliers, chevalier, message } = useSelector(state => state.chevalier);
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addChevalier(chevalier))
    dispatch(logAdd({array: chevaliers, value: chevalier}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="addChevalier">Ajoutez un chevalier</label>
        <input type="text" name="chevalier" className="form-control" id="addChevalier" value={chevalier} onChange={e => dispatch(chevalierName(e.target.value))} />
        {message}
      </div>
      <input type="submit" className="btn btn-secondary" value="Ajouté" />
    </form>
  );
}

export default ChevalierForm;

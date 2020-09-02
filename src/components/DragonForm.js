import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dragonName, addDragon, logAdd } from '../actions/actions-types';

const DragonForm = () => {

  const { dragons, dragon, message } = useSelector(state => state.dragon);
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addDragon(dragon))
    dispatch(logAdd({array: dragons, value: dragon}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="addDragon">Ajoutez un dragon</label>
        <input type="text" name="dragon" className="form-control" id="addDragon" value={dragon} onChange={e => dispatch(dragonName(e.target.value))} />
        {message}
      </div>
      <input type="submit" className="btn btn-secondary" value="Ajouté" />
    </form>
  );
}

export default DragonForm;

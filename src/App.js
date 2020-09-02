import React from 'react';
import './App.css';
import DragonForm from './components/DragonForm';
import DragonList from './components/DragonList';
import ChevalierForm from './components/ChevalierForm';
import ChevalierList from './components/ChevalierList';
import Log from './components/Log';
import { useSelector } from 'react-redux';

const App = () => {

  const { dragons, chevaliers } = useSelector(state => {

    return {
      dragons : state.dragon.dragons,
      chevaliers : state.chevalier.chevaliers
    }
  })

  return (
    <div>
      <h3 className="text-white bg-dark p-3">Nombre de dragon : {dragons.length} | Nombre de chevalier : {chevaliers.length}</h3>
      <div className="container">
        <div className="row my-5">
          <div className="col">
            <DragonForm />
          </div>
          <div className="col">
            <DragonList />
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <ChevalierForm />
          </div>
          <div className="col">
            <ChevalierList />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-6">
            <Log />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

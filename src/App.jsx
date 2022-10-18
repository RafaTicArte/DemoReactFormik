import React from 'react';
import BasketballForm from './components/BasketballForm';
import './App.css';

const initialBasketballValues = {
  team: 'TicArte',
  name: '',
  lastName: '',
  number: '',
  position: 'c',
};

function App() {
  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">DemoReactFormik</h1>
        <h2>New basketball player</h2>
        <BasketballForm initialBasketballValues={initialBasketballValues} />
      </div>
    </div>
  );
}

export default App;

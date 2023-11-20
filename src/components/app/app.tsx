import React from 'react';
import logo from '../../images/logo.svg';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import './app.css';

function App() {
  return (
    <>
    <div className="App">
      <AppHeader/>
      <main>
        <BurgerIngredients/>
        <BurgerConstructor/>
      </main>
    </div>
    </>
  );
}

export default App;

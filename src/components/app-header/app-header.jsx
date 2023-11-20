import React from 'react';
import appHeaderStyles from './app-header.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
    return (
      <header className={appHeaderStyles.header}>
        <nav className={appHeaderStyles.nav}>
            <a>Конструктор</a>
            <a>Лента заказов</a>
            <Logo/>
            <a>Личный кабинет</a>
            
        </nav>
      </header>
    );
  }

export default AppHeader
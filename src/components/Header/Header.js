import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png'
import './Header.css'

const Header = () => {
   return (
      <header>
         <div className="container">
            <div className="navbar">
               <div className="navbar__logo">
                  <Link to='/'>
                     <img src={Logo} alt="makers logo" />
                  </Link>
               </div>
               <ul className="navbar__right">
                  <Link to='/'>
                     <li>Главная</li>
                  </Link>
                  <li>Документация</li>
                  <Link to='/add'>
                     <li>Добавить</li>
                  </Link>
                  <li>
                     <input placeholder="Поиск" />
                  </li>
                  <li>GitHub</li>
               </ul>
            </div>
         </div>
      </header>
   );
};

export default Header;
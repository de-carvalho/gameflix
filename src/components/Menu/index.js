import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

import Logo from '../../assets/images/gameflix.png';

import './Menu.css';

function Menu() {
  return (
    <nav className='Menu'>
      <Link to='/'>
        <img className='Logo' src={Logo} alt='Logo do Gameflix' />
      </Link>

      <Button as={Link} className='ButtonLink' to='/cadastro/video'>
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;

import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';     
import image_logo from '../../images/coin.png';
import SideNav from '../Header/SideNav/sideNav';

const Header = (props) => {

    const logo = () => (
        <Link to="/">
            <img className={style.logo} alt="coin logo" src={image_logo} />
            
        </Link>
    )

    const navBars = () => {
        return (
            <div className={style.bars}>
                <FontAwesome 
                onClick={props.onOpenNav}
                name="bars"
                style={{
                    color:'#dfdfdf',
                    padding: '10px',
                    cursor: 'pointer'
                }}
                />
            </div>
        )
    }

    return (
        <header className={style.header}>
            <SideNav {...props} />
            <div className={style.headerOpt}>
                {navBars()}
                {logo()} 
                <h1>CurrencyApp</h1>
        
            </div>
        </header>
    );
};

export default Header;
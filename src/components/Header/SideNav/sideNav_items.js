import React from 'react';
import { Link } from 'react-router-dom';
import style from './sideNav.css';
import FontAwesome from 'react-fontawesome';
import { FcCurrencyExchange } from 'react-icons/fc';
import { IoIosHome } from 'react-icons/io';
import { FaHotjar } from 'react-icons/fa';

const items = [
    {
        type: style.option,
        icon: <IoIosHome />,
        text: 'Home',
        link: '/', 
    },

    {
        type: style.option,
        icon: <FcCurrencyExchange />,
        text: 'Converter',
        link: '/converter', 
    },

    {
        type: style.option,
        icon: <FaHotjar />,
        text: 'News',
        link: '/news',
    },

]



const showItems = () => {
    return items.map((item, i) => {
        return(
            <div key={i} className={item.type}>
                <Link to={item.link}>
                    {item.icon} {item.text}
                </Link>
            </div>
        )
    })
}

const SideNavItems = () => {
    return (
        <div>
            {showItems()}
        </div>
           
    )
}

export default SideNavItems;
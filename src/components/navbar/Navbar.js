import React, {useState} from 'react';
import {MenuList} from "./MenuList";
import {NavLink} from "react-router-dom";
import './Navbar.css'


function Navbar(props) {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked)
    }
    const menuList = MenuList.map((item, index) => {
        return(
            <li key={index}>
                <NavLink exact to={item.url} activeClassName='active'>{item.title}</NavLink>
            </li>
        )
    })
    return (
        <nav>
            <div className='logo'>
                Xhetri<font>Lab</font>
            </div>
            <div className='menu-icon' onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <div >
                <ul className={clicked ?'menu-list': 'menu-list close'}>
                    {menuList}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
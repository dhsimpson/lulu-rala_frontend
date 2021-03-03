import { withRouter } from 'react-router-dom';

import NavMenu from './NavMenu';

import styled from 'styled-components';
import '../css/nav.css';
import navConfig from '../config/navConfig.json';

function Nav() {
    return (
        <nav>
            {navConfig.nav.map((subMenu, i)=>{
                return(
                    <NavMenu
                    menuData = {subMenu}
                    key = {i}/>
                )
            })}
        </nav>
    );
}

export default Nav; // withRouter(nav)
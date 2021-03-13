import NavMenu from './NavMenu';

import '../css/nav.css';
import navConfig from '../config/navConfig.json';

function Nav() {
    return (
        <nav className="nav-head">
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

export default Nav;
import NavMenu from './NavMenu';

import '../css/nav.css';
import navConfig from '../config/navConfig.json';

function Nav() {
    const toggleNav = () => {
        const nav = document.getElementsByTagName("nav")[0];
        if(nav.style.display === "flex"){
            nav.style.display = "none";
        }
        else{
            nav.style.display = "flex";
        }
    }
    return (
        <>
        <nav className="nav-head">
            {navConfig.nav.map((subMenu, i)=>{
                return(
                    <NavMenu
                    menuData = {subMenu}
                    key = {i}/>
                )
            })}
            <div className="nav-background"/>
        </nav>
        <div id="id-toggle-nav" onClick={()=>{toggleNav()}}>
            <div className="div-toggle-nav-bar"></div>
            <div className="div-toggle-nav-bar"></div>
            <div className="div-toggle-nav-bar"></div>
        </div>
        </>
    );
}

export default Nav;
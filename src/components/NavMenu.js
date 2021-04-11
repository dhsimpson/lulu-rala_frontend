import React from 'react'
import { Link } from 'react-router-dom';
import '../css/navMenu.css';

function NavMenu(props) {
    const toggleNavMenu = (el) => {
        el.stopPropagation();  
        if(el.target.childNodes.length){      
            const toggler = el.target.childNodes[el.target.childNodes.length - 1];
            if(!toggler.classList){return;}
            const togglerClassList = Array.from(toggler.classList);
            if(togglerClassList.includes("toggled")){
                toggler.classList.remove("toggled");
                el.target.childNodes[0].childNodes[1].style.display = "none";
            }else{
                toggler.classList.add("toggled");
                if(!el.target.childNodes[0].childNodes[1].style){return;}
                el.target.childNodes[0].childNodes[1].style.display = "block";
            }
        }else{    
            const togglerClassList = Array.from(el.target.classList);
            if(togglerClassList.includes("toggled")){
                el.target.classList.remove("toggled");
                el.target.previousSibling.childNodes[1].style.display = "none";
            }else{
                el.target.classList.add("toggled");
                el.target.previousSibling.childNodes[1].style.display = "block";
            }
        }

    }
    return (<div 
        className= "navMenu"
        onClick={toggleNavMenu}>
        {!props.menuData.subMenus
            ? (<div>
                <button><Link to={`/${props.menuData.menuKey}`}> {props.menuData.menuName}</Link> </button>
            </div>)
            : (<div>
                <button>{props.menuData.menuName}</button>
                <ul className = "subMenu">
                {
                    props.menuData.subMenus.map((spreadMenu, i) => {
                        return (
                            <li>
                                <Link
                                className="menuItem"
                                to={`/${spreadMenu.menuKey}`}
                                key={i}><span>{spreadMenu.menuName}</span> </Link>
                            </li>
                        )
                    })
                }
                </ul>
            </div>)}
            <div className="div-toggle-navMenu" onClick={toggleNavMenu}></div>
    </div>);
}

export default NavMenu;
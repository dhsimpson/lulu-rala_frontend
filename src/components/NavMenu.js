import React from 'react'
import { Link } from 'react-router-dom';
import '../css/navMenu.css';

function NavMenu(props) {
    return (<div 
        className= "navMenu">
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
                                    to={`/${spreadMenu.menuKey}`}
                                    key={i}>{spreadMenu.menuName}</Link>
                            </li>
                        )
                    })
                }
                </ul>
            </div>)}
    </div>);
}

export default NavMenu;
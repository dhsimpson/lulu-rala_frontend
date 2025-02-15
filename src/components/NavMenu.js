import React from 'react'
import { Link } from 'react-router-dom';
import '../css/navMenu.css';

function NavMenu(props) {
    const toggleNavMenu = (el) => {
        el.stopPropagation();
        if (el.target.childNodes.length && !Array.from(el.target.classList).includes("button-toggle")) {
            const toggler = el.target.childNodes[el.target.childNodes.length - 1];
            if (!toggler.classList) { return; }
            const togglerClassList = Array.from(toggler.classList);
            if (!el.target.childNodes[0].childNodes[1]) { return; }
            if (!el.target.childNodes[0].childNodes[1].style) { return; }
            if (togglerClassList.includes("toggled")) {
                toggler.classList.remove("toggled");
                el.target.childNodes[0].childNodes[1].classList.remove("toggled");
            } else {
                toggler.classList.add("toggled");
                el.target.childNodes[0].childNodes[1].classList.add("toggled");
            }
        }
        else if (Array.from(el.target.classList).includes("button-toggle")) {
            const toggler = el.target.parentNode.nextSibling;
            if (!toggler.classList) { return; }
            const togglerClassList = Array.from(toggler.classList);
            if (!el.target.nextSibling.style) { return; }
            if (togglerClassList.includes("toggled")) {
                toggler.classList.remove("toggled");
                el.target.nextSibling.classList.remove("toggled");
                // el.target.nextSibling.style.display = "none";
            } else {
                toggler.classList.add("toggled");
                el.target.nextSibling.classList.add("toggled");
                // el.target.nextSibling.style.display = "block";
            }
        }
        else {
            const togglerClassList = Array.from(el.target.classList);
            if (togglerClassList.includes("toggled")) {
                el.target.classList.remove("toggled");
                // el.target.previousSibling.childNodes[1].style.display = "none";
            } else {
                el.target.classList.add("toggled");
                // el.target.previousSibling.childNodes[1].style.display = "block";
            }
        }
    }
    const closeNav = () => {
        const newWidth = window.innerWidth;
        if (newWidth > 800) { return; }
        const nav = document.getElementsByTagName("nav")[0];
        if (!nav) { return; }
        nav.classList.remove("toggled");
        const subMenus = document.getElementsByClassName("subMenu");
        Array.from(subMenus).forEach(el => {
            el.classList.remove("toggled");
        })
        const toggleNavMenus = document.getElementsByClassName("div-toggle-navMenu");
        Array.from(toggleNavMenus).forEach(el => {
            el.classList.remove("toggled");
        })
    }
    const stopProp = (el) => {
        el.stopPropagation();
    }
    return (<div
        className="navMenu"
        onClick={toggleNavMenu}
    >
        {!props.menuData.subMenus
            ? (<div>
                <button><Link to={`/${props.menuData.menuKey}`}> {props.menuData.menuName}</Link> </button>
            </div>)
            : (<div>
                <button className="button-toggle">{props.menuData.menuName}</button>
                {/* <div> */}
                    <ul className="subMenu">
                        {
                            props.menuData.subMenus.map((spreadMenu, i) => {
                                return (
                                    <li>
                                        <Link
                                            className="menuItem"
                                            onClick={closeNav}
                                            onMouseOver={stopProp}
                                            to={`/${spreadMenu.menuKey}`}
                                            key={i}><span>{spreadMenu.menuName}</span> </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                {/* </div> */}
            </div>)}
        <div className="div-toggle-navMenu" onClick={toggleNavMenu}></div>
    </div>);
}

export default NavMenu;
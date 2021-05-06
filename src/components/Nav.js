import NavMenu from './NavMenu';
import { useEffect, useState } from 'react';

import '../css/nav.css';
import navConfig from '../config/navConfig.json';

function Nav() {

    const [width, setWidth] = useState(0);

    useEffect(() => {
        const newWidth = window.innerWidth;
        setWidth(newWidth);
        function handleResize() {
            const newWidth = window.innerWidth;
            if(newWidth > 800){
                const nav = document.getElementsByTagName("nav")[0];
                nav.style.display = "flex";
                const subMenus= document.getElementsByClassName("subMenu");
                Array.from(subMenus).forEach(el => {
                    el.style.display = "block";
                })
            }else{
                const subMenus= document.getElementsByClassName("subMenu");
                Array.from(subMenus).forEach(el => {
                    el.style.display = "none";
                })
            }
            setWidth(newWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleNav = () => {
        const navHead = document.getElementById("nav-head");
        const navBackground = document.getElementById("nav-background");
        if(Array.from(navHead.classList).includes("toggled")){
            navHead.classList.remove("toggled");
            navBackground.style.display = "none";
        }else{
            navHead.classList.add("toggled");
            navBackground.style.display = "block";
        }
    }
    const toggleBackground = () => {
        const navBackground = document.getElementById("nav-background");
        const subMenus= document.getElementsByClassName("subMenu");
        Array.from(subMenus).forEach(el => {
            el.style.display = "none";
        })
        const toggleNavMenus = document.getElementsByClassName("div-toggle-navMenu");
        Array.from(toggleNavMenus).forEach(el => {
            el.classList.remove("toggled");
        })
        navBackground.style.display = "none";
    }
    return (
        <>
            <nav id="nav-head" className="nav-head">
                {navConfig.nav.map((subMenu, i) => {
                    return (
                        <NavMenu
                            menuData={subMenu}
                            key={i} />
                    )
                })}
                <div className="nav-background" />
            </nav>
            
            {/* 오른쪽 네비게이션 토글 버튼 */}
            <div id="id-toggle-nav" onClick={() => { toggleNav() }}>
                <div className="div-toggle-nav-bar"></div>
                <div className="div-toggle-nav-bar"></div>
                <div className="div-toggle-nav-bar"></div>
            </div>
            <div id="nav-background" onClick={toggleBackground}></div>
        </>
    );
}

export default Nav;
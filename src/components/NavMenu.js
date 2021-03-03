import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import AppContext from '../components/Appcontext';
import styled from 'styled-components';
import '../css/navMenu.css';

const route = (history, setSection, menuKey) => {
    setSection(menuKey);
    history.push(`/${menuKey}`)
}

function NavMenu(props) {
    const history = useHistory();
    
    const setSection = useContext(AppContext);

    return (<div 
        className= "navMenu">
        {!props.menuData.subMenus
            ? (<div>
                <button onClick={() => { route(history, setSection, props.menuData.menuKey) }}>{props.menuData.menuName}</button>
            </div>)
            : (<div>
                <button>{props.menuData.menuName}</button>
                <div
                className= "subMenu">
                {
                    props.menuData.subMenus.map((spreadMenu, i) => {
                        return (
                            <a
                                onClick={() => {route(history, setSection, spreadMenu.menuKey) }}
                                key={i}>{spreadMenu.menuName}</a>
                        )
                    })
                }
                </div>
            </div>)}
    </div>);
}

export default NavMenu;
import { Link } from 'react-router-dom';
import '../css/leftNav.css';
function LeftNav(props) {
    return (
        <div className="div-left-nav">
            <h2 className="MapoPeacefull">{props.menu.menuName}</h2>
            {props.menu.subMenus.map((item, i) => {
                return (<div className="div-left-nav-li">
                <Link to={`/${item.menuKey}`} key={i}><span>{item.menuName}</span></Link>
                <div className="div-left-nav-arrow"/>
                </div>);
            })}
        </div>
    );
}

export default LeftNav;
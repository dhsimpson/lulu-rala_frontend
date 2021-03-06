import { Link } from 'react-router-dom';
import '../css/leftNav.css';
function LeftNav(props) {
    return (
        <div className="div-left-nav">
            <h2>{props.menu.menuName}</h2>
            {props.menu.subMenus.map((item, i) => {
                return (<Link to={`/${item.menuKey}`} key={i}>{item.menuName}</Link>)
            })}
        </div>
    );
}

export default LeftNav;
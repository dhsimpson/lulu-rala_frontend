import { Link } from 'react-router-dom';
import '../css/header.css';
function Header() {
    return (
        <div>
            <header>
                <Link to="/">아이들이엔씨</Link>
            </header>
            <img className="loginIcon" src="./loginIcon.png" />
        </div>
    );
}

export default Header;


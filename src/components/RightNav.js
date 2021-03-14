import { Link } from 'react-router-dom';
import '../css/rightNav.css';
function RightNav() {
  return (
    <nav className="nav-right">
      {/* 전부 아이콘으로 대체해야 할 듯함 */}

      <Link to="/requestForConsultation"><p>상담 신청</p></Link>
      <Link to="/FAQ"><p>FAQ</p></Link>
      <Link to="/"><p>가맹안내</p></Link>
    </nav>
  );
}

export default RightNav;
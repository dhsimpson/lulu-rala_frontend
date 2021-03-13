import '../css/rightNav.css';
function RightNav() {
    return (
      <nav className="nav-right">
        {/* 전부 아이콘으로 대체해야 할 듯함 */}
        <a href="#"><p>상담 신청</p></a>
        <a href="#"><p>FAQ</p></a>
        <a href="#"><p>가맹안내</p></a>
      </nav>
      );
}

export default RightNav;
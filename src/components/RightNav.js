import '../css/rightNav.css';
function RightNav() {
    return (
      <nav className="nav-right">
        {/* 전부 아이콘으로 대체해야 할 듯함 */}
        <a href="#"><p>1:1 상담</p></a>
        <a href="#"><p>모바일체험</p></a>
        <a href="#"><p>가맹안내</p></a>
        <a href="#"><p>A/S 신청</p></a>
      </nav>
      );
}

export default RightNav;
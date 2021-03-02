import styled from 'styled-components';
const Nav = styled.nav`
border: 1px solid green;
`;
const Ul = styled.ul`
display: none;
`;
function nav() {
    return (
        <Nav>
            <a href="#">Main</a>
            <a href="#">Courses</a>
            <a href="#">Why Lulu Rala</a>
            <a href="#">Content</a>
            <a href="#">Community</a>


            {/* 네비게이션 바에 hover 하면 메뉴 전체 show */}
            <Ul>
                <li>
                    <a>Lulu Rala English</a>
                    <a>교육 과정</a>
                    <a>프로그램 가이드</a>
                </li>
                <li>
                    <a>브랜드 스토리</a>
                    <a>교육 철학</a>
                    <a>Why Lulu Rala</a>
                </li>
                <li>
                    <a>자주하는 질문</a>
                    <a>수강료 안내</a>
                    <a>상담신청(개인/기관)</a>
                </li>
            </Ul>

        </Nav>
    );
}

export default nav;
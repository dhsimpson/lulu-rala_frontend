import styled from 'styled-components';
const RiightNav = styled.nav`
border: 1px solid red;
`;

function RightNav() {
    return (
      <RiightNav>
      우측 네비게이션
        <a href="#">1:1상담</a>
        <a href="#">온라인 체험</a>
        <a href="#">가맹 안내</a>
        <a href="#">A/S신청</a>
      </RiightNav>
      );
}

export default RightNav;
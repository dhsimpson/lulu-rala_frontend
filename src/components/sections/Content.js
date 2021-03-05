import styled from 'styled-components';
const RightNav = styled.nav`
border: 1px solid red;
`;

function Content() {
  document.body.style.backgroundImage = "url('./background.jpg')";
  return (
    <>
      {/* 좌측 선택 네비게이션 */}
      <a>수강료 안내</a>
      <a>상담신청</a> 
      <a>FAQ</a>

      {/* 여기에 section */}
    </>
  );
}

export default Content;
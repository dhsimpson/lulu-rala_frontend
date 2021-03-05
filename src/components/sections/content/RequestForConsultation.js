import styled from 'styled-components';
const RightNav = styled.nav`
border: 1px solid red;
`;

function RequestForConsultation() {
  document.body.style.backgroundImage = "url('./background.jpg')";
  return (
    <>
      <>상담 신청</>
      {/* 상담 신청 폼 */}
      <img src="./section/requestForConsultation.jpg"/>
    </>
  );
}

export default RequestForConsultation;
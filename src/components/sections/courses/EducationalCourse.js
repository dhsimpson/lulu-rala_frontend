import styled from 'styled-components';
const RightNav = styled.nav`
border: 1px solid red;
`;

function EducationalCourse() {
  return (
    <>
      <>교육 과정</>
      <pre>
        영아 / 유아교육 과정
        그림책과 다양한 교구, 노래와 챈트 율동, 게임 등으로
        영어를 처음 접하는 아이들을 위한 놀이수업
        흥미유발과 호기심자극을 통해 재미있고
        다양한 영어놀이 경험을 위한 학습

        유아 / 초등교육 과정
        듣고, 말하고, 읽고 쓰는 기초적인 과정을 거쳐
        주니어토플과 디베이트를 목적으로 자신의
        생각을 영어로 표현하고 영어에 대한
        종합적인 지식발달을 위한 학습

        기관
        대집단 수업, 그룹과정으로
        유치원, 어린이집, 체육센터, 도서관,
        방과후과정, 문화센터에서
        진행하는 영어 활동

      </pre>
    </>
  );
}

export default EducationalCourse;
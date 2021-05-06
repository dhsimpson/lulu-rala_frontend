import '../../../css/section/educationalCourse.css';
import LeftNav from '../../LeftNav';
import navConfig from '../../../config/navConfig.json';

function EducationalCourse() {
  document.body.style.backgroundImage = "url('./background.jpg')";
  return (
    <>
      <LeftNav menu={navConfig.nav[1]}></LeftNav>
      <section className="section-educationalCourse nbg">
        <div className="div-educationalCourse">
          {window.innerWidth > 800 && <h1 className="MapoPeacefull">Educational course</h1>}
          <div className="div-inner-educationalCourse">
            <img src="./section/educationalCourse.jpg" alt="아이들이엔씨" />
        {window.innerWidth <= 800 && <h1 className="MapoPeacefull">Educational course</h1>}
            <div>
              {window.innerWidth > 800
              ?(<>
              <h2>영아 / 유아교육 과정</h2>
              <p>
                그림책과 다양한 교구, 노래와 챈트 율동, 게임 등으로<br />
            영어를 처음 접하는 아이들을 위한 놀이수업<br />
            흥미유발과 호기심자극을 통해 재미있고<br />
            다양한 영어놀이 경험을 위한 학습<br /><br />
              </p>

              <h2>유아 / 초등교육 과정</h2>
              <p>
                듣고, 말하고, 읽고 쓰는 기초적인 과정을 거쳐<br />
            주니어토플과 디베이트를 목적으로 자신의<br />
            생각을 영어로 표현하고 영어에 대한<br />
            종합적인 지식발달을 위한 학습<br /><br />
              </p>

              <h2>기관</h2>
              <p>
                대집단 수업, 그룹과정으로<br />
            유치원, 어린이집, 체육센터, 도서관,<br />
            방과후과정, 문화센터에서<br />
            진행하는 영어 활동
          </p>
              </>)
            :(<>
            <h2>영아 / 유아교육 과정</h2>
              <p>
                그림책과 다양한 교구, 노래와 챈트 율동, 게임 등으로 영어를 처음 접하는 아이들을 위한 놀이수업 흥미유발과 호기심자극을 통해 재미있고 다양한 영어놀이 경험을 위한 학습<br /><br />
              </p>

              <h2>유아 / 초등교육 과정</h2>
              <p>
                듣고, 말하고, 읽고 쓰는 기초적인 과정을 거쳐 주니어토플과 디베이트를 목적으로 자신의 생각을 영어로 표현하고 영어에 대한 종합적인 지식발달을 위한 학습<br /><br />
              </p>

              <h2>기관</h2>
              <p>
                대집단 수업, 그룹과정으로 유치원, 어린이집, 체육센터, 도서관, 방과후과정, 문화센터에서 진행하는 영어 활동
          </p>
            </>)}
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EducationalCourse;
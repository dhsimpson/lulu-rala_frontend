import '../../css/section/main.css';
import {useEffect} from 'react';
// c.f. 각 섹션들에 css를 다시 적용해야 함.
function ArticleFirst(){
  return(
  <>
         <img src="./section/main.png" />
        <div>
          <p>&nbsp;&nbsp;찾아가는 영어</p>
          <p>룰루랄라</p>
          <div />
          <p>&nbsp;&nbsp;놀이부터 배움까지</p>
          <p>&nbsp;&nbsp;유아 초등 노는 영어</p>
        </div>
  </>);
}
function ArticleThird(){
  return(
    <>
    <section className="section-luluRalaPlayingEnglish">
        <h1>Lulu Rala English</h1>
        <img src="./section/luluRalaPlayingEnglish.jpg" />
        <div>
          <p>룰루랄라 노는영어는  영어를 처음 시작하는</p>
          <p>아이부터 초등학생을 대상으로</p>
          <p>흥미로운 주제와 다양한 활동이 주가 되어</p>
          <p>아이들이 영어를 쉽고 재미있게 배울 수 있는</p>
          <p>영어학습 프로그램입니다.</p><br/>
          
          <p>균형적 언어접근법</p>
          <p>(Balanced Language Approach)을 기반으로</p>
          <p>듣고, 말하고, 읽고, 쓰기를 분리하지 않고</p> 
          <p>이야기와 놀이 그리고 다양한 활동으로</p>
            <p>의사소통능력을 골고루 성장시키며 영어에 대한</p>
            <p>자신감,</p>
          <p>영어에 대한 호기심과 욕구를 충족시키고</p>
          <p>성취감을 느끼도록 하며 영어를 즐겁게 습득할 수</p>
            <p>있도록 합니다.</p>
        </div>
    </section>
    </>
  );
}
function ArticleFourth(){
  return(
    <>
    <section className="section-educationalCourse">
        <h1>Educational course</h1>
        <div>
          <h2>영아 / 유아교육 과정</h2>
          <p>그림책과 다양한 교구, 노래와 챈트 율동, 게임 등으로</p>
          <p>영어를 처음 접하는 아이들을 위한 놀이수업</p>
          <p>흥미유발과 호기심자극을 통해 재미있고</p>
          <p>다양한 영어놀이 경험을 위한 학습</p>
          <br />
          <h2>유아 / 초등교육 과정</h2>
          <p>듣고, 말하고, 읽고 쓰는 기초적인 과정을 거쳐</p>
          <p>주니어토플과 디베이트를 목적으로 자신의</p>
          <p>생각을 영어로 표현하고 영어에 대한</p>
          <p>종합적인 지식발달을 위한 학습</p>
          <br />
          <h2>기관</h2>
          <p>대집단 수업, 그룹과정으로</p>
          <p>유치원, 어린이집, 체육센터, 도서관,</p>
          <p>방과후과정, 문화센터에서</p>
          <p>진행하는 영어 활동</p>
        </div>
        <img src="./section/educationalCourse.jpg" />
      </section>  
    </>
  );
}
function ArticleFifth(){
  return(
    <>
    <section className="section-requestForConsultation">
        <h1>상담 신청</h1>
        <img src="./section/requestForConsultation.jpg" />
        <form>
          <h2>상담신청하기</h2>
          <div>
            <div className="input-title"><p>신청자명</p></div>
            <input type="text" />
          </div>
          <div>
            <div className="input-title"><p>교습대상자 성명</p></div>
            <input type="text" />
          </div>
          <div>
            <div className="input-title"><p>연령(교습대상자)</p></div>
            <input type="text" />
          </div>

          <div>
            <div className="input-title"><p>연락처</p></div>
            <input className="input-phone-number" type="text" />
            <div className="input-dash"><p>-</p></div>
            <input className="input-phone-number" type="text" />
            <div className="input-dash"><p>-</p></div>
            <input className="input-phone-number" type="text" />
          </div>

          <div className="address">
            <div className="input-title"><p>주소</p></div>
            <div className="input-address">
              <div>
                <input type="text" />
                <input type="button" value="우편번호 찾기" />
              </div>
              <input type="text" />
              <input type="text" />
            </div>
          </div>

          <div>
            <div className="input-title"><p>희망프로그램</p></div>
            <input type="text" />
          </div>

          <div className="privacy-statement">
            <div id="privacyHtml"></div>
          </div>
          <div className="privacy-statemen-checkobx">
            <input type="checkbox" />
            <p>개인정보 수집 및 이용에 동의합니다</p>
          </div>
          <input type="submit" value="제출하기" />
        </form>
      </section>
    </>
  );
}
function Main() {
  document.body.style.backgroundImage = "url('./background-main.jpg')";
  useEffect(()=>{
    document.getElementById("privacyHtml").innerHTML = '<object style="width: 100%; height: 100%" type="text/html" data="privacy.html"/>';
  })
  return (
    <section className="section-main">
      <div className="article-first">
        {ArticleFirst()}
      </div>

      <div className="article-second">동영상 4~5개</div>

      <div className="article-third">
        {ArticleThird()}
      </div>
      <div className="article-fourth">
        {ArticleFourth()}
      </div>
      <div className="article-fifth">
        {ArticleFifth()}  
      </div>
    </section>
  );
}

export default Main;
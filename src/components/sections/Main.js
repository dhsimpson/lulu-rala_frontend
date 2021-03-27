import '../../css/section/main.css';
import {useEffect} from 'react';

import Footer from '../Footer';

import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

// c.f. 각 섹션들에 css를 다시 적용해야 함.

const anchors = [
  "Lulurala&nbsp;English", 
  "Introduce&nbsp;Videos", 
  "Why&nbsp;Lulurala", 
  "Educational&nbsp;Course", 
  "Consulting"];
function Main() {
  document.body.style.backgroundImage = "url('./background-main.jpg')";
  useEffect(()=>{
    document.getElementById("privacyHtml").innerHTML = `
<div style="width: 100%; height: 100%">
<h2>개인정보처리방침</h2>
	<p> <p class="ls2 lh6 bs5 ts4"><em class="emphasis"><아이들이엔씨>('http://www.idlenc.com/'이하 '아이들이엔씨')</em>은(는) 「개인정보 보호법」 제30조에 따라 정부주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.</p><p class="ls2">○ 이 개인정보처리방침은 <em class="emphasis">2021</em>년 <em class="emphasis">4</em>월 <em class="emphasis">1</em>부터 적용됩니다.</p></br><p class='lh6 bs4'><strong>제1조(개인정보의 처리 목적)<br/><br/><em class="emphasis"><아이들이엔씨>('http://www.idlenc.com/'이하  '아이들이엔씨')</em>은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 겨우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</strong></p><ul class="list_indent2 mgt10"><p class="ls2">6. 기타</p><p class="ls2">상담신청을 통한 서비스 제공 등을 목적으로 개인정보를 처리합니다.</p></ul></br></br><p class='lh6 bs4'><strong>제2조(개인정보의 처리 및 보유 기간)</strong></br></br>① <em class="emphasis"><아이들이엔씨></em>은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</br></br>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p><br/><br/><p class="lh6 bs4"><strong>제3조(정보주체와 법정대리인의 권리·의무 및 그 행사방법)</strong></p><p class="ls2"><br/><br/>① 정보주체는 아이들이엔씨에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.</p><p class='sub_p'>② 제1항에 따른 권리 행사는아이들이엔씨에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 아이들이엔씨은(는) 이에 대해 지체 없이 조치하겠습니다.</p><p class='sub_p'>③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.</p><p class='sub_p'>④ 개인정보 열람 및 처리정지 요구는  「개인정보 보호법」  제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.</p><p class='sub_p'>⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.</p><p class='sub_p'>⑥ 아이들이엔씨은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.</p></br></br><p class='lh6 bs4'><strong>제4조(처리하는 개인정보의 항목 작성) </strong></br></br> ① <em class="emphasis"><아이들이엔씨></em>은(는) 다음의 개인정보 항목을 처리하고 있습니다.</p><ul class='list_indent2 mgt10'><li class='tt'>1< 기타 ></li><li>필수항목 : 이메일, 휴대전화번호, 자택주소, 생년월일, 이름</li><li>선택항목 : </li></ul></br></br><p class='lh6 bs4'><strong>제5조(개인정보의 파기)<em class="emphasis"></strong></p><p class='ls2'></br>① <아이들이엔씨> 은(는) 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</br></br>② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.</br>1. 법령 근거 :</br>2. 보존하는 개인정보 항목 : 계좌정보, 거래날짜</br></br>③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.</br>1. 파기절차</br> <아이들이엔씨> 은(는) 파기 사유가 발생한 개인정보를 선정하고, <아이들이엔씨> 의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.</br></p><p class='sub_p mgt10'>2. 파기방법</p><p class='sub_p'>전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.</p>종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다</p></br></br><p class='lh6 bs4'><strong>제6조(개인정보의 안전성 확보 조치)<em class="emphasis"></br></br><아이들이엔씨></em>은(는) 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</strong></p><p class='sub_p mgt10'>1. 정기적인 자체 감사 실시</br> 개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.</br></br>2. 개인정보 취급 직원의 최소화 및 교육</br> 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.</br></br>3. 내부관리계획의 수립 및 시행</br> 개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.</br></br>4. 개인정보에 대한 접근 제한</br> 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.</br></br>5. 문서보안을 위한 잠금장치 사용</br> 개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.</br></br></p></br></br><p class="lh6 bs4"><strong>제7조(개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항)</strong></p><p class="ls2"><br/><br/>아이들이엔씨 은(는) 정보주체의 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용하지 않습니다.<p class='sub_p mgt30'><strong>제8조 (개인정보 보호책임자) </strong></p><p class='sub_p mgt10'> ①  <span class='colorLightBlue'>아이들이엔씨</span> 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p><ul class='list_indent2 mgt10'><li class='tt'>▶ 개인정보 보호책임자 </li><li>성명 :양한길</li><li>직책 :사업부장</li><li>직급 :이사</li><li>연락처 :02-6052-1021, hangil13@gmail.com, 05041957940</li></ul><p class='sub_p'>※ 개인정보 보호 담당부서로 연결됩니다.<p/> <ul class='list_indent2 mgt10'><li class='tt'>▶ 개인정보 보호 담당부서</li><li>부서명 :</li><li>담당자 :</li><li>연락처 :, , </li></ul><p class='sub_p'>② 정보주체께서는 아이들이엔씨 의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 아이들이엔씨 은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.</p><p class='sub_p mgt30'><strong>제9조(개인정보 열람청구)</br> 정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다.<br/><아이들이엔씨></span>은(는) 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다. </strong></p><ul class='list_indent2 mgt10'><li class='tt'>▶ 개인정보 열람청구 접수·처리 부서 </li><li>부서명 : </li><li>담당자 : </li><li>연락처 : , , </li></ul></br></br><p class='lh6 bs4'><strong>제10조(권익침해 구제방법)<em class="emphasis"></em></strong></p><br/><br/>정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.<br/><br/>
  1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)<br/>

  2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)<br/>

  3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)<br/>

  4. 경찰청 : (국번없이) 182 (cyberbureau.police.go.kr)<br/><br/>
「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.<br/><br/>
※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.</br></br><p class='lh6 bs4'><strong>제11조(개인정보 처리방침 변경)<em class="emphasis"></em></strong></p><br/></p><p class='sub_p'>① 이 개인정보처리방침은 2021년 4월 1부터 적용됩니다.</p><p class='sub_p'></p><p class='sub_p'></p><p class='sub_p'>② 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다. </p><p class='sub_p'></p><p class='sub_p'></p></p>
</div>
    `;
  })
  return (
    <>
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        render={() => {
          return (
            <div>
              <div className="section article-first">
                {ArticleFirst()}
              </div>

              <div className="section article-second">동영상 4~5개</div>

              <div className="section article-third">
                {ArticleThird()}
              </div>
              <div className="section article-fourth">
                {ArticleFourth()}
              </div>
              <div className="section article-fifth">
                {ArticleFifth()}
              </div>
               <div className="section fp-auto-height"> <Footer /></div>
            </div>
          );
        }}
      />
    </>)
}

function ArticleFirst() {
  return (
    <>
      <img src="./section/main.png" alt="mainmain" />
      <div className="class-main">
        <p>&nbsp;찾아가는 영어</p>
        <p>룰루랄라</p>
        <div />
        <p>&nbsp;놀이부터 배움까지</p>
        <p>&nbsp;유아, 초등 노는 영어</p>
      </div>
    </>);
}
function ArticleThird(){
  return(
    <>
        <h1 className="MapoPeacefull">Lulu Rala English</h1>
        <img className="third-left" src="./section/luluRalaPlayingEnglish.jpg" />
        <div className="third-right">
          <p>룰루랄라 노는영어는  영어를 처음 시작하는</p>
          <p>아이부터 초등학생을 대상으로</p>
          <p>흥미로운 주제와 다양한 활동이 주가 되어</p>
          <p>아이들이 영어를 쉽고 재미있게 배울 수 있는</p>
          <p>영어학습 프로그램입니다.</p><br/>
          
          <p>균형적 언어접근법</p>
          <p>(<span className="MapoPeacefull">Balanced Language Approach</span>)을 기반으로</p>
          <p>듣고, 말하고, 읽고, 쓰기를 분리하지 않고</p> 
          <p>이야기와 놀이 그리고 다양한 활동으로</p>
            <p>의사소통능력을 골고루 성장시키며 영어에 대한</p>
            <p>자신감,</p>
          <p>영어에 대한 호기심과 욕구를 충족시키고</p>
          <p>성취감을 느끼도록 하며 영어를 즐겁게 습득할 수</p>
            <p>있도록 합니다.</p>
        </div>
    </>
  );
}
function ArticleFourth(){
  return(
    <>
        <h1>Educational course</h1>
        <div className="fourth-left">
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
        <img className="fourth-right" src="./section/educationalCourse.jpg" />
    </>
  );
}
function ArticleFifth(){
  return(
    <>
        <h1>상담 신청</h1>
        <img className="fifth-left" src="./section/requestForConsultation.jpg" />
        <form className="fifth-right">
          <h2 className="MapoPeacefull">IDL EDUCATION &amp; CULTURE</h2>
          <p>신청자명(기관)</p>
          <input type="text"/>
          <p>연락처</p>
          <input type="text"/>
          <p>회신 받을 메일 주소</p>
          <input type="text"/>
          <p>주소(시/구/동 까지)</p>
          <input type="text"/>
          <p>신청 내용</p>
          <textarea id="consultContent"/>

          <div className="privacy-statement">
            <div id="privacyHtml"></div>
          </div>
          <div className="privacy-statemen-checkobx">
            <input type="checkbox" />
            <p>개인정보 수집 및 이용에 동의합니다</p>
          </div>
          <input className="MapoPeacefull" type="submit" value="Send" />
        </form>
        </>
  );
}

export default Main;
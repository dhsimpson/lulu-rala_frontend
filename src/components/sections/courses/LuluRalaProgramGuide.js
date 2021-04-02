import '../../../css/section/luluRalaProgramGuide.css';
import LeftNav from '../../LeftNav';
import navConfig from '../../../config/navConfig.json';

function LuluRalaProgramGuide() {
  document.body.style.backgroundImage = "url('./background.jpg')";
  return (
    <>
    <LeftNav menu={navConfig.nav[1]}></LeftNav>
    <section className="section-luluRalaProgramGuide">
      <h1 className="MapoPeacefull">Lulu Rala Program guide</h1>
      <img src="./section/luluRalaProgramGuide.jpg"  alt="아이들이엔씨"/>
      <div className="section-left">
        <h2>대상</h2>
        <p>영유아(24개월 이상) ~ 초등학생  (기관은 별도 상담)</p>
        <br />
        <h2>교육비</h2>
        <p>수강료 페이지 참고 (교재비, 부가세 별도)</p>
      </div>
      <div className="section-right">
        <h2>수업형식 및 교육비 안내</h2>
        <p>수업횟수와 수업의 형태는 선택 가능합니다.</p>
        <br />
        <p>화상영어 : 화상영어 20분 수업 주 1~2회</p>
        <p>방문영어 : 방문영어 40분 수업 1~2회</p>
        <p>화상+방문 혼합 : 화상영어 20분  수업 +  방문영어 40분 수업</p>
      </div>
    </section>
    </>
  );
}

export default LuluRalaProgramGuide;
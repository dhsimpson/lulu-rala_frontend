import '../../../css/section/whyLuluRala.css';
import LeftNav from '../../LeftNav';
import navConfig from '../../../config/navConfig.json';

function WhyLuluRala() {
  document.body.style.backgroundImage = "url('./background.jpg')";
  return (
    <>
    <LeftNav menu={navConfig.nav[2]}></LeftNav>
    <section className="section-whyLuluRala">
      <h1>WhyLuluRala</h1>
      <img src="./section/whyLuluRala.jpg" />
      <div>
        <p>유아 영어 교육 전문가인 룰루랄라 선생님은  유아/영</p>
        <p>어교육 전공, Tesol 수료, 교사교육 등의 전문가 양</p>
        <p>성과정을 수료합니다.</p>
        <br />
        <p>1:1 개인지도, 유아교육기관, 학원, 학교기관 등 현직</p>
        <p>에서 활동 중 입니다.</p>
        <br />
        <p>문화센터, 기관, 학원 등의 일대 다 수업과 다르게 1:1, </p>
        <p>1:3 소수정예로, 집중도와 결과가 다르고 시간과 비용</p>
        <p>대비 효과가 뛰어납니다.</p>
        <br />
        <p>체계적인 커리큘럼과 교수법으로 영어환경에 최대한 </p>
        <p>몰입시켜 단순히 외우기만 하는 영어를 하기보다 살아</p>
        <p>있는(Live) 영어를 하도록 합니다.</p>
        <br />
        <p>놀이활동과 영어활동을 위한 다양하고 다채로운 교구</p>
        <p>재를 통해 영어학습에 대한 흥미유발과 동시에 효과를 </p>
        <p>극대화합니다.</p>
      </div>
    </section>
    </>
  );
}

export default WhyLuluRala;
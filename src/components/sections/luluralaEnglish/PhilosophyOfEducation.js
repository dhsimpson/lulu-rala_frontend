import '../../../css/section/philosophyOfEducation.css';
import LeftNav from '../../LeftNav';
import navConfig from '../../../config/navConfig.json';
function PhilosophyOfEducation() {
  document.body.style.backgroundImage = "url('./background.jpg')";
  return (
    <>
      <LeftNav menu={navConfig.nav[0]}></LeftNav>
      <section className="section-philosophyOfEducation">
        <img src="./section/PhilosophyOfEducation.jpg" alt="아이들이엔씨" />
        <div>
          <p>룰루랄라 노는영어는 다릅니다.<br />
        모두가 다른 아이들, 개인의 성향을 존중하고 영어에 대한 호기심과<br/>
        흥미를 이끌어 자신감을 갖고 자유롭게 표현 할 수 있도록 교육합니다.<br />
        모든 아이들에게 영어도 즐거울 수 있다는 것을 알려주고 싶습니다.</p>
            <h2>검증된 최고의 선생님</h2>
            <p>유아/영어 전공, 관련자격/종사자</p>
            <h2>살아있는 영어</h2>
            <p>외우고 끝나지 않는, 실제 생활에서 사용 가능한</p>

            <h2>즐겁고 흥미로운 경험</h2>
            <p>유아, 어린이 중심의</p>

            <h2>소통하는 교육</h2>
            <p>선생님과 아이가 상호작용하는</p>

        </div>

      </section>
    </>
  );
}

export default PhilosophyOfEducation;
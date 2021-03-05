import '../../../css/section/philosophyOfEducation.css';
function PhilosophyOfEducation() {
  document.body.style.backgroundImage = "url('./background.jpg')";
  return (
    <section className="section-philosophyOfEducation">
      <h1>PHILOSHPHY OF EDUCATION</h1>
      <h2>룰루랄라 노는영어는 다릅니다.</h2>
      <div className="div-philosophyOfEducation-vertical">
        <p>모두가 다른 아이들, 개인의 성향을 존중하고 영어에 대한 호기심과 흥미를 이끌어</p>
        <p>자신감을 갖고 자유롭게 표현 할 수 있도록 교육합니다. </p>
        <p>모든 아이들에게 영어도 즐거울 수 있다는 것을 알려주고 싶습니다.</p>
      </div>
      <img src="./section/PhilosophyOfEducation.jpg" />
      <div className="div-philosophyOfEducation-horizontal">
        <div>
          <h2>검증된 최고의 선생님</h2>
          <p>유아/영어 전공, 관련자격/종사자</p>
        </div>

        <div>
          <h2>살아있는 영어</h2>
          <p>단순히 외우고 끝나지 않는</p>
        </div>

        <div>
          <h2>즐겁고 흥미로운 경험</h2>
          <p>아이 중심의</p>
        </div>

        <div>
          <h2>소통하는 교육</h2>
          <p>선생님과 아이가 상호작용하는</p>
        </div>
      </div>
    </section>
  );
}

export default PhilosophyOfEducation;
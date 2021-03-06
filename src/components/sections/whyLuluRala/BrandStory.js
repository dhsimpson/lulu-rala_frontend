import '../../../css/section/brandStory.css';
import LeftNav from '../../LeftNav';
import navConfig from '../../../config/navConfig.json';

function BrandStory() {
  document.body.style.backgroundImage = "url('./background.jpg')";
  return (
    <>
    <LeftNav menu={navConfig.nav[2]}></LeftNav>
    <section className="section-brandStory">
      <h1>Brand Story</h1>
      <img src="./section/brandStory.jpg" />
      <div>
        <h2>“어린이 영어교육 전문가”</h2>
        <br />
        <p>아이들이엔씨는 지난 10여 년간 아이들의 영어교육을 위해</p>
        <p>1:1 영어지도, 소/대 그룹 지도부터 유치원/어린이집,</p>
        <p>학교기관의 대집단 수업, 영어학원 운영까지</p>
        <p>현장에서 아이들과 함께 소통하며 일상에서</p>
        <p>자연스럽게 영어를 습득할 수 있도록 지도해왔습니다.</p>
        <br />
        <p>지금까지 쌓아온 노하우를 바탕으로 새로운 트렌드와</p>
        <p>시대에 맞는 영어교육을 하여 아이들의 놀 권리를 충분히 보장하고</p>
        <p>영어교육도 즐거울 수 있다는 것을 알려주며</p>
        <p>함께 놀고, 즐기다 보면 자연스럽게 영어로 생각하고</p>
        <p>표현하며 소통할 수 있게 할 것입니다.</p>
        <br />
        <p>4차 산업혁명의 활성화로 영어가 더욱 중요해졌습니다.</p>
        <p>우리를 통해 많은 아이들이 더 많은 기회와 더 큰 무대에 서서</p>
        <p>꿈을 이루도록 함께 하겠습니다.</p>
      </div>
    </section>
    </>
  );
}

export default BrandStory;
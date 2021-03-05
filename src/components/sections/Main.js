import '../../css/section/main.css';
function Main() {
  document.body.style.backgroundImage = "url('./background-main.jpg')";
  return (
    <section className="section-main">
      <img src="./section/main.jpg"/>
      {/* 메인은 마우스 스크롤 하면 section이 바뀌도록 */}

      {/* 섹션들 나열 */}
      <div>
        <p>&nbsp;&nbsp;찾아가는 영어</p>
        <p>룰루랄라</p>
        <div/>
        <p>&nbsp;&nbsp;놀이부터 배움까지</p>
        <p>&nbsp;&nbsp;유아 초등 노는 영어</p>
      </div>
      {/* <>동영상</> */}
    </section>
  );
}

export default Main;
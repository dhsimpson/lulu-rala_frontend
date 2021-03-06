import '../../../css/section/requestForConsultation.css';

function RequestForConsultation() {
  document.body.style.backgroundImage = "url('./background.jpg')";
  return (
    <section className="section-requestForConsultation">
      <h1>상담 신청</h1>
      <form>
        <h2>LEARNING&amp;CO</h2>
        <h3>Enter Your Name</h3>
        <input type="text" placeholder="Name"></input>
        <h3>Enter Your Email</h3>
        <input type="text" placeholder="Email"></input>
        <h3>Enter Your Subject</h3>
        <input type="text" placeholder="Subject"></input>
        <h3>Enter Your Message here</h3>
        <textarea placeholder="Message"></textarea>
        <br/>
        <input type="submit" value="Send"></input>
      </form>
      <div>
        <p>신청자명<br />
        교습대상자 성명<br />
        교습대상자 연령(개월수)<br />
        연락처<br />
        주소<br />
        <br />
        상담내용<br />
        <br />
        업 희망 시간(요일/시간까지 입력)<br />
        희망 프로그램<br />
        하단에 개인정보취급방침 동의(체크, 스크롤바)<br />
        <br />
        </p>
      </div>
    </section>
  );
}

export default RequestForConsultation;
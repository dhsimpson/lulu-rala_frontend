import '../../../css/section/requestForConsultation.css';
import LeftNav from '../../LeftNav';
import navConfig from '../../../config/navConfig.json';
import {useEffect} from 'react';

function RequestForConsultation() {
  document.body.style.backgroundImage = "url('./background.jpg')";
  useEffect(()=>{
    document.getElementById("privacyHtml").innerHTML = '<object style="width: 100%; height: 100%" type="text/html" data="privacy.html"/>';
  })
  return (
    <>
      <LeftNav menu={navConfig.nav[3]}></LeftNav>
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

export default RequestForConsultation;
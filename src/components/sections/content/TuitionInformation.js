import '../../../css/section/tuitionInformation.css';
import LeftNav from '../../LeftNav';
import navConfig from '../../../config/navConfig.json';

function TuitionInformation() {
  document.body.style.backgroundImage = "url('./background.jpg')";
  return (
    <>
    <LeftNav menu={navConfig.nav[2]}></LeftNav>
    <section className="section-tuitionInformation">
      <h1>수강료</h1>
      <table>
        <thead>
        <tr><th>수업 종류 및 시간</th><th>횟수(월)</th><th>1명</th><th>2명</th><th>3명</th><th>4명</th></tr>
        </thead>
        <tbody>
        <tr><td>화상 (20분)</td><td>4</td><td>68,000</td><td></td><td></td><td></td></tr>
        <tr><td>화상 (20분)</td><td>8</td><td>136,000</td><td></td><td></td><td></td></tr>
        <tr><td>혼합 (화상20분+방문40분)</td><td>4</td><td>228,000</td><td></td><td></td><td></td></tr>
        <tr><td>방문 (40분)</td><td>4</td><td>160,000</td><td>112,000</td><td>80,000</td><td>48,000</td></tr>
        <tr><td>방문 (50분)</td><td>4</td><td>200,000</td><td>140,000</td><td>100,000</td><td>60,000</td></tr>
        <tr><td>방문 (80분)</td><td>4</td><td>320,000</td><td>224,000</td><td>160,000</td><td>96,000</td></tr>
        <tr><td>방문 (100분)</td><td>4</td><td>400,000</td><td>280,000</td><td>200,000</td><td>120,000</td></tr>
        <tr><td>방문 (40분)</td><td>8</td><td>320,000</td><td>224,000</td><td>160,000</td><td>96,000</td></tr>
        <tr><td>방문 (50분)</td><td>8</td><td>400,000</td><td>280,000</td><td>200,000</td><td>120,000</td></tr>
        <tr><td>방문 (80분)</td><td>8</td><td>640,000</td><td>448,000</td><td>320,000</td><td>192,000</td></tr>
        <tr><td>방문 (100분)</td><td>8</td><td>800,000</td><td>560,000</td><td>400,000</td><td>240,000</td></tr>
        </tbody>
      </table>
      <h2>수강료 결제는 매월 1일, 교재비/부가세는 별도 </h2>
    </section>
    </>
  );
}

export default TuitionInformation;
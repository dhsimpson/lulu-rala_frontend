import {FAQList} from '../../../config/FAQConfig.js';
import '../../../css/section/faq.css';
import LeftNav from '../../LeftNav';
import navConfig from '../../../config/navConfig.json';

function FAQ() {
  document.body.style.backgroundImage = "url('./background.jpg')";
  return (
    <>
    <LeftNav menu={navConfig.nav[3]}></LeftNav>
    <section className="section-faq">
      <ul>
      {
        FAQList.map( (d, i)=>{
          return (
            <li>
            {/* <hr key={i}/> */}
            {d.question}
            {d.answer}
            </li>
          )
        })
      }
      </ul>
    </section>
    </>
  );
}

export default FAQ;
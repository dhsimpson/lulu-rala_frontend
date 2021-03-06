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
      <div>
      {
        FAQList.map( (d, i)=>{
          return (
            <>
            <hr key={i}/>
            {d.question}
            {d.answer}
            </>
          )
        })
      }
      </div>
    </section>
    </>
  );
}

export default FAQ;
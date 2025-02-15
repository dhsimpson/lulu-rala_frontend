import { FAQList } from '../../../config/FAQConfig.js';
import '../../../css/section/faq.css';
import LeftNav from '../../LeftNav';
import navConfig from '../../../config/navConfig.json';

function FAQ() {
  document.body.style.backgroundImage = "url('./background.jpg')";
  return (
    <>
      <LeftNav menu={navConfig.nav[2]}></LeftNav>
      <section className="section-faq nbg">
        <div className="div-faq">
          <div className="div-inner-faq">
            <ul>
              {
                FAQList.map((d, i) => {
                  return (
                    <li key={i}>
                      {/* <hr key={i}/> */}
                      {d.question}
                      {d.answer}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
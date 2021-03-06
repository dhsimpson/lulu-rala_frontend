import {FAQList} from '../../../config/FAQConfig.js';
import '../../../css/section/faq.css';

function FAQ() {
  document.body.style.backgroundImage = "url('./background.jpg')";
  return (
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
  );
}

export default FAQ;
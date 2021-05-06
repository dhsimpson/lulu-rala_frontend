import '../../../css/section/luluRalaPlayingEnglish.css';
import LeftNav from '../../LeftNav';
import navConfig from '../../../config/navConfig.json';

function LuluRalaPlayingEnglish() {
  document.body.style.backgroundImage = "url('./background.jpg')";
  return (
    <>
      <LeftNav menu={navConfig.nav[1]}></LeftNav>
      <section className="section-luluRalaPlayingEnglish nbg">
        <div className="div-luluRalaPlayingEnglish">
          {window.innerWidth > 800 && <h1 className="MapoPeacefull">Lulu Rala English</h1>}
          <div className="div-inner-luluRalaPlayingEnglish">
            <img src="./section/luluRalaPlayingEnglish.jpg" alt="아이들이엔씨" />
            {window.innerWidth <= 800 && <h1 className="MapoPeacefull">Lulu Rala English</h1>}
            <div>
              {window.innerWidth > 800
              ?(<p>
                룰루랄라 노는영어는  영어를 처음 시작하는<br />
            아이부터 초등학생을 대상으로<br />
            흥미로운 주제와 다양한 활동이 주가 되어<br />
            아이들이 영어를 쉽고 재미있게 배울 수 있는<br />
            영어학습 프로그램입니다.<br /><br />

            균형적 언어접근법<br />
            <span className="MapoPeacefull">(Balanced Language Approach)</span>을 기반으로<br />
            듣고, 말하고, 읽고, 쓰기를 분리하지 않고<br />
            이야기와 놀이 그리고 다양한 활동으로<br />
            의사소통능력을 골고루 성장시키며 영어에 대한<br />
            자신감,<br /><br />

            영어에 대한 호기심과 욕구를 충족시키고<br />
            성취감을 느끼도록 하며 영어를 즐겁게 습득할 수<br />
            있도록 합니다.
            </p>)
            :(<p>
              룰루랄라 노는영어는  영어를 처음 시작하는 아이부터 초등학생을 대상으로 흥미로운 주제와 다양한 활동이 주가 되어 아이들이 영어를 쉽고 재미있게 배울 수 있는 영어학습 프로그램입니다.<br /><br />

          균형적 언어접근법<span className="MapoPeacefull">(Balanced Language Approach)</span>을 기반으로 듣고, 말하고, 읽고, 쓰기를 분리하지 않고 이야기와 놀이 그리고 다양한 활동으로 의사소통능력을 골고루 성장시키며 영어에 대한 자신감,<br /><br />

          영어에 대한 호기심과 욕구를 충족시키고 성취감을 느끼도록 하며 영어를 즐겁게 습득할 수 있도록 합니다.
          </p>)}
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default LuluRalaPlayingEnglish;
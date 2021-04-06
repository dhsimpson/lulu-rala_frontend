import '../css/footer.css';
function Footer() {
    return (
        <footer>
            <div className="div-footer-left">
                <img src="./footer/idlenc.png"/>
                <div>
                    <img src="./footer/blog.png" alt="아이들이엔씨"/>
                    <img src="./footer/cafe.png" alt="아이들이엔씨"/>
                    <img src="./footer/youtube.png" alt="아이들이엔씨"/>
                </div>
            </div>
            <div className="div-footer-right">
                <h2>아이들이엔씨</h2><br/>
                <p>
                    사업자번호 : 558-99-00269 ㅣ 대표자 : 이동찬 {window.innerWidth > 800 ? <>ㅣ</>:<br/>} 이메일 : idlenc@naver.com<br />
                    전화 : 02-6052-1021 (상담가능시간 : 10시 ~ 6시) 주말, 공휴일 휴무<br />
                    주소 : 서울시 동대문구 전농로 10길 20, 104호<br />
                </p>
            </div>
        </footer>
    );
}

export default Footer;
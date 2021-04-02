import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/header.css';
function Header() {
    let [showPopUp, setShowPopUp] = useState(0);
    const toggleLogInPopUp = () => {
        if (showPopUp) {
            document.getElementById("login-background").style.display = "none";
            setShowPopUp(false);
        }
        else {
            document.getElementById("login-background").style.display = "block";
            setShowPopUp(true);
        }
    }
    // esc 키 누르면 로그인 창 꺼지도록
    document.onkeydown = function(e) {
        e = e || window.event;
        let isEscape = false;
        if("key" in e) {
            isEscape = (e.key === "Escape" || e.key === "Esc");
        }
        else {
            isEscape = (e.keyCode === 27);
        }
        if(isEscape){
            document.getElementById("login-background").style.display = "none";
            setShowPopUp(false);
        }
    }
    return (
        <div className="div-header">
            <header>
                <Link to="/">아이들이엔씨</Link>
            </header>
            <img
                onClick={() => toggleLogInPopUp()}
                className="loginIcon" src="./loginIcon.png" 
                alt="아이들이엔씨"/>
            {showPopUp ?
                <div id="logIn-popUp">
                    <p>아이들이엔씨</p>
                    <input
                        onClick={() => toggleLogInPopUp()}
                        id="exit-button" type="submit" value="+" />
                    <span className="input-wrapper">
                        <img src="./human.png" />
                        <input id="input-id" type="text" placeholder="아이디" />
                    </span>
                    <span className="input-wrapper">
                        <img src="./lock.png" />
                        <input id="input-pw" type="text" placeholder="비밀번호" />
                    </span>
                    <input className="popUp-botton login" type="submit" value="로그인" />
                    <input className="popUp-botton signUp" type="submit" value="회원가입" />
                    <input id="find-account" type="submit" value="ID/PW 찾기" />
                </div>
                : <></>}
            {/* 로그인 창 외부 클릭 시 로그인 창 꺼지도록 */}
            <div id="login-background" onClick={() => toggleLogInPopUp()} />
        </div>
    );
}

export default Header;


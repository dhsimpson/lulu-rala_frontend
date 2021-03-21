import { Link } from 'react-router-dom';
import {useState} from 'react';
import '../css/header.css';
function Header() {
    let [showPopUp, setShowPopUp] = useState(0);
    return (
        <div className="div-header">
            <header>
                <Link to="/">아이들이엔씨</Link>
            </header>
            <img 
            onClick={() => setShowPopUp(true)} 
            className="loginIcon" src="./loginIcon.png" />
            {showPopUp?
                <div id="logIn-popUp">
                    <p>아이들이엔씨</p>
                    <input 
                    onClick={() =>setShowPopUp(false) }
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
            :<></>}

        </div>
    );
}

export default Header;


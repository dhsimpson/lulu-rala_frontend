import styled from 'styled-components';
const Foooter = styled.footer`
border: 1px solid yellow;
`;
function Footer() {
    return (
        <Foooter>
            하단고정
            <br />
        아이들이엔씨<br />
        사업자번호 : 558-99-00269 ㅣ 대표자 : 이동찬 ㅣ 이메일 : idlenc@naver.com<br />
        전화 : 02-6052-1021 (상담가능시간 : 10시 ~ 6시) 주말, 공휴일 휴무<br />
        주소 : 서울시 동대문구 전농로 10길 20, 104호<br />
        </Foooter>
    );
}

export default Footer;
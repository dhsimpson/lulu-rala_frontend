import styled from 'styled-components';
const Footer = styled.footer`
border: 1px solid yellow;
`;
function WhyLuluRala() {
    document.body.style.backgroundImage = "url('./background.jpg')";
    return (
        <>
            {/* 좌측 선택 네비게이션 */}
            <a>Brand story</a>
            <a>PHILOSOPHY OF EDUCATION</a>
            <a>Why Lulu Rala</a>
            {/* 여기에 section */}
        </>
    );
}

export default WhyLuluRala;
import styled from 'styled-components';
const Footer = styled.footer`
border: 1px solid yellow;
`;
function Courses() {
    document.body.style.backgroundImage = "url('./background.jpg')";
    return (
        <>
            <>Why Lulu Rala</>
            {/* 좌측 선택 네비게이션 */}
            <a>Lulu Rala Playing English</a>
            <a>Educational course</a>
            <a>Lulu Rala Program guide</a>

            {/* 여기에 section */}
        </>
    );
}

export default Courses;
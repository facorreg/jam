import styled from 'styled-components';

const MenuStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;

  .menuButton {
    height: 100%;
    width: auto;
    margin: 0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    letter-spacing: 3px;
    color: #202020;
    cursor: pointer;
  }
`;

export default MenuStyle;

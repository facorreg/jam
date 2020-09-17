import styled from 'styled-components';

const MenuStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;

  .menuButton {
    background: inherit;
    font-size: inherit;
    letter-spacing: inherit;
    font-weight: normal;
    outline: none;
    font-family: 'Roboto', sans-serif;
    border: none;
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

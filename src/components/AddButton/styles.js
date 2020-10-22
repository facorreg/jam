import styled from 'styled-components';

const StyledAddButton = styled.div`
  height: 100%;

  .textCartButton {
    height: 100%;
    border: 1px solid rgba(51, 51, 51, 1);
    text-align: center;
    width: 200px;
    margin-bottom: 20px;
    line-height: 40px;
    cursor: pointer;
  }

  .textCartButton:hover {
    border-width: 2px;
    background: rgba(51, 51, 51, 0.02);
  }

  .cartButton {
    height: 100%;
    width: auto;
    background: transparent;
    cursor: pointer;
    border: none;
    outline: none;

    img {
      height: 100%;
      width: auto;
    }
  }

  .addCartButton {
    display: grid;
    grid-template-columns: repeat(3, 35px);

    div {
      height: 35px;
      border: 1px solid rgb(51, 51, 51);
      line-height: 35px;
      text-align: center;
    }

    div {
      border-left: none;
      border-right: none;
      background: rgba(95, 95, 95);
      color: white;
      font-size: 20px;
      font-weight: bold;
    }

    button {
      cursor: pointer;
    }
  }
`;

export default StyledAddButton;

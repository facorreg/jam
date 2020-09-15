import styled from 'styled-components';

const PromotionContainer = styled.div`{
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-end;

  .promotion {
    height: 35px;
    width: 60px;
    line-height: 35px;
    border: 1px solid rgba(51, 51, 51, .2);
    font-size: 20px;
    background: rgb(242, 242, 242);
    margin: 10px 14px;
  }
}`;

export default PromotionContainer;

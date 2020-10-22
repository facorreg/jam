import styled from 'styled-components';

const StyledCart = styled.div`
  min-height: 100%;
  width: 100%;
  display: grid;
  grid-template-areas:
    "cartStep"
    "body";

  .cartBody {
    grid-area: body;
    width: 80%;
    margin: auto;
    margin-top: 60px;

    display: grid;
    grid-template-areas:
      "cartItemContainer cartSummary"
      "cartItemContainer .";
    
    grid-template-columns: 72% 28%;
    grid-column-gap: 20px;
  
    .cartItemContainer {
      grid-area: cartItemContainer;
      width: 100%;
    }
    
    .cartItemContainer:first-child div {
      margin-top: 0px;
    }
    
    .cartSummary {
      grid-area: cartSummary;
      max-height: 500px;
      border: 1px solid black;
      display: grid;
      padding: 20px;

      .title {
        border-bottom: 1px solid gray;
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 30px;
        line-height: 30px;
        padding: 20px 0;
        text-align: center;
        vertical-align: middle;
      }

      .summaryMsg {
        display: flex;
        
        & div {
          font-size: 20px;
          line-height: 20px;
          padding: 20px 0;
        }
      
        & div:last-child {
          margin-left: auto;
        }

        border-bottom: 1px solid gray;
      }

      .summaryMsg:last-of-type {
        font-weight: bold;
      }

      .orderBtn {
        border: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        vertical-align: middle;
        border-radius: 3px;
        color: #fff;
        font-size: 18px;
        letter-spacing: 2px;
        cursor: pointer;
        transition: background 0.3s ease-in-out;
        margin-top: 20px;
        background: rgb(51, 51, 51);
      }

      .orderBtn:hover {
        background: rgb(95, 95, 95);
      }
    }
  }
`;

export default StyledCart;

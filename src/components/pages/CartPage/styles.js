import styled from 'styled-components';

const StyledCart = styled.div`
  min-height: 100%;
  width: 100%;
  display: grid;
  grid-template-areas:
    "cartStep"
    "body";

  .cartStepsContainer, .cartSteps {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cartStepsContainer {
    grid-area: cartStep;

    .cartSteps {
      width: 100%;

      .step {
        width: 25%;
        height: 60px;
        position: relative;
        background: rgb(51, 51, 51);
        color: white;
        text-align: center;
        line-height: 60px;
      }

      .stepArrow, .stepArrowBorder {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 30px 0 30px 18px;
        border-color: transparent transparent transparent #a9aba9;
        position: absolute;
        right: -18px;
      }

      .stepArrow {
        border-left-color: rgba(51, 51, 51);
        z-index: 2;
      }

      .stepArrowBorder {
        border-left-color: white;
        z-index: 1;
      }

      .currStep {
        background: rgb(95, 95, 95);
      }

      .currStep .stepArrow  {
        border-left-color: rgb(95, 95, 95);
      }
    }
  }

  .cartBody {
    grid-area: body;
    width: 80%;
    margin: auto;
    margin-top: 60px;

    grid-template-areas:
      "cartItemContainer cartSummary";
  }

  .cartItemContainer {
    grid-area: cartItemContainer;
    border: 1px solid black;

    width: 60%;
  }

  .cartSummary {
    grid-area: cartSummary;
    width: 40%;
  }

  .cartItem {
    display: grid;
    grid-template-areas:
      ".         .            .     .         ."
      "thumbnail ref          ref   price     ."  
      "thumbnail .            .     .         ."
      "thumbnail name         name  .         ."
      "thumbnail .            .     .         ."
      "thumbnail .            .     addButton ."
      ".         .            .     .         ."
    ;
    
    grid-template-columns: 220px auto auto auto 20px;
    grid-template-rows: 20px 25px 10px 25px auto auto 20px;

  }

  .thumbnail {
    height: 180px;
    grid-area: thumbnail;
    margin: auto;

    img {
      height: 100%;
      width: auto;
    }
  }

  .ref {
    grid-area: ref;
    line-height: 25px;
    font-size: 25px;
    font-weight: bold;
  }

  .price {
    grid-area: price;
    line-height: 25px;
    font-size: 25px;
    font-weight: bold;
    padding-right: 20px;
    justify-self: end;
  }

  .name {
    grid-area: name;
    line-height: 25px;
    font-size: 25px;
  }

  .addButtonContainer {
    justify-self: end;
    grid-area: addButton;
  }
`;

export default StyledCart;

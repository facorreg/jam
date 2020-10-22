import styled from 'styled-components';

const Product = styled.div`
  display: grid;

  .imgContainer {
    border: 1px solid black;
    background: rgba(51, 51, 51, .2);
    grid-area: img;
    height: ${(props) => (props.imgSize || props.imgHeight)};
    width: ${(props) => (props.imgSize || props.imgWidth)};
    
    img {
      height: ${(props) => (props.imgSize || props.imgHeight)};
      width: ${(props) => (props.imgSize || props.imgWidth)};
      display: ${(props) => (props.shouldDisplay ? 'block' : 'hidden')};
    }
  }

  .productBrand, .productName, .description {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    align-self: flex-start;
    text-align: left;
  }

  .productName {
    grid-area: pname;
    font-weight: bold;
  }

  .productBrand {
    grid-area: pbrand;
  }

  .description {
    grid-area: pDescr;
  }

  .priceContainer {
    display: flex;
    flex-direction: column;
    grid-area: pprice;

    & div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }

  .price {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 2px;
  }

  .priceKg {
    font-size: 13px;
    color: rgba(51, 51, 51, 1);
  }

  .cartButtonContainer {
    grid-area: addToCart;
  }

  .productPromo {
    grid-area: ppromo;
    align-self: flex-start;
  }
`;

export default Product;

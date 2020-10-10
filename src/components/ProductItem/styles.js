import styled from 'styled-components';

/*
  @todo: handle with grid
*/

const ProductStyle = styled.div`
  display: flex;
  width: 300px;
  height: 500px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgba(51, 51, 51, .2);
  margin: 10px;

  .imgContainer {
    margin: 14px;
    min-height: 204px;
    height: auto;
    width: calc(100% - 28px);
    cursor: pointer;

    img {
      width: 100%;
      height: auto;
      display: ${(props) => (props.shouldDisplay ? 'block' : 'hidden')},
    }
  }

  .brandInfo, .productNameInfo, .descriptionInfo {
    margin: 0 14px;
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap;
    width: calc(100% - 28px);
    align-self: flex-start;
    text-align: left;
  }

  .brandInfo {
    font-size: 20px;
    min-height: calc(20px + 12px);
  }

  .productNameInfo {
    font-size: 15px;
    min-height: calc(15px + 12px);
    font-weight: bold;
  }

  .descriptionInfo {
    font-size: 12px;
    min-height: calc(12px + 12px);
  }

  .priceAndCartContainer {
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 10px;
  }

  .priceContainer {
    height: 50px;
    margin: 5px 14px;
    align-self: flex-end;
    display: flex;
    flex-direction: column;

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
    align-self: flex-end;
    margin: 5px 14px;
    height: 40px;
  }

  .cartButton {
  }

  .productPromo {
    align-self: flex-start;
    margin: 14px;
  }
`;

export default ProductStyle;

import styled from 'styled-components';

const ProductPageStyle = styled.div`
  display: grid;
  grid-template-areas: 
    ". product recommand ."
    ". product recommand ."
    ". pinfo   recommand ."
    ". pinfo   .         ."
  ;

  margin-top: 2%;
  grid-template-columns: 2% 68% 28% 2%;


  .productDisplayContainer {
    grid-area: product;
    display: grid;
    grid-column-gap: 2%;

    grid-template-areas: 
      "img pbrand    ."
      "img pname     ."
      "img .         ."
      "img ppromo    ."
      "img .         ."
      "img pprice    ."
      "img pDescr    ."
      "img .         ."
      "img addToCart ."
    ;

    grid-template-columns: 327px auto;
    grid-template-rows: 35px 35px 10px 35px 15px 35px auto auto 44px;
    
    > .productBrand,
    > .productName,
    > .productPromo,
    > .productPrice {
      line-height: 35px;
    }

    > .productName,
    > .productPromo,
    > .productPrice,
    > .addToCart {
      font-weight: bold;
    }

    > .productImg {
      grid-area: img;
      height: 327px;
      width: 327px;
    }

    > .productBrand {
      font-size: 25px;
      grid-area: pbrand;
    }

    > .productName {
      font-size: 25px;
      grid-area: pname;
    }
    
    > .productPromo {
      grid-area: ppromo;
      background: rgba(51, 51, 51, 1);
      color: white;
      font-size: 1.3em;
      width: 70px;
      text-align: center;
      margin-left: 15px;
    }
    
    > .productPrice {
      grid-area: pprice;
      font-size: 1.6em;
    }

    > .productDescr {
      grid-area: pDescr;
    }

    > .addToCart {
      border: 2px solid rgba(51, 51, 51, 1);
      text-align: center;
      height: 40px;
      width: 200px;
      grid-area: addToCart;
      margin-bottom: 20px;
      line-height: 40px;
      cursor: pointer;
      background: rgba(51, 51, 51, 0.02);
    }
  }

  .recommand {
    grid-area: recommand;
    border: 2px dotted rgba(51, 51, 51, 1);
  }
  
  .infoContainer {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    grid-area: pinfo;
    height: 100%;

    .dcontainer > .dtype {
      height: 35px;
      line-height: 35px;
      padding-left: 15px;
      font-size: 20px;
      font-weight: bold;
      background: rgba(51, 51, 51, 0.2);
    }

    .dcontainer > .ddescription {
      min-height: 50px;
      line-height: 50px;
      padding-left: 25px;
      font-size: 15px;
      font-weight: bold;
      background: rgba(51, 51, 51, 0.05);
    }
  }
`;

export default ProductPageStyle;

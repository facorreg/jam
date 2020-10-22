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

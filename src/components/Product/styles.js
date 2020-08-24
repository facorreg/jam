import styled from 'styled-components';

const ProductStyle = styled.div`
  display: flex;
  width: 300px;
  height: 500px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgba(51, 51, 51, .2);
  margin: 10px;
`;

const ImgContainer = styled.div`
  margin: 14px;
  min-height: 204px;
  height: auto;
  width: calc(100% - 28px);
  ${'' /* background: ${(props) => (props.shouldDisplay ? 'transparent' : 'rgba(51, 51, 51, .2)')}; */}

  img {
    width: 100%;
    height: auto;
    display: ${(props) => (props.shouldDisplay ? 'block' : 'hidden')},
  }
`;

const TextInfos = styled.div`
  margin: 0 14px;
  text-overflow: ellipsis;
  overflow: hidden; 
  white-space: nowrap;
  width: calc(100% - 28px);
  align-self: flex-start;
  text-align: left;
`;

const BrandInfos = styled(TextInfos)`
  font-size: 20px;
  min-height: calc(20px + 12px);
`;

const ProductNameInfos = styled(TextInfos)`
  font-size: 15px;
  min-height: calc(15px + 12px);
  font-weight: bold;
`;

const DescriptionsInfos = styled(TextInfos)`
  font-size: 12px;
  min-height: calc(12px + 12px);
`;

const PromotionContainer = styled.div`{
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-end;
}`;

const Promotion = styled.div`{
  height: 35px;
  width: 60px;
  line-height: 35px;
  border: 1px solid rgba(51, 51, 51, .2);
  font-size: 20px;
  background: rgb(242, 242, 242);
  margin: 10px 14px;
}`;

const PriceAndCartContainer = styled.div`{
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 10px;
}`;

const PriceContainerDiv = styled.div`{
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
}`;

const PriceDiv = styled.div`{
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 2px;
}`;

const PriceKgDiv = styled.div`{
  font-size: 13px;
  color: rgba(51, 51, 51, 1);
}`;

const CartButton = styled.button`{
  height: 50px;
  width: auto;
  background: transparent;
  margin: 5px 14px;
  align-self: flex-end;
  cursor: pointer;
  border: none;
  outline: none;
  
  img {
    height: 80%;
    width: auto;
  }
}`;

export {
  ProductStyle,
  ImgContainer,
  TextInfos,
  BrandInfos,
  ProductNameInfos,
  DescriptionsInfos,
  PromotionContainer,
  Promotion,
  PriceAndCartContainer,
  PriceContainerDiv,
  PriceDiv,
  PriceKgDiv,
  CartButton,
};

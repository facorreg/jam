import styled from 'styled-components';

const CarouselStyle = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0;
`;

const Background = styled.div`
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.url});
  height: 325px;
  max-width: 100%;
`;

export { CarouselStyle, Background };

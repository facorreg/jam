import styled from 'styled-components';

const CarouselStyle = styled.div`
  grid-column: auto / span 3;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 60px 0 20px 0;
`;

const Background = styled.div`
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.url});
  height: 350px;
  max-width: 100%;
`;

export { CarouselStyle, Background };

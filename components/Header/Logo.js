import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  grid-row: 1;
  grid-column: 1;
  height: 100%;
  background: transparent;
  padding: 15px 0 0 20px;
`;

const Logo = styled.img`
  max-height: 75px;
`;

const LogoWithStyle = () => (
  <LogoContainer>
    <Logo src="/logo.png" />
  </LogoContainer>
);

export default LogoWithStyle;

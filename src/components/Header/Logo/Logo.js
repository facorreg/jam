import React from 'react';
import { useRouter } from 'next/router';
import LogoContainer from './styles';

const Logo = () => {
  const router = useRouter();
  const handleClick = () => { router.push('/'); };
  return (
    <LogoContainer id="logo" onClick={handleClick}>
      <img src="/logo.png" alt="logo" />
    </LogoContainer>
  );
};

export default Logo;

import React from 'react';
import styled from 'styled-components';

import { Logo, Twitter, Facebook, LinkedIn } from 'components/svg';

const Footer = () => {
  return (
    <Root>
     <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Text>Ut enim ad minim veniam quis nostrud exercitation ea commodo</Text>
      <Contacts>
        <CopyrightText>
          Copyright © 2022 GScore | All Rights Reserved | Cookies | Privacy Policy
        </CopyrightText>
        <Socials>
          <Facebook />
          <Twitter />
          <LinkedIn />
        </Socials>
      </Contacts>
    </Root>
  );
};

export default Footer;

const Root = styled.div`
  width: 100%;
  padding-top: 60px;
`;

const Text = styled.div`
  ${({ theme: { typography } }) => typography.textMedium18};
  margin-top: 24px;
  margin-bottom: 60px;
  width: 25%;
  @media (max-width: 992px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 65%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;
const LogoWrapper = styled.div`
  @media (max-width: 576px) {
    transform: scale(0.8) translateX(-12%);
  }
`
const Contacts = styled.div`
  border-top: 1px solid #393939;
  padding: 44px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: block;
  }
`;
const CopyrightText = styled.div`
  ${({ theme: { typography } }) => typography.textMedium18};
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 30vw;
    margin-top: 30px;
  }
`;

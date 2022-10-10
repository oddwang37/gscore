import React from 'react';
import styled from 'styled-components';

import { Logo, Twitter, Facebook, LinkedIn } from 'components/svg';

const Footer = () => {
  return (
    <Root>
      <Logo />
      <Text>Ut enim ad minim veniam quis nostrud exercitation  ea commodo</Text>
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
  font-weight: 500;
  font-size: 18px;
  margin-top: 24px;
  margin-bottom: 60px;
  width: 25%;
`
const Contacts = styled.div`
  border-top: 1px solid #393939;
  padding: 44px 0;
  display: flex;
  justify-content: space-between;
`
const CopyrightText = styled.div`
  font-size: 18px;
  font-weight: 500;
`
const Socials = styled.div`
  display: flex;
  gap: 30px;
`
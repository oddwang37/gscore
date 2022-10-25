import React, { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useSelector } from 'react-redux';


import { Close } from 'components/svg';
import { Container, PrimaryButton } from 'components';


const NoSubsPlaceholder = () => {
  
  return (
    <Container>
      <Root>
        <Circle>
          <Close />
        </Circle>
        <Title>No active subscriptions</Title>
        <Text>
        You can subscribe right now by 
        clicking on the button below
        </Text>
        <Link href="/">
          <PrimaryButton>Get Gscore</PrimaryButton>
        </Link>
      </Root>
    </Container>
  );
};

export default NoSubsPlaceholder;

const Root = styled.div`
  width: 30vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Circle = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 100%;
  background-color: #393939;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.div`
  ${({theme}) => theme.typography.title28};
  text-align: center;
  margin-top: 24px;
`
const Text = styled.div`
  font-size: 18px;
  margin-top: 8px;
  text-align: center;
  margin-bottom: 32px;
`
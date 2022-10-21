import React, { FC } from 'react';
import styled from 'styled-components';
import { SecondaryButton } from 'components';

const LicenseCard: FC<CardProps> = ({ disabled, status }) => {
  return (
    <Root disabled={disabled}>
      <Header>
        <FlexWrapper>
          <Logo>Gscore</Logo>
          <Status $status={status}>{status}</Status>
        </FlexWrapper>
      </Header>
      <Divider />
      <Info>
        <FlexWrapper>
          <div>
            <Title>Single site license</Title>
            <DueDate>valid until 21.10.2022</DueDate>
            <SecondaryButton>View</SecondaryButton>
          </div>
          <Price>$77</Price>
        </FlexWrapper>
      </Info>
    </Root>
  );
};

export default LicenseCard;

type CardProps = {
  disabled?: boolean;
  status: Status;
};

type Status = 'active' | 'hold' | 'inactive';

type RootProps = {
  disabled?: boolean;
};
type StatusProps = {
  $status: Status;
};
const Root = styled.div<RootProps>`
  background-color: #393939;
  box-shadow: 0px 24px 65px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
  width: 100%;
`;
const Header = styled.div`
  padding: 48px 64px 32px 32px;
`;
const Info = styled.div`
  padding: 32px 80px 48px 32px;
`;
const Logo = styled.div`
  color: #fff;
  ${({ theme: { typography } }) => typography.title22};
`;

const Status = styled.div<StatusProps>`
  text-transform: capitalize;
  ${({ theme: { typography } }) => typography.title22};

  color: ${({ $status, theme: { colors } }) => {
    switch ($status) {
      case 'active':
        return colors.green;
      case 'hold':
        return colors.orange;
      case 'inactive':
        return colors.red400;
    }
  }};
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #969696;
`;
const Title = styled.div`
  font-size: 24px;
`;
const DueDate = styled.div`
  margin-top: 12px;
  color: #969696;
  margin-bottom: 32px;
`;
const Price = styled.div`
  font-size: 24px;
`;
const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

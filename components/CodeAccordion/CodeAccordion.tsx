import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'state/store';
import { activateCode } from 'state/ducks/codes/thunks';
import { Checkbox } from 'components';
import SecondaryButton from 'components/UI/buttons/SecondaryButton/SecondaryButton';
import { CodeInput } from './components';

const CodeAccordion: FC<CodeAccordionProps> = ({ code, status, origin }) => {
  const isLoading = useSelector((state: RootState) => state.codes.isLoading);
  const dispatch = useAppDispatch();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const switchOpened = () => {
    setIsOpened((prev) => !prev);
  };

  const onActivateClick = () => {
    dispatch(activateCode({ code }));
  };

  return (
    <Root onClick={switchOpened} $isOpened={isOpened}>
      <Grid
        $status={status}
        $isOpened={isOpened}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        {isOpened && (
          <>
            <Heading></Heading> <Heading>License Code</Heading> <Heading>Domain</Heading>{' '}
            {status === 'INACTIVE' && <Heading></Heading>}
            <Heading>Status</Heading>
          </>
        )}
        <Checkbox />
        <CodeInput copyable value={code} />
        <CodeInput value={origin} />
        {status === 'INACTIVE' && (
          <Button isLoading={isLoading} onClick={onActivateClick}>
            Activate
          </Button>
        )}
        <Status $status={status}>{status.toLowerCase()}</Status>
      </Grid>
      <MobileWrapper>
        <MobileHeader>  
        <Checkbox />
        <Status $status={status}>{status.toLowerCase()}</Status>
        </MobileHeader>
        <MobileElement>
          <Heading>License code</Heading>
          <CodeInput copyable value={code} />
        </MobileElement>
        <MobileElement>
          <Heading>Domain</Heading>
          <CodeInput value={origin} />
        </MobileElement>
      </MobileWrapper> 
    </Root>
  );
};

export default CodeAccordion;

type CodeAccordionProps = {
  code: string;
  status: Status;
  origin: string;
};
type RootProps = {
  $isOpened: boolean;
};
type GridProps = {
  $status: Status;
  $isOpened: boolean;
};
type Status = 'ACTIVE' | 'HOLD' | 'INACTIVE';

type StatusProps = {
  $status: Status;
};

const Root = styled.div<RootProps>`
  width: 100%;
  padding: 2.5% 6% 2.5% 2.5%;
  padding-top: ${({ $isOpened }) => ($isOpened ? '1%' : '2.5%')};
  background-color: #272727;
  border-radius: 12px;
  cursor: pointer;
  @media (max-width: 576px) {
    padding: 0;
  }
`;
const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ $status }) =>
    $status === 'INACTIVE' ? '0.5fr 3fr 4fr 1fr 1fr' : '0.5fr 3fr 6fr 1fr'};
  grid-template-rows: ${({ $isOpened }) => ($isOpened ? '14px 1fr' : '1fr')};
  flex-wrap: nowrap;
  column-gap: 20px;
  row-gap: 10px;
  grid-template-rows: 2fr;
  align-items: center;
  @media (max-width: 576px) {
    display: none;
  }
`;
const MobileWrapper = styled.div`
  display: none;
  padding: 32px 20px;
  @media (max-width: 576px) {
    display: block;
  }
`
const MobileHeader = styled.div`
  display: flex;
  gap: 20px;
`
const MobileElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`
const Heading = styled.div`
  color: #969696;
  font-weight: 700;
  font-size: 16px;
  margin-top: 10px;
`;
const Button = styled(SecondaryButton)`
  padding: 20px;
  margin: 0 5px 0 20px;
  @media (max-width: 768px) {
    margin: 0 10px;
  }
`;
const Status = styled.div<StatusProps>`
  ${({ theme: { typography } }) => typography.title22};
  text-transform: capitalize;
  color: ${({ $status, theme: { colors } }) => {
    switch ($status) {
      case 'ACTIVE':
        return colors.green;
      case 'HOLD':
        return colors.orange;
      case 'INACTIVE':
        return colors.red400;
    }
  }};
`;

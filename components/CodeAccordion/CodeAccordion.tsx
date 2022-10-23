import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { Checkbox } from 'components';
import SecondaryButton from 'components/UI/buttons/SecondaryButton/SecondaryButton';
import { CodeInput } from './components';

const CodeAccordion: FC<CodeAccordionProps> = ({ code, status }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const switchOpened = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <Root onClick={switchOpened}>
      <Grid $status={status} onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <Checkbox />
        <CodeInput copyable code={code} />
        <CodeInput />
        {status === 'INACTIVE' && (
          <div>
            {isOpened && (
              <Heading>
                <InvisibleText>text</InvisibleText>
              </Heading>
            )}
            <Button>Activate</Button>
          </div>
        )}
        <Status $status={status}>{status.toLowerCase()}</Status>
      </Grid>
    </Root>
  );
};

export default CodeAccordion;

type CodeAccordionProps = {
  code: string;
  status: Status;
};
type GridProps = {
  $status: Status;
};
type Status = 'ACTIVE' | 'HOLD' | 'INACTIVE';

type StatusProps = {
  $status: Status;
};

const Root = styled.div`
  width: 100%;
  padding: 2.5% 6% 2.5% 2.5%;
  background-color: #272727;
  border-radius: 12px;
  cursor: pointer;
`;
const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ $status }) =>
    $status === 'INACTIVE' ? '0.5fr 3fr 4fr 1fr 1fr' : '0.5fr 3fr 6fr 1fr'};
  wrap: nowrap;
  gap: 20px;
  grid-template-rows: 2fr;
  align-items: center;
`;
const Heading = styled.div`
  color: #969696;
  font-weight: 700;
  margin-bottom: 12px;
`;
const InvisibleText = styled.div`
  opacity: 0;
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
  justify-self: end;
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

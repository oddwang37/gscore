import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { TabHeader } from './components';

const Tabs: FC<TabsProps> = ({
  activeTabIndex,
  changeActiveTabIndex,
  tabHeaders,
  contentArray,
}) => {
  return (
    <Root>
      <TabHeaders>
        {tabHeaders.map((header, index) => (
          <TabHeader
            title={header}
            isActive={index === activeTabIndex}
            onClick={() => changeActiveTabIndex(index)}
            key={index}
          />
        ))}
        <Line />
      </TabHeaders>

      <TabContent>{contentArray[activeTabIndex]}</TabContent>
    </Root>
  );
};

export default Tabs;

type TabsProps = {
  activeTabIndex: number;
  changeActiveTabIndex: (index: number) => void;
  tabHeaders: Array<string>;
  contentArray: Array<JSX.Element>;
};

const Root = styled.div``;

const TabHeaders = styled.div`
  display: flex;
  align-items: end;
`;
const Line = styled.div`
  flex: 1;
  background-color: #393939;
  height: 2px;
`;
const TabContent = styled.div``;

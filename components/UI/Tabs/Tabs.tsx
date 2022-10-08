import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { TabHeader } from './components';

const Tabs = () => {

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabHeaders = [
    'Profile', 'Subscriptions', 'Change password'
  ]

  const tabs = [
    <div>one div</div>, <div>other div</div>, <div>another one div</div>
  ]

  const onChangeCategory = (index: number) => {
    setActiveTabIndex(index);
  }

  return (
    <Root>
      <TabHeaders>
        {tabHeaders.map((header, index) => (
          <TabHeader title={header} isActive={index === activeTabIndex} onClick={() => onChangeCategory(index)} key={index}/>
        )
        )}
      </TabHeaders>
      <TabContent>
        {tabs[activeTabIndex]}
      </TabContent>
    </Root>
  );
};

export default Tabs;


const Root = styled.div`

`;

const TabHeaders = styled.div`
  display: flex;
`
const TabContent = styled.div`

`
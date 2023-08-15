import React, { useEffect } from 'react';
import InventoryGroups from '../components/InventoryGroups';
import useChrome from '@redhat-cloud-services/frontend-components/useChrome';
import {
  PageHeader,
  PageHeaderTitle,
} from '@redhat-cloud-services/frontend-components/PageHeader';
import { Flex } from '@patternfly/react-core';
import InventoryGroupsPopover from '../components/InventoryGroups/SmallComponents/Popover';

const Groups = () => {
  const chrome = useChrome();

  useEffect(() => {
    chrome?.updateDocumentTitle?.('Inventory Groups | Red Hat Insights');
  }, [chrome]);

  return (
    <React.Fragment>
      <PageHeader>
        <Flex spaceItems={{ default: 'spaceItemsSm' }}>
          <PageHeaderTitle title="Groups" />
          <InventoryGroupsPopover />
        </Flex>
      </PageHeader>
      <InventoryGroups />
    </React.Fragment>
  );
};

export default Groups;

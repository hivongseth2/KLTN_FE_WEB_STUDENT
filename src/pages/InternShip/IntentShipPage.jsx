import React from 'react';
import { Grid } from '@mui/material';

import Header from '@/components/Header/Header';
import TabsComponent from '@/components/Tabs/TabsComponent';

function InternShipPage() {
  return (
    <Grid container paddingLeft="18em">
      <Header />
      <TabsComponent />
    </Grid>
  );
}

export default InternShipPage;

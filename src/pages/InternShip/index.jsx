import React, { useState } from 'react';
import { Grid } from '@mui/material';

import Interns from './InternsPage/Interns';
import TabsComponent from '@/components/Tabs/TabsComponent';

function InternsGenPage() {
  const [item, setItem] = useState(null);
  return (
    <Grid container paddingLeft="18em">
      {item == null ? (
        <Interns item={item} setItem={setItem} />
      ) : (
        <TabsComponent item={item} setItem={setItem} />
      )}
    </Grid>
  );
}

export default InternsGenPage;

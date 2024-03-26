import React, { useEffect } from 'react';
import {
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
  TextField,
} from '@mui/material';

import Header from '@/components/Header/Header';
import TabsDetail from '../DetailStudent/TabsDetail';

function ReportPage() {
  return (
    <Grid container paddingLeft="18em">
      <Grid xs={12}>
        <Header />
      </Grid>

      <Grid
        container
        xs={12}
        sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}
      >
        <TabsDetail />
      </Grid>
    </Grid>
  );
}

export default ReportPage;

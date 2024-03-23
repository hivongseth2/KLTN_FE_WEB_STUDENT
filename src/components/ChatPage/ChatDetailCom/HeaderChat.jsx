import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

function HeaderChat() {
  return (
    <Paper sx={{ width: '100%' }}>
      <Grid container xs={12} sx={{ p: 2 }}>
        <Grid container xs={12}>
          <Typography variant="button" gutterBottom sx={{ fontWeight: 'bold' }}>
            Nhóm GVGS- Nguyễn Thị Hạnh
          </Typography>
        </Grid>
        <Grid container xs={12}>
          <Typography variant="caption" gutterBottom>
            4 thành viên
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default HeaderChat;

import React from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';

function Header({ header, des, btnTitle, fn }) {
  return (
    <Paper
      elevation={1}
      sx={{ width: '100%', height: 130, display: 'flex', alignItems: 'center' }}
    >
      <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid
          xs={10}
          height={80}
          width="88em"
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
          flexDirection="row"
          p={2}
        >
          <Box display="flex" flexDirection="column">
            <Typography variant="h6" gutterBottom>
              {header || 'Quản lý khoá thực tập - Khoa Công Nghệ Thông Tin'}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {des || 'Ngành: Kỹ thuật phần mềm'}
            </Typography>
          </Box>
        </Grid>
        <Grid xs={2}>
          <Button variant="contained" onClick={fn}>
            {btnTitle || 'Thêm khóa'}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Header;

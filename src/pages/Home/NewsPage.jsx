import React from 'react';
import { Drawer } from '@mui/material';

function NewsPage() {
  return (
    <Drawer
      sx={{
        width: '100%',
        marginTop: '75px',
        marginLeft: '293px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '100%',
          marginTop: '75px',
          marginLeft: '275px',
          paddingBottom: '100px',
          backgroundColor: 'background.default',
        },
      }}
      variant="permanent"
    >
      News PAGE
    </Drawer>
  );
}

export default NewsPage;

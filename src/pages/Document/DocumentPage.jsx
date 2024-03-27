import React from 'react';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
} from '@mui/material';
import TableDocument from '@/components/DocumentComponent/TableDocument';
import Header from '@/components/Header/Header';
import NewsCard from '@/components/NewsComponent/NewsCard';

function DocumentPage() {
  return (
    <Grid container paddingLeft="18em">
      <Grid container>
        <Header />
      </Grid>
      <Grid
        container
        xs={12}
        sx={{ justifyContent: 'space-around', display: 'flex', my: 3 }}
      >
        {[1, 2, 3, 4, 5, 6].map(
          (
            item, // Thay đổi [1, 2, 3, 4, 5, 6] thành mảng tin tức thực tế
          ) => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <NewsCard />
            </Grid>
          ),
        )}
      </Grid>
    </Grid>
  );
}

export default DocumentPage;

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

function DocumentPage() {
  return (
    <Grid container paddingLeft="18em">
      <Grid container>
        <Header />
      </Grid>
      <Grid
        container
        xs={12}
        sx={{ justifyContent: 'space-between', display: 'flex', my: 3 }}
      >
        <Grid item xs={7}>
          <Button variant="contained">Thêm khóa</Button>
        </Grid>
        <Grid item xs={5} sx={{ justifyContent: 'center', display: 'flex' }}>
          <FormControl>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Loại tài liệu
            </InputLabel>
            <NativeSelect defaultValue={0}>
              <option value={0}>Tất cả</option>
              <option value={10}>Không cho gửi file</option>
              <option value={20}>Cho phép gửi file</option>
            </NativeSelect>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ mr: 3 }}>
        <TableDocument />
      </Grid>
    </Grid>
  );
}

export default DocumentPage;

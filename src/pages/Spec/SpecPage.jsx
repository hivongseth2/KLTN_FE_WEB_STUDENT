import React, { useEffect } from 'react';
import {
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Header from '@/components/Header/Header';
import TableSpec from '@/components/SpecComponent/TableSpec';
import { fetchApiSpec } from '@/redux/slice/spec/SpecSlice';

function SpecPage() {
  const dispatch = useDispatch();
  const department = useSelector((state) => state.spec.data);
  useEffect(() => {
    dispatch(fetchApiSpec());
  }, [dispatch]);
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
        <Grid item xs={2}>
          <FormControl>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Chuyên ngành
            </InputLabel>
            <NativeSelect defaultValue={0}>
              <option value={0}>Tất cả</option>
              {department?.map((spec) => (
                <option key={spec.id} value={spec.id}>
                  {spec.name}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="Standard"
            label="Tìm kiếm chuyên ngành"
            variant="standard"
          />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          maxWidth: '86em',
          marginTop: '1em',
          display: 'flex',
          marginRight: '1.5em',
        }}
      >
        <TableSpec />
      </Grid>
    </Grid>
  );
}

export default SpecPage;

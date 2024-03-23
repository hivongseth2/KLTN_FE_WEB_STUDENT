import React, { useEffect } from 'react';
import {
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import TStudentComp from '@/components/TableStudent/TStudentComp';
import ActionComponent from '@/components/Action/ActionComponent';
import { fetchApiClass } from '@/redux/slice/class/ClassSlice';

function InternDetail({ item }) {
  const dispatch = useDispatch();
  const classList = useSelector((state) => state.class.data);

  const idClass = item.id;

  useEffect(() => {
    if (idClass) {
      dispatch(fetchApiClass(idClass));
    }
  }, [dispatch, idClass]);

  return (
    <Grid>
      <Grid
        container
        spacing={1}
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Grid item xs={3}>
          <FormControl>
            <InputLabel variant="standard" htmlFor="classNative">
              Lớp học phần
            </InputLabel>
            <NativeSelect
              defaultValue={idClass}
              inputProps={{
                name: 'class',
                id: 'classNative',
              }}
            >
              {classList.map((classItem) => (
                <option key={classItem.id} value={classItem.classId}>
                  {classItem.className}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid container xs={3}>
          <Grid item xs={6}>
            <TextField
              id="standard-required"
              label="Tìm kiếm sinh viên"
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <ActionComponent />
          </Grid>
        </Grid>
      </Grid>

      <Grid sx={{ marginTop: '1em' }}>
        <TStudentComp idClass={idClass} />
      </Grid>
    </Grid>
  );
}

export default InternDetail;

import {
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from '@/components/Header/Header';
import TableComponent from '@/components/TeacherComponent/TableComponent';
import GroupBtn from '@/components/TeacherComponent/GroupBtn';
import { fetchApiLecturerHomeRoom } from '@/redux/slice/lecturers/AllLecturerHomeR';
import { fetchApiSpec } from '@/redux/slice/spec/SpecSlice';

function TeacherPage() {
  const dispatch = useDispatch();
  const teacher = useSelector((state) => state.lecturerHomeRoom.data);
  const department = useSelector((state) => state.spec.data);
  useEffect(() => {
    dispatch(fetchApiLecturerHomeRoom());
    dispatch(fetchApiSpec());
  }, [dispatch]);

  useEffect(() => {
    console.log('spec', department);
  }, [teacher, department]);
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
        <Grid container xs={4}>
          <Grid item xs={6}>
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
          <Grid item xs={6}>
            <FormControl>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Chức vụ
              </InputLabel>
              <NativeSelect defaultValue={0}>
                <option value={0}>Tất cả</option>
                <option value={10}>Chủ nhiệm ngành</option>
                <option value={20}>Giáo viên giám sát</option>
                <option value={30}>Giáo viên hướng dẫn</option>
              </NativeSelect>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container xs={4}>
          <Grid item xs={6}>
            <TextField
              id="Standard"
              label="Tìm kiếm giáo viên"
              variant="standard"
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: 'flex', alignContent: 'flex-end', mt: 2 }}
          >
            <GroupBtn />
          </Grid>
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
        {teacher && teacher.data && teacher.data.length > 0 && (
          <TableComponent
            data={
              teacher && teacher.data && teacher.data.length > 0 ? teacher : []
            }
          />
        )}
      </Grid>
    </Grid>
  );
}

export default TeacherPage;

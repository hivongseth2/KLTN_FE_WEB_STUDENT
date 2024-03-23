import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StudentMock from '@/mock/StudentMock';
import TStudentAssign from '@/components/TableStudentAssign/TStudentAssign';
import { fetchApiLecturerDepart } from '@/redux/slice/lecturers/LecturersDepartment';
import { fetchApiStudentNotSupervising } from '@/redux/slice/student-not-super/StudentNotSupSlice';
import { fetchApiStudentSupervising } from '@/redux/slice/studentSupervising/StudentSupSlice';

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

export default function Assignment({ item }) {
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState(StudentMock);
  const [right, setRight] = React.useState([]);
  const [teacher, setTeacher] = React.useState(null);
  const lecturers = useSelector((state) => state.lecturerDepartment.data);
  const studentNotSupervising = useSelector(
    (state) => state.studentNotSupervising.data,
  );
  const studentSupervising = useSelector(
    (state) => state.studentSupervising.data,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchApiLecturerDepart(item.departmentId));

      dispatch(fetchApiStudentNotSupervising(item));
    };

    fetchData();
  }, [dispatch, item.departmentId]);

  useEffect(() => {
    if (teacher != null) {
      dispatch(fetchApiStudentSupervising({ item, teacher }));
    }
  }, [teacher]);

  useEffect(() => {}, [
    checked,
    lecturers,
    studentNotSupervising,
    studentSupervising,
  ]);

  const leftChecked = intersection(
    checked,
    left.map((student) => student.id),
  );
  const rightChecked = intersection(
    checked,
    right.map((student) => student.id),
  );

  useEffect(() => {}, [checked]);
  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
    setChecked([]);
  };

  const handleCheckedRight = () => {
    setRight(
      right.concat(
        left.filter((student) => leftChecked.indexOf(student.id) !== -1),
      ),
    );
    setLeft(left.filter((student) => leftChecked.indexOf(student.id) === -1));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(
      left.concat(
        right.filter((student) => rightChecked.indexOf(student.id) !== -1),
      ),
    );
    setRight(
      right.filter((student) => rightChecked.indexOf(student.id) === -1),
    );
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
    setChecked([]);
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid container spacing={2} sx={{ ml: 5 }}>
        <Grid item xs={3} sx={{ alignItems: 'flex-end', display: 'flex' }}>
          <Typography variant="subtitle2" color="primary">
            Thống kê phân công
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="Standard"
            label="Tìm kiếm sinh viên"
            variant="standard"
          />
        </Grid>

        <Grid item xs={3}>
          <FormControl variant="standard" sx={{ minWidth: 160, ml: 3 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Giáo viên giám sát
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // defaultValue={lecturers.data[1].lecturersId}
              value={teacher}
              onChange={(event) => {
                setTeacher(event.target.value);
              }}
              label="Giáo viên giám sát"
            >
              {lecturers?.data?.map((lecturer) => (
                <MenuItem key={lecturer.id} value={lecturer.id}>
                  {lecturer.fullName || lecturer.email}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <TextField
            id="Standard"
            label="Tìm kiếm sinh viên"
            variant="standard"
          />
        </Grid>
      </Grid>
      <Grid item>
        <Paper sx={{ width: 700, height: 'auto', overflow: 'auto' }}>
          <TStudentAssign
            rows={studentNotSupervising?.data}
            checked={checked}
            handleToggle={setChecked}
          />
        </Paper>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
          >
            ≫
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleAllLeft}
            disabled={right.length === 0}
            aria-label="move all left"
          >
            ≪
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="contained"
            size="small"
            disabled={right.length === 0}
            aria-label="save"
            color="success"
          >
            Lưu
          </Button>
        </Grid>
      </Grid>
      <Grid item>
        <Paper sx={{ width: 700, height: 'auto', overflow: 'auto' }}>
          <TStudentAssign
            rows={teacher == null ? [] : studentSupervising}
            checked={checked}
            handleToggle={setChecked}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

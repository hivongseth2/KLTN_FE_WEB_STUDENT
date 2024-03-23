import React from 'react';
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import TrackingStudentComponent from '@/components/TrackingTable/TrackingTableComponent';

function TrackingStudent() {
  const [teacher, setTeacher] = React.useState('');

  return (
    <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
      <Grid
        container
        spacing={2}
        sx={{ mb: 2, justifyContent: 'space-between' }}
      >
        <Grid item xs={3} sx={{ alignItems: 'flex-end', display: 'flex' }}>
          <FormControl variant="standard" sx={{ minWidth: 200, ml: 3 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Giáo viên hướng dẫn
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={teacher}
              onChange={(event) => {
                setTeacher(event.target.value);
              }}
              label="Giáo viên hướng dẫn"
            >
              <MenuItem value="Giáo viên hướng dẫn">
                <em>Tất cả</em>
              </MenuItem>
              <MenuItem value={10}>Nguyễn Thị Hạnh</MenuItem>
              <MenuItem value={20}>Trần Thế Trung</MenuItem>
              <MenuItem value={30}>Tôn Long Phước</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          container
          xs={6}
          spacing={4}
          sx={{
            justifyContent: 'space-around',
            alignItems: 'flex-end',
          }}
        >
          <Grid item xs={4}>
            <TextField
              id="Standard"
              label="Tìm kiếm sinh viên"
              variant="standard"
            />
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle2" color="primary">
              Tải xuống tất cả
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container xs={12}>
        <TrackingStudentComponent />
      </Grid>
    </Grid>
  );
}

export default TrackingStudent;

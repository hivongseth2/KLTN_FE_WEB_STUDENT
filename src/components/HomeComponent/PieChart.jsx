import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@mui/material';

const data = [
  { id: 0, value: 10, label: 'series A' },
  { id: 1, value: 15, label: 'series B' },
  { id: 2, value: 20, label: 'series C' },
];

export default function PieChartComponent() {
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Paper
      elevation={1}
      sx={{
        height: '270px',
        maxWidth: '790px',
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Grid container justifyContent={'flex-start'}>
        <FormControl
          variant="standard"
          sx={{ height: 40, width: 200, marginLeft: 2 }}
        >
          <InputLabel id="demo-simple-select-label">Loại thống kê</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            sx={{ height: 40 }}
            label="Loại thống kê"
            onChange={handleChange}
          >
            <MenuItem sx={{ height: 35 }} value={10}>
              Báo cáo hàng tuần
            </MenuItem>
            <MenuItem sx={{ height: 35 }} value={20}>
              Tài liệu tải lên
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <PieChart
        sx={{ marginTop: 1 }}
        series={[
          {
            data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        height={200}
      />
      <Typography variant="h6" sx={{ marginRight: 10 }}>
        Thống kê báo cáo hàng tuần
      </Typography>
    </Paper>
  );
}

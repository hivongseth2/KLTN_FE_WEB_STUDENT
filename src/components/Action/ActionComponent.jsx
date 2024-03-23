import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ActionComponent() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" spacing={2} sx={{ minWidth: 120, ml: 3 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Hành động
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Hành động"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>In danh sách</MenuItem>
          <MenuItem value={2}>Import DSSV</MenuItem>
          <MenuItem value={3}>Thêm sinh viên</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

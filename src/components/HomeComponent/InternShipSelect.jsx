import React from 'react';
import { FormControl, InputLabel, NativeSelect } from '@mui/material';

function InternshipSelect({ data, semesterId, setSemesterId }) {
  const handleChange = (event) => {
    setSemesterId(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Kì thực tập
      </InputLabel>
      <NativeSelect
        value={semesterId}
        onChange={handleChange}
        inputProps={{
          name: 'none',
          id: 'uncontrolled-native',
        }}
      >
        {data.map((item) => (
          <option value={item.id} key={item.id}>
            Đợt {item.semester} - {item.schoolYear}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default InternshipSelect;

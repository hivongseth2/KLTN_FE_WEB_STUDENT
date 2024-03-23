import {
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
  TextField,
} from '@mui/material';
import TableComponent from '@/components/TableIntern/TableComponent';

function Interns({ item, setItem }) {
  return (
    <Grid
      container
      sx={{ display: 'flex', alignItems: 'center', width: '100%' }}
      xs={12}
    >
      <Grid
        container
        spacing={6}
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Grid item xs={3}>
          <FormControl>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Năm học
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
              }}
            >
              <option value={10}>2023-2024</option>
              <option value={20}>2022-2023</option>
              <option value={30}>2021-2022</option>
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="standard-required"
            label="Tìm khóa thực tập"
            variant="standard"
          />
        </Grid>
      </Grid>

      <Grid sx={{ marginTop: '1em', width: '100%' }}>
        <TableComponent item={item} setItem={setItem} />
      </Grid>
    </Grid>
  );
}

export default Interns;

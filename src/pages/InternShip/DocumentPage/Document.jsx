import { Button, Grid } from '@mui/material';
import NewsTable from '@/components/NewsComponent/NewsTable';

function Document() {
  return (
    <Grid
      container
      spacing={1}
      sx={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <Grid container sx={{ justifyContent: 'flex-end', mb: 2 }}>
        <Button variant="contained">Thêm bản tin</Button>
      </Grid>
      <NewsTable />
    </Grid>
  );
}

export default Document;

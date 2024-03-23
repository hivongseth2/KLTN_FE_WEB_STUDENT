import { Grid, Paper, Typography } from '@mui/material';

function InfoTeacher({ title, vietnameseKeys, data }) {
  const getGenderText = (value) => (value ? 'Nam' : 'Nữ');
  function getNestedValue(obj, key) {
    return key
      .split('.')
      .reduce(
        (value, k) => (value && value[k] !== undefined ? value[k] : ''),
        obj,
      );
  }

  return (
    <Paper elevation={1} sx={{ height: '270px', maxWidth: '790px' }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
        </Grid>
        {Object.keys(vietnameseKeys).map((key) => {
          let content;
          if (key === 'gender') {
            content = (
              <Typography variant="body1">
                {getGenderText(data[key])}
              </Typography>
            );
          } else if (key.includes('.')) {
            if (key === 'roles.name') {
              content = (
                <Typography variant="body1">
                  {data.roles?.map((role) => role?.name).join(', ')}
                </Typography>
              );
            } else {
              content = (
                <Typography variant="body1">
                  {getNestedValue(data, key)}
                </Typography>
              );
            }
          } else {
            content = <Typography variant="body1">{data[key]}</Typography>;
          }

          return (
            <Grid item xs={4} key={key} sx={{ p: 2 }}>
              <Typography variant="subtitle2" fontWeight="bold">
                {vietnameseKeys[key]}
              </Typography>
              {content}
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
}

export default InfoTeacher;

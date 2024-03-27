import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function NewsCard() {
  return (
    <Card sx={{ maxWidth: 450, marginBottom: 3 }}>
      <CardActionArea>
        <CardMedia
          sx={{ objectFit: 'contain' }}
          component="img"
          height="150"
          image="https://cdn.mos.cms.futurecdn.net/TTzww9ePfnJq67Vt5cpbfH-1200-80.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Thông báo hướng dẫn
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Thông báo hướng dẫn thực tập
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Tải về
        </Button>
      </CardActions>
    </Card>
  );
}

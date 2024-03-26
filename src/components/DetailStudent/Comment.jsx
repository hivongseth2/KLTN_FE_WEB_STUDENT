import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';

function CommentOpinion({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <Grid container alignItems="center">
      <Grid item xs={12} sx={{ paddingLeft: 2 }}>
        <Typography
          variant="body1"
          component="div"
          placeholder="Type your message..."
          onInput={handleChange}
          style={{
            width: '35em',
            overflow: 'auto',
            height: '20vh',
            borderWidth: 1,
            fontFamily: 'sans-serif',
            borderColor: '#365486',
            backgroundColor: '#FFFF',
            borderRadius: 10,
            padding: '8px 12px',
          }}
        >
          {message}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default CommentOpinion;

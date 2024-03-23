import React, { useState } from 'react';
import { Grid, TextareaAutosize } from '@mui/material';

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
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center">
        <Grid item xs={12} sx={{ paddingLeft: 2 }}>
          <TextareaAutosize
            rows={3}
            placeholder="Type your message..."
            value={message}
            onChange={handleChange}
            minRows="2"
            style={{
              width: '35em',
              resize: 'vertical',
              overflow: 'auto',
              height: '20vh',
              borderWidth: 1,
              fontFamily: 'sans-serif',
              borderColor: '#365486',
              backgroundColor: '#FFFF',
              borderRadius: 10,
            }}
          />
        </Grid>
      </Grid>
    </form>
  );
}

export default CommentOpinion;

import React, { useState } from 'react';
import { Grid, IconButton, TextareaAutosize } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function ChatInput({ onSendMessage }) {
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
        <Grid item xs={11} sx={{ paddingLeft: 2 }}>
          <TextareaAutosize
            rows={3}
            placeholder="Type your message..."
            value={message}
            onChange={handleChange}
            minRows="2"
            style={{
              width: '100%',
              resize: 'vertical',
              overflow: 'auto',
              height: '10vh',
              borderWidth: 1,
              fontFamily: 'sans-serif',
              borderColor: '#365486',
              backgroundColor: '#FFFF',
              borderRadius: 10,
            }}
          />
        </Grid>
        <Grid item xs={1} sx={{ textAlign: 'center' }}>
          <IconButton type="submit">
            <SendIcon />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  );
}

export default ChatInput;

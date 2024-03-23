import React, { useState } from 'react';
import { Grid, IconButton, Paper, TextField } from '@mui/material';
import { AddCircleOutlineTwoTone } from '@mui/icons-material';
import Header from '@/components/Header/Header';
import ChatMock from '@/mock/ChatMock';
import ChatItem from '@/components/ChatPage/ChatItem';

import ChatContainer from '@/components/ChatPage/ChatDetailCom/ChatContainer';

function ChatPage() {
  const [data] = useState(ChatMock);
  const [chatData, setChatData] = useState([]);

  const handleOpenChat = (item) => {
    setChatData(item);
  };

  return (
    <Grid container paddingLeft="18em" sx={{ height: '80vh' }}>
      <Grid container>
        <Header />
      </Grid>

      <Grid container sx={{ my: 1, mb: 2 }}>
        <Grid item xs={3} sx={{ height: '75vh' }}>
          <Paper sx={{ height: '100%' }}>
            <Grid container xs={12}>
              <Grid
                xs={8}
                item
                sx={{ justifyContent: 'flex-end', display: 'flex', ml: 2 }}
              >
                <TextField
                  sx={{ width: '100%' }}
                  id="standard-basic"
                  label="Tìm kiếm đoạn chat"
                  variant="standard"
                />
              </Grid>

              <Grid
                item
                xs={3}
                sx={{
                  justifyContent: 'flex-end',
                  display: 'flex',
                  alignItems: 'flex-end',
                  borderRadius: 50,
                }}
              >
                <IconButton aria-label="AddIcon">
                  <AddCircleOutlineTwoTone color="primary" fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>

            {data.map((item) => (
              <ChatItem
                key={item.id}
                item={item}
                handleOpenChat={handleOpenChat}
              />
            ))}
          </Paper>
        </Grid>

        <Grid item xs={9} sx={{ height: '75vh' }}>
          <Paper
            sx={{ height: '100%', width: '100%', backgroundColor: '#f7f7f7' }}
          >
            <ChatContainer chatData={chatData} />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ChatPage;

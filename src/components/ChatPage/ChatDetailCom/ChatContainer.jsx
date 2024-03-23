import React, { useEffect, useState } from 'react';
import { Avatar, Grid, Paper, Typography, styled } from '@mui/material';
import HeaderChat from './HeaderChat';
import ChatInput from './ChatInput';
import { parseDate } from '@/utils/GlobalUtil';

const ChatMessage = styled(Paper)(({ theme, sender }) => ({
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
  maxWidth: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: sender ? 'flex-end' : 'flex-start',
  backgroundColor: sender ? '#B2EBF2' : 'inherit',
  flexWrap: 'wrap',
  wordWrap: 'break-all',
}));

// { theme, sender }
const MessageContent = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  wordBreak: 'break-all',
}));

// { theme, sender }
const TimeSend = styled('div')(({ sender }) => ({
  display: 'flex',
  marginLeft: 'auto',

  justifyContent: sender ? 'flex-start' : 'flex-end',

  wordBreak: 'break-all',
  color: '#7D7C7C',
}));

function ChatContainer({ chatData }) {
  const [chat, setChat] = useState([]);

  useEffect(() => {
    if (chatData && chatData.chatContent && chatData.chatContent.length > 0) {
      setChat(chatData.chatContent);
    }
  }, [chatData]);

  return (
    <Grid container>
      <HeaderChat />
      <Grid
        item
        xs={12}
        sx={{ height: '55vh', overflowY: 'scroll', padding: 2 }}
      >
        {chat.map((item) => (
          <Grid
            container
            sx={{
              justifyContent:
                item.userName === 'Nguyễn Thị Hạnh' ? 'flex-end' : 'flex-start',
            }}
          >
            {item.userName !== 'Nguyễn Thị Hạnh' && (
              <Avatar src={item.avatar} sx={{ marginRight: 2 }} />
            )}
            <ChatMessage
              key={item.id}
              sender={item.userName === 'Nguyễn Thị Hạnh'}
            >
              <Grid container>
                <MessageContent sender={item.userName === 'Nguyễn Thị Hạnh'}>
                  <Typography variant="body2">{item.content}</Typography>
                </MessageContent>
              </Grid>
              <Grid container>
                <TimeSend sender={item.userName === 'Nguyễn Thị Hạnh'}>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: 10,
                    }}
                  >
                    {parseDate(item.timeStamp)}
                  </Typography>
                </TimeSend>
              </Grid>
            </ChatMessage>
          </Grid>
        ))}
      </Grid>

      <Grid xs={12} sx={{ width: '100%' }}>
        <ChatInput />
      </Grid>
    </Grid>
  );
}

export default ChatContainer;

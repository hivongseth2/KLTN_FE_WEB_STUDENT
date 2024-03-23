import React from 'react';
import { Avatar, Grid, Paper, Typography } from '@mui/material';
import { parseDate } from '@/utils/GlobalUtil';

function ChatItem({ item, handleOpenChat }) {
  return (
    <Paper
      elevation={2}
      sx={{ width: '97%', ml: 1, mr: 1 }}
      onClick={() => handleOpenChat(item)}
    >
      <Grid container sx={{ my: 1 }}>
        <Grid
          item
          xs={3}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            height: 80,
          }}
        >
          <Avatar
            alt={item.name}
            src={item.isGroupChat ? null : item.avatar}
            sx={{ width: 50, height: 50 }}
          >
            {item.isGroupChat ? item.quantity : ''}
          </Avatar>
        </Grid>

        <Grid
          xs={9}
          item
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            height: 80,
          }}
        >
          <Grid container xs={12} item>
            <Grid item xs={12}>
              <Typography
                variant="button"
                gutterBottom
                sx={{ fontWeight: 'bold' }}
              >
                {item.name}
              </Typography>
            </Grid>

            <Grid container xs={12}>
              <Grid item xs={7}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    maxWidth: 150,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.chatContent &&
                    item.chatContent[item.chatContent.length - 1].content}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="caption">
                  {item.chatContent &&
                    parseDate(
                      item.chatContent[item.chatContent.length - 1].timeStamp,
                    )}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ChatItem;

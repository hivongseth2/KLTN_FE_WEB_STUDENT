import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { FixedSizeList } from 'react-window';
import ForwardIcon from '@mui/icons-material/Forward';

function DocumentList({ documents }) {
  const listItemStyle = {
    borderBottom: '1px solid #EEE',
  };
  return (
    <FixedSizeList
      height={300}
      width="100%"
      itemSize={92}
      itemCount={documents.length}
    >
      {({ index, style }) => (
        <ListItem
          style={{ ...style, ...listItemStyle }}
          sx={{ borderBottom: '#EEE', borderWidth: 1 }}
          alignItems="flex-start"
          key={documents[index].id}
        >
          <ListItemText
            primary={
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ fontWeight: 'bold' }}
              >
                {`${documents[index].tieuDe} - ${documents[index].nguoiTao}`}
              </Typography>
            }
            secondary={
              <Typography variant="body2" color="text.primary" component="div">
                {documents[index].moTa}
              </Typography>
            }
          />

          <ForwardIcon color="primary" />
        </ListItem>
      )}
    </FixedSizeList>
  );
}

export default DocumentList;

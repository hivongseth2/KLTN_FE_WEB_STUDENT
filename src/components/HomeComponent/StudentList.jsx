import React from 'react';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { FixedSizeList } from 'react-window';
import { useNavigate } from 'react-router-dom';

function StudentList({ students }) {
  const navigate = useNavigate();
  return (
    <FixedSizeList
      height={220}
      width="100%"
      itemSize={46}
      itemCount={students.length}
    >
      {({ index, style }) => (
        <ListItem
          style={style}
          key={students[index].id}
          component="div"
          disablePadding
        >
          <ListItemButton
            onClick={() => {
              navigate('/detail-student', {
                state: { student: students[index] },
              });
            }}
          >
            <ListItemText
              primary={`${students[index].studentId} - ${students[index].fullName} `}
            />
          </ListItemButton>
        </ListItem>
      )}
    </FixedSizeList>
  );
}

export default StudentList;

import {
  Link as MuiLink,
  ListItemButton as MuiListItemButton,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function ListItemButton({ selectedItem, icon, link, title }) {
  return (
    <MuiListItemButton
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        width: '240px',
        height: '46px',
        padding: '12px',
        gap: '8px',
        margin: '8px 0px',
        borderRadius: '4px',
        backgroundColor: selectedItem ? 'primary.dark' : 'transparent',
        color: selectedItem ? 'common.white' : '#595959',
        ':hover': {
          backgroundColor: 'primary.main',
          color: 'common.white',
        },
      }}
    >
      {icon}
      <MuiLink
        component={Link}
        to={link}
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'block',
          textAlign: 'left',
          width: '100%',
          padding: '8px 10px',
        }}
      >
        <ListItemText
          primary={title}
          primaryTypographyProps={{
            variant: 'body2',
            color: selectedItem ? '#FFFFFF' : '#595959',
          }}
        />
      </MuiLink>
    </MuiListItemButton>
  );
}

export default ListItemButton;

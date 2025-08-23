import React from 'react';
import { 
  Avatar, 
  Typography, 
  Box,
  Paper 
} from '@mui/material';
import HoverDropdown from '../modal/HoverDropDown';

interface ProfileHoverDropdownProps {
  name: string;
  email: string;
  initial?: string;
  className?: string;
}

const ProfileHoverDropdown: React.FC<ProfileHoverDropdownProps> = ({ 
  name, 
  email, 
  initial,
  className = ""
}) => {
  const displayInitial = initial || name.charAt(0).toUpperCase();

  const avatarTrigger = (
    <Avatar
      sx={{
        width: 40,
        height: 40,
        bgcolor: '#FFFFFF',
        color: 'black',
        fontSize: '23px',
        fontWeight: 'medium',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 0 0 5px #919191',
          width: 38,
          height: 38,
        }
      }}
    >
      {displayInitial}
    </Avatar>
  );

  const dropdownContent = (
    <Paper 
      elevation={0}
      sx={{ 
        p: 2, 
        minWidth: 220,
        borderRadius: 2,
      }}
    >
      <Box>
        <Typography 
          variant="h6" 
          sx={{ 
            fontSize: '16px',
            fontWeight: 600,
            color: '#191919',
            lineHeight: 1.2,
            mb: 0.5
          }}
        >
          {name}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            fontSize: '14px',
            color: '#606060',
            lineHeight: 1.4
          }}
        >
          {email}
        </Typography>
      </Box>
    </Paper>
  );

  return (
    <HoverDropdown 
      trigger={avatarTrigger} 
      className={className}
    >
      {dropdownContent}
    </HoverDropdown>
  );
};

export default ProfileHoverDropdown;
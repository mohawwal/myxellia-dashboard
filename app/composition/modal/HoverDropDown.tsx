import React, { useState, ReactNode } from 'react';
import { Popover } from '@mui/material';

interface HoverDropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
}

const HoverDropdown: React.FC<HoverDropdownProps> = ({ 
  trigger, 
  children,
  className = ""
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className={className}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {trigger}
      </div>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleMouseLeave}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        disableRestoreFocus
        sx={{
          pointerEvents: 'none',
          '& .MuiPopover-paper': {
            pointerEvents: 'auto',
            mt: 1,
            boxShadow: 3,
            borderRadius: 2,
          }
        }}
        PaperProps={{
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
        }}
      >
        {children}
      </Popover>
    </div>
  );
};

export default HoverDropdown;
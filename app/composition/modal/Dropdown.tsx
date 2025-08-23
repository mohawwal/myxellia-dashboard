import React, { useState, ReactNode } from 'react';
import { Popover, ClickAwayListener } from '@mui/material';

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
  placement?: 'bottom-start' | 'bottom-end' | 'bottom' | 'top-start' | 'top-end' | 'top';
}

const Dropdown: React.FC<DropdownProps> = ({ 
  trigger, 
  children,
  className = "",
  placement = 'bottom-end'
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const getAnchorOrigin = () => {
    switch (placement) {
      case 'bottom-start':
        return { vertical: 'bottom' as const, horizontal: 'left' as const };
      case 'bottom-end':
        return { vertical: 'bottom' as const, horizontal: 'right' as const };
      case 'bottom':
        return { vertical: 'bottom' as const, horizontal: 'center' as const };
      case 'top-start':
        return { vertical: 'top' as const, horizontal: 'left' as const };
      case 'top-end':
        return { vertical: 'top' as const, horizontal: 'right' as const };
      case 'top':
        return { vertical: 'top' as const, horizontal: 'center' as const };
      default:
        return { vertical: 'bottom' as const, horizontal: 'right' as const };
    }
  };

  const getTransformOrigin = () => {
    switch (placement) {
      case 'bottom-start':
        return { vertical: 'top' as const, horizontal: 'left' as const };
      case 'bottom-end':
        return { vertical: 'top' as const, horizontal: 'right' as const };
      case 'bottom':
        return { vertical: 'top' as const, horizontal: 'center' as const };
      case 'top-start':
        return { vertical: 'bottom' as const, horizontal: 'left' as const };
      case 'top-end':
        return { vertical: 'bottom' as const, horizontal: 'right' as const };
      case 'top':
        return { vertical: 'bottom' as const, horizontal: 'center' as const };
      default:
        return { vertical: 'top' as const, horizontal: 'right' as const };
    }
  };

  return (
    <div className={className}>
      <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        {trigger}
      </div>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={getAnchorOrigin()}
        transformOrigin={getTransformOrigin()}
        sx={{
          '& .MuiPopover-paper': {
            mt: placement.startsWith('bottom') ? 1 : 0,
            mb: placement.startsWith('top') ? 1 : 0,
            boxShadow: 3,
            borderRadius: 2,
            border: '1px solid rgba(0, 0, 0, 0.12)',
          }
        }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            {children}
          </div>
        </ClickAwayListener>
      </Popover>
    </div>
  );
};

export default Dropdown;
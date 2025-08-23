import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

interface TransitionsModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  titleId?: string;
  sx?: React.CSSProperties;
  className?: string;
}

const defaultStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
};

export default function TransitionsModal({
  open,
  handleClose,
  children,
  titleId = 'transition-modal-title',
  sx = defaultStyle,
  className,
}: TransitionsModalProps) {
  return (
    <Modal
      aria-labelledby={titleId}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          },
        },
      }}
    >
      <Fade in={open}>
        <Box sx={sx} className={className}>
          {children}
        </Box>
      </Fade>
    </Modal>
  );
}
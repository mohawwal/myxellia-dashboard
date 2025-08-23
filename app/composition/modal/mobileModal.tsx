import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';

interface MobileModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  titleId?: string;
  className?: string;
}

const mobileStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
  maxHeight: '90vh',
  backgroundColor: 'white',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
  outline: 'none',
  overflow: 'auto',
  paddingBottom: 'env(safe-area-inset-bottom)',
};

export default function MobileModal({
  open,
  handleClose,
  children,
  titleId = 'mobile-modal-title',
  className,
}: MobileModalProps) {
  return (
    <Modal
      aria-labelledby={titleId}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 300,
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      }}
      sx={{
        zIndex: 9999,
      }}
    >
      <Slide direction="up" in={open} timeout={300}>
        <Box 
          sx={mobileStyle}
          className={className}
          component="div"
          role="dialog"
          tabIndex={-1}
        >
          {/* Header with drag handle and close button */}
          <div style={{ position: 'relative', paddingTop: '12px' }}>
            {/* Drag handle */}
            <div 
              style={{
                width: '40px',
                height: '4px',
                backgroundColor: '#E0E0E0',
                borderRadius: '2px',
                margin: '0 auto',
                cursor: 'pointer',
              }}
              onClick={handleClose}
            />
            
            {/* Close text button */}
            <Typography
              variant="body2"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: '8px',
                right: '16px',
                cursor: 'pointer',
                color: '#666',
                fontWeight: 500,
                fontSize: '14px',
                '&:hover': {
                  color: '#000',
                },
                userSelect: 'none',
              }}
            >
              Close
            </Typography>
          </div>
          
          {children}
        </Box>
      </Slide>
    </Modal>
  );
}
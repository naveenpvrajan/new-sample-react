import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { hideModal } from '../../store/actions/modal';

export default function Modal({
  title = '',
  children,
  onOk = () => {},
  actions,
  okayBtnProps = {},
  closeBtnProps = {}
}) {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(hideModal());
  return (
    <Dialog open={true}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        {actions || (
          <>
            <Button variant="outlined" onClick={handleClose} color="secondary" {...closeBtnProps}>
              {closeBtnProps.label || 'Cancel'}
            </Button>
            <Button
              variant="contained"
              disabled={okayBtnProps.loading}
              onClick={onOk}
              color="secondary"
              {...okayBtnProps}
            >
              {okayBtnProps.loading ? <CircularProgress color="secondary" sx={{ mr: 1 }} size={25} /> : null}
              {okayBtnProps.label || 'Okay'}
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}

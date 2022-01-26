import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { useSnackbar } from 'notistack';
import { removeNotification } from '../../store/actions/noti';

let displayed = [];

const useNotifier = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(state => state.noti.notifications || []);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = id => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = id => {
    displayed = [...displayed.filter(key => id !== key)];
  };
  useEffect(() => {
    notifications.forEach(({ key, msg, type, dismissed = false }) => {
      if (dismissed) {
        // dismiss snackbar using notistack
        closeSnackbar(key);
        return;
      }

      // do nothing if snackbar is already displayed
      if (displayed.includes(key)) return;

      // display snackbar using notistack

      enqueueSnackbar(msg, {
        key,
        variant: type,
        action: key => (
          <IconButton sx={{ p: 0.5 }} onClick={() => closeSnackbar(key)}>
            <CloseIcon />
          </IconButton>
        ),
        onClose: (event, reason, myKey) => {
        },
        onExited: (event, myKey) => {
          // remove this snackbar from redux store
          dispatch(removeNotification(myKey));
          removeDisplayed(myKey);
        }
      });

      // keep track of snackbars that we've displayed
      storeDisplayed(key);
    });
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);
};

export default useNotifier;

import Box from '@mui/material/Box';
import { useDispatch,useSelector } from 'react-redux';
import { deleteUserRequest } from '../../store/actions/user';

import Modal from '../modalRoot/modal';

function DeleteUser({ userData, title }) {
  const dispatch = useDispatch();
  const isUserDeleting = useSelector(state => state.user.isUserDeleting);
  const onDelete = () => {
    dispatch(deleteUserRequest(userData.id));
  };
  return (
    <Modal
      title={title}
      onOk={onDelete}
      okayBtnProps={{ label: 'Delete User', color: 'error', loading: isUserDeleting }}
    >
      <Box component="div">
        Are you sure you want to delete user (<b>{userData.name}</b>)?
        <div>
          <b>Note: This cannot be undone.</b>
        </div>
      </Box>
    </Modal>
  );
}

export default DeleteUser;

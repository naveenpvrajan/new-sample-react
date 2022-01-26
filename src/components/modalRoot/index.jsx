import { useSelector } from 'react-redux';

import adminUserFormModal from '../user/adminUserFormModal';
import userFormModal from '../user/userFormModal';
import DeleteUser from '../user/deleteUser';

const MODAL_COMPONENTS = {
  ADMIN_USER_FORM: adminUserFormModal,
  USER_FORM: userFormModal,
  DELETE_USER: DeleteUser
};

export default function ModalRoot() {
  const modalType = useSelector(state => state.modal.modalType);
  const modalProps = useSelector(state => state.modal.modalProps);
  if (!modalType || !modalType.length) return <span />;
  return modalType.map((m, idx) => {
    const SpecificModal = MODAL_COMPONENTS[m];
    return <SpecificModal {...modalProps[idx]} />;
  });
}

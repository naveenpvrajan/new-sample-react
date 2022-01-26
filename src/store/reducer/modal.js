import { SHOW_MODAL, HIDE_MODAL } from '../actionTypes/modal';

const ModalReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        modalType: [...state.modalType, payload.modalType],
        modalProps: [...state.modalProps, payload.modalProps]
      };
    case HIDE_MODAL:
      let index;
      if (payload) {
        index = state.modalType.findIndex(item => item === payload.modalType);
      }
      return {
        ...state,
        modalType: !payload ? [] : state.modalType.filter((_, idx) => index !== idx),
        modalProps: !payload ? [] : state.modalProps.filter((_, idx) => index !== idx)
      };

    default:
      return state;
  }
};

export default ModalReducer;

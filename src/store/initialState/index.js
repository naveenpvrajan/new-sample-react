import initialAuth from "./auth";
import initialUser from "./user";
import initialModal from "./modal";
import initialNoti from "./noti";

// key should be same as reducer name
const initialState = {
  auth: initialAuth,
  user: initialUser,
  modal: initialModal,
  noti: initialNoti,
};

export default initialState;

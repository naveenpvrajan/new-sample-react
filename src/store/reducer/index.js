import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import modal from './modal';
import user from './user';
import noti from './noti';

const rootReducer = combineReducers({
  auth,
  user,
  modal,
  noti,
  form: formReducer,
});

export default rootReducer;

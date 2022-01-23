import { hasStorage, getStorage } from '../../services/storage';

let initialAuth = {
  isLogging: false,
  authToken: ''
};

if (hasStorage('authToken')) {
  initialAuth.authToken = getStorage('authToken');
}

export default initialAuth;

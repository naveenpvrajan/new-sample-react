import { useSelector } from 'react-redux';

export default function useIsAuth() {
  return !!useSelector(state => state.auth.authToken);
}

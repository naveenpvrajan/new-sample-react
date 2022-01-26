import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import _startCase from 'lodash/startCase';

import { fetchUsersListRequest } from '../../store/actions/user';
import { showModal } from '../../store/actions/modal';
import DataTable from '../../components/table';
import BlockLoader from '../../components/blockLoader';
import { USER_FORM, DELETE_USER } from '../../store/actionTypes/modal';

function User() {
  const dispatch = useDispatch();
  const usersList = useSelector(state => state.user.usersList);
  const isUsersListLoading = useSelector(state => state.user.isUsersListLoading);
  useEffect(() => {
    dispatch(fetchUsersListRequest());
  }, [dispatch]);

  const onEditUser = userData => () => {
    dispatch(
      showModal({
        modalType: USER_FORM,
        modalProps: {
          form: 'edit_user_form',
          title: 'Edit User',
          initialValues: userData
        }
      })
    );
  };
  const onDeleteUser = userData => () => {
    dispatch(
      showModal({
        modalType: DELETE_USER,
        modalProps: {
          title: 'Delete User',
          userData: userData
        }
      })
    );
  };
  const renderActions = params => (
    <>
      <IconButton onClick={onEditUser(params.row)}>
        <EditIcon />
      </IconButton>
      <IconButton color="error" onClick={onDeleteUser(params.row)}>
        <DeleteIcon />
      </IconButton>
    </>
  );
  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'gender', headerName: 'Gender', flex: 1, valueGetter: params => _startCase(params.value) },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      valueGetter: params => _startCase(params.value)
    },
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      flex: 1,
      renderCell: renderActions
    }
  ];
  return (
    <BlockLoader loading={isUsersListLoading}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <DataTable rows={usersList.data} columns={columns} />
      </Grid>
    </BlockLoader>
  );
}

export default User;

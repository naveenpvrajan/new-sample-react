import { useDispatch } from 'react-redux';
import DataTable from '../../components/table';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import { showModal } from '../../store/actions/modal';
import { ADMIN_USER_FORM, DELETE_USER } from '../../store/actionTypes/modal';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function AdminUsers() {
  const dispatch = useDispatch();
  const admin_usersList = [
    {
      id: 1,
      name: 'Naveen',
      email: 'naveen.pvrajan1@outlook.com',
      role: 'Admin',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Siva',
      email: 'kingsiva@outlook.com',
      role: 'Developer',
      status: 'Active'
    }
  ];

  const onEditUser = userData => () => {
    dispatch(
      showModal({
        modalType: ADMIN_USER_FORM,
        modalProps: {
          form: 'edit_admin_user_form',
          title: 'Edit Admin User',
          initialValues: userData
        }
      })
    );
  };

  const onADDUser = () => {
    dispatch(
      showModal({
        modalType: ADMIN_USER_FORM,
        modalProps: {
          form: 'add_admin_user_form',
          title: 'ADD Admin User'
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
      <IconButton color="success">
        <Tooltip title="ADD Users">
          <AddIcon />
        </Tooltip>
      </IconButton>

      <IconButton color="info" onClick={onEditUser(params.row)}>
        <Tooltip title="Edit Users">
          <EditIcon />
        </Tooltip>
      </IconButton>

      <IconButton color="error" onClick={onDeleteUser(params.row)}>
        <Tooltip title="Delete Users">
          <DeleteIcon />
        </Tooltip>
      </IconButton>
    </>
  );

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'role', headerName: 'Role', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
    { field: 'action', headerName: 'Action', flex: 1, renderCell: renderActions }
  ];

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <DataTable rows={admin_usersList} columns={columns} />
    </Grid>
  );
}

export default AdminUsers;

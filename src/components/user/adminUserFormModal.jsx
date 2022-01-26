import { useSelector } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Modal from '../modalRoot/modal';
import Input from '../form/Input';
import { email, required } from '../../utils/validate';
import Toggle from '../form/Toggle';
import { roleLookup } from '../../constants';

function AdminUserFormModal({ title = 'Add User', intialValues, udataid }) {
  const isUserUpdating = useSelector(state => state.user.isUserUpdating);

  const onSubmit = () => {
    alert(udataid);
  };

  return (
    <Modal title={title} onOk={onSubmit} okayBtnProps={{ loading: isUserUpdating }}>
      <Box component="div" sx={{ mt: 3 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Field required name="name" label="Name" component={Input} validate={[required]} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field required dataSource={roleLookup} name="role" label="Roles" component={Input} validate={[required]} />
          </Grid>
          <Grid item xs={12}>
            <Field required name="email" label="Email Address" component={Input} validate={[required, email]} />
          </Grid>
          <Grid item xs={12}>
            <Field name="status" label="Status" component={Toggle} />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default reduxForm()(AdminUserFormModal);

import { useDispatch, useSelector } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { updateUserRequest } from '../../store/actions/user';
import Modal from '../modalRoot/modal';
import Input from '../form/Input';
import { email, required } from '../../utils/validate';
import Toggle from '../form/Toggle';
import SelectField from '../form/Select';
import { genderLookup } from '../../constants';

function UserFormModal({ title = 'Add User', handleSubmit, intialValues, ...rest }) {
  const dispatch = useDispatch();
  const isUserUpdating = useSelector(state => state.user.isUserUpdating);

  const onSubmit = formProps => {
    console.log('formProps', formProps);
    dispatch(updateUserRequest(formProps));
  };
console.log('isUserUpdating',isUserUpdating)
  return (
    <Modal title={title} onOk={handleSubmit(onSubmit)} okayBtnProps={{ loading: isUserUpdating }}>
      <Box component="div" sx={{ mt: 3 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Field required name="name" label="Name" component={Input} validate={[required]} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              required
              dataSource={genderLookup}
              name="gender"
              label="Gender"
              component={SelectField}
              validate={[required]}
            />
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

export default reduxForm()(UserFormModal);

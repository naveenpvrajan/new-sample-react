import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import { loginRequest } from '../../store/actions/auth';
import Input from '../../components/form/Input';
import Checkbox from '../../components/form/Checkbox';
import { reduxForm, Field, Form } from 'redux-form';
import { SIGNUP_PATH } from '../../constants/routes';
import AuthLayout from '../../components/authLayout';
import { required, email } from '../../utils/validate';

function Login({ handleSubmit }) {
  const dispatch = useDispatch();
  const onSubmit = formProps => {
    console.log('formProps', formProps);
    dispatch(loginRequest(formProps));
  };

  return (
    <AuthLayout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="div" sx={{ mt: 1 }}>
            <Field required name="username" label="Email" component={Input} validate={[required, email]} />
            <Field required name="password" label="Password" type="password" component={Input} validate={[required]} />
            <Field name="remember" label="Remember me" component={Checkbox} />
            <Button fullWidth type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <RouterLink to={SIGNUP_PATH}>{'Forgot password?'}</RouterLink>
              </Grid>
              <Grid item>
                <RouterLink to={SIGNUP_PATH}>{"Don't have an account? Sign Up"}</RouterLink>
              </Grid>
            </Grid>
          </Box>
          <Grid container justifyContent={'center'}>
            <Box component="div" sx={{ mt: 3 }}>
              Version {process.env.REACT_APP_VERSION}
            </Box>
          </Grid>
        </Box>
      </Form>
    </AuthLayout>
  );
}

export default reduxForm({ form: 'Login' })(Login);

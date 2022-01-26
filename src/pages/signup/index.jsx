import * as React from 'react';
import { reduxForm, Field, Form } from 'redux-form';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Input from '../../components/form/Input';
import AuthLayout from '../../components/authLayout';
import { email, required } from '../../utils/validate';
import { LOGIN_PATH } from '../../constants/routes';

function SignUp({ handleSubmit }) {
  const onSubmit = formProps => {
    console.log('formProps', formProps);
  };
  return (
    <AuthLayout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container component="main">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="div" sx={{ mt: 3 }}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Field required name="firstName" label="First Name" component={Input} validate={[required]} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field required name="lastName" label="Last Name" component={Input} validate={[required]} />
                </Grid>
                <Grid item xs={12}>
                  <Field required name="email" label="Email Address" component={Input} validate={[required, email]} />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    required
                    name="password"
                    label="Password"
                    type="password"
                    component={Input}
                    validate={[required]}
                  />
                </Grid>
              </Grid>
              <Button fullWidth type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <RouterLink to={LOGIN_PATH}>{'Already have an account? Sign in'}</RouterLink>
                </Grid>
              </Grid>
            </Box>
            <Grid container justifyContent={'center'}>
              <Box component="div" sx={{ mt: 3 }}>
                Version {process.env.REACT_APP_VERSION}
              </Box>
            </Grid>
          </Box>
        </Container>
      </Form>
    </AuthLayout>
  );
}

export default reduxForm({ form: 'SignupForm' })(SignUp);

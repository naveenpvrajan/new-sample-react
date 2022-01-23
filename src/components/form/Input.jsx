import TextField from '@mui/material/TextField';

const autoCompletes = {
  text: 'off',
  password: 'new-password'
};

export default function Input({
  label,
  input,
  type = 'text',
  margin = 'normal',
  color = 'secondary',
  variant = 'outlined',
  focused = true,
  required = true,
  fullWidth = true,
  autoComplete = '',
  children = null,
  meta: { touched, invalid, error },
  ...custom
}) {
  const lbl = required ? `${label} *` : label;
  return (
    <TextField
      type={type}
      label={lbl}
      color={color}
      margin={margin}
      focused={focused}
      variant={variant}
      placeholder={label}
      fullWidth={fullWidth}
      error={touched && invalid}
      helperText={touched && error}
      autoComplete={autoComplete || autoCompletes[type]}
      {...input}
      {...custom}
    >
      {children}
    </TextField>
  );
}

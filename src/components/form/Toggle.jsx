import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';

function Toggle({
  label,
  color = 'secondary',
  labelPlacement = 'start',
  input: { value, ...inputProps },
  meta: { touched, invalid, error }
}) {
  const isChecked = !!(value === 'active' || value === true);

  return (
    <FormControl component="fieldset" variant="standard" error={touched && invalid}>
      <FormControlLabel
        label={label}
        labelPlacement={labelPlacement}
        control={<Switch color={color} checked={isChecked} {...inputProps} />}
      />
      {touched && error ? <FormHelperText>{error}</FormHelperText> : null}
    </FormControl>
  );
}

export default Toggle;

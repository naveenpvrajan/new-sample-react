import CheckBox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Checkbox({ input: { name, ...inputProps }, label, color = 'primary' }) {
  return <FormControlLabel control={<CheckBox value={name} color={color} {...inputProps} />} label={label} />;
}

// import InputLabel from '@mui/material/InputLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';

import Input from './Input';

// function SelectField({
//   label,
//   input,
//   type = 'text',
//   margin = 'normal',
//   color = 'secondary',
//   variant = 'outlined',
//   focused = true,
//   required = true,
//   autoComplete = '',
//   dataSource = [],
//   labelKey = 'label',
//   valueKey = 'value',
//   fullWidth = true,
//   meta: { touched, invalid, error },
//   ...custom
// }) {
//   return (
//     <FormControl focused error={touched && invalid} fullWidth={fullWidth}>
//       <InputLabel color={color}>{label}</InputLabel>
//       <Select input={<OutlinedInput label={label} color={color} />} color={color} {...input} {...custom}>
//         {dataSource.map(({ [valueKey]: val, [labelKey]: label }) => (
//           <MenuItem key={val} value={val}>
//             {label}
//           </MenuItem>
//         ))}
//         {/* <MenuItem value="">
//           <em>None</em>
//         </MenuItem>
//         <MenuItem value={10}>Ten</MenuItem>
//         <MenuItem value={20}>Twenty</MenuItem>
//         <MenuItem value={30}>Thirty</MenuItem> */}
//       </Select>
//       {touched && error ? <FormHelperText>{error}</FormHelperText> : null}
//     </FormControl>
//   );
// }

// export default SelectField;

function SelectField({ dataSource, labelKey = 'label', valueKey = 'value', ...props }) {
  return (
    <Input select {...props}>
      {dataSource.map(({ [valueKey]: val, [labelKey]: label }) => (
        <MenuItem key={val} value={val}>
          {label}
        </MenuItem>
      ))}
    </Input>
  );
}

export default SelectField;

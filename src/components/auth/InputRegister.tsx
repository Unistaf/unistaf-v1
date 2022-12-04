import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@mui/material';
import { AccountBox } from '@mui/icons-material';

interface IProps {
  id: string;
  handleMouseDown: string;
  value: string;
  handleChangeValues;
  type: string;
  htmlFor;
  inputLabel;
  label: string;
  position: string;
}

const InputRegister = ({
  id,
  handleMouseDown,
  value,
  handleChangeValues,
  type,
  htmlFor,
  inputLabel,
  label,
  position
}) => {
  return (
    <FormControl sx={{ width: '100%', my: 1 }} variant="outlined">
      <InputLabel htmlFor={htmlFor}>{inputLabel}</InputLabel>
      <OutlinedInput
        required
        id={id}
        value={value}
        type={type}
        onChange={handleChangeValues(value)}
        endAdornment={
          <InputAdornment position={position}>
            <IconButton
              arial-label={label}
              onMouseDown={handleMouseDown}
              edge="end"
            >
              <AccountBox />
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
};

export default InputRegister;

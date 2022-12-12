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
  handleChangeValues: () => {};
  type: string;
  htmlFor: string;
  inputLabel: string;
  label: string;
  ariaLabel: string,
  position: string;
}

const InputRegister = ({
  id,
  htmlFor,
  handleMouseDown,
  value,
  handleChangeValues,
  type,
  inputLabel,
  label,
  ariaLabel,
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
        onChange={handleChangeValues}
        endAdornment={
          <InputAdornment position={position}>
            <IconButton
              arial-label={ariaLabel}
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

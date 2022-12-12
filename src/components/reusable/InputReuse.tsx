import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@mui/material';
import { AccountBox } from '@mui/icons-material';
import { ChangeEventHandler, ReactElement } from 'react';

interface IProps {
  id: string;
  value: string;
  handleChangeValues: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  type: string;
  htmlFor: string;
  inputLabel: string;
  label: string;
  ariaLabel: string,
  position: "end" | "start",
  icon: ReactElement,
  onClick: () => void | null,
  error: boolean | null
}

const InputReuse = ({
  id,
  htmlFor,
  value,
  handleChangeValues,
  type,
  inputLabel,
  label,
  ariaLabel,
  position,
  icon,
  onClick,
  error
}: IProps) => {
  return (
    <>
      <InputLabel htmlFor={htmlFor}>{inputLabel}</InputLabel>
      <OutlinedInput
        error={error}
        required
        id={id}
        value={value}
        type={type}
        onChange={handleChangeValues}
        endAdornment={
          <InputAdornment position={position}>
            <IconButton
              arial-label={ariaLabel}
              onClick={onClick ?? null}
              edge="end"
            >
              {icon}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </>
  )
}

export default InputReuse
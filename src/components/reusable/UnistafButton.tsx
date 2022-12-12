import { Save } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { MouseEvent, ReactElement } from 'react'

interface IProps {
  bgColor: string,
  disabled: boolean,
  handleSubmit: ((e: MouseEvent<HTMLButtonElement>) => Promise<void>) | ((e: React.MouseEvent<HTMLButtonElement>) => void)
  loading: boolean,
  children: Element | string,
  icon: ReactElement,
  color: string,
  className?: string
}

const UnistafButton = ({bgColor, disabled, handleSubmit, loading, children, icon, color, className}: IProps) => {
  return (
    <LoadingButton
      sx={{ mt: 2, ml: 1, px: 4, py: 1.5, backgroundColor: bgColor, color: color}}
      size="small"
      disabled={disabled}
      onClick={handleSubmit}
      loading={loading}
      loadingPosition="start"
      startIcon={icon}
      // startIcon={<SaveIcon />}
      variant="contained"
      className={className}
    >
      {children}
    </LoadingButton>
  )
}

export default UnistafButton
import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

interface CustomButtonProps extends ButtonProps {
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  isOutlined?: boolean;
  to?: string;
  size?: 'small' | 'medium' | 'large';
}

const StyledButton = styled(Button)<CustomButtonProps>(
  ({
    theme,
    backgroundColor = '#0D0DA3',
    textColor = '#fff',
    borderColor = backgroundColor,
    isOutlined = false,
    size
  }) => {
    const buttonTextColor =
      textColor ||
      (backgroundColor
        ? theme.palette.getContrastText(backgroundColor)
        : undefined);
    const buttonBackgroundColor = isOutlined
      ? '#ffffff'
      : backgroundColor || '#ffffff';

    let buttonPadding;
    let buttonFontSize;

    switch (size) {
      case 'small':
        buttonPadding = '4px 16px';
        buttonFontSize = '0.875rem';
        break;
      case 'large':
        buttonPadding = '16px 32px';
        buttonFontSize = '1.5rem';
        break;
      default:
        buttonPadding = '8px 24px';
        buttonFontSize = '1rem';
        break;
    }

    return {
      margin: 3,
      borderRadius: '100px',
      textTransform: 'none',
      fontWeight: 500,
      color: isOutlined ? borderColor : buttonTextColor,
      backgroundColor: buttonBackgroundColor,
      border: `1px solid ${borderColor || buttonTextColor}`,
      padding: buttonPadding,
      fontSize: buttonFontSize,
      '&:hover': {
        backgroundColor: isOutlined ? borderColor : buttonTextColor,
        color: buttonBackgroundColor
      }
    };
  }
);

function UnistafRoundedButton({ children, to, ...rest }: CustomButtonProps) {
  const isLink = Boolean(to);

  return isLink ? (
    <Link to={to!}>
      <StyledButton {...rest}>{children}</StyledButton>
    </Link>
  ) : (
    <StyledButton {...rest}>{children}</StyledButton>
  );
}

export default UnistafRoundedButton;

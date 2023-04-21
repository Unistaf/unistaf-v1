import { Grid, SxProps } from '@mui/material';
import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  colors: string;
}

function Section({ children, colors }: SectionProps) {
  const sectionStyle: SxProps = {
    p: {xs: 1, sm: 3, md: 5},
    backgroundColor: colors,
  };

  return <Grid sx={sectionStyle}>{children}</Grid>;
}

export default Section;

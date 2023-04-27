import { Typography } from '@mui/material'
import React, { ReactNode } from 'react'
interface SubtitleProp {
    children: ReactNode
}

function Subtitle({children}:SubtitleProp) {
  return (
    <Typography variant="h2" className="subtitle">
        {children}
    </Typography>
  )
}

export default Subtitle
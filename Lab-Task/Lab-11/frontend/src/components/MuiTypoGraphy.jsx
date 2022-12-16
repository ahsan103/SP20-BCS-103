import React from 'react'
import {Box, Typography} from '@mui/material'
function MuiTypoGraphy() {
  return (
    <div>
        <Box sx={{textAlign:'center'}}>
        <Typography variant='h1'>heading 1</Typography>
        <Typography variant='h2'>heading 2</Typography>
        <Typography variant='h3'>heading 3</Typography>
        <Typography variant='h4'>heading 4</Typography>
        <Typography variant='h5'>heading 5</Typography>
        <Typography variant='h6'>heading 6</Typography>

        <Typography variant='subtitle1'>Subtitle1</Typography>
        <Typography variant='subtitle2'>Subtitle2</Typography>

        <Typography variant='body1'>body detail 1</Typography>
        <Typography variant='body2'>body detail 2</Typography>

        </Box>
    </div>
  )
}

export default MuiTypoGraphy
import React from 'react'
import { Box, Button, ButtonGroup } from '@mui/material'
function MuiButtonGroup() {
  return (
    <Box sx={{textAlign:'center'}}>
        <ButtonGroup variant='contained' size='medium' color='error'>
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>
    </Box>
  )
}

export default MuiButtonGroup
import React, { useState } from 'react'
import { Box, MenuItem, TextField, Typography, } from '@mui/material'
function MuiSelect() {
    const[item , setItem] = useState('')
  return (
    <Box sx={{width:250}}>
        <TextField label='select me' value={item} onChange={(e)=>{setItem(e.target.value)}}>
            <MenuItem value={'1'}>item 1</MenuItem>
            <MenuItem value={'2'}>item 2</MenuItem>
            <MenuItem value ={'3'}>item 3</MenuItem>
        </TextField>
        <Typography>{item}</Typography>
    </Box>
  )
}

export default MuiSelect
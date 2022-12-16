import React, { useState } from 'react'
import { Box, Button , IconButton, Typography} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
function MuiButton() {
    const [color , setColor] = useState('primary')
  return (
    <Box sx={{textAlign:'center'}}>
        <Box>
            <Typography variant='h3'> Button Variants</Typography>
            <Button variant='text'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>outlined</Button>
        </Box>
        <Box>
            <Typography variant='h3'> Button Color (Text)</Typography>
            <Button variant='text' color='primary'>Text</Button>
            <Button variant='text' color='secondary'>Text</Button>
            <Button variant='text' color='error'>Text</Button>
            <Button variant='text' color='info'>Text</Button>
            <Button variant='text' color='success'>Text</Button>
            <Button variant='text' color='warning'>Text</Button>
        </Box>
        <Box>
            <Typography variant='h3'> Button Color (Contained)</Typography>
            <Button variant='contained' color='secondary'>Contained</Button>
            <Button variant='contained' color='primary'>Contained</Button>
            <Button variant='contained' color='error'>Contained</Button>
            <Button variant='contained' color='info'>Contained</Button>
            <Button variant='contained' color='success'>Contained</Button>
            <Button variant='contained' color='warning'>Contained</Button>
        </Box>
        <Box>
            <Typography variant='h3'> Button Color (Outlined)</Typography>
            <Button variant='outlined' color='secondary'>Outlined</Button>
            <Button variant='outlined' color='primary'>Outlined</Button>
            <Button variant='outlined' color='error'>Outlined</Button>
            <Button variant='outlined' color='info'>Outlined</Button>
            <Button variant='outlined' color='success'>Outlined</Button>
            <Button variant='outlined' color='warning'>Outlined</Button>
        </Box>
        <Box>
            <Typography variant='h3'> Button Size</Typography>
            <Button variant='contained' size='small'>small</Button>
            <Button variant='contained' size='medium'>medium</Button>
            <Button variant='contained' size='large'>large</Button>
        </Box>
        <Box>
        <Typography variant='h3'> Button Icons</Typography>
        <Button color={color} variant='contained' endIcon={<SendIcon />} onClick={()=>{
            if(color === 'primary'){
                setColor('error')
            }
            else{
                setColor('primary')
            }
        }}>Send</Button>
        </Box>
        <IconButton>
            <SendIcon />
        </IconButton>
    </Box>
  )
}

export default MuiButton
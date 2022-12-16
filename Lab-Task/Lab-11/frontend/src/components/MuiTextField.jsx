import React, { useState } from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'
function MuiTextField() {
  const [name , setName] = useState('')
  const [show ,setShow] = useState('')
  return (
    <Stack sx={{margin:20}} spacing={4}>
      <Stack direction={'row'} spacing={2}>
        <TextField label='Name' value={name} onChange={(e)=>{
          setName(e.target.value)
        }}/>
        <Button variant='contained' onClick={()=>{
          setShow(name) 
          setName('')
          }}>Submit</Button>
        <Typography>{show}</Typography>
      </Stack>
      
    </Stack>
  )
}

export default MuiTextField
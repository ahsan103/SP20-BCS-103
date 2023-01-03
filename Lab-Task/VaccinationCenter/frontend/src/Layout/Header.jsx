import React from 'react'
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material'
function Header() {
  return (
      <AppBar position="fixed" sx={{backgroundColor:'#001430' }}>
        <Toolbar sx={{justifyContent:'space-evenly'}}>
          <img src='https://corf-react.envytheme.com/img/logo.png' alt='logo' />
          <Box >
            <Button sx={{textTransform:'capitalize' , color:'white' ,"&:hover":{color:'#06ABB6'}}}>
              Home
            </Button >
            <Button sx={{textTransform:'capitalize' , color:'white' ,"&:hover":{color:'#06ABB6'}}}>
              About
            </Button>
            <Button sx={{textTransform:'capitalize' , color:'white' ,"&:hover":{color:'#06ABB6'}}}>
              Pages
            </Button>
            <Button sx={{textTransform:'capitalize' , color:'white' ,"&:hover":{color:'#06ABB6'}}}>
              Doctors
            </Button>
            <Button sx={{textTransform:'capitalize' , color:'white' ,"&:hover":{color:'#06ABB6'}}}>
              Blog
            </Button>
          </Box>

        </Toolbar>
      </AppBar>
  
  )
}

export default Header
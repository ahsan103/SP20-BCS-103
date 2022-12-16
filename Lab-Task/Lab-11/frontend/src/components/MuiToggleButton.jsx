import React from 'react'
import { Box , ToggleButtonGroup , ToggleButton, Stack} from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
function MuiToggleButton() {
  return (
    <Stack direction={'row'}>
      <ToggleButtonGroup>
        <ToggleButton value='bold'><FormatBoldIcon/></ToggleButton>
        <ToggleButton value='italic'><FormatItalicIcon/></ToggleButton>
        <ToggleButton value='underline'><FormatUnderlinedIcon/></ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  )
}

export default MuiToggleButton
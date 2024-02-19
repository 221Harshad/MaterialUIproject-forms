import { Box, Typography } from '@mui/material'
import React from 'react'
import {ErrorOutline} from '@mui/icons-material'
const ErrorMessage = ({message}) => {
  return (
    <Box sx={{display:'flex', alignItems:'centre' , gap:'5px' ,mt:'6px'}}>
       <ErrorOutline color='error' sx={{width:'20px'}}/>
       <Typography color='error.main' varient='span' fontSize='14px'>
              {message}   
       </Typography>
    </Box>
  )
}

export default ErrorMessage
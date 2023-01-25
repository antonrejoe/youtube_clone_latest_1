
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './utils/css/inside/searchbar.css'
import { Button, Input, Paper, TextField } from '@mui/material'
const Searchbar = () => {
  return (

    <>

          
      <div class="searchbar_parent">

        <Paper variant='outlined' elevation={10} 
            sx={{
              "p":'10px',
              "m":'10px',
              "px":'100px',
              "borderRadius":'2rem'
            }}
          >
          <div class="searchbar">


          <Input  placeholder="Search"  variant="black"
            sx={{ 
              'px':'0px',
              'width':'400px'
            }}  />
           
            <Button variant="text" color="inherit">
            <SearchIcon/>
              
            </Button>
          </div>
        
        </Paper>

      </div>
    
    </>
    

  )
}

export default Searchbar
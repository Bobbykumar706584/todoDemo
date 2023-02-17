import { AppBar, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, TextField, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Box from '@mui/material/Box'
export default function Home() {

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClickClose = () => {
    setOpen(false)
  }
  return (

<AppBar >
  <Toolbar className='flex items-center justify-between'>
    <h1 className="text-2xl font-bold h-12 text-gray-50 place-self-end">
      To Do List
    </h1>
    
    <button type="button" onClick={handleClickOpen} className="font-bold rounded font-serif hover:text-black focus:outline border-1 shadow-amber-500 hover:bg-green-300 p-2 text-lg border-black place-">Add</button> 
    <Dialog open={open} onClick={handleClickClose}>
      <DialogTitle>Add Tasks</DialogTitle>
    <DialogContent className="flex h-auto w-96">
                <Box>
                  <label className="label" htmlFor="content">
                    Enter Task:
                  </label>
                  <TextField/>

                </Box>
    </DialogContent>
    <DialogActions>
      <Button>Cancel</Button>
      <Button>Create</Button>
    </DialogActions>
    </Dialog>
    </Toolbar> 
    </AppBar>
  )
}
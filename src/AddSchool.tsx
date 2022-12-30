import React from 'react'
import { unistafColors } from './utils/colors'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import InputReuse from './components/reusable/InputReuse';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';


const AddSchool = () => {
  return (
    <div style={{ width: '500px', padding: '1.5rem', backgroundColor: `${unistafColors[2]}`, color: 'white', height: '100%' }}>
      <h2 className='text-uppercase text-center'>Ajouter une école</h2>
      <form action="">
        <div style={{ maxWidth: '150px' }} className='border-dashed p-2 flex flex-column justify-content-center align-items-center mx-auto'>
          <AddRoundedIcon />
          <span>Ajouter un logo</span>
          <span>(500x500px)</span>
        </div>
        <div style={{ width: '100%', margin: 0, padding: 0 }}>
          <InputLabel htmlFor="outlined-adornment-name">Nom de l'école</InputLabel>
          <OutlinedInput
            sx={{
              backgroundColor: '#55535E',
              color: 'white'
            }}
            className="add-school-placehlder"
            disabled={false}
            fullWidth={true}
            error={null}
            required
            id="outlined-adornment-name"
            value={null}
            type="text"
            onChange={null}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  arial-label="name"
                  onClick={null}
                  edge="end"
                >
                  {null}
                </IconButton>
              </InputAdornment>
            }
            label="Nom de l'ecole"
          />
        </div>
        <div style={{ width: '100%', margin: '0', padding: 0 }}>
          <InputLabel htmlFor="outlined-adornment-name">Nom de l'ecole</InputLabel>
          <OutlinedInput
            sx={{
              backgroundColor: '#55535E',
              color: 'white'
            }}
            className="add-school-placehlder"
            disabled={false}
            fullWidth={true}
            error={null}
            required
            id="outlined-adornment-name"
            value={null}
            type="text"
            onChange={null}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  arial-label="name"
                  onClick={null}
                  edge="end"
                >
                  {null}
                </IconButton>
              </InputAdornment>
            }
            label="Nom de l'ecole"
          />
        </div>

        <TextareaAutosize
          className="add-school-placehlder p-2"
          aria-label="empty textarea"
          placeholder="A propos de  l'école"
          style={{ width: '100%', height: '200px', backgroundColor: "#55535E", marginTop: '1rem' }}
        />
        <div style={{ width: '100%' }} className='border-dashed p-2 flex flex-column justify-content-center align-items-center mx-auto'>
          <AddRoundedIcon />
          <span>Ajouter une bannière</span>
          <span>(500x500px)</span>
        </div>
      </form>
    </div>
  )
}

export default AddSchool
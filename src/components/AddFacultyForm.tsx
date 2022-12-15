import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import InputReuse from './reusable/InputReuse'
import { Mail, Save } from '@mui/icons-material';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import UnistafButton from './reusable/UnistafButton';
import { unistafColors } from 'src/utils/colors';

interface State {
  name: string;
  description: string;
  school_id: number | string;
}

const AddFacultyForm = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    defaultValues: {
      name: '',
      description: '',
      school_id: null
    }
  });

  const [values, setValues] = useState({
    name: '',
    description: '',
    school_id: null,
    branches: [
      {
        name: '',
        image: '',
        faculty_id: null
      }
    ]
  });

  const handleChange =
    (prop: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: e.target.value });
    };

  return (
    <div>
      <form action="">
        <div className='flex gap-2'>
        <InputReuse
          error={errors.name?.message ? true : false}
          htmlFor="outlined-adornment-name"
          inputLabel="Nom de la faculté"
          id="outlined-adornment-name"
          value={values.name}
          type="text"
          handleChangeValues={handleChange('name')}
          position="end"
          ariaLabel="name"
          icon={<SchoolRoundedIcon />}
          label="Nom de la faculté"
          onClick={null}

        />
        <InputReuse
          error={errors.description?.message ? true : false}
          htmlFor="outlined-adornment-description"
          inputLabel="Description"
          id="outlined-adornment-description"
          value={values.description}
          type="text"
          handleChangeValues={handleChange('description')}
          position="end"
          ariaLabel="description"
          icon={<SchoolRoundedIcon />}
          label="Description"
          onClick={null}

        />
        </div>
        <UnistafButton
          className='google-btn btn--font-size'
          bgColor={unistafColors[1]}
          color={unistafColors[0]}
          disabled={false}
          handleSubmit={null}
          loading={false}
          icon={<Save />}
        >
          Soumettre
        </UnistafButton>
      </form>
    </div>
  )
}

export default AddFacultyForm
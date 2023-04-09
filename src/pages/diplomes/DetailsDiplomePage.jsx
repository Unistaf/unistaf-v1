import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux';
import { EditorState } from 'draft-js';
import { createMarkup } from 'src/utils/createMarkup';
import { Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ADMIN_DIPLOME_EDIT_NAVIGATION } from 'src/navigation_paths';
import { EditAttributesTwoTone } from '@mui/icons-material';
import {MdEdit} from 'react-icons/md'
import {AiOutlineDelete} from 'react-icons/ai'
import { useDeleteBrancheMutation } from 'src/redux/services/extendedBrancheApi';
import ConfirmAction from 'src/components/ConfirmAction';
import { useToken } from 'src/hooks/useToken';

const DetailsDiplomePage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {currentDiplome} = useSelector(state => state.diplomes)
    const [deleteBranche] = useDeleteBrancheMutation()
    const { token } = useToken()

    const [openDeleteConfirmation, setOpenDeleteModalConfirmation] = useState(false)
    // console.log({currentDiplome});

    const deleteBrancheFunc = () => {
        deleteBranche({id:currentDiplome.id, token}).then(res => {
            // console.log({res});
            navigate(-1)
            
        })
    }

  return (
    <div className='bg-white h-100 p-3 my-2'>

        <ConfirmAction
            open={openDeleteConfirmation} 
            handleClose={() => setOpenDeleteModalConfirmation(false)}
         >
            <div className='flex gap-2 justify-content-center mt-3'>
                <button 
                    onClick={() => setOpenDeleteModalConfirmation(false)}
                    className='btn-delete p-1 text-white'
                >Non</button>
                <button
                    onClick={deleteBrancheFunc}
                    className='btn-edit p-1'
                 >Oui</button>
            </div>
        </ConfirmAction>

        <div className='flex gap-2'>
            <Link 
                className='btn-edit p-1 fle text-center ' 
                to={`${ADMIN_DIPLOME_EDIT_NAVIGATION}/${currentDiplome.id}/edit`}
            >
                <MdEdit size={20}/> 
            </Link>
            <button 
                onClick={() => setOpenDeleteModalConfirmation(true)}
                className='p-1 btn-delete text-white'
            >
                <AiOutlineDelete size={20} />
            </button>
        </div>

        <h1>{currentDiplome.name}</h1>
        <p>{currentDiplome.description}</p>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={6}>
                <h2>Avantages</h2>
                <div
                    className="preview "
                    dangerouslySetInnerHTML={createMarkup(currentDiplome.advantages)}
                >

                </div>
            </Grid>
            <Grid item xs={12} sm={6}>
                <h2>Debouches</h2>
                <div
                    className="preview"
                    dangerouslySetInnerHTML={createMarkup(currentDiplome.outlets)}
                >

                </div>
            </Grid>
            <Grid item xs={12} sm={6}>
                <h2>Prerequis</h2>
                <div
                    className="preview"
                    dangerouslySetInnerHTML={createMarkup(currentDiplome.prerequisite)}
                >

                </div>
            </Grid>
        </Grid>
        {/* <div className='flex wrap space-between gap-3'>
            <section style={{minWidth:'400px'}}>
                
            </section>
            <section style={{minWidth:'400px'}}>
                
            </section>
            <section style={{minWidth:'400px'}}>
                
            </section>
        </div> */}
    </div>
  )
}

export default DetailsDiplomePage
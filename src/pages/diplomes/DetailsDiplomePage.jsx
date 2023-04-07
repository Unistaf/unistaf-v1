import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux';
import { EditorState } from 'draft-js';
import { createMarkup } from 'src/utils/createMarkup';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { ADMIN_DIPLOME_EDIT_NAVIGATION } from 'src/navigation_paths';

const DetailsDiplomePage = () => {
    const {id} = useParams()
    const {currentDiplome} = useSelector(state => state.diplomes)
    // console.log({currentDiplome});
  return (
    <div className='bg-white p-3 my-2'>

        <Link className='btn-edit p-1' to={`${ADMIN_DIPLOME_EDIT_NAVIGATION}/${currentDiplome.id}/edit`}>Modifier</Link>

        <h1>{currentDiplome.name}</h1>
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
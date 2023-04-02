import { MoreSharp } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useGetFacultiesQuery } from 'src/redux/services/extendedFacultyApi';
import { useCurrentUserId } from 'src/hooks/useCurrentUserId';
import { useToken } from '../../hooks/useToken';
import Input from 'src/components/Input';
import ResourceDataMap from 'src/components/ResourceDataMap';
import OptionListItem from 'src/components/OptionListItem';
import { useAddBranchesMutation } from 'src/redux/services/extendedBrancheApi';
import { useNavigate } from 'react-router';
import { ADMIN_DIPLOMES_NAVIGATION } from 'src/navigation_paths';

import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { convertToHTML, convertFromHTML } from 'draft-convert';
import { createMarkup } from 'src/utils/createMarkup';

const schema = yup.object({
    faculty_name: yup.string().required(),
    AjouterDiplome: yup.number().positive().integer().required(),
}).required();

const AjouterDiplome = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const userId: { userId: number } = useCurrentUserId()
    const schoolId = userId.userId
    const { token } = useToken()
    const [addBranche] = useAddBranchesMutation()
    const { data: faculties = {}, isError, isLoading, isFetching, error } = useGetFacultiesQuery({ token: token, schoolId: schoolId })
    // console.log({ faculties });
    // const [editorState, setEditorState] = useState<any>(htmlToDraft('Your html contents'))
    const [convertedContent, setConvertedContent] = useState<any>(null)

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const addDiplome = (data: {}) => {
        console.log({ data });
        addBranche({ data, token }).then((res) => {
            console.log({ res });
            navigate(ADMIN_DIPLOMES_NAVIGATION)
        }).catch(err => {
            console.log({ err });
        })
    }

    useEffect(() => {
        // !permet de convertir le contenu du wysiwyg en HTML
        let html = convertToHTML(editorState.getCurrentContent());
        // console.log({ html });
        setConvertedContent(html);

        // ! convertir le html en contenu du wysiwyg
        // const editorStates = EditorState.createWithContent(convertFromHTML(html));

        // console.log({ editorState, editorStates });

        // console.log({ editorStates });


    }, [editorState]);

    return (
        <div>
            <header className='flex align-items-center gap-1'>
                <h2>Mes diplomes</h2><MoreSharp />
                <span>Ajouter un diplome</span>
            </header>
            <div>
                <form onSubmit={handleSubmit(addDiplome)} action="" className='gap-1 flex flex-column'>
                    <div className="form-row flex gap-1">
                        <Input
                            register={{ ...register('name') }}
                            type="text"
                            placeholder="Nom de la filiere"
                            error={errors.name}
                        />
                        <select {...register('faculty_id')} id="">
                            <option value="">Selectionner une faculte</option>
                            <ResourceDataMap
                                resourceData={faculties?.data}
                                resourceItem={OptionListItem}
                                resourceName="faculty"
                            />
                        </select>
                        {/* <input
                            {...register("mail")}
                            aria-invalid="true"
                            type="text"
                            placeholder="Diplomes obtenus(BTS,LICENCE,MASTER...)"
                        /> */}
                    </div>
                    <div className="form-row flex align-items-center gap-1">
                        {/* <select name="" id="">
                            <option value="">Dilome requis</option>
                        </select> */}
                        {/* <select
                            {...register("dureeFormation")}
                            name="" id=""
                        >
                            <option value="">Duree formation</option>
                            <option value="1">1 an</option>
                            <option value="2">2 an</option>
                            <option value="3">3 an</option>
                        </select> */}
                        {/* <div>
                            Accrediter par:
                            <div className="flex">
                                <div className="flex checkbox-container align-items-center">
                                    <input id='anaqsup' type="checkbox" />
                                    <label htmlFor="anaqsup" className='flex'>ANAQ SUP</label>
                                </div>
                                <div className='flex align-items-center'>
                                    <input id='cames' type="checkbox" />
                                    <label htmlFor="cames" className='flex'>CAMES</label>
                                </div>
                                <div className='flex align-items-center'>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                            </div>
                        </div> */}
                        {/* <fieldset>
                            <legend>Choose your interests</legend>
                            <div>
                                <input type="checkbox" id="coding" name="interest" value="coding" />
                                <label htmlFor="coding">Coding</label>
                            </div>
                            <div>
                                <input type="checkbox" id="music" name="interest" value="music" />
                                <label htmlFor="music">Music</label>
                            </div>
                        </fieldset> */}

                    </div>
                    <div className="form-row flex gap-1">
                        <Input
                            register={{ ...register('description') }}
                            type="text"
                            placeholder="Description"
                            error={errors.name}
                        />
                        <Input
                            register={{ ...register('prerequisite') }}
                            type="text"
                            placeholder="Prerequis"
                            error={errors.name}
                        />
                        <Input
                            register={{ ...register('outlets') }}
                            type="text"
                            placeholder="Debouches"
                            error={errors.name}
                        />
                        <Input
                            register={{ ...register('advantages') }}
                            type="text"
                            placeholder="Avantages"
                            error={errors.name}
                        />
                        {/* <textarea
                            {...register('description')}
                            name="prerequises"
                            id="prerequises"
                            cols={30}
                            rows={10}
                            placeholder="Prerequis"
                        ></textarea> */}
                        {/* <textarea
                            {...register('prerequisite')}
                            name="prerequises"
                            id="prerequises"
                            cols={30}
                            rows={10}
                            placeholder="Prerequis"
                        ></textarea> */}
                        {/* <textarea
                            {...register('outlets')}
                            name="debouches"
                            id="debouches"
                            cols={30}
                            rows={10}
                            placeholder="Debouches"
                        /> */}
                        {/* <textarea
                            {...register('advantages')}
                            name="avantages"
                            id="avantages"
                            cols={30}
                            rows={10}
                            placeholder="Avantages"
                        /> */}
                    </div>
                    <div>
                        <Editor
                            // defaultEditorState={editorState}
                            editorState={editorState}
                            onEditorStateChange={setEditorState}
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class"
                            toolbarClassName="toolbar-class"
                        />
                    </div>

                    <div
                        className="preview"
                        dangerouslySetInnerHTML={createMarkup(convertedContent)}
                    >

                    </div>
                    <button className='btn btn-secondary' type='submit'>Ajouter</button>
                    {/* <button>Submit</button> */}
                </form>
            </div>
        </div>
    )
}

export default AjouterDiplome
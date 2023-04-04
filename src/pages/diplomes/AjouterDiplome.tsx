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
    // const [editorState, setOutletsState] = useState<any>(htmlToDraft('Your html contents'))
    const [convertedOutlets, setConvertedOutlets] = useState<any>(null)
    const [convertedAdvantages, setConvertedAdvantages] = useState<any>(null)
    const [convertedPrerequisite, setConvertedPrerequisite] = useState<any>(null)

    const [outletsState, setOutletsState] = useState(() => EditorState.createEmpty());
    const [advantagesState, setAdvantagesState] = useState(() => EditorState.createEmpty())
    const [prerequisiteState, setPrerequisiteState] = useState(() => EditorState.createEmpty())
    // const [outletsState, setOutletsState] = useState(
    //     () => EditorState.createEmpty(),
    // );

    const addDiplome = (data: { outlets: string, advantages: string, prerequisite: string }) => {
        // !outlets, advantages,prerequisite
        data.outlets = convertedOutlets
        data.advantages = convertedAdvantages
        data.prerequisite = convertedPrerequisite
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
        // !outlets
        let outletes: string = convertToHTML(outletsState.getCurrentContent());
        setConvertedOutlets(outletes);

        // !advantages
        let advantages: string = convertToHTML(advantagesState.getCurrentContent())
        setConvertedAdvantages(advantages)

        // !prerequisiteState
        let prerequisite: string = convertToHTML(prerequisiteState.getCurrentContent())
        setConvertedPrerequisite(prerequisite)

        // ! convertir le html en contenu du wysiwyg
        // const editorStates = EditorState.createWithContent(convertFromHTML(html));

        // console.log({ editorState, editorStates });

        // console.log({ editorStates });


        // Modifier.insertText(outletsState.getCurrentContent(), outletsState.getSelection(), 'contesnt')

    }, [outletsState]);

    return (
        <div>
            <header className='flex align-items-center gap-1'>
                <h2>Mes diplomes</h2><MoreSharp />
                <span>Ajouter un diplome</span>
            </header>
            <div>
                <form onSubmit={handleSubmit(addDiplome)} action="" className='gap-1 flex flex-column mb-3'>
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
                    <div className="form-row flex gap-1">
                        <Input
                            register={{ ...register('description') }}
                            type="text"
                            placeholder="Description"
                            error={errors.name}
                        />
                        {/* <Input
                            register={{ ...register('prerequisite') }}
                            type="text"
                            placeholder="Prerequis"
                            error={errors.name}
                        /> */}
                        {/* <Input
                            register={{ ...register('outlets') }}
                            type="text"
                            placeholder="Debouches"
                            error={errors.name}
                        /> */}
                        {/* <Input
                            register={{ ...register('advantages') }}
                            type="text"
                            placeholder="Avantages"
                            error={errors.name}
                        /> */}
                    </div>
                    <div className='mt-2'>
                        Prérequis
                        <Editor
                            // defaultEditorState={editorState}
                            editorState={prerequisiteState}
                            onEditorStateChange={setPrerequisiteState}
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class"
                            toolbarClassName="toolbar-class"
                        />
                    </div>
                    <div className='mt-2'>
                        Avantages
                        <Editor
                            // defaultEditorState={editorState}
                            editorState={advantagesState}
                            onEditorStateChange={setAdvantagesState}
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class"
                            toolbarClassName="toolbar-class"
                        />
                    </div>
                    <div className='mt-2'>
                        Débouchés
                        <Editor
                            // defaultEditorState={editorState}
                            editorState={outletsState}
                            onEditorStateChange={setOutletsState}
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class"
                            toolbarClassName="toolbar-class"
                        />
                    </div>

                    {/* <div
                        className="preview"
                        dangerouslySetInnerHTML={createMarkup(convertedOutlets)}
                    >

                    </div> */}
                    <button className='btn btn-secondary mb-5' type='submit'>Ajouter</button>
                    {/* <button>Submit</button> */}
                </form>
            </div>
        </div>
    )
}

export default AjouterDiplome
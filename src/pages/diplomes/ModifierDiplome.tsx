import { MoreSharp } from '@mui/icons-material';
import { convertFromRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import ResourceDataMap from 'src/components/ResourceDataMap';
import Input from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAddBranchesMutation, useEditBrancheMutation } from 'src/redux/services/extendedBrancheApi';
import { useGetFacultiesQuery } from 'src/redux/services/extendedFacultyApi';
import { useCurrentUserId } from 'src/hooks/useCurrentUserId';
import { useToken } from 'src/hooks/useToken';
import OptionListItem from 'src/components/OptionListItem';
import { useState, useEffect } from 'react';
import { convertToHTML, convertFromHTML } from 'draft-convert';
import { useDispatch, useSelector } from 'react-redux';
import { iStore } from '../../redux/store';
import { getWysiwygDefaultValue } from 'src/utils/wysiwygDefaultValue';
import { setCurrentDiplome } from 'src/redux/slices/diplome.slice';



const ModifierDiplome = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // !current diplome
    const { currentDiplome } = useSelector((state: iStore) => state.diplomes)
    // console.log({ currentDiplome });

    const [editBranche] = useEditBrancheMutation()

    const defaultValue = {
        entityMap: {},
        blocks: [
            {
                key: '1',
                text: currentDiplome.outlets,
                type: 'unstyled',
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
            },
        ],
    };

    const defaultEditorState = EditorState.createWithContent(convertFromRaw(defaultValue));
    const [editorState, setEditorState] = useState(getWysiwygDefaultValue(currentDiplome.outlets));

    const userId: { userId: number } = useCurrentUserId()
    const schoolId = userId.userId
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            name: currentDiplome.name,
            description: currentDiplome.description,
            faculty_id: currentDiplome.faculty_id
        },
        values: {
            name: currentDiplome.name,
            description: currentDiplome.description,
            faculty_id: currentDiplome.faculty_id
        }
    });
    const [addBranche] = useAddBranchesMutation()
    const { token } = useToken()
    const { data: faculties = {}, isError, isLoading, isFetching, error } = useGetFacultiesQuery({ token: token, schoolId: schoolId })

    const [convertedOutlets, setConvertedOutlets] = useState<any>(null)
    const [convertedAdvantages, setConvertedAdvantages] = useState<any>(null)
    const [convertedPrerequisite, setConvertedPrerequisite] = useState<any>(null)

    const [outletsState, setOutletsState] = useState(() => EditorState.createWithContent(convertFromHTML(currentDiplome.outlets)));
    const [advantagesState, setAdvantagesState] = useState(() => EditorState.createWithContent(convertFromHTML(currentDiplome.advantages)))
    const [prerequisiteState, setPrerequisiteState] = useState(EditorState.createWithContent(convertFromHTML(currentDiplome.prerequisite)))

    // console.log({ currentDiplome: EditorState.createWithContent(convertFromHTML("<p>uueggd</p>")) });


    const editDiplome = (data) => {
        // !outlets, advantages,prerequisite
        data.outlets = convertedOutlets
        data.advantages = convertedAdvantages
        data.prerequisite = convertedPrerequisite
        // console.log({ data });

        editBranche({ id: currentDiplome.id, data, token }).then((res: { status: number, data: { faculty: { id: number } } }) => {
            navigate(-2)
            // if (Number(res.status) < 400) {
            //     dispatch(setCurrentDiplome({ ...res.data, faculty_id: res.data?.faculty.id }))
            //     navigate(-1)
            //     return
            // }
        })
    }

    useEffect(() => {
        // !permet de convertir le contenu du wysiwyg en HTML
        // !outlets
        let outletes: string = convertToHTML((outletsState.getCurrentContent()));
        setConvertedOutlets(outletes);
        // console.log({ outletes });

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

    }, [outletsState, advantagesState, prerequisiteState]);

    return (
        <div>
            <header className='flex align-items-center gap-1'>
                <h2>Mes diplomes</h2><MoreSharp />
                <span>Modifier un diplome</span>
            </header>
            <div>
                <form onSubmit={handleSubmit(editDiplome)} action="" className='gap-1 flex flex-column mb-3'>
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
                    </div>
                    <div className="form-row flex gap-1">
                        <Input
                            register={{ ...register('description') }}
                            type="text"
                            placeholder="Description"
                            error={errors.name}
                        />
                    </div>
                    <div className='mt-2'>
                        Prérequis
                        <Editor
                            // defaultEditorState={currentDiplome.outlets}
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
                            defaultEditorState={currentDiplome.outlets}
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
                    <button className='btn btn-secondary mb-5' type='submit'>Modifier</button>
                    {/* <button>Submit</button> */}
                </form>
            </div>
        </div>
    )
}

export default ModifierDiplome
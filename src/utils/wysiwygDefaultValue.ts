import { convertFromRaw, EditorState } from 'draft-js';

export const getWysiwygDefaultValue = (value: string) => {
    const defaultValue = {
        entityMap: {},
        blocks: [
            {
                key: '1',
                text: '<h1>value ets</h1>',
                type: 'unstyled',
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
            },
        ],
    };

    const defaultEditorState = EditorState.createWithContent(convertFromRaw(defaultValue))

    return defaultEditorState
}
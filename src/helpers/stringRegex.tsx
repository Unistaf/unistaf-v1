import { stringRegex } from '../utils/regex';
export const stringRegexFunc = (word: string) => {
    return stringRegex.test(word)
}
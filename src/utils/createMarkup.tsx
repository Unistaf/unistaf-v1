import DOMPurify from 'dompurify';

export function createMarkup(html: string): any {
    return {
        __html: DOMPurify.sanitize(html)
    }
}
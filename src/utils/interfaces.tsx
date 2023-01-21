export interface ICurrenUser{
  access_token: string,
  expires_in: number,
  token_type: string,
  user: any
}

export interface iFile {
  lastModified: number,
  lastModifiedDate: string,
  name: string,
  size: number,
  type: string,
  webkitRelativePath: string
}
export const initialFile = {
  lastModified: null,
  lastModifiedDate: '',
  name: '',
  size: null,
  type: '',
  webkitRelativePath: ''
}
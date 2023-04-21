import { useSelector } from 'react-redux';
import { ICurrenUser } from '../utils/interfaces'
import { iStore } from '../redux/store';

export const useToken = () => {
    const currentUser: ICurrenUser | any = useSelector((state: iStore) => state?.user?.currentUser);
    const token = currentUser.access_token
    return { token }
}
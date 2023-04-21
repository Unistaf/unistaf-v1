import { ICurrenUser } from '../utils/interfaces';
import { iStore } from 'src/redux/store';
import { useSelector } from 'react-redux';

export const useSchool = () => {
    const currentUser: ICurrenUser | any = useSelector((state: iStore) => state?.user?.currentUser);
    const school: { id: number } = currentUser.user.school
    return { school }
}
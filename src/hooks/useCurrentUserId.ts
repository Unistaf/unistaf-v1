import { useSelector } from 'react-redux';
import { ICurrenUser } from '../utils/interfaces'
import { iStore } from '../redux/store';

export const useCurrentUserId = () => {
    const currentUser: ICurrenUser | any = useSelector((state: iStore) => state?.user?.currentUser);
    // console.log({ currentUser: currentUser });

    const userId: number = currentUser.user.id
    return { userId }
}
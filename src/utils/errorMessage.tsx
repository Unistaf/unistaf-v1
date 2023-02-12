import { toast } from 'react-hot-toast';

export const errorMessage = (message) => {
  toast.error(message);
}
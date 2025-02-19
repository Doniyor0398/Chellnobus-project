import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../Redux/slices/store';

export const useAppDispatch: () => AppDispatch = useDispatch;

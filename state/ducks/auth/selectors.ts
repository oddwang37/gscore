import { RootState } from 'state/store';

export const username = (state: RootState) => state.auth.username;
export const isLoading = (state: RootState) => state.auth.isLoading;

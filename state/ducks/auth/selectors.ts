import { RootState } from 'state/store';

export const username = (state: RootState) => state.auth.userInfo.username;
export const email = (state: RootState) => state.auth.userInfo.email;
export const isLoading = (state: RootState) => state.auth.isLoading;

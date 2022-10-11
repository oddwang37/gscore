import { RootState } from 'state/store';

export const selectUsername = (state: RootState) => state.auth.username;

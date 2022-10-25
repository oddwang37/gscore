import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FieldValues } from 'react-hook-form';

import { useAppDispatch } from 'state/store';
import { authThunks } from 'state/ducks/auth';
import { authSelectors } from 'state/ducks/auth';

interface FormValues extends FieldValues {
  username: string;
  email: string;
}

export const useEditUser = (
  reset: () => void,
  setError: (field: string, error: object) => void,
  isDirty: boolean,
) => {
  const isLoading = useSelector(authSelectors.isLoading);
  const currentEmail = useSelector(authSelectors.email);
  const currentUsername = useSelector(authSelectors.username);
  const dispatch = useAppDispatch();
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState<boolean>(false);

  const onSubmit = async (data: FormValues) => {
    const username = data.username || currentUsername;
    const email = data.email || currentEmail;
    try {
      await dispatch(authThunks.updatePersonalData({ username, email })).unwrap();
      reset();
      setIsSuccessfullySubmitted(true);
    } catch ({ statusCode }) {
      switch (statusCode) {
        case 409:
          setError('email', { type: 'server', message: 'User with this email already exists' });
      }
      setIsSuccessfullySubmitted(false);
    }
  };

  useEffect(() => {
    if (isDirty && isSuccessfullySubmitted) {
      setIsSuccessfullySubmitted(false);
    }
  }, [isDirty, isSuccessfullySubmitted]);

  return { onSubmit, isLoading, isSuccessfullySubmitted };
};

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FieldValues } from 'react-hook-form';

import { useAppDispatch } from 'state/store';
import { authThunks } from 'state/ducks/auth';
import { authSelectors } from 'state/ducks/auth';

interface FormValues extends FieldValues {
  currentPassword: string;
  newPassword: string;
}

export const useChangePassword = (
  reset: () => void,
  setError: (field: string, error: object) => void,
  isDirty: boolean,
) => {
  const dispatch = useAppDispatch();
  const userEmail = useSelector(authSelectors.email);
  const isLoading = useSelector(authSelectors.isLoading);

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState<boolean>(false);

  const onSubmit = async (data: FormValues) => {
    const { currentPassword, newPassword } = data;
    try {
      await dispatch(
        authThunks.loginUser({ email: userEmail, password: currentPassword }),
      ).unwrap();
      await dispatch(authThunks.updatePassword({ currentPassword, newPassword })).unwrap();
      reset();
      setIsSuccessfullySubmitted(true);
    } catch ({ statusCode }) {
      switch (statusCode) {
        case 400: {
          setError('currentPassword', { type: 'server', message: 'Incorrect password' });
          break;
        }
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

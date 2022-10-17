import { getMe } from 'state/ducks/auth/thunks';
import { useAppDispatch } from 'state/store';
import { useRouter } from 'next/router';
import React, { useState, useEffect, FunctionComponent } from 'react';

const withAuth = <T extends object>(Component: React.ComponentType<T>) => {
  const AuthenticatedComponent = (props: T) => {
    const dispatch = useAppDispatch();
    const [data, setData] = useState<object>();
    const router = useRouter();
    useEffect(() => {
      const getUser = async () => {
        const userData = await dispatch(getMe());
        if (!userData) {
          console.log('yeah');
          router.push('/create-account');
        } else {
          setData(userData);
        }
      };
      getUser();
    }, []);
    return Component;
  };

  return AuthenticatedComponent;
};

export default withAuth;

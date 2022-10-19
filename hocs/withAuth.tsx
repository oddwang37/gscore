import { useEffect } from 'react';
import cookies, { CookiesKeys } from 'services/cookies';
import { useRouter } from 'next/router';
import { Loader } from '../components';
import type { FC } from 'react';

export const withAuth = <P extends object>(Component: FC<P>) => {
  const Wrapper: FC<P> = (props): JSX.Element | null => {
    const token = cookies.getItem(CookiesKeys.token);
    const router = useRouter();

    useEffect(() => {
      if (!token) router.push('/create-account');
    }, [router, token]);

    return token ? <Component {...props} /> : <Loader />;
  };

  return Wrapper;
};
 

export {};

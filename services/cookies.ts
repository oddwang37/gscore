import { getCookie, setCookie } from 'cookies-next';

export enum CookiesKeys {
  token = 'token',
}

class Cookies {
  setItem<T>(key: CookiesKeys, data: T): void {
    setCookie(key, data);
  }
  getItem(key: CookiesKeys) {
    return getCookie(key);
  }
}

const cookies = new Cookies();

Object.freeze(cookies);

export default cookies;

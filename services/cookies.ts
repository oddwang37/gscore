import { deleteCookie, getCookie, setCookie } from 'cookies-next';

export enum CookiesKeys {
  token = 'token',
}

class Cookies {
  setItem<T>(key: CookiesKeys, data: T, options: any = {}): void {
    setCookie(key, data, options);
  }
  getItem(key: CookiesKeys, options: any = {}) {
    return getCookie(key, options);
  }
  deleteItem(key: CookiesKeys, options: any = {}): void {
    deleteCookie(key, options);
  }
}

const cookies = new Cookies();

Object.freeze(cookies);

export default cookies;

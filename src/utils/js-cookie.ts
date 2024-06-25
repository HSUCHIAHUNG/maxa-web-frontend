import Cookies from "js-cookie";
// 型別
import { keyType } from "../service/type";

const TokenKey = "MAXA";

export function GET_COOKIES(key: keyType = TokenKey) {
  return Cookies.get(key);
}

export function SET_COOKIES(key:keyType = TokenKey, token: string) {
  return Cookies.set(key, token);
}

export function REMOVE_COOKIES(key:keyType = TokenKey) {
  return Cookies.remove(key);
}

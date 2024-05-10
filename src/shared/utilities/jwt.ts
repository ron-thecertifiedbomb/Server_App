import { jwtDecode } from 'jwt-decode';

export const JWT = {
  decode: (token: string) => {
    return jwtDecode(token);
  },
};

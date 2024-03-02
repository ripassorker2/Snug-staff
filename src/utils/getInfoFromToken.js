import {jwtDecode} from "jwt-decode";

export const getUserInfoFromToken = (token) => {
    if (token) {
        return jwtDecode(token);
    }
};

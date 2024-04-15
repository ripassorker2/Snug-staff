export const getToken = () => {
    return localStorage.getItem("snugstuff_access_token") || "";
};

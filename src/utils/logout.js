export const logOut = (setToken, setUser) => {
    setToken("");
    setUser(null);
    localStorage.removeItem("snugstuff_access_token");
    localStorage.removeItem("snugstuff_refresh_token");
};

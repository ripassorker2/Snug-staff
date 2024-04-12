export const afterLogin = (setToken, data, router, toast) => {
    localStorage.setItem("snugstuff_access_token", data.access_token);
    localStorage.setItem("snugstuff_refresh_token", data.refresh_token);
    setToken(data.access_token);
    router.push("/");
    toast.success("Login successfully.");
};

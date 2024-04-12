"use client";
import {config} from "@/envConfig/envConfig";
import React, {createContext, useContext, useEffect, useState} from "react";

export const UserContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [refetch, setRefetch] = useState(false);
    const [token, setToken] = useState("");

    useEffect(() => {
        setLoading(true);
        setToken(localStorage.getItem("snugstuff_access_token") || "");
        if (token) {
            fetch(`${config.base_url}/user-profile`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.detail) {
                        localStorage.removeItem("snugstuff_access_token");
                        localStorage.removeItem("snugstuff_refresh_token");
                        setUser(null);
                    } else {
                        setUser(data[0]);
                    }
                    setLoading(false);
                });
        } else {
            setUser(null);
            setLoading(false);
        }
    }, [token, refetch]);

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        token,
        setToken,
        refetch,
        setRefetch,
    };
    return (
        <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);

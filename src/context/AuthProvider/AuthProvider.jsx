"use client";
import React, {createContext, useContext, useEffect, useState} from "react";

export const UserContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState("");

    useEffect(() => {
        setToken(localStorage.getItem("snugstuff_access_token") || "");
        if (token) {
            fetch(`http://127.0.0.1:8000/userProfile`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => setUser(data[0]));
        } else {
            setUser(null);
        }
    }, [token]);

    const authInfo = {user, setUser, loading, setLoading, token, setToken};
    return (
        <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);

"use client";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

const IsLogged = ({children}) => {
    const {user} = useUserContext();
    const router = useRouter();
    useEffect(() => {
        if (!user) router.push("/authtentication/login");
    }, [user, router]);
    if (user) return children;
};

export default IsLogged;

"use client";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";
import Link from "next/link";

const UserProtected = ({children}) => {
    const {user} = useUserContext();
    if (user?.role == "user") return children;
    else
        return (
            <div className="text-center mt-20 h-[60vh] text-lg">
                <h2 className=" ">You are not authorized.</h2>
                <p>
                    This page is for user. Please{" "}
                    <Link
                        href={"/authtentication/login"}
                        className="hover:underline">
                        <span> Sign In</span>
                    </Link>{" "}
                    as a user.
                </p>
            </div>
        );
};

export default UserProtected;

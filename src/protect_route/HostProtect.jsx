"use client";
import {useUserContext} from "@/context/AuthProvider/AuthProvider";
import Link from "next/link";

const HostProtected = ({children}) => {
    const {user} = useUserContext();
    if (user?.role == "host") return <>{children}</>;
    else
        return (
            <div className="text-center mt-32 h-[60vh] text-lg">
                <h2 className=" ">You are not authorized.</h2>
                <p>
                    This page is for host. Please{" "}
                    <Link
                        href={"/authtentication/login"}
                        className="hover:underline">
                        <span> Sign In</span>
                    </Link>{" "}
                    as a host.
                </p>
            </div>
        );
};

export default HostProtected;

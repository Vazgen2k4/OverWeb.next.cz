"use client"
import LoadingComponent from "@/components/LoadingComponent";
import { useAuth } from "@/firebase/AuthContext";
import { redirect } from "next/navigation";
import { useEffect } from "react";


const AuthButton = () => {
    const { googleSignIn } = useAuth();
    return (
        <button onClick={googleSignIn} className="btn">
            <span>
                Sing up with Google
            </span>
        </button>
    )

}
const LogOutButton = () => {
    const { logOut } = useAuth();
    return (
        <button onClick={logOut} className="btn">
            <span>
                Log out
            </span>
        </button>
    )

}

const AdminPage = () => {
    const { user, loading, role } = useAuth();


    useEffect(() => {

        if (!loading && role && role !== 'admin') {
            redirect('/');
        }

    }, [user, loading, role]);

    if (loading) {
    }
    
    return <LoadingComponent />;
    return (
        <>
            <div className="admin">
                <div>
                    {user == null && <AuthButton />}
                    {user && <LogOutButton />}
                </div>
            </div>
        </>
    );
}


export default AdminPage
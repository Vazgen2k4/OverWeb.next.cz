"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, User } from 'firebase/auth';
import { auth } from './firebase_config';
import { getUserById, haveUser, setAppUser } from './Firestore';
import { redirect } from 'next/navigation';


interface AuthContextType {
    user: User | null;
    googleSignIn: () => void;
    logOut: () => void;
    loading: boolean;
    role: string | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState<string | null>(null);


    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    const logOut = () => {
        signOut(auth);
        setUser(null);
        setRole(null);
        redirect('/');
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);

            if (!currentUser) {
                setLoading(false);
                return;
            }

            const isExistingUser = await haveUser(currentUser.uid);

            if (!isExistingUser) {
                await setAppUser({ uid: currentUser.uid });
                setLoading(false);
                redirect('/');
                return;
            }

            const appUser = await getUserById(currentUser.uid);
            setRole(appUser?.role || null);

            if (appUser?.role !== 'admin') {
                redirect('/');
            }

            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, googleSignIn, logOut, loading, role }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext;

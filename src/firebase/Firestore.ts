import { db } from './firebase_config';
import { getDocs, collection, doc, getDoc, setDoc } from "firebase/firestore";

interface AppUser {
    uid: string;
    role?: string;
}

export type { AppUser };

export const getUsers = async () => {
    try {

        const usersCollection = collection(db, "users");
        const querySnapshot = await getDocs(usersCollection);
        const users = querySnapshot.docs.map(doc => ({
            uid: doc.id,
            ...doc.data(),
        } as AppUser));

        return users;
    } catch (error) {
        console.error("Ошибка при получении пользователей:", error);
        return [];
    }
};

export const getUserById = async (uid: string) => {
    try {

        const userRef = doc(db, "users", uid);
        const userSnapshot = await getDoc(userRef);

        if (!userSnapshot.exists()) {
            console.error("Пользователь с uid ${uid} не найден.");
            return null;
        }

        const user = {
            uid: userSnapshot.id,
            ...userSnapshot.data(),
        } as AppUser;

        return user;
    } catch (error) {
        console.error("Ошибка при получении пользователей:", error);
        return null;
    }
};


export const haveUser = async (uid: string) => {
    if (await getUserById(uid)) {
        return true;
    }

    return false;
}

export const setAppUser = async (user: AppUser) => {
    try {
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, {
            role: user.role ?? 'user',
        });
    } catch (error) {
        console.error("Ошибка при получении пользователей:", error);

    }
}
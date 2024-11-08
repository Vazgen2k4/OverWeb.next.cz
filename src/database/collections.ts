import { getFirestore, collection } from "firebase/firestore";

const db = getFirestore();

export const collections = {
    paragraphs: collection(db, "paragraphs"),
    projects: collection(db, "projects"),
    skills: collection(db, "skills"),
    tags: collection(db, "tags"),
    works: collection(db, "works"),
};
'use client'
import { motion } from "framer-motion";
import { collection, addDoc, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "@/firebase_config";
import PostList from "@/components/PostList";
import { PostData } from "@/components/Post";

async function addFirebase(name: string, lastName: string): Promise<boolean> {
  try {
    const docRef = await addDoc(collection(db, "post"), {
      name: name,
      lastName: lastName,
    });

    console.log(`Была добавленна запись с посты с id=${docRef.id}`);
    return true;
  } catch (error) {
    console.log(`ошибка`);
    return false;
  }
}

async function getFirebase(): Promise<PostData[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "post"));

    return querySnapshot.docs.map(post => {
      const data = post.data();
      return {
        id: post.id,
        name: data.name,
        lastName: data.lastName,
      } as PostData;
    }
    );
  } catch (error) {
    console.log(`ошибка`);
    return [];
  }
}


export default function Home() {
  const [name, setName] = useState("");
  const [lasteName, setLasteName] = useState("");

  const [posts, setPosts] = useState<PostData[]>([]);

  const handleSubmite = async (e: React.FormEvent) => {
    e.preventDefault();

    const added = await addFirebase(name, lasteName);
    if (added) {
      setName("");
      setLasteName("");

      const updatedPosts = await getFirebase();
      setPosts(updatedPosts);
    }
  };


  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "post"), (snapshot) => {
      const updatedPosts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as PostData));

      setPosts(updatedPosts);
    });

    // Отписка от слушателя при размонтировании компонента
    return () => unsubscribe();
  }, []);


  return (

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Плавная анимация появления!</h1>

      <form onSubmit={handleSubmite}>
        <input
          type="text" name="name" id="name" value={name}
          onChange={(e) => setName(e.target.value.trim())} />
        <br />
        <input
          type="text" name="lasteName" id="lasteName" value={lasteName}
          onChange={(e) => setLasteName(e.target.value.trim())} />
        <br />
        <button type="submit">
          ADD DATA
        </button>
      </form>

      <PostList posts={posts}></PostList>

    </motion.div>
  );
}

import { map } from "framer-motion/client";
import style from "./PostList.module.css";
import Post, { PostData } from "./Post";
import { List } from "postcss/lib/list";



export default function PostList({ posts }: { posts: PostData[] }) {
    return (
        <ul className={style.list}>
            {
                posts.map((post) => (
                    <Post  key={post.id} {...post}></Post>
                ))
            }
        </ul >
    );
}
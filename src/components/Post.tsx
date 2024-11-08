import style from "./PostList.module.css";

export interface PostData {
    name: string,
    lastName: string,
    id: string,
}

export default function PostList({ name, lastName }: PostData) {

    return (
        <div className={style.post}>
            <span>{name}</span>
            <span>{lastName}</span>
        </div>
    );
}
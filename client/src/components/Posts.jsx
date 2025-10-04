import { useContext } from 'react'
import { ShopContext } from "./App";
import BlogPost from './BlogPost';

export default function Posts() {
    const { posts } = useContext(ShopContext);

    if (!posts || posts.length === 0) {
        return (
            <div className="postsContainer">
                <p>No posts available.</p>
            </div>
        );
    } 

    return (
        <div className="postsContainer">
            {posts.map((post) => (
                <BlogPost key={post.id} post={post} />
            ))}
        </div>
    );
}
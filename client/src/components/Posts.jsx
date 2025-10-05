import { useContext } from 'react'
import ShopContext from './ShopContext'; 
import BlogPost from './BlogPost';
import "../styles/Posts.css";

export default function Posts() {
    const { posts } = useContext(ShopContext);

    if (!posts || posts.length === 0) {
        return (
            <div className="posts-container mx-5">
                <p>No posts available.</p>
            </div>
        );
    } 

    return (
        <div className="posts-container mx-5">
            {posts.map((post) => (
                <BlogPost key={post.id} post={post} />
            ))}
        </div>
    );
}
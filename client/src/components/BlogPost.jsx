
export default function BlogPost({ post }) {
    return (
        <div>
            <h2>{post.title}</h2>
            <p><strong>Published:</strong> {new Date(post.published).toLocaleString()}</p>
            <p><strong>Author:</strong> {post.author.displayName}</p>
            <p>{post.content}</p>
        </div>
    );
}
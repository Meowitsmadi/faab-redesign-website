
export default function BlogPost({ post }) {
    return (
        <div className="bg-light p-3 mb-3 rounded">
            <h2>{post.title}</h2>
            {/* <p><strong>Published:</strong> {new Date(post.published).toLocaleString()}</p>
            <p><strong>Author:</strong> {post.author.displayName}</p> */}
            <p>{post.content}</p>
        </div>
    );
}
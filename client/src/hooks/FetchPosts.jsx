import { useState, useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;;

// Hook to fetch and return products from our django API.
export const usePosts = () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let ignore = false;
        fetch(`${API_BASE_URL}/blog/posts`, { mode: "cors" })
          .then((response) => {
            if (response.status >= 400) {
                throw new Error("server error");
            }
            return response.json();
          })
          .then((response) => {
            if (!ignore) {
                setPosts(response);
            }
        })
          .catch((error) => {
            console.error("Fetch error:", error);
          })
          .finally(() => setLoading(false));
          return () => {
            ignore = true; // Ignore stale responses.
          };
    }, []);
    
    return { posts, loading };
};
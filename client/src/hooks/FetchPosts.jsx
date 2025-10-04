import { useState, useEffect } from "react";

// Hook to fetch and return products from our django API.
export const useProducts = () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let ignore = false;
        // TODO: placeholder fetch link 
        fetch('/api/', { mode: "cors" })
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
import { useEffect, useState } from 'react';
import Posts from '../Posts';
import CreatePostForm from '../CreatePostForm.jsx';

const Home = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) setIsAdmin(true);
  }, []);

  return (
    <div>
      {isAdmin && <CreatePostForm />}
      {/* <CreatePostForm /> */}
      <Posts />
    </div>
  )
}

export default Home
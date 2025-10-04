import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="errorPage">
      {/* <h1>Oops!</h1> */}
      <p>An unexpected error occurred:</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        Return Home
      </Link>
    </div>
  );
};

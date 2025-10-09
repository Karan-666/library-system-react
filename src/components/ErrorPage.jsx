import React from "react";
import { useRouteError } from "react-router-dom";
import {Link} from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Oops! Page not found</h1>
      <p>The page you are looking for does not exist</p>
      <p>
        {/* We use 'or' as some error might not have status text */}
        <i> Error: {error.status + ' ' + (error.statusText || error.message)}</i>
      </p>
      <Link to="/"> Go back to Home Page</Link>
    </div>
  );
}

export default ErrorPage;

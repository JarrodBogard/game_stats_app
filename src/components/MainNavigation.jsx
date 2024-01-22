import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Logo</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;

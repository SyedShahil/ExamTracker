import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "rgb(98, 23, 128)" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="/logo.jpg"
              alt="Logo"
              width="40"
              height="30"
              className="d-inline-block align-text-top"
            />
          </a>
          <ul className="nav nav-tabs">
            <li className="nav-item me-4">
              <a className="nav-link" aria-current="page" href="#">
                Latest Notifications
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">
                Mock Tests
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="#">
                Previous year Papers
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" aria-current="page" href="#">
                Resources
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" aria-current="page" href="#">
                Apply here
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" aria-current="page" href="#">
                Results
              </a>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link" to="/signin">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Home;

import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link href="/">
              <li className="nav-item">
                <a className="nav-link">Home</a>
              </li>
            </Link>
            <Link href="/1">
              <li className="nav-item">
                <a className="nav-link">1</a>
              </li>
            </Link>
            <Link href="/2">
              <li className="nav-item">
                <a className="nav-link">2</a>
              </li>
            </Link>
            <Link href="/3">
              <li className="nav-item">
                <a className="nav-link">3</a>
              </li>
            </Link>
            <Link href="/4">
              <li className="nav-item">
                <a className="nav-link">4</a>
              </li>
            </Link>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

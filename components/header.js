import Link from "next/link";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <Link href="/">
              <li class="nav-item">
                <a class="nav-link">Home</a>
              </li>
            </Link>
            <Link href="/1">
              <li class="nav-item">
                <a class="nav-link">1</a>
              </li>
            </Link>
            <Link href="/2">
              <li class="nav-item">
                <a class="nav-link">2</a>
              </li>
            </Link>
            <Link href="/3">
              <li class="nav-item">
                <a class="nav-link">3</a>
              </li>
            </Link>
            <Link href="/4">
              <li class="nav-item">
                <a class="nav-link">4</a>
              </li>
            </Link>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

import "./NavBar.css";
import {} from "react-router-dom";
function NavBar() {
  return (
    <>
      <main className="nav">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand">Home</a>
            <a class="navbar-brand">Bot Army</a>
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
        </nav>
      </main>
    </>
  );
}
export default NavBar;

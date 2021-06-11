import { useHistory } from "react-router-dom";
import logoIcon from "./chicken.png"; // with import
import userIcon from "./user.png"; // with import
import searchIcon from "./loupe.png"; // with import

export default function Navbar({ setSearchQuery, userInfoCurrent }) {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.searchQueryInput.value);
    history.push("/search");
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(userInfoCurrent);
    history.push(`/user/${userInfoCurrent._id}`);
  };

  return (
    <>
      {/* logoIcon on the left */}

      {/*Search bar -> filter through the tweets in state "tweets" and display component "SearchResults"  */}

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid d-flex ">
          <div>
            <a href="#">
              <img src={logoIcon} className="logo mx-2" />
            </a>
          </div>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent "
          >
            <form
              class="d-flex bg-white rounded w-100   mx-2"
              onSubmit={handleSubmit}
            >
              <input
                class="form-control border-0 "
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="searchQueryInput"
              />
              <button class="btn" type="submit">
                <img src={searchIcon} className="searchIcon ms-1" />
              </button>
            </form>
            <a onClick={handleClick}>
              <img src={userIcon} className="logo mx-2" />
            </a>
          </div>
        </div>
      </nav>

      {/* User icon -> display userInfo on click */}
      {/* https://getbootstrap.com/docs/5.0/components/navbar/ */}
    </>
  );
}

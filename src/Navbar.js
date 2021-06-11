import {useHistory} from "react-router-dom";

export default function Navbar({setSearchQuery}) {
  const history=useHistory();

    const handleSubmit = (e) => {
      e.preventDefault();
       setSearchQuery(e.target.searchQueryInput.value)
        history.push("/search")
    }
  
  return (
    <>
      {/* Logo on the left */}


      {/*Search bar -> filter through the tweets in state "tweets" and display component "SearchResults"  */}
        <form onSubmit={handleSubmit}>
          <label>
            <span className="visually-hidden">Search tweets</span>
          </label>
          <input 
            type="text"
            id="search"
            placeholder="Search tweets"
            name="searchQueryInput"
            />
          <button type="submit">Search</button>
        </form>
      

      {/* User icon -> display userInfo on click */}
      {/* https://getbootstrap.com/docs/5.0/components/navbar/ */}
    </>
  );
}

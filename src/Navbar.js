export default function Navbar() {
  return (
    <>
      {/* Logo on the left */}


      {/*Search bar -> filter through the tweets in state "tweets" and display component "SearchResults"  */}
      const SearchBar = () => (
        <form>
          <label>
            <span className="visually-hidden">Search tweets</span>
          </label>
          <input 
            type="text"
            id="search"
            placeholder="Search tweets"
            name=""
            />
          <button type="submit">Search</button>
        </form>
      )

      {/* User icon -> display userInfo on click */}
      {/* https://getbootstrap.com/docs/5.0/components/navbar/ */}
    </>
  );
}

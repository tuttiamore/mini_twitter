import {useHistory} from "react-router-dom";

export default function Navbar({setSearchQuery,userInfoCurrent}) {
  const history=useHistory();

    const handleSubmit = (e) => {
      e.preventDefault();
       setSearchQuery(e.target.searchQueryInput.value)
        history.push("/search")
    }

    const handleClick = (e) => {
      console.log(userInfoCurrent)
        //history.push(`/user/${userInfoCurrent._id}`)
    }
  
  return (
    <>
      {/* Logo on the left */}


      {/*Search bar -> filter through the tweets in state "tweets" and display component "SearchResults"  */}
       
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <a class="navbar-brand" href="#" >
      <img
      src="./chicken3.jpeg"
      />
      Mini Twitter</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>
      <form class="d-flex" onSubmit={handleSubmit}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="searchQueryInput" />
        <button class="btn btn-outline-success" type="submit">Search</button>
        <button class="btn btn-outline-success" onClick={handleClick}>Userinfo</button>
      </form>
    </div>
  </div>
</nav>
        
      

      {/* User icon -> display userInfo on click */}
      {/* https://getbootstrap.com/docs/5.0/components/navbar/ */}
    </>
  );
}

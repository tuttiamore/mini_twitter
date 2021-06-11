import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import TweetsOverview from "./TweetsOverview";
import TweetPreview from "./TweetPreview";
import TweetDetails from "./TweetDetails";
import SearchResults from "./SearchResults";
import UserInfo from "./UserInfo";
import mockTweetData from "./mockTweetData.js";
import mockUserInfo from "./mockUserInfo.js";

function App() {
  const [tweets, setTweets] = useState(mockTweetData);
  const [userInfo, setUserInfo] = useState(mockUserInfo);
  const [searchQuery, setSearchQuery] = useState();

  // useEffect(() => {
  //   // API fetch for Tweets will go here
  // },[]);

  return (
    <>
      <div className="container-fluid d-flex flex-column align-items-center">
        <header className="container w-50">
          <Navbar setSearchQuery={setSearchQuery}></Navbar>
        </header>

        <main className="container w-50">
          {/* inside each component, wrap html in <section> */}
          <Switch>
            <Route path="/tweet/:id?">
              <TweetDetails tweets={tweets}></TweetDetails>
            </Route>
            <Route path="/search">
              <SearchResults
                tweets={tweets}
                searchQuery={searchQuery}
              ></SearchResults>
            </Route>
            <Route path="/userinfo">
              <UserInfo tweets={tweets} userInfo={userInfo}></UserInfo>
            </Route>
            <Route exact path="/">
              <TweetsOverview tweets={tweets}></TweetsOverview>
            </Route>
          </Switch>
        </main>

        {/* <footer>
        <Footer></Footer>
      </footer> */}
      </div>
    </>
  );
}

export default App;

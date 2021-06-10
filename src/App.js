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

  useEffect(() => {
    // API fetch for Tweets will go here
  });

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        {/* inside each component, wrap html in <section> */}
        <Switch>
          <Route>
            <TweetsOverview tweets={tweets}></TweetsOverview>
          </Route>
          <Route>
            <TweetDetails tweets={tweets}></TweetDetails>
          </Route>
          <Route>
            <SearchResults tweets={tweets}></SearchResults>
          </Route>
          <Route>
            <UserInfo tweets={tweets} userInfo={userInfo}></UserInfo>
          </Route>
        </Switch>
      </main>

      {/* <footer>
        <Footer></Footer>
      </footer> */}
    </>
  );
}

export default App;

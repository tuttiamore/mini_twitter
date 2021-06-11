import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useCallback } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import TweetsOverview from "./TweetsOverview";
import TweetPreview from "./TweetPreview";
import TweetDetails from "./TweetDetails";
import SearchResults from "./SearchResults";
import UserInfo from "./UserInfo";
import mockTweetData from "./mockTweetData.js";
import mockUserInfo from "./mockUserInfo.js";

function App() {
  const [tweets, setTweets] = useState();
  const [userInfo, setUserInfo] = useState();
  const [searchQuery, setSearchQuery] = useState();
  const [userInfoCurrent, setUserInfoCurrent] = useState();
  const history = useHistory();

  // const fetchImages = useCallback(async () => {
  //   const res = await axios.get("https://api.imgflip.com/get_memes");
  //   return res.data.data.memes;
  // }, []);

  const fetchData = useCallback(async (query) => {
    const res = await axios.get(
      `https://aqueous-garden-38681.herokuapp.com/${query}`
    );
    return res;
  }, []);

  useEffect(() => {
    fetchData("messages").then((res) => {
      // const {
      //   tweetsFetch: {
      //     data: { allMessages },
      //   },
      // } = tweets;
      const tweets = res.data.allMessages;
      setTweets(tweets);
    });
    fetchData("users").then((res) => {
      const users = res.data.allUsers;
      setUserInfo(users);
      setUserInfoCurrent(users[0]);
    });
  }, [fetchData]);

  return (
    <>
      <div className="container-fluid d-flex flex-column align-items-center">
        <header className="container-main">
          <Navbar setSearchQuery={setSearchQuery}></Navbar>
        </header>

        {tweets && (
          <main className="container-main">
            {/* inside each component, wrap html in <section> */}
            <Switch>
              <Route path="/tweet/:id?">
                <TweetDetails
                  tweets={tweets}
                  fetchData={fetchData}
                ></TweetDetails>
              </Route>
              <Route path="/search">
                <SearchResults
                  tweets={tweets}
                  searchQuery={searchQuery}
                  fetchData={fetchData}
                ></SearchResults>
              </Route>
              <Route path="/user/:id?">
                <UserInfo userInfo={userInfo} fetchData={fetchData}></UserInfo>
              </Route>
              <Route exact path="/">
                <TweetsOverview
                  tweets={tweets}
                  fetchData={fetchData}
                ></TweetsOverview>
              </Route>
            </Switch>
          </main>
        )}
        {/* <footer>
        <Footer></Footer>
      </footer> */}
      </div>
    </>
  );
}

export default App;

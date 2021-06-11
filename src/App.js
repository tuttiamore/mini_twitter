import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useCallback } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import TweetsOverview from "./TweetsOverview";
import TweetDetails from "./TweetDetails";
import SearchResults from "./SearchResults";
import UserInfo from "./UserInfo";

function App() {
  const [tweets, setTweets] = useState();
  const [userInfo, setUserInfo] = useState();
  const [searchQuery, setSearchQuery] = useState();
  const [userInfoCurrent, setUserInfoCurrent] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async (query) => {
    setIsLoading(true);

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
      setIsLoading(false);
    });
    fetchData("users").then((res) => {
      const users = res.data.allUsers;
      setUserInfo(users);
      setUserInfoCurrent(users[0]);
      setIsLoading(false);
    });
  }, [fetchData]);

  return (
    <>
      <div className="container-fluid d-flex flex-column align-items-center">
        {/* {isLoading && <p>Content is loading...</p>} */}
        {tweets && (
          <>
            <header className="container-main">
              <Navbar
                setSearchQuery={setSearchQuery}
                userInfoCurrent={userInfoCurrent}
              ></Navbar>
            </header>

            <main className="container-main mt-3">
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
                    userInfo={userInfo}
                  ></SearchResults>
                </Route>
                <Route path="/user/:id?">
                  <UserInfo
                    userInfo={userInfo}
                    fetchData={fetchData}
                  ></UserInfo>
                </Route>
                <Route exact path="/">
                  <TweetsOverview
                    tweets={tweets}
                    fetchData={fetchData}
                  ></TweetsOverview>
                </Route>
              </Switch>
            </main>
          </>
        )}
      </div>
    </>
  );
}

export default App;

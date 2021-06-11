import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import TweetsOverview from './TweetsOverview';
import TweetPreview from './TweetPreview';
import TweetDetails from './TweetDetails';
import SearchResults from './SearchResults';
import UserInfo from './UserInfo';
import mockTweetData from './mockTweetData.js';
import mockUserInfo from './mockUserInfo.js';

function App() {
  const [tweets, setTweets] = useState(mockTweetData);
  const [userInfo, setUserInfo] = useState(mockUserInfo);
  const [searchQuery, setSearchQuery] = useState();

  useEffect(() => {
    axios
      .get('https://aqueous-garden-38681.herokuapp.com/')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        {/* inside each component, wrap html in <section> */}
        <Switch>
          <Route path="/tweet/:id?">
            <TweetDetails tweets={tweets}></TweetDetails>
          </Route>
          <Route path="/search">
            <SearchResults tweets={tweets}></SearchResults>
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
    </>
  );
}

export default App;

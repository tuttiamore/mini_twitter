import { useState, useEffect } from "react";
import TweetPreview from "./TweetPreview";

export default function UserInfoDetail({ userInfo, fetchData }) {
  const [userTweets, setUserTweets] = useState();
  useEffect(() => {
    fetchData(`users/${userInfo._id}/messages`).then((res) => {
      console.log(res.data.messagesByUser);
      setUserTweets(res.data.messagesByUser);
    });
    console.log("useeffect");
  }, [fetchData]);

  return (
    <>
      <h2 class="d-flex justify-content-center">User Information</h2>
      <div class="d-flex justify-content-center">
        <div class="card w-75">
          <div class="card-body">
            <h5 class="card-title">User name: {userInfo.name}</h5>
            <p class="card-text">Email: {userInfo.email}</p>
            <p class="card-text">Password: {userInfo.password}</p>
            <h6>Posts by user:</h6>
            {userTweets &&
              userTweets.map((tweet) => {
                return (
                  <TweetPreview
                    tweet={tweet}
                    fetchData={fetchData}
                  ></TweetPreview>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

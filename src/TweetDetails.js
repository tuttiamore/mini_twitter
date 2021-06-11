import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { useState, useEffect } from "react";

export default function TweetDetails({ tweets, fetchData }) {
  const [tweetUser, setTweetUser] = useState();

  const { id } = useParams();
  console.log(id);
  const tweet = tweets.filter((tweet) => tweet._id == id)[0];

  useEffect(() => {
    fetchData(`users/${tweet.id_user}`).then((res) =>
      setTweetUser(res.data.getUser)
    );
  });

  return (
    <>
      {tweetUser && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-subtitle mb-2 d-inline-block">
              User {tweetUser.name}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted d-inline-block ms-1">
              {/* {format(tweet.date, "yyyy-MM-dd HH:mm:ss")} */}
              {tweet.date}
            </h6>

            <p className="card-text">{tweet.text}</p>
          </div>
        </div>
      )}
      {/* // display detailled info on a single tweet */}
      {/* Franz' code for testing routing below ,can be deleted */}
      {/* <p>Here are details of tweet with id {tweet.id} </p> */}
      {/* Franz' code for testing routing above, can be deleted */}
    </>
  );
}

import { Link } from "react-router-dom";
import { parse, format } from "date-fns";
import { useState, useEffect } from "react";

export default function TweetPreview({ tweet, fetchData }) {
  const [tweetUser, setTweetUser] = useState();

  // Fetch
  useEffect(() => {
    fetchData(`users/${tweet.id_user}`).then((res) =>
      setTweetUser(res.data.getUser)
    );
  }, [fetchData]);

  function preview(string) {
    return string.split(" ").slice(0, 10).join(" ");
  }

  return (
    <>
      {/* Franz' code for testing routing below ,can be deleted */}
      {tweetUser && (
        <div className="card m-2">
          <div className="card-body">
            <h5 className="card-subtitle mb-2 d-inline-block">
              <Link to={`/user/${tweet.id_user}`}>{tweetUser.name}</Link>
            </h5>
            <h6 className="card-subtitle mb-2 text-muted d-inline-block ms-1">
              {/* {format(tweet.date, "yyyy-MM-dd HH:mm:ss")} */}
              {tweet.date}
            </h6>
            <Link
              to={`/tweet/${tweet._id}`}
              className="link-dark text-body text-decoration-none"
            >
              <p className="card-text">{preview(tweet.text)}...</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

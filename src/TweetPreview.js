import { Link } from "react-router-dom";
import { parse, format } from "date-fns";

export default function TweetPreview({ tweet }) {
  function preview(string) {
    return string.split(" ").slice(0, 10).join(" ");
  }

  return (
    <>
      {/* Franz' code for testing routing below ,can be deleted */}

      <div className="card m-2">
        <div className="card-body">
          <h5 className="card-subtitle mb-2 d-inline-block">
            <Link to={`/user/${tweet.id_user}`}>User {tweet._id}</Link>
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
      {/* <p>
        This is preview of tweet:
        <Link to={`/tweet/${tweet.id}`}>{tweet.id}</Link>
      </p> */}
      {/* Franz' code for testing routing above, can be deleted */}

      {/* Short summary of tweet: text, date... */}
      {/* bootstrap cards may be used : https://getbootstrap.com/docs/5.0/components/card/ */}
    </>
  );
}

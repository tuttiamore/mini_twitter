import { Link } from "react-router-dom";
import { format } from "date-fns";

export default function TweetPreview({ tweet }) {
  function preview(string) {
    return string.split(" ").slice(0, 10).join(" ");
  }

  return (
    <>
      {/* Franz' code for testing routing below ,can be deleted */}
      <Link
        to={`/tweet/${tweet.id}`}
        className="link-dark text-body text-decoration-none"
      >
        <div className="card m-2">
          <div className="card-body">
            <h5 className="card-subtitle mb-2 d-inline-block">
              User {tweet.id_user}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted d-inline-block ms-1">
              {format(tweet.date, "yyyy-MM-dd HH:mm:ss")}
            </h6>
            <p className="card-text">{preview(tweet.text)}...</p>
          </div>
        </div>
      </Link>
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

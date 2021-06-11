import { Link } from "react-router-dom";
export default function TweetPreview({ tweet }) {
  function preview(string) {
    return string.split(" ").slice(0, 10).join(" ");
  }

  console.log(tweet.date);

  return (
    <>
      {/* Franz' code for testing routing below ,can be deleted */}

      <div className="card m-2">
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">
            posted by {tweet.id_user} on
          </h6>
          <h5 className="card-title">Tweet id: {tweet.id}</h5>
          <p className="card-text">{preview(tweet.text)}...</p>
          To the Tweet:
          <Link to={`/tweet/${tweet.id}`}>{tweet.id}</Link>
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

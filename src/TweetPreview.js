import { Link } from "react-router-dom";
export default function TweetPreview({ tweet }) {
  // delete code below

  // delete code above

  return (
    <>
      {/* Franz' code for testing routing below ,can be deleted */}
      <p>
        This is preview of tweet:
        <Link to={`/tweet/${tweet.id}`}>{tweet.id}</Link>
      </p>
      {/* Franz' code for testing routing above, can be deleted */}

      {/* Short summary of tweet: text, date... */}
      {/* bootstrap cards may be used : https://getbootstrap.com/docs/5.0/components/card/ */}
    </>
  );
}

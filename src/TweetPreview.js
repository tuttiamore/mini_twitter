import { Link } from 'react-router-dom';
export default function TweetPreview({ tweet }) {
  function preview(string) {
    return string.split(' ').slice(0, 10).join(' ');
  }


  return (
    <>
      {/* Franz' code for testing routing below ,can be deleted */}

      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Tweet id: {tweet.id}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            User: {tweet.id_user}
          </h6>
          <p className="card-text">
            This is preview of tweet: {preview(tweet.text)}...
          </p>
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

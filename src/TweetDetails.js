import { useParams } from 'react-router-dom';

export default function TweetDetails({ tweets }) {
  const { id } = useParams();
  const tweet = tweets.filter((tweet) => tweet.id == id)[0];

  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Tweet id: {tweet.id}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            User: {tweet.id_user}
          </h6>
          <p className="card-text">{tweet.text}</p>
        </div>
      </div>

      {/* // display detailled info on a single tweet */}
      {/* Franz' code for testing routing below ,can be deleted */}
      <p>Here are details of tweet with id {tweet.id} </p>
      {/* Franz' code for testing routing above, can be deleted */}
    </>
  );
}

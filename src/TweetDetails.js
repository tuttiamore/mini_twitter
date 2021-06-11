import { useParams } from "react-router-dom";
import { format } from "date-fns";

export default function TweetDetails({ tweets }) {
  const { id } = useParams();
  const tweet = tweets.filter((tweet) => tweet.id == id)[0];

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-subtitle mb-2 d-inline-block">
            User {tweet.id_user}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted d-inline-block ms-1">
            {format(tweet.date, "yyyy-MM-dd HH:mm:ss")}
          </h6>

          <p className="card-text">{tweet.text}</p>
        </div>
      </div>

      {/* // display detailled info on a single tweet */}
      {/* Franz' code for testing routing below ,can be deleted */}
      {/* <p>Here are details of tweet with id {tweet.id} </p> */}
      {/* Franz' code for testing routing above, can be deleted */}
    </>
  );
}

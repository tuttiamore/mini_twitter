import { useParams } from "react-router-dom";

export default function TweetDetails({ tweets }) {
  const { id } = useParams();
  const tweet = tweets.filter((tweet) => tweet.id == id)[0];
  return (
    <>
      {/* // display detailled info on a single tweet */}
      {/* Franz' code for testing routing below ,can be deleted */}
      <p>Here are details of tweet with id {tweet.id} </p>
      {/* Franz' code for testing routing above, can be deleted */}
    </>
  );
}

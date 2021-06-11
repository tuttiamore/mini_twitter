import TweetPreview from "./TweetPreview";
import { Link, Switch, Route } from "react-router-dom";
import TweetDetails from "./TweetDetails";

export default function TweetsOverview({ tweets, fetchData }) {
  return (
    <section>
      {tweets.map((tweet) => {
        return (
          <TweetPreview tweet={tweet} fetchData={fetchData}></TweetPreview>
        );
      })}
      {/* map over all the tweets in the state -> for each display short TweetPreview */}
    </section>
  );
}

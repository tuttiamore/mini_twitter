import TweetPreview from "./TweetPreview";

export default function TweetsOverview({ tweets }) {
  return (
    <section>
      {tweets.map((tweet) => {
        return <TweetPreview tweet={tweet}></TweetPreview>;
      })}
      {/* map over all the tweets in the state -> for each display short TweetPreview */}
    </section>
  );
}

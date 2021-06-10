export default function SearchResults() {
  return (
    <>
      {/* filter tweets according to some search query and display only those tweets */}
      <div>
        <ul>
          {tweets.map((tweet) => (
            <li key={tweet.id}>{tweet.name}</li>
          ))}
          </ul>
      </div>
      
      const filterTweets = (tweets, query) => {
        if(!query) {
          return tweets;
      }
      
      return tweets.filter((tweet) => {
          const tweetName = tweet.name.toLowerCase();
          return tweetName.includes(query);
      });
    };
      {/*  */}
    </>
  );
}

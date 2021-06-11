import TweetPreview from "./TweetPreview";

export default function SearchResults({ tweets, searchQuery, fetchData }) {
  const filterTweets = tweets.filter((tweet) => {
    if (!searchQuery) {
      return false;
    }
    const tweetLowerCase = tweet.text.toLowerCase();
    const searchQueryLowerCase = searchQuery.toLowerCase();
    return tweetLowerCase.includes(searchQueryLowerCase);
  });
  console.log(Boolean(filterTweets));

  return (
    <>
      {/* filter tweets according to some search query and display only those tweets */}
      <h4>Search Results</h4>
      {filterTweets &&
        filterTweets.map((tweet) => {
          return (
            <TweetPreview tweet={tweet} fetchData={fetchData}></TweetPreview>
          );
        })}
      {filterTweets.length === 0 && (
        <h6>Your search did not return any results.</h6>
      )}
    </>
  );
}

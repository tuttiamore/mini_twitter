import TweetPreview from "./TweetPreview"

export default function SearchResults({tweets, searchQuery}) {
  
  const filterTweets = tweets.filter(tweet => {
    if(!searchQuery) {
      return tweet;
    } 
    const tweetLowerCase=tweet.text.toLowerCase();
    const searchQueryLowerCase=searchQuery.toLowerCase();
    return tweetLowerCase.includes(searchQueryLowerCase);
    
  })
  
  
  return (
    <>
      {/* filter tweets according to some search query and display only those tweets */}
      <h4>Search Results</h4>
      {filterTweets.map(tweet => {
        return <TweetPreview tweet={tweet}></TweetPreview>
      })}
    </>
  );
}

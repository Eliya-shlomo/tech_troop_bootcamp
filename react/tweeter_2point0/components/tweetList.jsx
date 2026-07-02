import React from "react";
import Tweet from "./createTweet";

const TweetList = (tweets) => {

    if (tweets.length === 0) {
        return <p>No tweets yet, be the first to write something!</p>;
    }
    return (
        <div>
            <div>{tweets.map((item, index) => <Tweet content={item.content} key={index} />)}</div>
        </div>
    );
};

export default TweetList;
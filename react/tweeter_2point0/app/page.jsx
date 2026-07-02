import Image from "next/image";
import TweetList from "../components/tweetList";
import createTweet from "../components/createTweet";
import { useState , useEffect} from "react";

const USERNAME = "Eliya";

const [tweets, setTweets] = useState(() => {
  const storedTweets = localStorage.getItem("tweets");
  if (!saved) return [];

  const parsed = JSON.parse(storedTweets);
    return parsed.sort((a, b) => b.id - a.id);
});

useEffect(() => {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}, [tweets]);


const addTweet = (newTweetContent) => {
  const newTweet = {
    username: USERNAME,
    content: newTweetContent,
    id: Date.now(),
  }
  setTweets([newTweet, ...tweets]);
}


export default function Home() {
  return (
    <main>
      <h1>My Tweeter</h1>
      <TweetList tweets={tweets} />
      <createTweet onAddTweet={addTweet} />
    </main>
  );
}

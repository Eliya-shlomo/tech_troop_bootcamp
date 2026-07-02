import { useState } from "react";
import styles from "./CreateTweet.module.css"; 


const CreateTweet = ({ onAddTweet }) => {
    const [content, setContent] = useState("");

    return (
        <div className={styles.tweetContainer}>
            <textarea
                className={styles.textarea}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="wahzzzuuuuuup????"
            />
            
            <div className={styles.footer}>
                <span className={content.length > 140 ? styles.counterRed : styles.counter}>
                    {content.length}/140
                </span>
                
                <button 
                    onClick={() => { onAddTweet(content); setContent(""); }}
                    disabled={content.length === 0 || content.length > 140}
                >
                    publish tweet
                </button>
            </div>
        </div>
    );
};

export default CreateTweet;
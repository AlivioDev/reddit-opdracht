import './Subreddit.css';
import {useEffect, useState} from "react";
import axios from "axios";


function Subreddit() {
const [subreddit, setSubreddit] = useState(null);

useEffect(() => {
    async function fetchSubreddit() {
        try {
            const result = await
                axios.get(`https://www.reddit.com/hot.json?limit=15`);
            console.log(result.data.data.children);
            setSubreddit(result.data.data.children);
        } catch (error) {
            console.error(error);
        }
    }

    fetchSubreddit();
}, []);

return (
    <div>

        {subreddit &&
            subreddit.map((post) => {
                return (
                    <ul key={post.data.id}>
                        <li>{post.data.title}</li>
                        <li>{post.data.subreddit}</li>
                        <li>{post.data.subreddit_subscribers}</li>
                    </ul>
                )})
        }


    </div>
);
}

export default Subreddit;

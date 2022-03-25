import './Home.css';
import axios from "axios";
import {useEffect, useState} from "react";

function Home() {
    const [reddits, setReddits] = useState(null);

    useEffect(() => {
        async function fetchReddit() {
            try {
                const result = await
                    axios.get(`https://www.reddit.com/hot.json?limit=15`);
                console.log(result.data.data.children);
                setReddits(result.data.data.children);
            } catch (error) {
                console.error(error);
            }
        }

        fetchReddit();
    }, []);

    return (
        <div>
            <body className="body-outer-container">
            <div className="body-inner-container">
                <div className="page-title">
                    <h1>Hottest Posts</h1>
                    <p>on Reddit right now</p>
                </div>

                <div className="post-container">
                {reddits &&
                    reddits.map((post) => {
                        return (
                            <ul className="post" key={post.data.id}>
                                <li className="title">{post.data.title}</li>
                                <li>
                                    <p className="name">{post.data.subreddit_name_prefixed}</p>
                                <p className="stats">Comments {post.data.num_comments} - Ups {post.data.ups}</p>
                                </li>
                            </ul>
                        )
                    })
                }
                </div>
            </div>
            </body>
        </div>
    );
}

export default Home;

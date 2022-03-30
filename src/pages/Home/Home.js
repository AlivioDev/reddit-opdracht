import './Home.css';
import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import NumberFormat from "../../helpers/NumberFormat";
import LongTitlesTruncate from "../../helpers/LongTitelsTruncate";

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
        <div className="body-outer-container">

            <div className="loader">
                <div></div>
            </div>

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
                                    <li>
                                        <Link className="title" to={`subreddit/${post.data.subreddit}`}>
                                            {LongTitlesTruncate((post.data.title))}
                                        </Link>
                                    </li>
                                    <li>
                                        <p className="bottom-data">
                                            <a className="name" href={`${post.data.url}`} target="_blank" rel="noreferrer">{post.data.subreddit_name_prefixed}</a>
                                        </p>
                                        <p className="stats">Comments {NumberFormat((post.data.num_comments))} - Ups {NumberFormat((post.data.ups))}</p>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;

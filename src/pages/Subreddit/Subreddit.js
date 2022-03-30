import './Subreddit.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import NumberFormat from "../../helpers/NumberFormat";


function Subreddit() {
    const [subreddit, setSubreddit] = useState(null);

    const {subredditId} = useParams();

    useEffect(() => {
        async function fetchSubreddit() {
            try {
                const result = await
                    axios.get(`https://www.reddit.com/r/${subredditId}/about.json`);
                // console.log(result.data.data);
                setSubreddit(result.data.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchSubreddit();
    }, [subredditId]);

    return (
        <div className="subreddit-outer-container">
            <div className="loader">
                <div></div>
            </div>

            {subreddit &&
                <>
                    <div className="subreddit-inner-container">
                        <h4 className= "paragraph-title">Title</h4>
                        <p className= "paragraph">
                            <a className= "link" href={`https://www.reddit.com${subreddit.url}`} target="_blank" rel="noreferrer" >{subreddit.title}</a>
                        </p>
                        <h4 className= "paragraph-title">Description</h4>
                        <p className= "paragraph">{subreddit.description}</p>
                        <h4 className= "paragraph-title">Number of subscribers</h4>
                        <p className= "paragraph">{NumberFormat((subreddit.subscribers))}</p>
                        <Link className="link-home" to="/"> &lt; Take me back</Link>
                    </div>
                </>
            }
        </div>
    );
}

export default Subreddit;


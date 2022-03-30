import './Header.css';
import {Link, Route, useParams} from "react-router-dom";
import LogoContainer from "../LogoContainer/LogoContainer";
import TitleContainer from "../TitleContainer/TitleContainer";

function Header() {

    return (
        <div>
            <header className="outer-container">
                <div className="inner-container">

                    <nav>
                        <ul className="header-navigation">
                            <li>
                                <Link className= "header-link" to="/">
                                    HOTTEST POSTS
                                </Link>
                            </li>
                            <li>
                                <Link className= "header-link" to="/subreddit/:subredditId">
                                    REDDIT
                                </Link>
                            </li>
                            <li>
                                <Link className= "header-link" to="/subreddit/memes">
                                    MEMES
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="header-content">
                        <Route path="/" exact component={LogoContainer} />
                        <Route path="/subreddit" component={TitleContainer}/>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
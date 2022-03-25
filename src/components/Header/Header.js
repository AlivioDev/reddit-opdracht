import './Header.css';
import logo from "../../assets/logo.png";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            <header className="outer-container">
                <div className="inner-container">

                    <nav>
                        <NavLink to="/">
                            Home
                        </NavLink>
                        <NavLink to="/subreddit/:subredditId">
                            Subreddit
                        </NavLink>
                    </nav>

                    {/*<nav>*/}
                    {/*    <ul>*/}
                    {/*        <li>HOTTEST POSTS</li>*/}
                    {/*        <li>REDDIT</li>*/}
                    {/*        <li>MEMES</li>*/}
                    {/*    </ul>*/}
                    {/*</nav>*/}
                    <div className="header-content">
                        <img src={logo} className="logo" alt="logo" width={150} height={150}/>
                        <h1>
                            Reddit
                        </h1>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
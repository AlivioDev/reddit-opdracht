import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Subreddit from "./pages/Subreddit/Subreddit";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
    <Header/>
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/subreddit/:subredditId">
            <Subreddit/>
        </Route>
    </Switch>
    </>
  );
}

export default App;

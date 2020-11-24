import './App.css';
import NavBar from './components/NavBar/NavBar';
import Posts from './components/Posts/Posts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post/:id">
          <PostDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

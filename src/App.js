import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import Home from "./pages/home";

function App() {
  const user = false;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Register />}</Route>
        <Route path="/profile/:username">
          <Profile />
        </Route> 
      </Switch>
    </Router>
  );
}

export default App;

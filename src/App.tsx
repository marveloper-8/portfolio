// packages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// style
import "./App.scss";
// pages
import Introduction from "./pages";
import BadRequest from './pages/bad-request'
import Lola from './pages/jasmine'

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Introduction} />
      <Route exact path="/lola" component={Lola} />
      <BadRequest />
    </Switch>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routing />
      </div>
    </Router>
  );
};

export default App;

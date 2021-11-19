// packages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// style
import "./App.scss";
// pages
import Introduction from "./pages/introduction";
import BadRequest from './pages/bad-request'

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Introduction} />
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

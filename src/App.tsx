// packages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// style
import "./App.scss";
// pages
import Introduction from "./pages";
import BadRequest from './pages/bad-request'
import Jasmine from './pages/jasmine'

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Introduction} />
      {/* <Route exact path="/824hjr39dun2qOIJIE9HRFCnhi" component={Jasmine} /> */}
      <Route exact path="/jkdsf98ewfj8f9u32hfwedcsj0892uhrfd" component={Jasmine} />
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

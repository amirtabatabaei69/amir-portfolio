import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

import Contact from "./pages/Contact";

import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

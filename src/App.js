import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Blogdetail from './Blogdetail';
import NotFoud from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <Blogdetail />
            </Route>
            <Route path="*">
              <NotFoud />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

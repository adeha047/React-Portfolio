import './App.css';
import Tabs from './components/tabs';
import About from './pages/about';
import Search from './pages/search';
import Discover from './pages/discover';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Tabs} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={resume} />
        <Route exact path="/contact" component={contact} />
      </div>
    </Router>
  );
}

export default App;

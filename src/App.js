import 'antd/dist/antd.css'
import './App.css';
import Home from './Views/Home'
import Contact from './Views/Contact'
import Pork from './Views/Pork'
import Chicken from './Views/Chicken'
import Fish from './Views/Fish'
import {Route,Switch,Redirect} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" exact>
          <Home/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/pork">
          <Pork/>
        </Route>
        <Route path="/chicken">
          <Chicken/>
        </Route>
        <Route path="/fish">
          <Fish/>
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
     

    </div>
  );
}

export default App;

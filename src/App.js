import React, {Suspense} from 'react';
import 'antd/dist/antd.css'
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom';

const Home = React.lazy(() => import('./Views/Home'))
const Contact = React.lazy(() => import('./Views/Contact'))
const Pork = React.lazy(() => import('./Views/Pork'))
const Chicken = React.lazy(() => import('./Views/Chicken'))
const Fish = React.lazy(() => import('./Views/Fish'))



function App() {
  return (
    <div className="App">
      <Switch>
        <React.Suspense fallback={<p>Loading...</p>}>
        <Route path="/home" exact render={() => <Home/>}></Route>
        <Route path="/contact" render={() => <Contact/>}></Route>
        <Route path="/pork" render={() => <Pork/>}></Route>
        <Route path="/chicken" render={() => <Chicken/>}></Route>
        <Route path="/fish" render={() =>  <Fish/>}></Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        </React.Suspense>
      </Switch>
     

    </div>
  );
}

export default App;

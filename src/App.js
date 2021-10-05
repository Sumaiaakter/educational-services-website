
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import University from './components/University/University';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Academics from './components/Academics/Academics';
import Error from './components/Error/Error';
import Admission from './components/Admission/Admission';
import About from './components/About/About';



function App() {
  return (
    <div className="App">
      {/* <Banner></Banner>
      <University />
      <Footer></Footer> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/details/:id">
            <Details></Details>
          </Route>
          <Route exact path="/academics">
            <Academics></Academics>
          </Route>
          <Route exact path="/services">
            <Admission></Admission>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

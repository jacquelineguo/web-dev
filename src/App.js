import {BrowserRouter, Route} from "react-router-dom";
import HelloWorld from "./components/a6/HelloWorld";
import Index1 from "./components/a6/Practice/index";
import Index from "./components/a6/Build/index";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/fontawesome.min.css';
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";


function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Route path="/a6/hello" exact={true}>
            <HelloWorld/>
          </Route>
          <Route path={["/a6/practice"]} exact={true}>
            <Index1/>
          </Route>
          <Route path="/a6/Build/index" exact={true}>
            <Index/>
          </Route>

          <Route path="/a6/twitter/explore" exact={true}>
            <ExploreScreen/>
          </Route>
          <Route path="/a6/twitter/home" exact={true}>
            <HomeScreen/>
          </Route>

        </div>
      </BrowserRouter>
  );
}


export default App;
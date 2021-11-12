import {BrowserRouter, Route} from "react-router-dom";
import Index1 from "./components/a6/Practice/index";
import Index from "./components/a6/Build/index";
import Practice from "./components/a7/Practice/practice"
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/fontawesome.min.css';
import ExploreScreen from "./components/a7/Build/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/a7/Build/HomeScreen/index";
import HomeScreen6 from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreScreen6 from "./components/a6/Build/ExploreScreen/ExploreScreen";

import {Provider} from "react-redux";
import who from "./reducers/who";
import {combineReducers, createStore} from "redux";
import tweets from "./reducers/tweets";
import profile from "./reducers/profile";
import ProfileScreen from "./components/a7/twitter/profile/ProfileScreen";
import profileData from "./reducers/profileData";

const reducer = combineReducers({tweets: tweets, who, profile, profileData})
const store = createStore(reducer);


function App() {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="container">
            <Route path={["/a7/practice"]} exact={true}>
              <Practice/>
            </Route>
            <Route path={["/a7/twitter/home"]} exact={true}>
              <HomeScreen/>
            </Route>
            <Route path={["/a7/twitter/explore"]} exact={true}>
              <ExploreScreen/>
            </Route>
            <Route path={["/a7/twitter/profile"]} exact={true}>
              <ProfileScreen/>
            </Route>
            <Route path={["/a6/practice"]} exact={true}>
              <Index1/>
            </Route>
            <Route path={["/a6/twitter/explore"]} exact={true}>
              <ExploreScreen6/>
            </Route>
            <Route path="/a6/twitter/home" exact={true}>
              <HomeScreen6/>
            </Route>

          </div>
        </Provider>
      </BrowserRouter>
  );
}


export default App;
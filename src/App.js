import {BrowserRouter, Route} from "react-router-dom";
import Index1 from "./components/a6/Practice/index";
import Practice from "./components/a7/Practice/practice"
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/fontawesome.min.css';
import ExploreScreen7 from "./components/a7/Build/ExploreScreen/ExploreScreen";
import HomeScreen7 from "./components/a7/Build/HomeScreen/index";
import ExploreScreen8 from "./components/a8/Build/ExploreScreen/ExploreScreen";
import HomeScreen8 from "./components/a8/Build/HomeScreen/index";
import HomeScreen6 from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreScreen6 from "./components/a6/Build/ExploreScreen/ExploreScreen";

import {Provider} from "react-redux";
import who from "./reducers/who";
import {combineReducers, createStore} from "redux";
import tweets from "./reducers/tweets";
import profile from "./reducers/profile";
import ProfileScreen7 from "./components/a7/twitter/profile/ProfileScreen";
import ProfileScreen8 from "./components/a8/twitter/profile/ProfileScreen";
import profileData from "./reducers/profileData";
import Practice1 from "./components/a8/Practice/practice"
import Practice9 from "./components/a9/Practice/practice"
import ProfileScreen9 from "./components/a9/twitter/profile/ProfileScreen";
import HomeScreen9 from "./components/a9/Build/HomeScreen/index";
import ExploreScreen9 from "./components/a9/Build/ExploreScreen/ExploreScreen";


const reducer = combineReducers({tweets: tweets, who, profile, profileData})
const store = createStore(reducer);


function App() {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="container">
            <Route path={["/a9/practice"]} exact={true}>
              <Practice9/>
            </Route>
            <Route path={["/a9/twitter/home"]} exact={true}>
              <HomeScreen9/>
            </Route>
            <Route path={["/a9/twitter/explore"]} exact={true}>
              <ExploreScreen9/>
            </Route>
            <Route path={["/a9/twitter/profile"]} exact={true}>
              <ProfileScreen9/>
            </Route>
            <Route path={["/a8/practice"]} exact={true}>
              <Practice1/>
            </Route>
            <Route path={["/a8/twitter/home"]} exact={true}>
              <HomeScreen8/>
            </Route>
            <Route path={["/a8/twitter/explore"]} exact={true}>
              <ExploreScreen8/>
            </Route>
            <Route path={["/a8/twitter/profile"]} exact={true}>
              <ProfileScreen8/>
            </Route>
            <Route path={["/a7/practice"]} exact={true}>
              <Practice/>
            </Route>
            <Route path={["/a7/twitter/home"]} exact={true}>
              <HomeScreen7/>
            </Route>
            <Route path={["/a7/twitter/explore"]} exact={true}>
              <ExploreScreen7/>
            </Route>
            <Route path={["/a7/twitter/profile"]} exact={true}>
              <ProfileScreen7/>
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
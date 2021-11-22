import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import '../../../vendors/fontawesome/css/fontawesome.min.css';
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/index";
import who from "../../../reducers/who";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import tweets from "../../../reducers/tweets";
import profile from "../../../reducers/profile";
import ProfileScreen from "../twitter/profile/ProfileScreen";

const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);

const index = () => {
  return(
      <Provider store={store}>
        <div>
          <Route path={["/", "/a8/twitter/home"]}
                 exact={true} component={HomeScreen}/>
          <Route path="/a8/twitter/explore"
                 exact={true} component={ExploreScreen}/>
          <Route path="/a8/twitter/profile"
                 exact={true} component={ProfileScreen}/>
        </div>
      </Provider>
  );
};
export default index;

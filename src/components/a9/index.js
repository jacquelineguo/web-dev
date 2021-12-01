import React from "react";
import {Route} from "react-router-dom";
import Practice from "./Practice/practice";
import Build from "./Build/index";

const A9 = () => {
  return(
      <div>
        <Route path="/a9/practice" exact={true}>
          <Practice/>
        </Route>
        <Route path="/a9/twitter">
          <Build/>
        </Route>
      </div>
  )
}

export default A9;

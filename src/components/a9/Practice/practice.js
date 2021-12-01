import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";
import APIExamples from "./APIExamples";
import Movies from "./Movies/index";


const Practice = () => {
  return(
      <>
        <h1>Practice</h1>
        <Movies/>
        <ReduxExamples/>
        <Link to={"/a9/practice"}>
          Practice
        </Link> |
        <Link to="/a9/twitter/home">
          Build
        </Link>
        <APIExamples/>
      </>

  )
};

export default Practice;
import React from "react";
import NavigationSidebar from "../NavigationSidebar/index";
import PostSummaryList from "../PostSummaryList/index";
import TweetList from "../TweetList";
import PostList from "../PostList/PostList";
import WhatsHappening from "../WhatsHappening";

const HomeScreen = (
) => {
  return (
      <>
        <div className="container mt-3">
          <div className="row row-cols-3">
            <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
              {NavigationSidebar('home')}
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-7 col-md-10 col-sm-10">
              {/*style={{"position": "relative"}}>*/}
              <WhatsHappening/>
              <TweetList/>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 d-none d-lg-block">
              <PostSummaryList title="What's happening"/>
            </div>
          </div>
        </div>
      </>
  )
}

export default HomeScreen;
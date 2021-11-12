import React from "react";
import NavigationSidebar from "../../Build/NavigationSidebar/index";
import WhatsHappening from "../../Build/WhatsHappening";
import TweetList from "../../Build/TweetList";
import PostSummaryList from "../../Build/PostSummaryList";
import ProfileBar from "../ProfileBar/ProfileBar";
const ProfileScreen = (
) => {
  return (
      <>
        <div className="container mt-3">
          <div className="row row-cols-3">
            <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
              {NavigationSidebar('profile')}
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-7 col-md-10 col-sm-10">
              {/*style={{"position": "relative"}}>*/}
              <ProfileBar/>
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

export default ProfileScreen;
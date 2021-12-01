import React, {useState} from "react";
import NavigationSidebar from "../../Build/NavigationSidebar/index";
import TweetList from "../../Build/TweetList";
import PostSummaryList from "../../Build/PostSummaryList";
import ProfileBar from "../ProfileBar/ProfileBar";
import EditProfile from '../EditProfile/EditProfile'
const ProfileScreen = (
) => {
  let [isEdit, setIsEdit] = useState(false);

  const editProfileHandler = () => {
    setIsEdit(isEdit => !isEdit);
  }

  return (
      <>
        <div className="container mt-3">
          <div className="row row-cols-3">
            <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
              {NavigationSidebar('profile')}
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-7 col-md-10 col-sm-10">
              {/*style={{"position": "relative"}}>*/}
              {isEdit?
                  <EditProfile backHandler = {editProfileHandler}/>
                  :
                  <ProfileBar
                      editProfileHandler = {editProfileHandler}/>}
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
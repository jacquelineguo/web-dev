import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentProfile} from "../../../../services/profileService";

const selectAllProfiles = (state) => state.profileData;

const ProfileStats = () => {
  const profileData = useSelector(selectAllProfiles);
  const dispatch = useDispatch();
  useEffect(() => fetchCurrentProfile(dispatch), [])
  console.log(profileData);
  return (
      <>
        <div className="flex-row mt-2 d-flex justify-content-start wd-color-dimgrey">
          <div className="flex-column pe-2 justify-content-around ">
            <i className="fa fa-map-marked-alt me-2"></i>
            {profileData.location}
          </div>
          <div className="flex-column pe-2 justify-content-around">
            <i className="fas fa-birthday-cake me-2"></i>
            {profileData.dateOfBirth}
          </div>
          <div className="flex-column pe-2 justify-content-around">
            <i className="fas fa-calendar-alt me-2"></i>
            {profileData.dateJoined}
          </div>
        </div></>
  )
}

const FollowStats = () => {
  const profileData = useSelector(selectAllProfiles);
  return (
      <> <div className="flex-row mt-2 d-flex justify-content-start">
        <div className="flex-column pe-2 justify-content-around">
          {profileData.followingCount}
          <span className="wd-color-dimgrey">Following</span>
        </div>
        <div className="flex-column pe-2 justify-content-around">
          {profileData.followersCount}
          <span className="wd-color-dimgrey">Follower</span>
        </div>
      </div></>
  )
}

const ProfileBar = (
    props
) => {
  const profileData = useSelector(selectAllProfiles);

  return (
      <>
        <ul className="list-group">
          <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <div><i className="fa fa-arrow-circle-left"></i></div>

            <div className={'ms-3 me-auto'}>
                      <div><h5 className="fw-bolder">{profileData.firstName} {profileData.lastName}</h5></div>
                      <div className="wd-color-dimgrey">3,660 Tweets</div>
              </div>
          </li>

          <li className="list-group-item p-0">
            <div>
            <img src={profileData.bannerPicture} className="banner-img"/>
            </div>
          </li>

          <li className="list-group-item">
            <div className="profile-img">
              <img src={profileData.profilePicture} className={'rounded-circle profile-img'} style={{
                "border": "5px solid black"}}/>
            </div>
            <div className="float-end" >
              <a className="btn btn-secondary btn-block rounded-pill wd-bg-color-black"
              onClick={props.editProfileHandler}>
                Edit Profile
              </a>
            </div>
            <div style={{"height":"50px"}}></div>
            <h5 className="fw-bolder">{profileData.firstName} {profileData.lastName}</h5>
            <div className="wd-color-dimgrey">@{profileData.handle}</div>
            <div>
              {profileData.bio}
            </div>
            <div className="wd-color-dimgrey">
              Website: {profileData.website}
            </div>
            <div>
              {ProfileStats()}
            </div>
            <div>
              {FollowStats()}
            </div>

          </li>
        </ul>
      </>
  )
}

export default ProfileBar;
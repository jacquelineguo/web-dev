import React from "react";

const ProfileStats = () => {
  return (
      <>
        <div className="flex-row mt-2 d-flex justify-content-start">
          <div className="flex-column pe-2 justify-content-around">
            <i className="far fa-comment me-2"></i>
            location
          </div>
          <div className="flex-column pe-2 justify-content-around">
            <i className="fas fa-retweet me-2"></i>
            dateOfBirth
          </div>
          <div className="flex-column pe-2 justify-content-around">
            <i className="fas fa-external-link-alt me-2"></i>
            dateJoined
          </div>
        </div></>
  )
}

const FollowStats = () => {
  return (
      <> <div className="flex-row mt-2 d-flex justify-content-start">
        <div className="flex-column pe-2 justify-content-around">
          followingCount following
        </div>
        <div className="flex-column pe-2 justify-content-around">
          followersCount followers
        </div>
      </div></>
  )
}

const ProfileBar = () => {
  return (
      <>
        <ul className="list-group">
          <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <div><i className="fa fa-arrow-circle-left"></i></div>

            <div className={'ms-3 me-auto'}>
                      <div><h5 className="fw-bolder">Pikachu G</h5></div>
                      <div className="wd-color-dimgrey">123 Tweets</div>
              </div>
          </li>

          <li className="list-group-item p-0">
            <div className="col-md-4 px-0">
            <img src="/image/background.png"/>
            </div>
          </li>

          <li className="list-group-item">
            <div className="profile-img">
              <img src="/image/jojo.jpg" className={'rounded-circle profile-img'} style={{
                "border": "5px solid black"}}/>
            </div>
            <div className="float-end" >
              <a href="tweet.html"
                 className="btn btn-secondary btn-block rounded-pill wd-bg-color-black">
                Edit Profile
              </a>
            </div>
            <div style={{"height":"50px"}}></div>
            <h5 className="fw-bolder">pp guo</h5>
            <div>@poguo</div>
            <div>
              profile.bio
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
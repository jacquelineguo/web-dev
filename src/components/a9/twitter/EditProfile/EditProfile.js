import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateCurrentProfile} from '../../../../services/profileService'
const selectAllProfiles = (state) => state.profileData;

const EditProfile = ( props ) => {
  const profileData = useSelector(selectAllProfiles);
  let [name, setName] = useState(profileData.firstName);
  let [bio, setBio] = useState(profileData.bio);
  let [location, setLocation] = useState(profileData.location);
  let [website, setWebsite] = useState(profileData.website);
  let [birthDate, setBirthDate] = useState(profileData.dateOfBirth);
  const dispatch = useDispatch();
  const editProfileHandler = () => {
    const action = {
      type: 'update-profile',
      profileData: {
        ...profileData,
        firstName: name,
        bio: bio,
        location: location,
        website: website,
        dateOfBirth: birthDate
      }
    };
    // dispatch(action);
    updateCurrentProfile(dispatch, action.profileData);
    props.backHandler();
  }

  return (
      <>
        <ul className="list-group">
          <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div><i className="fa fa-times" onClick={props.backHandler}></i></div>

            <div className={'ms-4 me-auto'}>
              <div><h5 className="fw-bolder">Edit Profile</h5></div>
            </div>

            <div className="" >
              <a className="btn btn-secondary btn-block rounded-pill wd-bg-color-black"
                 onClick={editProfileHandler}>
                Save
              </a>
            </div>
          </li>

          <li className="list-group-item p-0">
            <div >
              <img src={profileData.bannerPicture} className="banner-img"/>
            </div>
          </li>

          <li className="list-group-item">
            <div className="profile-img">
              <img src={profileData.profilePicture} className={'rounded-circle profile-img'} style={{
                "border": "5px solid black"}}/>
            </div>
            <div style={{"height":"50px"}}></div>
            <form className="form-floating">
              <input className="form-control edit-profile"
                     id="name"
                     value={name}
                     onChange={e => setName(e.target.value)}/>
                <label htmlFor="name">Name</label>
              <div style={{"height":"50px"}}></div>
            </form>
            <form className="form-floating">
              <input className="form-control edit-profile"
                     id="bio"
                     value={bio}
                     onChange={e => setBio(e.target.value)}/>
              <label htmlFor="bio">Bio</label>
            </form>
            <div style={{"height":"50px"}}></div>
            <form className="form-floating">
              <input className="form-control edit-profile"
                     id="location"
                     value={location}
                     onChange={e => setLocation(e.target.value)}/>
              <label htmlFor="location">Location</label>
            </form>
            <div style={{"height":"50px"}}></div>

            <form className="form-floating">
              <input className="form-control edit-profile"
                     id="website"
                     value={website}
                     onChange={e => setWebsite(e.target.value)}/>
              <label htmlFor="website">Website</label>
            </form>
            <div style={{"height":"50px"}}></div>

            <form className="form-floating">
              <input type="date" id="dob"
                     className="form-control edit-profile"
                     value={birthDate}
                     onChange={e => setBirthDate(e.target.value)}/>
              <label htmlFor="dob">Birth Date</label>
            </form>


          </li>
        </ul>
      </>
  )
}

export default EditProfile;
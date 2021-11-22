let PROFILE_API = 'http://localhost:4000/api/profile';
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'development') {
  PROFILE_API = 'https://web-dev-node-xuan.herokuapp.com/api/profile'
}

export const fetchCurrentProfile = (dispatch) =>
    fetch(PROFILE_API)
    .then(response => response.json())
    .then(profileData =>
        dispatch({
          type: 'fetch-current-profile',
          profileData
        })
    );

export const updateCurrentProfile = (dispatch, profileData) =>
    fetch(PROFILE_API, {
      method: 'PUT',
      body: JSON.stringify(profileData),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response =>
        dispatch({
          type: 'update-profile',
          profileData
        }));




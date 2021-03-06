
const data = {
  firstName: 'Pikachu G',	lastName: '',	handle: 'pikachug',
  profilePicture: '/image/jojo.jpg', 	bannerPicture: '/image/background.png',
  bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retweets and likes are not endorsements.",
  website: "youtube.com/webdevtv",
  location: 'Boston, MA',	dateOfBirth: '2021-05-04',	dateJoined: '8/2021',
  followingCount: 312,	followersCount: 180
}

// const initialState = {
//   profileData: data
// }

const profileData = (state = data, action) => {

  switch (action.type) {
    case 'fetch-current-profile':
      return action.profileData
      break;
    case 'update-profile':
      return action.profileData
    default:
      return (state);
  };
};

export default profileData;
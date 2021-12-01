let WHO_API = 'http://localhost:4000/api/who';
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'development') {
  WHO_API = 'https://web-dev-node-xuan.herokuapp.com/api/who'
}

export const fetchWhoToFollowList = (dispatch) =>
    fetch(WHO_API)
    .then(response => response.json())
    .then(who =>
        dispatch({
          type: 'fetch-who-to-follow-list',
          who
        })
    );



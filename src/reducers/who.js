import whoJson from './data/who.json';

const who = (state = whoJson, action) => {
  switch (action.type) {
    case 'fetch-who-to-follow-list':
      return action.who
      break;
    default:
      return (state);
  };
};

export default who;

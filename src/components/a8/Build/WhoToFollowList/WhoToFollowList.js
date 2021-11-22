import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
// import who from "../../data/who.json"
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);
  return (
      <>
        <div className={'list-group bg-dark'}>
          <a href="#" className='list-group-item'>
            <b>Who to follow</b></a>
              {who.map(who => {
                return(
                    <WhoToFollowListItem who={who}/>
                );
              })
              }
</div>
      </>
);}
export default WhoToFollowList;
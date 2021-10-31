import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"

const WhoToFollowList = () => {
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
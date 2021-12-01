import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import WhoToFollowListItem from "./WhoToFollowListItem";
// import who from "../../data/who.json"
import {fetchWhoToFollowList} from "../../../../services/whoService";

const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);
  const dispatch = useDispatch();
  useEffect(() => fetchWhoToFollowList(dispatch), [])
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
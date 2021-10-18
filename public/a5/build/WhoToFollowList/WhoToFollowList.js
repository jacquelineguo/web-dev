import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
  return (`
<div class="list-group bg-dark">
                        <a href="#" class="list-group-item "><b>Who to follow</b></a>
                         ${
      who.map(who => {
        return(WhoToFollowListItem(who));
      }).join('')
  }
                    </div>
`); }
export default WhoToFollowList;
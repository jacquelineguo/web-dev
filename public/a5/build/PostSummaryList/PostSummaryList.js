import PostSummaryItems from "./PostSummaryItem.js";
import post from "./posts.js"
const PostSummaryList = () => {
  return (`
                         ${
      post.map(post => {
        return(PostSummaryItems(post));
      }).join('')
  }
`); }
export default PostSummaryList;
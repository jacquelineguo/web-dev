import PostSummaryItems from "./PostSummaryItem.js";
import post from "./posts.json"
const PostSummaryList = ({}) => {
  return (<>
        {post.map(post => {
          return (
              <PostSummaryItems posts={post}/>
          );
        })}
      </>
); }
export default PostSummaryList;
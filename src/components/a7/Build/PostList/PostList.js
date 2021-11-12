import PostListItem from "./PostListItem.js";
import item from "./items.json"

const PostList = () => {
  return (
      <>
        {item.map(item => {
          return (
              <PostListItem items={item}/>
          );
        })}
      </>
); }

export default PostList;
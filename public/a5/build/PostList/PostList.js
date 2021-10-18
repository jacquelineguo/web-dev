import PostListItem from "./PostListItem.js";
import item from "./items.js"
const PostList = () => {
  return (`
                         ${
      item.map(item => {
        return(`${PostListItem(item)} <hr/>`);
      }).join('')
  }
`); }
export default PostList;
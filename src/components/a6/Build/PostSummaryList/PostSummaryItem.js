import '../../explore.css';

const PostSummaryItem = ({
  posts = {
    "topic": "Web Development",
    "userName": "ReactJS",
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "image": "../../../images/react-blue.png"
  }
}) => { return(
    <>
<li className={'list-group-item'}>
                                <div className={'wd-flex-content-box'}>
                                    <div className={'wd-flex-content'}>
                                        <div className={'wd-row-top wd-color-dimgrey'}>
                                            {posts.topic}
                                        </div>
                                        <div className={'wd-row wd-float-left'}>
                                            <b>{posts.userName}</b>
                                            <i className={'fas fa-check-circle'}></i>
                                            - {posts.time}
                                        </div>
                                        <div className={'wd-row wd-topic-format-2 wd-float-left'}>
                                            {posts.title}
                                        </div>
                                      {posts.tweets?
                                        <div className={'wd-row wd-fg-color-gray wd-color-dimgrey'}>
                                             {posts.tweets} Tweets
                                        </div>:<></>}
                                    </div>
                                    <img className={'wd-float-right wd-image'} src={posts.image}
                                    />
                                  
                                </div>
                            </li>
    </>
 );
}
export default PostSummaryItem;
import '../../explore.css';

const PostListItem = ({
    items = {
      "avatarIcon" : "../../a4/twitter/java.png",
      "userName": "Elon Musk",
      "name": "elonmusk",
      "time": "23h",
      "content1": "Amazing show about ",
      "content2": "@Inspiration4x",
      "content3":" mission!",
      "link": "@Inspiration4x",
      "img": "../../a5/twitter/inspiration.png",
      "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
      "content4": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
      "link1": "netflix.com",
      "comment": "4.2K",
      "retweet": "3.5K",
      "like": "37.5K"
    }
}) => { return(
    <>
                  <div className="row">
                  <div className="col-1" style={{paddingRight: "0"}}>
                            <img src={items.avatarIcon} className={'rounded-circle'} style={{width: "100%"}}/>
                            </div>
                  <div className="col">
                            <div className="me-auto">
                            <div className="d-flex justify-content-between">
                            
                                <span className="fw-bold">{items.userName}
                                  <i className="fas fa-check-circle"></i>
                                <span className={'wd-color-grey'}>@{items.name} • {items.time}</span></span>
                                <i className={'fas fa-ellipsis-h wd-color-grey'}></i>
                                </div>
                                <div>
                                {items.content1}
                                <a className="style-it-blue" href="@inspiration4x">{items.content2}</a>
                                {items.content3}
                                </div>
                            </div>
                              <div className="card home-card">
                                <img src={items.img} className="card-img-top" style={{maxHeight: "250px"}} alt="" />
                                {items.title!=null ? <div className={'card-body home-color-style'}>
                                  <p className="card-text wd-color-white">{items.title}</p>
                                  <p className="card-text wd-color-grey">{items.content4}</p>
                                  <p className="card-text wd-color-grey"><i className="fas fa-link"></i> {items.link1}</p>
                                </div> : <></>}
                              </div>
                                <div className="d-flex justify-content-between card-bottom">
                                  <span className="card-bottom-item"><i className="far fa-comment"></i>  {items.comment} </span>
                                  <span className="card-bottom-item"><i className="fas fa-retweet"></i>  {items.retweet} </span>
                                  <span className="card-bottom-item"><i className="far fa-heart"></i>  {items.like} </span>
                                  <span className="card-bottom-item"><i className="fas fa-upload"></i></span>
                                </div>
                            </div>
                            </div>
    </>
 );
}

export default PostListItem;
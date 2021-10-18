const PostListItem = (items) => { return(`
                  <div class="row">
                  <div class="col-1" style="padding-right: 0">
                            <img src=${items.avatarIcon} style="width: 100%" class=" rounded-circle"/>
                            </div>
                  <div class="col">
                            <div class="me-auto">
                            <div class="d-flex justify-content-between">
                            
                                <span class="fw-bold">${items.userName}  <i class="fas fa-check-circle"></i>
                                <span style="color: grey">@${items.name} • ${items.time}</span></span>
                                <i class="fas fa-ellipsis-h" style="color: grey"></i>
                                </div>
                                <div>
                                ${items.content1}
                                <a class="style-it-blue" href="@inspiration4x">${items.content2}</a>
                                ${items.content3}
                                </div>
                            </div>
                              <div class="card home-card">
                                <img src="${items.img}" class="card-img-top" style="max-height: 250px" alt="">
                                ${items.title!=null ? `<div class="card-body" style="background-color: black; border-color: #282828;">
                                  <p class="card-text" style="color: white">${items.title}</p>
                                  <p class="card-text" style="color: grey">${items.content4}</p>
                                  <p class="card-text" style="color: grey"><i class="fas fa-link"></i> ${items.link1}</p>
                                </div>` : ''}
                              </div>
                                <div class="d-flex justify-content-between card-bottom">
                                  <span class="card-bottom-item"><i class="far fa-comment"></i>  ${items.comment} </span>
                                  <span class="card-bottom-item"><i class="fas fa-retweet"></i>  ${items.retweet} </span>
                                  <span class="card-bottom-item"><i class="far fa-heart"></i>  ${items.like} </span>
                                  <span class="card-bottom-item"><i class="fas fa-upload"></i></span>
                                </div>
                            </div>
                            </div>
 `);
}
export default PostListItem;
const PostSummaryItem = (posts) => { return(`
<li class="list-group-item">
                                <div class="wd-flex-content-box">
                                    <div class="wd-flex-content">
                                        <div class="wd-row-top" style="color: dimgrey">
                                            ${posts.topic}
                                        </div>
                                        <div class="wd-row wd-float-left">
                                            <b>${posts.userName}</b>
                                            <i class="fas fa-check-circle"></i>
                                            - ${posts.time}
                                        </div>
                                        <div class="wd-row wd-topic-format-2 wd-float-left">
                                            ${posts.title}
                                        </div>
                                        <div class="wd-row wd-fg-color-gray"style="color: dimgrey">
                                             ${posts.tweets} Tweets
                                        </div>

                                    </div>
                                    <img class="wd-float-right wd-image" src=${posts.image}
                                    />
                                  
                                </div>
                            </li>

 `);
}
export default PostSummaryItem;
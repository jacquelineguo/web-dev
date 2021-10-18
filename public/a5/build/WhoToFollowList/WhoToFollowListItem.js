const WhoToFollowListItem = (who) => { return(`
<a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            <div><img src=${who.avatarIcon} style="height:40px" class="img-fluid rounded-circle"/></div>
                            <div class="ms-3 me-auto">
                                <div class="fw-bold">${who.userName}  <i class="fas fa-check-circle"></i></div>
                                @${who.handle}
                            </div>
                            <span>
                                 <button class="btn btn-light background-color-blue">Follow</button>
                            </span>
                        </a>

 `);
}
export default WhoToFollowListItem;
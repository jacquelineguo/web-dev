const NavigationSidebar = (itemName) => {
  let isActive = itemName=="home"?'active':'';
  let ifActive = itemName=="explore"?'active':'';
  return(`
                <div class="list-group list-group-dark">
                    <a href="#" class="list-group-item "><i class="fab fa-twitter"></i></a>
                    <a href="../HomeScreen/home.html" class="${isActive} list-group-item list-group-item-action d-flex justify-content-between align-items-center"><div class="d-flex flex-nowrap align-items-center"><i class="fas fa-home mr-3"></i> <span class="ms-1 d-none d-xl-block">Home</span></div></a>
                    <a href="../ExploreScreen/explore.html" class="${ifActive} list-group-item list-group-item-action d-flex justify-content-between align-items-center" aria-current="true">
                        <div class="d-flex flex-nowrap align-items-center">
                            <i class="fa fa-hashtag mr-3"></i> <span class="ms-1 d-none d-xl-block">Explore</span>
                        </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"><div class="d-flex flex-nowrap align-items-center"><i class="far fa-bell mr-2"></i> <span class="ms-1 d-none d-xl-block">Notifications</span></div></a>
                    <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"><div class="d-flex flex-nowrap align-items-center"><i class="far fa-envelope mr-2"></i> <span class="ms-1 d-none d-xl-block">Messages</span></div></a>
                    <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"><div class="d-flex flex-nowrap align-items-center"><i class="far fa-bookmark mr-2"></i> <span class="ms-1 d-none d-xl-block">Bookmarks</span></div></a>
                    <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"><div class="d-flex flex-nowrap align-items-center"><i class="fa fa-list mr-2"></i> <span class="ms-1 d-none d-xl-block">Lists</span></div></a>
                    <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"><div class="d-flex flex-nowrap align-items-center"><i class="far fa-user mr-2"></i> <span class="ms-1 d-none d-xl-block">Profile</span></div></a>
                    <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-nowrap align-items-center">
                        <span class="fa-stack">
                            <i class="far fa-circle fa-stack-2x"></i>
                            <i class="fas fa-ellipsis-h fa-stack-1x"></i>
                        </span> <span class="ms-1 d-none d-xl-block">More</span></div></a>
                </div>
                <button class="btn btn-primary btn-block mx-auto mt-2" type="button">Tweet</button>

`); }
export default NavigationSidebar;
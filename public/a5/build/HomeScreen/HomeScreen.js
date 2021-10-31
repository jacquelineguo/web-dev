import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import PostList from "../PostList/PostList.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
(function ($) { $('#wd-explore').append(`
<div class="container mt-3">
<div class="row row-cols-3">
<div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
${NavigationSidebar("home")}
</div>
<div class="col-xxl-5 col-xl-5 col-lg-7 col-md-10 col-sm-10">
${PostList()}
</div>
<div class="col-xxl-5 col-xl-5 col-lg-5 d-none d-lg-block">
${ExploreComponent()}
</div>
    </div>
</div> `);
})($);
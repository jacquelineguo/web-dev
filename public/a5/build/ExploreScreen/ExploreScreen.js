import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";
(function ($) { $('#wd-explore').append(`
<div class="container mt-3">
<div class="row row-cols-3">
<div class="col-xxl-3 col-xl-2 col-lg-1 col-md-2 col-sm-2">
${NavigationSidebar("explore")} 
</div>
<div class="col-xxl-5 col-xl-6 col-lg-7 col-md-10 col-sm-10">
${ExploreComponent()}
</div>
<div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
${WhoToFollowList()} 
</div>
</div>
</div> `);
})($);
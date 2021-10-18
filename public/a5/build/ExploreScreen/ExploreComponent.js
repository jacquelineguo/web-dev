import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
const ExploreComponent = () => { return(`

                    <div class="justify-content-between row align-items-center">
                        <div class="col">
                            <div class="form-control-feedback"><i class="fa fa-search" style="color: grey"></i></div>
                            <input class="col form-control border-0 rounded-pill " type="text" placeholder="Search Twitter" id="search-bar">
                        </div>
                        <span class="col-1">
                            <i class="fas fa-cog color-blue"></i>
                        </span>
                    </div>
<ul class="nav nav-tabs mt-2">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">For you</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sports</a>
                        </li>
                        <li class="nav-item">
                            <div class="d-none d-md-block">
                                <a class="nav-link" href="#">Entertainment</a>
                            </div>
                        </li>
                    </ul>
<div class="card mt-2" style="border-color: grey">
                        <img src="../../twitter/starship.jpeg" class="card-img-top" alt="SpaceX's Starship">
                        </div>
${PostSummaryList()} `);
}
export default ExploreComponent;
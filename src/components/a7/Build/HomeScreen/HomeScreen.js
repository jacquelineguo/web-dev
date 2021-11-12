import NavigationSidebar from "../NavigationSidebar/index";
import PostList from "../PostList/PostList";
import PostSummaryList from "../PostSummaryList/index";

const HomeScreen = (
) => {
  return (
      <>
        <div className="container mt-3">
          <div className="row row-cols-3">
            <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
              {NavigationSidebar("home")}
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-7 col-md-10 col-sm-10">
              {PostList()}
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 d-none d-lg-block">
              <PostSummaryList itemName={"home"}/>
            </div>
          </div>
        </div>
      </>
  )
}

export default HomeScreen;
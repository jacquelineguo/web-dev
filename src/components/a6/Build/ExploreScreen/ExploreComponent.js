import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import '../../explore.css';

const ExploreComponent = () => {
  return(
        <>
            <div className={'justify-content-between row align-items-center'}>
                <div className={'col'}>
                    <div className={'form-control-feedback'}><i className={'fa fa-search wd-color-grey'}></i></div>
                    <input className={'col form-control border-0 rounded-pill'} style={{paddingLeft: "35px"}} type="text" placeholder="Search Twitter" id="search-bar"/>
                </div>
                <span className={'col-1'}>
                    <i className={'fas fa-cog color-blue'}></i>
                </span>
            </div>
        <ul className={'nav nav-tabs mt-2'}>
            <li className={'nav-item'}>
                <a className={'nav-link active'} href="#">For you</a>
            </li>
            <li className={'nav-item'}>
                <a className={'nav-link'} href="#">Trending</a>
            </li>
            <li className={'nav-item'}>
                <a className={'nav-link'} href="#">News</a>
            </li>
            <li className={'nav-item'}>
                <a className={'nav-link'} href="#">Sports</a>
            </li>
            <li className={'nav-item'}>
                <div className={'d-none d-md-block'}>
                    <a className={'nav-link'} href="#">Entertainment</a>
                </div>
            </li>
        </ul>
        <div className={'card mt-2 wd-border-color-grey'}>
        <img src="../../a4/twitter/starship.jpeg" className={'card-img-top'} alt="SpaceX's Starship"/></div>
        <PostSummaryList/>
    </>
); }

export default ExploreComponent;
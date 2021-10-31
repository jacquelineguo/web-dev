import React from "react";
import '../../../../vendors/fontawesome/css/fontawesome.min.css';
import {Link} from "react-router-dom";

const NavigationSidebar = (
      itemName
    ) => {
  let isActive = itemName == "home" ? 'active' : '';
  let ifActive = itemName == "explore" ? 'active' : '';
  return (
      <>
        <div className={'list-group list-group-dark'}>
          <Link to="/a6/" className={'list-group-item '}><i
              className={'fab fa-twitter'}></i></Link>
          <Link to="/a6/twitter/home"
             className={`${isActive} list-group-item list-group-item-action d-flex justify-content-between align-items-center`}>
            <div className={'d-flex flex-nowrap align-items-center'}>
              <i className={'fas fa-home mr-3'}></i>
              <span className={'ms-1 d-none d-xl-block'}>Home</span></div>
          </Link>
          <Link to="/a6/twitter/explore"
             className={`${ifActive} list-group-item list-group-item-action d-flex justify-content-between align-items-center" aria-current="true"`}>
            <div className={'d-flex flex-nowrap align-items-center'}>
              <i className={'fa fa-hashtag mr-3'}></i>
              <span className={'ms-1 d-none d-xl-block'}>Explore</span>
            </div>
          </Link>
          <a href="#"
             className={'list-group-item list-group-item-action d-flex justify-content-between align-items-center'}>
            <div className={'d-flex flex-nowrap align-items-center'}>
              <i className={'far fa-bell mr-2'}></i>
              <span className={'ms-1 d-none d-xl-block'}>Notifications</span>
            </div>
          </a>
          <a href="#"
             className={'list-group-item list-group-item-action d-flex justify-content-between align-items-center'}>
            <div className={'d-flex flex-nowrap align-items-center'}>
              <i className={'far fa-envelope mr-2'}></i>
              <span className={'ms-1 d-none d-xl-block'}>Messages</span></div>
          </a>
          <a href="#"
             className={'list-group-item list-group-item-action d-flex justify-content-between align-items-center'}>
            <div className={'d-flex flex-nowrap align-items-center'}>
              <i className={'far fa-bookmark mr-2'}></i>
              <span className={'ms-1 d-none d-xl-block'}>Bookmarks</span></div>
          </a>
          <a href="#"
             className={'list-group-item list-group-item-action d-flex justify-content-between align-items-center'}>
            <div className={'d-flex flex-nowrap align-items-center'}>
              <i className={'fa fa-list mr-2'}></i>
              <span className={'ms-1 d-none d-xl-block'}>Lists</span></div>
          </a>
          <a href="#"
             className={'list-group-item list-group-item-action d-flex justify-content-between align-items-center'}>
            <div className={'d-flex flex-nowrap align-items-center'}>
              <i className={'far fa-user mr-2'}></i>
              <span className={'ms-1 d-none d-xl-block'}>Profile</span></div>
          </a>
          <a href="#"
             className={'list-group-item list-group-item-action d-flex justify-content-between align-items-center'}>
            <div className={'d-flex flex-nowrap align-items-center'}>
              <span className={'fa-stack'}>
                  <i className={'far fa-circle fa-stack-2x'}></i>
                  <i className={'fas fa-ellipsis-h fa-stack-1x'}></i>
              </span> <span className={'ms-1 d-none d-xl-block'}>More</span>
            </div>
          </a>
        </div>
        <button className='btn btn-light'
                style={{
                  backgroundColor: "#2a9fd6", minWidth: "100%",
                  borderRadius: "20px", marginTop: "10px",
                }}>Tweet
        </button>
      </>
  );

};

export default NavigationSidebar;

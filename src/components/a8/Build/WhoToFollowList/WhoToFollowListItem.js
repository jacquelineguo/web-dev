
const WhoToFollowListItem =
    ({
     who = {
      avatarIcon: '../../../images/nasa.png',
      userName: 'NASA',
      handle: 'NASA'
     }
    })=>{ return(
    <>
      <a href="#" className={'list-group-item list-group-item-action d-flex justify-content-between align-items-center'}>
         <div><img src={who.avatarIcon} height="40px" className={'rounded-circle'}/></div>
         <div className={'ms-3 me-auto'}>
             <div className={'fw-bold'}>{who.userName}
              <i className={'fas fa-check-circle'}></i></div>
             @{who.handle}
         </div>
         <span>
              <button className='btn btn-light'style={{backgroundColor: "#2a9fd6",minWidth: "100%",
                borderRadius: "20px"}}>Follow</button>
         </span>
     </a>
    </>

 );
}
export default WhoToFollowListItem;
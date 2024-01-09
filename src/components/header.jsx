import { Link } from "react-router-dom";

const Header = () => {

return(

<>

{/*=====================================*/}
{/*=        Header Area Start       	=*/}
{/*=====================================*/}
<header className="edu-header header-style-4 header-fullwidth no-topbar">
  <div id="edu-sticky-placeholder" />
  <div className="header-mainmenu">
    <div className="container-fluid">
      <div className="header-navbar">
        <div className="header-brand">
          <div className="logo">
            <Link to="/">
              <img className="logo-light" src="assets/images/logo/logo-dark.svg" alt="Corporate Logo" />
              <img className="logo-dark" src="assets/images/logo/logo-white.svg" alt="Corporate Logo" />
            </Link>
          </div>
        </div>
        <div className="header-mainnav">
          <nav className="mainmenu-nav">
            <ul className="mainmenu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="Aboutus/">About Us</Link></li>
              <li className="has-droupdown"><a to="#">Courses</a>
                <ul className="submenu">
                  <li><Link to="Iot/">IOT</Link></li>
                  <li><Link to="Robotics/">ROBOTICS</Link></li>
                </ul>
              </li>
              <li><Link to="Blog/">Blog</Link> </li>
              <li><Link to="Contactus/">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <ul className="header-action">
            <li className="search-bar">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" />
                <button className="search-btn" type="button"><i className="icon-2" /></button>
              </div>
            </li>
            <li className="icon search-icon">
              <a to="javascript:void(0)" className="search-trigger">
                <i className="icon-2" />
              </a>
            </li>
            <li className="header-btn">
              <Link to="Login/" className="edu-btn btn-medium btn-gradient">Login  <i className="icon-4" /></Link>
            </li>
            <li className="mobile-menu-bar d-block d-xl-none">
              <button className="hamberger-button">
                <i className="icon-54" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="popup-mobile-menu">
    <div className="inner">
      <div className="header-top">
        <div className="logo">
          <a to="/">
            <img className="logo-light" src="assets/images/logo/logo-dark.svg" alt="Corporate Logo" />
            <img className="logo-dark" src="assets/images/logo/logo-white.svg" alt="Corporate Logo" />
          </a>
        </div>
        <div className="close-menu">
          <button className="close-button">
            <i className="icon-73" />
          </button>
        </div>
      </div>
      <ul className="mainmenu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="Aboutus">About Us</Link></li>
        <li className="has-droupdown"><a to="#">Courses</a>
          <ul className="submenu">
            <li><Link to="Iot/">IOT</Link></li>
            <li><Link to="Robotics/">ROBOTICS</Link></li>
          </ul>
        </li>
        <li><a to="Blog/">Blog</a> </li>
        <li><a to="Contactus">Contact</a></li>
        <a to="Login/" className="edu-btn btn-medium btn-gradient">Login  <i className="icon-4" /></a>
      </ul>
    </div>
  </div>
  {/* Start Search Popup  */}
  <div className="edu-search-popup">
    <div className="content-wrap">
      <div className="site-logo">
        <img className="logo-light" src="assets/images/logo/logo-dark.svg" alt="Corporate Logo" />
        <img className="logo-dark" src="assets/images/logo/logo-white.svg" alt="Corporate Logo" />
      </div>
      <div className="close-button">
        <button className="close-trigger"><i className="icon-73" /></button>
      </div>
      <div className="inner">
        <form className="search-form" action="#">
          <input type="text" className="Sreshta EduTech-search-popup-field" placeholder="Search Here..." />
          <button className="submit-button"><i className="icon-2" /></button>
        </form>
      </div>
    </div>
  </div>
  {/* End Search Popup  */}
</header>

  
</>


)
 



}

export default Header;
import { Link } from "react-router-dom";

const Footer = () => {

    return(
<>
<div>
  {/*=        Footer Area Start       	=*/}
  {/*=====================================*/}
  {/* Start Footer Area  */}
  <footer className="edu-footer footer-kindergarten footer-style-6">
    <div className="footer-top">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="edu-footer-widget">
              <div className="logo">
                <a to="/">
                  <img className="logo-dark" src="assets/images/logo/logo-white.svg" alt="Corporate Logo" />
                </a>
              </div>
              <p className="description">E-learning refers to the process of learning using electronic devices such as computers, smartphones, or tablets. Compare to others.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="edu-footer-widget explore-widget">
              <h4 className="widget-title">Pages</h4>
              <div className="inner">
                <ul className="footer-link link-hover">
                  <li><Link to="Aboutus/">About Us</Link></li>
                  <li><Link to="Iot/">IOT</Link></li>
                  <li><Link to="Robotics/">ROBOTICS</Link></li>
                  <li><Link to="Blog/">Blog</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-12">
            <div className="edu-footer-widget quick-link-widget">
              <h4 className="widget-title"> Useful Links</h4>
              <div className="inner">
                <ul className="footer-link link-hover">
                  <li><a to="Privacypolicy/">Privacy Policy</a></li>
                  <li><Link to="Termsconditions/">Terms&conditions</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="edu-footer-widget">
              <h6 className="widget-title">Contact</h6>
              <div className="inner">
                <div className="widget-information">
                  <ul className="information-list">
                    <li><span>Address:</span>Hyderabad</li>
                    <li><span>Call:</span><a to="tel: 040-35592680"> 040-35592680</a></li>
                    <li><span>Email:</span><a to="mailto:info@Sreshta EduTech.com" target="_blank">info@sreshtaedutech.com</a></li>
                  </ul>
                </div>
                <ul className="social-share icon-transparent">
                  <li><Link to="#" className="color-fb"><i className="icon-facebook" /></Link></li>
                  <li><Link to="#" className="color-linkd"><i className="icon-linkedin2" /></Link></li>
                  <li><Link to="#" className="color-ig"><i className="icon-instagram" /></Link></li>
                  <li><Link to="#" className="color-twitter"><i className="icon-twitter" /></Link></li>
                  <li><Link to="#" className="color-yt"><i className="icon-youtube" /></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area bg-image">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <p>Copyright 2024 Sreshta EduTech. All Rights Reserved</p>                          </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* End Footer Area  */}
  <div className="rn-progress-parent">
    <svg className="rn-back-circle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
</div>




</>


)
 



}

export default Footer;
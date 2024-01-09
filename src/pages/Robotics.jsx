import React from "react";


const Robotics= () => {
    return(

    <>

<div>
  {/*=====================================*/}
  {/*=       Breadcrumb Area Start      =*/}
  {/*=====================================*/}
  <div className="edu-breadcrumb-area">
    <div className="container">
      <div className="breadcrumb-inner">
        <div className="page-title">
          <h1 className="title">Robotics</h1>
        </div>
        <ul className="edu-breadcrumb">
          <li className="breadcrumb-item"><a href="index-one.html">Home</a></li>
          <li className="separator"><i className="icon-angle-right" /></li>
          <li className="breadcrumb-item active" aria-current="page">Robotics</li>
        </ul>
      </div>
    </div>
    <ul className="shape-group">
      <li className="shape-1">
        <span />
      </li>
      <li className="shape-2 scene"><img data-depth={2} src="assets/images/about/shape-13.png" alt="shape" /></li>
      <li className="shape-3 scene"><img data-depth={-2} src="assets/images/about/shape-15.png" alt="shape" /></li>
      <li className="shape-4">
        <span />
      </li>
      <li className="shape-5 scene"><img data-depth={2} src="assets/images/about/shape-07.png" alt="shape" /></li>
    </ul>
  </div>
  {/*=====================================*/}
  {/*=        Courses Area Start         =*/}
  {/*=====================================*/}
  <div className="edu-course-area course-area-1 gap-tb-text">
    <div className="container">
      <div className="edu-sorting-area">
        <div className="sorting-left">
          <h6 className="showing-text">We found <span>3</span> courses available for you</h6>
        </div>
        <div className="sorting-right">
          <div className="layout-switcher">
            <label>Grid</label>
            <ul className="switcher-btn">
              <li><a href="#" className="active"><i className="icon-53" /></a></li>
              <li><a href="#" className><i className="icon-54" /></a></li>
            </ul>
          </div>
          <div className="edu-sorting">
            <div className="icon"><i className="icon-55" /></div>
            <select className="edu-select">
              <option>Filters</option>
              <option>Low To High</option>
              <option>High Low To</option>
              <option>Last Viewed</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row g-5">
        {/* Start Single Course  */}
        <div className="col-md-6 col-lg-4 col-xl-3" data-sal-delay={100} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-course course-style-1 course-box-shadow hover-button-bg-white">
            <div className="inner">
              <div className="thumbnail">
                <a href="#">
                  <img src="assets/images/course/course-07.jpg" alt="Course Meta" />
                </a>
                <div className="time-top">
                  <span className="duration"><i className="icon-61" />7 Weeks</span>
                </div>
              </div>
              <div className="content">
                <span className="course-level">Beginner</span>
                <h6 className="title">
                  <a href="#">Basic Electronics</a>
                </h6>
                <div className="course-rating">
                  <div className="rating">
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                  </div>
                  <span className="rating-count">(5.0 /9 Rating)</span>
                </div>
                <div className="course-price">₹ 5000</div>
                <ul className="course-meta">
                  <li><i className="icon-24" />25 Lessons</li>
                </ul>
              </div>
            </div>
            <div className="course-hover-content-wrapper">
              <button className="wishlist-btn"><i className="icon-22" /></button>
            </div>
            <div className="course-hover-content-wrapper">
              <button className="wishlist-btn"><i className="icon-22" /></button>
            </div>
            <div className="course-hover-content">
              <div className="content">
                <button className="wishlist-btn"><i className="icon-22" /></button>
                <span className="course-level">Beginner</span>
                <h6 className="title">
                  <a href="#">Basic Electronics</a>
                </h6>
                <div className="course-rating">
                  <div className="rating">
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                  </div>
                  <span className="rating-count">(5.0 /9 Rating)</span>
                </div>
                <div className="course-price">₹ 5000</div>
                <p>Functional comprehension of fundamental gadgets, circuit building and circuit troubleshooting systems.</p>
                <ul className="course-meta">
                  <li><i className="icon-24" />25 Lessons</li>
                </ul>
                <a href="#" className="edu-btn btn-secondary btn-small">Enrolled <i className="icon-4" /></a>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Course  */}
        {/* Start Single Course  */}
        <div className="col-md-6 col-lg-4 col-xl-3" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-course course-style-1 course-box-shadow hover-button-bg-white">
            <div className="inner">
              <div className="thumbnail">
                <a href="#">
                  <img src="assets/images/course/course-04.jpg" alt="Course Meta" />
                </a>
                <div className="time-top">
                  <span className="duration"><i className="icon-61" />9 Weeks</span>
                </div>
              </div>
              <div className="content">
                <span className="course-level">Beginner</span>
                <h6 className="title">
                  <a href="#">Playstation with Sensor Kit</a>
                </h6>
                <div className="course-rating">
                  <div className="rating">
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                  </div>
                  <span className="rating-count">(4.9 /7 Rating)</span>
                </div>
                <div className="course-price">₹ 10000</div>
                <ul className="course-meta">
                  <li><i className="icon-24" />15 Lessons</li>
                </ul>
              </div>
            </div>
            <div className="course-hover-content-wrapper">
              <button className="wishlist-btn"><i className="icon-22" /></button>
            </div>
            <div className="course-hover-content">
              <div className="content">
                <button className="wishlist-btn"><i className="icon-22" /></button>
                <span className="course-level">Intermediate</span>
                <h6 className="title">
                  <a href="#">Playstation with Sensor Kit</a>
                </h6>
                <div className="course-rating">
                  <div className="rating">
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                  </div>
                  <span className="rating-count">(4.9 /7 Rating)</span>
                </div>
                <div className="course-price">₹ 10000</div>
                <p>This level takes you through hands on understanding of programming a robot with “Embedded C”</p>
                <ul className="course-meta">
                  <li><i className="icon-24" />15Lessons</li>
                </ul>
                <a href="#" className="edu-btn btn-secondary btn-small">Enrolled <i className="icon-4" /></a>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Course  */}
        {/* Start Single Course  */}
        <div className="col-md-6 col-lg-4 col-xl-3" data-sal-delay={200} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-course course-style-1 course-box-shadow hover-button-bg-white">
            <div className="inner">
              <div className="thumbnail">
                <a href="#">
                  <img src="assets/images/course/course-05.jpg" alt="Course Meta" />
                </a>
                <div className="time-top">
                  <span className="duration"><i className="icon-61" />4 Weeks</span>
                </div>
              </div>
              <div className="content">
                <span className="course-level">Intermediate</span>
                <h6 className="title">
                  <a href="#">Codey Kit</a>
                </h6>
                <div className="course-rating">
                  <div className="rating">
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                  </div>
                  <span className="rating-count">(5.0 /7 Rating)</span>
                </div>
                <div className="course-price">₹ 12000</div>
                <ul className="course-meta">
                  <li><i className="icon-24" />8 Lessons</li>
                  <li><i className="icon-25" />20 Students</li>
                </ul>
              </div>
            </div>
            <div className="course-hover-content-wrapper">
              <button className="wishlist-btn"><i className="icon-22" /></button>
            </div>
            <div className="course-hover-content">
              <div className="content">
                <button className="wishlist-btn"><i className="icon-22" /></button>
                <span className="course-level">Intermediate</span>
                <h6 className="title">
                  <a href="#">Codey Kit</a>
                </h6>
                <div className="course-rating">
                  <div className="rating">
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                  </div>
                  <span className="rating-count">(5.0 /7 Rating)</span>
                </div>
                <div className="course-price">₹ 12000</div>
                <p>This level takes you through hands on understanding of programming a robot with “Embedded C”</p>
                <ul className="course-meta">
                  <li><i className="icon-24" />8 Lessons</li>
                  <li><i className="icon-25" />20 Students</li>
                </ul>
                <a href="#" className="edu-btn btn-secondary btn-small">Enrolled <i className="icon-4" /></a>
              </div>
            </div>
          </div>  
        </div>
        {/* End Single Course  */}
      </div>
      <div className="load-more-btn" data-sal-delay={100} data-sal="slide-up" data-sal-duration={1200}>
        <a href="#" className="edu-btn">Load More <i className="icon-56" /></a>
      </div>
    </div>
  </div>
  {/* End Course Area */}
</div>




    </>

    )
}

export default Robotics;
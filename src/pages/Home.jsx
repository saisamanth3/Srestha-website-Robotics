import React from "react";
import {Link} from 'react-router-dom';


const Home = () => {
     return(
       <>
    
    <div>
  {/*=====================================*/}
  {/*=       Hero Banner Area Start      =*/}
  {/*=====================================*/}
  <div className="hero-banner hero-style-7">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="banner-content">
            <h1 className="title" data-sal-delay={100} data-sal="slide-up" data-sal-duration={1000}>A Brighter <br />Future For Kids <br /> Robotics - IOT</h1>
            <div className="banner-btn" data-sal-delay={400} data-sal="slide-up" data-sal-duration={1000}>
            </div>
            <div className="features-list" data-sal-delay={400} data-sal="slide-up" data-sal-duration={1000}>
              <div className="features-box color-extra02-style Sreshta EduTech-svg-animate">
                <div className="icon">
                  <img className="svgInject" src="assets/images/animated-svg-icons/online-class.svg" alt="animated icon" />
                  {/* <i class="icon-5"></i> */}
                </div> 
                <div className="content">
                  <h5 className="title">3,020 <br />Online Courses</h5>
                </div>
              </div>
              <div className="features-box color-secondary-style Sreshta EduTech-svg-animate">
                <div className="icon">
                  <img className="svgInject" src="assets/images/animated-svg-icons/instructor.svg" alt="animated icon" />
                  {/* <i class="icon-6"></i> */}
                </div>
                <div className="content">
                  <h5 className="title">Top <br />Instructors</h5>
                </div>
              </div>
              <div className="features-box color-primary-style Sreshta EduTech-svg-animate">
                <div className="icon">
                  <img className="svgInject" src="assets/images/animated-svg-icons/certificate.svg" alt="animated icon" />
                  {/* <i class="icon-7"></i> */}
                </div>
                <div className="content">
                  <h5 className="title">Online <br /> Certifications </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="banner-gallery">
      <div className="thumbnail thumbnail-1" data-sal-delay={500} data-sal="slide-up" data-sal-duration={1000}>
        <img src="assets/images/banner/kid-3.png" alt="Girl Image" />
      </div>
      <div className="thumbnail thumbnail-2" data-sal-delay={500} data-sal="slide-down" data-sal-duration={1000}>
        <img src="assets/images/banner/kid-4.png" alt="Girl Image" />
      </div>
    </div>
    <ul className="shape-group">
      <li className="shape-1 scene" data-sal-delay={1000} data-sal="fade" data-sal-duration={1000}>
        <img data-depth={2} src="assets/images/banner/icon-3.png" alt="Shape" />
      </li>
      <li className="shape-2 scene" data-sal-delay={1000} data-sal="fade" data-sal-duration={1000}>
        <img data-depth={-2} src="assets/images/banner/icon-1.png" alt="Shape" />
      </li>
      <li className="shape-3 scene" data-sal-delay={1000} data-sal="fade" data-sal-duration={1000}>
        <img data-depth={2} src="assets/images/banner/icon-5.png" alt="Shape" />
      </li>
      <li className="shape-4 scene" data-sal-delay={1000} data-sal="fade" data-sal-duration={1000}>
        <img data-depth={-2} src="assets/images/banner/icon-2.png" alt="Shape" />
      </li>
      <li className="shape-5 scene" data-sal-delay={1000} data-sal="fade" data-sal-duration={1000}>
        <img data-depth={2} src="assets/images/banner/icon-4.png" alt="Shape" />
      </li>
      <li className="shape-6" data-sal-delay={1000} data-sal="fade" data-sal-duration={1000}>
        <img className="rotateit" src="assets/images/about/shape-25.png" alt="Shape" />
      </li>
      <li className="shape-7" data-sal-delay={1000} data-sal="fade" data-sal-duration={1000}>
        <img className="rotateit" src="assets/images/about/shape-13.png" alt="Shape" />
      </li>
    </ul>
  </div>
  {/*=====================================*/}
  {/*=       About Us Area Start      	=*/}
  {/*=====================================*/}
  <div className="edu-about-area about-style-6">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <div className="about-image-gallery">
            <div className="main-img-1">
              <img src="assets/images/about/about-09.png" alt="About Image" />
            </div>
            <div className="main-img-2 bounce-slide">
              <img src="assets/images/about/about-10.png" alt="About Image" />
            </div>
            <ul className="shape-group">
              <li className="shape-1">
                <img src="assets/images/about/shape-11.png" alt="Shape" />
              </li>
              <li className="shape-2">
                <img src="assets/images/about/shape-12.png" alt="Shape" />
              </li>
              <li className="shape-3 scene">
                <img data-depth={1} src="assets/images/about/shape-13.png" alt="Shape" />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-content">
            <div className="section-title section-left" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
              <span className="pre-title pre-textsecondary">Welcome to the Sreshta EduTech</span>
              <h2 className="title">World of Robotics &amp; IOT</h2>
              <span className="shape-line"><i className="icon-19" /></span>
              <p>Discover a world of learning opportunities through our upcoming courses, where industry experts and thought leaders will guide you in acquiring new expertise, expanding your horizons, and reaching your full potential.</p>
            </div>
            <div className="about-mission" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
              <div className="row g-5 row--20">
                <div className="col-lg-6">
                  <h5 className="title">Our Vision</h5>
                  <p>We envision a future where Robotics and IoT seamlessly integrate into our world, enhancing efficiency, sustainability, and quality of life. Our commitment lies in harnessing the power of automation, connectivity, and intelligence to solve complex problems and create opportunities.</p>
                </div>
                <div className="col-lg-6">
                  <h5 className="title">Our Mission</h5>
                  <p><strong> Innovation:</strong> We relentlessly pursue innovation in Robotics and IoT, developing cutting-edge solutions that push the boundaries of what's possible. We cultivate a culture of curiosity and exploration, encouraging our team to dream big and take risks.</p>
                  <p> <strong>Education:</strong> We believe in the power of knowledge-sharing. We are committed to educating and inspiring the next generation of engineers, scientists, and innovators, equipping them with the skills to shape the future.</p>
                </div>
              </div>
            </div>
            <a href="#" className="edu-btn btn-curved" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>Get Start Today <i className="icon-4" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*=====================================*/}
  {/*=       Course Area Start      		=*/}
  {/*=====================================*/}
  {/* Start Course Area  */}
  <div className="edu-course-area course-area-7">
    <div className="container Sreshta EduTech-animated-shape">
      <div className="section-title section-center" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
        <span className="pre-title pre-textsecondary">Popular Courses</span>
        <h2 className="title">Pick A Course To Get Started</h2>
        <span className="shape-line"><i className="icon-19" /></span>
      </div>
      <div className="row g-5">
        {/* Start Single Course  */}
        <div className="col-12 col-lg-4 col-md-6" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-course course-style-7 bg-color-extra02">
            <div className="inner">
              <div className="thumbnail">
                <a href="basic-electronics.html">
                  <img src="assets/images/course/course-21.jpg" alt="Course Meta" />
                </a>
                <div className="course-price price-round">₹5K</div>
              </div>
              <div className="content">
                <span className="course-level">Beginner</span>
                <h5 className="title">
                  <a href="basic-electronics.html">Basic Electronics</a>
                </h5>
                <ul className="course-meta">
                  <li><i className="icon-24" />25 Lessons</li>
                </ul>
                <p>Functional comprehension of fundamental gadgets, circuit building and circuit troubleshooting systems.</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Course  */}
        {/* Start Single Course  */}
        <div className="col-12 col-lg-4 col-md-6" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-course course-style-7 bg-color-secondary">
            <div className="inner">
              <div className="thumbnail">
                <a href="playstation-sensorkit.html">
                  <img src="assets/images/course/course-22.jpg" alt="Course Meta" />
                </a>
                <div className="course-price price-round">₹10K</div>
              </div>
              <div className="content">
                <span className="course-level">Beginner</span>
                <h5 className="title">
                  <a href="playstation-sensorkit.html">Playstation with Sensor Kit
                  </a>
                </h5>
                <ul className="course-meta">
                  <li><i className="icon-24" />15 Lessons</li>
                </ul>
                <p>This level takes you through hands on understanding of programming a robot with “Embedded C”</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Course  */}
        {/* Start Single Course  */}
        <div className="col-12 col-lg-4 col-md-6" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-course course-style-7 bg-color-primary">
            <div className="inner">
              <div className="thumbnail">
                <a href="codeykit.html">
                  <img src="assets/images/course/course-23.jpg" alt="Course Meta" />
                </a>
                <div className="course-price price-round">₹12k</div>
              </div>
              <div className="content">
                <span className="course-level">Intermediate</span>
                <h5 className="title">
                  <a href="codeykit.html">Codey Kit</a>
                </h5>
                <ul className="course-meta">
                  <li><i className="icon-24" />32 Lessons</li>
                </ul>
                <p>This level takes you through hands on understanding of programming a robot with “Embedded C”</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Course  */}
      </div>
      <ul className="shape-group">
        <li className="shape-1 scene">
          <img data-depth={2} src="assets/images/banner/icon-3.png" alt="Shape" />
        </li>
        <li className="shape-2 scene">
          <img data-depth={-2} src="assets/images/banner/icon-2.png" alt="Shape" />
        </li>
      </ul>
    </div>
    <ul className="shape-group">
      <li className="shape-3 scene">
        <img data-depth={2} src="assets/images/banner/icon-4.png" alt="Shape" />
      </li>
    </ul>
  </div>
  {/* End Course Area */}
  {/*=====================================*/}
  {/*=====================================*/}
  {/*=       Why Choose Area Start       =*/}
  {/*=====================================*/}
  {/* Start Why Choose Area  */}
  <section className="why-choose-area-4 edu-section-gap">
    <div className="container Sreshta EduTech-animated-shape">
      <div className="section-title section-center" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
        <span className="pre-title">Why choose Sreshta EduTech</span>
        <h2 className="title">The Best <span className="color-secondary">Beneficial</span> Side <br /> of Sreshta EduTech</h2>
        <span className="shape-line"><i className="icon-19" /></span>
      </div>
      <div className="row g-5">
        <div className="col-lg-4" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
          <div className="why-choose-box-3 features-box color-primary-style">
            <div className="thumbnail">
              <img src="assets/images/others/why-choose-03.webp" alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <i className="icon-45" />
              </div>
              <h4 className="title">High Quality Courses</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
          <div className="why-choose-box-3 features-box color-secondary-style">
            <div className="thumbnail">
              <img src="assets/images/others/why-choose-04.webp" alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <i className="icon-46" />
              </div>  
              <h4 className="title">Life Time Access</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
          <div className="why-choose-box-3 features-box color-extra08-style">
            <div className="thumbnail">
              <img src="assets/images/others/why-choose-05.webp" alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <i className="icon-47" />
              </div>
              <h4 className="title">Expert Instructors</h4>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group">
        <li className="shape-1" data-sal-delay={500} data-sal="fade" data-sal-duration={200}>
          <img className="rotateit" src="assets/images/about/shape-13.png" alt="shape" />
        </li>
        <li className="shape-2 scene" data-sal-delay={500} data-sal="fade" data-sal-duration={200}>
          <span data-depth="0.85" />
        </li>
        <li className="shape-3 circle scene sal-animate" data-sal-delay={500} data-sal="fade" data-sal-duration={200}>
          <span data-depth="-2.3" />
        </li>
      </ul>
    </div>
  </section>
  {/* End Why Choose Area  */}
  {/*=====================================*/}
  {/*=       	Faq Area Start      	=*/}
  {/*=====================================*/}
  <div className="edu-faq-area faq-style-4">
    <div className="container">
      <div className="row g-5 row--45 align-items-end">
        <div className="col-lg-6">
          <div className="edu-faq-content">
            <div className="section-title section-left" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
              <span className="pre-title pre-textsecondary">Education For Everyone</span>
              <h2 className="title">Ages We Meet Kids Where They Are</h2>
              <span className="shape-line"><i className="icon-19" /></span>
            </div>
            <div className="faq-accordion" id="faq-accordion" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
              <div className="accordion">
                <div className="accordion-item">
                  <h5 className="accordion-header">
                    <button className="accordion-button style-extra02" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
                      Class 1 - 3
                    </button>
                  </h5>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faq-accordion">
                    <div className="accordion-body">
                      <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header">
                    <button className="accordion-button collapsed style-extra05" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false">
                      Class 4 - 7
                    </button>
                  </h5>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                    <div className="accordion-body">
                      <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header">
                    <button className="accordion-button collapsed style-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false">
                      Class 8 - 10
                    </button>
                  </h5>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                    <div className="accordion-body">
                      <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="faq-thumbnail">
            <div className="thumbnail">
              <img src="assets/images/faq/faq-08.jpg" alt="Faq Images" />
            </div>
            <ul className="shape-group">
              <li className="shape-1 scene">
                <img data-depth={1} src="assets/images/about/shape-12.png" alt="Shape Images" />
              </li>
              <li className="shape-2 scene">
                <img data-depth={-1} src="assets/images/about/shape-13.png" alt="Shape Images" />
              </li>
              <li className="shape-3 scene">
                <img data-depth={1} src="assets/images/faq/shape-15.png" alt="Shape Images" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*=====================================*/}
  {/*=       	Event Area Start      	=*/}
  {/*=====================================*/}
  {/* Start Event Area  */}
  <div className="edu-event-area event-area-3 bg-image">
    <div className="container Sreshta EduTech-animated-shape">
      <div className="section-title section-center" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
        <span className="pre-title pre-textsecondary">Discover Event</span>
        <h2 className="title">Join Our Upcoming Workshop</h2>
        <span className="shape-line"><i className="icon-19" /></span>
      </div>
      <div className="row g-5">
        {/* Start Event Grid  */}
        <div className="col-lg-6 col-12" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-event-list event-list-3 bg-style-extra02">
            <div className="inner">
              <div className="thumbnail">
                <a href="event-details.html">
                  <img src="assets/images/event/event-04.jpg" alt="Event Images" />
                </a>
              </div>
              <div className="content">
                <ul className="event-meta">
                  <li><i className="icon-27" />Nov 18, 2023</li>
                </ul>
                <h4 className="title"><a href="event-details.html">Annual Music Conference</a></h4>
                <span className="event-location"><i className="icon-40" />Ohio City, USA</span>
                <p>Lorem ipsum dolor sit amet consectur adipisicing elit.</p>
                <div className="read-more-btn">
                  <a className="edu-btn btn-medium curved-medium" href="event-details.html">Attend <i className="icon-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Event Grid  */}
        {/* Start Event Grid  */}
        <div className="col-lg-6 col-12" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-event-list event-list-3 bg-style-secondary">
            <div className="inner">
              <div className="thumbnail">
                <a href="event-details.html">
                  <img src="assets/images/event/event-05.jpg" alt="Event Images" />
                </a>
              </div>
              <div className="content">
                <ul className="event-meta">
                  <li><i className="icon-27" />Oct 10, 2023</li>
                </ul>
                <h4 className="title"><a href="event-details.html">Garden Camping Party</a></h4>
                <span className="event-location"><i className="icon-40" />Newyork City, USA</span>
                <p>Lorem ipsum dolor sit amet consectur adipisicing elit.</p>
                <div className="read-more-btn">
                  <a className="edu-btn btn-medium curved-medium" href="event-details.html">Attend <i className="icon-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Event Grid  */}
        {/* Start Event Grid  */}
        <div className="col-lg-6 col-12" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-event-list event-list-3 bg-style-extra05">
            <div className="inner">
              <div className="thumbnail">
                <a href="event-details.html">
                  <img src="assets/images/event/event-06.jpg" alt="Event Images" />
                </a>
              </div>
              <div className="content">
                <ul className="event-meta">
                  <li><i className="icon-27" />Dec 25, 2023</li>
                </ul>
                <h4 className="title"><a href="event-details.html">Caterpillars to Butterflies</a></h4>
                <span className="event-location"><i className="icon-40" />Washington D.C, USA</span>
                <p>Lorem ipsum dolor sit amet consectur adipisicing elit.</p>
                <div className="read-more-btn">
                  <a className="edu-btn btn-medium curved-medium" href="event-details.html">Attend <i className="icon-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Event Grid  */}
        {/* Start Event Grid  */}
        <div className="col-lg-6 col-12" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-event-list event-list-3 bg-style-primary">
            <div className="inner">
              <div className="thumbnail">
                <a href="event-details.html">
                  <img src="assets/images/event/event-07.jpg" alt="Event Images" />
                </a>
              </div>
              <div className="content">
                <ul className="event-meta">
                  <li><i className="icon-27" />Oct 28, 2023</li>
                </ul>
                <h4 className="title"><a href="event-details.html">Animal Petting Party</a></h4>
                <span className="event-location"><i className="icon-40" />Ohio City, USA</span>
                <p>Lorem ipsum dolor sit amet consectur adipisicing elit.</p>
                <div className="read-more-btn">
                  <a className="edu-btn btn-medium curved-medium" href="event-details.html">Attend <i className="icon-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Event Grid  */}
      </div>
      <ul className="shape-group">
        <li className="shape-1 scene">
          <img data-depth={2} src="assets/images/banner/icon-2.png" alt="Shape" />
        </li>
        <li className="shape-2 scene">
          <img data-depth={-2} src="assets/images/banner/icon-1.png" alt="Shape" />
        </li>
      </ul>
    </div>
  </div>
  {/* End Event Area  */}
  {/*=====================================*/}
  {/*=       Testimonial Area Start       =*/}
  {/*=====================================*/}
  {/* Start Testimonial Area  */}
  <section className="testimonial-area-6 gap-bottom-equal">
    <div className="container Sreshta EduTech-animated-shape">
      <div className="row row--40">
        <div className="col-lg-6">
          <div className="section-title section-left" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
            <span className="pre-title">Testimonials</span>
            <h2 className="title">What Our Students <br /> Have To Say</h2>
            <span className="shape-line"><i className="icon-19" /></span>
          </div>
          <div className="testimonial-activation-5 swiper ">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-slide testimonial-style-3">
                  <div className="content">
                    <div className="rating-icon">
                      <i className="icon-23" />
                      <i className="icon-23" />
                      <i className="icon-23" />
                      <i className="icon-23" />
                      <i className="icon-23" />
                    </div>
                    <p>“Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis sit nosrud citation laboris nisiste aliquip comodo perspiatix une omnis iste natus error sit voluptatem accusantium dolore que laudantum”.</p>
                    <div className="author-info">
                      <div className="thumb">
                        <img src="assets/images/testimonial/testimonial-01.png" alt="Testimonial" />
                      </div>
                      <div className="info">
                        <h5 className="title">Haley Bennet</h5>
                        <span className="subtitle">Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-slide testimonial-style-3">
                  <div className="content">
                    <div className="rating-icon">
                      <i className="icon-23" />
                      <i className="icon-23" />
                      <i className="icon-23" />
                      <i className="icon-23" />
                      <i className="icon-23" />
                    </div>
                    <p>“Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis sit nosrud citation laboris nisiste aliquip comodo perspiatix une omnis iste natus error sit voluptatem accusantium dolore que laudantum”.</p>
                    <div className="author-info">
                      <div className="thumb">
                        <img src="assets/images/testimonial/testimonial-02.png" alt="Testimonial" />
                      </div>
                      <div className="info">
                        <h5 className="title">Richard Gere</h5>
                        <span className="subtitle">Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-slide testimonial-style-3">
                  <div className="content">
                    <div className="rating-icon">
                      <i className="icon-23" />
                      <i className="icon-23" />
                      <i className="icon-23" />
                      <i className="icon-23" />
                      <i className="icon-23" />
                    </div>
                    <p>“Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis sit nosrud citation laboris nisiste aliquip comodo perspiatix une omnis iste natus error sit voluptatem accusantium dolore que laudantum”.</p>
                    <div className="author-info">
                      <div className="thumb">
                        <img src="assets/images/testimonial/testimonial-03.png" alt="Testimonial" />
                      </div>
                      <div className="info">
                        <h5 className="title">Megan Foxx</h5>
                        <span className="subtitle">Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="video-gallery video-gallery-5" data-sal-delay={150} data-sal="slide-left" data-sal-duration={800}>
            <div className="thumbnail">
              <img src="assets/images/others/video-03.webp" alt="Thumb" />
              <a href="https://www.youtube.com/watch?v=PICj5tr9hcc" className="video-play-btn video-popup-activation">
                <i className="icon-18" />
              </a>
            </div>
            <div className="content">
              <h4 className="title">Take a Video Tour to Learn Intro of Campus</h4>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group">
        <li className="shape-2 scene" data-sal-delay={200} data-sal="fade" data-sal-duration={1000}>
          <img data-depth={2} src="assets/images/about/shape-25.png" alt="Shape" />
        </li>
        <li className="shape-3 scene" data-sal-delay={200} data-sal="fade" data-sal-duration={1000}>
          <span data-depth={-1} />
        </li>
      </ul>
    </div>
    <ul className="shape-group">
      <li className="shape-1" data-sal-delay={200} data-sal="fade" data-sal-duration={1000}>
        <img className="rotateit" src="assets/images/about/shape-13.png" alt="Shape" />
      </li>
    </ul>
  </section>
  {/* End Testimonial Area  */}
  {/*=====================================*/}
  <br />
  {/*News & Releases area start */}
  <section className="associated-area testimonial-area_v2 pb-60">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title title-center mb-50" data-aos="fade-up">
            <h2 className="title">
              News &amp; <span> Releases</span>
              <span className="shape-line"><i className="icon-19" /></span>
            </h2>
            <br />
            <section className="section-container">
              <div className="product-list-container">
                <div className="product-list" id="productList">
                  {/* News 1 */}
                  <div className="product-card">
                    <div className="new-badge">New</div>
                    <img src="assets/images/news/News1.jpg" alt="News 1 Image" />
                    <h3>Digital Learning</h3>
                  </div>
                  {/* News 2 */}
                  <div className="product-card">
                    <img src="assets/images/news/News2.jpg" alt="News 2 Image" />
                    <h3>Forbes</h3>
                  </div>
                  {/* News 3 */}
                  <div className="product-card">
                    <div className="new-badge">New</div>
                    <img src="assets/images/news/News3.jpg" alt="News 3 Image" />
                    <h3>E-Learning</h3>
                  </div>
                  {/* News 4 */}
                  <div className="product-card">
                    <img src="assets/images/news/News4.jpg" alt="News 4 Image" />
                    <h3>Teachers <br />Magazine</h3>
                  </div>
                </div>
              </div>
              <div id="scrollRight" className="scroll-icon">
                <i className="fas fa-arrow-right" />
              </div>
            </section></div>
        </div></div></div></section>
  {/* News & Releases-area end */}
  {/*=      		Blog Area Start   		=*/}
  {/*=====================================*/}
  {/* Start Blog Area  */}
  <div className="edu-blog-area blog-area-4 edu-section-gap">
    <div className="container">
      <div className="section-title section-center" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
        <span className="pre-title pre-textsecondary">Our Articles</span>
        <h2 className="title">Check Out Our Latest Blog</h2>
        <span className="shape-line"><i className="icon-19" /></span>
      </div>
      <div className="row g-5">
        {/* Start Blog Grid  */}
        <div className="col-lg-4 col-md-6 col-12" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-blog blog-style-3">
            <div className="inner">
              <div className="thumbnail">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-07.jpg" alt="Blog Images" />
                </a>
                <div className="read-more-btn">
                  <a className="btn-icon-round" href="blog-details.html"><i className="icon-4" /></a>
                </div>
              </div>
              <div className="content">
                <div className="category-wrap">
                  <a href="#" className="blog-category">ONLINE</a>
                </div>
                <h5 className="title"><a href="blog-details.html">Do You Play Well With Other Children?</a></h5>
                <ul className="blog-meta">
                  <li><i className="icon-27" />Oct 10, 2021</li>
                  <li><i className="icon-28" />Com 09</li>
                </ul>
                <p>Lorem ipsum dolor sit amet cons tetur adipisicing sed.</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Grid  */}
        {/* Start Blog Grid  */}
        <div className="col-lg-4 col-md-6 col-12" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-blog blog-style-3">
            <div className="inner">
              <div className="thumbnail">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-08.jpg" alt="Blog Images" />
                </a>
                <div className="read-more-btn">
                  <a className="btn-icon-round" href="blog-details.html"><i className="icon-4" /></a>
                </div>
              </div>
              <div className="content">
                <div className="category-wrap">
                  <a href="#" className="blog-category">HISTORY</a>
                </div>
                <h5 className="title"><a href="blog-details.html">Early History of the United States</a></h5>
                <ul className="blog-meta">
                  <li><i className="icon-27" />Oct 10, 2021</li>
                  <li><i className="icon-28" />Com 09</li>
                </ul>
                <p>Lorem ipsum dolor sit amet cons tetur adipisicing sed.</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Grid  */}
        {/* Start Blog Grid  */}
        <div className="col-lg-4 col-md-6 col-12" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-blog blog-style-3">
            <div className="inner">
              <div className="thumbnail">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-09.jpg" alt="Blog Images" />
                </a>
                <div className="read-more-btn">
                  <a className="btn-icon-round" href="blog-details.html"><i className="icon-4" /></a>
                </div>
              </div>
              <div className="content">
                <div className="category-wrap">
                  <a href="#" className="blog-category">BASEBALL</a>
                </div>
                <h5 className="title"><a href="blog-details.html">What Collecting Baseball Cards Taught Me</a></h5>
                <ul className="blog-meta">
                  <li><i className="icon-27" />Oct 10, 2021</li>
                  <li><i className="icon-28" />Com 09</li>
                </ul>
                <p>Lorem ipsum dolor sit amet cons tetur adipisicing sed.</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Grid  */}
      </div>
    </div>
  </div>
  {/* End Blog Area  */}
  {/*=====================================*/}
  {/*=      		CTA Area Start   		=*/}
  {/*=====================================*/}
  {/* Start Ad Banner Area  */}
  <div className="edu-cta-banner-area cta-banner-3 bg-image">
    <div className="container Sreshta EduTech-animated-shape">
      <div className="edu-cta-banner">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title section-center" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
              <h2 className="title">Quickly Get Updates About Your Class Event and News!</h2>
              <div className="newsletter-form">
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Get started now" />
                  <button className="edu-btn btn-curved" type="button">Subscribe <i className="icon-4" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group">
        <li className="shape-3">
          <img src="assets/images/banner/icon-1.png" alt="shape" />
        </li>
        <li className="shape-4">
          <img src="assets/images/banner/icon-2.png" alt="shape" />
        </li>
      </ul>
    </div>
  </div>
</div>



       
       </>



     )

}

export default Home;
import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

const Home = (openNav,closeNav) => {
  return (
    <div>
     
      <div className="header_section">
         <div className="banner_section">
            <div className="container-fluid padding_0">
               <div id="my_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="padding_left_0">
                                 <h1 className="retailer_text">Get Hired or <br/>Hire people <br/>for free!</h1>
                                 <p className="search_text" style={{marginTop:"50px"}}>Are you looking for your next career move or seeking 
                                  the perfect candidate to join your team? Look no further! At FreeHireHub, 
                                  we connect talented job seekers with employers eager to find the right fit – all for free! </p>
                                 <div className="btn_main" style={{marginTop:"50px"}}>
                                    <div className="more_bt"><Link to="/employer/dashboard"> Hire talent</Link></div>
                                    <div className="contact_bt"><Link to="/employee/feed">Get Job Now</Link></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div><img src="images/img-1.png" className="image_1"/></div>
                           </div>
                        </div>
                     </div>
                
                  </div>
               </div>
            </div>
         </div>
    </div>
    
    <div className="advisor_section" style={{marginTop:"50px"}}>
         <div className="container">
            <h1 className="what_text">What We Do</h1>
         </div>
      </div>

      <div className="advisor_section_2 layout_padding">
         <div className="container">
            <div className="box_section">
               <div className="row">
                  <div className="col-lg-4 col-sm-12">
                     <div className="box_main">
                        <div className="image_3"></div>
                        <h4 className="consultative_text">For Job Seekers:</h4>
                        <p className="readable_text">Discover a wealth of opportunities across various industries. Create a profile, upload your resume, 
                          and start applying for jobs that match your skills and aspirations. Whether you're a seasoned professional or just starting 
                          your career, FreeHireHub is here to help you achieve your goals.</p>
                     </div>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                     <div className="box_main active">
                        <div className="image_4 active"></div>
                        <h4 className="consultative_text active">For Employers:</h4>
                        <p className="readable_text active">Find the ideal candidates for your job openings without any cost. Post job listings, different job categories, search with filters and the key words,
                          browse through potential hires, and connect with top talent. Our platform is designed to make your hiring process efficient and hassle-free.</p>
                     </div>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                     <div className="box_main">
                        <div className="image_5"></div>
                        <h4 className="consultative_text">For Freelancers:</h4>
                        <p className="readable_text">Are you a freelancer looking for new gigs? FreeHireHub offers a dedicated space for freelancers to showcase their skills 
                          and connect with potential clients. Whether you're a designer, writer, developer, or any other type of freelancer, you can find projects that match your expertise.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="about_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-6">
                  <div><img src="images/img-8.png" className="image_8"/></div>
               </div>
               <div className="col-sm-6">
                  <h1 className="about_taital">About FreeHireHub</h1>
                  <p className="lorem_text">At FreeHireHub, we believe in the power of connections. Our mission is to bridge the gap between job seekers, employers, 
                    and freelancers by providing a free, user-friendly platform where talent meets opportunity</p>
                  <div className="more_bt"><a href="#">Read More </a></div>
               </div>
            </div>
         </div>
      </div>

      <div className="portfolio_section_2 layout_padding">
            <div className="container">
               <h1 className="best_taital">We Are Providing
                  Best Business Service
               </h1>
               <p className="best_text">Whether you’re looking to advance your career, find the perfect candidate, or secure your next freelance project, FreeHireHub is here to help you succeed. 
                Join our growing community today and be a part of a platform that values your aspirations and supports your goals.</p>
               <div className="get_bt"><a href="#">Get A Quote</a></div>
            </div>
         </div>

         <div className="client_section layout_padding">
         <div className="container">
            <h1 className="what_text">What Is Says Our Clients</h1>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
               <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
               </ol>
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="client_section_2 layout_padding">
                        <div className="row">
                           <div className="col-lg-4 col-sm-12">
                              <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                              <div className="image_16"><img src="images/img-16.png"/></div>
                              <div className="adipiscing_text">Adipiscing<br/>Magna</div>
                           </div>
                           <div className="col-lg-4 col-sm-12">
                              <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                              <div className="image_16"><img src="images/img-17.png"/></div>
                              <div className="adipiscing_text">Adipiscing<br/>Magna</div>
                           </div>
                           <div className="col-lg-4 col-sm-12">
                              <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                              <div className="image_16"><img src="images/img-18.png"/></div>
                              <div className="adipiscing_text">Adipiscing<br/>Magna</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="client_section_2 layout_padding">
                        <div className="row">
                           <div className="col-lg-4 col-sm-12">
                              <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                              <div className="image_16"><img src="images/img-16.png"/></div>
                              <div className="adipiscing_text">Adipiscing<br/>Magna</div>
                           </div>
                           <div className="col-lg-4 col-sm-12">
                              <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                              <div className="image_16"><img src="images/img-17.png"/></div>
                              <div className="adipiscing_text">Adipiscing<br/>Magna</div>
                           </div>
                           <div className="col-lg-4 col-sm-12">
                              <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                              <div className="image_16"><img src="images/img-18.png"/></div>
                              <div className="adipiscing_text">Adipiscing<br/>Magna</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="client_section_2 layout_padding">
                        <div className="row">
                           <div className="col-lg-4 col-sm-12">
                              <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                              <div className="image_16"><img src="images/img-16.png"/></div>
                              <div className="adipiscing_text">Adipiscing<br/>Magna</div>
                           </div>
                           <div className="col-lg-4 col-sm-12">
                              <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                              <div className="image_16"><img src="images/img-17.png"/></div>
                              <div className="adipiscing_text">Adipiscing<br/>Magna</div>
                           </div>
                           <div className="col-lg-4 col-sm-12">
                              <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                              <div className="image_16"><img src="images/img-18.png"/></div>
                              <div className="adipiscing_text">Adipiscing<br/>Magna</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

         <div className="footer_section layout_padding" style={{marginTop:"50px"}}>
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-sm-6">
                  <h4 className="address_text">ADDRESS</h4>
                  <p className="simply_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  </p>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <h4 className="address_text">QUICK LINKS</h4>
                  <div className="footer_menu_main">
                     <div className="footer_menu">
                        <ul>
                           <li><a href="index.html.html">Home</a></li>
                           <li><a href="blog.html">Blog</a></li>
                           <li><a href="about.html">About</a></li>
                           <li><a href="services.html">Services</a></li>
                           <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-sm-12">
                  <div className="newsletter_section">
                     <div className="newsletter_left">
                        <h4 className="address_text">Newsletter</h4>
                     </div>
                     <div className="newsletter_right">
                        <div className="social_icon">
                           <ul>
                              <li><a href="#"><img src="images/fb-icon.png"/></a></li>
                              <li><a href="#"><img src="images/twitter-icon.png"/></a></li>
                              <li><a href="#"><img src="images/instagram-icon.png"/></a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <input type="text" className="mail_bt" placeholder="Enter Your Email" name="Enter Your Email"/>
                  <input type="text" className="mail_bt" placeholder="Phone" name="Phone"/>
                  <div className="subscribe_bt"><a href="#">Subscribe</a></div>
               </div>
            </div>
         </div>
      </div>

    </div>

    
    
  );
};

export default Home;

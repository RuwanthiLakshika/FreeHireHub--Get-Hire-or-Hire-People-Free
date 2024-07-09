import React from 'react'

function Footer() {
  return (
    <>
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
                </div>
             </div>
             <input type="text" className="mail_bt" placeholder="Enter Your Email" name="Enter Your Email"/>
             <input type="text" className="mail_bt" placeholder="Phone" name="Phone"/>
             <div className="subscribe_bt"><a href="#">Subscribe</a></div>
          </div>
       </div>
    </div>
 </div>
</>

);
}

export default Footer
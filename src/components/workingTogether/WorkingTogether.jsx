import React from "react";
import "./WorkingTogether.css";
//img
import contactUsImage from "../../assets/contactUs/Image.png";
import WhatsApp from "../../assets/logos/Whatsapp.svg";
import Phone from "../../assets/logos/Phone.svg";
import Facebook from "../../assets/contactUs/Facebook.svg";
import Twitter from "../../assets/contactUs/Twitter.svg";
import LinkedIn from "../../assets/contactUs/LinkedIn.svg";
import Instagram from "../../assets/contactUs/Instagram.svg";
import YouTube from "../../assets/contactUs/YouTube.svg";

const WorkingTogether = () => {
  return (
    <div className="contact-interested container dark-blue">
      <div className="contact-address">
        <h3 className="poppins main-title-second ">
          Interested in <span className="middle-blue">working together?</span>
        </h3>

        <div className="contact-location">
          <h4>Our offices:</h4>
          <h5>Leipzig, Germany</h5>
          <h5>Bishkek, the Kyrgyz Republic</h5>
        </div>

        <div className="contact-location">
          <h4>Contact us:</h4>
          <h5 >team@bicycle-dev.com</h5>
          <div className="contact-us">
            <div className="contact-tel">
         
                <img src={Phone} alt="" />
         
                <img src={WhatsApp} alt="" />
        
              <h5>+49 177 470 54 40</h5>
            </div>
          </div>
          <div className="contact-us">
            <div className="contact-tel">
           
                {" "}
                <img src={Phone} alt="" />
       
       
                {" "}
                <img src={WhatsApp} alt="" />
   

              <h5>+49 177 557 11 32</h5>
            </div>
          </div>
        </div>

        <div className="contact-socials">
          <a className="contact-logo contact-logo-big" href="#">
            <img src={Facebook} alt="" />
          </a>
          <a className="contact-logo-big contact-logo" href="#">
            <img src={Twitter} alt="" />
          </a>
          <a className="contact-logo-big contact-logo" href="#">
            <img src={Instagram} alt="" />
          </a>
          <a className="contact-logo contact-logo-big" href="#">
            <img src={LinkedIn} alt="" />
          </a>
          <a className="contact-logo contact-logo-big" href="#">
            <img src={YouTube} alt="" />
          </a>
        </div>
      </div>

      <div className="contact-img">
        <img src={contactUsImage} alt="contactImg " />
      </div>
    </div>
  );
};

export default WorkingTogether;

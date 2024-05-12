import React from "react";
import "../styles/Services.css";
import { NavLink } from "react-router-dom";
import Expertise from "../components/expertise/Expertise";
import Slider from "../components/slider/Slider";
import ItOutstaffing from "../components/itOutstaff/ItOutstaffing";
import DevOperations from "../components/ui/devOperations/DevOperations";

const Services = () => {
  return (
    <div>
      <div className="services">
        <div className="container">
          <div className="hero-services">
            <h2 className="main-title poppins dark-blue">
              Elevate <br />
              Your Efficiency:
            </h2>
            <div className="main-title-info services-info">
              Tailored IT Solutions with Outsourcing & Outstaffing Excellence!
            </div>
            <button className="main-btn">
              <NavLink to="/contacts">Contacts</NavLink>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <Expertise />
      </div>
      <Slider />
      <div className="container">
        <div className="it-outsourcing">
          <div className="main-title-second poppins middle-blue">
            IT-outsourcing
          </div>
          <p className="it-outsourcing-info main-text-h3 dark-medium">
            Combining your ideas with our technical expertise, we develop a
            customized (unique) software product or implement creative ICT
            project for advancement and internationalization of your
            business.Tailoring our approach to your needs and expectations, we
            can also take charge of day-to-day IT functions by constructing
            transparent and secure technical operations and processes for smooth
            functioning of your company.We offer a wide range of ICT services
            including software (web and App) development, IT infrastructure
            management, database and data center operations, technical support
            (network maintenance and technical security support) etc.
          </p>
          <button className="main-btn ">
            <NavLink to="/contacts">Contact us</NavLink>
          </button>
        </div>
      </div>
      <ItOutstaffing />
      <DevOperations />
    </div>
  );
};

export default Services;

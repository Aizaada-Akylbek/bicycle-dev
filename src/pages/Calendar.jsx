import React from "react";
import { NavLink } from "react-router-dom";
import EmployeesBtn from "../components/ui/employeesBtn/EmployeesBtn";
import CareerBtn from "../components/ui/careerBtn/CareerBtn";
import AppCalendar from "../components/appCalendar/AppCalendar";
import "../styles/Calendar.css";
import DevOperations from "../components/ui/devOperations/DevOperations";

const Calendar = () => {
  return (
    <div className="container">
      <div className="hero-calendar dark-blue">
        <h2 className="main-title poppins">
          Office ipsum you must be muted. Who's
        </h2>
        <p className="main-title-info">
          We help companies reach their potential through a combination of
          design and digital solutions.
        </p>
        <NavLink>
          <button className="main-btn calendar-btn">Label</button>
        </NavLink>
        <div className="hero-calendar-btns">
          <EmployeesBtn />
          <CareerBtn />
        </div>
        <div className="year-calendar">
          <AppCalendar />
        </div>
        <div className="calendar-office">
          <h4>Office ipsum you must be muted. Activities just.</h4>
          <p>
            Office ipsum you must be muted. Users an meat ocean regroup nobody.
            Staircase ui shoulder squad hear reality club previous would. Savvy
            production wheel would 4-blocker inclusion were can't tiger. Product
            stand knowledge keywords commitment is cross-pollination is we. Out
            fruit better underlying activities floor. Well.
          </p>

          <p>
            Office ipsum you must be muted. Asserts effects winning hours book
            they nobody silently good. Ask live nor cc business. Inclusion let's
            value-added strategy then no identify algorithm organic lean.
            Slipstream marginalised indicators move here be high-level canatics
            nobody. Impact let's hiring protocol done strategies hear are third.
            Innovation better don't need uat churning activities requirements.
            Red-flag on globalize meat i'm wheel. Synergy.
          </p>
        </div>
        <DevOperations />
      </div>
    </div>
  );
};

export default Calendar;

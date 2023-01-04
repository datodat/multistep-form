import { useState, useEffect } from "react";
import Pages from "../../UI/Pages/Pages";
// Css
import "./PlanPage.css";
import "../../UI/Pages/Pages.css";
// Logos
import arcadeLogo from "../../../images/icon-arcade.svg";
import advancedLogo from "../../../images/icon-advanced.svg";
import proLogo from "../../../images/icon-pro.svg";

const PlanPage = ({ planNextHandler, planBackHandler }) => {
  const [toggler, setToggler] = useState("monthly");
  const [plan, setPlan] = useState("arcade");

  const handlePlanPage = () => {
    planNextHandler({ plan, service: toggler });
  };

  return (
    <Pages>
      <div>
        <h3 className="pages-header">Select your plan</h3>
        <p className="pages-header-p">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="plan-page">
        <div className="plan-page__plan-div">
          <div
            style={{
              borderColor:
                plan === "arcade"
                  ? "hsl(243, 100%, 62%)"
                  : "hsl(231, 11%, 63%)",
              backgroundColor:
                plan === "arcade" ? "hsl(217, 100%, 97%)" : "transparent",
            }}
            onClick={() => setPlan("arcade")}
          >
            <img src={arcadeLogo} alt="arcade-logo" />
            <h6>arcade</h6>
            <p className="price">{toggler === "yearly" ? "$90/yr" : "$9/mo"}</p>
            {toggler === "yearly" && <p className="last-p">2 months free</p>}
          </div>
          <div
            style={{
              borderColor:
                plan === "advanced"
                  ? "hsl(243, 100%, 62%)"
                  : "hsl(231, 11%, 63%)",
              backgroundColor:
                plan === "advanced" ? "hsl(217, 100%, 97%)" : "transparent",
            }}
            onClick={() => setPlan("advanced")}
          >
            <img src={advancedLogo} alt="advanced-logo" />
            <h6>advanced</h6>
            <p className="price">{toggler === "yearly" ? "$120/yr" : "$12/mo"}</p>
            {toggler === "yearly" && <p className="last-p">2 months free</p>}
          </div>
          <div
            style={{
              borderColor:
                plan === "pro" ? "hsl(243, 100%, 62%)" : "hsl(231, 11%, 63%)",
              backgroundColor:
                plan === "pro" ? "hsl(217, 100%, 97%)" : "transparent",
            }}
            onClick={() => setPlan("pro")}
          >
            <img src={proLogo} alt="pro-logo" />
            <h6>pro</h6>
            <p className="price">{toggler === "yearly" ? "$150/yr" : "$15/mo"}</p>
            {toggler === "yearly" && <p className="last-p">2 months free</p>}
          </div>
        </div>
        <div className="toggler-div">
          <p className={`toggler-p ${toggler === "monthly" ? "active" : ""}`}>
            monthly
          </p>
          <span
            className="toggler-span"
            onClick={() =>
              setToggler((i) => (i === "monthly" ? "yearly" : "monthly"))
            }
          >
            <span
              className={`inner-span ${toggler === "monthly" ? "active" : ""}`}
            ></span>
            <span
              className={`inner-span ${toggler === "yearly" ? "active" : ""}`}
            ></span>
          </span>
          <p className={`toggler-p ${toggler === "yearly" ? "active" : ""}`}>
            yearly
          </p>
        </div>
        <div className="buttons-div">
          <button className="go-back-btn" onClick={planBackHandler}>
            go back
          </button>
          <button className="next-step-btn" onClick={handlePlanPage}>
            next step
          </button>
        </div>
      </div>
    </Pages>
  );
};

export default PlanPage;

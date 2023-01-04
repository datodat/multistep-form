import { useState } from "react";
import Pages from "../../UI/Pages/Pages";
// Css
import "../../UI/Pages/Pages.css";
import "./AddonsPage.css";

const AddonsPage = () => {
  const [services, setServices] = useState(false);
  const [storage, setStorage] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <Pages>
      <div>
        <h3 className="pages-header">Pick add-ons</h3>
        <p className="pages-header-p">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="addons-page">
        <div className="addons-wrapper">
          <div
            style={{
              backgroundColor: services ? "hsl(217, 100%, 97%)" : "transparent",
              borderColor: services
                ? "hsl(243, 100%, 62%)"
                : "hsl(231, 11%, 63%)",
            }}
            onClick={() => setServices((i) => !i)}
          >
            <input
              type="checkbox"
              value={services}
              checked={services ? true : false}
            />
            <div>
              <h6>Online service</h6>
              <p>Access to multiplayer games</p>
            </div>
            <div className="addons-price">+$1/mo</div>
          </div>
          <div
            style={{
              backgroundColor: storage ? "hsl(217, 100%, 97%)" : "transparent",
              borderColor: storage
                ? "hsl(243, 100%, 62%)"
                : "hsl(231, 11%, 63%)",
            }}
            onClick={() => setStorage((i) => !i)}
          >
            <input
              type="checkbox"
              value={storage}
              checked={storage ? true : false}
            />
            <div>
              <h6>Larger storage</h6>
              <p>Extra 1TB of cloud save</p>
            </div>
            <div className="addons-price">+$2/mo</div>
          </div>
          <div
            style={{
              backgroundColor: profile ? "hsl(217, 100%, 97%)" : "transparent",
              borderColor: profile
                ? "hsl(243, 100%, 62%)"
                : "hsl(231, 11%, 63%)",
            }}
            onClick={() => setProfile((i) => !i)}
          >
            <input
              type="checkbox"
              value={profile}
              checked={profile ? true : false}
            />
            <div>
              <h6>Customizable profile</h6>
              <p>Custom theme on your profile</p>
            </div>
            <div className="addons-price">+$2/mo</div>
          </div>
        </div>
        <div className="buttons-div">
          <button className="go-back-btn">Go Back</button>
          <button className="next-step-btn">next step</button>
        </div>
      </div>
    </Pages>
  );
};

export default AddonsPage;

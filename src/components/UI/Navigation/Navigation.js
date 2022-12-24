// Css
import "./Navigation.css";
// Image
import navImage from "../../../images/bg-sidebar-desktop.svg";

const Navigation = ({ pageHandler, activePage }) => {
  return (
    <div className="navigation">
      {/* Image */}
      <img src={navImage} alt="background-image" />
      {/* Navigation */}
      <div className="navigation-div">
        {/* Step 1 */}
        <div className="step step1">
          <button
            style={{
              backgroundColor: activePage === 1 ? "hsl(0, 0%, 100%)" : "transparent",
              color: activePage === 1 ? "hsl(243, 100%, 62%)" : "hsl(0, 0%, 100%)"
            }}
            onClick={() => pageHandler(1)}
          >
            1
          </button>
          <div>
            <p>step 1</p>
            <p>your info</p>
          </div>
        </div>
        {/* Step 2 */}
        <div className="step step2">
          <button
            style={{
              backgroundColor: activePage === 2 ? "hsl(0, 0%, 100%)" : "transparent",
              color: activePage === 2 ? "hsl(243, 100%, 62%)" : "hsl(0, 0%, 100%)"
            }}
            onClick={() => pageHandler(2)}
          >
            2
          </button>
          <div>
            <p>step 2</p>
            <p>select plan</p>
          </div>
        </div>
        {/* Step 3 */}
        <div className="step step3">
          <button
            style={{
              backgroundColor: activePage === 3 ? "hsl(0, 0%, 100%)" : "transparent",
              color: activePage === 3 ? "hsl(243, 100%, 62%)" : "hsl(0, 0%, 100%)"
            }}
            onClick={() => pageHandler(3)}
          >
            3
          </button>
          <div>
            <p>step 3</p>
            <p>add-ons</p>
          </div>
        </div>
        {/* Step 4 */}
        <div className="step step4">
          <button
            style={{
              backgroundColor: activePage === 4 ? "hsl(0, 0%, 100%)" : "transparent",
              color: activePage === 4 ? "hsl(243, 100%, 62%)" : "hsl(0, 0%, 100%)"
            }}
            onClick={() => pageHandler(4)}
          >
            4
          </button>
          <div>
            <p>step 4</p>
            <p>summary</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

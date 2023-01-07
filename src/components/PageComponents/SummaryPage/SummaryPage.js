import Pages from "../../UI/Pages/Pages";
// Css
import "../../UI/Pages/Pages.css";
import "./SummaryPage.css";

const SummaryPage = ({ changePage }) => {
  return <Pages>
    <div>
      <h3 className="pages-header">Finishing up</h3>
      <p className="pages-header-p">Double-check everything looks OK before confirming.</p>
    </div>
    <div className="sum-cont">
      <div className="sum-wrapper">
        <div className="sum-plan-div">
          <div>
            <p>Arcade (Monthly)</p>
            <button>Change</button>
          </div>
          <div>$9/mo</div>
        </div>
        <div>
          <div>Online service</div>
          <div>+$1/mo</div>
        </div>
        <div>
          <div>Larger storage</div>
          <div>+$2/mo</div>
        </div>
      </div>
      <div className="sum-total">
        <div>Total (per month)</div>
        <div>+$12/mo</div>
      </div>
    </div>
    <div className="buttons-div">
      <button className="go-back-btn" onClick={() => changePage("back", {})} >Go Back</button>
      <button className="next-step-btn" onClick={() => changePage("next", {})} >Confirm</button>
    </div>
  </Pages>;
};

export default SummaryPage;
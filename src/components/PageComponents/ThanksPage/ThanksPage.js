// Css
import "./ThanksPage.css";
// Logo
import logo from "../../../images/icon-thank-you.svg";

const ThanksPage = () => {
  return (
    <div className="thanks-page">
      <img src={logo} />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThanksPage;
